import { KeyboardEvent, useState } from "react";
import MainView from "./MainView";
import { MainViewProps, Todolist } from "./type";

export default function Main() {
  const [todoList, setTodoList] = useState<Todolist[]>([]);

  const addList = (event: KeyboardEvent<HTMLInputElement>) => {
    const content = event.currentTarget.value;
    if (event.keyCode === 13) {
      setTodoList((_) => [..._, { content: content }]);
      event.currentTarget.value = "";
    }
  };

  const props: MainViewProps = {
    addList: addList,
  };

  return <MainView {...props} />;
}
