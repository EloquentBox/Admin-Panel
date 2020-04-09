import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  title = 'AngularMaterialGettingStarted';
  display: string;
  isMenuOpen = true;
  contentMargin = 240;
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.contentMargin = 70;
      this.display = 'none';
    } else {
      this.contentMargin = 240;
      this.display = 'inline';
    }
  }
}
