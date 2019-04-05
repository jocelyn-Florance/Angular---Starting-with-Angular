import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AppListKittenComponent } from './components/app-list-kitten/app-list-kitten.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppCreateKittenComponent } from './components/app-create-kitten/app-create-kitten.component';


@NgModule({
    declarations: [
        AppComponent,
        SignUpComponent,
        UserProfileComponent,
        HighlightDirective,
        CatalogComponent,
        AppListKittenComponent,
        NavbarComponent,
        AppCreateKittenComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
