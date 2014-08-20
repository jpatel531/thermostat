describe 'Thermostat', ->
	thermostat = undefined

	beforeEach ->
		thermostat = new Thermostat()

	describe 'by default', ->

		it 'has a temperature of 20', ->
			expect(thermostat.temperature).toEqual 20

		it 'is on psm', ->
			expect(thermostat.powerSavingMode).toBe true

	describe 'temperature ranges', ->

		it 'has a minimum temperature of 10', ->
			expect(thermostat.minimumTemperature).toEqual 10

		it 'has a maximum temperature of 25 degrees when on psm', ->
			expect(thermostat.maximumTemperature()).toEqual 25

		it 'has a maximum temperature of 32 degrees when not on psm', ->
			thermostat.powerSavingMode = false
			expect(thermostat.maximumTemperature()).toEqual 32

	describe 'warmer with PSM on', ->

		it 'increases the temperature if < 25', ->
			thermostat.warmer()
			expect(thermostat.temperature).toEqual 21

		it 'does nothing if the temperature >= 25', ->
			thermostat.temperature = 25
			thermostat.warmer()
			expect(thermostat.temperature).toEqual 25

	describe 'warmer with PSM off', ->
		beforeEach ->
			thermostat.powerSavingMode = false

		it 'increases the temperature if < 32', ->
			thermostat.temperature = 29
			thermostat.warmer()
			expect(thermostat.temperature).toEqual 30

		it 'does nothing if >= 32', ->
			thermostat.temperature = 32
			thermostat.warmer()
			expect(thermostat.temperature).toEqual 32

	describe 'cooler', ->

		it 'decreases the temperature if < 10', ->
			thermostat.cooler()
			expect(thermostat.temperature).toEqual 19

		it 'does nothing if temperature is 10', ->
			thermostat.temperature = 10
			thermostat.cooler()
			expect(thermostat.temperature).toEqual 10

	describe 'reset', ->

		it 'resets temperature to 20', ->
			thermostat.temperature = 16
			thermostat.reset()
			expect(thermostat.temperature).toEqual 20

	describe 'energy usage', ->

		it 'is high if >= 25', ->
			thermostat.temperature = 26
			expect(thermostat.energyUsage()).toEqual 'high'

		it 'is medium if between 18 and 25', ->
			expect(thermostat.energyUsage()).toEqual 'medium'

