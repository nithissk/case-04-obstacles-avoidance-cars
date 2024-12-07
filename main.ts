let sonor = 0
wuKong.setAllMotor(-100, -100)
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (sonor < 30 && sonor > 1) {
        wuKong.setAllMotor(10, 10)
        basic.pause(randint(0, 10))
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8)
    if (sonor < 20 && sonor > 1) {
        wuKong.setAllMotor(100, -50)
        basic.pause(randint(0, 10))
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P2)
    if (sonor < 20 && sonor > 1) {
        wuKong.setAllMotor(100, -50)
        basic.pause(randint(0, 10))
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
