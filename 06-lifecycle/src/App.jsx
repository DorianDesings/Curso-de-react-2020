import React, { Component } from 'react'

import Header from './components/Header'
import Clock from './components/Clock'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            post: {},
            message: 'Lifecycle',
            showClock: true
        }
        //Event binding (Bindear eventos)
        // console.log('CONSTRUCTOR')
    }

    async componentDidMount() {
        //PETICIONES HTTP
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        const { id } = this.state
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        //ACTUALIZACIÓN DEL ESTADO
        this.setState({ post: data })
        //ASIGNACIÓN DE EVENTOS
        // window.addEventListener('scroll', () => console.log('SCROLL'))
    }

    handlerId = () => {
        this.setState({ id: this.state.id + 1 })
    }

    handlerMessage = () => {
        this.setState({ message: 'Lifecycle Cambiado' })
    }

    handlerUpdate = () => {
        //USADLO LAS MENORES VECES POSIBLES, NUNCA SI ES POSIBLE
        this.forceUpdate()
    }

    handlerClock = () => {
        this.setState({ showClock: !this.state.showClock })
    }

    async componentDidUpdate(prevProps, prevState) {
        // console.log(prevState.id, this.state.id)
        console.log('UPDATE')
        if (prevState.id !== this.state.id) {
            const { id } = this.state
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json()
            //ACTUALIZACIÓN DEL ESTADO
            this.setState({ post: data })
        }
    }

    render() {
        // console.log('RENDER')
        //HACER UN SETSTATE GENERA UN BUCLE INFINITO
        // this.setState({ number: 23 })
        const { post } = this.state
        if (true) {
            return (
                <>
                    <Header title={this.state.message} />
                    {this.state.showClock && <Clock />}

                    <div>
                        {/* {
                            posts.map(post => (
                                <Fragment key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </Fragment>
                            ))
                        } */}
                        {
                            <>
                                <button onClick={this.handlerId}>Next ID</button>
                                <button onClick={this.handlerMessage}>Change Header</button>
                                <button onClick={this.handlerUpdate}>Force Update</button>
                                <button onClick={this.handlerClock}>
                                    {
                                        this.state.showClock ?
                                            "Hide Clock"
                                            :
                                            "Show Clock"
                                    }
                                </button>
                                <h2>Post con id: {this.state.id}</h2>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </>
                        }
                    </div>
                </>
            );
        }

        //DISPONIBLE DESDE LA VERSIÓN 16
        else return null
    }
}


export default App;