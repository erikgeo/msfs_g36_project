class BonanzaHangar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    //add a delay becuase we need to - to be able to access the simvars - possible sim bug with loading panels
    var delayInMilliseconds = 1000; //1 second


    setTimeout(function() {

      //get the livery
      var title = SimVar.GetSimVarValue("TITLE", "string");
      this.livery = title.replace(/\s+/g, '_');

      //check if state saving is enabled
      this.stateSaving = GetStoredData('G36XIP_STATE_ACTIVE_'+this.livery);

      //get the engine hours
      this.hobbs = GetStoredData('G36XIP_HOBBS_'+this.livery) ? GetStoredData('G36XIP_HOBBS_'+this.livery) : 1.25; //Brand new Aircraft that has had a 45min acceptance flight & 30 minute flight checks prior to ownership

      //get the battery voltages
      this.bat1volts = SimVar.GetSimVarValue('ELECTRICAL BATTERY VOLTAGE:1', "volts");
      this.bat2volts = SimVar.GetSimVarValue('ELECTRICAL BATTERY VOLTAGE:2', "volts");


    //Send info to the panel - eventually put this in a loop

      //if state saving enabled make the checkbox checked
      if (this.stateSaving = 1) {
        console.log('Panel - State Saving Enabled');
        SetStoredData('G36XIP_STATE_ACTIVE_'+this.livery, this.stateSaving.toString());
        document.getElementById("stateSaving").checked = true;
      } else {
        console.log('Panel - State Saving Disabled');
        SetStoredData('G36XIP_STATE_ACTIVE_'+this.livery, this.stateSaving.toString());
        document.getElementById("stateSaving").checked = false;
      }

      //set the engine hours
      document.getElementById("aircraftEngineHours").innerHTML = parseFloat(this.hobbs).toFixed(2);

      //set the battery voltages
      document.getElementById("aircraftBatt1Volts").innerHTML = parseFloat(this.bat1volts).toFixed(2);
      document.getElementById("aircraftBatt2Volts").innerHTML = parseFloat(this.bat2volts).toFixed(2);

      //Set the ATC name etc
      document.getElementById("aircraftReg").innerHTML = SimVar.GetSimVarValue('ATC ID', "string");
      document.getElementById("aircraftLivery").innerHTML = title;

    }, delayInMilliseconds);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}
window.customElements.define("bonanza-hangar", BonanzaHangar);
checkAutoload();