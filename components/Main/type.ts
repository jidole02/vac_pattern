import { KeyboardEventHandler } from "react";

export interface Todolist {
  content: string;
}

export interface MainViewProps {
  addList: KeyboardEventHandler<HTMLInputElement>;
}
