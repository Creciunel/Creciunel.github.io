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
---

Real-time temperature controller designed for industrial/laboratory applications. The system leverages the dual-core architecture of the **ESP32** to separate the PID regulation logic from the communication stack.

## 🛠️ Technical Implementation

The project focuses on high-precision thermal regulation with the following stack:

* **FreeRTOS:** Multitasking implementation for deterministic PID timing.
* **PID Algorithm:** Custom-tuned feedback loop for stabilization.
* **Web Interface:** Live monitoring via `ESPAsyncWebServer` with WebSocket support for real-time graphs.

## 📷 Gallery

{{< figure src="https://raw.githubusercontent.com/NCMST/Temperature_Control/refs/heads/main/Images/Setting_page.png" title="Web Interface" caption="Live data visualization and PID tuning page" >}}

{{< figure src="https://raw.githubusercontent.com/NCMST/Temperature_Control/refs/heads/main/Images/CSV%20page.png" title="CSV Export" caption="Export temperature data to CSV format" >}}

---