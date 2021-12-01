import Experience from './Experience'
import Education from './Education'
import Home from './Home'
import Profile from './Profile'
import RouteParams from './RouteParams'
import QueryStrings from './QueryStrings'
import Navbar from './Navbar'

import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'



function App() {

  // API call to fetch the user
  // const loggedUser = undefined
  const loggedUser = { username: 'Patito el pato' }

  return (
    <>
      <Navbar />

      {/* 2. Instrucciones: Importamos el Switch de rutas y el componente Route
          y vamos generando endpoints que rendericen los componentes de la vista.
          Importante el exact para la ruta principal.
      */}
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/experience" render={() => <Experience />} />
        <Route path="/education" render={() => <Education />} />
        {/* Route Params & Query Strings */}
        {/* 3. Instrucciones: Si la ruta tiene params o query pasamos las props */}
        <Route path="/detalles/:id" render={(props) => <RouteParams {...props} />} />
        <Route path="/resultados-busqueda" render={(props) => <QueryStrings {...props} />} />
        {/* Ruta protegida */}
        <Route path="/profile" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />} />
      </Switch>
    </>
  )
}

export default App
