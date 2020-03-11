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
	var repetidos = new Array();
	var cont = new Array();
	var dados = prompt("Digite os dados");
	var j;
	var contador = new Array();
	contador = 0;
	var controle;
	var tabela = document.createElement("table");
	var thead = document.createElement("thead");
  	var tbody = document.createElement("tbody");

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
	console.log(splitados);
	console.log(cont);
	repetidos= "";
	for(i=0; i <cont.length; i ++) {
		if (cont[i] > 0) { //cont[i] != undefined
			controle = 0;
			for(j=0; j<splitados.length; j++){
				if (repetidos[i] == splitados[j]){
					controle = 1;
					console.log(splitado[j] + " "  + splitado[i]);
				}
			}
			if(controle == 0) {
				console.log("elemento: " + splitados[i] + " repetições: " + cont[i]);
				repetidos[i] = splitados[i];
			}
		}
	}
        var body = document.getElementsByTagName("body")[0];
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        for (var j = 0; j < repetidos.length; j++) {
            var row = document.createElement("tr");
			for (var i = 0; i < 2; i++) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(splitados);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        tbl.setAttribute("border", "2");
    }



 	
	



