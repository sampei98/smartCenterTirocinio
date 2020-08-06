import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailNegozioProductPage } from './detail-negozio-product.page';

describe('DetailNegozioProductPage', () => {
  let component: DetailNegozioProductPage;
  let fixture: ComponentFixture<DetailNegozioProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNegozioProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailNegozioProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
