import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeNavCommerciantePage } from './home-nav-commerciante.page';

describe('HomeNavCommerciantePage', () => {
  let component: HomeNavCommerciantePage;
  let fixture: ComponentFixture<HomeNavCommerciantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNavCommerciantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNavCommerciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
