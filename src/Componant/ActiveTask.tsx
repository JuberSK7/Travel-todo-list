import React from 'react'
import { ITask } from '../Interface'
import styled from 'styled-components'


interface Props {
  task: ITask;
  doneTask(taskNameToDelete: string): void;
}

const ActiveTask = ({ task, doneTask }: Props) => {
  return (
    <HeroSection>
      <Contain>
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>

        <button onClick={() => {
          doneTask(task.taskName)
        }}>X</button>
      </Contain>
    </HeroSection>
  )
}

export default ActiveTask


const HeroSection = styled.div`
width: 500px;
  height: 50px;
  display: flex;
  color: white;
  margin: 15px;
`

const Contain = styled.div`
flex: 80%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

span {
  display: grid;
  place-items: center;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  font-size: 24px;
  border-radius: none;
  background-color: green;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
}

Button {
  height: 50px;
  width: 200px ;
  cursor: pointer;
  display: flex;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 24px;
  font-weight: 600;    
  justify-content: center;
  align-items: center;
  color: white;
  background-color: red;
}
`