import { useCallback, useEffect } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import { Wrapper } from '../../components/Wrapper';
import { useVehicles } from '../../hook/VehicleProvider';

export const Home: React.FC = () => {
    const {
        vehicles,
        pageCount,
        isLoading,
        currentPage,
        setVehicle,
        getVehicles,
    } = useVehicles();

    useEffect(() => {
        getVehicles();
        setVehicle(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getVehicles(currentPage, searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClearSearch = useCallback((): void => {
        getVehicles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            <Banner />
            <Container>
                <Search
                    onSearch={handleSearch}
                    onClearSearch={handleClearSearch}
                />
                {isLoading && <Loading />}
                {!isLoading && (
                    <>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center g-4 mt-5">
                            {vehicles.map(vehicle => {
                                return (
                                    <div
                                        key={vehicle.name}
                                        className="col d-flex"
                                    >
                                        <Card vehicle={vehicle} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-5 mb-5">
                            <Pagination
                                pageCount={pageCount}
                                forcePage={currentPage - 1}
                                onPageChange={event =>
                                    getVehicles(event.selected + 1, '')
                                }
                            />
                        </div>
                    </>
                )}
            </Container>
            <Footer />
        </Wrapper>
    );
};
