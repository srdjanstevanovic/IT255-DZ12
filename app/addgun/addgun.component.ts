import { Component, Directive } from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router} from 'angular2/router'

@Component({
 selector: 'AddGun',
 templateUrl: 'app/addgun/addgun.html',
 styleUrls: ['css/styles.css']
})
export class AddGunComponent {
 registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
    this.registerForm = builder.group({
     id: ["", Validators.none],
     name: ["", Validators.none],
     });
}


 onAddGun(): void {
	var data = "&id="+this.registerForm.value.id+"&name="+this.registerForm.value.name;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	headers.append("token",localStorage.getItem("token"));
	this.http.post('http://localhost/php/addgun.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => alert(JSON.stringify(err)),
	() => { 
	if(this.postResponse._body.indexOf("error") === -1){
		alert("Uspesno dodavanje sobe");
	    this.router.parent.navigate(['./Home']);
	 }else{
		alert("Neuspesno dodavanje sobe");
	 }
	 }
	);
	
  }
}