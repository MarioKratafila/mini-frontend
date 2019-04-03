import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSubComponent } from './welcome-sub.component';

describe('WelcomeSubComponent', () => {
  let component: WelcomeSubComponent;
  let fixture: ComponentFixture<WelcomeSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
