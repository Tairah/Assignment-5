let diameter = 0
let area = 0
let circumference = 0
let Pi = 3.14159265

document.getElementById('output').addEventListener('click',click)

function click() {
  input = document.getElementById('output').value
  diameter = parseInt(diameter)
  if (isNaN(output))
  output.textContent="You did not insert the diameter."
  let area = (diameter) /2*Pi*2
  let circumference = (diameter) * Pi 
    output.textContent = "Area =" + area
     output2.textContent = "Circumference = " +
     circumference
}