import { VehicleType } from '../../@types/VehicleType';
import { SubTitle } from './styles';

interface ICreditPaymentProps {
    vehicle: VehicleType;
}

const CreditPayment: React.FC<ICreditPaymentProps> = ({ vehicle }) => {
    return (
        <>
            <SubTitle className="text-start mb-4 fw-bold">
                <span>{vehicle.manufacturer}</span>
                <h4 className="fw-bold">{vehicle.model}</h4>
            </SubTitle>
            <div className="d-flex justify-content-center text-center mt-4">
                <SubTitle className="text-center p-5">
                    <h4 className="fw-bold">Compra realizada com sucesso!</h4>
                    <h5 className="text-wrap fs-6 text-white">
                        Confirmamos o seu pedido. Em breve você receberá um
                        e-mail com status do processo de entrega.
                    </h5>
                </SubTitle>
            </div>
        </>
    );
};

export default CreditPayment;
