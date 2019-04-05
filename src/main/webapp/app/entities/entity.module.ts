import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'product',
                loadChildren: './product/product.module#StoremonobasicProductModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#StoremonobasicProductCategoryModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#StoremonobasicCustomerModule'
            },
            {
                path: 'product-order',
                loadChildren: './product-order/product-order.module#StoremonobasicProductOrderModule'
            },
            {
                path: 'order-item',
                loadChildren: './order-item/order-item.module#StoremonobasicOrderItemModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#StoremonobasicInvoiceModule'
            },
            {
                path: 'shipment',
                loadChildren: './shipment/shipment.module#StoremonobasicShipmentModule'
            },
            {
                path: 'notification',
                loadChildren: './notification/notification.module#StoremonobasicNotificationModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoremonobasicEntityModule {}
