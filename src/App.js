import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Layouts/Header/Header';
import Sidebar from './Layouts/Sidebar/Sidebar';
import ProductList from './Components/ProductList/ProductList';
import AddProduct from './Components/AddProduct/AddProduct';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="App-container">
                    <Sidebar />
                    <div className="App-container-main">
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                            <Route path="/product/add" element={<AddProduct />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
