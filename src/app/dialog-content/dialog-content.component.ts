import { Component, Inject } from '@angular/core';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';






export interface DialogData {
  name: string,
  email: string | null,
  address: string,
}


@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
  name: string = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  address: string = '';
  dialogRef: MatDialogRef<DialogContentComponent>;
  
  isNameValid: boolean = true;
  isEmailValid: boolean = true;
  isAddressValid: boolean = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  
 
  constructor (
    dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.dialogRef = dialogRef; 
      
      this.address = data.address;
  
   }
   onSubmit(): void {
    this.isNameValid = !!this.name;
    this.isEmailValid = this.email.valid;
    this.isAddressValid = !!this.address;
    
    if (this.isNameValid && this.isEmailValid && this.isAddressValid)  {
    const formData: DialogData = {
      name: this.name,
      email: this.email.value,
      address: this.address
    };
    this.dialogRef.close(formData);
  }
}
  onCancel(): void {
    
      this.dialogRef.close();
    
  }
 

}
