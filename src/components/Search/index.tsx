import { useCallback, useState } from 'react';
import { Input, MainContainer, SeachButton } from './styles';

interface ISearchProps {
    onSearch(searchText: string): void;
}

const Search: React.FC<ISearchProps> = ({ onSearch }) => {
    const [inputName, setInputName] = useState('');

    return (
        <MainContainer className="rounded">
            <div className="row row-cols-1 row-cols-sm-2 g-3">
                <div className="col col-sm-9">
                    <Input
                        className="form-control form-input shadow-none h-100"
                        value={inputName}
                        type="text"
                        placeholder="Digite o nome ou o modelo do veículo"
                        onChange={e => setInputName(e.target.value)}
                    />
                </div>
                <div className="col col-sm-3">
                    <SeachButton
                        type="button"
                        onClick={() => onSearch(inputName)}
                        className="rounded w-100 h-100 fw-bold"
                    >
                        Buscar
                    </SeachButton>
                </div>
            </div>
        </MainContainer>
    );
};

export default Search;
