import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCoverComponent } from './main-cover.component';

describe('MainCoverComponent', () => {
  let component: MainCoverComponent;
  let fixture: ComponentFixture<MainCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
