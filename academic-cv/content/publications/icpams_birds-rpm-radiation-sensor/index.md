---
title: "Design and characterization of thin-film sensor and RADFET modules for radiation monitoring on the BIRDSRPM satellite"
summary: "Development and orbital deployment parameters of the Sensor and RADFET payloads designed for cosmic radiation monitoring on the BIRDS-RPM satellite platform."
# 16 november 2025
date: 2025-11-16T09:00:00+02:00

# Tipul publicației: 1 = Articol de conferință / Conferință cu recenzori (Conference paper)
publication_types: ["1"]

authors:
  - "A. Birnaz"
  - "A. Martiniuc"
  - "V. Melnic"
  - "admin" # 'admin' te mapează automat pe tine (C. Creciunel) ca autor principal pe site
  - "I. Negut"

publication: "The 17th International Conference on Plasma Physics and Applications (ICPAMS17)"
publication_short: "ICPAMS17"

abstract: "This article describes the design and operational principles of two modules, the Sensor module and the RADFET module, developed as part of the Technical University of Moldova (TUM) payload for the BIRDS-RPM satellite platform. The Sensor module is designed to study changes in current through four thin-film sensors under the influence of cosmic radiation. A key challenge in the development of this module was the accurate acquisition of current due to the high resistance of the thin-film sensors, which can vary from 100 kΩ to 10 MΩ. The RADFET module, which utilizes a PIN diode for real-time dose rate and a RADFET transistor for total accumulated dose, will provide a crucial reference for the sensor data. This module is capable of measuring a dose range from 1 cGy to 1 kGy and a dose rate from 0.1 µSv/h to 100 mSv/h. The design of both modules prioritized simplicity, reliability, and low cost. Data from modules will be collected via the I²C protocol for logging and transmission to Earth, providing valuable in-orbit data for the development of future radiation sensors."

tags:
  - Satellite Payload
  - Radiation Monitoring
  - RADFET
  - Thin-Film Sensors
  - I2C Protocol
  - Aerospace Engineering
  - TUM

links:
  - icon: file-pdf
    icon_pack: fas
    name: View Abstract Book (pp. 168-169)
    url: "https://icpams.com/main/wp-content/uploads/ABSTRACT-BOOK-ICPAMS17v2.pdf"
  - icon: university
    icon_pack: fas
    name: Technical University of Moldova
    url: "https://utm.md"

# Setează pe true dacă vrei ca lucrarea să apară evidențiată pe prima pagină
featured: false

math: true
---

## Technical Insights & Hardware Design

The development of the **Sensor** and **RADFET** modules represents a collaborative aerospace initiative tailored for the **BIRDS-RPM satellite platform**. 

### The Sensor Module

The core engineering challenge addressed within the Sensor module was the implementation of ultra-low current acquisition topologies. Because the integrated four thin-film sensors exhibit extremely high electrical resistance—ranging from **100 kΩ up to 10 MΩ**—any leakage current or trace impedance on the PCB could severely compromise data integrity. The instrumentation front-end was optimized to isolate and safely sample these minor current fluctuations under simulated and direct cosmic radiation fields.

### The RADFET Module

To establish a reliable analytical baseline, the secondary RADFET module operates in tandem using dual-topology radiation mapping:

1. **Real-Time Dose Rate:** Monitored via a high-precision PIN diode, capable of capturing rapid dose rate transitions from **0.1 µSv/h to 100 mSv/h**.
2. **Total Ionizing Dose (TID):** Measured using a dedicated RADFET (Radiation-Sensing Field-Effect Transistor) configuration, logging cumulative spatial exposure across a wide dynamic range from **1 cGy to 1 kGy**.

### Low-Power Architecture & In-Orbit Logging

Both modules utilize the **I²C (Inter-Integrated Circuit) communication protocol** as their primary data bus link to the satellite's Central Data Handling unit. This interface permits seamless telemetry logging, enabling the system to pack, buffer, and queue sensor diagnostics for subsequent downlinks to Earth ground stations. The design strictly prioritizes low-power constraints, spatial volume minimization, and hardware fault tolerance necessary for prolonged orbital operation.
