import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
   // console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {

    let headers = new HttpHeaders({
      Authorization: this.createBasicAuthenticationHttpHeader()
    })

    // we need to use the "tick" character when we want to replace a variable here:
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    {headers : headers});
   // console.log("Execute Hello World Bean Service")
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'mario';
    let password = 'pass';
    let basicAuthHeaderString = 'Basic '+window.btoa(username+":"+password);
    return basicAuthHeaderString;
  }
}

export class HelloWorldBean {
  constructor(public message : string) {}
}
