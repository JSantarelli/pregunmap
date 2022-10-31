import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePreguntaComponent } from './pages/teammates/create/create.component';
import { EditPreguntaComponent } from './pages/teammates/edit/edit.component';
import { ListPreguntasComponent } from './pages/teammates/list/list.component';
import { DetailPreguntaComponent } from './pages/teammates/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { TeammapComponent } from './pages/teammap/teammap.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'list-pregunta', component: ListPreguntasComponent, 
    children: [{ path: ':id', component: DetailPreguntaComponent}] },
  { path: 'create', component: CreatePreguntaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list-pregunta/:id', component: DetailPreguntaComponent },
  { path: 'edit/:id', component: EditPreguntaComponent },
  { path: 'detail/:id', component: DetailPreguntaComponent },
  { path: 'map', component: TeammapComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }