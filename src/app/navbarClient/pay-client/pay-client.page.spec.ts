import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayClientPage } from './pay-client.page';

describe('PayClientPage', () => {
  let component: PayClientPage;
  let fixture: ComponentFixture<PayClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
