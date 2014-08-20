class Thermostat

	temperature: 20
	minimumTemperature: 10
	powerSavingMode: true

	maximumTemperature: -> 
		if @powerSavingMode then 25 else 32

	warmer: ->
		@temperature += 1 if @temperature < @maximumTemperature()

	cooler: ->
		@temperature -= 1 if @temperature > @minimumTemperature

	reset: -> @temperature = 20

	energyUsage: ->
		return 'high' if @temperature >= 25
		return 'medium' if @temperature >= 18
		'low'

