import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCommerciantePage } from './home-commerciante.page';

describe('HomeCommerciantePage', () => {
  let component: HomeCommerciantePage;
  let fixture: ComponentFixture<HomeCommerciantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCommerciantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCommerciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
