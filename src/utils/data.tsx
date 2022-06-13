export const convertUrlToId = (url: string): string => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const id = url.replace(`${baseUrl}/vehicles/`, '');
    return id.substring(0, id.length - 1);
};

export const onlyNumbers = (str: string) => str.replace(/\D/g, '');

export const transformNumbers = (value: string): string => {
    const getNumber = Number(value);
    const newNumber = new Intl.NumberFormat('pt-BR').format(getNumber);

    return newNumber.toString();
};
