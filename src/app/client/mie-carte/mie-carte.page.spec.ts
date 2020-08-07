import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MieCartePage } from './mie-carte.page';

describe('MieCartePage', () => {
  let component: MieCartePage;
  let fixture: ComponentFixture<MieCartePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MieCartePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MieCartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
