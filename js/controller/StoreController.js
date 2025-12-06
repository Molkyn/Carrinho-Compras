// js/controller/StoreController.js

export default class StoreController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // 1. Ligar View aos Manipuladores (Handlers) do Controller
        // Quando a View captura um evento, ela chama a função correspondente aqui.
        this.view.bindAddToCart(this.handleAddToCart);
        this.view.bindRemoveFromCart(this.handleRemoveFromCart);

        // 2. Renderização Inicial
        // Mostra os produtos disponíveis para o usuário logo no início.
        this.view.renderProducts(this.model.getAvailableProducts());
        // E renderiza o carrinho vazio
        this.updateView(); 
    }

    // Função auxiliar para atualizar a View após qualquer alteração no Model
    updateView = () => {
        const cartItems = this.model.getCart();
        const cartTotal = this.model.getCartTotal();
        this.view.renderCart(cartItems, cartTotal);
    }
    
    // Manipulador de evento para adicionar um produto ao carrinho
    handleAddToCart = (productId) => {
        // 1. Diz ao Model o que fazer
        this.model.addToCart(productId);

        // 2. Pede à View para se atualizar com os novos dados do Model
        this.updateView();
    };

    // Manipulador de evento para remover um produto do carrinho
    handleRemoveFromCart = (cartId) => {
        // 1. Diz ao Model o que fazer
        this.model.removeFromCart(cartId);

        // 2. Pede à View para se atualizar com os novos dados do Model
        this.updateView();
    };
}