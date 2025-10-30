/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program makes pixels go around primeter
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(500)

// when A is pressed, the pixels move
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    // top row
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, 0)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    // right side
    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, 4)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    // bottom
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, 4)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }

    // left side
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, 0)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// when B is pressed, the pixels move around the outside edge
input.onButtonPressed(Button.B, function () {
    // setup
    basic.clearScreen()
    loopCounter = 5
    sprite = game.createSprite(5, 5)


    // right side
    loopCounter = 4
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, 4)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }

    // top row
    loopCounter = 4
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, 0)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }

    // left side
    loopCounter = 0
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, 0)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    // botton
    loopCounter = 0
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, 4)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }


    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
