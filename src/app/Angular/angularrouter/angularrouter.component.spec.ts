import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularrouterComponent } from './angularrouter.component';

describe('AngularrouterComponent', () => {
  let component: AngularrouterComponent;
  let fixture: ComponentFixture<AngularrouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularrouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
