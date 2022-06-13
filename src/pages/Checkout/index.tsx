import { Formik } from 'formik';
import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckoutFormDataType } from '../../@types/CheckoutFormDataType';
import Address from '../../components/Address';
import Banner from '../../components/Banner';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';
import { PageTitle } from '../../components/PageTitle';
import PaymentArea from '../../components/PaymentArea';
import PersonalData from '../../components/PersonalData';
import { Wrapper } from '../../components/Wrapper';
import { useVehicles } from '../../hook/VehicleProvider';
import { baseShema, checkoutFormInitialValues } from '../../Schema';
import { ToastContainer } from 'react-toastify';

const Checkout: React.FC = () => {
    const { vehicle, isLoading, getVehicle } = useVehicles();
    const navigateTo = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (!vehicle) {
            getVehicle(id ?? '');
        }
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = useCallback(
        (values: CheckoutFormDataType) => {
            const { shouldFail, notify, paymentType } = values;

            if (shouldFail) {
                return notify();
            }

            navigateTo(`/checkout/pedido-confirmado/${id}/${paymentType}`);
        },
        [id, navigateTo]
    );
    return (
        <Wrapper>
            <Header />
            <Banner />
            <Container>
                <PageTitle url="/" title="Checkout" />
                {isLoading && <Loading />}
                {!isLoading && vehicle && (
                    <Formik
                        initialValues={checkoutFormInitialValues}
                        validationSchema={baseShema}
                        onSubmit={handleSubmit}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit}>
                                <div className="container mt-5 mb-5">
                                    <div className="row row-cols-1 row-cols-xl-3 g-3 justify-items-center justify-content-center d-flex">
                                        <div className="col">
                                            <PersonalData />
                                        </div>
                                        <div className="col">
                                            <Address />
                                        </div>
                                        <div className="col text-white">
                                            <div className="mb-4">
                                                <PaymentArea
                                                    vehicle={vehicle}
                                                />
                                            </div>
                                            <section id="notify">
                                                <ToastContainer />
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                )}
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default Checkout;
