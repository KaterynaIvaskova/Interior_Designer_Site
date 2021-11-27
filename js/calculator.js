const countBtn = document.getElementById('calculate')

function countMeters(meters) {
    const meters1 = parseInt(meters);
    const priceformeter = 55;
    let result = 0;
    if (meters1 > 50) {
        result = priceformeter * meters1 * 0.9;

    } else {
        result = priceformeter * meters1;
    }
    return result;
}

function standard(type) {
    const value = parseInt(type);
    let result = 0;
    if (value === 3) {
        result = 250;
    } else {
        result = 0;
    }
    return result;
}

function renovation(yes) {
    const agree = parseInt(yes);
    let result = 1;

    if (agree === 4) {
        result = 5000;
    } else {
        result = 0;
    }
    return result;

}

function finalResult() {

    const result1 = countMeters(document.getElementById('meters').value) + standard(document.getElementById('standard').value) + renovation(document.getElementById('renovation').value);

    return result1;
}

countBtn.addEventListener('click', function () {
    let price = finalResult()
    document.getElementById('forresult').innerHTML = '<h3> The preliminary price:' + " " + price.toFixed(2) + ' PLN </h3>';

})

