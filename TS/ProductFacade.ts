import { InventoryManager } from "./InventoryManager";
import { PaymentProcessor } from "./PaymentProcessor";
import { ShippingService } from "./ShippingService";

// Facade
export class ProductFacade {
    private inventoryManager: InventoryManager;
    private paymentProcessor: PaymentProcessor;
    private shippingService: ShippingService;

    constructor() {
        this.inventoryManager = new InventoryManager();
        this.paymentProcessor = new PaymentProcessor();
        this.shippingService = new ShippingService();
    }

    // Method to purchase a product
    purchaseProduct(productId: string, quantity: number, paymentMethod: string, shippingAddress: string): void {
        // Check product availability
        if (this.inventoryManager.checkProductAvailability(productId, quantity)) {
            // Process payment
            if (this.paymentProcessor.processPayment(paymentMethod)) {
                // Ship the product
                this.shippingService.shipProduct(productId, quantity, shippingAddress);
            } else {
                console.log("Payment processing failed.");
            }
        } else {
            console.log("Product is not available in the desired quantity.");
        }
    }
}
