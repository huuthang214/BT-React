import './App.css';
import Body from './Body/Body';
import Header from "./Header/Header.jsx"
function App() {
  return (
    <div style={{ backgroundImage: "url(/glassesImage/background.jpg)", height: "100vh", width: "100%", backgroundSize: "cover" }}>
      <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <Header />
        <Body />
      </div>

    </div>
  );
}

export default App;
