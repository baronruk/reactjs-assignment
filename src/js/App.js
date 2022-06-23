import '../css/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/AppBar';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
    return (
        <BrowserRouter>
            <SearchAppBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
