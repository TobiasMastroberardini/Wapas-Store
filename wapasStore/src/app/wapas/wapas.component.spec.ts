import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WapasComponent } from './wapas.component';

describe('WapasComponent', () => {
  let component: WapasComponent;
  let fixture: ComponentFixture<WapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WapasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
