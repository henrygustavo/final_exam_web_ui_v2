import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentService } from './services/student.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [ StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
