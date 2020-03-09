function entrarnosite(){
	var nome = document.getElementById('nome').value
	var senha = document.getElementById('senha').value
	

	if (nome == "admin" && senha == 123){
	
	window.open('first-page.html')
	}
	else{
		alert("Por favor digite um usuário válido")
	}
}


function entradadosdados(){
var entrada;
var splitados = new Array();
var dados = prompt("Digite os dados");
if (dados != ""){
	entrada = dados;
	var splitados = entrada.split(";");
	alert(entrada)
	}


	



const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let temp = nums[i]
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j+1] = temp
  }
  return nums
}

