import React from 'react'

 function Headerr() {
  return (
    <header className='header '>

      <div className="header__row container">

        <div className="header__logo">
          <h1>LogoType</h1>
        </div>

          <nav className='header__nav'>
            <a className='header__link' href="#">Home</a>
            <a className='header__link' href="#">Features</a>
            <a className='header__link' href="#">How It Works</a>
            <a className='header__link' href="#">Gett Apps</a>
          </nav>

        <div className="header__btns">
          <button className='header__btn'>Sing Up</button>
        </div>

      </div>


      <div className="header__content container">
          <h3 className='header__content-h3'>ADDING FUN TO YOUR LIFE.</h3>
          <h1 className='header__content-h1'>Beast Games At <br /> Best Price.</h1>
          <p className='header__content-p'>Lorem ipsum dolor, sit amet consectetur  adipisicing elit. <br /> Iure placeat pariatur blure page nexxt<br /> dolores beatae suscipit porro non!</p>

          <div className="header__content-btns">
          <button className='header__content-btn'>Try For Free</button>
          <button className='header__content-btn'>Get The Apps</button>
          </div>
      </div>

    </header>
  )
}

export default Headerr