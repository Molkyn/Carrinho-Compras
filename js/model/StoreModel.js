// js/model/StoreModel.js

export default class StoreModel {
    constructor() {
        // Adicionamos a propriedade 'image' com links de exemplo
        this.availableProducts = [
            { 
                id: 1, 
                name: "Televisão 4K", 
                price: 1500.00, 
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAl6iKp7UBBnu3bqPGH7mLIGakWy8RkQdYQ&s" 
            },
            { 
                id: 2, 
                name: "Máquina de Lavar", 
                price: 950.00, 
                image: "https://cdn.awsli.com.br/2500x2500/1599/1599132/produto/221656336/39247-87qcgytvhz.png" 
            },
            { 
                id: 3, 
                name: "Smartphone", 
                price: 2200.00, 
                image: "https://files.tecnoblog.net/wp-content/uploads/2025/01/galaxy-s25-azul-gelo.png" 
            },
            { 
                id: 4, 
                name: "Micro-ondas", 
                price: 300.00, 
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlO8Y7oNTk982AvmJ9GqvqpvhDL2syG5TEWA&s" 
            }
        ];
        this.cart = [];
    }

    // Retorna todos os produtos disponíveis
    getAvailableProducts() {
        return this.availableProducts;
    }

    // Retorna os itens no carrinho
    getCart() {
        return this.cart;
    }

    // Calcula e retorna o total do carrinho
    getCartTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }

    // Adiciona um produto ao carrinho
    addToCart(productId) {
        // Encontra o produto na lista de disponíveis
        const productToAdd = this.availableProducts.find(product => product.id === productId);

        if (productToAdd) {
            // Cria um novo item para o carrinho com um ID único (usando Date.now())
            const cartItem = { 
                ...productToAdd, 
                cartId: Date.now() + Math.random() // Garante ID único para cada item no carrinho
            };
            this.cart.push(cartItem);
            return cartItem;
        }
    }

    // Remove um produto do carrinho
    removeFromCart(cartId) {
        // Filtra para manter todos os itens Cujo 'cartId' é diferente do ID a ser removido
        this.cart = this.cart.filter(item => item.cartId !== cartId);
    }
}