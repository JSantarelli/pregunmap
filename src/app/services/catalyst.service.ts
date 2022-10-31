import { Injectable, PLATFORM_ID, Inject  } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

// Firebase
import { AngularFirestore } from '@angular/fire/compat/firestore';
import data from './../assets/countries.json';
import { BehaviorSubject } from 'rxjs';

// Leaflet Map

@Injectable({
  providedIn: 'root'
})
@Injectable()
  export class CatalystService { 
  Pregunta: Pregunta[] = [];

  // leaflet
  public L:any = null;
  public Routing:any = null

  private searchBarSource = new BehaviorSubject<boolean>(false);
  currentBarValue = this.searchBarSource.asObservable();

  private sidePanelSource = new BehaviorSubject<boolean>(false);
  currentPanelValue = this.sidePanelSource.asObservable();

  private loginSource = new BehaviorSubject<boolean>(false);
  currentLoginValue = this.loginSource.asObservable();

  constructor(
    private angularFirestore: AngularFirestore,
    protected http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object) { 
      if (isPlatformBrowser(platformId)) {
        this.L = require('leaflet');
        this.Routing = require('leaflet-routing-machine');
      }
    // console.log("data : ", JSON.stringify(this.countries));
  }

  // countries = './../assets/countries.json';
  // public countries: any = data;

  getAll(): any {
    return this.countries;
  }

// Datasets (move to mock folder/ts)
guilds: Array<any> = [
  { name: 'digital'},
  { name: 'brand'},
  { name: 'product'},
  { name: 'omnichannel'},
  { name: 'HCD'}
]

countries: Array<any> = [
      {
          id: 1,
          name: "AR",
          flag: ""
      },
      {
          id: 2,
          name: "PA",
          flag: ""
      },
      {
          id: 3,
          name: "CO",
          flag: ""
      },
      {
          id: 4,
          name: "VE",
          flag: ""
      },
      {
          id: 5,
          name: "TW",
          flag: ""
      },
      {
          id: 6,
          name: "PH",
          flag: ""
      },
      {
          id: 7,
          name: "SK",
          flag: ""
      },
      {
          id: 8,
          name: "TR",
          flag: ""
      },
      {
          id: 9,
          name: "UK",
          flag: ""
      },
      {
          id: 10,
          name: "JP",
          flag: ""
      },
      {
          id: 11,
          name: "AU",
          flag: ""
      },
      {
          id: 12,
          name: "IE",
          flag: ""
      },
      {
          id: 13,
          name: "US",
          flag: ""
      },
      {
          id: 14,
          name: "CA",
          flag: ""
      },
      {
          id: 15,
          name: "MX",
          flag: ""
      }
  ]

  cities: Array<any> = [
        {
          id: 1,
          country: "AR",
          name: "Buenos Aires",
          lat: "-34.61315",
          lng: "-58.37723"
        },
        {
          id: 2,
          country: "AR",
          name: "Neuquén",
          lat: "-38.95161",
          lng: "-68.0591"
        },
        {
          id: 3,
          country: "AR",
          name: "Córdoba",
          lat: "-31.4135",
          lng: "-64.18105"
        },
        {
          id: 4,
          country: "AR",
          name: "Mar del Plata",
          lat: "-38.00228",
          lng: "-57.55754"
        },
        {
          id: 5,
          country: "AR",
          name: "Mendoza",
          lat: "-32.89084",
          lng: "-68.82717"
        },
        {
          id: 6,
          country: "AR",
          name: "Rosario",
          lat: "-32.94682",
          lng: "-60.63932"
        },
        {
          id: 7,
          country: "AR",
          name: "Salta",
          lat: "-24.7859",
          lng: "-65.41166"
        },
        {
          id: 8,
          country: "AR",
          name: "Cipolletti",
          lat: "-38.93392",
          lng: "-67.99032"
        },
        {
          id: 11,
          country: "CO",
          name: "Cali",
          lat: "3.43722",
          lng: "-76.5225"
        },
        {
          id: 21,
          country: "VE",
          name: "Maracaibo",
          lat: "10.66663",
          lng: "-71.61245"
        },
        {
          id: 31,
          country: "MX",
          name: "Mexico City",
          lat: "19.42847",
          lng: "-99.12766"
        },
        {
          id: 32,
          country: "MX",
          name: "Chihuahua",
          lat: "16.02966",
          lng: "-91.97331"
        },
        {
          id: 33,
          country: "MX",
          name: "Monterrey",
          lat: "25.67507",
          lng: "-100.31847"
        },
        {
          id: 51,
          country: "PA",
          name: "Panama City",
          lat: "9.33404",
          lng: "-79.89172"
        },
        {
          id: 91,
          country: "US",
          name: "Seattle",
          lat: "47.60621",
          lng: "-122.33207"
        },
        {
          id: 92,
          country: "US",
          name: "Portland",
          lat: "36.58171",
          lng: "-86.51638"
        },
        {
          id: 93,
          country: "US",
          name: "San Francisco",
          lat: "37.77493",
          lng: "-122.41942"
        },
        {
          id: 94,
          country: "US",
          name: "Los Angeles",
          lat: "34.05223",
          lng: "-118.24368"
        },
        {
          id: 95,
          country: "US",
          name: "Minneapolis",
          lat: "39.12194",
          lng: "-97.7067"
        },
        {
          id: 96,
          country: "US",
          name: "Albuquerque",
          lat: "35.08449",
          lng: "-106.65114"
        },
        {
          id: 97,
          country: "US",
          name: "Ardmore",
          lat: "34.17426",
          lng: "-97.14363"
        },
        {
          id: 98,
          country: "US",
          name: "Princeton",
          lat: "33.18012",
          lng: "-96.49804"
        },
        {
          id: 99,
          country: "US",
          name: "Omaha",
          lat: "41.25626",
          lng: "-95.94043"
        },
        {
          id: 100,
          country: "US",
          name: "Grand Rapids",
          lat: "42.96336",
          lng: "-85.66809"
        },
        {
          id: 101,
          country: "US",
          name: "The Bronx",
          lat: "40.84985",
          lng: "-73.86641"
        },
        {
          id: 102,
          country: "US",
          name: "Chicago",
          lat: "41.85003",
          lng: "-87.65005"
        },
        {
          id: 103,
          country: "US",
          name: "New York City",
          lat: "40.71427",
          lng: "-74.00597"
        },
        {
          id: 104,
          country: "US",
          name: "Laconia",
          lat: "43.52785",
          lng: "-71.47035"
        },
        {
          id: 105,
          country: "US",
          name: "Sea Isle City",
          lat: "39.15345",
          lng: "-74.69294"
        },
        {
          id: 106,
          country: "US",
          name: "Durham",
          lat: "41.48176",
          lng: "-72.68121"
        },
        {
          id: 107,
          country: "US",
          name: "Boston",
          lat: "42.35843",
          lng: "-71.05977"
        },
        {
          id: 108,
          country: "US",
          name: "Bloomfield",
          lat: "40.80677",
          lng: "-74.18542"
        },
        {
          id: 109,
          country: "US",
          name: "West Monroe",
          lat: "32.51848",
          lng: "-92.14764"
        },
        {
          id: 110,
          country: "US",
          name: "Palm Coast",
          lat: "29.58497",
          lng: "-81.20784"
        },
        {
          id: 111,
          country: "US",
          name: "Cape Coral",
          lat: "26.56285",
          lng: "-81.94953"
        },
        {
          id: 112,
          country: "US",
          name: "Syracuse",
          lat: "41.42783",
          lng: "-85.75249"
        },
        {
          id: 120,
          country: "CA",
          name: "Kenora",
          lat: "49.76741",
          lng: "-94.48985"
        },
        {
          id: 121,
          country: "CA",
          name: "Vancouver",
          lat: "49.24966",
          lng: "-123.11934"
        },
        {
          id: 122,
          country: "CA",
          name: "Toronto",
          lat: "40.46423",
          lng: "-80.60091"
        },    
        {
          id: 130,
          country: "GB",
          name: "City of London",
          lat: "51.51279",
          lng: "-0.09184"
        },
        {
          id: 140,
          country: "IE",
          name: "Dublin",
          lat: "53.33306",
          lng: "-6.24889"
        },
        {
          id: 150,
          country: "TR",
          name: "Istanbul",
          lat: "41.01384",
          lng: "28.94966"
        }        
  ]

  verticals: Array<any> = [
    { name: 'Healthcare', value:'Healthcare'},
    { name: 'Retail', value:'Retail'},
    { name: 'B2B / Sales Enablement', value:'B2B / Sales Enablement'},
    { name: 'Automotive', value:'Auto'},
    { name: 'Technology', value:'Technology'},
    { name: 'Non-profit', value:'Non-profit'},
    { name: 'Transportation', value:'Transportation'},
    { name: 'Telecom', value:'Telecom'},
    { name: 'Entertainment', value:'Entertainment'},
    { name: 'Emerging industry', value:'Emerging industry'},
    { name: 'Energy', value:'Energy'},
    { name: 'E-commerce', value:'E-commerce'},
    { name: 'Pharma', value:'Pharma'},
    { name: 'Financial', value:'Financial'},
    { name: 'Gaming', value:'Gaming'},
    { name: 'Loyalty', value:'Loyalty'},
    { name: 'Cybersecurity', value:'Cybersecurity'},
    { name: 'Logistics', value:'Logistics'},
    { name: 'Nutrition', value:'Nutrition'},
    { name: 'Digital marketing', value:'Digital marketing'},
    { name: 'Enterprise solutions', value:'Enterprise solutions'},
    { name: 'Mental health', value:'Mental health'},
    { name: 'Media', value:'Media'},
    { name: 'Travel', value:'Travel'},
    { name: 'Edutainment', value:'Edutainment'}
  ]

  skills: Array<any> = [
    { name: '3D Art', value:'3D Art', featured: false},
    { name: '3D Modeling', value:'3D Modeling', featured: true},
    { name: '3D Motion', value:'3D Motion', featured: false},
    { name: 'Accessible design', value:'Accessible design', featured: false},
    { name: 'Advertising', value:'Advertising', featured: false},
    { name: 'Advertising Photography', value:'Advertising Photography', featured: false},
    { name: 'Animation', value:'Animation', featured: false},
    { name: 'App Design', value:'App Design', featured: false},
    { name: 'AR/VR', value:'AR/VR', featured: true},
    { name: 'Art Direction', value:'Art Direction', featured: false},
    { name: 'Branding', value:'Branding', featured: true},
    { name: 'Calligraphy', value:'Calligraphy', featured: true},
    { name: 'CGI', value:'CGI', featured: false},
    { name: 'Character Design', value:'Character Design', featured: false},
    { name: 'Cinematography', value:'Cinematography', featured: false},
    { name: 'Collage', value:'Collage', featured: false},
    { name: 'Coloring', value:'Coloring', featured: true},
    { name: 'Comic', value:'Comic', featured: false},
    { name: 'Concept Art', value:'Concept Art', featured: false},
    { name: 'Creative Direction', value:'Creative Direction', featured: true},
    { name: 'Design system', value:'Design system', featured: true},
    { name: 'Digital Art', value:'Digital Art', featured: true},
    { name: 'Digital Painting', value:'Digital Painting', featured: false},
    { name: 'Drawing', value:'Drawing', featured: false},
    { name: 'Editing', value:'Editing', featured: false},
    { name: 'Editorial Design', value:'Editorial Design', featured: true},
    { name: 'Environmental Graphics', value:'Environmental Graphics', featured: false},
    { name: 'Exhibition Design', value:'Exhibition Design', featured: false},
    { name: 'Food Photography', value:'Food Photography', featured: false},
    { name: 'Game Design', value:'Game Design', featured: false},
    { name: 'GIF Animation', value:'GIF Animation', featured: false},
    { name: 'Graffiti', value:'Graffiti', featured: false},
    { name: 'Graphic Design', value:'Graphic Design', featured: false},
    { name: 'Icon Design', value:'Icon Design', featured: false},
    { name: 'Illustration', value:'Illustration', featured: false},
    { name: 'Infographic', value:'Infographic', featured: false},
    { name: 'Information Architecture', value:'Information Architecture', featured: false},
    { name: 'Interaction Design', value:'Interaction Design', featured: false},
    { name: 'Interior Design', value:'Interior Design', featured: false},
    { name: 'Lettering', value:'Lettering', featured: false},
    { name: 'Logo Design', value:'Logo Design', featured: false},
    { name: 'Mobile first', value:'Mobile first', featured: false},
    { name: 'Model Test Photography', value:'Model Test Photography', featured: false},
    { name: 'Motion Graphics', value:'Motion Graphics', featured: false},
    { name: 'Packaging', value:'Packaging', featured: false},
    { name: 'Painting', value:'Painting', featured: false},
    { name: 'Pattern Design', value:'Pattern Design', featured: false},
    { name: 'Photography', value:'Photography', featured: false},
    { name: 'Photography Styling', value:'Photography Styling', featured: false},
    { name: 'Photojournalism', value:'Photojournalism', featured: false},
    { name: 'Poster Design', value:'Poster Design', featured: false},
    { name: 'Product Design', value:'Product Design', featured: false},
    { name: 'Product Photography', value:'Product Photography', featured: false},
    { name: 'Programming', value:'Programming', featured: false},
    { name: 'Projection Mapping', value:'Projection Mapping', featured: false},
    { name: 'Prototyping', value:'Prototyping', featured: false},
    { name: 'Research', value:'Research', featured: false},
    { name: 'Responsive design', value:'Responsive design', featured: false},
    { name: 'Retouching', value:'Retouching', featured: false},
    { name: 'Set Design', value:'Set Design', featured: false},
    { name: 'Sketching', value:'Sketching', featured: true},
    { name: 'Sound Design', value:'Sound Design', featured: false},
    { name: 'Storyboarding', value:'Storyboarding', featured: true},
    { name: 'Storytelling', value:'Storytelling', featured: true},
    { name: 'Street Art', value:'Street Art', featured: false},
    { name: 'Styleframing', value:'Styleframing', featured: false},
    { name: 'Surface Design', value:'Surface Design', featured: false},
    { name: 'T-Shirt Design', value:'T-Shirt Design', featured: false},
    { name: 'Type Design', value:'Type Design', featured: false},
    { name: 'Typography', value:'Typography', featured: false},
    { name: 'UI/UX', value:'UI/UX', featured: true},
    { name: 'UI Design', value:'UI Design', featured: true},
    { name: 'UX Design', value:'UX Design', featured: true},
    { name: 'UX Research', value:'UX Research', featured: true},
    { name: 'UX Writting', value:'UX Writting', featured: true},
    { name: 'Visual Design', value:'Visual Design', featured: true},
    { name: 'Visual Effects', value:'Visual Effects', featured: false},
    { name: 'Visualization', value:'Visualization', featured: false},
    { name: 'Web Design', value:'Web Design', featured: true},
    { name: 'Writing', value:'Writing', featured: false}
  ]

  tools: Array<any> = [
    { name: 'Figma', value:'Figma'},
    { name: 'Axure RP', value:'Axure RP'},
    { name: 'Sketch', value:'Sketch'},
    { name: 'InVision', value:'InVision'},
    { name: 'Adobe XD', value:'Adobe XD'},
    { name: 'Adobe After Effects', value:'Adobe After Effects'},
    { name: 'Adobe Animate', value:'Adobe Animate'},
    { name: 'Adobe Dreamweaber', value:'Adobe Dreamweaber'},
    { name: 'Adobe Illustrator', value:'Adobe Illustrator'},
    { name: 'Adobe Photoshop', value:'Adobe Photoshop'},
    { name: 'Adobe Lightroom', value:'Adobe Lightroom'},
    { name: 'Adobe Premiere', value:'Adobe Premiere'},
    { name: 'Adobe InDesign', value:'Adobe InDesign'},
    { name: 'Blender', value:'Blender'},
    { name: 'Corel Draw', value:'Corel Draw'},
    { name: 'VC Code', value:'VC Code'},
    { name: 'Atom', value:'Atom'},
    { name: 'Miro', value:'Miro'},
    { name: 'Camtasia', value:'Camtasia'},
    { name: 'BEM', value:'BEM'},
    { name: 'SMACSS', value:'SMACSS'},
    { name: 'Bootstrap', value:'Bootstrap'},
    { name: 'HTML', value:'HTML'},
    { name: 'CSS', value:'CSS'},
    { name: 'SASS', value:'SASS'},
    { name: 'Javascript', value:'Javascript'},
    { name: 'AngularJS', value:'AngularJS'},
    { name: 'React', value:'React'},
    { name: 'Vue', value:'Vue'},
    { name: 'CoffeeCup', value:'CoffeeCup'},
    { name: 'Sublime', value:'Sublime'},
    { name: 'Squarespace', value:'Squarespace'},
    { name: 'WordPress', value:'WordPress'},
    { name: 'Drupal', value:'Drupal'},
    { name: 'Magento', value:'Magento'},
    { name: 'Joomla', value:'Joomla'},
    { name: 'Webflow', value:'Webflow'},
    { name: 'Wix', value:'Wix'},
    { name: 'BetterTouchTool', value:'BetterTouchTool'},
    { name: 'Alfred', value:'Alfred'}
  ]

  changeBarValue(searchBar: boolean) {
    this.searchBarSource.next(searchBar);
  }

  changePanelValue(sidePanel: boolean) {
    this.sidePanelSource.next(sidePanel);
  }

  changeLoginValue(login: boolean) {
    this.loginSource.next(login);
  }

  getPreguntaDoc(id) {
      return this.angularFirestore.collection('pregunta-collection').doc(id).valueChanges()
  }

  getPreguntasList() {
      return this.angularFirestore.collection('pregunta-collection').snapshotChanges();
  }

  createPregunta(pregunta: Pregunta) {
    return new Promise<any>((resolve, reject) =>{ this.angularFirestore.collection('pregunta-collection').add(pregunta).then(response => { console.log(response) }, error => reject(error))});
  }

  deletePregunta(pregunta: Pregunta) {
      return this.angularFirestore.collection('pregunta-collection').doc(pregunta.id).delete();
  }

  updatePregunta(pregunta: Pregunta, id: any) {
      return this.angularFirestore.collection('pregunta-collection').doc(id).update({
          titulo: pregunta.titulo,
          respuestas: pregunta.respuestas,
          provincia: pregunta.provincia,
          ciudad: pregunta.ciudad,
          lat: pregunta.lat,
          lng: pregunta.lng,
          categoria: pregunta.categoria,
          color: pregunta.color,
          icono: pregunta.icono,
          foto: pregunta.foto,
          estado: pregunta.estado,
          puntaje: pregunta.puntaje,
          nivel: pregunta.nivel,
          ayuda: pregunta.ayuda,
          detalle: pregunta.detalle
      })
  }

  viewPregunta(pregunta: Pregunta, id: any) {
    return this.angularFirestore.collection('pregunta-collection').doc(id).set({
      titulo: pregunta.titulo,
      respuestas: pregunta.respuestas,
      provincia: pregunta.provincia,
      ciudad: pregunta.ciudad,
      lat: pregunta.lat,
      lng: pregunta.lng,
      categoria: pregunta.categoria,
      color: pregunta.color,
      icono: pregunta.icono,
      foto: pregunta.foto,
      estado: pregunta.estado,
      puntaje: pregunta.puntaje,
      nivel: pregunta.nivel,
      ayuda: pregunta.ayuda,
      detalle: pregunta.detalle
  })
}

  getPreguntaLocation(pregunta: Pregunta, id: any) {
    return this.angularFirestore.collection('pregunta-collection').doc(id).set({
      lat: pregunta.lat,
    })
  }
}
