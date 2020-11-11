export const convertToReadableTime = (time: number, value: string) => {
    const milliseconds = time * 1000
    const dateObject = new Date(milliseconds)
    const weekday = dateObject.toLocaleString("ru", {weekday: "long"})
    const day = dateObject.toLocaleString("ru", {day: "numeric"})
    const hour = dateObject.toLocaleString("ru", {hour: "numeric"})
    const getTime = {
        weekday: weekday,
        day: day,
        hour: hour
    }
    if (value === 'weekday') {
        return getTime.weekday
    }
    if (value === 'day') {
        return getTime.day
    }
    if (value === 'hour') {
        return getTime.hour
    }
    return "Something wrong"
}