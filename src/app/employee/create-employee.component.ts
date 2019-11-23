import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: [''],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
      })

    })
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
