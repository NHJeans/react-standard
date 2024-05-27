import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import TodoContextProvider from "./context/TodoContextProvider";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.

  return (
    <TodoContextProvider>
      <h1>Text Input and Listing</h1>
      <TextInput />
      <TextList />
    </TodoContextProvider>
  );
}

export default App;
