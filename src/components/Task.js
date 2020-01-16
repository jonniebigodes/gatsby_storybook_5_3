import React from "react"
import styled, { css } from "styled-components"

const TaskWrapper = styled.div`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 3rem;
  width: 100%;
  ${props =>
    props.disabled &&
    css`
      background: #aaa;
    `}
  transition: all ease-out 150ms;
`

const TaskInput = styled.input`
  width: 100%;
  text-overflow: ellipsis;
  ${props =>
    props.disabled &&
    css`
      color: #aaa;
    `}
`

const Task = ({ taskInfo }) => (
  <TaskWrapper>
    <TaskInput value={taskInfo.node.title} readonly placeholder="Input title" />
  </TaskWrapper>
)
export default Task