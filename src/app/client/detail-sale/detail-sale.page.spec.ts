import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSalePage } from './detail-sale.page';

describe('DetailSalePage', () => {
  let component: DetailSalePage;
  let fixture: ComponentFixture<DetailSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
