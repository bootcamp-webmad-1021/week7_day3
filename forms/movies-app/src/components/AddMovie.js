import { Component } from "react";

import './AddMovie.css'

class NewMovieForm extends Component {

    constructor() {
        super()
        this.state = {
            title: "",
            director: "",
            rating: "",
            hasOscar: false
        }
    }

    handleTitle = (e) => {
        const input = e.currentTarget
        const title = input.value
        this.setState({
            title: title
        })
    }

    handleChange = (e) => {
        let { name, value, type, checked } = e.currentTarget

        if (type === "checkbox") {
            value = checked
        }

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.addMovie(this.state)
        //llamada al server (API)
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} className="new-movie-form">

                <label>
                    Título: <input onChange={this.handleChange} value={this.state.title} type="text" name="title" />
                </label>

                <label>
                    Director/a: <input onChange={this.handleChange} value={this.state.director} type="text" name="director" />
                </label>

                <label>
                    Puntuación: <input onChange={this.handleChange} value={this.state.rating} type="text" name="rating" />
                </label>

                <label>
                    ¿Ganó Oscar?: <input onChange={this.handleChange} checked={this.state.hasOscar} type="checkbox" name="hasOscar" />
                </label>

                <input type="submit" value="Crear película" />
            </form>
        )
    }
}


export default NewMovieForm