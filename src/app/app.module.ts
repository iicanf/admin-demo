import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// angular material lib
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
// local lib
import {AppComponent} from './app.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import { SideLeftNavComponent } from './side-left-nav/side-left-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideLeftNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatIconModule, MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
