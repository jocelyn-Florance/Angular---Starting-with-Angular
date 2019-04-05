import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {AppListKittenComponent} from './components/app-list-kitten/app-list-kitten.component';
import {AppCreateKittenComponent} from './components/app-create-kitten/app-create-kitten.component';


const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'list-kitten', component: AppListKittenComponent },
  { path: 'create-kitten', component: AppCreateKittenComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(ROUTES)]],
  exports: [RouterModule]
})
export class AppRoutingModule { }

