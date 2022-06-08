import { ReactElement } from 'react';

interface IWrapperProp {
    children: ReactElement;
}

export const Wrapper: React.FC<IWrapperProp> = ({ children }) => {
    return <div className="min-vh-100 d-flex flex-column">{children}</div>;
};
