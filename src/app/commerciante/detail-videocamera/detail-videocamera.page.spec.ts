import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailVideocameraPage } from './detail-videocamera.page';

describe('DetailVideocameraPage', () => {
  let component: DetailVideocameraPage;
  let fixture: ComponentFixture<DetailVideocameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVideocameraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailVideocameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
