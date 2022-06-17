import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Effect from "./Components/Hooks/Effect";
import State from "./Components/Hooks/State";
import Nav from "./Components/Hooks/Nav";
import Param from "./Components/Hooks/Params";
import Error from "./Components/Hooks/Error";
import Ref from "./Components/Hooks/Ref";
import ComA from "./Components/Hooks/Context/ComA";
import Reducer from "./Components/Hooks/Reducer";
import Memo from "./Components/Hooks/Memo";
import Callback from "./Components/Hooks/Callback/Callback";

import Test from "./Components/Hooks/ReactMemo/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index path="/" element={<State />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/params/:name" element={<Param />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/context" element={<ComA />} />
          <Route path="/test" element={<Test />} />


          <Route element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <Test /> */}
    </div>
  );
}

export default App;
