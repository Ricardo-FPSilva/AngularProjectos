import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Investiments } from '../../model/investiments';
import { MOCK_LIST } from '../../services/list-investiments.mock';
import { ListInvestimentsService } from '../../services/list-investiments.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;

  const mockList: Array<Investiments> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    service = TestBed.inject(ListInvestimentsService)
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList))

    component.ngOnInit()
    fixture.detectChanges()

    expect(service.list).toHaveBeenCalledWith
    expect(component.investiments.length).toBe(4)
    
    expect(component.investiments[0].name).toEqual('itau')
    expect(component.investiments[0].value).toEqual(100)
    expect(component.investiments[3].name).toEqual('Bradesco')
    expect(component.investiments[3].value).toEqual(100)
  })
  
  it('(I) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList))

    component.ngOnInit()
    fixture.detectChanges()

    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens')

    expect(investiments.length).toBe(4)
    expect(investiments[0].textContent.trim()).toEqual('itau | 100')
    expect(investiments[3].textContent.trim()).toEqual('Bradesco | 100')
    
  })
});
