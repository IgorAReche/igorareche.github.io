function entrarnosite(){
	var nome = document.getElementById('nome').value;
	var senha = document.getElementById('senha').value;
	

	if (nome == "admin" && senha == 123){
	
	window.open('first-page.html');
	}
	else{
		alert("Por favor digite um usuário válido");
	}
}


function entradadosdados(){
	var splitados = new Array();
	var i;
	var repetidos = [];
	var cont = new Array();
	var dados = prompt("Digite os dados");
	var j;
	var contador = new Array();
	contador = 0;
	var controle;
	
  	

	if (dados != ""){
		var splitados = dados.split(";");
	}
	if (isNaN(splitados[0]) == true){
		splitados.sort();
	}
		else {
			splitados.sort((a, b) =>  a - b);
			
	}
	
	for (i = 0; i<splitados.length; i ++) {
		cont[i] = 0;
		for (j = 0; j<splitados.length; j++){
			if (splitados[i] == splitados[j]){
				cont[i] ++;
			}
			
		} 	
	
	}
	
	var html = '<table id="tabela"> <th> <td>fi</td> <td>f%</td> </th>'; 
	for(i=0; i <cont.length; i ++) {
		if (cont[i] > 0) { //cont[i] != undefined
			controle = 0;
			for(j=0; j<splitados.length; j++){
				console.log(splitados[j] + " "  + repetidos);
				if (repetidos[i] == splitados[j]){
					controle = 1;
					
				}
			}
			if(controle == 0) {
				html += "<tr><td> " + splitados[i] + "</td><td> " + cont[i] + "</td></tr>";
				repetidos[i] = splitados[i];
			}
		}
	}
	html += '</table>';
	document.getElementById('tabela').innerHTML = html;
	console.log(html);
}



 	
	



