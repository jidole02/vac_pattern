import styled from "@emotion/styled";
import { MainViewProps } from "./type";

export default function MainView({ addList }: MainViewProps) {
  return (
    <Wrapper>
      <Container>
        <h1>Todo List</h1>
        <input placeholder="할 일을 입력하세요" onKeyDown={addList} />
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
  padding: 30px;
`;
