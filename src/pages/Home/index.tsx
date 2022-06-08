import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';

export const Home: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Banner />
            <Footer />
        </Wrapper>
    );
};
