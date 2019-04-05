import { NgModule } from '@angular/core';

import { StoremonobasicSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StoremonobasicSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StoremonobasicSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StoremonobasicSharedCommonModule {}
