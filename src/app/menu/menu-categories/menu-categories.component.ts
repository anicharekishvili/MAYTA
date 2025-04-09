import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-menu-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-categories.component.html',
  styleUrl: './menu-categories.component.scss',
})
export class MenuCategoriesComponent {
  menuData: any;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit() {
    this.menuService.getMenyData().subscribe((data) => {
      this.menuData = data.categories;
      console.log(this.menuData);
    });
  }

  openCategory(id: number) {
    this.router.navigate([id]);
  }
}
