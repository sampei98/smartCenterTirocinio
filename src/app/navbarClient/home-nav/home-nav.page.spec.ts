import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeNavPage } from './home-nav.page';

describe('HomeNavPage', () => {
  let component: HomeNavPage;
  let fixture: ComponentFixture<HomeNavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
