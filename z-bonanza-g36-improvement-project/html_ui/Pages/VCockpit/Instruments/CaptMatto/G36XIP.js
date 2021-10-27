'use strict';
class G36XIP extends BaseInstrument {

  //Aircraft State Saving by CaptMatto

  // @TODO Check if the aircraft is on the ground as this can cause issues when loading when flying and all your switches are off. It is race to see who wins, the floor or the pilot

  constructor() {
    super();
    //Set our variables and read from the DataStore whilst the sim is loading the flight
    //
    //
    // I am setting a variable to be used and referenced in the class with this.name
    // In this section there are shortened if statements checking the MS DataStore for the named item (e.g. G36XIP_PROP)
    // if this returns an entry, use that value, if it returns NULL or 0 set it to the value I want for a 'new plane'
    // So...
    // this.name = GetStoredData('THE NAME OF THE ITEM') ? Value if true : value if false


    //FUEL IN GALLONS AND WEIGHTS IN KG
    this.leftFuel = GetStoredData('G36XIP_LEFT_FUEL') ? GetStoredData('G36XIP_LEFT_FUEL') : 32; // See JuiceBox7535 post #1825 in main forum
    this.rightFuel = GetStoredData('G36XIP_RIGHT_FUEL') ? GetStoredData('G36XIP_RIGHT_FUEL') : 32;
    this.pilotWeight = GetStoredData('G36XIP_PILOT_WEIGHT') ? GetStoredData('G36XIP_PILOT_WEIGHT') : 89; //Average male weight
    this.coPilotWeight = GetStoredData('G36XIP_COPILOT_WEIGHT') ? GetStoredData('G36XIP_COPILOT_WEIGHT') : 89; //Average male weight
    this.frontPaxLeft = GetStoredData('G36XIP_FRONT_LEFT_PAX_WEIGHT') ? GetStoredData('G36XIP_FRONT_LEFT_PAX_WEIGHT') : 0;
    this.frontPaxRight = GetStoredData('G36XIP_FRONT_RIGHT_PAX_WEIGHT') ? GetStoredData('G36XIP_FRONT_RIGHT_PAX_WEIGHT') : 0;
    this.rearPaxLeft = GetStoredData('G36XIP_REAR_LEFT_PAX_WEIGHT') ? GetStoredData('G36XIP_REAR_LEFT_PAX_WEIGHT') : 0;
    this.rearPaxRight = GetStoredData('G36XIP_REAR_RIGHT_PAX_WEIGHT') ? GetStoredData('G36XIP_REAR_RIGHT_PAX_WEIGHT') : 0;
    this.baggage = GetStoredData('G36XIP_BAGGAGE_WEIGHT') ? GetStoredData('G36XIP_BAGGAGE_WEIGHT') : 0;

    //SWITCHES
    this.bat1 = GetStoredData('G36XIP_BAT1') ? GetStoredData('G36XIP_BAT1') : 0;
    this.bat2 = GetStoredData('G36XIP_BAT2') ? GetStoredData('G36XIP_BAT2') : 0;
    this.alt1 = GetStoredData('G36XIP_ALT1') ? GetStoredData('G36XIP_ALT1') : 1;
    this.alt2 = GetStoredData('G36XIP_ALT2') ? GetStoredData('G36XIP_ALT2') : 1;
    this.pBrake = GetStoredData('G36XIP_PBRAKE') ? GetStoredData('G36XIP_PBRAKE') : 1;
    this.avionics = GetStoredData('G36XIP_AVIONICS') ? GetStoredData('G36XIP_AVIONICS') : 0;
    this.aircon = GetStoredData('G36XIP_AIRCO') ? GetStoredData('G36XIP_AIRCO') : 0;
    this.blower = GetStoredData('G36XIP_BLOWER') ? GetStoredData('G36XIP_BLOWER') : 0;
    this.ventBlower = GetStoredData('G36XIP_VENT_BLOWER') ? GetStoredData('G36XIP_VENT_BLOWER') : 0;
    this.auxFuelPump = GetStoredData('G36XIP_AUX_FUEL_PUMP') ? GetStoredData('G36XIP_AUX_FUEL_PUMP') : 0;
    this.magento = GetStoredData('G36XIP_MAGNETO') ? GetStoredData('G36XIP_MAGNETO') : 0;
    this.pitotHeat = GetStoredData('G36XIP_PITOT') ? GetStoredData('G36XIP_PITOT') : 1;
    this.propDeIce = GetStoredData('G36XIP_PROP_DEICE') ? GetStoredData('G36XIP_PROP_DEICE') : 1;
    this.strobe = GetStoredData('G36XIP_STROBE') ? GetStoredData('G36XIP_STROBE') : 1;
    this.beacon = GetStoredData('G36XIP_BEACON') ? GetStoredData('G36XIP_BEACON') : 1;
    this.navLight = GetStoredData('G36XIP_NAV_LIGHT') ? GetStoredData('G36XIP_NAV_LIGHT') : 1;
    this.floodLight = GetStoredData('G36XIP_FLOOD_LIGHT') ? GetStoredData('G36XIP_FLOOD_LIGHT') : 1;
    this.panelLight = GetStoredData('G36XIP_PANEL_LIGHT') ? GetStoredData('G36XIP_PANEL_LIGHT') : 1;
    this.taxiLight = GetStoredData('G36XIP_TAXI_LIGHT') ? GetStoredData('G36XIP_TAXI_LIGHT') : 1;
    this.landingLight = GetStoredData('G36XIP_LANDING_LIGHT') ? GetStoredData('G36XIP_LANDING_LIGHT') : 1;

    //LEAVERS IN PERCENT %
    this.throttle = GetStoredData('G36XIP_THROTTLE') ? GetStoredData('G36XIP_THROTTLE') : 50;
    this.prop = GetStoredData('G36XIP_PROP') ? GetStoredData('G36XIP_PROP') : 50;
    this.mixture = GetStoredData('G36XIP_MIXTURE') ? GetStoredData('G36XIP_MIXTURE') : 50;
    this.cowl = GetStoredData('G36XIP_COWL') ? GetStoredData('G36XIP_COWL') : 0;

    //FLIGHT CONTROLS
    this.flapsSwitch = GetStoredData('G36XIP_FLAPS') ? GetStoredData('G36XIP_FLAPS') : 1; // 0=UP, 1=APPR, 2=FULL DOWN
    this.flapsLeft = GetStoredData('G36XIP_FLAPS') ? GetStoredData('G36XIP_FLAPS') : 40; // UP=0, APPR=40, DOWN=100
    this.flapsRight = GetStoredData('G36XIP_FLAPS') ? GetStoredData('G36XIP_FLAPS') : 40; // UP=0, APPR=40, DOWN=100

    this.pitchTrim = GetStoredData('G36XIP_PITCH_TRIM') ? GetStoredData('G36XIP_PITCH_TRIM') : 0;
    this.aileronTrim = GetStoredData('G36XIP_AILERON_TRIM') ? GetStoredData('G36XIP_AILERON_TRIM') : 0;

    //ENGINE
    this.fuelSelector = GetStoredData('G36XIP_FUEL_SELECT') ? GetStoredData('G36XIP_FUEL_SELECT') : 'off';
    this.engHasRun = false; //so we can check if the engine has run
    this.engHours = GetStoredData('G36XIP_ENG_HOURS') ? GetStoredData('G36XIP_ENG_HOURS') : 0;
    this.engHobbsRunning = false;
    this.engHobbsTimerStart = '';
    this.engHobbsTimerEnd = '';
  }

  //load the gauge template - found in G36XIP.HTML
  get templateID() { return 'G36XIP'; }

  //Runs as the sim is loading
  connectedCallback() {
    super.connectedCallback();
    //load fuel
    SimVar.SetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "number", Number(this.leftFuel));
    SimVar.SetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "number", Number(this.rightFuel));


    //At the moment there is no easy way to delete the stored values and start with a fresh aircraft
    //  @TODO NEED TO COME UP WITH AN EFFECTIVE WAY TO DELETE THE STORED ITEMS WHEN NEEDED, AM CURRENTLY THINKING A CUSTOM TOOL BAR WINDOW
    //  @TODO DO WE NEED TO BE ABLE TO LET THE USER HAVE STATE SAVING OR NOT?
    //To reset the aircraft uncomment the line below
    //var reset = resetState();
    function resetState() {
      DeleteStoredData('G36XIP_LEFT_FUEL');
      DeleteStoredData('G36XIP_RIGHT_FUEL');
      DeleteStoredData('G36XIP_BAT1');
      DeleteStoredData('G36XIP_BAT2');
    }

  } //end connectedCallback

  //Runs once the flight is loaded
  onFlightStart() {
    super.onFlightStart();

    //set the variables that need to wait for the flight to load as other things will override them

    //Parking Brake
    SimVar.SetSimVarValue("K:PARKING_BRAKES", "number", Number(this.pBrake)); //Works

    //Battery 1
    SimVar.SetSimVarValue("ELECTRICAL MASTER BATTERY:1", "number", Number(this.bat1));

    //Battery 2
    SimVar.SetSimVarValue("ELECTRICAL MASTER BATTERY:2", "number", Number(this.bat2));

    //Alternator 1
    if (this.alt1) {
      SimVar.SetSimVarValue("K:TOGGLE_ALTERNATOR1", "number", 1); //Works
    }

    //Alternator 2
    if (this.alt2) {
      SimVar.SetSimVarValue("K:TOGGLE_ALTERNATOR2", "number", 1); //Works
    }

    //Avionics Switch
    SimVar.SetSimVarValue("K:AVIONICS_MASTER_SET", "number", Number(this.avionics));

    //Airconditioning


    //Blower

    //Vent Blower

    //Fuel Pump Switch
    SimVar.SetSimVarValue("A:GENERAL ENG FUEL PUMP SWITCH:1", "bool", 1); //Doesnt work

    //Engine start switch

    //Pitot Heat
    if (this.pitotHeat) {
      SimVar.SetSimVarValue("K:PITOT_HEAT_ON", "number", 1); //Works
    } else {
      SimVar.SetSimVarValue("K:PITOT_HEAT_OFF", "number", 1); //Works
    }

    //Prop De-Ice
    if (this.propDeIce) {
      SimVar.SetSimVarValue("B:DEICE_Propeller_1_Toggle", "number", 1); //Works
    }

    //Strobe
    SimVar.SetSimVarValue("LIGHT STROBE", "bool", Number(this.strobe)); //Works

    //Beacon
    SimVar.SetSimVarValue("LIGHT BEACON", "bool", Number(this.beacon)); //Works

    //Nav
    SimVar.SetSimVarValue("LIGHT NAV", "bool", Number(this.navLight)); //Works

    //Panel FLood
    SimVar.SetSimVarValue("LIGHT GLARESHIELD", "bool", Number(this.floodLight)); //Works

    //Panel Light
    SimVar.SetSimVarValue("LIGHT PANEL", "bool", Number(this.panelLight)); //Works

    //Taxi Light
    SimVar.SetSimVarValue("LIGHT TAXI", "bool", Number(this.taxiLight)); //Works

    //Landing Light
    SimVar.SetSimVarValue("LIGHT LANDING", "bool", Number(this.landingLight)); //Works

    //Fuel Selector
    if (this.fuelSelector == 'left') {
      SimVar.SetSimVarValue("K:FUEL_SELECTOR_LEFT", "number", 1); //Works
    } else if (this.fuelSelector == 'right') {
      SimVar.SetSimVarValue("K:FUEL_SELECTOR_RIGHT", "number", 1); //Works
    } else if (this.fuelSelector == 'off') {
      SimVar.SetSimVarValue("K:FUEL_SELECTOR_OFF", "number", 1); //Works
    }

    //Throttle
    SimVar.SetSimVarValue("GENERAL ENG THROTTLE LEVER POSITION:1", "percent", Number(this.throttle)); //Works

    //Prop
    SimVar.SetSimVarValue("GENERAL ENG PROPELLER LEVER POSITION:1", "percent", Number(this.throttle)); //Works

    //Mixture
    SimVar.SetSimVarValue("GENERAL ENG MIXTURE LEVER POSITION:1", "percent", Number(this.mixture)); //Works

    //Flaps
    SimVar.SetSimVarValue("FLAPS HANDLE INDEX", "number", Number(this.flapsSwitch)); //Works
  	SimVar.SetSimVarValue("TRAILING EDGE FLAPS LEFT PERCENT", "percent", Number(this.flapsLeft)); //Works
  	SimVar.SetSimVarValue("TRAILING EDGE FLAPS RIGHT PERCENT", "percent", Number(this.flapsRight)); //Works

    //Avionics Brightness

    //floodlight brightness

    //Panel light brightness

    //Sub Panel Lighting brightness

    //Alieron Trim

    //Cowl Flaps

    //Pitch trim



    // I don't think we need to run this every frame so just run it on a timer here
    // Also there might be a performance hit if we try to do that...
    //
    // @TODO NEED TO SET TO 60000 ONCE DEV COMPLETE
    //
    var timerMilSecs = 1000; //this is set so we can change it if needed
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
  }
}

registerInstrument('g36xip-element', G36XIP);