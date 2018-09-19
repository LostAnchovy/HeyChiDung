import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacthomeComponent } from './reacthome.component';

describe('ReacthomeComponent', () => {
  let component: ReacthomeComponent;
  let fixture: ComponentFixture<ReacthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
