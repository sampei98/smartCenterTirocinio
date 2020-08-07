import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettagliCartaPage } from './dettagli-carta.page';

describe('DettagliCartaPage', () => {
  let component: DettagliCartaPage;
  let fixture: ComponentFixture<DettagliCartaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliCartaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliCartaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
