import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AggiungiCartaPage } from './aggiungi-carta.page';

describe('AggiungiCartaPage', () => {
  let component: AggiungiCartaPage;
  let fixture: ComponentFixture<AggiungiCartaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiCartaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AggiungiCartaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
