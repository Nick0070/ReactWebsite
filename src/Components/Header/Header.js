import  './Header.css';
import React from 'react';



export default function ()  {

    return (
        <div className='header'>
          <div className='container'>
            <div className='header-line'>
              <div className='header-logo'>
                <img src="img/logo.png" alt="" />
              </div>

              <div className='nav'>
                <a className='nav-item' href="/">ГЛАВНАЯ</a>
                <a className='nav-item' href="/Menu">МЕНЮ</a>
                <a className='nav-item' href="@">О НАС</a>
              </div>

              <div className='cart'>
                <a href="#">
                  <img className='cart-img' src="img/cart.png" alt="" />
                </a>
              </div>


              <div className='phone'>
                <div className='phone-holder'>
                  <div className='phone-img'>
                    <img src="img/phone.png" alt="" />
                  </div>

                  <div className='number'><a className='num' href='#'>+999-888-76-54</a></div>
                </div>

                <div className='phone-text'>
                  Свяжитесь с нами для <br /> дополнительной информации
                </div>
              </div>

              <div className='btn'>
                <a className='button' href='#'>ЗАКАЗАТЬ ЕДУ</a>
              </div>

              <div className='burger-menu'>

                <button id='burger'>
                  <img src="img/burger-img.png" alt="" />
                </button>

                <div id='menu' className='burger-slide disp'>
                  <a className='nav-item block' href="@">ГЛАВНАЯ</a>
                  <a className='nav-item block' href="menu.html">МЕНЮ</a>
                  <a className='nav-item block' href="@">О НАС</a>
                  <a className='nav-item block' href="@">БРОНЬ</a>
                </div>

              </div>
            </div>
          </div>
        </div>
    )
}

