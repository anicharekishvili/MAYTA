import { Routes } from '@angular/router';
import { MenuCategoriesComponent } from './menu/menu-categories/menu-categories.component';
import { MenuCategoryItemsComponent } from './menu/menu-category-items/menu-category-items.component';
import { MenuItemDetailComponent } from './menu/menu-item-detail/menu-item-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full',
  },
  {
    path: 'categories',
    component: MenuCategoriesComponent,
  },
  {
    path: ':categoryId',
    component: MenuCategoryItemsComponent,
  },
  {
    path: ':categoryId/:itemId',
    component: MenuItemDetailComponent,
  },
];
