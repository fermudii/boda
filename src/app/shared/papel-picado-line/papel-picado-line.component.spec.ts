import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelPicadoLineComponent } from './papel-picado-line.component';

describe('PapelPicadoLineComponent', () => {
  let component: PapelPicadoLineComponent;
  let fixture: ComponentFixture<PapelPicadoLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapelPicadoLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapelPicadoLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
