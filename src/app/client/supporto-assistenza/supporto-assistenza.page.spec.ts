import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupportoAssistenzaPage } from './supporto-assistenza.page';

describe('SupportoAssistenzaPage', () => {
  let component: SupportoAssistenzaPage;
  let fixture: ComponentFixture<SupportoAssistenzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportoAssistenzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupportoAssistenzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
