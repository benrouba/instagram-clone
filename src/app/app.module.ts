import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ******************************************************************ngxComponenets******************************************************************
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { LikesComponent } from './likes/likes.component';
import { VideosComponent } from './videos/videos.component';
import { FeedComponent } from './feed/feed.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [{
      path: 'likes',
      component: LikesComponent
    },
    {
      path: 'messages',
      component: MessagesComponent
    },
    {
      path: 'videos',
      component: VideosComponent
    },
    {
      path: 'feed',
      component: FeedComponent
    },
    {
      path: 'profile/:id',
      component: UserProfileComponent
    },
    {
      path: '',
      redirectTo: 'feed',
      pathMatch: 'full'
    },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MessagesComponent,
    LikesComponent,
    VideosComponent,
    FeedComponent,
    UserProfileComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
