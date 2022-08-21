import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  title = 'Реактивные формы';
  formGroup: FormGroup;

  @Input() formError = '';
  @Output() adding = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surName: new FormControl( '', [Validators.required]),
      phone: new FormArray([
        new FormControl(null, Validators.required)
      ])
    })
  }

  onFormChange() {
    this.formError = '';
  }

  onSubmit() {
    console.log('From Step1: ', this.formGroup.value)
    this.adding.emit(this.formGroup.value)
  }

  get userFormGroup() {
    return this.formGroup.get('phone') as FormArray
  }
  addPhone() {
    (<FormArray>this.formGroup.get('phone')).push(
      new FormControl(null, Validators.required)
    )
  }

  removePhone(phoneIndex: number) {
    (<FormArray>this.formGroup.get('phone')).removeAt(phoneIndex)
  }
}
