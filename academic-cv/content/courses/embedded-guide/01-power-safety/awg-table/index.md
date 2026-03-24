---
title: "AWG Selection & Thermal Management"
summary: "Learn to calculate voltage drops and prevent thermal failure in power rails."
weight: 1
math: true
---

# 01. Wire Gauge Selection

In high-power embedded applications, wires are more than just connections—they are **passive components** with resistance. Choosing the wrong gauge leads to two major engineering failures: **Thermal Runaway** and **Voltage Instability**.

## The Physics of Failure

When current ($I$) flows through a wire with resistance ($R$), energy is lost as heat:

$$P_{loss} = I^2 \times R_{wire}$$

This power loss causes a **Voltage Drop**:

$$V_{drop} = I \times R_{wire}$$



## ⚡ DC vs. AC: Why they are treated differently

In this course, we focus on **Low-Voltage DC** (Direct Current) for Embedded Systems, but the physics of AC (Alternating Current) found in households requires different safety margins.

### 1. Voltage Drop & Regulator Headroom
* **In Embedded (DC):** While an ESP32 runs at 3.3V, it is usually powered via a 5V rail through a regulator (LDO). A 0.5V drop on the 5V line reduces the **regulator headroom**. If the input falls below the dropout voltage (typically around 4.4V for many AMS1117 variants), the 3.3V rail will sag during Wi-Fi bursts, causing **Brown-out Resets**.
* **In Household (AC):** A 0.5V drop on 230V is only **0.2% loss**, which is negligible for appliances. In AC, we prioritize **Thermal Safety** over voltage precision.

### 2. Peak Voltage & Insulation
* **DC:** 5V is constant.
* **AC (RMS):** 230V AC actually peaks at **325V** ($V_{peak} = V_{RMS} \times \sqrt{2}$). Insulation must be rated for the peak voltage, not just the RMS value, to prevent dielectric breakdown.

### 3. Skin Effect & Frequency
In high-frequency AC or fast switching PWM signals, electrons tend to flow on the surface of the wire. This effectively increases resistance. While negligible at 50Hz, it becomes a factor in precision high-speed switching power supplies.

---

## 💻 Engineering Tool: Safety Diagnostic

{{< awg-pro-checker >}}

---

### Technical Specifications for Electrospinning Systems
In your 30kV setup, the ground return path is critical. Even a small resistance in the ground line can lead to **Ground Bounce**, shifting the logical 0V reference. This noise can corrupt sensitive ADC readings from nanotechnology sensors or even damage low-voltage logic if a high-voltage arc finds a path through the signal lines.

---

### Summary Table: Copper Wire Limits (at 20°C)

| Gauge (AWG) | Resistance ($\Omega$/km) | Max Current (A) | Typical Application |
| :--- | :--- | :--- | :--- |
| **18** | 20.9 | 16.0 | Main Power Rails / DC Motors |
| **22** | 52.9 | 7.0 | Breadboard Power / Sensors |
| **26** | 133.9 | 2.2 | Signal Lines / Low Power |
| **28** | 212.9 | 1.4 | Internal PCB Bodge Wires |

> **Next Step:** Once your power delivery is safe, we need to calculate the exact needs of your components.
> [Go to Chapter 2: Ohm's Law & Power budget]