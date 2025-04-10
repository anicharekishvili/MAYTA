import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-menu-category-items',
  standalone: true,
  imports: [],
  templateUrl: './menu-category-items.component.html',
  styleUrl: './menu-category-items.component.scss',
})
export class MenuCategoryItemsComponent {
  dataById: any;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('categoryId');
      if (id) {
        const numericId = parseInt(id, 10);
        this.getMenuDataById(numericId);
      }
    });
  }

  getMenuDataById(id: number) {
    this.menuService.getMenyData().subscribe((data) => {
      this.dataById = data.categories.find(
        (category: any) => category.id === id
      );
    });
  }

  navigateCategories() {
    this.router.navigate(['categories']);
  }
}
