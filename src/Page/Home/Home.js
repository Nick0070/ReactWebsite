import './Home.css';


export const Home = () => {
 return (
        <div>
            {/* ///////////header */}
            <div className='header-down'>
                <div className='header-title'>
                    Добро пожаловать
                    <div className='header-subtitle'>
                        В место где можно  выбрать еду
                    </div>
                    <div className='header-suptitle'>
                        ДОМ ЛУЧШЕЙ ЕДЫ
                    </div>

                    <div className='header-bth'>
                        <a href='#' className='header-button'>ПОКАЗАТЬ МЕНЮ</a>
                    </div>
                </div>
            </div>
            {/* ///////////header */}
            

            {/* ///////////cards */}
            <div className='cards'>
                <div className='container'>
                    <div className='cards-holder'>
                        <div className='card'>

                            <div className='card-image'>
                                <img className='card-img' src='img/card.png' />
                            </div>

                            <div className='card-title'>
                                Магическая  <span >  Атмосфера</span>
                            </div>

                            <div className='card-desc'>
                                В нашей подборке заведений царит магическая атмосфера наполненная вкусными ароматами
                            </div>
                        </div>

                        <div className='card'>

                            <div className='card-image'>
                                <img className='card-img' src='img/card.png' />
                            </div>

                            <div className='card-title'>
                                Лучшее качество  <span>Еды</span>
                            </div>

                            <div className='card-desc'>
                                Качество  Еды - отменное!

                            </div>
                        </div>

                        <div className='card'>

                            <div className='card-image'>
                                <img className='card-img' src='img/card.png' />
                            </div>

                            <div className='card-title'>
                                Недорогая  <span>Еда</span>
                            </div>

                            <div className='card-desc'>
                                Стоимость  Едыз ависит только от ее количества. Качество всегда на высоте!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ///////////cards */}


            {/* ///////////history */}
            <div className='history'>
                <div className='container'>
                    <div className='history-holder'>
                        <div className='history-info'>
                            <div className='history-title'>
                                Наша <span>История</span>
                            </div>

                            <div className='history-desc'>
                                Как и у любого другого самобытного места, у нас есть своя, особая история. Идея  пришла основателям неожиданно. Когда основатель был в другом городе, он не знал где можно поесть вкусной итальянской еды.
                            </div>


                            <div className='history-number'>
                                <div className='number-item'>
                                    93 <span>Напитки</span>
                                </div>

                                <div className='number-item'>
                                    206 <span>Еда</span>
                                </div>

                                <div className='number-item'>
                                    71 <span>Закуски</span>
                                </div>
                            </div>
                        </div>

                        <div className='history-images'>
                            <img className='imgages-1' src="img/1.jpg" alt="" />
                            <img className='imgages-2' src="img/2.jpg" alt="" />
                            <img className='imgages-3' src="img/3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
             {/* ///////////history */}





            <div className='black-block'>
                <div className='container'>

                    <div className='block-holder'>
                        <div className='left'>
                            <div className='left-title'>
                                По обедайте в одном лучшем итальянском ресторане города.
                            </div>


                            <div className='left-text'>
                                Только в этом месяце  в перчини бизнес-ланч от 250 ₽
                            </div>
                        </div>

                        <div className='right'>
                            <div className='right-button'>
                                <a href='#' className='right-btn'>Заказать стол</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='dishes'>
                <div className='container'>

                    <div className='dishes-title'>
                        Топ заказываемых <span>Блюд</span>
                    </div>

                    <div className='burgers'>
                        <div className='burgers-image'>
                            <img src='img/pizza.jpg' className='pizza' />
                        </div>

                        <div className='burgers-items'>
                            <div className='burger-item'>
                                <img src="img/pasta.jpg" className='photo' />
                                <div className='burger-text'>
                                    Паста карбанара  -------------- 370 ₽
                                </div>
                            </div>

                            <div className='burger-item'>
                                <img src="img/piza.jpg" className='photo' />
                                <div className='burger-text'>
                                    Пицца карбанара -------------- 550 ₽
                                </div>
                            </div>

                            <div className='burger-item'>
                                <img src="img/fet.jpg" className='photo' />
                                <div className='burger-text'>
                                    Фитучини с курицей  -------------- 350 ₽
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='menu'>
                <div className='container'>
                    <div className='menu-title'>
                        Мы рекомендуем
                    </div>
                    <div className='menu-items'>
                        <div className='menu-item'>
                            <div className='menu-image'>
                                <img src='img/karbor.jpg.png' className='menu-img' />
                            </div>

                            <div className='menu-text'>
                                Паста карбанара
                            </div>

                            <div className='menu-subtext'>
                                Большая порция много бекона
                            </div>

                            <div className='menu-button'>
                                <a href='#' className='menu-btn'>ЗАКАЗАТЬ</a>
                            </div>
                        </div>

                        <div className='menu-item'>
                            <div className='menu-image'>
                                <img src='img/piza2.jpg.png' className='menu-img' />
                            </div>

                            <div className='menu-text'>
                                Пицца карбанара
                            </div>

                            <div className='menu-subtext'>
                                Разная размерность
                            </div>

                            <div className='menu-button'>
                                <a href='#' className='menu-btn'>ЗАКАЗАТЬ</a>
                            </div>
                        </div>

                        <div className='menu-item'>
                            <div className='menu-image'>
                                <img src='img/fettt.jpg.png' className='menu-img' />
                            </div>

                            <div className='menu-text'>
                                Фитучини с курицей
                            </div>

                            <div className='menu-subtext'>
                                Большая порция
                            </div>

                            <div className='menu-button'>
                                <a href='#' className='menu-btn'>ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='coment'>
                <div className='container'>

                    <div className='coment-text'>
                        Очень удобный интерфейс, я быстро разобрался. Помогли вкусно покушать, спасибо!!!
                    </div>

                    <div className='coment-image'>
                        <img src='img/face.png' className='coment-img' />
                    </div>

                    <div className='coment-type'>
                        Пользователь
                    </div>

                    <div className='coment-name'>
                        Николай
                    </div>
                </div>
            </div>


            <div className='galery'>
                <div className='container'>
                    <div className='galery-title'>
                        Галерея <span>Блюд</span>
                    </div>
                    <div className='galery-content'>
                        <div className='galery-left'>
                            <div className='galery-up'>
                                <img className='img-gal high' src="img/10.jpg" />
                            </div>

                            <div className='galery-down'>
                                <img className='img-gal' src="img/20.jpg" />
                                <img className='img-gal' src="img/30.jpg" />
                            </div>
                        </div>

                        <div className='galery-right'>
                            <div className='galery-up'>
                                <img className='img-gal' src="img/20.jpg" />
                                <img className='img-gal' src="img/30.jpg" />
                            </div>
                            <div className='galery-down'>
                                <img className='img-gal high' src="img/10.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='cook'>
                <div className='container'>
                    <div className='cook-title'>
                        Наши <span>Партёры</span>
                    </div>

                    <div className='cook-content'>
                        <image src='.img/perchini.jpg' className="photo2" />
                        <image src='img/lavila.jpg' className="photo2" />
                        <image src='img/mamamia.jpg' className="photo2" />
                    </div>
                </div>
            </div> */}

        </div>
    )
}