$(document).ready(function () {
    if (obj) {
        /*console.log(obj);*/
        $('#formCadastro #Nome').val(obj.Nome);
        $('#formCadastro #CEP').val(obj.CEP);
        $('#formCadastro #Email').val(obj.Email);
        $('#formCadastro #Sobrenome').val(obj.Sobrenome);
        $('#formCadastro #CPF').val(obj.CPF);
        $('#formCadastro #Nacionalidade').val(obj.Nacionalidade);
        $('#formCadastro #Estado').val(obj.Estado);
        $('#formCadastro #Cidade').val(obj.Cidade);
        $('#formCadastro #Logradouro').val(obj.Logradouro);
        $('#formCadastro #Telefone').val(obj.Telefone);
    }

    $('#formCadastro').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CEP": $(this).find("#CEP").val(),
                "Email": $(this).find("#Email").val(),
                "Sobrenome": $(this).find("#Sobrenome").val(),
                "CPF": $(this).find("#CPF").val(),
                "Nacionalidade": $(this).find("#Nacionalidade").val(),
                "Estado": $(this).find("#Estado").val(),
                "Cidade": $(this).find("#Cidade").val(),
                "Logradouro": $(this).find("#Logradouro").val(),
                "Telefone": $(this).find("#Telefone").val()
            },
            error:
                function (r) {
                    if (r.status == 400)
                        ModalDialog("Ocorreu um erro", r.responseJSON);
                    else if (r.status == 500)
                        ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                },
            success: function (r) {
                ModalDialog("Sucesso!", r)
                $("#formCadastro")[0].reset();
            }
        });

        
    })

    

})

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}

$(document).ready(function () {
    

    // Função para exibir o modal de Beneficiários
    function ModalDialogBen(titulo) {
        var random = Math.random().toString().replace('.', '');
        var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
            '        <div class="modal-dialog">                                                                                 ' +
            '            <div class="modal-content">                                                                            ' +
            '                <div class="modal-header">                                                                         ' +
            '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
            '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
            '                </div>                                                                                             ' +
            '                <div class="modal-body">                                                                           ' +
            '                    <div class="row">                                                                               ' +
            '                        <div class="col-md-6">                                                                       ' +
            '                            <div class="form-group">                                                                ' +
            '                                <label for="CPF">CPF:</label>                                                       ' +
            '                                <input type="text" class="form-control" id="CPF" name="CPF" placeholder="Digite o CPF"> ' +
            '                            </div>                                                                                  ' +
            '                        </div>                                                                                      ' +
            '                        <div class="col-md-6">                                                                       ' +
            '                            <div class="form-group">                                                                ' +
            '                                <label for="Nome">Nome:</label>                                                     ' +
            '                                <input type="text" class="form-control" id="Nome" name="Nome" placeholder="Digite o nome"> ' +
            '                            </div>                                                                                  ' +
            '                        </div>                                                                                      ' +
            '                    </div>                                                                                          ' +
            '                </div>                                                                                             ' +
            '                <div class="modal-footer">                                                                         ' +
            '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
            '                </div>                                                                                             ' +
            '            </div><!-- /.modal-content -->                                                                         ' +
            '        </div><!-- /.modal-dialog -->                                                                               ' +
            '</div> <!-- /.modal -->';

        $('body').append(texto);
        $('#' + random).modal('show');
    }

    // Evento de clique para o botão Beneficiários
    $('#btnBeneficiarios').click(function () {
        ModalDialogBen("Beneficiários");
    });
});


