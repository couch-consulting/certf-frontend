import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentCardsComponent} from './content-cards/content-cards.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {CertfdataService, DialogHTTPErrorComponent} from './services/certfdata.service';
import {HomeComponent} from './components/home/home.component';
import {SelectedComponent} from './components/selected/selected.component';
import {HttpClientModule} from '@angular/common/http';
import {DialogCreateComponent, MgmtComponent} from './components/mgmt/mgmt.component';
import {ChangeComponent, DialogChangeComponent,
  DialogDeleteComponent, PutSnackBarComponent} from './components/mgmt/change/change.component';

import {SafeHtml} from './image-pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardsComponent,
    HomeComponent,
    SelectedComponent,
    DialogHTTPErrorComponent,
    MgmtComponent,
    ChangeComponent,
    DialogChangeComponent,
    DialogCreateComponent,
    DialogDeleteComponent,
    PutSnackBarComponent,
    SafeHtml
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [DialogHTTPErrorComponent, DialogChangeComponent, PutSnackBarComponent, DialogCreateComponent, DialogDeleteComponent],
  providers: [CertfdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
