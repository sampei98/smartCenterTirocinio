import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailNegozioProductInfoPage } from './detail-negozio-product-info.page';

describe('DetailNegozioProductInfoPage', () => {
  let component: DetailNegozioProductInfoPage;
  let fixture: ComponentFixture<DetailNegozioProductInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNegozioProductInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailNegozioProductInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
