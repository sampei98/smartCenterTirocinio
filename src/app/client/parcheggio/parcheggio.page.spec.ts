import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParcheggioPage } from './parcheggio.page';

describe('ParcheggioPage', () => {
  let component: ParcheggioPage;
  let fixture: ComponentFixture<ParcheggioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcheggioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParcheggioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
