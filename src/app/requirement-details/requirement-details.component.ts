import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-requirement-details',
  templateUrl: './requirement-details.component.html',
  styleUrls: ['./requirement-details.component.scss']
})
export class RequirementDetailsComponent implements OnInit {

  requirementsData : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

    this.requirementsData = this.formBuilder.group({
      jobTitle:['', Validators.required],
      jobDiscription: ['', Validators.required],
      experienceRequired: ['', Validators.required],
      salary: ['',Validators.required]
    })
   }

   onSend(){
     //whatever you want to do with the data
   }

  ngOnInit() {
  }

}
