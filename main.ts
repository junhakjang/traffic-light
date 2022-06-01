function sound_light () {
    count = 20
    for (let index = 0; index < 20; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showNumber(count)
        count += -1
        basic.clearScreen()
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.clearScreen()
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 6) {
        GREEN()
    } else if (receivedNumber == 9) {
        RED()
    }
})
function light1 () {
    basic.pause(10000)
    GREEN()
    basic.pause(10000)
    doSomething()
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    OFF()
    basic.pause(1000)
    YELLOW()
    basic.pause(2000)
    OFF()
    basic.pause(1000)
    RED()
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.A, function () {
    A_button = 0
    people = 0
    light1()
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.No)
}
function OFF2 () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
}
function doSomething () {
    count = 10
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showNumber(count)
        count += -1
        basic.clearScreen()
    }
    basic.clearScreen()
}
function GREEN2 () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
function sound_light1 () {
    basic.pause(10000)
    GREEN()
    sound_light()
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    OFF()
    basic.pause(1000)
    YELLOW()
    basic.pause(2000)
    OFF()
    basic.pause(1000)
    RED()
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.B, function () {
    if ((A_button && people) != 0) {
        sound_light1()
    }
})
function OFF () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function sonar () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 0)
    distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
}
function Green_Car () {
    basic.pause(10000)
    GREEN2()
    basic.pause(10000)
    doSomething()
    basic.pause(1000)
    OFF()
    basic.pause(1000)
    YELLOW()
    basic.pause(2000)
    OFF()
    basic.pause(1000)
    RED()
    basic.showIcon(IconNames.No)
}
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.No)
}
let range: neopixel.Strip = null
let people = 0
let A_button = 0
let count = 0
let strip: neopixel.Strip = null
let distance = 0
let phantom_thing = 0
distance = 7
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(30)
RED()
radio.setGroup(69)
basic.forever(function () {
    if (people != 0) {
        for (let index = 0; index < 4; index++) {
            sonar()
            if (distance <= 5) {
                phantom_thing += 1
            }
        }
        if (phantom_thing == 4) {
            Green_Car()
        }
        phantom_thing = 0
    }
})
