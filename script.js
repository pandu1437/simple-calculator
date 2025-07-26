
      let calculation = localStorage.getItem('calculation') || '';

      displayCalculation();

      function updateCalculation(value) {
        calculation += value;
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      function evaluateCalculation() {
        try {
          calculation = eval(calculation).toString();
        } catch {
          calculation = 'Error';
        }
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      function clearCalculation() {
        calculation = '';
        displayCalculation();
        localStorage.removeItem('calculation');
      }

      function displayCalculation() {
        document.querySelector('.js-calculation').innerHTML = calculation;
      }

