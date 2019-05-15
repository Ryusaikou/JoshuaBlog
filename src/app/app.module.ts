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
import { BlogComponent } from './home/pages/blog/blog.component';
import { PageNotFoundComponent } from './home/pages/page-not-found/page-not-found.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    GuardsComponent,
    HttpComponent,
    InterceptorsComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
