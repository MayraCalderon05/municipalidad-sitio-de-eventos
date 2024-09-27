import { Component } from '@angular/core';
import { ConectarService } from 'src/app/serve/conectar.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  datos: any = [];
  constructor(private service: ConectarService) { }

  ngOnInit(): void {
    this.service.obtenerDatos().subscribe((response) => {
      this.datos = response;
    })
  }
}
