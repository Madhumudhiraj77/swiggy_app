import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Proxy server is running. Use /proxy for API calls.");
});

// Proxy route for Swiggy API
app.get("/proxy", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "API URL is required" });
  }

  try {
    // Decode the URL
    const decodedUrl = decodeURIComponent(url);
    console.log("Decoded URL: ", decodedUrl);

    const response = await fetch(decodedUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",  // Add User-Agent
        "Origin": "https://swiggy-app-phi.vercel.app"
       },
    });

    // Check if the response is successful
    if (!response.ok) {
      console.log("Fetch error: ", response.statusText);
      return res.status(response.status).json({ error: "Failed to fetch data" });
    }

    const data = await response.json();
    res.status(response.status).json(data);

  } catch (error) {
    console.error("Error in proxy server: ", error);
    res.status(500).json({ error: "Failed to fetch Swiggy API", details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
