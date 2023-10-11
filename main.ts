enum RadioMessage {
    message1 = 49434
}
if (input.buttonIsPressed(Button.A)) {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    servos.P0.run(100)
}
if (input.buttonIsPressed(Button.B)) {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # # # # #
        `)
    servos.P1.run(100)
}
if (input.buttonIsPressed(Button.AB)) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    servos.P0.run(100)
    servos.P1.run(100)
}
