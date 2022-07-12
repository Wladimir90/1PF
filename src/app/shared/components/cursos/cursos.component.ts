import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  @Input() tituloCurso: string = "";
  @Input() profesor: string = "";
  @Input() calificacion: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
