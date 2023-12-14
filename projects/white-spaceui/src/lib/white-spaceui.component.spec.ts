import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteSpaceuiComponent } from './white-spaceui.component';

describe('WhiteSpaceuiComponent', () => {
  let component: WhiteSpaceuiComponent;
  let fixture: ComponentFixture<WhiteSpaceuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteSpaceuiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteSpaceuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
