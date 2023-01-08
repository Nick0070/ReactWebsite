import './MainLayout.css';

import  Footer  from '../Components/Footer/Footer';
import  Header  from '../Components/Header/Header';

export const MainLayout = (props) => {
    return (
        <div className='main-layout'>
            <Header/>
                {props['children']}
            <Footer/>
        </div>
    )
}