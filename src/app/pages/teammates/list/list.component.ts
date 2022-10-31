import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { CatalystService } from 'src/app/services/catalyst.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPreguntasComponent implements OnInit {

  Pregunta: Pregunta[] = [];
  searchText: any;
  sidePanel: boolean = true;
  searchBar = false;
  login = false;

  active: boolean;
  @Output() sidePanelEvent = new EventEmitter<boolean>();
  @ViewChild("card", {static: false}) card: ElementRef;

  constructor(
    private catalystService: CatalystService,
    private router: Router
  ) { 
  }

  ngOnInit(){
    this.catalystService.currentBarValue.subscribe(searchBar => this.searchBar = searchBar)
    this.catalystService.currentLoginValue.subscribe(login => this.login = login)

    this.catalystService.getPreguntasList().subscribe(res =>{ this.Pregunta = res.map( e => { return {
        id : e.payload.doc.id,
        ...e.payload.doc.data() as{}
        } as Pregunta;
        })
      });
    }

    removePregunta(Pregunta: Pregunta) {
      if(confirm("Are you sure to delete " + Pregunta.titulo)){
        this.catalystService.deletePregunta(Pregunta);
      }
    }

    editPregunta(Pregunta: Pregunta) {
      this.sidePanelEvent.emit(this.sidePanel);
      this.router.navigate(['/edit/:id', { id: Pregunta.id }]);
    }

    previousIndex: number = -1;
    public detalle: boolean = false;

    viewPregunta(Pregunta: Pregunta, index) {
    if (this.previousIndex >= 0 && this.previousIndex != index) {
      this.Pregunta[this.previousIndex].detalle = false;
    }

    // Updating index
    this.previousIndex = index;
    this.Pregunta[index].detalle = !this.Pregunta[index].detalle;

    // Navigates
    this.sidePanelEvent.emit(this.sidePanel);
    this.router.navigate(['/detail/:id', { id: Pregunta.id }]);

   }

   hideSearchBar() {
    this.catalystService.changeBarValue(false);
  }

  }
