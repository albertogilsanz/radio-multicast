radio.onReceivedNumber(function (receivedNumber) {
    n += 1
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(9)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(n)
})
let n = 0
n = 0
radio.setGroup(0)
