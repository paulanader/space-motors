import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import { AddressType } from '../@types/AddressType';
import { AddressApi } from '../services/api';

interface IAddressContextProp {
    isLoading: boolean;
    getAddress: (input: string) => Promise<AddressType | null>;
}

interface IAddressProviderProps {
    children: React.ReactNode;
}

export const AddressContext = createContext<IAddressContextProp>(
    {} as IAddressContextProp
);

export const useAddress = (): IAddressContextProp => {
    const context = useContext(AddressContext);

    if (!context) {
        throw new Error('useAddress must be within AddressProvider');
    }

    return context;
};

export const AddressProvider: React.FC<IAddressProviderProps> = ({
    children,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const getAddress = useCallback(async (input: string) => {
        setIsLoading(true);
        try {
            const response = await AddressApi.get(`/${input}/json`);
            setIsLoading(false);
            if (response.data.erro) return null;
            return response.data;
        } catch {
            setIsLoading(false);
            return null;
        }
    }, []);

    const providerValue = useMemo(
        () => ({
            isLoading,
            getAddress,
        }),
        [isLoading, getAddress]
    );

    return (
        <AddressContext.Provider value={providerValue}>
            {children}
        </AddressContext.Provider>
    );
};
