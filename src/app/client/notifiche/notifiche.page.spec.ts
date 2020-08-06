import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifichePage } from './notifiche.page';

describe('NotifichePage', () => {
  let component: NotifichePage;
  let fixture: ComponentFixture<NotifichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
