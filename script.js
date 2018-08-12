let input = document.querySelector('input[type ="text"]')
let btn = document.getElementById('Button')
err = document.getElementById('error')
btn.disabled = true
err.innerText = "Button Disabled: Enter a three digit number before clicking the button"

input.addEventListener('keyup', doSomething)
btn.addEventListener('click', calculate)

//Event Listener for Keyup
function doSomething(e){
  let len = e.target.value.length
  if (isNaN(e.target.value)){
    btn.disabled = true;
  }else{
    //Floating point value should disable button
    if (( len > 3 || len < 3)||(parseInt(e.target.value)< 100)){
      btn.disabled = true;
      err.innerText = "Button Disabled: Enter a three digit number before clicking the button"
      document.getElementById('ans').innerText = "";
    }else{
      err.innerText="Button Enabled: Hurray"
      btn.disabled = false;
    }
  }
}

//Give the answer, call armstrong function
function calculate(e){
  e.preventDefault()
  input = document.getElementById('textp').value
  ans = armStrong(input)
  document.getElementById('ans').innerText = ans;
}


//Code for armStrong
function armStrong(number) {
  number = String(number)
  let total = 0
  let newNum = number.split('')
  for (let num of newNum) {
    total += Number(num) ** 3;
  }
  if (total === Number(number)) {
    return ("True, Number is an ArmStrong");
  } else {
    return ("False, Number is not an ArmStrong");
  }
}
