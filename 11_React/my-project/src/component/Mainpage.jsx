import styled from 'styled-components';
import SubjectList from './SubjectList';
import TodoList from './TodoList';
import TodoInsert from './TodoInsert';
import dataJson from '../data.json';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import dayjs from 'dayjs';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  margin: 0 auto;
  max-width: 1040px;
  min-width: 800px;
  margin-top: 40px;
  background: #f2f2f2;
  border-radius: 8px;
  border: 1px solid lightgray;
  overflow: auto;
  min-height: 720px;
`;

const SubjectArea = styled.div`
  padding: 40px 0 0 20px;
  width: 20%;
  background-color: #f2f2f2;
`;
const ContentArea = styled.div`
  margin-top: 40px;
  padding: 16px;
  flex: 1;
  background-color: #d2d1e9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
`;

function Mainpage() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : dataJson;
  });
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || dataJson;
    setTodos(dbTodos);
  }, []);
  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  
  const handleOnDone = (id) => {
    setTodos(todos.map(todo => todo.todoNo === id ? {...todo, done: !todo.done} : todo))
    setFilteredTodos(filteredTodos.map(todo => todo.todoNo === id ? {...todo, done: !todo.done} : todo))
  };

  const handleImportant = (id) => {
    setTodos(todos.map(todo => todo.todoNo === id ? {...todo, important: !todo.important} : todo))
    setFilteredTodos(filteredTodos.map(todo => todo.todoNo === id ? {...todo, important: !todo.important} : todo))
  };

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.todoNo !== id));
    setFilteredTodos(filteredTodos.filter(todo => todo.todoNo !== id));
  };

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
    setFilteredTodos([...filteredTodos, todo]);
  };

  const handelUpdate = (text, id) => {
    setTodos(todos.map(todo => todo.todoNo === id ? {...todo, todo: text} : todo))
    setFilteredTodos(filteredTodos.map(todo => todo.todoNo === id ? {...todo, todo: text} : todo))
  };

  const handleImportantList = () => {
    setFilteredTodos(todos.filter(todo => todo.important))
  };

  const handleHomeList = () => {
    setFilteredTodos(todos)
    console.log(filteredTodos);
  };

  const handleTodayList = () => {
    setFilteredTodos(todos.filter(todo => dayjs(todo.dueDate).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')))
  };

  const handleSortDueDate = () => {
    const newList = [...filteredTodos].sort(function(a,b) {
      
      return dayjs(a.dueDate) - dayjs(b.dueDate);
    });
    setFilteredTodos(newList);
  }
  const handleSortTodo = () => {
    const newList = [...filteredTodos].sort(function(a,b) {
      
      return a.todo.localeCompare(b.todo);
    });
    setFilteredTodos(newList);
  }
  const handleSortCreateDate = () => {
    const newList = [...filteredTodos].sort(function(a,b) {
      
      return dayjs(a.createDate) - dayjs(b.createDate);
    });
    setFilteredTodos(newList);
  }

  return (
    <Wrapper>
      <SubjectArea>
        <SubjectList 
          handleImportantList={handleImportantList}
          handleHomeList={handleHomeList}
          handleTodayList={handleTodayList}
          handleSortDueDate={handleSortDueDate}
          handleSortTodo={handleSortTodo}
          handleSortCreateDate={handleSortCreateDate}
        />
      </SubjectArea>
      <ContentArea>
        <TodoList
          todos={filteredTodos}
          handleOnDone={handleOnDone}
          handleImportant={handleImportant}
          handleRemove={handleRemove}
          handelUpdate={handelUpdate}
        />
        <TodoInsert handleInsert = {handleInsert}/>

      </ContentArea>
    </Wrapper>
  );
};

export default Mainpage;