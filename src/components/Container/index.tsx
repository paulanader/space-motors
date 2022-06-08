import { ReactNode } from 'react';

interface IContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container: React.FC<IContainerProps> = ({
    className,
    children,
}) => <div className={`container mb-3 ${className ?? ''}`}>{children}</div>;
