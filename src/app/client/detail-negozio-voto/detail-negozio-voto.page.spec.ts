import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailNegozioVotoPage } from './detail-negozio-voto.page';

describe('DetailNegozioVotoPage', () => {
  let component: DetailNegozioVotoPage;
  let fixture: ComponentFixture<DetailNegozioVotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNegozioVotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailNegozioVotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
