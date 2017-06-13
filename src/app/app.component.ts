import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SwellService, SessionService } from './core/services';


declare let swellrt: any;

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.scss'
  ],
  template: `
    <main>
      <router-outlet></router-outlet>
      <jetpad-modal-placeholder></jetpad-modal-placeholder>  
    </main>
    
  `
})

export class App implements OnInit {


  //
  // VERSION REFACTOR
  //

  constructor(private sessionSrv: SessionService) {
  }

  public ngOnInit() {
    //TODO: remove in production
    this.sessionSrv.startDefaultSession().subscribe(() => {
      console.debug('session initialized')
    });
  }


  //
  // VERSION EN PRODUCCION
  //


  /*
  constructor(private backend: BackendService) {
  }

  public ngOnInit() {

    

    // bind swellrt backend
    this.backend.bind(new Promise(
      (resolve, reject) => {
        swellrt.onReady( (s) => {
          console.log('swellrt client ready');
          resolve(s);
        });

        setTimeout( () => {
            reject(new Error('Timeout error loading SwellRT client (15s)'));
        }, 15000);
      }
    ));

    // resume existing session or start anonymous one
    this.backend.startDefaultSession();
  }
  */

}
