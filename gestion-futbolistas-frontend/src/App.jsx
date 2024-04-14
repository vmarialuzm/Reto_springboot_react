import './App.css'
import { HomePage } from './pages/HomePage'
import { FutbolistaPage } from './pages/FutbolistaPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/futbolista/:id' element={<FutbolistaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
