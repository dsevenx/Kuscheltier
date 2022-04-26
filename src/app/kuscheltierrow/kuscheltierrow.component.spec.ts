import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuscheltierrowComponent } from './kuscheltierrow.component';

describe('KuscheltierrowComponent', () => {
  let component: KuscheltierrowComponent;
  let fixture: ComponentFixture<KuscheltierrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuscheltierrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuscheltierrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
