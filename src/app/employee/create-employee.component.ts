import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  fullNameLength = 0;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
      })
    });

    this.employeeForm.valueChanges.subscribe( value => {
      console.log(JSON.stringify(value));
    });
    
    this.employeeForm.get('fullName').valueChanges.subscribe((value: string) => {
      this.fullNameLength = value.length;
    });
  }

  onLoadDataClick() :void {
    this.employeeForm.patchValue({
      fullName: 'Aakash Jhawar',
      email: 'aakash@gmail.com',
      skills: {
        skillName: 'Python',
        experienceInYears: '3',
        proficiency: 'beginner',
      }
    });
  }

  onSubmit(): void { // method dont return anything so void
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.controls.fullName.value);
    console.log(this.employeeForm.get('fullName').value);
  }

}
