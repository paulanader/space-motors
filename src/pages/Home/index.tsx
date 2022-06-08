import { useEffect } from 'react';
import Banner from '../../components/Banner';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Search from '../../components/Search';
import { Wrapper } from '../../components/Wrapper';
import { useVehicles } from '../../hook/VehicleProvider';

export const Home: React.FC = () => {
    const { vehicles, getVehicles } = useVehicles();

    useEffect(() => {
        getVehicles(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log('vehicles:', vehicles);
    return (
        <Wrapper>
            <Header />
            <Banner />
            <Container>
                <Search />
                <div>
                    {vehicles.map(vehicle => {
                        return (
                            <div>
                                <h1 className="text-white">{vehicle.name}</h1>
                            </div>
                        );
                    })}
                </div>
            </Container>
            <Footer />
        </Wrapper>
    );
};
