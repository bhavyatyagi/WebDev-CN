var buttons = document.getElementsByClassName("buttons");
var display = document.getElementById("evaldisplay");
var op1 = 0;
var op2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    
    var value = this.getAttribute('data-value');
    if (value == '+') {
      operator = '+';
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    }
    else if(value=="khali")
    {
      display.innerText="";
      op2=null;
      operator=null;
      op1=0;
    }
    else if (value == '/') {
      operator = '/';
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == '*') {
      operator = '*';
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == '-') {
      operator = '-';
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    }
      else if (value == '=') {
      op2 = parseFloat(display.textContent);
      if (operator == '/' && op2 == '0') {
        display.innerText = "Zero se divide nhi karte, Gandi Baat!";
      } else {
        var ans = eval(op1 + " " + operator + " " + op2);
        display.innerText = ans;
      }
    } else {
      display.innerText += value;
    }
  });
}
