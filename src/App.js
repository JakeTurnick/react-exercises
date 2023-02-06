import "./App.css";
import A from "./a/a.js";
import B from "./b/b";
import C from "./c/c";
import D from "./d/d";
import E from "./e/e";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Toggle for displaying each project */}
        there will be buttons here
      </header>
      <main>
        <h1>A - D hidden while working on E</h1>
        {/* <A />
        <B />
        <C />
        <D /> */}
        <E />
      </main>
      
    </div>
  );
}

export default App;
