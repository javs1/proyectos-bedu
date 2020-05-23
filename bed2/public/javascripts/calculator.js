function setListeners (){
    const additionButton=document.getElementById('mas')
    const minusonButton=document.getElementById('menos')
    const multiplyButton=document.getElementById('multiplicar')
    
    additionButton.addEventListener('click',()=>fetchOperation('addition'))
    minusonButton.addEventListener('click',()=>fetchOperation('minus'))
    multiplyButton.addEventListener('click',()=>fetchOperation('multiply'))
}
function fetchOperation(operation){
    const valor1= document.getElementById('valor1').value
    const valor2= document.getElementById('valor2').value
    const resultado= document.getElementById('result')

    const headers ={first_value: valor1, second_value:valor2}

    fetch(`http://localhost:3000/api/v1/basic_calculator/${operation}`, {
    method: "POST",
    headers: headers
  })
  .then(data=>data.json())
  .then(json =>{
   resultado.innerText=json.resultado
  })
  .catch(error=>console.log(error))
}
setListeners()