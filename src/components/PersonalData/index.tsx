import TextField from '../TextField';
import { Container } from './styles';

const PersonalData = () => {
    return (
        <Container className="rounded p-4">
            <h3 className="mb-4 font-weight-bold-display-4">
                Informações pessoais
            </h3>

            <TextField label="Nome" name="firstName" type="text" />
            <TextField label="Sobrenome" name="lastName" type="text" />
            <TextField label="E-mail" name="email" type="email" />
            <TextField
                label="Telefone"
                name="phone"
                type="phone"
                mask="(99) 99999-9999"
            />
            <TextField label="CPF/CNPJ" name="cpf_cnpj" type="text" />
        </Container>
    );
};

export default PersonalData;
