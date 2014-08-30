#Thermostat

A small exercise in learning object-oriented programming in CoffeeScript and testing with Jasmine.

##Objectives

* To get further acquainted with Jasmine
* To learn CoffeeScript.

##Technologies

* CoffeeScript
* Jasmine


##How to test

```
git clone https://github.com/jpatel531/thermostat.git 
cd thermostat
open SpecRunner.html
```

##How to run

In SpecRunner.html, go into the Chrome Developer Console.

Initiate a thermostat:

```javascript

thermostat = new Thermostat()
```

To raise the temperature, call ` thermostat.warmer() `, and `thermostat.cooler()` to decrease the temperature. To disable powerSavingMode, call ` thermostat.powerSavingMode = false`. To read the energy usage, call ` thermostat.energyUsage() `, and call ` thermostat.reset() ` to reset the thermostat.