import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  name: string = ''

  ngOnInit() {
    this.name = this.route.snapshot.params['name']

  }

  getWelcomeMessage() : void  {
    console.log(this.service.executeHelloWorldBeanService());
    //console.log("get welcome message");
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
