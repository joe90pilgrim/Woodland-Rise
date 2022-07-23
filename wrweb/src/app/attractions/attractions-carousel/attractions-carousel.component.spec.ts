import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsCarouselComponent } from './attractions-carousel.component';

describe('AttractionsCarouselComponent', () => {
  let component: AttractionsCarouselComponent;
  let fixture: ComponentFixture<AttractionsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
