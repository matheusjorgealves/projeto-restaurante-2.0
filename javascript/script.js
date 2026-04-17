function clickMenu() { /* função para alterar o menu  */
    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}


function mudouTamanho () { /* função para esconder ou mostrar o menu */
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}


/* CONFIGURAÇÕES PARA O CARRINHO DE COMPRAS */
let carrinho = [];
function adicionarItem(nome, preco) { /* função para adicionar item */
    carrinho.push({
        nome: nome,
        preco: preco
    });

    mostrarCarrinho();
}


function mostrarCarrinho() { /* Faz o carrinho aparecer */
    let div = document.getElementById("carrinho-itens");

    if (!div) return;

    div.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {
        div.innerHTML += 
            `<p>
                ${item.nome} - R$ ${item.preco}
                <button onclick="removerItem(${index})">X</button>
            </p>`
        ;
        total += item.preco;
    });

    div.innerHTML += `<strong>Total: R$ ${total}</strong>`;
}


function removerItem(index) { /* remove item do carrinho */
    carrinho.splice(index, 1);
    mostrarCarrinho();
}


function limparCarrinho() { /* exclui todos os itens do carrinho */
    carrinho = [];
    mostrarCarrinho();
}
/* FIM DE CONFIGURAÇÕES PARA CARRINHO DE COMPRAS */