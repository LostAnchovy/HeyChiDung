import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptbasicsComponent } from './javascriptbasics.component';

describe('JavascriptbasicsComponent', () => {
  let component: JavascriptbasicsComponent;
  let fixture: ComponentFixture<JavascriptbasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptbasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
