function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    // Validar se ambos os campos estão preenchidos
    if (nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar uma nova linha na tabela
    var table = document.getElementById("contatosTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Inserir células na nova linha
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Preencher as células com os dados do formulário
    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;

    // Limpar o formulário
    document.getElementById("formContato").reset();
}