---
title: "01. Power & Safety"
summary: "Establishing the physical foundation: Thermal limits, voltage integrity, and high-voltage safety protocols."
weight: 1

math: true
---

# Chapter 1: Power & Safety

The most common point of failure in embedded systems isn't a bug in the code—it is a failure in the **physical infrastructure**. Power delivery is the foundation upon which all logic rests. If your power rail is "noisy" or suffers from high impedance, your software's behavior becomes non-deterministic.

In this chapter, we transition from "connecting components" to **Engineering Power Systems** that are safe, efficient, and thermally stable.

---

### 🎯 Professional Objectives

* **Thermal Management:** Quantifying the [Joule heating](https://en.wikipedia.org/wiki/Joule_heating) ($P = I^2 R$) in conductors to prevent insulation melting.
* **Voltage Integrity:** Calculating "Voltage Sag" ([Voltage Drop](https://en.wikipedia.org/wiki/Voltage_drop)) to ensure the Microcontroller (MCU) operates within its [Safe Operating Area (SOA)](https://en.wikipedia.org/wiki/Safe_operating_area).
* **High-Voltage (HV) Protocols:** Understanding the unique challenges of [Electrical breakdown](https://en.wikipedia.org/wiki/Electrical_breakdown) and [Electric arc](https://en.wikipedia.org/wiki/Electric_arc) in systems reaching **30kV**.
* **Trace & Cable Sizing:** Applying the [AWG standard](https://en.wikipedia.org/wiki/American_wire_gauge) and [IPC-2221 standards](https://www-eng.lbl.gov/~shuman/NEXT/CURRENT_DESIGN/TP/MATERIALS/IPC-2221A(L).pdf) for PCB trace width.

---

### 🔍 Why This Matters: The "Brown-out" Loop
A typical ESP32 draws ~50mA in idle, but spikes to **500mA** the moment the Wi-Fi radio initiates. If your power wires have a resistance of just $2\Omega$, you will experience a $1V$ drop during that spike. A 5V rail suddenly becomes 4V, triggering a **Brown-out Reset**. The result? A device that reboots infinitely, often misdiagnosed as a software bug.



---

### 🛡️ The Engineering Workflow

1.  **Define the Load:** What is the peak current requirement?
2.  **Calculate the Path:** What is the total resistance from source to load?
3.  **Evaluate Safety:** Does the temperature rise exceed $10^\circ C$?
4.  **Verify Insulation:** Is the dielectric strength sufficient for the operating voltage?

> **Engineer's Golden Rule:** "Design for the peak current, not the average. Measure twice, power up once."

---

### 📚 In this Chapter:
1.  **[AWG Selection & Thermal Management](awg-table/):** Choose the right wire for the right job using our interactive diagnostic tool.
2.  **Cable Architecture:** Solid vs. Stranded wires and where to use them.
3.  **High-Voltage Insulation:** Moving beyond PVC for nanotechnology applications.