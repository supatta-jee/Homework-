import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BackendService } from './backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
const appRoutes : Routes =[
  {path:"a", component:AboutComponent},
  {path:"c", component: ContactComponent},
  {path:"p", component: PortfolioComponent},
  {path:"s", component: SkillComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
