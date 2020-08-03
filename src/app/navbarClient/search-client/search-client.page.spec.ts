import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchClientPage } from './search-client.page';

describe('SearchClientPage', () => {
  let component: SearchClientPage;
  let fixture: ComponentFixture<SearchClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
