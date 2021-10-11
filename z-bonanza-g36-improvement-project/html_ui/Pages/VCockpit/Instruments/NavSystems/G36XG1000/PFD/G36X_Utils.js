
//load the left fuel tank from the dataStore or set full and record in dataStore
  var initLeftFuel = GetStoredData('G36XIP_LEFT_FUEL');
  if (initLeftFuel) {
    SimVar.SetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "number", Number(initLeftFuel));
  } else {
    SimVar.SetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "number", 40);
    SetStoredData('G36XIP_LEFT_FUEL', '40')
  }

//load the right fuel tank from the dataStore or set full and record in dataStore
  var initRightFuel = GetStoredData('G36XIP_RIGHT_FUEL');
  if (initRightFuel) {
    SimVar.SetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "number", Number(initRightFuel));
  } else {
    SimVar.SetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "number", 40);
    SetStoredData('G36XIP_RIGHT_FUEL', '40')
  }





