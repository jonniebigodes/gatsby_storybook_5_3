import React from "react"
import styled from "styled-components"
import Task from './Task'
const TasksWrapper = styled.div`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 3rem;
  width: 100%;
`
const Tasks = ({taskList }) => {
  if (taskList.length === 0) {
    return (
      <TasksWrapper>
        <h1>Good news, you have no tasks! All good</h1>
      </TasksWrapper>
    )
  }
  return (
    <TasksWrapper>
      {taskList.map(task => (
        <Task taskInfo={task} key={task.node.id}/>
      ))}
    </TasksWrapper>
  )
}
export default Tasks
