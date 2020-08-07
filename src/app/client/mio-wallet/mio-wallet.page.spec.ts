import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MioWalletPage } from './mio-wallet.page';

describe('MioWalletPage', () => {
  let component: MioWalletPage;
  let fixture: ComponentFixture<MioWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MioWalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MioWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
