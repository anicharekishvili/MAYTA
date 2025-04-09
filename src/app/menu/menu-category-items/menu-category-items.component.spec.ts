import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryItemsComponent } from './menu-category-items.component';

describe('MenuCategoryItemsComponent', () => {
  let component: MenuCategoryItemsComponent;
  let fixture: ComponentFixture<MenuCategoryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCategoryItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCategoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
