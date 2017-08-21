import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { StoriesComponent } from './components/stories/stories.component';
import { StoryComponent } from './components/story/story.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// SERVICES
import { SessionService } from './services/session.service';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'stories', component: StoriesComponent, canActivate: [SessionService]},
    { path: 'stories/:id', component: StoryComponent},
    { path: '**', component: NotFoundComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);