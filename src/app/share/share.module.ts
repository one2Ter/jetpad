import { NgModule } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-modal';
import { ClipboardModule }  from 'ngx-clipboard';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { OrderPipe, SearchPipe, MomentPipe } from './pipes';
import {
  ProfileComponent,
  UserIconComponent,
  UserPanelComponent,
  ErrorModalComponent,
  AlertModalComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    OrderPipe,
    SearchPipe,
    MomentPipe,
    ProfileComponent,
    UserIconComponent,
    UserPanelComponent,
    ErrorModalComponent,
    AlertModalComponent
  ],
  exports: [
    OrderPipe,
    SearchPipe,
    MomentPipe,
    ProfileComponent,
    UserIconComponent,
    UserPanelComponent,
    ErrorModalComponent,
    AlertModalComponent,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    ModalModule,
    ClipboardModule
  ]
})

export class ShareModule {

}
