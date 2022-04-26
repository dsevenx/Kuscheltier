import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuscheltierfriendboxComponent } from './kuscheltierfriendbox.component';

describe('KuscheltierfriendboxComponent', () => {
  let component: KuscheltierfriendboxComponent;
  let fixture: ComponentFixture<KuscheltierfriendboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuscheltierfriendboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuscheltierfriendboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
