<script>
$(document).ready(function() {
$('#cpf').mask('000.000.000-00');
$('#cep').mask('00000-000');
});

$(document).ready(function() {
$('#cpf').mask('000.000.000-00');
$('#cep').mask('00000-000');

$('#cadastro-form').submit(function(event) {
event.preventDefault();

var nome = $('#nome').val();
var email = $('#email').val();
var telefone = $('#telefone').val();
var cpf = $('#cpf').val();
var endereco = $('#endereco').val();
var cep = $('#cep').val();

console.log(nome, email, telefone, cpf, endereco, cep);
});
});
</script>
