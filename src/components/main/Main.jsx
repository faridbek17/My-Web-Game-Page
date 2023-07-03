import React from 'react'

 function Main() {
  return (
    <div className='main'>
      <div className="main__content container">
        <div className="main__content-1">
            <h1 className='main__content-title'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Officiis.</h1>
            <p className='main__content-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo <br /> facilis laudantium nobis, delectus eos!</p>
        </div>
        <div className="main__content-2">

          <div className="main__content-box">
              <div className="main__content-box-icons">
                <svg className='main__content-box-icon' width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.90476 17.5714V31.2381H9.7619V17.5714H3.90476ZM15.619 17.5714V31.2381H21.4762V17.5714H15.619ZM0 41H37.0952V35.1429H0V41ZM27.3333 17.5714V31.2381H33.1905V17.5714H27.3333ZM18.5476 0L0 9.7619V13.6667H37.0952V9.7619L18.5476 0Z" fill="#4EA4DC"/></svg>
              </div>
                <h1 className='main__content-box-h1'>Game Perspactive</h1>
                <p className='main__content-box-p'>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Non enim <br /> beatae dignissimos.</p>
          </div>

          <div className="main__content-box">
              <div className="main__content-box-icons">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.8 7.59999H0V34.2C0 36.29 1.71 38 3.8 38H30.4V34.2H3.8V7.59999ZM34.2 0H11.4C9.30999 0 7.59999 1.71 7.59999 3.8V26.6C7.59999 28.69 9.30999 30.4 11.4 30.4H34.2C36.29 30.4 38 28.69 38 26.6V3.8C38 1.71 36.29 0 34.2 0ZM32.3 17.1H13.3V13.3H32.3V17.1ZM24.7 24.7H13.3V20.9H24.7V24.7ZM32.3 9.49999H13.3V5.69999H32.3V9.49999Z" fill="#4EA4DC"/></svg>
              </div>
                <h1 className='main__content-box-h1'>Well Documented</h1>
                <p className='main__content-box-p'>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Non enim <br /> beatae dignissimos.</p>
          </div>

          <div className="main__content-box">
              <div className="main__content-box-icons">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1005 19.9998C10.9605 18.5798 8.60048 17.4598 6.04048 16.7798C8.60048 17.4598 10.9605 18.5798 13.1005 19.9998ZM33.9605 16.7798C31.3805 17.4598 28.9805 18.5998 26.8205 20.0598C28.9805 18.5998 31.3805 17.4598 33.9605 16.7798Z" fill="#4EA4DC"/>
                <path d="M26.98 15.26C26.62 9.68001 24.36 4.24 20.12 0C15.84 4.28 13.48 9.72001 13.02 15.26C15.58 16.62 17.94 18.38 20 20.52C22.06 18.4 24.42 16.64 26.98 15.26ZM13.98 20.56C13.7 20.36 13.38 20.18 13.08 19.98C13.38 20.2 13.7 20.36 13.98 20.56ZM26.82 20.06C26.56 20.24 26.28 20.38 26.02 20.58C26.28 20.38 26.56 20.24 26.82 20.06ZM20 26.9C15.7 20.34 8.36001 16 0 16C0 26.64 6.72001 35.64 16.06 38.98C17.32 39.44 18.64 39.78 20 40C21.36 39.76 22.66 39.42 23.94 38.98C33.28 35.64 40 26.64 40 16C31.64 16 24.3 20.34 20 26.9Z" fill="#4EA4DC"/></svg>
              </div>
                <h1 className='main__content-box-h1'>Subtle Animations</h1>
                <p className='main__content-box-p'>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Non enim <br /> beatae dignissimos.</p>
          </div>

        </div>

      </div>

      <div className="maincenter container">
          <div className="maincenter__img"></div>

          <div className="maincenter__content">
              <h3 className='maincenter__content-h3'>HOW IT WORKS!</h3>
              <h1 className='maincenter__content-h1'>Bringin Game To <br />Everyone Life!</h1>
              <p className='maincenter__content-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Consectetur explicabo quo tempore debitis eligendi <br /> laudantium praesentium nihil, dolore cupiditate beatae <br /> repudiandae, iusto nulla? Numquam?</p>
              <p className='maincenter__content-p2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Eveniet at aliquam perferendis facere, dolores <br /> sint magnam cum quo quae? Voluptatibus!</p>
              <button className='maincenter__content-btn'>View Characters</button>
          </div>
      </div>

    </div>


  )
}

export default Main