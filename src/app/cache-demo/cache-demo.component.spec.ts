import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheDemoComponent } from './cache-demo.component';

describe('CacheDemoComponent', () => {
  let component: CacheDemoComponent;
  let fixture: ComponentFixture<CacheDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacheDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CacheDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
