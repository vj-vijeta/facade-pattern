import { ProductFacade } from "./ProductFacade";

// Client
const facade = new ProductFacade();
facade.purchaseProduct("12345", 2, "Credit Card", "123 Street, City");
