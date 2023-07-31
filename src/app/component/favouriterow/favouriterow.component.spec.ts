import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriterowComponent } from './favouriterow.component';

describe('FavouriterowComponent', () => {
  let component: FavouriterowComponent;
  let fixture: ComponentFixture<FavouriterowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriterowComponent]
    });
    fixture = TestBed.createComponent(FavouriterowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
