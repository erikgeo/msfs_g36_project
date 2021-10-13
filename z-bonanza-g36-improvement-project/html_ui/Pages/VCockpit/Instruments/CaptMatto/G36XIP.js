'use strict';
class G36XIP extends BaseInstrument {

  constructor() {
    super();
  }

  get templateID() { return 'G36XIP'; }

  connectedCallback() {
    //Runs as the sim is loading

    super.connectedCallback();
    //load the left fuel tank from the dataStore or set full and record in dataStore
    var initLeftFuel = GetStoredData('G36XIP_LEFT_FUEL');
    if (initLeftFuel) {
      SimVar.SetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "number", Number(initLeftFuel));
    } else {
      SimVar.SetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "number", 40);
      SetStoredData('G36XIP_LEFT_FUEL', '40');
    }

    //load the right fuel tank from the dataStore or set full and record in dataStore
    var initRightFuel = GetStoredData('G36XIP_RIGHT_FUEL');
    if (initRightFuel) {
      SimVar.SetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "number", Number(initRightFuel));
    } else {
      SimVar.SetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "number", 40);
      SetStoredData('G36XIP_RIGHT_FUEL', '40');
    }



    // - - - - - - - - - - - - - - - - - - - WHEN SIM RUNNING - - - - - - - - - - - - - - - - - - - - -

    //move this into update section
    var timerMilSecs = 30000;
    var timer = window.setInterval(checkG36State, timerMilSecs);

    function checkG36State() {
      if (SimVar.GetSimVarValue("ELECTRICAL MASTER BATTERY:1", "bool") && SimVar.GetSimVarValue("ENG COMBUSTION:1", "bool")) {
        let lefttank = SimVar.GetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "gallons");
        let righttank = SimVar.GetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "gallons");
        SetStoredData('G36XIP_LEFT_FUEL', lefttank.toString());
        SetStoredData('G36XIP_RIGHT_FUEL', righttank.toString());
      }
    }

  }

  onFlightStart() {
    //Runs once the flight is loaded
    super.onFlightStart();

    //load the battery 1 switch state
    var initBat1 = GetStoredData('G36XIP_BAT1');
    if (initBat1) {
      SimVar.SetSimVarValue("ELECTRICAL MASTER BATTERY:1", "number", 1);
    } else {
      SetStoredData('G36XIP_BAT1', '0');
    }

    //load the battery 2 switch state
    var initBat2 = GetStoredData('G36XIP_BAT2');
    if (initBat2) {
      SimVar.SetSimVarValue("ELECTRICAL MASTER BATTERY:2", "number", 1);
    } else {
      SetStoredData('G36XIP_BAT2', '0');
    }

    //Sadly we can't set the alternator switches
    //GENERAL ENG MASTER ALTERNATOR
    //Not settable

    




  }

  // runs every frame
  Update() {
    super.Update();
  }
}

registerInstrument('g36xip-element', G36XIP);