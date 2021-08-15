let LEDテープ = neopixel.create(DigitalPin.P0, 21, NeoPixelMode.RGB)
let 繰り返し用カウンター = 0
LEDテープ.showColor(neopixel.colors(NeoPixelColors.Orange))
basic.forever(function () {
    繰り返し用カウンター = 0
    for (let index = 0; index < 10; index++) {
        LEDテープ.setBrightness(20 * 繰り返し用カウンター)
        LEDテープ.show()
        basic.pause(500)
        繰り返し用カウンター += 1
    }
    繰り返し用カウンター = 0
    for (let index = 0; index < 10; index++) {
        LEDテープ.setBrightness(20 - 20 * 繰り返し用カウンター)
        LEDテープ.show()
        basic.pause(500)
        繰り返し用カウンター += 1
    }
})
