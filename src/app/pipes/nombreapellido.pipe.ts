import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreapellido'
})
export class NombreapellidoPipe implements PipeTransform {

  transform(value: any, nombre:string, apellido: string): string {
    return ` ${nombre} ${apellido}`;
  }


}
