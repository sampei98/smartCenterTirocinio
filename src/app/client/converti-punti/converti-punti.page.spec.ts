import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConvertiPuntiPage } from './converti-punti.page';

describe('ConvertiPuntiPage', () => {
  let component: ConvertiPuntiPage;
  let fixture: ComponentFixture<ConvertiPuntiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertiPuntiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertiPuntiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
