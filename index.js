onload = function() {
	//Selecionar os elementos
	//Element Modal
	let modal = document.querySelector('.modal')

	let btnModal = document.querySelector("#abrir")
	let btnCancelar = document.querySelector("#cancelar")
	let btnCadastrar = document.querySelector("#cadastrar")

	//Adicionar eventos
	btnCancelar.addEventListener('click', cancelar, null)
	btnModal.addEventListener('click', abrir, null)

	//Funções
	function abrir(event) {
		event.preventDefault();
		modal.style.display = "block"
	}

	function cancelar(event) {
		event.preventDefault();
		modal.style.display = "none"
	}
}