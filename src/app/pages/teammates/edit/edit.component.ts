import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CatalystService } from '../../../services/catalyst.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditPreguntaComponent implements OnInit {
  public editForm: FormGroup;
  preguntaRef: any;
  
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

  constructor(
    public catalystService: CatalystService,
    public formBuilder: FormBuilder,
    private router: Router,
    private act: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      country: [''],
      city: [''],
      lat: [''],
      lng: [''],
      email: [''],
      phone: [''],
      photo: [''],
      guild: [''],
      skills: this.formBuilder.array([], [Validators.required]),
      otherSkill: [''],
      verticals: [''],
      otherVertical: [''],
      tools: this.formBuilder.array([], [Validators.required]),
      otherTool: [''],
      interests: [''],
      projects: [''],
      goToPerson: [''],
      bio: ['']
    })
   }
   
   onSelect(value) {
    this.dropdownCity = this.catalystService.cities.filter(i => i.country == value);
  }

  ngOnInit() {
    const id = this.act.snapshot.paramMap.get('id');

    this.catalystService.getPreguntaDoc(id).subscribe(res => {
      this.preguntaRef = res;
      this.editForm = this.formBuilder.group({
        name:[this.preguntaRef.name],
        lastName:[this.preguntaRef.lastName],
        country:[this.preguntaRef.country],
        city:[this.preguntaRef.city],
        lat:[this.preguntaRef.lat],
        lng:[this.preguntaRef.lng],
        email:[this.preguntaRef.email],
        phone:[this.preguntaRef.phone],
        photo:[this.preguntaRef.photo],
        guild:[this.preguntaRef.guild],
        skills:[this.preguntaRef.skills],
        otherSkill: [this.preguntaRef.otherSkill],
        verticals: [this.preguntaRef.verticals],
        otherVertical: [this.preguntaRef.otherVertical],
        tools: [this.preguntaRef.tools],
        otherTool: [this.preguntaRef.otherTool],
        interests: [this.preguntaRef.interests],
        projects: [this.preguntaRef.projects],
        goToPerson: [this.preguntaRef.goToPerson],
        bio:[this.preguntaRef.bio],
      })
    })
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

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.catalystService.updatePregunta(this.editForm.value, id);
    this.router.navigate(['list-pregunta']);
  }

}
