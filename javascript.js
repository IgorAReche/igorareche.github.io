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
function menudropdown() {
  document.getElementById("tipos-descritivos").classList.toggle("show");

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
}
function Upload() {
        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                if (reader.readAsBinaryString) {
                    reader.onload = function (e) {
                        ProcessExcel(e.target.result);
                    };
                    reader.readAsBinaryString(fileUpload.files[0]);
                } else {
                    reader.onload = function (e) {
                        var data = "";
                        var bytes = new Uint8Array(e.target.result);
                        for (var i = 0; i < bytes.byteLength; i++) {
                            data += String.fromCharCode(bytes[i]);
                        }
                        ProcessExcel(data);
                    };
                    reader.readAsArrayBuffer(fileUpload.files[0]);
                }
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid Excel file.");
        }
    };
    function ProcessExcel(data) {
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
 
        var firstSheet = workbook.SheetNames[0];
 
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 
        var table = document.createElement("table");
        table.border = "1";
 
		var row = table.insertRow(-1);
		
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Id";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Name";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Country";
		row.appendChild(headerCell);
		
        for (var i = 0; i < excelRows.length; i++) {
            var row = table.insertRow(-1);
 
            
            var cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Id;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Name;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Country;
        }
 
        var dvExcel = document.getElementById("dvExcel");
        dvExcel.innerHTML = "";
        dvExcel.appendChild(table);
    };

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
	var totalrep = 0;
  	var fperc = new Array();

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
		totalrep = cont[i] + totalrep;
	}
	
	var html = '<table id="tabela"> <th> <td>fi</td> <td>f%</td> <td>facm</td> <td>facm%</td> </th>'; 
	for(i=0; i <cont.length; i ++) {
		fperc[i] = Math.round(((cont[i] / totalrep) * 100));
			controle = 0;
			for(j = 0; j < splitados.length; j++){
				if (repetidos[j] == splitados[i]){
					controle = 1;
					
				}
			}
			if (controle == 0) {
				html += "<tr><td> " + splitados[i] + "</td><td> " + cont[i] + "</td><td>"  + (fperc[i]*cont[i]) + "</td></tr>"
				repetidos[i] = splitados[i];

			}
			else{
				repetidos[i] = -1;

			}
		}

	
	
	console.log(totalrep);
	html += '</table>';
	document.getElementById('tabela').innerHTML = html;
	console.log(html);
}



 	
	



