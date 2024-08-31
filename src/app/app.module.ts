import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // เพิ่มการ import นี้

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // เพิ่ม HttpClientModule ใน imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
