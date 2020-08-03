import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaleClientPage } from './sale-client.page';

describe('SaleClientPage', () => {
  let component: SaleClientPage;
  let fixture: ComponentFixture<SaleClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaleClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
