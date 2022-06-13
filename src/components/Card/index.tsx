import { VehicleType } from '../../@types/VehicleType';
import { useVehicles } from '../../hook/VehicleProvider';
import { convertUrlToId, transformNumbers } from '../../utils/data';
import { BackgroundCard, LinkDecoration, SubTitle } from './styles';

interface ICardProps {
    vehicle: VehicleType;
}

const Card: React.FC<ICardProps> = ({ vehicle }) => {
    const { setVehicle } = useVehicles();
    return (
        <BackgroundCard className="card text-white rounded d-flex flex-sm-column justify-content-center align-items-stretch w-100 p-4">
            <div className="flex-sm-grow-1 p-0 px-sm-1">
                <SubTitle>{vehicle.manufacturer}</SubTitle>
                <h4 className="fw-bold">{vehicle.model}</h4>
                <div className="d-flex justify-content-between">
                    <span>Largura</span>
                    <span>{transformNumbers(vehicle.length)}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Velocidade</span>
                    <span>
                        {transformNumbers(vehicle.max_atmosphering_speed)}
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Equipe</span>
                    <span>{transformNumbers(vehicle.crew)}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Passageiros</span>
                    <span>{transformNumbers(vehicle.passengers)}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Capacidade de carga</span>
                    <span>{transformNumbers(vehicle.cargo_capacity)}</span>
                </div>
            </div>
            <div>
                {vehicle.cost_in_credits === 'unknown' ? (
                    <h3 className="card-title mb-0 mt-4">Indisponível</h3>
                ) : (
                    <h3 className="card-title mb-0 mt-4">
                        <LinkDecoration
                            className="stretched-link"
                            onClick={() => setVehicle(vehicle)}
                            to={`/checkout/${convertUrlToId(vehicle.url)}`}
                        >{`¢ ${transformNumbers(
                            vehicle.cost_in_credits
                        )}`}</LinkDecoration>
                    </h3>
                )}
            </div>
        </BackgroundCard>
    );
};

export default Card;
