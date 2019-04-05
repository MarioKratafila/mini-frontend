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
  welcomeMessageFromService: string = ''

  ngOnInit() {
    this.name = this.route.snapshot.params['name']

  }

  getWelcomeMessage(): void {

    // This is executed asynchronously
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("get welcome message");
  }

  
  getWelcomeMessageWithParameter(): void {

        // This is executed asynchronously
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("get welcome message");
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }


}

// export means "public"
export class TestClass {

  message: string = 'Some Welcome Message'

  constructor() { }

  testMethod(): void {
    // Compilation error: this.message = 5; 
    console.log(this.message)
  }



}
