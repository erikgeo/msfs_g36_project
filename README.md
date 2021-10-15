# MSFS G36 Project version 0.6.5.1

This is the improvement project for the MSFS default G36. It all started as a simple edit of some configuration files but it has since grown into a fully-fledged modification that improves all aspects of the default G36 and introduces new features. This was made possible with the help of the community consisting of both enthusiasts and G36 pilots (for a list of contributors, see the end of this readme).

-------------------------------------
-------------------------------------

Current version: 0.6.5

* Compatibility update for MSFS version 1.19.9.0 (World Update 6)
* Compatible with Working Title G1000 NXi v 0.7.0

-------------------------------------
-------------------------------------

Features:

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
* Integration with the Working Title NXi mod, with customized ENGINE, LEAN and SYSTEM pages.
* Completely redone G1000 annunciators: all annunciators of the real G36 were implemented (except for door open warnings)
* Corrected fuel gauge scale

**Textures & effects**
* Including the latest version of Uwajimaya's lighting mod (https://uwajimaya.github.io/FS2020/)
* Corrected decals (e.g. shoulder hardness -> harness)

**Checklists**
* Interactive checklists for every stage of your flight that follow the POH

**ATC**
* You are now referenced as Bonanza > Your Callsign in in game ATC

**SOUNDS**
* Excessive undercarriage wind noise reduced

**AIRCRAFT PERSISTENCE / STATE SAVING / MAKING THE PLANE 'REAL' (WORK IN PROGRESS)**
* Aircraft fuel state is saved between flights
* Battery 1 & 2 switch state is loaded on flight start

**MISC**
* Possible fix to aircraft getting stuck on the ground. Changed nose height on gear to reflect reference pictures, increased nose gear damping affect


-------------------------------------
-------------------------------------

Installation:

1: Download and install the Working Title NXi from the store Marketplace

2: Download and unzip the folder ‘z-bonanza-g36-improvement-project’ in your MSFS Community folder

-------------------------------------
-------------------------------------
**FAQ's:**

**Q: I am not seeing the engine pages in the G1000?**

*A: Make sure to install the Working Title NXi (from the Marketplace). Ensure that the old G1000 Working Title mod is no longer installed, we have moved compatabilty to the NXi available from the marketplace.

Please Note: Current version of Working Title NXi 0.7.1 does not have a working reversionary mode and the engine pages are listed on the MFD only. We believe this will change in the future.

There have also been reports of the GNS750 causing issues with the NXi / Our mod.

**Q: The mod isn't working?***

*A: This is usually due to a conflict with another mod in the community folder. The best thing is to remove all other mods and slowly add them to see what causes the conflict. Aircraft, gauge and lighting mods are the prime suspects.*

**Q: The engine won't start?**

*A: Since v0.6, the engine start is modelled. Fuel must be pumped to the engines, cold engines need to warm up and overuse of the fuel pump and throttle prior to engine start may cause it to flood.  If you correctly follow the start procedures, the engine should almost always start on the first try, unless under extreme condtions.*

**Q: My engine quits after landing?**

*A: Fuel may evaporate in a hot engine at low speeds and idle throttle. This could occur on a very hot day when coming to a stop after landing. Use of the cowl flaps on approach and landing is advised under these conditions.*

**Q: My engine quits right away when starting on the runway?**

*A: This mod is designed for cold and dark starts. The sim initializes the CHT as equal to the ambient temperature. Furthermore, the amount of fuel pumped to the engine initializes as 0. Hence, the engine start/run conditions are not met and the engine will shut down. Follow the start-up procedure to restart the engine.*

**Q: The annunciator test button is stuck?**

*A: This happens when you left click outside the clickbox and then hover your mouse over the button and release. Do the same thing to resolve the problem.*

**Q: The AC Blower switch doesn't work?**

*A: Unfortunately there is something wrong with the animation. We have to wait for Asobo to fix this, but since this button was (inop.) by default don't hold your breath. If you click it, it does actually work. You can see it increases the electrical BUS1 load slightly.*
