import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroServiceService } from './hero-service.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { AppRoutingModule }   from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule }    from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)],
  declarations: [ AppComponent,HeroesComponent, HeroDetailComponent, MessageComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroServiceService, MessageService, InMemoryDataService]
})
export class AppModule { }
