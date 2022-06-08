import { Input, MainContainer, SeachButton } from './styles';

const Search: React.FC = () => {
    return (
        <MainContainer className="rounded">
            <div className="row row-cols-1 row-cols-sm-2 g-3">
                <div className="col col-sm-9">
                    <Input
                        className="form-control form-input shadow-none h-100"
                        type="text"
                        value=""
                        placeholder="Digite o nome ou o modelo do veículo"
                    />
                </div>
                <div className="col col-sm-3">
                    <SeachButton className="rounded w-100 h-100 fw-bold">
                        Buscar
                    </SeachButton>
                </div>
            </div>
        </MainContainer>
    );
};

export default Search;
