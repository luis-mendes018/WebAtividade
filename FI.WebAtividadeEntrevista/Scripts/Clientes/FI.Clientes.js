$(document).ready(function () {
    $('#formCadastro').submit(function (e) {
        e.preventDefault();

        // Verifica se os campos obrigatórios estão preenchidos
        var camposObrigatorios = ["Nome", "CEP", "Email", "Sobrenome", "CPF",
            "Nacionalidade", "Estado", "Cidade", "Logradouro", "Telefone"];
        var camposVazios = [];

        camposObrigatorios.forEach(function (campo) {
            var valorCampo = $(this).find("#" + campo).val();
            if (!valorCampo) {
                camposVazios.push(campo);
            }
        }.bind(this)); // Define o contexto com o formulário submetido


        if (camposVazios.length > 0) {
            var mensagem = "Os seguintes campos são obrigatórios e não foram preenchidos:<ul>";
            camposVazios.forEach(function (campo) {
                mensagem += "<li>" + campo + "</li>";
            });
            mensagem += "</ul>";
            ModalDialog("Campos obrigatórios não preenchidos", mensagem);
            return;
        }

        function validarCPF(cpf) {
            //console.log('CPF digitado: ', cpf);
            cpf = cpf.replace(/[^\d]+/g, '');
            if (cpf == '') return false;
            if (cpf.length != 11 ||
                cpf == "00000000000" ||
                cpf == "11111111111" ||
                cpf == "22222222222" ||
                cpf == "33333333333" ||
                cpf == "44444444444" ||
                cpf == "55555555555" ||
                cpf == "66666666666" ||
                cpf == "77777777777" ||
                cpf == "88888888888" ||
                cpf == "99999999999")
                return false;
            var add = 0;
            for (var i = 0; i < 9; i++)
                add += parseInt(cpf.charAt(i)) * (10 - i);
            var rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
                return false;
            add = 0;
            for (i = 0; i < 10; i++)
                add += parseInt(cpf.charAt(i)) * (11 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(10)))
                return false;
            return true;
        }

        var cpf = $(this).find("#CPF").val();
        if (!validarCPF(cpf)) {
            ModalDialog("CPF inválido", "Digite um CPF válido");
            return;
        }

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





