import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RouterModule, Route, Router } from '@angular/router';
import { AUTH_ACTIONS } from 'src/app/store/actions/auth.action';
import { Store } from '@ngrx/store';
import { DashboardModule } from 'src/app/shared/components/dashboard/dashboard.module';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [
    {name: "Home", route: "HomeComponent",icon:"home"},
    {name: "Alumnos", route:"alumnos",icon:"group"},
    {name: "Cursos", route:"",icon:"menu_book"},
    {name: "Inscripciones", rote:"FormularioinscripcionComponent",icon:"school"}
];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private store:Store) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  exit() {
    this.store.dispatch(AUTH_ACTIONS.Logout.run())
  }

  shouldRun = true;

  ngOnInit () { 
    
  }

}
