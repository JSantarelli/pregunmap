import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, FormGroupDirective, ControlContainer } from '@angular/forms';
import { CatalystService } from '../../../services/catalyst.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreatePreguntaComponent implements OnInit {

  form: FormGroup;
  public preguntaForm: FormGroup;
  countries: any[] = [];
  cities: any[] = [];
  selectedCountry: any = {
      id: '', name: ''
    };
  selectedCity: any = {
    id: '',
    name: '',
    lat: '',
    lng: ''
  };
  dropdownCity: any = [];
  moreSkills = false;
  sidePanel = false;
  searchBar = false;


  basicTemplateValue = true;
  contactTemplateValue = true;
  profileTemplateValue = true;
  complementaryTemplateValue = true;

  constructor(
    public catalystService: CatalystService,
    private formBuilder: FormBuilder,
    public router: Router
    ) {
    this.preguntaForm = this.formBuilder.group({
      titulo: [''],
      respuestas: [''],
      provincia: [''],
      ciudad: [''],
      lat: [''],
      lng: [''],
      categoria: [''],
      color: [''],
      icono: [''],
      foto: [''],
      puntaje: [''],
      nivel: [''],
      estado: [''],
      ayuda: [''],
      detalle: [''],
      // skills: this.formBuilder.array([], [Validators.required]),
    })
  }

  ngOnInit() {
    // TO-DO: conncect json file to app 
    // this.showAll();
    // this.onSelect(this.selectedCountry.id);

    this.catalystService.currentPanelValue.subscribe(sidePanel => this.sidePanel = sidePanel)
    this.catalystService.currentBarValue.subscribe(searchBar => this.searchBar = searchBar)
  }

  showAll() {
    this.catalystService.getAll().subscribe(
    (data:any)=> {
      this.countries = data;
    }
    )
  }

  onSelect(value) {
    this.dropdownCity = this.catalystService.cities.filter(i => i.country == value);
  }

  onCheckboxChange(e) {
    const skills: FormArray = this.preguntaForm.get('skills') as FormArray;
    if (e.target.checked) {
      skills.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      skills.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          skills.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onToolsChange(e) {
    const tools: FormArray = this.preguntaForm.get('tools') as FormArray;
    if (e.target.checked) {
      tools.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      tools.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          tools.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  
  showMore() {
    this.moreSkills = !this.moreSkills;
  }

  closeSidepanel() {
    event.preventDefault();
    this.catalystService.changePanelValue(false);
  }

  onSubmit(event) {
    event.preventDefault();
    this.catalystService.createPregunta(this.preguntaForm.value);
    this.catalystService.changePanelValue(false);
  }

  showBasic() {
    this.basicTemplateValue = !this.basicTemplateValue;
  }
  showContact() {
    this.contactTemplateValue = !this.contactTemplateValue;
  }
  showProfile() {
    this.profileTemplateValue = !this.profileTemplateValue;
  }
  showComplementary() {
    this.complementaryTemplateValue = !this.complementaryTemplateValue;
  }
}
