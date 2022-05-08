import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodosComponent } from './todos/todos.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { TodoNewComponent } from './todos/todo-new/todo-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    TodoListComponent,
    TodoDetailComponent,
    SidebarComponent,
    TodosComponent,
    TodoEditComponent,
    TodoNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
