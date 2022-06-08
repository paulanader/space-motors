import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';

export const PagesRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);
