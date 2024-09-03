import "./App.css";
import InputEl1 from "./InputCon/InputEl_1";
import InputEl2 from "./InputCon/InputEl_2";
import InputEl3 from "./InputCon/InputEl_3";
import InputEl4 from "./InputCon/InputEl_4";
import SelectEl from "./InputCon/SelectEl";
import SearchCon from "./ListArea/SeachCon";
import ListKey_0 from "./ListArea/ListKey_0";
import ListKey_1 from "./ListArea/ListKey_1";
import ListKey_2 from "./ListArea/ListKey_2";
import ListKey_3 from "./ListArea/ListKey_3";
import ListKey_4 from "./ListArea/ListKey_4";

function App() {
  return (
    <>
      <header>
        <h1 className="header">연락처 리스트</h1>
      </header>
      <main className="main">
        <div className="AllInput">
          <InputEl1 />
          <InputEl2 />
          <InputEl3 />
          <InputEl4 />
          <SelectEl />
        </div>
        <SearchCon />
      </main>
      <ListKey_0 />
      <ListKey_1 />
      <ListKey_2 />
      <ListKey_3 />
      <ListKey_4 />
    </>
  );
}

export default App;
