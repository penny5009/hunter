radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    target += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(target)
    radio.sendValue("id", 15)
    radio.sendValue("try", target)
})
input.onButtonPressed(Button.B, function () {
    target += 1
})
let target = 0
radio.setGroup(99)
basic.showIcon(IconNames.Heart)
target = 50
