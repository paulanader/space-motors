import IsLoadingImg from '../../assets/loading.gif';
import { IsLoadingCarousel } from './styles';

export const Loading: React.FC = () => {
    return (
        <IsLoadingCarousel className="d-flex justify-content-center align-items-center w-100">
            <img src={IsLoadingImg} alt="Imagem Carregando" />
        </IsLoadingCarousel>
    );
};
