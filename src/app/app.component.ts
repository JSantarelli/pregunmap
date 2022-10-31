import { Component } from '@angular/core';
import { CatalystService } from 'src/app/services/catalyst.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catalyst-team';
  sidePanel = false;
  searchBar = false;
  login = true;

  constructor(
    private catalystService: CatalystService,
    private router: Router
  ) { 
  }

  ngOnInit(){
    this.catalystService.currentBarValue.subscribe(searchBar => this.searchBar = searchBar)
    this.catalystService.currentLoginValue.subscribe(login => this.login = login)
  }

  goCreatePregunta() {
    this.sidePanel = !this.sidePanel;
    this.router.navigate(['/create']);
  }

  showMap() {
    this.sidePanel = !this.sidePanel;
    this.router.navigate(['/map']);
  }

  receiveSidePanel($event) {
    this.sidePanel = $event;
  }

  toggleSidepanel() {
    this.sidePanel = !this.sidePanel;
  }

  newBarValue() {
    this.catalystService.changeBarValue(true);
  }
  
  hideSearchBar() {
    this.catalystService.changeBarValue(false);
  }

  closeSidepanel() {
    if(this.sidePanel = true) {
      this.sidePanel = false;
    }
  }
}
