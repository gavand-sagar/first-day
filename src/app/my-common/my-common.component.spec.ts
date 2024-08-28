import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommonComponent } from './my-common.component';

describe('MyCommonComponent', () => {
  let component: MyCommonComponent;
  let fixture: ComponentFixture<MyCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCommonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
