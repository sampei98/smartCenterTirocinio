import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScansionaCommerciantePage } from './scansiona-commerciante.page';

describe('ScansionaCommerciantePage', () => {
  let component: ScansionaCommerciantePage;
  let fixture: ComponentFixture<ScansionaCommerciantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScansionaCommerciantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScansionaCommerciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
