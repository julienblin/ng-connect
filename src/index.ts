import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class NgConnectModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgConnectModule,
      providers: [],
    };
  }
}
