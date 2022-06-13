import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Contant } from './styles';

interface IPageTitleProps {
    title: string;
    url: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({ title, url }) => (
    <Contant className="d-flex align-items-center justify-content-start mt-4">
        <Link
            className="fs-2 text-white me-4 d-flex align-items-center"
            to={url}
        >
            <FiArrowLeft className="text-white justify-content-start" />
        </Link>
        <h2 className="fs-lg fw-bold m-0">{title}</h2>
    </Contant>
);
