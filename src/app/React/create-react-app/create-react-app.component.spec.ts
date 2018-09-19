import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReactAppComponent } from './create-react-app.component';

describe('CreateReactAppComponent', () => {
  let component: CreateReactAppComponent;
  let fixture: ComponentFixture<CreateReactAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReactAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReactAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
