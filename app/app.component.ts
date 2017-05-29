import {Component} from 'angular2/core';
import {RouteConfig,Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { MainPageComponent } from './home/home.component';
import { LoginComponent}  from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FindGunComponent } from 'app/findgun/findgun.component';
import { AddGunComponent } from 'app/addgun/addgun.component';



@Component({
    selector: 'my-app',
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'./',    name: 'Home',   component: MainPageComponent, useAsDefault: true},
  {path:'./login', name:'Login', component: LoginComponent},
  {path:'./register', name:'Register', component: RegistrationComponent},
  {path:'/FindGun', name: 'FindGun', component: FindGunComponent},
  {path:'/addgun', name: 'AddGun', component: AddGunComponent},
])

export class AppComponent { 
	router: Router;
	
	constructor(router: Router) {
		this.router = router;
	}
	
 
}
