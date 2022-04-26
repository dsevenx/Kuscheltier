import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuscheltiervorschlaegeComponent } from './kuscheltiervorschlaege.component';

describe('KuscheltiervorschlaegeComponent', () => {
  let component: KuscheltiervorschlaegeComponent;
  let fixture: ComponentFixture<KuscheltiervorschlaegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuscheltiervorschlaegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuscheltiervorschlaegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
