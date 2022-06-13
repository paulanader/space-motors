import { AddressProvider } from './hook/AddressProvider';
import { VehicleProvider } from './hook/VehicleProvider';
import { PagesRoutes } from './Routes';
import { GlobalStyle } from './styles/global';

export const App = () => (
    <>
        <GlobalStyle />
        <VehicleProvider>
            <AddressProvider>
                <PagesRoutes />
            </AddressProvider>
        </VehicleProvider>
    </>
);

export default App;
