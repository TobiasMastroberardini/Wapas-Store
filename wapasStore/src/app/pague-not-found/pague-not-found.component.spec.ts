import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagueNotFoundComponent } from './pague-not-found.component';

describe('PagueNotFoundComponent', () => {
  let component: PagueNotFoundComponent;
  let fixture: ComponentFixture<PagueNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagueNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagueNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
