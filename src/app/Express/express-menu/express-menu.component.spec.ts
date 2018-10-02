import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressMenuComponent } from './express-menu.component';

describe('ExpressMenuComponent', () => {
  let component: ExpressMenuComponent;
  let fixture: ComponentFixture<ExpressMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
