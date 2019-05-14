import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { GuardsComponent } from './core/guards/guards.component';
import { HttpComponent } from './core/http/http.component';
import { InterceptorsComponent } from './core/interceptors/interceptors.component';
import { ServicesComponent } from './core/services/services.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    GuardsComponent,
    HttpComponent,
    InterceptorsComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
