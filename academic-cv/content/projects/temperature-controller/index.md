---
title: "Temperature Controller"
summary: "Real-time temperature controller using ESP32 and FreeRTOS, with a web-based UI for live data and control."
date: 2023-10-26T12:00:00+03:00

tags:
  - ESP32
  - FreeRTOS
  - PID
  - PCB Design
  - ESPAsyncWebServer

links:
  - icon: github
    icon_pack: fab
    name: View on GitHub
    url: https://github.com/NCMST/Temperature_Control/

math: true
---

Real-time temperature controller designed for industrial and laboratory applications. The system leverages the dual-core architecture of the **ESP32** to separate deterministic PID regulation logic from the asynchronous communication stack.

---

## The Challenge: Legacy & Manual Thermal Oxidation

In semiconductor research, material synthesis requires strict thermal profiles. Initially, our laboratory used an open **800W thermal reactor**. The system suffered from critical limitations:

* **Manual Control:** Power regulation was handled via a manual autotransformer (LATR).
* **No Closed-Loop Feedback:** Temperature tracking relied entirely on a basic digital multimeter with a thermocouple.
* **Inconsistency:** Human error and environmental fluctuations made it impossible to achieve repeatable ramp-up and soak times, directly degrading the crystalline quality of the synthesized nanostructures.

The objective was to design a low-cost, automated, closed-loop PID controller capable of driving high-power heating elements while exposing a web interface for real-time monitoring and data logging.

{{< gallery-pro title="Initial setup" images="TermalReactor2.jpg, TermalReactor.jpg, InitialTemperatureMasurment.jpg" >}}

---

## Hardware Evolution: From Breadboard to Production

The hardware went through an iterative engineering process to move from a risky laboratory prototype to an industrial-grade control board:

### 1. Proof of Concept & Prototyping

* **Prototypes No. 1 & 1B:** Built on perfboards (prototyping boards with pre-drilled holes) to validate the thermocouple conditioning circuit and the zero-crossing triac driver.
* **Prototype No. 2 (Toner Transfer):** To reduce noise on the analog lines, a custom double-sided PCB layout was designed and etched in-house using the thermal toner transfer method.

{{< gallery-pro title="Hardware Engineering & Layout" images="PrototipeNr1A.jpg, prototipN1B.jpg, PrototipeNr2LUTCuperLayer.jpg, PrototipeNr2.jpg, PrototipeNr2display.jpg" >}}

### 2. Industrial Grade Production (JLCPCB)

The final iteration was optimized for mass manufacturing and professionally manufactured. The design incorporates galvanic isolation to decouple the high-voltage AC mains (driving the 800W load) from the low-voltage DC microcontroller section.

{{< gallery-pro title="Hardware Engineering & Layout" images="Schematic_termicControl-for-fabrication_2026-06-11.png, PCB_PCB_termicControl-copy_2026-06-11.png, Photo-View_2026-06-11.svg" >}}

---

## Firmware Architecture & Web UI

The firmware is built on top of **FreeRTOS**, taking advantage of the ESP32's dual-core processor to ensure that network latency never interferes with the critical timing of the control loop:

* **Core 0 (Control Loop):** Executes a high-priority, deterministic FreeRTOS task every 100ms to sample the thermocouple, update the custom-tuned PID algorithm, and adjust the PWM/Triac firing angle.
* **Core 1 (Communication Stack):** Hosts an `ESPAsyncWebServer` that serves an interactive web interface. It utilizes WebSockets to stream live temperature data to the client and handles asynchronous HTTP requests for system configuration.

{{< gallery-pro title="System Interface and Data Visualization" images="featured.jpg, main windows.png, Setting_page.png, CSV page.png" >}}

Users can real-time monitor the current temperature graph, tune PID parameters ($K_p$, $K_i$, $K_d$) on the fly, and download complete experimental data logs directly as CSV files for analytical post-processing.

---

## Practical Application: Zinc Oxide (ZnO) Synthesis

In the field of semiconductor research, precise thermal control is critical for processes such as **thermal oxidation**. Using the interactive simulator below, I have modeled the interaction between Zinc and Oxygen atoms under the influence of thermal energy regulated by our PID system.

{{< the-atomic-lab >}}

### The Mechanism of Zinc Oxidation

The oxidation of Zinc is a thermally activated process that depends on overcoming a specific **activation energy barrier**. In the simulation above, you can observe this phenomenon by adjusting the temperature slider:

* **Agitation Phase:** At lower temperatures (below **400°C**), the **Zn** atoms (grey) and **O** atoms (red) undergo elastic collisions, maintaining their individual chemical identities.
* **Activation Energy:** As the PID controller ramps up the temperature, the average kinetic energy of the particles increases according to the kinetic theory of gases:
    $$E_k = \frac{3}{2}kT$$
* **Chemical Reaction:** Upon reaching the critical threshold, collisions become energetic enough to overcome electron shell repulsion, facilitating the formation of **ZnO** (visualized as white-grey particles).

$$2Zn + O_2 \xrightarrow{\Delta T > 400^\circ C} 2ZnO$$

### Importance in Semiconductors

Zinc oxide ($ZnO$) is a fundamental wide-bandgap building block for advanced electronic and optoelectronic nanostructures. By precisely controlling the temperature profile (**Ramp-up** and **Soak** times), we can directly influence the morphology and crystalline quality of the resulting $ZnO$.

This project demonstrates why the thermal stability provided by the **FreeRTOS + PID** algorithm is essential: even a minor fluctuation of a few degrees can halt the reaction or lead to incomplete oxidation, which would drastically alter the final electrical properties of the semiconductor.

---

## Related Publications

The engineering outcomes and material characterization data resulting from this thermal control platform have been published in the following academic frameworks. You can explore the detailed research papers below:

### 1. Thermal Treatment Control Systems

Detailed analysis of the remote-controlled temperature setup and its application specifically optimized for Zinc foils oxidation.
[Read Publication](/publications/zinc-thermal-treatment-control/)

### 2. Physics of Materials

Presentation of the  optimized embedded solution designed to automate the thermal treatment process.
[Read Publication](/publications/pm8-conference/)

### 3. Porous Gallium Oxide Nanostructures

Expansion of the thermal oxidation methodology applied to other wide-bandgap semiconductors ($GaP$ to $Ga_2O_3$ transition).
[Read Publication](/publications/porous-gallium-oxide-gap/)
