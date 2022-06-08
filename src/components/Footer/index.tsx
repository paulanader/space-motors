import logoImg from '../../assets/space-motors-logo.png';
import { ColorFooter, Img, Signature } from './styles';

const Footer: React.FC = () => {
    return (
        <ColorFooter className="mt-auto">
            <div className="container text-center">
                <Img src={logoImg} alt="logo" className="img-fluid" />
                <Signature>
                    <span className="me-1">site por</span>
                    <span>
                        <a
                            href="https://www.linkedin.com/in/paulanader/"
                            title="Perfil Linked - Paula Nader"
                            className="text-white fw-bold"
                        >
                            Paula Nader
                        </a>
                    </span>
                </Signature>
            </div>
        </ColorFooter>
    );
};

export default Footer;
