---
title: "Advanced Functional Materials & Aeromaterial Templates"
summary: "Development and characterization of iron oxide systems (Fe₃O₄, Fe₂O₃) and GaN-based aeromaterials for the Young Researchers Project #24.80012.5007.12TC."
date: 2024-07-01T09:00:00+03:00

tags:
  - Material Science
  - SEM Analysis
  - Thermal Treatment
  - Electrochemistry
  - Aeromaterials
  - Fe3O4/Fe2O3
  - GaN

links:
  - icon: flask
    icon_pack: fas
    name: Project #24.80012.5007.12TC
    url: "https://creciunel.github.io/projects/advanced-functional-materials/"
  - icon: university
    icon_pack: fas
    name: National Center for Materials Study
    url: "https://ncmst.utm.md"

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

/* 3. Breakout extins pentru Timeline (Folosind viewport width pentru a forța ieșirea din orice div) */
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

.timeline-heading a {
  text-decoration: none;
  color: inherit;
}

.timeline-heading a:hover {
  text-decoration: underline;
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

.grid-gallery img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: top; /* Setează focusul decupajului pe partea de sus a imaginii */
  border-radius: 10px;
  border: 1px solid rgba(156, 163, 175, 0.4);
  transition: transform 0.3s ease;
  display: block;
}

.grid-gallery a:hover img {
  transform: scale(1.05);
}

/* Structură Echipă */
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

  <!-- STAGE 1: Project Conclusion (Dec 2025) -->
  <div class="timeline-node timeline-left">
      <div class="timeline-marker" style="background-color: #10b981; box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #10b981;"><i class="fas fa-check-circle"></i> December 2025 • Completed</span>
        <h3 class="timeline-heading">Project Finalization & Results Delivery</h3>
        <p class="timeline-desc" style="margin-bottom: 0;">
          Successfully concluded the 1.5-year research project funded by the National Agency for Research and Development (ANACED). Delivered validated protocols for high-porosity 3D aeromaterial templates and published findings in international congresses.
        </p>
      </div>
    </div>

  <!-- STAGE 2: MacroYouth 2025 Conference -->
  <div class="timeline-node timeline-right">
      <div class="timeline-marker" style="background-color: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #3b82f6;"><i class="fas fa-award"></i> Conference Milestone</span>
        <h3 class="timeline-heading"><a href="https://creciunel.github.io/publications/macroyouth-2025-poster/">MacroYouth 2025 Presentation</a></h3>
        <p class="timeline-desc">
          Showcased advanced optical and structural characterization data of synthesized Fe₃O₄ aeromaterial structures in Iași, receiving the 3rd Prize for Best Poster Presentation.
        </p>
        <div class="grid-gallery">
          <a href="ICMPP - Macroy2025_thumb.png" data-fancybox="stage-2">
            <img src="ICMPP - Macroy2025_thumb.png" alt="MacroYouth 2025 Poster Award Presentation">
          </a>
        </div>
      </div>
    </div>

  <!-- STAGE 3: BPU12 Congress -->
  <div class="timeline-node timeline-left">
      <div class="timeline-marker" style="background-color: #8b5cf6; box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #8b5cf6;"><i class="fas fa-globe"></i> International Dissemination</span>
        <h3 class="timeline-heading"><a href="https://creciunel.github.io/publications/bpu12-congress/">BPU12 Congress (Bucharest)</a></h3>
        <p class="timeline-desc">
          Presented research findings on quantum frontiers and fabrication protocols for novel iron oxide nanonetworks (Fe₃O₄ / Fe₂O₃) during the 12th International Conference of the Balkan Physical Union.
        </p>
        <div class="grid-gallery">
          <a href="Presentation_BPU_2.jpg" data-fancybox="stage-3">
            <img src="Presentation_BPU_2.jpg" alt="BPU12 Conference Presentation">
          </a>
        </div>
      </div>
    </div>

  <!-- STAGE 4: Hardware & Instrumentation Automation -->
  <div class="timeline-node timeline-right">
      <div class="timeline-marker" style="background-color: #f59e0b; box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #f59e0b;"><i class="fas fa-microchip"></i> Automation Milestone</span>
        <h3 class="timeline-heading"><a href="https://creciunel.github.io/publications/gpib-laboratory-instruments/">GPIB Instrumentation Setup</a></h3>
        <p class="timeline-desc">
          Developed automated embedded control systems and GPIB interface software to replace manual laboratory steps, ensuring repeatable environmental control during electrochemical and thermal redox cycles.
        </p>
        <div class="grid-gallery">
          <a href="GPIB.png" data-fancybox="stage-4">
            <img src="GPIB.png" alt="Image of designed and fabricated PCB">
          </a>
        </div>
      </div>
    </div>

  <!-- STAGE 5: Project Initiation & Team (July 2024) -->
  <div class="timeline-node timeline-left">
      <div class="timeline-marker" style="background-color: #ec4899; box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.25);"></div>
      <div class="timeline-card">
        <span class="timeline-tag" style="color: #ec4899;"><i class="fas fa-flag"></i> July 2024 • Project Launch</span>
        <h3 class="timeline-heading">Project Initiation (#24.80012.5007.12TC)</h3>
        <p class="timeline-desc" style="margin-bottom: 0;">
          Official kickoff of the Young Researchers Project at the National Center for Materials Study and Testing (NCMST). Initiated phase stabilization studies for magnetite (Fe₃O₄), hematite (Fe₂O₃), and ultra-lightweight GaN porous templates.
        </p>
        <div class="team-list">
          <div class="team-role" style="color: #ec4899;"><i class="fas fa-user-tie"></i> Management & Expert Guidance:</div>
          <ul>
            <li><strong>Vladimir Ciobanu</strong> – Project Manager</li>
            <li><strong>Tudor Braniște</strong> – Scientific Expert</li>
          </ul>
          <div class="team-role" style="color: #ec4899;"><i class="fas fa-users-cog"></i> Engineering Team:</div>
          <ul style="margin-bottom: 0;">
            <li>Cătălin Creciunel</li>
            <li>Tatiana Maslova</li>
            <li>Simon Busuioc</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>