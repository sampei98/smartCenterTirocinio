import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewNegoziPage } from './view-negozi.page';

describe('ViewNegoziPage', () => {
  let component: ViewNegoziPage;
  let fixture: ComponentFixture<ViewNegoziPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNegoziPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewNegoziPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
