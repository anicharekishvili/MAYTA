import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonToggleModule, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  logoUrl = 'assets/images/white-logo.jpg';

  ngOnInit(): void {
    const stored = localStorage.getItem('darkMode');
    this.isDarkMode = stored === 'true';
    this.applyTheme();
  }

  toggleDarkMode(event: any): void {
    this.isDarkMode = event.checked;
    this.applyTheme();
  }

  applyTheme(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
      this.logoUrl = 'assets/images/logo.png';
    } else {
      document.body.classList.remove('dark-theme');
      this.logoUrl = 'assets/images/white-logo.jpg';
    }

    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }
}
