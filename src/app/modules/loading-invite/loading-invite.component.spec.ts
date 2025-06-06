import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingInviteComponent } from './loading-invite.component';

describe('LoadingInviteComponent', () => {
  let component: LoadingInviteComponent;
  let fixture: ComponentFixture<LoadingInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingInviteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
