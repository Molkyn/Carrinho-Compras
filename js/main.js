// js/main.js

import StoreModel from "./model/StoreModel.js";
import StoreView from "./view/StoreView.js";
import StoreController from "./controller/StoreController.js";

// Inicializa a aplicação criando instâncias de Model e View
// e as passando para o Controller.
const app = new StoreController(new StoreModel(), new StoreView());

// A partir daqui, o Controller assume o controle