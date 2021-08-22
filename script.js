setInterval(() => {
    const hourHand = document.querySelector('[data-hour-hand]')
    const minuteHand = document.querySelector('[data-minute-hand]')
    const secondHand = document.querySelector('[data-second-hand]')

    const currentDate = new Date()
    const msRatio = (currentDate.getMilliseconds()) / 1000
    const secondsRatio = (msRatio + currentDate.getSeconds()) / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    console.log(secondsRatio)

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}, 1);

const setRotation = (element, rotationRatio) => {
    element.style.setProperty(
        '--rotation', rotationRatio * 360
    )
}