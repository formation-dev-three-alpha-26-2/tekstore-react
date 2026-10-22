import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes"
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes/>
    </div>
  );
};

export default App;
