import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save lang', async(() => {
    expect(component.lang).toBeTruthy();
  }));

  it('should count the click', async(() => {
    expect(component.counter).toEqual(0);
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.counter).toEqual(1);
  }));

  it('should reset the counter', async(() => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.counter).toEqual(1);

    component.resetCounter();
    expect(component.counter).toEqual(0);
  }));

  it('should change the button text', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(0);

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain(1);
    component.resetCounter();
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain(0);
  }));
});
