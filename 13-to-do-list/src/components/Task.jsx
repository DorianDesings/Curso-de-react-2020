import React from 'react';
import styled from 'styled-components'

const TaskContainer = styled.div`
    display:grid;
    grid-template-columns: 30px 1fr 50px;
    justify-items:start;
    align-items:center;
    padding: 0 1rem;
    background-color:${({ color }) => color};
    width:100%;
    max-width:250px;
    margin: 1rem auto;
    border-radius:5px;
`

const TaskButton = styled.button`
    font-size:.8rem;
    background-color:transparent;
    border: 1px solid #fff;
    color:#fff;
    padding:.3rem .5rem;
    border-radius:10px;
    cursor:pointer;
    outline:none;

    &:hover{
        background-color:#fff;
        color:#222;
    }
`

const TaskText = styled.p`
    color:#fff;
    text-decoration:${({ done }) => done ? 'line-through' : 'none'};
`

const Task = ({ color, title, done, handleCompleteTask, handleDeleteTask }) => (
    <TaskContainer color={color}>
        <input
            type="checkbox"
            onChange={handleCompleteTask}
            defaultChecked={done}
        />
        <TaskText done={done}>{title}</TaskText>
        <TaskButton onClick={handleDeleteTask}>Delete</TaskButton>
    </TaskContainer>
)

export default Task