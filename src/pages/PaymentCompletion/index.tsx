import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Wrapper } from '../../components/Wrapper';
import { Loading } from '../../components/Loading';
import { useVehicles } from '../../hook/VehicleProvider';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import PaymentCompletionCard from '../../components/PaymentCompletionCard';
import Footer from '../../components/Footer';

const PaymentCompletion: React.FC = () => {
    const { paymentType } = useParams();
    const { id } = useParams();
    const { getVehicle, isLoading, vehicle } = useVehicles();

    useEffect(() => {
        if (!vehicle) {
            getVehicle(id ?? '');
        }
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    return (
        <Wrapper>
            <Header />
            <Banner />
            <Container>
                {isLoading && <Loading />}
                {!isLoading && (
                    <>
                        <PageTitle
                            title="Confirmação"
                            url={`/checkout/${id}`}
                        />
                        {paymentType && (
                            <div className="d-flex justify-content-center text-center">
                                <PaymentCompletionCard
                                    type={paymentType}
                                    vehicle={vehicle}
                                />
                            </div>
                        )}
                    </>
                )}
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default PaymentCompletion;
