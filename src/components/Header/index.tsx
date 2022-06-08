import logoImg from '../../assets/space-motors-logo.png';
import { ColorHeader } from './styles';

const Header: React.FC = () => {
    return (
        <ColorHeader>
            <div className="container">
                <img src={logoImg} alt="logo" className="img-fluid" />
            </div>
        </ColorHeader>
    );
};

export default Header;
