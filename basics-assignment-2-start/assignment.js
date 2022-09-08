// 1 task
function someText() {
    alert('Hey, im function');
}

function showName(name) {
    alert(`My name is - ${name}`);
}

// 2 task
someText();
showName('Test');

// 3 task
const task3Element = document.getElementById('task-3');
task3Element.addEventListener('click',  someText);

// 4 task
function stringConcatendat(firstString='This', secondString='my', thirdString='way') {
    return result = `${firstString} ${secondString} ${thirdString}`
}

// 5 tasl
alert(stringConcatendat())