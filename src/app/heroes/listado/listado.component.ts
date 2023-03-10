import { Component } from '@angular/core';
import { HeroeComponent } from '../heore/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heores:string[]= ['Spiderman','Ironman','Hulk','Thor','Cap America']
  heroeBorrado:string= ''

  borrarHeroe(){
    this.heroeBorrado = this.heores.shift() || '';

  }
}
