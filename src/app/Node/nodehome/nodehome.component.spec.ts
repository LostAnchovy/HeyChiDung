import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodehomeComponent } from './nodehome.component';

describe('NodehomeComponent', () => {
  let component: NodehomeComponent;
  let fixture: ComponentFixture<NodehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
