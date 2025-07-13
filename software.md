---
title: "Software Projects"
permalink: /software/
---

### 🤖 Motor Control via UART + ROS2 (ICG Engineering)

PID control of four motors and one servo using Arduino and a Raspberry Pi running ROS2. Communication between the two platforms is handled over UART. Includes state machine logic and sensor integration for movement coordination.

* ROS2 (Docker container)
* Arduino (ATmega328P)
* Serial communication (UART)
* Motor driver: L293D

---

### 🌐 FreeRTOS + PID + Web Interface

[🔗 ESP32 Temperature Controller](https://github.com/NCMST/Temperature_Control/blob/main/Software/freeWebServer/src/main.cpp)

Designed a real-time embedded software for temperature control in lab systems. Built on ESP32 using FreeRTOS and includes a web-based UI:

* Modular FreeRTOS tasks
* PID temperature regulation
* Web interface (via ESPAsyncWebServer)

Code: [main.cpp ↗](https://github.com/NCMST/Temperature_Control/blob/main/Software/freeWebServer/src/main.cpp)

---

### 💻 RISC-V CPU Core in Verilog

[🔗 GitHub Repository](https://github.com/Creciunel/RISC-V-CPU-Core)

Developed a simplified RISC-V CPU core in Verilog as part of an academic FPGA lab. The project was structured in modular stages:

* Instruction Fetch & Decode
* PC and Branch Logic
* ALU and Register File
* Load/Store Unit & Data Memory

Includes GUI simulation output: <img src="https://github.com/Creciunel/RISC-V-CPU-Core/blob/master/img/CPU_GUI.jpg?raw=true" alt="RISC-V CPU Simulation GUI" width="500" />

---

### 🎥 Stereo Vision with CUDA & Python (Schölly GmbH)

Worked on real-time stereo image processing using OpenCV and CUDA on NVIDIA Jetson platforms:

* Python-based stereo disparity mapping
* CUDA acceleration for real-time depth data
* ROS-compatible Dockerized modules

Also developed test interfaces using Streamlit and assisted in embedded integration.

---

*More software projects will be added soon...*
