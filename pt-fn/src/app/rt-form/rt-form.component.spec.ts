import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtFormComponent } from './rt-form.component';

describe('RtFormComponent', () => {
  let component: RtFormComponent;
  let fixture: ComponentFixture<RtFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
