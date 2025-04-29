import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorLineComponent } from './flor-line.component';

describe('FlorLineComponent', () => {
  let component: FlorLineComponent;
  let fixture: ComponentFixture<FlorLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlorLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlorLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
