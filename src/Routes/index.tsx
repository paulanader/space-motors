import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PaymentCompletion from '../pages/PaymentCompletion';
import Checkout from '../pages/Checkout';
import { Home } from '../pages/Home';

export const PagesRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route
                path="/checkout/pedido-confirmado/:id/:paymentType"
                element={<PaymentCompletion />}
            />
        </Routes>
    </BrowserRouter>
);
