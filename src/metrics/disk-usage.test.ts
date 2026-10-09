import { calculateUsagePercent, getDiskStatus } from '../../src/metrics/disk-usage'; 

describe('calculateUsagePercent', () => { 

 it('calcula el porcentaje de uso', () => { 

   expect(calculateUsagePercent(50, 200)).toBe(25); 

 }); 

  

 it('lanza error si el disco total es cero', () => { 

   expect(() => calculateUsagePercent(10, 0)).toThrow(); 

 }); 

}); 

  

describe('getDiskStatus', () => { 

 it('clasifica como ok bajo 75%', () => { 

   expect(getDiskStatus(74)).toBe('ok'); 

 }); 

  

 it('clasifica como warning desde 75%', () => { 

   expect(getDiskStatus(75)).toBe('warning'); 

 }); 

  

 it('clasifica como critical desde 90%', () => { 

   expect(getDiskStatus(90)).toBe('critical'); 

 }); 

}); 