import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const activeText = { color: 'red', backgroundColor: "black" }

    return (

        <nav>
            {/* 4. Instrucciones: En lugar de usar enlaces importamos NavLinks o Links para 
                la navegación
            */}
            <NavLink to="/" exact activeClassName="active-css-class" activeStyle={activeText}>Inicio</NavLink>
            <NavLink to="/experience" activeStyle={activeText}>Experiencia</NavLink>
            <NavLink to="/education" activeStyle={activeText}>Educación</NavLink>
            <NavLink to="/profile" activeStyle={activeText}>Mi perfil *</NavLink>
            <NavLink to="/detalles/xas123d24" activeStyle={activeText}>Route Params</NavLink>
            <NavLink to="/resultados-busqueda?prenda=short&color=rojo&talla=M" activeStyle={activeText}>Query Strings</NavLink>
        </nav>
    )
}

export default Navbar