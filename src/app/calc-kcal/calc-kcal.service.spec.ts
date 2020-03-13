import { CalcKcalService } from './calc-kcal.service';

describe('CalcKcalService', () => {
  let service: CalcKcalService;

  let validValue = {
    height: '180',
    weight: '100',
    age: '20',
    sex: null,
    activity: null,
    target: null
  };

  let invalidValue = {
    height: '180',
    weight: '100',
    age: '20',
    sex: null,
    activity: null,
    target: null
  }

  beforeEach(() => { service = new CalcKcalService(); });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sex should have value', () => {
    expect(service.sex).toBeDefined();
  });

  it('target should have value', () => {
    expect(service.target).toBeDefined();
  });

  it('activity should have value', () => {
    expect(service.activity).toBeDefined();
  });

  it('sex should have 2 elements', () => {
    expect(service.sex.length).toBe(2);
  });

  it('target should have 3 elements', () => {
    expect(service.target.length).toBe(3);
  });

  it('activity should have 2 elements', () => {
    expect(service.activity.length).toBe(5);
  });

  it('calculateKcal should return number value', () => {
    validValue.sex = service.sex[0];
    validValue.target = service.target[0].value;
    validValue.activity = service.activity[0].value;
    expect(service.calculateKcal(validValue)).not.toBeNull();
  });

  it('calculateKcal should return NaN value ', () => {
    invalidValue.sex = service.sex[0];
    invalidValue.target = service.target[0];
    invalidValue.activity = service.activity[0].value;
    expect(service.calculateKcal(invalidValue)).toBeNaN();
  });
});
