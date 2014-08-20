// Generated by CoffeeScript 1.7.1
describe('Thermostat', function() {
  var thermostat;
  thermostat = void 0;
  beforeEach(function() {
    return thermostat = new Thermostat();
  });
  describe('by default', function() {
    it('has a temperature of 20', function() {
      return expect(thermostat.temperature).toEqual(20);
    });
    return it('is on psm', function() {
      return expect(thermostat.powerSavingMode).toBe(true);
    });
  });
  describe('temperature ranges', function() {
    it('has a minimum temperature of 10', function() {
      return expect(thermostat.minimumTemperature).toEqual(10);
    });
    it('has a maximum temperature of 25 degrees when on psm', function() {
      return expect(thermostat.maximumTemperature()).toEqual(25);
    });
    return it('has a maximum temperature of 32 degrees when not on psm', function() {
      thermostat.powerSavingMode = false;
      return expect(thermostat.maximumTemperature()).toEqual(32);
    });
  });
  describe('warmer with PSM on', function() {
    it('increases the temperature if < 25', function() {
      thermostat.warmer();
      return expect(thermostat.temperature).toEqual(21);
    });
    return it('does nothing if the temperature >= 25', function() {
      thermostat.temperature = 25;
      thermostat.warmer();
      return expect(thermostat.temperature).toEqual(25);
    });
  });
  describe('warmer with PSM off', function() {
    beforeEach(function() {
      return thermostat.powerSavingMode = false;
    });
    it('increases the temperature if < 32', function() {
      thermostat.temperature = 29;
      thermostat.warmer();
      return expect(thermostat.temperature).toEqual(30);
    });
    return it('does nothing if >= 32', function() {
      thermostat.temperature = 32;
      thermostat.warmer();
      return expect(thermostat.temperature).toEqual(32);
    });
  });
  describe('cooler', function() {
    it('decreases the temperature if < 10', function() {
      thermostat.cooler();
      return expect(thermostat.temperature).toEqual(19);
    });
    return it('does nothing if temperature is 10', function() {
      thermostat.temperature = 10;
      thermostat.cooler();
      return expect(thermostat.temperature).toEqual(10);
    });
  });
  describe('reset', function() {
    return it('resets temperature to 20', function() {
      thermostat.temperature = 16;
      thermostat.reset();
      return expect(thermostat.temperature).toEqual(20);
    });
  });
  return describe('energy usage', function() {
    it('is high if >= 25', function() {
      thermostat.temperature = 26;
      return expect(thermostat.energyUsage()).toEqual('high');
    });
    return it('is medium if between 18 and 25', function() {
      return expect(thermostat.energyUsage()).toEqual('medium');
    });
  });
});
