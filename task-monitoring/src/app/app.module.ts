import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRouterModule } from './app.routes';
import { UserTaskListComponent } from './user-task-list/user-task-list.component';
import { UserControlComponent } from './user-control/user-control.component';
import { AuthenticationService } from './service/authentication.service';
import { IdleTimeoutService } from './service/idle-timeout.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserTaskListComponent,
    UserControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouterModule
  ],
  providers: [AuthenticationService, IdleTimeoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
