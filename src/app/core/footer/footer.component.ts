import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private router: Router) {}

  goMain() {
    this.router.navigate(['/categories']);
  }

  goAboutUs() {
    this.router.navigate(['/aboutUs']);
  }
}
