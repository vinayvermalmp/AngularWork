import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.css'
})
export class UserReactiveFormComponent implements OnInit {
  projectFormGroup: FormGroup;
  projectStatus = ['stable', 'critical', 'finished'];

  ngOnInit () {
    this.projectFormGroup = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, 
        CustomValidators.inalidProjectName], CustomValidators.asyncInalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    })
  }
  
  onSubmit(){
    console.log(this.projectFormGroup.value);
  }
 
}
