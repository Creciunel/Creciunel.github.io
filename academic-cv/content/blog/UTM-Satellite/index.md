---
title: "AI-Based Radiation Sensor Developed for UTM Satellite Mission"
date: 2025-06-16T11:09:00+03:00
summary: "Contributing to UTM’s satellite mission with a custom AI-powered cosmic radiation sensor based on FPGA technology and nanosensors under the BIRDS-RPM project."
description: "Contributing to UTM’s satellite mission with a custom AI-powered cosmic radiation sensor based on FPGA technology and nanosensors under BIRDS-RPM project."
draft: false

# Autori
authors:
  - "me"
  - "Mihail Lungu"

# Taxonomii
categories:
  - projects
  - space
tags:
  - UTM
  - satellite
  - AI
  - FPGA
  - nanosensors
  - space radiation
  - BIRDS-RPM

# Imagine reprezentativă (featured image)
image:
  caption: "Satellite Module Prototype for BIRDS-RPM"
  focal_point: "Smart"
  preview_only: false

# Link-uri media
links:
  - icon: tv
    icon_pack: fas
    name: TVR Moldova Report
    url: https://tvrmoldova.md/article/d4ed04be34643986/utm-pregateste-lansarea-a-doi-sateliti.html
  - icon: news
    icon_pack: fas
    name: Stiri.md Article
    url: https://stiri.md/article/social/universitatea-tehnica-a-moldovei-pregateste-lansarea-a-doi-sateliti
---

On **June 16, 2025**, the *Technical University of Moldova (UTM)* was featured in the media for preparing the launch of two nanosatellites. One of the key contributions involves the development of an **AI-based radiation sensing module** — a project I am actively involved in — under the **BIRDS-RPM international satellite mission**.

> “I am designing one of the modules of this satellite. My module aims to measure the level of cosmic radiation — a critical parameter for astronauts. It consists of two radiation sensors (analog and digital), followed by the circuit design stage.”  
> — *Cătălin Crăciunel, interview for TVR Moldova*

## Project Purpose

The goal is to demonstrate the use of:
* **Two radiation sensors:** Integration of both analog and digital sensing paths.
* **FPGA logic:** A dedicated circuit for real-time **SEU (Single Event Upset)** detection.
* **Edge AI:** A neural network deployed on-chip for radiation classification and filtering.
* **Nanosensors:** Validation of cutting-edge materials in space conditions.



## Project Context

This mission is part of **J-CUBE**, coordinated by **LaSEINE (Japan)** and hosted at Kyutech, with the following objectives:

1. **Obj-001**: Demonstrate AI-based radiation sensor using COTS components on FPGA.
2. **Obj-002**: Select nanosensors for detection of nanoscale chemical/physical properties.
3. **Obj-003**: Integrate and test the nanosensor modules under space radiation.
4. **Obj-004**: Assemble and integrate the complete payload stack on BIRDS platform.
5. **Obj-005**: Receive, analyze and adjust data from ground stations for further evolution.
6. **Obj-006**: Educate students in space-grade systems and advanced technologies.

## Media Mentions

<div class="video-container">
  <iframe width="100%" height="450" src="https://tvrmoldova.md/embed.html?file=https://tvrm-s3.fra1.cdn.digitaloceanspaces.com/superdesk/20250615160632/70e8f19d8080b580cb4d0fd8a09cc5733b7c75ad84baf85579b0b18d7d6ee87a.mp4&poster=https://tvrm-s3.fra1.cdn.digitaloceanspaces.com/superdesk/20250615170616/207c5f7cffa08a20e9ced3879ca591727bd5d39252b947176fd83328b40b4462.png&title=Sursa%3A%20TVR%20Moldova" frameborder="0" allowfullscreen></iframe>
</div>

## Impact and Innovation

This project explores:
* **On-device AI inference:** Using FPGA for low-latency radiation detection and classification.
* **Extreme conditions:** Testing **nanosensors** for orbital radiation and high-vacuum stability.
* **Scalability:** Future applications in **ISS, nanosatellites, and environmental sensing**.

The innovation lies in bringing intelligence to the **edge**: one level of AI is directly embedded in the FPGA radiation sensor, and another in the MCU interfacing with the system.

---

## Technical Update: June 16, 2025

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
  <div style="flex: 1; min-width: 250px;">
    {{< figure src="Front-side.jpg" title="Front Side" caption="Module front-side PCB layout" >}}
  </div>
  <div style="flex: 1; min-width: 250px;">
    {{< figure src="back-side.jpg" title="Back Side" caption="Module back-side PCB layout" >}}
  </div>
</div>

---
📌 *This project is realized in collaboration with UTM and LaSEINE Japan, under the BIRDS-RPM satellite program.*