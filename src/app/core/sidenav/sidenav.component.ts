import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Route, Router } from '@angular/router';

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
    {name: "Inscripciones", rote:"FormularioinscripcionComponent",icon:"school"},
    {name: "Contacto", route:"",icon:"mail"}
];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  exit() {
    localStorage.removeItem('tipo_user');
    this.router.navigate(['login']);
  }

  shouldRun = true;

  ngOnInit () { 
    
  }

}
