import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import { Home } from '../pages/Home';

export const PagesRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles/:id" element={<Checkout />} />
        </Routes>
    </BrowserRouter>
);
