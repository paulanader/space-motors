export const getNumber = (value: string): string => {
    const position = value.length - 2;
    const position3 = value.length - 6;

    if (value.length > 5) {
        return (
            value.substr(0, position) +
            '.' +
            value.substr(0, 3) +
            '.' +
            value.substr(2, 3)
        );
    }

    if (value.length > 3) {
        return value.substr(0, position) + '.' + value.substr(2, 3);
    }

    return value;
};

export const convertUrlToId = (url: string): string => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const id = url.replace(`${baseUrl}/vehicles/`, '');
    return id.substring(0, id.length - 1);
};
