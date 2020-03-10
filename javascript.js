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
	var splitados = new Array();
	var i;
	var repetidos = new Array();
	var cont = new Array();
	var dados = prompt("Digite os dados");
	if (dados != ""){
		var splitados = dados.split(";");
	}
	if (isNaN(splitados[0]) == true){
		splitados.sort();
		alert(splitados);
	}
		else {
			splitados.sort((a, b) =>  a - b);
			alert(splitados);
	}
	
	for (i = 0; i<splitados.length; i ++) {
		if (splitados[i] == splitados[i++]){
				repetidos[i] = splitados.splice(splitados[i], splitados[i++]);

			cont[i] = cont + 1
			
		}
			else {
				repetidos[i] = splitados[i];
				cont[i] = 1
			}
		alert(repetidos);
		alert()
	}

}



 	
	



