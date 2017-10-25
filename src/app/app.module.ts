import { AuthGuardService } from './services/auth-guard.service';
import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { appRoutes } from './routes.config';
import { HomeComponent } from './components/home/home.component';
import { ProfilesComponent } from './components/profiles/profiles.component'
import { FormsModule } from '@angular/forms';
import { WelcomePipe } from './pipe/welcome.pipe';
import { FilterProfilesPipe } from './pipe/filter-profiles.pipe';
import { SearchFilterDirective } from './directives/search-filter.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfilesComponent,
    WelcomePipe,
    FilterProfilesPipe,
    SearchFilterDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthGuardService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
