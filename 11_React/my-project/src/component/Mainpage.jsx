import styled from 'styled-components';
import SubjectList from './SubjectList';
import TodoList from './TodoList';
import TodoInsert from './TodoInsert';
import TitleInsert from './TitleInsert';
import dataJson from '../data.json';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  margin: 0 auto;
  max-width: 1040px;
  min-width: 800px;
  height: 800px;
  margin-top: 40px;
  background: #f2f2f2;
  border-radius: 8px;
  border: 1px solid lightgray;
  overflow: hidden;
`;

const SubjectArea = styled.div`
  padding: 80px 8px 0;
  width: 30%;
  background-color: #f2f2f2;
`;
const ContentArea = styled.div`
  margin-top: 40px;
  padding: 16px;
  flex: 1;
  background-color: #d2d1e9;
  border-radius: 8px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;

function Mainpage(props) {
  const [todos, setTodos] = useState(dataJson.content);

  
  const handleOnDone = (id) => {
    setTodos(todos.map(todo => todo.todoNo === id ? {...todo, done: !todo.done} : todo))
  }
  const handleImportant = (id) => {
    setTodos(todos.map(todo => todo.todoNo === id ? {...todo, important: !todo.important} : todo))
  }

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.todoNo !== id));
  }

  const handleInsert = (text, date) => {
    const todo = {
      todoNo: uuidv4(),
      todo: text,
      createDate: new Date(),
      dueDate: date,
      done : false,
      important : false
    };
    setTodos([...todos, todo]);
  }


  return (
    <Wrapper>
      <SubjectArea>
        <SubjectList></SubjectList>
      </SubjectArea>
      <ContentArea>
        <TitleInsert />
        <TodoList
          todos={todos}
          handleOnDone={handleOnDone}
          handleImportant={handleImportant}
          handleRemove={handleRemove}
          
          
        />
        <TodoInsert handleInsert = {handleInsert}/>

      </ContentArea>
    </Wrapper>
  );
};

export default Mainpage;