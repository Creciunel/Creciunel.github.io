---
title: "Development of a portable SMD tester with UART-based data transmission"
date: 2026-03-13
authors:
  - "Cristian Zelencov"
  - me
author_notes:
  - ""
  - "Hardware & Communication Systems"

publication_types: ["2"] # Journal article / Technical Paper
publication: "Universitatea Tehnică a Moldovei"

abstract: "This paper presents the development of a compact and low-cost device designed for the identification and measurement of various SMD components, including resistors, capacitors, inductors, diodes, and bipolar junction transistors. Based on the GM328 platform, the device integrates a UART communication interface for real-time data transmission to RS232-based industrial controllers, enabling its use in automated quality control workflows."

summary: "A portable measurement device for SMD components featuring automatic detection and UART-based data logging for industrial testing."

tags:
  - SMD Tester
  - UART
  - RS232
  - GM328
  - Quality Control
  - Embedded Systems

featured: false

links:
  - icon: pdf
    icon_pack: fas
    name: Full Paper
    url: https://repository.utm.md/bitstream/handle/5014/34389/Conf-TehStiint-UTM-StudMastDoct-2025-V1-p786-789.pdf?sequence=1

---

### Project Highlights

The device acts as a bridge between manual laboratory testing and automated industrial verification. By leveraging the **GM328 measurement platform**, we achieved high-precision parameter extraction for:
* **Passive Components:** Resistors, Capacitors (ESR measurement), and Inductors.
* **Semiconductors:** Automatic detection of Diodes and BJT (Bipolar Junction Transistors) pinouts and characteristics.



### Industrial Integration

The standout feature of this research is the **UART communication layer**. Unlike standard portable testers, this implementation allows:
1. **Real-time Logging:** Streaming measurement data to a PC or industrial controller.
2. **Automated Verification:** Integration into assembly lines as a preliminary component check unit.
3. **Legacy Support:** Compatibility with RS232 interfaces through level shifting, making it ideal for older industrial PLC environments.