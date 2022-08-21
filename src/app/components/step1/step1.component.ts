import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  formGroup: FormGroup;

  @Input() formError = 'Erorr';
  @Output() login = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl( '', [Validators.required])
    })
  }

  onFormChange() {
    this.formError = '';
  }

  onSubmit() {
    console.log('From Step1: ', this.formGroup.value)
    this.login.emit(this.formGroup.value)
  }
}
