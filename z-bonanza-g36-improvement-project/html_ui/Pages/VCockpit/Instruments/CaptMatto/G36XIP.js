'use strict';
class G36XIP extends BaseInstrument {

  constructor() {
    super();
    this.engHasRun = false;
    this.engHours = GetStoredData('G36XIP_ENG_HOURS') ? GetStoredData('G36XIP_ENG_HOURS') : 0;
    this.engHobbsRunning = false;
    this.engHobbsTimerStart = '';
    this.engHobbsTimerEnd = '';
    this.leftFuel = GetStoredData('G36XIP_LEFT_FUEL') ? GetStoredData('G36XIP_LEFT_FUEL') : 32; // See JuiceBox7535 post #1825 in main forum
    this.rightFuel = GetStoredData('G36XIP_RIGHT_FUEL') ? GetStoredData('G36XIP_RIGHT_FUEL') : 32;
    this.bat1 = GetStoredData('G36XIP_BAT1') ? GetStoredData('G36XIP_BAT1') : 0;
    this.bat2 = GetStoredData('G36XIP_BAT2') ? GetStoredData('G36XIP_BAT2') : 0;
    this.pBrake = GetStoredData('G36XIP_PBRAKE') ? GetStoredData('G36XIP_PBRAKE') : 1;

  }

  get templateID() { return 'G36XIP'; }

  connectedCallback() {
    //Runs as the sim is loading

    super.connectedCallback();
    //load fuel
    SimVar.SetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "number", Number(this.leftFuel));
    SimVar.SetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "number", Number(this.rightFuel));

  } //end connectedCallback



  onFlightStart() {
    //Runs once the flight is loaded
    super.onFlightStart();

    //set the variables that we need to wait for the flight to load
    SimVar.SetSimVarValue("K:KEY_PARKING_BRAKES", "number", 0);
    console.log('set matt');
    SimVar.SetSimVarValue("BRAKE PARKING POSITION", "number", Number(this.pBrake)); //If doesn't work use KEY_PARKING_BRAKES
    SimVar.SetSimVarValue("ELECTRICAL MASTER BATTERY:1", "number", Number(this.bat1));
    SimVar.SetSimVarValue("ELECTRICAL MASTER BATTERY:2", "number", Number(this.bat2));

    //Sadly we can't set the alternator switches
    //GENERAL ENG MASTER ALTERNATOR
    //Not settable

    //Sadly we can't set the avionics master switch
    //AVIONICS MASTER SWITCH
    //Not settable


    //I don't think we need to run this every frame so just run it on a timer here
    var timerMilSecs = 1000;
    var timer = window.setInterval(checkG36State, timerMilSecs);

    function checkG36State() {
      //if the battery master on and the engine is running keep the fuel updated
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
        //set the fuel
        let lefttank = SimVar.GetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "gallons");
        let righttank = SimVar.GetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "gallons");
        SetStoredData('G36XIP_LEFT_FUEL', lefttank.toString());
        SetStoredData('G36XIP_RIGHT_FUEL', righttank.toString());
        //Set Battery switches
        let bat1 = SimVar.GetSimVarValue("ELECTRICAL MASTER BATTERY:1", "bool");
        let bat2 = SimVar.GetSimVarValue("ELECTRICAL MASTER BATTERY:2", "bool");
        SetStoredData('G36XIP_BAT1', bat1.toString());
        SetStoredData('G36XIP_BAT2', bat2.toString());
      }
    }


  }

  // runs every frame+
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
    //DeleteStoredData('G36XIP_LEFT_FUEL');
    //DeleteStoredData('G36XIP_RIGHT_FUEL');
    //DeleteStoredData('G36XIP_BAT1');
    //DeleteStoredData('G36XIP_BAT2');
  }
}

registerInstrument('g36xip-element', G36XIP);