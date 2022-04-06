import { KeyboardEvent, MouseEvent, useState } from "react";
import { MainViewProps, Todolist } from "./type";
import MainView from "./MainView";

export default function Main() {
  const [todoList, setTodoList] = useState<Todolist[]>([]);

  const addList = (event: KeyboardEvent<HTMLInputElement>) => {
    const content = event.currentTarget.value;
    if (event.keyCode === 13 && content !== "") {
      setTodoList((_) => [..._, { content: content, done: false }]);
      event.currentTarget.value = "";
    }
  };

  const updateTodoState = (event: MouseEvent<HTMLInputElement>) => {
    const list = [...todoList];
    const checkbox = document.getElementById(
      event.currentTarget.id
    ) as HTMLInputElement;
    const index = parseInt(checkbox.name);
    const isCheck = checkbox.checked;

    isCheck ? (list[index].done = true) : (list[index].done = false);
    setTodoList([...list]);
  };

  const props: MainViewProps = {
    addList: addList,
    todolist: todoList,
    updateTodoState: updateTodoState,
  };

  return <MainView {...props} />;
}
