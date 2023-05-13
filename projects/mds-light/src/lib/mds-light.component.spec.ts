import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdsLightComponent } from './mds-light.component';

describe('MdsLightComponent', () => {
  let component: MdsLightComponent;
  let fixture: ComponentFixture<MdsLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdsLightComponent]
    });
    fixture = TestBed.createComponent(MdsLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
