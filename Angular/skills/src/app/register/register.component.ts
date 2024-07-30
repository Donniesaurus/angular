import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
//
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
//
export class RegisterComponent {
//
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
//
  onSubmit() {
    console.log(
      `You entered : userName:
      ${this.registerForm.controls['username'].value},
      And password:
      ${this.registerForm.controls['password'].value}`,
    );
  }

}

