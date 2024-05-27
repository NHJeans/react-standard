import { createContext, useState, useEffect } from "react";

// 함수 컴포넌트 외부에서 Context 생성
export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TodoContext.Provider value={{ texts, onAddText }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
