input.onButtonPressed(Button.A, function () {
    if (game.isRunning()) {
        if (Player.get(LedSpriteProperty.X) != 0) {
            Player.change(LedSpriteProperty.X, -1)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (game.isPaused()) {
        game.resume()
    } else {
        basic.showNumber(score)
        game.pause()
    }
})
function level_mode () {
    if (_S == 5) {
        level = 2
    }
    if (_S == 10) {
        level = 3
    }
    if (_S == 15) {
        level = 4
    }
}
input.onButtonPressed(Button.B, function () {
    if (game.isRunning()) {
        if (Player.get(LedSpriteProperty.X) != 4) {
            Player.change(LedSpriteProperty.X, 1)
        }
    }
})
let score = 0
let level = 0
let _S = 0
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
_S = 0
level = 1
score = 0
let item = game.createSprite(randint(0, 4), randint(0, 0))
game.setLife(5)
basic.forever(function () {
    item.change(LedSpriteProperty.Y, 1)
    if (item.isTouching(Player)) {
        score += 1
        _S += 1
    }
    if (!(item.isTouching(Player)) && item.get(LedSpriteProperty.Y) == 4) {
        _S = 0
        if (level > 0) {
            level += -1
        }
    }
    if (item.get(LedSpriteProperty.Y) == 4) {
        item.set(LedSpriteProperty.X, randint(0, 4))
        item.set(LedSpriteProperty.Y, 0)
    }
    basic.pause(1000 - level * 200)
    level_mode()
})
