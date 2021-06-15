import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  form :FormGroup;
  constructor(private fb : FormBuilder) {
    this.form =this.fb.group({
        name :['',Validators.required],
        email :['',Validators.email],
        postalAddress : ['',Validators.required],
        comment : ['']
    });
   }

  ngOnInit(): void {
  }

  submitForm(){
    alert(JSON.stringify(this.form.value));
  }

}
