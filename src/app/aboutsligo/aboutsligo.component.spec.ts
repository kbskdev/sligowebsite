import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsligoComponent } from './aboutsligo.component';

describe('AboutsligoComponent', () => {
  let component: AboutsligoComponent;
  let fixture: ComponentFixture<AboutsligoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutsligoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutsligoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
