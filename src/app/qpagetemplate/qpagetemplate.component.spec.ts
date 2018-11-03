import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QpagetemplateComponent } from './qpagetemplate.component';

describe('QpagetemplateComponent', () => {
  let component: QpagetemplateComponent;
  let fixture: ComponentFixture<QpagetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QpagetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QpagetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
