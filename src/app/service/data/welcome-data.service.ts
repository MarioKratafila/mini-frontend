import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>("http://backend:8080/hello-world-bean");
   // console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    // we need to use the "tick" character when we want to replace a variable here:
    return this.http.get<HelloWorldBean>(`http://backend:8080/hello-world/path-variable/${name}`);
   // console.log("Execute Hello World Bean Service")
  }
}

export class HelloWorldBean {
  constructor(public message : string) {}
}
