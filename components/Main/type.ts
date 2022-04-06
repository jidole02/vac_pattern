import { KeyboardEventHandler, MouseEventHandler } from "react";

export interface Todolist {
  content: string;
  done: boolean;
}

export interface MainViewProps {
  addList: KeyboardEventHandler<HTMLInputElement>;
  todolist: Todolist[];
  updateTodoState: MouseEventHandler<HTMLInputElement>;
}
