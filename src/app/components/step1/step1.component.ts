import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  formGroup: FormGroup;

  @Input() formError = '';

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('login', [Validators.required]),
      password: new FormControl( '12345', [Validators.required])
    })
  }

}
