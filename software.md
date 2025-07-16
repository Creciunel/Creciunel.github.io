---
title: "Software Projects"
permalink: /software/
---

<style>
.project-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  margin: 2rem auto;
  max-width: 880px;
  overflow: hidden;
  padding: 1rem;
}
.project-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.tech-item {
  background: #f0f0f0;
  border-radius: 6px;
  padding: 0.3rem 0.7rem;
  font-size: 0.85rem;
}
.slider-container {
  position: relative;
  overflow: hidden;
  margin: 1rem 0;
}
.slider-images {
  display: flex;
  transition: transform 0.3s ease-in-out;
}
.slider-images img {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
}
.slider-button {
  position: absolute;
  top: 40%;
  background: rgba(0,0,0,0.4);
  color: white;
  border: none;
  font-size: 1.5rem;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  z-index: 1;
}
.slider-left { left: 0.5rem; }
slider-right { right: 0.5rem; }
</style>

<div class="project-card">
  <div class="project-title">🤖 Motor Control via UART + ROS2</div>
  <p>PID control of four motors and one servo using Arduino and a Raspberry Pi running ROS2. Communication between the two platforms is handled over UART. Includes state machine logic and sensor integration.</p>

  <div class="slider-container" id="slider1">
    <button class="slider-button slider-left" onclick="slide(-1, 'slider1')">&#10094;</button>
    <div class="slider-images">
      <img src="https://miro.medium.com/v2/resize:fit:1200/1*sMG2dsEEBUy1gqN2BNmOjw.jpeg" alt="ROS2 motor control 1" />
      <img src="https://www.researchgate.net/publication/257936711/figure/fig7/AS:668853533151237@1536478517549/Diagram-of-the-ROS-driver-architecture.png" alt="ROS2 motor control 2" />
    </div>
    <button class="slider-button slider-right" onclick="slide(1, 'slider1')">&#10095;</button>
  </div>

  <div class="tech-list">
    <span class="tech-item">ROS2</span>
    <span class="tech-item">UART</span>
    <span class="tech-item">L293D</span>
    <span class="tech-item">ATmega328P</span>
  </div>
</div>

<div class="project-card">
  <div class="project-title">🌐 FreeRTOS + PID + Web Interface</div>
  <p>Real-time temperature controller using ESP32 and FreeRTOS, with a web-based UI for live data and control.</p>

  <div class="slider-container" id="slider2">
    <button class="slider-button slider-left" onclick="slide(-1, 'slider2')">&#10094;</button>
    <div class="slider-images">
      <img src="https://github.com/NCMST/Temperature_Control/raw/main/Images/PCB.jpg" alt="ESP32 Temperature UI" /> 
      <img src="https://github.com/NCMST/Temperature_Control/blob/main/Images/Setting_page.png?raw=true" alt="PID Graph" />
    </div>
    <button class="slider-button slider-right" onclick="slide(1, 'slider2')">&#10095;</button>
  </div>

  <div class="tech-list">
    <span class="tech-item">ESP32</span>
    <span class="tech-item">FreeRTOS</span>
    <span class="tech-item">PID</span>
    <span class="tech-item">ESPAsyncWebServer</span>
  </div>
  <p><a href="https://github.com/NCMST/Temperature_Control/" target="_blank">🔗 View on GitHub</a></p>
</div>

<div class="project-card">
  <div class="project-title">💻 RISC-V CPU Core in VerilogPermalink</div>
  <p>Developed a simplified RISC-V CPU core in Verilog as part of an academic FPGA lab. The project was structured in modular stages: fetch, decode, execute, memory, and writeback.</p>

  <div class="slider-container" id="slider2">
    <button class="slider-button slider-left" onclick="slide(-1, 'slider2')">&#10094;</button>
    <div class="slider-images">
      <img src="https://github.com/Creciunel/RISC-V-CPU-Core/blob/master/img/CPU_GUI.jpg?raw=true" alt="CPU GUI" /> 
      <img src="https://github.com/Creciunel/RISC-V-CPU-Core/blob/master/img/CPU_Diagram.jpg?raw=true" alt="CPU Diagram" />
    </div>
    <button class="slider-button slider-right" onclick="slide(1, 'slider2')">&#10095;</button>
  </div>

  <div class="tech-list">
    <span class="tech-item">Instruction Fetch & Decode</span>
    <span class="tech-item">PC and Branch Logic</span>
    <span class="tech-item">ALU and Register File</span>
    <span class="tech-item">Load/Store Unit & Data Memory</span>
  </div>
  <p><a href="https://github.com/Creciunel/RISC-V-CPU-Core/tree/master" target="_blank">🔗 View on GitHub</a></p>
</div>


<script>
function slide(direction, sliderId) {
  const container = document.querySelector(`#${sliderId} .slider-images`);
  const totalImages = container.children.length;
  const currentIndex = parseInt(container.getAttribute('data-index')) || 0;
  let newIndex = (currentIndex + direction + totalImages) % totalImages;
  container.style.transform = `translateX(-${newIndex * 100}%)`;
  container.setAttribute('data-index', newIndex);
}
</script>
