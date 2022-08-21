import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  serverError = '';

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(value: any) {
    console.log('OnTestcomponent: ', value);
    this.serverError += 'r';
  }
}
