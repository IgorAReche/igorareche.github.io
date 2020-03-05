

//if (nome == 'admin' && senha =='123'){
	//window.location.href = 'first-page.html'
function entrarnosite(){
	var nome = document.getElementById('nome').value
	var senha = document.getElementById('senha').value
	

	if (nome == "admin" && senha == 123){
	
	window.location.assign ('first-page.html')
	}
	else{
		alert("Por favor digite um usuário válido")
	}
}
