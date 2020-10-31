# MSFS G36 Project version 0.6 (Beta, not released, not guaranteed to be stable)

This is the improvement project for the MSFS default G36. It all started as a simple edit of some configuration files but it has since grown into a fully-fledged modification that improves all aspects of the default G36 and introduces new features. This was made possible with the help of the community consisting of both enthusiasts and G36 pilots (for a list of contributors, see the end of this readme).

-------------------------------------
-------------------------------------

Current features of this modification are:

**Flight dynamics/performance**
* Adjusted climb and cruise performance to match the Bonanza G36 POH charts. 
* Adjusted flap and gear drag
* Slightly reduced pitch effect due to elevator deflection + propwash
* Slightly increased nosewheel steering angle 
* Added drag due to cowl flaps. This causes a 3-4 kts cruise speed loss.
* Decreased yaw sensitivity by lowering deflection rate as a function of speed 
* Increased overall stability: less 'twitchy' feeling

**Engine & Fuel system**
* Completely overhauled engine parameters: realistic fuel flow, mixture-EGT interaction, engine performance at all pressure altitudes.
* Simulation of the electric fuel pump
* More advanced simulation of engine startup:
  - Cold starts: correct use of the fuel pump, throttle and mixture required depending on engine and ambient temperature
  - Under some conditions, idling the engine too soon after start may cause it to quit.
  - Flooded engine: pumping too much fuel to the engine may cause it to ignite slower or not at all.
  - Flooded engine start procedure (mixture low/cut, throttle halfway) may resolve this.
  - A hot engine running idle with little airflow may quit because the fuel evaporates. (Hotstarts WIP)

**Systems**
* Added new working systems and switches:
  - Airco (has a negative effect on engine performance, you will see a few kts lower cruise speed)
  - Airco and ventilator switches are functioning and part of the electrical system
  - Annunciator test
* Electrical system overhaul: 
  - Completely revised electrical buses: all individual systems hooked up to the correct bus
  - Bus tie logic added
  - Correct voltage indications of BUS2 due to reverse current blocking diodes
  - Correct alternator loads
  - Made all indications smooth, rather than instant jumps to a new value
* Autopilot tweaks
  - Fixed holding the wrong altitude at non-standard atmospheric pressures
  - Max pitch and bank angles adjusted for smoother AP behaviour
  - Added maximum and minimum IAS_ref speeds for FLC mode
  - Adjusted autopilot PIDs 
* Integration with the Working Title G1000 mod, with customized ENGINE, LEAN and SYSTEM pages.
* Completely redone G1000 annunciators: all annunciators of the real G36 were implemented (except for door open warnings)
* Corrected fuel gauge scale

**Textures & effects**
* Including the latest version of Uwajimaya's lighting mod (https://uwajimaya.github.io/FS2020/)
* Corrected decals (e.g. shoulder hardness -> harness)

**Checklists**
* Interactive checklists for every stage of your flight that follow the POH 

-------------------------------------
-------------------------------------

Installation:

1: Download and install the Working Title G1000 v0.3 mod

2: Download and unzip the folder ‘z-bonanza-g36-improvement-project’ in your MSFS Community folder

Important note: make sure that the mod is loaded AFTER the G1000 mod. Mods are loaded in alphabetical order. The release versions therefore have ‘z-’ at the beginning of the folder name to automatically ensure a correct loading order. For contributors: if you have installed the mod from your fork or local clone you have to manually ensure the loading order is correct.

https://github.com/Working-Title-MSFS-Mods/fspackages/releases/tag/g1000-v0.3.1

https://github.com/TheFrett/msfs_g36_project/releases/tag/0.5

-------------------------------------
-------------------------------------
