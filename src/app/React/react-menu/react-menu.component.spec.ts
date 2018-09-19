import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactMenuComponent } from './react-menu.component';

describe('ReactMenuComponent', () => {
  let component: ReactMenuComponent;
  let fixture: ComponentFixture<ReactMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
