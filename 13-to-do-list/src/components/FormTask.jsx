import React from 'react';
import styled from 'styled-components'
import allColors from '../styles/colors'
import ColorBox from './ColorBox';
import { generate as id } from 'shortid'

const Input = styled.input`
    border:none;
    border-bottom: 1px solid ${allColors.mainColor};
    background: none;
    outline:none;
    color: ${allColors.mainColor};
`

const Button = styled.button`
    background-color: transparent;
    border:1px solid ${allColors.mainColor};
    border-radius:5px;
    color: ${allColors.mainColor};
    padding: .3rem .5rem;
    cursor:pointer;
    outline:none;

    &:hover{
        background-color:${allColors.mainColor};
        color:#222;
    }
`

const ColorsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:150px;
    margin: 0 auto .5rem;
`

const FormTask = ({ handleChangeColor, handleSubmit, colorSelected }) => (
    <form onSubmit={handleSubmit}>
        <Input name="title" type="text" />
        <ColorsContainer>
            {
                allColors.colors.map(color => (
                    <ColorBox
                        handleChangeColor={handleChangeColor}
                        color={color}
                        key={id()}
                        isChecked={colorSelected === color}
                    />
                ))
            }
        </ColorsContainer>
        <Button>Add Task</Button>
    </form>

)

export default FormTask

