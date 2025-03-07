import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (React app)
app.use(express.static(path.join(__dirname, "../dist")));

// Proxy route for Swiggy API
app.get("/proxy", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "API URL is required" });
  }

  try {
    const decodedUrl = decodeURIComponent(url);
    console.log(`[Proxy Request] Decoded URL: ${decodedUrl}`);

    const response = await fetch(decodedUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    if (!response.ok) {
      console.error(`❌ Fetch error: ${response.status} - ${response.statusText}`);
      return res.status(response.status).json({ error: "Failed to fetch data", details: response.statusText });
    }

    const data = await response.json();

    // Add headers to disable caching
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    return res.json(data);

  } catch (error) {
    console.error("❌ Error in proxy server:", error);
    return res.status(500).json({ error: "Failed to fetch Swiggy API", details: error.message });
  }
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Export the Express app for Vercel
export default app;


// // Local working
// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Proxy route for Swiggy API
// app.get("/proxy", async (req, res) => {
//   const { url } = req.query;

//   if (!url) {
//     return res.status(400).json({ error: "API URL is required" });
//   }

//   try {
//     const decodedUrl = decodeURIComponent(url);
//     console.log(`[Proxy Request] Decoded URL: ${decodedUrl}`);

//     const response = await fetch(decodedUrl, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
//       },
//     });

//     if (!response.ok) {
//       console.error(`❌ Fetch error: ${response.status} - ${response.statusText}`);
//       return res.status(response.status).json({ error: "Failed to fetch data", details: response.statusText });
//     }

//     const data = await response.json();

//     // Add headers to disable caching
//     res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
//     res.setHeader("Pragma", "no-cache");
//     res.setHeader("Expires", "0");

//     return res.json(data);

//   } catch (error) {
//     console.error("❌ Error in proxy server:", error);
//     return res.status(500).json({ error: "Failed to fetch Swiggy API", details: error.message });
//   }
// });

// // Catch-all route for unmatched routes
// app.use((req, res) => {
//   res.status(404).json({ error: "Route not found" });
// });

// // Start the server locally
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running locally on port ${PORT}`);
// });