import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpresshomeComponent } from './expresshome.component';

describe('ExpresshomeComponent', () => {
  let component: ExpresshomeComponent;
  let fixture: ComponentFixture<ExpresshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpresshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpresshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
