import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalystService } from '../../../services/catalyst.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

// Firebase
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface Pregunta {
  id: string;
  name: string;
  lastName: string;
  location: string;
  lat: number;
  lng: number;
  email: string;
  phone: string;
  photo: string;
  guild: string;
  skills: string;
  otherSkill: string;
  verticals: string;
  otherVertical: string;
  tools: string;
  otherTool: string;
  interests: string;
  projects: string;
  goToPerson: string;
  bio: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailPreguntaComponent implements OnInit {

  public editForm: FormGroup;
  preguntaRef: any;
  
  form: FormGroup;
  public preguntaForm: FormGroup;

  public preguntaList: Pregunta[];

  constructor(
    public catalystService: CatalystService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      location: [''],
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

  ngOnInit() {

    const id = this.act.snapshot.paramMap.get('id');

    this.catalystService.getPreguntaDoc(id).subscribe(res => {
      this.preguntaRef = res;
      this.editForm = this.formBuilder.group({
        name:[this.preguntaRef.name],
        lastName:[this.preguntaRef.lastName],
        location:[this.preguntaRef.location],
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
}