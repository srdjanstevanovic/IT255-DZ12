import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {SearchPipe} from 'app/pipe/search';
import 'rxjs/Rx';
import {Router} from 'angular2/router';
import {FORM_DIRECTIVES , FORM_BINDINGS} from 'angular2/common';
@Component({
    selector: 'FindGun',
    templateUrl: 'app/findgun/findgun.html',
    pipes: [SearchPipe]
})

export class FindGunComponent {
    http: Http;
    router:Router;
    name:String ="";
    id:int=0;
    guns: Object[];


    constructor(http: Http, router: Router){
        this.http = http;
        this.router = router;
        var headers = new Headers();

        http.get('http://localhost/php/getguns.php',{headers:headers})
            .map(res => res.json())
            .subscribe(guns => {this.guns = guns.guns;
            });

    }
}