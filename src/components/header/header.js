import React from 'react'

const Header = ({title}) => {
    return (
        <header className="header">
      <div className="header__title"><span>{title}</span></div>
    </header>
    )
}

export default Header
