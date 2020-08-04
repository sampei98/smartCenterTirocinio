import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostoPage } from './posto.page';

describe('PostoPage', () => {
  let component: PostoPage;
  let fixture: ComponentFixture<PostoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
