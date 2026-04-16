/**
 * # Challenge documentation
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
/**
 * Doesn't want to talk
 */
roversa.onEvent(RoversaPin.P16, RoversaEvent.Click, function () {
    executing_function = true
    basic.showIcon(IconNames.Meh)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.UntilDone)
    wellbeing += -1
    executing_function = false
})
/**
 * Doesn't need food
 */
roversa.onEvent(RoversaPin.P13, RoversaEvent.Click, function () {
    executing_function = true
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    basic.showIcon(IconNames.No)
    basic.pause(2000)
    wellbeing += -10
    executing_function = false
})
// use button B to see happiness level
input.onButtonPressed(Button.B, function () {
    basic.showNumber(wellbeing)
})
/**
 * Can't sleep
 */
roversa.onEvent(RoversaPin.P14, RoversaEvent.Click, function () {
    executing_function = true
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(200)
        basic.showIcon(IconNames.Asleep)
    }
    wellbeing += -20
    executing_function = false
})
roversa.onEvent(RoversaPin.P15, RoversaEvent.Click, function () {
    executing_function = true
    for (let index = 0; index < 2; index++) {
        roversa.driveForwards(100)
        roversa.turnRight(randint(10, 200))
        basic.pause(1000)
        roversa.turnLeft(randint(10, 360))
        roversa.driveBackwards(100)
    }
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(50)
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
let time = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
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
