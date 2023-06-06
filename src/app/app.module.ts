import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular material imports
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';




import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DialogContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
   
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule, MatDialogModule,
    MatInputModule
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
