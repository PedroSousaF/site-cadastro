class Cadastro {
    constructor() {
        this.dados = [];
    }

    listar() {
        const lista = document.getElementById("lista");
        lista.innerHTML = "";
        this.dados.forEach((dado, index) => {
            const item = document.createElement("li");
            item.textContent = dado;
            const editar = document.createElement("button");
            editar.textContent = "Editar";
            editar.onclick = () => this.editar(index);
            const excluir = document.createElement("button");
            excluir.textContent = "Excluir";
            excluir.onclick = () => this.deletar(index);
            item.appendChild(editar);
            item.appendChild(excluir);
            lista.appendChild(item);
        });
    }

    cadastrar(dado) {
        this.dados.push(dado);
        this.listar();
    }

    editar(index) {
        const novoDado = prompt("Editar:", this.dados[index]);
        if (novoDado) {
            this.dados[index] = novoDado;
            this.listar();
        }
    }

    deletar(index) {
        this.dados.splice(index, 1);
        this.listar();
    }
}

const cadastro = new Cadastro();
document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    cadastro.cadastrar(nome);
    document.getElementById("form").reset();
};
