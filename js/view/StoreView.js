// js/view/StoreView.js

export default class StoreView {
    constructor() {
        // Seleção de elementos HTML
        this.productsList = document.querySelector("#products-list");
        this.cartList = document.querySelector("#cart-list");
        this.cartTotalElement = document.querySelector("#cart-total");
    }

    // ------------------------------------
    //  Renderização (Mostrar dados na tela)
    // ------------------------------------

    // Renderiza a lista de produtos disponíveis para adicionar
    renderProducts(products) {
        this.productsList.innerHTML = products.map(product => `
            <li class="product-item">
                <img src="${product.image}" alt="${product.name}" class="product-img">
                
                <div class="product-info">
                    <strong>${product.name}</strong> <br> 
                    R$ ${product.price.toFixed(2)}
                </div>

                <button data-id="${product.id}" class="add-to-cart">Adicionar</button>
            </li>
        `).join('');
    }

    // Renderiza o carrinho e o total
    renderCart(cartItems, total) {
        // 1. Renderiza a lista de itens no carrinho
        this.cartList.innerHTML = cartItems.map(item => `
            <li>
                ${item.name} (R$ ${item.price.toFixed(2)})
                <button data-cart-id="${item.cartId}" class="remove-from-cart">Remover</button>
            </li>
        `).join('');

        // 2. Renderiza o total do carrinho
        this.cartTotalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    // ------------------------------------
    //  Binding (Capturar Eventos)
    // ------------------------------------
    
    // Captura o clique no botão "Adicionar" (productsList)
    bindAddToCart(handler) {
        this.productsList.addEventListener("click", e => {
            const target = e.target;
            if (target.tagName === "BUTTON" && target.classList.contains("add-to-cart")) {
                // Obtém o ID do produto a partir do atributo data-id
                const productId = parseInt(target.dataset.id); 
                handler(productId); // Chama a função no Controller
            }
        });
    }

    // Captura o clique no botão "Remover" (cartList)
    bindRemoveFromCart(handler) {
        this.cartList.addEventListener("click", e => {
            const target = e.target;
            if (target.tagName === "BUTTON" && target.classList.contains("remove-from-cart")) {
                // Obtém o ID do item no carrinho a partir do atributo data-cart-id
                const cartId = parseFloat(target.dataset.cartId); // Deve ser float pois Date.now() retorna um número grande
                handler(cartId); // Chama a função no Controller
            }
        });
    }
}