let diameter = 0
const area = 0
const circumference = 0
const Pi = 3.14159265

document.getElementById('output').addEventListener('click', click)

function click () {
  diameter = document.getElementById('output').value
  diameter = parseInt(diameter)
  if (isNaN(output)) {
    output.textContent='You did not insert the diameter.'
  let area = diameter / 2 * Pi * 2
  let circumference = diameter * Pi 
    output.textContent = "Area =" + area
     output2.textContent = "Circumference = " +
     circumference
  }
}