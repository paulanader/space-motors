export const checkValidDate = (date?: string): boolean => {
    if (!date || date.length < 5) return false;
    const [month, year] = date.split('/');
    const dateToCheck = new Date(`${String((new Date()).getFullYear()).substring(0, 2)}${year}-${month}-01`);

    return !isNaN(dateToCheck.getMonth());
};

export const checkExpiredDate = (date?: string): boolean => {
    if (!date || date.length < 5) return false;
    const [month, year] = date.split('/');
    const now = new Date();
    const dateToCheck = new Date(`${String(now.getFullYear()).substring(0, 2)}${year}-${month}-01`);
    dateToCheck.setMonth(dateToCheck.getMonth() + 1);

    return dateToCheck.getTime() > now.getTime();
};
