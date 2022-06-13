import { useFormikContext } from 'formik';
import { useCallback, useState } from 'react';
import { VehicleType } from '../../@types/VehicleType';
import { transformNumbers } from '../../utils/data';
import TextField from '../TextField';
import { Container, RadioBox, SubmitButton, SubTitle } from './styles';

interface IPaymentAreaProps {
    vehicle: VehicleType;
}

const PaymentArea: React.FC<IPaymentAreaProps> = ({ vehicle }) => {
    const [type, setType] = useState('credit');
    const { setFieldValue } = useFormikContext();

    const handleChangePaymentType = useCallback(
        (type: string) => {
            setType(type);
            setFieldValue('paymentType', type);
        },
        [setFieldValue]
    );

    const handleChangeFailSwitch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFieldValue('shouldFail', e.target.checked);
        },
        [setFieldValue]
    );

    return (
        <>
            <Container className="rounded p-4 mb-4">
                <h3 className="mb-4 font-weight-bold-display-4">
                    Forma de pagamento
                </h3>
                <div className="row row-cols-2 g-3 w-100">
                    <div className="col">
                        <RadioBox
                            type="button"
                            onClick={() => handleChangePaymentType('credit')}
                            isActive={type === 'credit'}
                            activeColor="#f4e427"
                            className="w-100 rounded"
                        >
                            <span>Cartão de crédito</span>
                        </RadioBox>
                    </div>
                    <RadioBox
                        type="button"
                        onClick={() => handleChangePaymentType('debit')}
                        isActive={type === 'debit'}
                        activeColor="#f4e427"
                        className="rounded"
                    >
                        <span>Boleto bancário</span>
                    </RadioBox>
                    <div className="col"></div>
                </div>
                {type === 'credit' && (
                    <>
                        <TextField
                            label="Nome do titular do cartão"
                            name="ownerCard"
                            type="text"
                        />
                        <TextField
                            label="Número do cartão"
                            name="numberCard"
                            type="text"
                            maxLength={20}
                            mask="9999-9999-9999-9999"
                        />
                        <div className="row row-cols-2 g-3">
                            <div className="col">
                                <TextField
                                    label="Validade"
                                    name="validity"
                                    type="text"
                                    maxLength={6}
                                    placeholder="MM/AA"
                                    mask="99/99"
                                />
                            </div>
                            <div className="col">
                                <TextField
                                    label="Código de segurança"
                                    name="securityCode"
                                    type="text"
                                    maxLength={3}
                                />
                            </div>
                        </div>
                    </>
                )}
            </Container>
            <Container className="card text-white rounded d-flex flex-sm-column justify-content-center align-items-stretch w-100 p-4">
                <div className="flex-sm-grow-1 p-0 px-sm-1 mb-3">
                    <SubTitle>{vehicle.manufacturer}</SubTitle>
                    <h4 className="fw-bold">{vehicle.model}</h4>
                </div>
                <div className="mb-3">
                    {vehicle.cost_in_credits === 'unknown' ? (
                        <h3 className="card-title">Indisponível</h3>
                    ) : (
                        <h3 className="card-title align-items-center d-flex">
                            {`¢ ${transformNumbers(vehicle.cost_in_credits)}`}
                        </h3>
                    )}
                </div>
                <SubmitButton
                    type="submit"
                    className="rounded mt-3 p-2 fw-bold text-center mb-2"
                >
                    Finalizar compra
                </SubmitButton>
                {type === 'credit' && (
                    <div className="form-check form-switch">
                        <label
                            htmlFor="fail-switcher"
                            className="fs-6 cursor-pointer"
                        >
                            <input
                                id="fail-switcher"
                                className="form-check-input cursor-pointer"
                                type="checkbox"
                                role="switch"
                                name="shouldFail"
                                value="true"
                                onChange={handleChangeFailSwitch}
                            />

                            <span className="form-check-label">
                                Simular falha no pagamento
                            </span>
                        </label>
                    </div>
                )}
            </Container>
        </>
    );
};

export default PaymentArea;
