---
title: "Smart Inventory Platform - ICNBME 2025"
summary: "Interactive slides for the ICNBME 2025 conference presentation."
authors: [me]
type: slides

slides:
  theme: league
  highlight_style: dracula
  diagram: true
  reveal_options:
    controls: true
    progress: true
    slideNumber: true
    hash: true
  branding:
    title:
      show: true
      position: "bottom-left"
    footer:
      text: "ICNBME 2025 · Cătălin Creciunel"
      position: "bottom-center"
---

# Smart Inventory Platform
### 1D/2D Scanner for Resource-Constrained Institutions

Cătălin Creciunel
*ICNBME 2025, Chișinău*

---

## 🧭 Problem Statement

- Manual inventory in healthcare leads to errors.
- High cost of commercial solutions.
- Stockouts and operational inefficiencies.

---

## 🛠️ The Solution: Hardware Stack

<div class="r-hstack">

<div style="flex: 1; padding-right: 1rem;">

### Portable Scanner
- **ESP8266** Microcontroller
- **GM65** Barcode Module
- 1D/2D & QR support

</div>

<div style="flex: 1; padding-left: 1rem;">

### Mini-Terminal
- **Raspberry Pi 5**
- Modular Web Platform
- Custom CMS

</div>

</div>

---

## 📊 System Architecture

```mermaid
graph LR
    A[Scanner ESP8266] -->|WiFi/MQTT| B[Raspberry Pi 5 Server]
    B --> C[Cloud Database]
    B --> D[Mobile App Interface]
    D --> E[Real-time Analytics]