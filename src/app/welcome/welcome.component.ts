import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  name: string = ''

  ngOnInit() {
    this.name = this.route.snapshot.params['name']

  }

}

// export means "public"
export class TestClass {

  message : string = 'Some Welcome Message'

  constructor() {}

  testMethod() : void {
    // Compilation error: this.message = 5; 
    console.log(this.message)  
  }


}
