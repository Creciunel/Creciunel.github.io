---
title: "QCM - Quartz Crystal Microbalance for PVD Thickness Monitoring"
summary: "Development of an ESP32-S3 and SN74LVC1G04-based Quartz Crystal Microbalance (QCM) device for real-time monitoring of PVD metal deposition thickness, featuring custom PCB design and a desktop application."
date: 2025-05-01T09:00:00+03:00

tags:
  - Embedded Systems
  - ESP32-S3
  - PCB Design
  - QCM
  - PVD Deposition
  - Hardware Development
  - Desktop App

links:
  - icon: microchip
    icon_pack: fas
    name: QCM Project Repository
    url: "https://creciunel.github.io/projects/qcm/"

math: true
toc: false
---

<style>
/* 1. Ascundere forțată a elementelor laterale */
.docs-toc, #TableOfContents, aside.col-xl-3, .d-xl-block, .page-sidebar {
  display: none !important;
}

/* 2. Suprascrierea containerelor specifice Hugo Blox / Academic care blochează lățimea */
.article-container, .article-style, .prose, .container, .col-lg-9, .col-lg-8, .col-xl-8, article, main {
  max-width: 100% !important;
  width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* 3. Breakout extins pentru Timeline */
.timeline-breakout {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 50px;
  padding: 0 4vw;
  box-sizing: border-box;
  z-index: 10;
}

.timeline-wrapper {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

/* Axă verticală */
.timeline-wrapper::after {
  content: '';
  position: absolute;
  width: 4px;
  background: linear-gradient(180deg, #10b981 0%, #3b82f6 33%, #8b5cf6 66%, #ec4899 100%);
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
  background-color: #10b981;
  border: 4px solid #ffffff;
  top: 30px;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.25);
}
.timeline-left .timeline-marker { right: -13px; }
.timeline-right .timeline-marker { left: -13px; }

/* Carduri */
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

/* Galerie și Media Interactive */
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.grid-gallery a {
  display: block;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  cursor: zoom-in;
}

.grid-gallery img, .grid-gallery video {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
  border: 1px solid rgba(156, 163, 175, 0.4);
  display: block;
}

/* Structură Echipă / Colaborare */
.team-list { 
  margin-top: 20px; 
  padding-top: 15px; 
  border-top: 1px dashed rgba(156, 163, 175, 0.4); 
  font-size: 0.95rem; 
}
.team-role { 
  font-weight: 600; 
  margin-top: 10px; 
  margin-bottom: 5px; 
}
.team-list ul { 
  margin: 0 0 15px 20px; 
  padding: 0; 
}

/* Responsive */
@media screen and (max-width: 992px) {
  .timeline-breakout { 
    width: 100vw; 
    margin-left: -50vw; 
    margin-right: -50vw; 
    padding: 0 15px; 
  }
  .timeline-wrapper::after { left: 24px; transform: none; }
  .timeline-node { width: 100%; padding-left: 55px; padding-right: 10px; text-align: left; }
  .timeline-right { left: 0; }
  .timeline-left .timeline-marker, .timeline-right .timeline-marker { left: 13px; right: auto; }
}
</style>

<div class="timeline-breakout">
  <div class="timeline-wrapper">

<!-- STAGE 1: Concept & Stuttgart Inception (May 2025) -->
<div class="timeline-node timeline-left">
      <div class="timeline-marker" style="background-color: #10b981; box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #10b981;"><i class="fas fa-lightbulb"></i> May 2025 • Stuttgart</span>
        <h3 class="timeline-heading">Project Conception & Goal</h3>
        <p class="timeline-desc" style="margin-bottom: 0;">
          Initiated the QCM project in Stuttgart with the core objective of building a precise quartz crystal microbalance device capable of measuring the thickness of metal layers deposited via PVD technology.
        </p>
      </div>
    </div>

<!-- STAGE 2: Oscilloscope Tests & Initial Schematics (June - July 2025) -->
<div class="timeline-node timeline-right">
      <div class="timeline-marker" style="background-color: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #3b82f6;"><i class="fas fa-wave-square"></i> June - July 2025 • Validation</span>
        <h3 class="timeline-heading">Oscilloscope Testing & Circuit Design</h3>
        <p class="timeline-desc">
          Conducted initial oscillator circuit tests using an oscilloscope without an MCU. Designed the oscillator schematic using the SN74LVC1G04DCKR driver for accurate frequency measurement.
        </p>
        <div class="grid-gallery">
          <a href="First prtotipe testing.jpg" data-fancybox="stage-2">
            <img src="First prtotipe testing.jpg" alt="First Prototype Testing Setup">
          </a>
          <a href="Osciloscope signal.jpg" data-fancybox="stage-2">
            <img src="Osciloscope signal.jpg" alt="Oscilloscope Signal Testing">
          </a>
        </div>
      </div>
    </div>

<!-- STAGE 3: PCB Fabrication & ESP32-S3 Integration (August 2025) -->
<div class="timeline-node timeline-left">
      <div class="timeline-marker" style="background-color: #8b5cf6; box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #8b5cf6;"><i class="fas fa-microchip"></i> August 2025 • Hardware Realization</span>
        <h3 class="timeline-heading">PCB Ordering & ESP32-S3 Integration</h3>
        <p class="timeline-desc">
          Selected the ESP32-S3 microcontroller to handle data processing and integrated the SN74LVC1G04 driver. Ordered the custom PCB from JLCPCB and verified mechanical dimensions and 3D models.
        </p>
        <div class="grid-gallery">
          <a href="Schematic_Oscilant_Circuit.svg" data-fancybox="stage-3">
            <img src="Schematic_Oscilant_Circuit.svg" alt="Schematic Oscillating Circuit">
          </a>
          <a href="PCB_QCM.png" data-fancybox="stage-3">
            <img src="PCB_QCM.png" alt="PCB QCM Layout">
          </a>
          <a href="3D Viewer.gif" data-fancybox="stage-3">
            <img src="3D Viewer.gif" alt="3D Model Viewer of QCM PCB">
          </a>
        </div>
      </div>
    </div>

<!-- STAGE 4: Desktop App & 1health Biotech Bootcamp (September 2025) -->
<div class="timeline-node timeline-right">
      <div class="timeline-marker" style="background-color: #f59e0b; box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #f59e0b;"><i class="fas fa-desktop"></i> September 2025 • Software & Ecosystem</span>
        <h3 class="timeline-heading">Desktop Application & Bootcamp</h3>
        <p class="timeline-desc">
          Developed the desktop application interface (by Andrei Copaceanu) to visualize frequency shifts and layer thickness. Participated in the <a href="https://creciunel.github.io/blog/1health-biotech-bootcamp/" target="_blank">1health Biotech Bootcamp</a> to showcase technical implementations.
        </p>
        <div class="grid-gallery">
          <a href="Desktop_App.png" data-fancybox="stage-4">
            <img src="Desktop_App.png" alt="Desktop Application Interface">
          </a>
          <a href="../../blog/1health-biotech-bootcamp/Diploms2.jpg" data-fancybox="stage-4">
            <img src="../../blog/1health-biotech-bootcamp/Diploms2.jpg" alt="1health Biotech Bootcamp Diploma">
          </a>
        </div>
      </div>
    </div>

<!-- STAGE 5: Hardware Prototyping & Final Testing -->
<div class="timeline-node timeline-left">
      <div class="timeline-marker" style="background-color: #ec4899; box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #ec4899;"><i class="fas fa-flask"></i> Testing & Results</span>
        <h3 class="timeline-heading">Prototype Assembly & Final Testing</h3>
        <p class="timeline-desc" style="margin-bottom: 0;">
          Assembled the physical prototype, tested crystal oscillation performance with the custom hardware board, and validated overall system integration.
        </p>
        <div class="grid-gallery">
          <a href="device.jpg" data-fancybox="stage-5">
            <img src="device.jpg" alt="Final Device Prototype Testing">
          </a>
        </div>
        <div style="margin-top: 15px;">
          <video controls width="100%" style="border-radius: 10px; border: 1px solid rgba(156, 163, 175, 0.4);">
            <source src="test.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

  </div>
</div>