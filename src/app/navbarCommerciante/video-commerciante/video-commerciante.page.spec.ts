import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoCommerciantePage } from './video-commerciante.page';

describe('VideoCommerciantePage', () => {
  let component: VideoCommerciantePage;
  let fixture: ComponentFixture<VideoCommerciantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCommerciantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCommerciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
