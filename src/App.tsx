import { VehicleProvider } from './hook/VehicleProvider';
import { PagesRoutes } from './Routes';
import { GlobalStyle } from './styles/global';

export const App = () => (
    <>
        <GlobalStyle />
        <VehicleProvider>
            <PagesRoutes />
        </VehicleProvider>
    </>
);

export default App;
