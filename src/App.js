import "./App.css";
import SignInSide from "./components/Signin/SignInSide";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignInSide />
        <p>WonderfulBohoCo coming soon!</p>
      </header>

      <div className="App-footer">
        <footer>By Tom Hester</footer>
      </div>
    </div>
  );
}

export default App;
