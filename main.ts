/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Oct 2025
 * This program plays rock paper scissors.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
game.setScore(0)

// When shake, pick a new random number each time
input.onGesture(Gesture.Shake, function () {
    const randomNumber = randint(0, 2)

    // if randomNumber was 0 show Rock
    if (randomNumber == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
        `)
    }

    // if randomNumber was 1 show Paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }

    // if randomNumber was 2 show Scissors
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    // pause and reset
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

// add 1 to score with Button A
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    game.addScore(1)
    basic.pause(500)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})

// shows score
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("Score:" + game.score())
    basic.showIcon(IconNames.Happy)
})

