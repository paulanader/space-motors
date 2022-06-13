import { VehicleType } from '../../@types/VehicleType';
import { BackgroundCard, Button, SubTitle } from './styles';

interface IPriceCardProps {
    vehicle: VehicleType;
}

const PriceCard: React.FC<IPriceCardProps> = ({ vehicle }) => {
    return (
        <BackgroundCard className="card text-white rounded d-flex flex-sm-column justify-content-center align-items-stretch w-100 p-4">
            <div className="flex-sm-grow-1 p-0 px-sm-1 mb-3">
                <SubTitle>{vehicle.manufacturer}</SubTitle>
                <h4 className="fw-bold">{vehicle.model}</h4>
            </div>
            <div className="mb-3">
                {vehicle.cost_in_credits === 'unknown' ? (
                    <h3 className="card-title">Indisponível</h3>
                ) : (
                    <h3 className="card-title">
                        {`¢ ${vehicle.cost_in_credits}`}
                    </h3>
                )}
            </div>
            <Button className="rounded mt-3 p-2 fw-bold" type="submit">
                Finalizar compra
            </Button>
        </BackgroundCard>
    );
};

export default PriceCard;
