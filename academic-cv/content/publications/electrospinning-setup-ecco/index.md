---
title: "Design and Implementation of a Low-Cost Electrospinning Setup for Nanofibers Fabrication"
date: 2024-10-17
authors:
  - me
  - "Vladimir Ciobanu"
  - "Vitalie Postolache"
  - "Eduard Monaico"
author_notes:
  - "Lead Developer & Award Recipient"
  - ""
  - ""
  - ""

publication_types: ["1"] # Conference Paper
publication: "International Conference on Electronics, Communications and Computing (ECCO)"
publication_short: "ECCO"

abstract: "This paper presents an advanced electrospinning device designed for novel nanomaterials production, focusing on its innovative software architecture and open-source approach. Built around an Arduino Mega, the system utilizes FreeRTOS for real-time task management. The development workflow incorporates PlatformIO and GitHub Actions for CI/CD, ensuring cross-device compatibility. Key hardware features include a high-voltage source with precise feedback and LCD-based parameter tuning, providing a scalable and accessible platform for nanotechnology research."

summary: "Award-winning abstract presenting an open-source, FreeRTOS-based electrospinning system with integrated CI/CD workflows."

tags:
  - Electrospinning
  - FreeRTOS
  - Arduino
  - CI/CD
  - PlatformIO
  - Embedded Systems
  - Open Source

featured: true

links:
  - icon: trophy
    icon_pack: fas
    name: "Award-Winning Abstract"
    url: "#"
  - icon: pdf
    icon_pack: fas
    name: Full Paper
    url: https://ibn.idsi.md/sites/default/files/imag_file/66-67_78.pdf
  - icon: book
    icon_pack: fas
    name: Book of Abstracts
    url: https://ecco.utm.md/wp-content/uploads/2024/12/IC-ECCO-2024-AbstractBookBN.pdf
---

> [!NOTE]
> **Recognition:** This work was recognized as an **award-winning abstract** at the ECCO 2024 conference for its innovative approach to open-source laboratory instrumentation.

### System Architecture

The project stands out by applying modern software engineering principles to hardware development:

* **Real-Time Control:** Implementation of **FreeRTOS** on the Arduino Mega ensures that motor timing and high-voltage safety checks are never interrupted by UI updates.
* **DevOps for Hardware:** Use of **PlatformIO** and **GitHub Actions** allows for automated firmware building and testing, facilitating collaborative research.
* **Modular Design:** The system is designed to be easily adapted for different syringe types and high-voltage requirements.



### Conference Highlights

#### ECCO 2024 Presentation
<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <img src="022-2.jpg" width="100%" alt="Presentation at ECCO 2024" />
  <img src="01-1.jpg" width="48%" alt="Audience engagement" />
  <img src="09.jpg" width="48%" alt="With the Organizing Committee" />
</div>

#### Legacy: ECCO 2021
<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="ECOO_0603.jpg" width="48%" alt="Cătălin Creciunel - ECCO 2021" />
  <img src="ECOO_0674.jpg" width="48%" alt="Conference Hall" />
</div>

### Impact and Applications

By providing a low-cost yet precise alternative to industrial electrospinning units, this setup enables laboratories to:
1. **Accelerate Prototyping:** Rapidly test new polymer solutions for nanofibers.
2. **Collaborate:** Share and improve the control code via the open GitHub repository.
3. **Education:** Serve as a transparent platform for teaching embedded systems and materials science.



---
*This research was supported by the institutional subprogram #02.04.02 and the youth project #24.80012.5007.12TC.*