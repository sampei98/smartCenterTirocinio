import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindCarPage } from './find-car.page';

describe('FindCarPage', () => {
  let component: FindCarPage;
  let fixture: ComponentFixture<FindCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
