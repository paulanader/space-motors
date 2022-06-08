import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { VehicleType } from '../@types/VehicleType';
import Api from '../services/api';

interface IVehicleContextProp {
    vehicles: VehicleType[];
    vehicle: VehicleType | null;

    getVehicles: (page: number) => void;
}

interface IVehicleProviderProps {
    children: React.ReactNode;
}

export const VehicleContext = createContext<IVehicleContextProp>(
    {} as IVehicleContextProp
);

export const useVehicles = (): IVehicleContextProp => {
    const context = useContext(VehicleContext);

    if (!context) {
        throw new Error('useVehicles must be within VehicleProvider');
    }

    return context;
};

export const VehicleProvider: React.FC<IVehicleProviderProps> = ({
    children,
}) => {
    const [vehicles, setVehicles] = useState<VehicleType[]>([]);
    const [vehicle, setVehicle] = useState<VehicleType | null>(null);

    const getVehicles = useCallback((page = 1) => {
        const params: { page?: number } = {
            page,
        };

        Api.get('/vehicles', { params })
            .then(response => {
                setVehicles(response?.data?.results);
            })
            .catch(() => {
                setVehicles([]);
            })
            .finally();
    }, []);

    const providerValue = useMemo(
        () => ({
            vehicles,
            vehicle,
            getVehicles,
        }),
        [vehicles, vehicle, getVehicles]
    );

    return (
        <VehicleContext.Provider value={providerValue}>
            {children}
        </VehicleContext.Provider>
    );
};
