import { Home } from './Page/Home/Home'
import { Menu } from './Page/Menu/Menu'
import { MainLayout } from './Layouts/MainLayout'

import { BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Menu' element={<Menu/>}/>
          </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;