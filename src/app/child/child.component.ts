import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message = ''
  constructor() { }


  ngOnChanges() {
    console.log('Ciclo APP ==> ngOnChanges');
  }

  ngOnInit() {
    console.log('Ciclo APP ==> ngOnInit');
  }

  ngDoCheck() {
    console.log('Ciclo APP ==> ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Ciclo ==> ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Ciclo ==> ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Ciclo ==> AfterViewInit');
  }

   ngAfterViewChecked() {
    console.log('Ciclo ==> AfterViewChecked');
  }

  ngOnDestroy(){

  }

}
