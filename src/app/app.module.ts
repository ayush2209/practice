import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { from } from 'rxjs';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NewsApiComponent } from './news-api/news-api.component';
import { DirectiveComponent } from './directive/directive.component';
import { FirstCustomDirective } from './first-custom.directive';
import { BindingComponent } from './binding/binding.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { RecieveMessageComponent } from './recieve-message/recieve-message.component';
import { LazyModule } from './lazy/lazy.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DisplayComponent,
    ParentComponent,
    ChildComponent,
    ReactiveFormComponent,
    NewsApiComponent,
    DirectiveComponent,
    FirstCustomDirective,
    BindingComponent,
    SendMessageComponent,
    RecieveMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
