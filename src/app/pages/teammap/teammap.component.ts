import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CatalystService } from 'src/app/services/catalyst.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

import * as L from 'leaflet';

interface Pregunta {
  id: string;
  titulo: string;
  respuestas: [
      {
          texto: string;
          respuestaCorrecta: boolean;
          valor: any;
          color: string;
          icono: string;
          foto: string;
          estado: boolean;
      },
      {
          texto: string;
          respuestaCorrecta: boolean;
          valor: any;
          color: string;
          icono: string;
          foto: string;
          estado: boolean;
      },
      {
          texto: string;
          respuestaCorrecta: boolean;
          valor: any;
          color: string;
          icono: string;
          foto: string;
          estado: boolean;
      }
  ]
  provincia: string;
  ciudad: string;
  lat: number;
  lng: number;
  categoria: string;
  color: string;
  icono: string;
  foto: string;
  estado: boolean;
  puntaje: number;
  nivel: number;
  ayuda: string;
  detalle: boolean
}


// leaflet
export const DEFAULT_LAT = -38.45155;
export const DEFAULT_LON = -63.5988853;
export const TITULO = 'Proyecto';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-teammap',
  templateUrl: './teammap.component.html',
  styleUrls: ['./teammap.component.scss']
})

export class TeammapComponent implements OnInit {

    Pregunta: Pregunta[] = [];
    sidePanel: boolean = true;
    @Output() sidePanelEvent = new EventEmitter<boolean>();

    public editForm: FormGroup;
    preguntaRef: any;
    
    form: FormGroup;
    public preguntaForm: FormGroup;
  

  // leaflet
  private map:any;
  @Input() lat: number = DEFAULT_LAT;
  @Input() lng: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;

  constructor(
    private catalystService: CatalystService,
    private router: Router,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute

     ) { }

  ngOnInit() {
    this.initMap();
    this.showPreguntas();
      this.catalystService.getPreguntasList().subscribe(res =>{ this.Pregunta = res.map( e => { return {
        id : e.payload.doc.id,
        ...e.payload.doc.data() as{}
      } as Pregunta;
    })
  });
}
    
// TODO: emit value, main menu subscription

showPreguntas() {
  
  for(var i = 0; i < this.Pregunta.length; i++) {
    const markers = new L.CircleMarker([this.Pregunta[i].lng, this.Pregunta[i].lat]).on('click', this.onClick);
    markers.addTo(this.map)
    .addTo(this.map)
    .bindPopup(`<p class="panel" (click)="getLocations()">` + this.Pregunta[i].titulo + `</p>
      <br>
      <hr>
      <ul>
      <li>` + this.Pregunta[i].respuestas + `</li>
      <li>` + this.Pregunta[i].respuestas[i].respuestaCorrecta + `</li>
      <li>` + this.Pregunta[i].respuestas[i].color + `</li>
      <button class="hovering" onclick="getLocations()">embeded action</button>
      <a href="./edit/:id;id=` + this.Pregunta[i].id + `" class="speciallink">TestLink</a>
      </ul>
      `
      )
    .openPopup();

    // const layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map)
    // .bindPopup(this.Pregunta[i].titulo);
    // .bindPopup(this.Pregunta[i].respuesta);
    // .openPopup();


    //  markers.addTo(this.map);
    //  layer.addTo(this.map);
  }
}

previousIndex: number = -1;
public detalle: boolean = false;

onClick(e) {

  // L.popup()
  // .setLatLng(e.latlng)
  // .setContent('<iframe id="iframe" src="https://www.andes.gob.ar/andes-font-icon/"></iframe>')
  // .openOn(this.map);
  
  // const content = document.createElement('div')

 // embed HTML here!
  // content.className = 'panel';
  // content.innerHTML =
  // '<p id="myDIV" class="panel__texto--gris">';
  // console.log(content);

}

  private initMap(): void {
      //configuración del mapa
      this.map = L.map('map', {
      center: [this.lat, this.lng],
      attributionControl: false,
      zoom: 5
    });

    // single marker + forma de circulo
    // const mark = L.circleMarker([this.lat, this.lng]).addTo(this.map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();
    // mark.addTo(this.map);

    // this.map = L.map('map').setView([51.505, -0.09], 13);

    //iconos personalizados
    var iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });

   L.Marker.prototype.options.icon = iconDefault;

    // Map style   
    var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	  maxZoom: 20,
	  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });

    //titulo
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>'
    });


  //ruta
//   L.Routing.control({
//     router: L.Routing.osrmv1({
//       serviceUrl: `https://router.project-osrm.org/route/v1/`
//     }),
//     showAlternatives: true,
//     fitSelectedRoutes: false,
//     show: false,
//     routeWhileDragging: true,
//     waypoints: [
//       L.latLng(this.lat, this.lng),
//       L.latLng(lat, lng)
//     ]
//   }).addTo(this.map);
    tiles.addTo(this.map);
    Stadia_AlidadeSmooth.addTo(this.map)
  }
}