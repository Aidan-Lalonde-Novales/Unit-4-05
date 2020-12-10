// Javascript that calculates Area.

document.getElementById('mybutton').addEventListener('click', areaCalculation)

function areaCalculation () {
  const length = document.getElementById('sidelength').value
  const areatotal = length * length
  document.getElementById('area').innerHTML = areatotal
}
