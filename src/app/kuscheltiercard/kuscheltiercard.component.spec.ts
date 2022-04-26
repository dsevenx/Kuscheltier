import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuscheltiercardComponent } from './kuscheltiercard.component';

describe('KuscheltiercardComponent', () => {
  let component: KuscheltiercardComponent;
  let fixture: ComponentFixture<KuscheltiercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuscheltiercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuscheltiercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
