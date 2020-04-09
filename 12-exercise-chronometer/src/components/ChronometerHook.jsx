import React, { useState, useEffect } from 'react';

import { generate as id } from 'shortid'

import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({ disabled }) => disabled ? 'transparent' : '#387EF5'};
    border: ${({ disabled }) => disabled ? '1px solid #387EF5' : 'none'};
    outline:none;
    border-radius:15px;
    padding:.5rem;
    margin: .5rem;
    color: ${({ disabled }) => disabled ? '#444' : '#fff'};
`

const List = styled.ul`
    list-style:none;
    padding-left:0;
`

const Chronometer = () => {

    const [clock, setClock] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0
    })

    const [running, setRunning] = useState(false)
    const [allTimestamps, setAllTimestamps] = useState([])
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (running) {
            const interval = setInterval(() => {
                tick()
            }, 100)
            return () => clearInterval(interval)
        }

    }, [running, clock]);

    //Función que se llama con el boton start
    const handleStartClick = () => {
        if (!running) {
            setRunning(true)
            setStarted(true)
        }
    }

    //Conteo del cronómetro
    const tick = () => {
        let { hours, minutes, seconds, miliseconds } = clock
        miliseconds = miliseconds + 1

        if (miliseconds === 10) {
            miliseconds = 0
            seconds = seconds + 1
        }

        if (seconds === 60) {
            seconds = 0
            minutes = minutes + 1
        }

        if (minutes === 60) {
            minutes = 0
            hours = hours + 1
        }

        updateTimer(hours, minutes, seconds, miliseconds)
    }

    //Función que se llama con el boton stop
    const handleStopClick = () => {
        if (running) {
            setRunning(false)
        }
    }

    //Función que se llama con el boton timestamp
    const handleTimestamp = () => {
        const timestamp = {
            hours: clock.hours,
            minutes: clock.minutes,
            seconds: clock.seconds,
            miliseconds: clock.miliseconds
        }

        setAllTimestamps([
            ...allTimestamps,
            timestamp
        ])
    }

    //Función que se llama con el boton reset
    const handleReset = () => {
        updateTimer(0, 0, 0, 0)
        setAllTimestamps([])
        setStarted(false)
    }

    //Función de actualización del estado
    const updateTimer = (hours, minutes, seconds, miliseconds) => {
        setClock({ hours, minutes, seconds, miliseconds })
    }

    const addZero = (value) => (
        value < 10 ? `0${value}` : value
    )

    let { hours, minutes, seconds, miliseconds } = clock
    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)
    miliseconds = addZero(miliseconds)
    return (
        <>
            <h3>{`${hours} : ${minutes} : ${seconds} : ${miliseconds}`}</h3>
            <Button disabled={running} onClick={handleStartClick}> START </Button>
            <Button disabled={!running} onClick={handleStopClick}> STOP </Button>
            <Button disabled={!running} onClick={handleTimestamp}> TIMESTAMP </Button>
            {started && <Button disabled={running} onClick={handleReset}> RESET </Button>}

            <List>
                {allTimestamps.map((timestamp, idx) => (
                    <li key={id()}>
                        {`
                                ${idx + 1} -
                                ${addZero(timestamp.hours)} :
                                ${addZero(timestamp.minutes)} :
                                ${addZero(timestamp.seconds)} :
                                ${addZero(timestamp.miliseconds)}
                            `}
                    </li>
                ))}

            </List>
        </>
    )
}

export default Chronometer;