var myDb = []
var _Name = document.getElementById('name')
var _Score = document.getElementById('score')
var i = 0

function _Add() {
    if (_Name.value != '' && _Score.value != '') {
        var temp = [_Name.value, Number(_Score.value)]
        myDb[i] = temp
        console.log(myDb)
        _Name.value = null
        _Score.value = null
        _Name.focus()
            //end push mydb

        var _li = document.createElement('li')
        _li.innerHTML = (i + 1) + ' : ' + myDb[i][0] + " = " + myDb[i][1]
        document.querySelector('main ul').appendChild(_li)
            //create li in ul
        i++
    } else {
        alert('test')
    }


    if (myDb.length > 1) {
        var x = document.querySelectorAll('main button')
            // x[1].removeAttribute('class')
            // x[2].removeAttribute('class')
            // x[3].removeAttribute('class')
        for (k = 1; k <= 3; k++) {
            x[k].removeAttribute('class')
        }

    }

}

function _Avg() {
    var temp = 0
    for (i = 0; i < myDb.length; i++) {
        temp += myDb[i][1]
    }
    alert('Your Average is : ' + temp / myDb.length)
}

function _Max() {
    k = 0
    var maximum = myDb[0][1]
    for (i = 0; i < myDb.length; i++) {
        if (myDb[i][1] > maximum) {
            maximum = myDb[i][1]
            k = i
        }
    }
    alert('Your Maximum is : ' + maximum + " - " + myDb[k][0])
}

function _Min() {
    k = 0
    var minimum = myDb[0][1]
    for (i = 0; i < myDb.length; i++) {
        if (myDb[i][1] < minimum) {
            minimum = myDb[i][1]
            k = i
        }
    }
    alert('Your Minimum is : ' + minimum + " - " + myDb[k][0])
}