input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 50; index++) {
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.turnRight()
        turtle.pen(TurtlePenMode.Down)
    }
})
basic.forever(function () {
	
})
