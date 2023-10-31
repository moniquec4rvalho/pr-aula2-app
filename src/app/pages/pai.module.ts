import { NgModule } from '@angular/core';
import { PaiComponent } from './pai.component';
import { Filho1PageComponent } from './filho1-page.component';
import { Filho2PageComponent } from './filho2-page.component';
import { PaiRoutingModule } from './pai.routing';

@NgModule({
  declarations: [
    PaiComponent,
    Filho1PageComponent,
    Filho2PageComponent
  ],
  imports: [
    PaiRoutingModule,
  ],
  exports: [
  ],
  providers: []
})

export class PaiPageModule { }