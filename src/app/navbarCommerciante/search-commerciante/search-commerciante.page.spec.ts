import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchCommerciantePage } from './search-commerciante.page';

describe('SearchCommerciantePage', () => {
  let component: SearchCommerciantePage;
  let fixture: ComponentFixture<SearchCommerciantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCommerciantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCommerciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
