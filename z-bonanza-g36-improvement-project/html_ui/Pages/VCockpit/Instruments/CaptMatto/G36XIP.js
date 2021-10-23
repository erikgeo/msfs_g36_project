'use strict';
class G36XIP extends BaseInstrument {

  // @TODO Check if the aircraft is on the ground as this can cause issues when loading when flying and all your switches are off. It is race to see who wins, the floor or the pilot

  constructor() {
    super();
    //Set our variables and read from the DataStore whilst the sim is loading the flight
    //
    // For people trying to read code and new to JS
    //
    // I am setting a variable to be used and referenced in the class with this.name
    // In this section there are shortened if statements checking the MS DataStore for the named item (e.g. G36XIP_PROP)
    // if this returns an entry, use that value, if it returns NULL or 0 set it to the value I want for a 'new plane'
    // So...
    // this.name = GetStoredData('THE NAME OF THE ITEM') ? Value if true : value if false
    //
    //
    this.engHasRun = false;
    this.engHours = GetStoredData('G36XIP_ENG_HOURS') ? GetStoredData('G36XIP_ENG_HOURS') : 0;
    this.engHobbsRunning = false;
    this.engHobbsTimerStart = '';
    this.engHobbsTimerEnd = '';
    this.leftFuel = GetStoredData('G36XIP_LEFT_FUEL') ? GetStoredData('G36XIP_LEFT_FUEL') : 32; // See JuiceBox7535 post #1825 in main forum
    this.rightFuel = GetStoredData('G36XIP_RIGHT_FUEL') ? GetStoredData('G36XIP_RIGHT_FUEL') : 32;
    this.bat1 = GetStoredData('G36XIP_BAT1') ? GetStoredData('G36XIP_BAT1') : 0;
    this.bat2 = GetStoredData('G36XIP_BAT2') ? GetStoredData('G36XIP_BAT2') : 0;
    this.alt1 = GetStoredData('G36XIP_ALT1') ? GetStoredData('G36XIP_ALT1') : 0;
    this.alt2 = GetStoredData('G36XIP_ALT2') ? GetStoredData('G36XIP_ALT2') : 0;
    this.pBrake = GetStoredData('G36XIP_PBRAKE') ? GetStoredData('G36XIP_PBRAKE') : 1;
    this.avionics = GetStoredData('G36XIP_AVIONICS') ? GetStoredData('G36XIP_AVIONICS') : 0;
    this.aircon = GetStoredData('G36XIP_AIRCO') ? GetStoredData('G36XIP_AIRCO') : 0;
    this.blower = GetStoredData('G36XIP_BLOWER') ? GetStoredData('G36XIP_BLOWER') : 0;
    this.ventBlower = GetStoredData('G36XIP_VENT_BLOWER') ? GetStoredData('G36XIP_VENT_BLOWER') : 0;
    this.auxFuelPump = GetStoredData('G36XIP_AUX_FUEL_PUMP') ? GetStoredData('G36XIP_AUX_FUEL_PUMP') : 0;
    this.magento = GetStoredData('G36XIP_MAGNETO') ? GetStoredData('G36XIP_MAGNETO') : 0;
    this.pitotHeat = GetStoredData('G36XIP_PITOT') ? GetStoredData('G36XIP_PITOT') : 0;
    this.propDeIce = GetStoredData('G36XIP_PROP_DEICE') ? GetStoredData('G36XIP_PROP_DEICE') : 0;
    this.strobe = GetStoredData('G36XIP_STROBE') ? GetStoredData('G36XIP_STROBE') : 0;
    this.beacon = GetStoredData('G36XIP_BEACON') ? GetStoredData('G36XIP_BEACON') : 0;
    this.navLight = GetStoredData('G36XIP_NAV_LIGHT') ? GetStoredData('G36XIP_NAV_LIGHT') : 0;
    this.floodLight = GetStoredData('G36XIP_FLOOD_LIGHT') ? GetStoredData('G36XIP_FLOOD_LIGHT') : 0;
    this.panelLight = GetStoredData('G36XIP_PANEL_LIGHT') ? GetStoredData('G36XIP_PANEL_LIGHT') : 0;
    this.taxiLight = GetStoredData('G36XIP_TAXI_LIGHT') ? GetStoredData('G36XIP_TAXI_LIGHT') : 0;
    this.landingLight = GetStoredData('G36XIP_LANDING_LIGHT') ? GetStoredData('G36XIP_LANDING_LIGHT') : 0;
    this.throttle = GetStoredData('G36XIP_THROTTLE') ? GetStoredData('G36XIP_THROTTLE') : 0;
    this.prop = GetStoredData('G36XIP_PROP') ? GetStoredData('G36XIP_PROP') : 0;
    this.mixture = GetStoredData('G36XIP_MIXTURE') ? GetStoredData('G36XIP_MIXTURE') : 0;
    this.cowl = GetStoredData('G36XIP_COWL') ? GetStoredData('G36XIP_COWL') : 0;
    this.flaps = GetStoredData('G36XIP_FLAPS') ? GetStoredData('G36XIP_FLAPS') : 0;
    this.pitchTrim = GetStoredData('G36XIP_PITCH_TRIM') ? GetStoredData('G36XIP_PITCH_TRIM') : 0;
    this.aileronTrim = GetStoredData('G36XIP_AILERON_TRIM') ? GetStoredData('G36XIP_AILERON_TRIM') : 0;
    this.fuelSelector = GetStoredData('G36XIP_FUEL_SELECT') ? GetStoredData('G36XIP_FUEL_SELECT') : 'off';
  }

  //load the gauge template - found in G36XIP.HTML
  get templateID() { return 'G36XIP'; }

  //Runs as the sim is loading
  connectedCallback() {
    super.connectedCallback();
    //load fuel
    SimVar.SetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "number", Number(this.leftFuel));
    SimVar.SetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "number", Number(this.rightFuel));

  } //end connectedCallback

  //Runs once the flight is loaded
  onFlightStart() {
    super.onFlightStart();

    //set the variables that we need to wait for the flight to load

    //Parking Brake
    SimVar.SetSimVarValue("K:PARKING_BRAKES", "number", Number(this.pBrake));
    //Battery 1
    SimVar.SetSimVarValue("ELECTRICAL MASTER BATTERY:1", "number", Number(this.bat1));
    //Battery 2
    SimVar.SetSimVarValue("ELECTRICAL MASTER BATTERY:2", "number", Number(this.bat2));
    //Alternator 1
    if (this.alt1) {
      SimVar.SetSimVarValue("K:TOGGLE_ALTERNATOR1", "number", 1);
    }
    //Alternator 2
    if (this.alt2) {
      SimVar.SetSimVarValue("K:TOGGLE_ALTERNATOR2", "number", 1);
    }
    //Avionics Switch
    SimVar.SetSimVarValue("K:AVIONICS_MASTER_SET", "number", Number(this.avionics));
    //Fuel Pump Switch
    SimVar.SetSimVarValue("A:GENERAL ENG FUEL PUMP SWITCH:1", "bool", 1); //Doesnt work

    //Pitot Heat
    if (this.pitotHeat) {
      SimVar.SetSimVarValue("K:PITOT_HEAT_ON", "number", 1);a
    } else {
      SimVar.SetSimVarValue("K:PITOT_HEAT_OFF", "number", 1);
    }
    //Prop De-Ice
    if (this.propDeIce) {
      SimVar.SetSimVarValue("K:TOGGLE_PROPELLER_DEICE", "number", 1);
    }
    //Fuel Selector
    if (this.fuelSelector == 'left') {
      SimVar.SetSimVarValue("K:FUEL_SELECTOR_LEFT", "number", 1);
    } else if (this.fuelSelector == 'right') {
      SimVar.SetSimVarValue("K:FUEL_SELECTOR_RIGHT", "number", 1);
    } else if (this.fuelSelector == 'off') {
      SimVar.SetSimVarValue("K:FUEL_SELECTOR_OFF", "number", 1);
    }


    // I don't think we need to run this every frame so just run it on a timer here
    // Also there might be a performance hit if we try to do that...
    //
    // @TODO NEED TO SET TO 60000 ONCE DEV COMPLETE
    //
    var timerMilSecs = 1000;
    var timer = window.setInterval(checkG36State, timerMilSecs);

    function checkG36State() {

      //if the battery master IS on and the engine is running keep the fuel updated
      if (SimVar.GetSimVarValue("ELECTRICAL MASTER BATTERY:1", "bool") && SimVar.GetSimVarValue("ENG COMBUSTION:1", "bool")) {
        this.engHasRun = true;
        let lefttank = SimVar.GetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "gallons");
        let righttank = SimVar.GetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "gallons");
        SetStoredData('G36XIP_LEFT_FUEL', lefttank.toString());
        SetStoredData('G36XIP_RIGHT_FUEL', righttank.toString());
      }

      //the engine has shutdown - record everything
      if (this.engHasRun && SimVar.GetSimVarValue("ELECTRICAL MASTER BATTERY:1", "bool") == 0 && SimVar.GetSimVarValue("ENG COMBUSTION:1", "bool") == 0) {
        this.engHasRun = false;
        //Set the Parking Brake
        var parkingBrake = SimVar.GetSimVarValue("BRAKE PARKING POSITION", "bool");
        SetStoredData('G36XIP_PBRAKE', parkingBrake.toString());
        //set the fuel
        var lefttank = SimVar.GetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "gallons");
        var righttank = SimVar.GetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "gallons");
        SetStoredData('G36XIP_LEFT_FUEL', lefttank.toString());
        SetStoredData('G36XIP_RIGHT_FUEL', righttank.toString());
        //Set Battery switches
        var bat1 = SimVar.GetSimVarValue("ELECTRICAL MASTER BATTERY:1", "bool");
        var bat2 = SimVar.GetSimVarValue("ELECTRICAL MASTER BATTERY:2", "bool");
        SetStoredData('G36XIP_BAT1', bat1.toString());
        SetStoredData('G36XIP_BAT2', bat2.toString());
        //Set the avionics switch
        var avionics = SimVar.GetSimVarValue("AVIONICS MASTER SWITCH", "bool");
        SetStoredData('G36XIP_AVIONICS', avionics.toString());

      }
    }
  } //End onFlightStart()

  //Runs every frame
  Update() {
    super.Update();

    if (this.engHasRun == true && this.engHobbsRunning == false) {
      this.engHobbsRunning = true;
      var today = new Date();
      this.engHobbsTimerStart = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }

    if (this.engHasRun == false && this.engHobbsRunning == true) {
      this.engHobbsRunning = false;
      var today = new Date();
      this.engHobbsTimerEnd = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      //run the time difference here - to set the hobbs timer

    }


    //@TODO NEED TO COME UP WITH AN EFFECTIVE WAY TO DELETE THE STORED ITEMS (ARRAY?) WHEN NEEDED
    //@TODO DO WE NEED TO BE ABLE TO LET THE USER HAVE STATE SAVING OR NOT?


    //DeleteStoredData('G36XIP_LEFT_FUEL');
    //DeleteStoredData('G36XIP_RIGHT_FUEL');
    //DeleteStoredData('G36XIP_BAT1');
    //DeleteStoredData('G36XIP_BAT2');
  }
}

registerInstrument('g36xip-element', G36XIP);