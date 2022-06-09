import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import { VehicleType } from '../@types/VehicleType';
import Api from '../services/api';

interface IVehicleContextProp {
    vehicles: VehicleType[];
    vehicle: VehicleType | null;
    pageCount: number;
    currentPage: number;

    getVehicles: (page: number, searchText: string) => void;
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
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const getVehicles = useCallback((page = 1, searchText = '') => {
        const limit = 10;
        const offset = limit * (page - 1);
        setCurrentPage(page);

        const params: { page?: number; offset?: number; search?: string } = {
            page,
            offset,
            search: searchText,
        };

        Api.get('/vehicles', { params })
            .then(response => {
                setVehicles(response?.data?.results);
                setPageCount(Math.ceil((response?.data?.count ?? 0) / limit));
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
            pageCount,
            currentPage,
            getVehicles,
        }),
        [vehicles, vehicle, pageCount, currentPage, getVehicles]
    );

    return (
        <VehicleContext.Provider value={providerValue}>
            {children}
        </VehicleContext.Provider>
    );
};
