import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AngularSplitModule } from 'angular-split';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProblemListComponent } from './problems/problem-list/problem-list.component';
import { ProblemComponent } from './problems/problem/problem.component';
import { TopicListComponent } from './category/topic-list/topic-list.component';
import { TopicComponent } from './category/topic/topic.component';
import { ProblemDetailsComponent } from './problem-details/problem-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ExploreComponent,
    FooterComponent,
    NavbarComponent,
    TopicListComponent,
    TopicComponent,
    ProblemListComponent,
    ProblemComponent,
    ProblemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AngularSplitModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
