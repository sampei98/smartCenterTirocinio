import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VotaAppPage } from './vota-app.page';

describe('VotaAppPage', () => {
  let component: VotaAppPage;
  let fixture: ComponentFixture<VotaAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotaAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VotaAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
