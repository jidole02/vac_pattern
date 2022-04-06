import { MainViewProps } from "./type";
import styled from "@emotion/styled";

export default function MainView({
  addList,
  todolist,
  updateTodoState,
}: MainViewProps) {
  return (
    <Wrapper>
      <Container>
        <h1>Todo List</h1>
        <h3>남은 할일 {todolist.filter((_) => _.done === false).length}개</h3>
        <input placeholder="할 일을 입력하세요" onKeyDown={addList} />
        <ListBox>
          {todolist.map((_, index) => (
            <TodoBox key={index}>
              <input
                type="checkbox"
                id={`todo_checkbox${index}`}
                name={index.toString()}
                onClick={updateTodoState}
              />
              <label
                htmlFor={`todo_checkbox${index}`}
                style={
                  _.done
                    ? { color: "grey", textDecoration: "line-through" }
                    : {}
                }
              >
                {_.content}
              </label>
            </TodoBox>
          ))}
        </ListBox>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.article`
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgb(100, 100, 100, 0.1);
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  & input {
    border: 1px solid grey;
    padding: 15px 20px;
    border-radius: 5px;
    margin-top: 20px;
  }
  & h3 {
    margin-top: 5px;
    font-size: 13px;
    color: grey;
    font-weight: 500;
  }
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  overflow-y: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #85ffae;
    border-radius: 24px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ebebeb;
  }
`;

const TodoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  & label {
    cursor: pointer;
  }
  & input {
    margin: 0;
  }
`;
