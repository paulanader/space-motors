import Banner from '../../components/Banner';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Search from '../../components/Search';
import { Wrapper } from '../../components/Wrapper';

export const Home: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Banner />
            <Container>
                <Search />
            </Container>
            <Footer />
        </Wrapper>
    );
};
