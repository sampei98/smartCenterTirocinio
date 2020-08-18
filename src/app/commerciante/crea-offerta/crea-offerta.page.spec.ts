import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreaOffertaPage } from './crea-offerta.page';

describe('CreaOffertaPage', () => {
  let component: CreaOffertaPage;
  let fixture: ComponentFixture<CreaOffertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaOffertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreaOffertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
