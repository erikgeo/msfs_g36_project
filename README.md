# MSFS G36 Project version 0.5 (Beta, not released, not guaranteed to be stable)

This is the improvement project for the MSFS default G36. At this moment, the modification mainly focuses on flight performance fixes. This was made possible with the help of the community consisting of both enthusiasts and G/A36 (ex-)pilots.

Current features of this modification are:

**Flight dynamics/performance**
* Adjusted climb and cruise performance to match the Bonanza G36 POH charts. 
* Adjusted flap and gear drag
* Slightly reduced pitch effect due to elevator deflection + propwash
* Slightly increased nosewheel steering angle 
* Added drag due to cowl flap. This causes a 3-4 kts cruise speed loss.
* Decreased yaw sensitivity by lowering deflection rate as a function of speed

**Engine**
* Completely overhauled engine parameters: realistic fuel flow, mixture-EGT interaction, engine performance at all pressure altitudes.
* Fixed erroneous engine efficiency increase around 2000 rpm
* Adjusted idle RPM to ~600-700. This prevents the unexpected shutdown of a warm engine when idle

**Systems**
* Electrical system overhaul: 
  - Completely revised electrical buses: all individual systems hooked up to the correct bus
  - Bus tie logic added
  - Correct voltage indications of BUS2 due to reverse current blocking diodes
  - Corrected alternator load indications
  - Made all indications smooth, rather than instant jumps to a new value
* Autopilot tweaks
  - Fixed holding the wrong altitude at non-standard atmospheric pressures
  - Max pitch and bank angles adjusted for smoother AP behaviour
  - Added maximum and minimum IAS_ref speeds for FLC mode
* To be used with the G1000 mod (https://forums.flightsimulator.com/t/update-g1000-improved-v2/262603)
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

**Textures & effects**
* Fixed taxi, landing and strobe lights for better visibility from cockpit views
* Corrected decals (e.g. shoulder hardness -> harness)

**Checklists**
* New interactive checklists that follow the POH (WIP)

To install:

1: Click on the green button in the top right corner that sais 'code' and download as zip

2: Unzip and put the folder 'bonanza-g36-improvement-project' in your MSFS Community folder

IMPORTANT EXTRA STEPS IF YOU ARE USING THE G1000 MOD

3: Make sure that the mod is loaded after the G1000 mod (so that it overwrites the panel.xml by the one in this mod). Mods are loaded in alphabetical order.

4: Load the airplane and check that you get the new annunciations. You should have BUSES TIED and OIL PRES LO on startup.

For more liveries see this thread:
https://forums.flightsimulator.com/t/props-master-livery-list/168148/12

**A special thanks to all contributors**
FrettFS, CaptMatto, Coppersens, Uwajimaya, dciskey, Matchrocket, JuiceBox7535, jonasbeaver, Exp232, nickc95
(please contact me if you are not in this list while you should)
