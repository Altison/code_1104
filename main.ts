input.onButtonPressed(Button.A, function () {
    for (let I = 0; I <= 10; I++) {
        for (let j = 0; j <= Math.min(10 - I, I); j++) {
            if (I < 5) {
                led.plot(4 - j, I)
                led.plot(4 - I, j)
            } else if (I > 5) {
                led.unplot(4 - j, 10 - I)
                led.unplot(I - 6, j)
            } else {
                basic.pause(1000)
                break;
            }
        }
        basic.pause(100)
    }
})
