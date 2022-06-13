import { VehicleType } from '../../@types/VehicleType';
import CreditPayment from '../CreditPayment';
import TicketPayment from '../TicketPayment';
import { Container } from './styles';

interface IPaymentCompletionCarProps {
    type: string;
    vehicle: VehicleType | null;
}
const PaymentCompletionCard: React.FC<IPaymentCompletionCarProps> = ({
    type,
    vehicle,
}) => {
    return (
        <Container className="p-4">
            <section>
                {vehicle && (
                    <>
                        {type === 'credit'
                            ? <CreditPayment vehicle={vehicle} />
                            : <TicketPayment vehicle={vehicle} />
                        }
                    </>
                )}
            </section>
        </Container>
    );
};

export default PaymentCompletionCard;
