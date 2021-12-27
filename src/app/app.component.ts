import { Component , ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'component';

  message="";

  @ViewChild(ChildComponent)viewChild: ChildComponent | any;

  ngOnChanges() {
    console.log('Ciclo CHILD ==> ngOnChanges');
  }

  ngOnInit() {
    console.log('Ciclo CHILD ==> ngOnInit');

  }

  ngDoCheck() {
    console.log('Ciclo CHILD ==> ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Ciclo CHILD ==> ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Ciclo CHILD ==> ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Ciclo CHILD ==> AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Ciclo CHILD ==> AfterViewChecked');
    this.message=this.viewChild.message;

  }

  ngOnDestroy(){

  }

}
