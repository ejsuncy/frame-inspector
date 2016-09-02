var regex = '^\\[\"|^a\\[\"|\"\\]$';
var input_field;
var regex_field;

function renderResult(text){
    document.getElementById("result").innerText = result;
}

function replace(input, regex){
    var regexp = new RegExp(regex, 'g');
    return input.replace(regexp, "");
}

function saveInput(){
    localStorage.setItem('input_text', input_field.value);
}

function saveRegex(){
    localStorage.setItem('regex', regex_field.value);
}

function initFields(){
    input_field = document.getElementById('input_text');
    regex_field = document.getElementById('regex');

    if (localStorage.getItem('input_text'))
        input_field.value = localStorage.getItem('input_text');
    if (localStorage.getItem('regex'))
        regex_field.value = localStorage.getItem('regex');

    input_field.addEventListener('blur', saveInput);
    regex_field.addEventListener('blur', saveRegex);
}

document.addEventListener('DOMContentLoaded', function () {
    initFields();
});


