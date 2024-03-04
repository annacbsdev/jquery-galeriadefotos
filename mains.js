//quando o documento estiver pronto, executar a funçao

$(document).ready(function () {
    const btnNovaImagem = $('header button')
    const form = $('form')

    btnNovaImagem.click(function () {
        form.slideDown()
    })

    $('#botao-cancelar').click(function () {
        form.slideUp()
    })

    form.on('submit', function (e) {
        e.preventDefault()
        const enderecoNovaImg = $('#endereco-img-nova').val();
        const novoItem = $('<li></li>')
        $(`<img src="${enderecoNovaImg}">`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoNovaImg}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real 
            </a>
        </div>`).appendTo(novoItem)

        $(novoItem).hide().appendTo('ul').fadeIn();

        $('#endereco-img-nova').val('')

    })
})