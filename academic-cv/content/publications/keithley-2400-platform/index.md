---
title: "Hardware–software platform for controlling Keithley 2400 series instruments"

date: 2025-10-01
authors:
  - me
  - "Catalin Cechin"
  - "Daniel Țîrche"
  - "Vladimir Ciobanu"
author_notes:
  - "Lead Developer"
  - ""
  - ""
  - ""

publication_types: ["1"] # Conference Paper
publication: "Tehnologii fizice avansate cu aplicarea UVS în monitorizarea şi modelarea factorilor de mediu"
publication_short: "TFA-UVS"

abstract: "This paper presents the development of a hardware–software platform designed for controlling and monitoring Keithley 2400 SourceMeter devices. The system uses a custom adapter based on ATmega328P and ESP32-C3 for GPIB (IEEE-488) to Wi-Fi conversion. Featuring a secure web interface with multi-level access, the platform enables real-time graphing, CSV logging, and remote operation in both potentiostatic and galvanostatic modes, bridging the gap between legacy laboratory equipment and modern IoT infrastructure."

summary: "A secure IoT-based GPIB control platform for Keithley 2400 SourceMeters, enabling remote automation and real-time data acquisition."

tags:
  - Keithley 2400
  - GPIB
  - IEEE-488
  - ESP32-C3
  - IoT
  - Laboratory Automation
  - Embedded Systems

hugoblox:
  ids:
    doi: 10.59295/tehfizuvs25.25

featured: false

links:
  - icon: pdf
    icon_pack: fas
    name: Full Paper
    url: https://ibn.idsi.md/sites/default/files/imag_file/174-178_57.pdf
---

### Project Architecture

The core innovation lies in the hybrid hardware approach, combining low-level deterministic control with high-level network management.



#### Hardware Layer
* **Signal Conversion:** ATmega328P handles the precise timing required for serial–parallel conversion to the **GPIB (IEEE-488)** standard.
* **Network Stack:** ESP32-C3 manages Wi-Fi connectivity, secure authentication, and the web server.

#### Software & Security
The platform provides a modern dashboard for legacy hardware:
1. **Remote Control:** Full access to SourceMeter parameters from any authorized device.
2. **Measurement Modes:** Automatic switching between multimeter and programmable source (potentiostatic/galvanostatic).
3. **Security:** Implementation of unique authentication tokens and IP-based restriction to prevent unauthorized instrument access.



### Applications
The platform has been validated in stability tests for:
* **Electrochemical characterization.**
* **Automated semiconductor testing.**
* **Remote laboratory education.**