/**
 * ## Challenge documentation
 * 
 * Forward - food
 * 
 * Backward - sleep
 * 
 * Right - exercise or dance
 * 
 * Left - send a message to a friend
 * 
 * ## Delete before sharing with students
 * 
 * In this challenge our pet needs movement to feel better. Trying to sleep will make it worse.
 */
roversa.onEvent(RoversaPin.P13, RoversaEvent.Click, function () {
    executing_function = true
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        # # # # #
        `)
    wellbeing += -10
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    executing_function = false
})
/**
 * use button B to see happiness level
 */
input.onButtonPressed(Button.B, function () {
    basic.showNumber(wellbeing)
})
roversa.onEvent(RoversaPin.P15, RoversaEvent.Click, function () {
    executing_function = true
    for (let index = 0; index < 2; index++) {
        roversa.driveForwards(100)
        roversa.turnRight(randint(10, 100))
        roversa.turnLeft(randint(10, 100))
        roversa.driveBackwards(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
    wellbeing += 50
    executing_function = false
})
/**
 * Start the code
 */
let executing_function = false
let wellbeing = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
let time = 0
wellbeing = 50
basic.forever(function () {
    while (executing_function == false) {
        wellbeing = Math.constrain(wellbeing, 0, 100)
        if (wellbeing < 33) {
            basic.showIcon(IconNames.Sad)
        } else if (wellbeing < 66) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
        } else {
            basic.showIcon(IconNames.Happy)
        }
        basic.pause(1000)
        wellbeing += -1
    }
})
