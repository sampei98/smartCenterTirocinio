import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NegoziPage } from './negozi.page';

describe('NegoziPage', () => {
  let component: NegoziPage;
  let fixture: ComponentFixture<NegoziPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegoziPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NegoziPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
