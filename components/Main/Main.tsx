import { KeyboardEvent, useState } from "react";
import { MainViewProps, Todolist } from "./type";
import MainView from "./MainView";

export default function Main() {
  const [todoList, setTodoList] = useState<Todolist[]>([]);

  const addList = (event: KeyboardEvent<HTMLInputElement>) => {
    const content = event.currentTarget.value;
    if (event.keyCode === 13 && content !== "") {
      setTodoList((_) => [..._, { content: content }]);
      event.currentTarget.value = "";
    }
  };

  const props: MainViewProps = {
    addList: addList,
    todolist: todoList,
  };

  return <MainView {...props} />;
}
