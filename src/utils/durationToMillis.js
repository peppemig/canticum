const durationToMillis = (duration) => {
    const splitted = duration.split(":")
    const secondsFromMinutes = parseInt(splitted[0]) * 60
    const secondsAfterDots = parseInt(splitted[1])
    const total = secondsFromMinutes + secondsAfterDots
    return total
}

export default durationToMillis