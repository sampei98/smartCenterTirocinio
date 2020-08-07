import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MieiPuntiPage } from './miei-punti.page';

describe('MieiPuntiPage', () => {
  let component: MieiPuntiPage;
  let fixture: ComponentFixture<MieiPuntiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MieiPuntiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MieiPuntiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
