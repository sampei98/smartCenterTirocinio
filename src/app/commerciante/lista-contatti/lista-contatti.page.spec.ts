import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaContattiPage } from './lista-contatti.page';

describe('ListaContattiPage', () => {
  let component: ListaContattiPage;
  let fixture: ComponentFixture<ListaContattiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaContattiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaContattiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
