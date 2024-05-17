const TodoForm = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    setTodos((prevTodo) => [nextTodo, ...prevTodo]);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목" name="title" required />
        <input type="text" placeholder="내용" name="content" required />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};
export default TodoForm;
