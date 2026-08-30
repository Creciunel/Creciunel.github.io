---
title: "Temperature Controller"
summary: "Real-time temperature controller using ESP32 and FreeRTOS, with a web-based UI for live data and control."
date: 2023-10-26T12:00:00+03:00

tags:
  - ESP32
  - FreeRTOS
  - PID
  - PCB Design
  - ESPAsyncWebServer

links:
  - icon: github
    icon_pack: fab
    name: View on GitHub
    url: https://github.com/NCMST/Temperature_Control/

math: true
toc: false
---

<style>
/* 1. Hide default TOC and sidebars */
.docs-toc, #TableOfContents, aside.col-xl-3, .d-xl-block, .page-sidebar {
  display: none !important;
}

/* 2. Absolute Breakout */
.timeline-breakout {
  position: relative;
  width: 96vw;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
  padding: 0 15px;
  box-sizing: border-box;
  z-index: 10;
}

.timeline-wrapper {
  position: relative;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}

/* Vertical Axis */
.timeline-wrapper::after {
  content: '';
  position: absolute;
  width: 4px;
  background: linear-gradient(180deg, #f59e0b 0%, #3b82f6 50%, #10b981 100%);
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-node {
  padding: 20px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
}

.timeline-left { left: 0; text-align: right; }
.timeline-right { left: 50%; text-align: left; }

.timeline-marker {
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: #f59e0b;
  border: 4px solid #ffffff;
  top: 30px;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.25);
}
.timeline-left .timeline-marker { right: -13px; }
.timeline-right .timeline-marker { left: -13px; }

/* Cards */
.timeline-card {
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(156, 163, 175, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  text-align: left; 
}

.timeline-tag {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #f59e0b;
  margin-bottom: 10px;
}

.timeline-heading {
  margin: 0 0 12px 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.timeline-desc {
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* 3. Interactive Gallery Grid */
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
}

.grid-gallery a {
  display: block;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  cursor: zoom-in;
}

.grid-gallery img {
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid rgba(156, 163, 175, 0.4);
  transition: transform 0.3s ease;
  display: block;
}

.grid-gallery a:hover img {
  transform: scale(1.08);
}

/* Responsive */
@media screen and (max-width: 992px) {
  .timeline-breakout { width: 100vw; padding: 0 10px; }
  .timeline-wrapper::after { left: 24px; transform: none; }
  .timeline-node { width: 100%; padding-left: 55px; padding-right: 10px; text-align: left; }
  .timeline-right { left: 0; }
  .timeline-left .timeline-marker, .timeline-right .timeline-marker { left: 13px; right: auto; }
}
</style>

<div class="timeline-breakout">
  <div class="timeline-wrapper">

  <!-- STAGE 1 -->
  <div class="timeline-node timeline-left">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <span class="timeline-tag"><i class="fas fa-exclamation-triangle"></i> Lab Challenge • Legacy Setup</span>
        <h3 class="timeline-heading">Manual Thermal Oxidation Limitations</h3>
        <p class="timeline-desc">
          Semiconductor nanostructure synthesis required strict thermal profiles. The original 800W thermal reactor operated with manual LATR autotransformer control and no closed-loop feedback, leading to human error and inconsistent soak times.
        </p>
        <div class="grid-gallery">
          <a href="TermalReactor2.jpg" data-fancybox="stage-1">
            <img src="TermalReactor2.jpg" alt="Thermal Reactor Setup">
          </a>
          <a href="TermalReactor.jpg" data-fancybox="stage-1">
            <img src="TermalReactor.jpg" alt="Thermal Reactor View">
          </a>
          <a href="InitialTemperatureMasurment.jpg" data-fancybox="stage-1">
            <img src="InitialTemperatureMasurment.jpg" alt="Manual Multimeter Measurement">
          </a>
        </div>
      </div>
    </div>

  <!-- STAGE 2 -->
  <div class="timeline-node timeline-right">
      <div class="timeline-marker" style="background-color: #3b82f6;"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #3b82f6;"><i class="fas fa-tools"></i> Hardware Iteration 1 & 2</span>
        <h3 class="timeline-heading">Perfboard Prototyping & In-House Etching</h3>
        <p class="timeline-desc">
          Engineered Prototypes 1 & 1B on perfboard to validate zero-crossing triac drivers and thermocouple conditioning. Designed and etched Prototype No. 2 double-sided PCB in-house via thermal toner transfer to reduce analog noise.
        </p>
        <div class="grid-gallery">
          <a href="PrototipeNr1A.jpg" data-fancybox="stage-2">
            <img src="PrototipeNr1A.jpg" alt="Prototype 1A">
          </a>
          <a href="prototipN1B.jpg" data-fancybox="stage-2">
            <img src="prototipN1B.jpg" alt="Prototype 1B">
          </a>
          <a href="PrototipeNr2LUTCuperLayer.jpg" data-fancybox="stage-2">
            <img src="PrototipeNr2LUTCuperLayer.jpg" alt="Copper Layer Design">
          </a>
          <a href="PrototipeNr2.jpg" data-fancybox="stage-2">
            <img src="PrototipeNr2.jpg" alt="Etched PCB">
          </a>
          <a href="PrototipeNr2display.jpg" data-fancybox="stage-2">
            <img src="PrototipeNr2display.jpg" alt="Prototype Display">
          </a>
        </div>
      </div>
    </div>

  <!-- STAGE 3 -->
  <div class="timeline-node timeline-left">
      <div class="timeline-marker" style="background-color: #8b5cf6;"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #8b5cf6;"><i class="fas fa-microchip"></i> Manufacturing Phase</span>
        <h3 class="timeline-heading">Galvanic Isolation & JLCPCB Fabrication</h3>
        <p class="timeline-desc">
          Designed an industrial-grade PCB manufactured by JLCPCB. Features full galvanic optocoupler isolation decoupling high-voltage 800W AC mains power from the low-voltage DC microcontroller section.
        </p>
        <div class="grid-gallery">
          <a href="Schematic_termicControl-for-fabrication_2026-06-11.png" data-fancybox="stage-3">
            <img src="Schematic_termicControl-for-fabrication_2026-06-11.png" alt="Schematic Diagram">
          </a>
          <a href="PCB_PCB_termicControl-copy_2026-06-11.png" data-fancybox="stage-3">
            <img src="PCB_PCB_termicControl-copy_2026-06-11.png" alt="PCB Layout">
          </a>
          <a href="Photo-View_2026-06-11.svg" data-fancybox="stage-3">
            <img src="Photo-View_2026-06-11.svg" alt="3D Board Render">
          </a>
        </div>
      </div>
    </div>

  <!-- STAGE 4 -->
  <div class="timeline-node timeline-right">
      <div class="timeline-marker" style="background-color: #10b981;"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #10b981;"><i class="fas fa-code"></i> Embedded Firmware</span>
        <h3 class="timeline-heading">FreeRTOS Dual-Core & Async Web Dashboard</h3>
        <p class="timeline-desc">
          Leveraged ESP32 dual cores: Core 0 executes deterministic 100ms PID control tasks and PWM firing; Core 1 hosts ESPAsyncWebServer streaming live temperature WebSockets, online tuning, and CSV data downloads.
        </p>
        <div class="grid-gallery">
          <a href="featured.jpg" data-fancybox="stage-4">
            <img src="featured.jpg" alt="Controller Main Unit">
          </a>
          <a href="main windows.png" data-fancybox="stage-4">
            <img src="main windows.png" alt="Main UI Dashboard">
          </a>
          <a href="Setting_page.png" data-fancybox="stage-4">
            <img src="Setting_page.png" alt="PID Tuning Page">
          </a>
          <a href="CSV page.png" data-fancybox="stage-4">
            <img src="CSV page.png" alt="CSV Export Interface">
          </a>
        </div>
      </div>
    </div>

  <!-- STAGE 5 -->
  <div class="timeline-node timeline-left">
      <div class="timeline-marker" style="background-color: #ec4899;"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #ec4899;"><i class="fas fa-atom"></i> Practical Application</span>
        <h3 class="timeline-heading">Zinc Oxide (ZnO) Thermal Oxidation</h3>
        <p class="timeline-desc">
          Achieved precise $2Zn + O_2 \xrightarrow{\Delta T > 400^\circ C} 2ZnO$ thermal oxidation profiles. Tight PID regulation prevents structural defects and ensures reproducible wide-bandgap nanostructures.
        </p>
      </div>
    </div>

  </div>
</div>

---

## Interactive Atomic Oxidation Simulation

{{< the-atomic-lab >}}

---

## Related Publications

* **[Thermal Treatment Control Systems](/publications/zinc-thermal-treatment-control/):** Remote-controlled temperature setup optimized for Zinc foil oxidation.
* **[Physics of Materials](/publications/pm8-conference/):** Optimized embedded solution designed to automate thermal treatment.
* **[Porous Gallium Oxide Nanostructures](/publications/porous-gallium-oxide-gap/):** Thermal oxidation methodology applied to wide-bandgap semiconductors ($GaP$ to $Ga_2O_3$).