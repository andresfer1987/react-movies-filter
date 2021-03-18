import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header className="header">
      <div className="header__title"><span>{title}</span></div>
    </header>
    )
}

Header.propTypes = {

}

export default Header
