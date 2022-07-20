import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../investiments/components/list/list.component';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`(U) getPoupanca(): shoud have poupanca = 10`, () => {
    expect(component.getPoupanca).toEqual(10)
  })
  it(`(U) getCarteira(): shoud have carteira = 50`, () => {
    expect(component.getCarteira).toEqual(50)
  })
  it(`(U) setSacar(): shoud transfer poupanca from carteira`, () => {
    component.setSacar('10')

    expect(component.getPoupanca).toEqual(0)
    expect(component.getCarteira).toEqual(60)
  })
  it(`(U) setSacar(): shoud transfer poupanca dont have string (isNaN) or poupanca < value`, ()=>{
    expect(component.setSacar('string')).not.toBeTruthy()
    expect(component.setSacar('100')).not.toBeTruthy()
    expect(component.getPoupanca).toEqual(10)
    expect(component.getCarteira).toEqual(50)
  })
  it(`(I) setSacar(): shoud transfer poupanca from carteira`, () => {
    let el = fixture.debugElement.nativeElement

    el.querySelector('#input-sacar').value = "10"
    el.querySelector('#sacar').click()
    fixture.detectChanges()

    expect(el.querySelector('#get-Carteira').textContent).toEqual('60')
  })
  it(`(U) setDespositar(): shoud transfer carteira from poupanca`, () => {
    component.setDepositar('50')
    
    expect(component.getCarteira).toEqual(0)
    expect(component.getPoupanca).toEqual(60)
  })
  it(`(U) setDepositar(): shoud transfer carteira dont have string (isNaN) or carteira < value`, ()=>{
    expect(component.setDepositar('string')).not.toBeTruthy()
    expect(component.setDepositar('100')).not.toBeTruthy()
    expect(component.getPoupanca).toEqual(10)
    expect(component.getCarteira).toEqual(50)
  })
  it(`(I) setDespositar(): shoud transfer carteira from poupanca`, () => {
    let el = fixture.debugElement.nativeElement

    el.querySelector('#input-depositar').value = "10"
    el.querySelector('#depositar').click()
    fixture.detectChanges()

    expect(el.querySelector('#get-Poupanca').textContent).toEqual('20')
  })
});
