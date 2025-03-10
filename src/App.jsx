import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import appStore from "./utils/appStore";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the styles for Toastify
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <AppRoutes />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
