import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigistrosComponent } from './rigistros.component';

describe('RigistrosComponent', () => {
  let component: RigistrosComponent;
  let fixture: ComponentFixture<RigistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigistrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RigistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
