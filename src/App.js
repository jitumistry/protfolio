import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Contact, Header, Home, Projects, Services, Skills,  } from './component/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className='appclass'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Project' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
