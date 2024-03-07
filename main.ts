input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("C5 C G D B F A E ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Square)
})
music.setVolume(203)
