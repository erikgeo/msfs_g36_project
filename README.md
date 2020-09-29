# MSFS G36 Project version 0.5 (Beta, not released, not guaranteed to be stable)

This is the improvement project for the MSFS default G36. It all started as a simple edit of some configuration files but it has since grown into a fully-fledged modification that improves the default G36 in multiple areas. This was made possible with the help of the community consisting of both enthusiasts and G/A36 (ex-)pilots (for a list of contributors, see the end of this readme).

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
* Integration with the Working Title G1000 mod, with customized DLFT, LEAN and SYSTEM pages.
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
* New interactive checklists for every stage of your flight that follow the POH 

To install:

1: Unzip and put the folder 'bonanza-g36-improvement-project' in your MSFS Community folder

2: Download and install the Working Title G1000 v0.3 mod (...)

3: IMPORTANT: Make sure that the mod is loaded AFTER the G1000 mod. Mods are loaded in alphabetical order.

For more liveries see this thread:
https://forums.flightsimulator.com/t/props-master-livery-list/168148/12

**A special thanks to all contributors**
FrettFS, CaptMatto, Coppersens, Uwajimaya, dciskey, Matchrocket, JuiceBox7535, jonasbeaver, Exp232, nickc95
(please contact me if you are not in this list while you should)
