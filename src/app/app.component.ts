import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentComponent, DialogData } from './dialog-content/dialog-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';
  email: string = '';
  address: string = '' ;
 
  constructor(public dialog: MatDialog) {

  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, 
      {
        
        height:'70 %',
     
      data: {
        name: this.name,
        email: this.email,
        adress: this.address
      }
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      if (result) {
      this.name = result.name;
      this.email = result.email ?? '';
      this.address = result.address;
     console.log(result);
    }
    });
    
  }
}
