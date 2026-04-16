---
title: "Temperature Controller"
summary: "Real-time temperature controller using ESP32 and FreeRTOS, with a web-based UI for live data and control."
date: 2023-10-26T12:00:00+03:00

# Etichete care apar pe card (Tech Stack)
tags:
  - ESP32
  - FreeRTOS
  - PID
  - ESPAsyncWebServer

# Butoane de acțiune
links:
  - icon: github
    icon_pack: fab
    name: View on GitHub
    url: https://github.com/NCMST/Temperature_Control/

# # Imaginea principală care apare pe cardul proiectului
# image:
#   filename: featured.jpg
#   focal_point: Smart
#   preview_only: false

math: true
---

Real-time temperature controller designed for industrial/laboratory applications. The system leverages the dual-core architecture of the **ESP32** to separate the PID regulation logic from the communication stack.

## Technical Implementation

The project focuses on high-precision thermal regulation with the following stack:

* **FreeRTOS:** Multitasking implementation for deterministic PID timing.
* **PID Algorithm:** Custom-tuned feedback loop for stabilization.
* **Web Interface:** Live monitoring via `ESPAsyncWebServer` with WebSocket support for real-time graphs.

## System Interface and Data Visualization

{{< gallery-pro images="featured.jpg, main windows.png, Setting_page.png, CSV page.png" >}}

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

Zinc is a fundamental building block for advanced nanostructures. By precisely controlling the temperature profile (**Ramp-up** and **Soak** times), we can directly influence the morphology and crystalline quality of the resulting ZnO.


This simulation demonstrates why the thermal stability provided by the **FreeRTOS + PID** algorithm is essential: even a minor fluctuation of a few degrees can halt the reaction or lead to incomplete oxidation, which would drastically alter the electrical properties of the semiconductor.

---