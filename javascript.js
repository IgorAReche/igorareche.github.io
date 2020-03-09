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
	alert(splitados);
	}
}

function ordenacao(splitados){
	const insertion_Sort = (splitados) => {
  for (let i = 1; i < splitados.length; i++) {
    let j = i - 1
    let temp = splitados[i]
    while (j >= 0 && splitados[j] > temp) {
      splitados[j + 1] = splitados[j]
      j--
    }
    splitados[j+1] = temp
  }
  alert(temp);
  return splitados
  
}
}
	



