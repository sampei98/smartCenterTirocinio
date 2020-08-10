import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailNegozioSalePage } from './detail-negozio-sale.page';

describe('DetailNegozioSalePage', () => {
  let component: DetailNegozioSalePage;
  let fixture: ComponentFixture<DetailNegozioSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNegozioSalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailNegozioSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
