import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarViewComponent } from './dashboar-view.component';

describe('DashboarViewComponent', () => {
  let component: DashboarViewComponent;
  let fixture: ComponentFixture<DashboarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboarViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
