# MSFS G36 Project version 0.4

This is the improvement project for the MSFS default G36. At this moment, the modificatiom mainly focuses on flight performance fixes. This was made possible with the help of the community consisting of both enthusiasts and G/A36 (ex-)pilots.

Current features of this modification are:

**Flight dynamics/performance**
* Adjusted climb and cruise performance to match the Bonanza G36 POH charts. (WIP)
* Adjusted flap and gear drag
* Slightly reduced pitch effect due to elevator deflection + propwash
* Slightly increased nosewheel steering angle 
* Added drag due to cowl flap. This causes a 3-4 kts cruise speed loss.

**Engine**
* Fixed Continental IO550-B defined as four-cylinder (should be a six-cylinder)
* Fixed erroneous engine efficiency increase around 2000 rpm
* Adjusted idle RPM to ~600. This prevents the unexpected shutdown of a warm engine when idle

**Systems**
* Fixed autopilot altitude holding the wrong altitude at non-standard atmospheric pressures
* Compatible with G1000 mod (https://forums.flightsimulator.com/t/update-g1000-improved-v2/262603)
* Replaced/removed default annunciators
  - Removed PITOT HEAT caution
  - Replaced LOW VOLT caution by BUS1 VOLT LO and BUS2 VOLT LO
* Added many new annunciators based on the G36 POH: 
  - BUSES TIED (Advisory) 
  - FUEL QTY LOW (Warning/Caution)
  - FUEL FLOW HI (Warning)
  - OIL PRES HI/LO (Warning/Caution)
  - OIL TEMP HI (Warning)
  - CHT HI (Warning)
  - ALT INOP (Alt 1, 2 or both, Warning)
  - BUS1/2 VOLT HI (Caution)
  - ALT 1/2 LOAD (Caution)
* Corrected fuel gauge indications
* Airco switch activated (Other switches WIP)

**Effects**
* Fixed taxi, landing and strobe lights for better visibility from cockpit views

**Checklists**
* Initial Pre-Flight checklist changed to reflect the POH (Pages 162-167) & Definitely WIP
* Not checked against AI autopilot completing each item yet

To install:
1: Click on the green button in the top right corner that sais 'code' and download as zip
2: Unzip and put the folder 'bonanza-g36-improvement-project' in your MSFS Community folder

IMPORTANT STEPS IF YOU ARE USING THE G1000 MOD
3: Delete the folder 'Asobo_Bonanza_G36' in Packages\Community\workingtitle-g1000\SimObjects\Airplanes
4: Open Packages\Community\workingtitle-g1000\layout.json and delete the following section:
                    {
                        "date":  132440608632144436,
                        "path":  "SimObjects/Airplanes/Asobo_Bonanza_G36/panel/panel.xml",
                        "size":  15444
                    },
5: Load the airplane and check that you get the new annunciations. You should have BUSES TIED and OIL PRES LO on startup.


For more liveries see this thread:
https://forums.flightsimulator.com/t/props-master-livery-list/168148/12
