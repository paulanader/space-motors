import { useCallback, useState } from 'react';
import { Container } from './styles';

import { useFormikContext } from 'formik';
import { onlyNumbers } from '../../utils/data';
import { useAddress } from '../../hook/AddressProvider';
import TextField from '../TextField';

const Address: React.FC = () => {
    const [lastCep, setLastCep] = useState('');
    const { getAddress, isLoading } = useAddress();
    const { setFieldValue } = useFormikContext();

    const handleChangeCepInput = useCallback(
        async (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputNumber = onlyNumbers(event.target.value);

            if (inputNumber.length === 5) {
                setTimeout(() => setFieldValue('cep', `${inputNumber}-`), 50);
            }

            if (inputNumber.length === 8 && inputNumber !== lastCep) {
                setLastCep(inputNumber);
                const address = await getAddress(inputNumber);
                if (address) {
                    setFieldValue('street', address.logradouro);
                    setFieldValue('neighborhood', address.bairro);
                    setFieldValue('city', address.localidade);
                    setFieldValue('state', address.uf);
                } else {
                    setFieldValue('street', '');
                    setFieldValue('neighborhood', '');
                    setFieldValue('city', '');
                    setFieldValue('state', '');
                }
            }
        },
        [getAddress, lastCep, setFieldValue]
    );

    return (
        <Container className="rounded p-4">
            <h3 className="mb-4 font-weight-bold-display-4">Endereço</h3>

            <div className="row row-cols-sm-2 g-3">
                <div className="col d-flex">
                    <TextField
                        label="Cep"
                        name="cep"
                        type="text"
                        maxLength={9}
                        onChange={handleChangeCepInput}
                    />
                    <div className="align-self-center ms-2 mt-2">
                        <div
                            className={`spinner-border spinner-border-sm text-warning ${
                                !isLoading ? 'invisible' : ''
                            }`}
                        />
                    </div>
                </div>
            </div>

            <TextField label="Logradouro" name="street" type="text" />
            <div className="row row-cols-2 g-3">
                <div className="col">
                    <TextField label="Número" name="number" type="text" />
                </div>
                <div className="col">
                    <TextField
                        label="Complemento"
                        name="complement"
                        type="text"
                    />
                </div>
            </div>
            <TextField label="Bairro" name="neighborhood" type="text" />
            <TextField label="Cidade" name="city" type="text" />
            <TextField label="Estado" name="state" type="text" />
        </Container>
    );
};

export default Address;
