import React from 'react';
import styled from 'styled-components'

const LabelColor = styled.label`
    display:inline-block;
    width:30px;
    height:30px;
    margin-top:.5rem;
    background-color: ${({ color }) => color};
    border-radius:5px;
`

const InputRadio = styled.input`
    display:none;
    &:checked + label{
        border:1px solid #fff;
    }
`


const ColorBox = ({ color, handleChangeColor, isChecked }) => (
    <>
        <InputRadio
            defaultChecked={isChecked}
            id={color}
            name="color"
            onChange={() => handleChangeColor(color)}
            type="radio"
        />
        <LabelColor htmlFor={color} color={color}></LabelColor>
    </>
)

export default ColorBox