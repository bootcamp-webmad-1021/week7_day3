import { Component } from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = { value: 0 }
        console.log("ME CONSTRUYO!")
    }

    incrementCounter = () => this.setState({ value: this.state.value + 1 })

    componentDidMount = () => console.log("HE TERMINADO DE MONTARME")

    componentDidUpdate = () => console.log("ME ACTUALIZO")

    componentWillUnmount = () => console.log("ME DESMONTO, YA NO SOY VISIBLE")

    render() {

        console.log("ME PINTO TAMBIÉN")

        return (
            <>
                <h1>Contador con valor {this.state.value}</h1>
                <button onClick={this.incrementCounter}>Aumentar</button>
            </>
        )
    }
}

export default Counter