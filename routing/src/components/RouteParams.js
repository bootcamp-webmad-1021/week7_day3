import { Link } from 'react-router-dom'

const RouteParams = props => {

    console.log('ESTE ES EL OBJETO DE PROPS DE RRD', props)


    const { id } = props.match.params

    return (
        <div>
            <h3>Obtener Route Params desde un componente</h3>

            <hr></hr>

            <p>Aquí pediriamos a la API los detalles que correspondan al id: {id}</p>


            <Link to="/">Volver a inicio</Link>

        </div>
    )
}

export default RouteParams