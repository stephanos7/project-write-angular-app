import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { appRouting } from './app.routing';
import { HttpModule } from "@angular/http";
import 'rxjs/add/operator/map';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoriesComponent } from './components/stories/stories.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// SERVICES
import { SessionService } from './services/session.service';
import { StoriesService } from './services/stories.service';
import { StoryComponent } from './components/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoriesComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    appRouting,
    HttpModule,
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
