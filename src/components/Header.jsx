import React from 'react'


function Header({text}) {
  const headerStyles = {
    backgroundColor: 'black', 
    color: 'red'}

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>
                {text}
            </h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
}



export default Header