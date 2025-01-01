let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    // Replacing × and ÷ with proper symbols for evaluation
    let expression = display.value.replace('×', '*').replace('÷', '/');
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}