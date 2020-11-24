export const convertToReadableTime = (time: string, value: string) => {
    const milliseconds = +time * 1000 //1606067178
    const dateObject = new Date(milliseconds)
    const weekday = dateObject.toLocaleString("ru", {weekday: "long"})
    const day = dateObject.toLocaleString("ru", {day: "numeric"})
    const hour = dateObject.toLocaleString("ru", {hour: "numeric"})
    const minute= dateObject.toLocaleString("ru", {minute:"numeric"})
    const getTime = {
        weekday: weekday,
        day: day,
        hour: hour,
        minute:minute
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
    if (value === 'hour+minute') {
        return `${getTime.hour}:${getTime.minute}`
    }

    return "Something wrong"
}

