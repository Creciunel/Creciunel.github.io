---
title: "PCB & Layout Projects"
permalink: /layout-projects/
---

---

### 🩺 STM32/ESP32-Based Patient Monitor

[🔗 View Project on GitHub](https://github.com/Creciunel/patient_Monitor_STM411CE)

Custom-designed patient monitor using STM32F411CE and ESP32 for medical sensing and wireless data transmission. The STM32 handled signal acquisition from multiple sensors:

* Gas sensors: MQ3, MQ4, MQ7, MQ135
* ECG via AD8232
* IR temperature sensor: MLX90614
* Environment sensors: SHT3x
* 1.8" RGB TFT display and rotary encoder with button

The ESP32, developed by a teammate, communicated with the STM32 over UART and pushed the data to a remote database with a PHP-based web interface.

<img src="https://github.com/Creciunel/patient_Monitor_STM411CE/blob/main/Realview.jpg?raw=true" alt="PCB and hardware view" width="500" />
<img src="https://github.com/Creciunel/patient_Monitor_STM411CE/blob/main/webwiew.jpg?raw=true" alt="Web interface screenshot" width="500" />

---

### 🌡️ ESP32-Based Temperature Control System

[🔗 View Project on GitHub](https://github.com/NCMST/Temperature_Control)

A FreeRTOS-based system designed to maintain and regulate the temperature of lab-scale thermal systems. Utilizes PID control to stabilize temperature, with UART communication and a graphical user interface.

* Implemented on ESP32
* Designed and routed PCB in KiCad
* Real-time control with FreeRTOS + PID loop
* GUI for parameter tuning and monitoring

<img src="https://github.com/NCMST/Temperature_Control/blob/main/Images/PCB.jpg?raw=true" alt="PCB view" width="500" />
<img src="https://github.com/NCMST/Temperature_Control/blob/main/Images/main%20windows.png?raw=true" alt="Interface screenshot" width="500" />

---

*More projects will be added soon...*
