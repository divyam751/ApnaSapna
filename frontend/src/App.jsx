import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllLinks from "./routes/AllLinks";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AllLinks />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
