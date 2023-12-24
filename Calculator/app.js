document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');
  
    buttons.addEventListener('click', function (event) {

        // The .tagName property of an HTML element returns the tag name of the element in uppercase. 
        // For example, 
        // if you click on a <button> element, event.target.tagName would be equal to "BUTTON". 
        // This allows you to check the type of the element that triggered the event.

        // In the provided JavaScript code for the calculator, the event.target.tagName === 'BUTTON' condition 
        // is used to ensure that the event was triggered by a <button> element. It's a way to filter out 
        // events triggered by other elements on the page, ensuring that the code inside the if statement 
        // only executes when a button is clicked.
        
      if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;
  
        if (buttonText === 'AC') {
          clearDisplay();
        } else if (buttonText === '=') {
          calculate();
        } else {
          appendToDisplay(buttonText);
        }
      }
    });
  
    function appendToDisplay(value) {
      display.value += value;
    }
  
    function clearDisplay() {
      display.value = '';
    }
  
    function calculate() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    }
  });