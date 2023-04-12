import { useState } from 'react'

import '../styles/Navbar.css'

import ChevronDown from '../icons/chevron-down.svg'
import ChevronUp from '../icons/chevron-up.svg'
import Bars from '../icons/bars.svg'
import Close from '../icons/close.svg'
import Stats from '../icons/stats.svg'
import Gear from '../icons/gear.svg'
import CloseCircle from '../icons/close-circle.svg'

export function Navbar({ section }) {
  const [userOptionsIsOpen, setUserOptionsIsOpen] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleUserOptions = () => {
    setUserOptionsIsOpen(!userOptionsIsOpen)
  }

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
    setUserOptionsIsOpen(false)
  }

  const handleUserOptionsItemClick = (event) => {
    event.stopPropagation()
  }

  return (
    <header className="headerApp">
      <nav className="navigation">
        <div className="navigation__title">
          <div className="navigation__logo">
            <span className="icon">🗺️</span>
            <span className="text">Predial</span>
          </div>
          <div className="navigation__breadcrumb">
            <span className="separator">→</span>
            <span>{section}</span>
          </div>
        </div>
        <div
          className={
            menuIsOpen ? 'navigation__menu isOpen' : 'navigation__menu'
          }
        >
          <ul>
            <li>
              <button className="userOptions" onClick={toggleUserOptions}>
                <div className="userOptions__button">
                  <div>
                    <span className="name">
                      Domingo De Jesus Murillo Velasco
                    </span>
                    <span className="role">Aux. Administrativo</span>
                  </div>
                  <img
                    src={userOptionsIsOpen ? ChevronUp : ChevronDown}
                    alt=""
                  />
                </div>
                <ul
                  className={
                    userOptionsIsOpen
                      ? 'userOptions__list isOpen'
                      : 'userOptions__list'
                  }
                >
                  <li>
                    <img src={Gear} alt="" />
                    <a
                      href="#"
                      className="userOptions__item"
                      onClick={handleUserOptionsItemClick}
                    >
                      Configuración de la cuenta
                    </a>
                  </li>
                  <li>
                    <img src={Stats} alt="" />
                    <a
                      href="#"
                      className="userOptions__item"
                      onClick={handleUserOptionsItemClick}
                    >
                      Estadísticas
                    </a>
                  </li>
                  <li>
                    <img src={CloseCircle} alt="" />
                    <a
                      href="#"
                      className="userOptions__item button--danger"
                      onClick={handleUserOptionsItemClick}
                    >
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </button>
            </li>
          </ul>
        </div>
        <div className="navigation__mobileMenu">
          <button className="button" onClick={toggleMenu}>
            <img src={menuIsOpen ? Close : Bars} alt="" />
          </button>
        </div>
      </nav>
    </header>
  )
}
