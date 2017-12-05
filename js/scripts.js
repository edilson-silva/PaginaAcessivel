/* ##################################################  VARIÁVEIS  ################################################### */

// RESETS DE FONTE - TAMANHOS PADROES
var tituloPrincipalTamanhoPadrao = 36;
var tituloSecundarioTamanhoPadrao = 30;
var itemDeListaTamanhoPadrao = 16;
var textoComumTamanhoPadrao = 14;

// VARIAVEIS TEMPORARIAS PARA AUMENTO E DIMINUIÇÃO DE TAMANHO DAS FONTES
var tituloPrincipalTamanhoAtual = 36;
var tituloSecundarioTamanhoAtual = 30;
var itemDeListaTamanhoAtual = 16;
var textoComumTamanhoAtual = 14;

// VARIAVEIS DE INCREMENTO E DECREMENTO NO TAMANHO DAS FONTES
var incrementoDecrementoPadrao = 8;
var unidadeDeMedidaFonte = "px"; // PIXEL

// CORPO DA PAAGINA
var corpoPagina = document.getElementById("corpo-pagina");

// BOTOES
var btnAumentarFonte = document.getElementById("btn-aumentar-fonte");
var btnDiminuirFonte = document.getElementById("btn-diminuir-fonte");
var btnResetarFonte = document.getElementById("btn-resetar-fonte");
var btnAlterarContraste = document.getElementById("btn-alterar-contraste");

// TITTLOS e TEXTOS - H1, H2, P
var titulosPrinciapais = document.getElementsByClassName("titulo-principal");
var titulosSecundarios = document.getElementsByClassName("titulo-secundario");
var itensDeListas = document.getElementsByTagName("li");
var textosComuns = document.getElementsByClassName("texto-comum");

// SECOES DO ARTIGO
var secoes = document.getElementsByClassName("secao-informacao");

/* ############################################  ATRIBUICOES DE FUNCOES  ############################################ */

btnAumentarFonte.addEventListener("click", aumentarFonte);
btnDiminuirFonte.addEventListener("click", diminuirFonte);
btnResetarFonte.addEventListener("click", resetarFonte);
btnAlterarContraste.addEventListener("click", alterarContraste);


/* ###################################################  FUNCOES  ################################################### */

function aumentarFonte(){

	if(tituloPrincipalTamanhoAtual < (tituloPrincipalTamanhoPadrao * 1.6)) {

		tituloPrincipalTamanhoAtual += incrementoDecrementoPadrao;
		tituloSecundarioTamanhoAtual += incrementoDecrementoPadrao;
		itemDeListaTamanhoAtual += incrementoDecrementoPadrao;
		textoComumTamanhoAtual += incrementoDecrementoPadrao;

		alterarTamanhoFonte(tituloPrincipalTamanhoAtual, tituloSecundarioTamanhoAtual, itemDeListaTamanhoAtual, textoComumTamanhoAtual);
	}

}

function diminuirFonte(){

	if(tituloPrincipalTamanhoAtual > tituloPrincipalTamanhoPadrao) {

		tituloPrincipalTamanhoAtual -= incrementoDecrementoPadrao;
		tituloSecundarioTamanhoAtual -= incrementoDecrementoPadrao;
		itemDeListaTamanhoAtual -= incrementoDecrementoPadrao;
		textoComumTamanhoAtual -= incrementoDecrementoPadrao;

		alterarTamanhoFonte(tituloPrincipalTamanhoAtual, tituloSecundarioTamanhoAtual, itemDeListaTamanhoAtual, textoComumTamanhoAtual);
	}
}

function resetarFonte(){
		tituloPrincipalTamanhoAtual = tituloPrincipalTamanhoPadrao;
		tituloSecundarioTamanhoAtual = tituloSecundarioTamanhoPadrao;
		itemDeListaTamanhoAtual = itemDeListaTamanhoPadrao;
		textoComumTamanhoAtual = textoComumTamanhoPadrao;

		alterarTamanhoFonte(tituloPrincipalTamanhoAtual, tituloSecundarioTamanhoAtual, itemDeListaTamanhoAtual, textoComumTamanhoAtual);
}

function alterarTamanhoFonte(tituloPrincipalTamanho, tituloSecundarioTamanho, itemDeListaTamanho, textoComumTamanho){
	var i = 0;

	//alert(typeof parseInt(window.getComputedStyle(titulosPrinciapais[0]).getPropertyValue('font-size')));

	for(i = 0; i < titulosPrinciapais.length; i++){
		titulosPrinciapais[i].style.fontSize = (tituloPrincipalTamanho + unidadeDeMedidaFonte);
	}

	for(i = 0; i < titulosSecundarios.length; i++){
		titulosSecundarios[i].style.fontSize = (tituloSecundarioTamanho + unidadeDeMedidaFonte);
	}

	for(i = 0; i < itensDeListas.length; i++){
		itensDeListas[i].style.fontSize = (itemDeListaTamanho + unidadeDeMedidaFonte);
	}

	for(i = 0; i < textosComuns.length; i++){
		textosComuns[i].style.fontSize = (textoComumTamanho + unidadeDeMedidaFonte);
	}
}


function alterarContraste(){

	if(corpoPagina.style.backgroundColor == "rgb(0, 0, 0)"){
		
		corpoPagina.style.backgroundColor = "#FAFAFA";
		corpoPagina.style.color = "#333";

		for(i = 0; i < secoes.length; i++){
			secoes[i].style.backgroundColor = "#FFF";
			secoes[i].style.borderColor = "rgba(0, 0, 0, .15)";
			titulosSecundarios[i].style.backgroundColor = "#409B7F";
			titulosSecundarios[i].style.color = "#FFF";
		}

		btnAumentarFonte.style.backgroundColor = "#409B7F";
		btnAumentarFonte.style.color = "#FFF";
		btnAumentarFonte.style.borderColor = "#409B7F";

		btnDiminuirFonte.style.backgroundColor = "#409B7F";
		btnDiminuirFonte.style.color = "#FFF";
		btnDiminuirFonte.style.borderColor = "#409B7F";

		btnResetarFonte.style.backgroundColor = "#409B7F";
		btnResetarFonte.style.color = "#FFF";
		btnResetarFonte.style.borderColor = "#409B7F";
		
		btnAlterarContraste.style.backgroundColor = "#409B7F";
		btnAlterarContraste.style.color = "#FFF";
		btnAlterarContraste.style.borderColor = "#409B7F";

		btnAlterarContraste.setAttribute("aria-label", "Aplicar contraste");

	} else {
		
		corpoPagina.style.backgroundColor = "#000";
		corpoPagina.style.color = "#FFF";

		for(i = 0; i < secoes.length; i++){
			secoes[i].style.backgroundColor = "#000";
			secoes[i].style.border = "1px solid #FFF";
			titulosSecundarios[i].style.backgroundColor = "#FFF";
			titulosSecundarios[i].style.color = "#333";
		}

		btnAumentarFonte.style.backgroundColor = "#FFF";
		btnAumentarFonte.style.color = "#000";
		btnAumentarFonte.style.borderColor = "#FFF";

		btnDiminuirFonte.style.backgroundColor = "#FFF";
		btnDiminuirFonte.style.color = "#000";
		btnDiminuirFonte.style.borderColor = "#FFF";

		btnResetarFonte.style.backgroundColor = "#FFF";
		btnResetarFonte.style.color = "#000";
		btnResetarFonte.style.borderColor = "#FFF";
		
		btnAlterarContraste.style.backgroundColor = "#FFF";
		btnAlterarContraste.style.color = "#000";
		btnAlterarContraste.style.borderColor = "#FFF";

		btnAlterarContraste.setAttribute("aria-label", "Remover contraste");

	}

}
