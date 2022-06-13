import { VehicleType } from '../../@types/VehicleType';
import { SubTitle } from './styles';

interface ICreditPaymentProps {
    vehicle: VehicleType;
}

const TicketPayment: React.FC<ICreditPaymentProps> = ({ vehicle }) => {
    return (
        <>
            <SubTitle className="text-start">
                <span>{vehicle.manufacturer}</span>
                <h4 className="fw-bold">{vehicle.model}</h4>
            </SubTitle>
            <div className="d-flex justify-content-center text-center">
                <SubTitle className="text-center p-5">
                    <h4 className="fw-bold">Pedido confirmado!</h4>
                    <h5 className="text-wrap fs-6 fw-bold text-white">
                        O boleto bancário será enviado para o seu e-mail. Após
                        confirmação do pagamento, enviaremos os detalhes da
                        entrega.
                    </h5>
                </SubTitle>
            </div>
        </>
    );
};

export default TicketPayment;
