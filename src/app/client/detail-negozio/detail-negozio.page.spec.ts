import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailNegozioPage } from './detail-negozio.page';

describe('DetailNegozioPage', () => {
  let component: DetailNegozioPage;
  let fixture: ComponentFixture<DetailNegozioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNegozioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailNegozioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
