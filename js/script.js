var value = 0;

function updateValue(action) {
    if (action === 'increase') {
        value += 1;
    } else if (action === 'decrease') {
        value -= 1;
    }


    document.getElementById("demo").value = value;
}

function validate() {
    var value = document.getElementById("demo").value;
    var result = document.getElementById("Amount");




    if (value == "") {
        result.innerHTML = "Please enter a value.";
        result.style.color = "red";
        return false;
    } else if (value <= 0) {
        result.innerHTML = "Please enter a positive number.";
        result.style.color = "red";
        return false;
    }


    var convertedAmount = value * 49.5
    result.innerHTML = convertedAmount 
    result.style.color = "green";
    return false;
}
