import React, { FC, useState, ChangeEvent } from 'react';
//import './App.css';
import { ITask } from './Interface'
import ActiveTask from './Componant/ActiveTask'
import styled from 'styled-components'

// FC is Functional Component//
const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {

    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask("")
    setDeadline(0)

  };

  const doneTask = (taskNameToDelete: string): void => {

    setTodo(todo.filter((task) => {
      return task.taskName != taskNameToDelete;
    }))
  }
  return (
    <Menu>
      <Header>
        <Container>
          <input
            type='text'
            placeholder='Enter task...'
            name='task'
            value={task}
            onChange={handleChange}
          />

          <input
            type='number'
            placeholder='Deadline of Task'
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </Container>
        <button onClick={addTask}>Add todo</button>
      </Header>
      <Section>
        {todo.map((task: ITask, key: number) => {
          return < ActiveTask key={key} task={task} doneTask={doneTask} />
        })}
      </Section>
    </Menu>
  );
}

export default App;

const Menu = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100vw;
height: 100vh;
font-family: 'Courier New', Courier, monospace;
`
const Header = styled.div`
flex: 30%;
background-color: #00a8a8;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

input {
  width: 200px;
  height: 40px;
  font-size: 18px;
  border: 2px solid black;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 10px;
}

Button {
  width: 80px;
  height: 90px;
  border: 4px solid black;
  background-color: rgb(15, 236, 15);
  color: black;
  font-size: 18px;
  font-weight: 700;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  padding-left: 10px;
  cursor: pointer;
}
`
const Container = styled.div`
display: flex;
flex-direction: column;


`

const Section = styled.div`
width: 100%;
flex: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-top: 50px;
`
