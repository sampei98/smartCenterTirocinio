import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreaOffertaFormPage } from './crea-offerta-form.page';

describe('CreaOffertaFormPage', () => {
  let component: CreaOffertaFormPage;
  let fixture: ComponentFixture<CreaOffertaFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaOffertaFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreaOffertaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
