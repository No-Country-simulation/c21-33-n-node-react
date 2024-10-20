export const getDate = () => {
    const date: Date = new Date();
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    return ({ date, formattedDate, formattedTime });
};