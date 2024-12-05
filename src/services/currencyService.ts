export const getPastMondays = (): string[] => {
    const mondays: string[] = [];
    const today = new Date();
    let currentDay = today.getDay();
    let currentDate = new Date();

    for (let i = 0; i < 7; i++) {
        const daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
        currentDate.setDate(today.getDate() - daysToSubtract - i * 7);
        mondays.push(new Date(currentDate).toISOString().split('T')[0]);
        currentDate = new Date(today);
    }

    return mondays;
};
