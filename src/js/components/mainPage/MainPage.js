import React from 'react'
import ChooseMenu from './ChooseMenu'
import IconMenu from './IconMenu'
import {Switch, Route, Link} from 'react-router-dom'

/**
 * Pagina principal del juego, es la que se abre
 * cuando se accede a german1608.github.io/fcc-ttt/
 */
class MainPage extends React.Component {

  /**
   * Constructora, se encarga de configurar todo
   * de inicio. Tiene ciertos atributos
   * @attr state fijo de los componentes de React
   * @attr options es para evitar las secuencias de if (condition) ...
   */
  constructor (props) {
    super(props)
    this.state = {
      numPlayers: null,
      icon: null
    }
    this.options = {
      null: '/',
      '1': '/icon',
      '2': '/game'
    }
    this.choosePlayer = this.choosePlayer.bind(this)
    this.chooseIcon = this.chooseIcon.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  /**
   * Retorna una funcion que sera el clickHandler de
   * algun <Button /> que le permitira cambiar el
   * numero de jugadores
   * 
   * TODO: Ver si el argumento `e` de la funcion
   * retorno es necesario o no
   * TODO: Ver si la funcion puede ser cambiada a un
   * arrow function ya que no haria falta hacer rebinding
   * de `this`
   */
  choosePlayer (i) {
    return function (e) {
      this.setState({
        numPlayers: i
      })
    }.bind(this)
  }

  /**
   * Retorna una funcion que sera el clickHandler de
   * algun <Button /> que le permitira cambiar el
   * icono del jugador en caso de que este desee jugar
   * contra la CPU
   *
   * TODO: Ver si el argumento `e` de la funcion
   * retorno es necesario o no
   * TODO: Ver si la funcion puede ser cambiada a un
   * arrow function ya que no haria falta hacer rebinding
   * de `this`
   */
  chooseIcon (i) {
    return function (e) {
      this.setState({
        icon: i
      })
    }.bind(this)
  }

  /**
   * Funcion que nos permite regresar al menu principal
   */
  handleBack (e) {
    this.setState({
      numPlayers: null,
      icon: null
    })
  }

  render () {

    /**
     * No quiero andar escribiendo a cada rato this.loQueSea
     * Aprovechemos la novedad de ES6, Destructuring, que nos
     * permite extraer atributos de un objeto
     *
     * Estoy extrayendo numPlayers e icon para saber cual es el estado
     * actual del componente.
     */
    const {chooseIcon, choosePlayer, state: {numPlayers, icon}, 
      handleBack} = this

    /**
     * Lo siguiente es equivalente a path = this.options[numPlayers]
     * Se coloca el numPlayers entre `[` por que contiene cosas
     * que comienzan por caracteres no permitidos para hacer
     * options.algo. usar options['attr] nos proporciona esa ventaja
     *
     */
    let {options: {[numPlayers]: path}} = this

    // Query por si vamos a jugar o no
    const gameQuery = `?p=${numPlayers}&i=${icon}`
    return (
      <div className='hero is-fullheight'>
        <div className='hero-body main-page'>
          <h1 className='has-text-centered'>Tic Tac Toe</h1>

          {/* Para decidir que componente de Menu se mostrara */}
          <Switch>
            { /**
               * Cada <Route /> toma dos prametros
               * @param path Si el path actual del url hace match
               * con ese path, se mostrara el componente en 
               * render
               * @param render componente a mostrar, admite ciertos
               * tipos (vease la documentacion de react-router-dom)
               */ }
            <Route exact path='/'
              render={() => <ChooseMenu onClick={choosePlayer} />} />
            <Route exact path='/icon'
              render={() => <IconMenu onClick={chooseIcon} />} />
          </Switch>

          {/* Para decdir que link se mostrara, es posible
           que se pueda mezclar con el Switch de arriba */}
          <Switch>
            { /**
               * TODO: Refactorizar esta cochinada
               */ }
            <Route exact path='/'
              render={() => {
                return (
                  <div>
                    {numPlayers === null
                        ? ''
                        : <Link to={path + gameQuery} className='button'>
                          {numPlayers === 1
                              ? 'Next'
                              : 'Let\'s play!'
                          }</Link>
                    }
                  </div>
                )
              }} />
            <Route exact path='/icon'
              render={() => {
                return (
                  <div className='flex'>
                    <Link to='/' className='button' 
                      onClick={handleBack}
                      style={{
                        marginRight: icon === null ? '' : '.75rem'
                      }} >
                      Back
                    </Link>
                    {icon === null
                        ? ''
                        : <Link to={'/game' + gameQuery} className='button' >Play!</Link>
                    }
                  </div>
                )
              }}
            />
          </Switch>

        </div>
      </div>
    )
  }
}

export default MainPage
