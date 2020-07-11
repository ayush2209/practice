import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NewsApiComponent } from './news-api/news-api.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DirectiveComponent } from './directive/directive.component';
import { BindingComponent } from './binding/binding.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { RecieveMessageComponent } from './recieve-message/recieve-message.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'news', component: NewsApiComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'send', component: SendMessageComponent },
  { path: 'recieve', component: RecieveMessageComponent },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
