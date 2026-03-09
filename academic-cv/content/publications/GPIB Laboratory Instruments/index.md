---
title: 'Upgrading GPIB Instruments with IoT: A Microcontroller Solution for Local Network Control of the Laboratory Devices'

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me
  - Cătălin Cechi
  - Vladimir Ciobanu
  - Eduard Monaico

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2025-06-23T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-10-14T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *IEEE International Black Sea Conference on Communications and Networking*
publication_short: In *IEEE*

abstract: Many laboratory instruments, such as the Keithley 2400 SourceMeter, still rely on the aging GPIB interface for communication. Traditional GPIB-to-USB converters are expensive and often require proprietary software for operation. This paper presents a cost-effective and user-friendly alternative based on an MCU-based solution (ATmega328P) with AR488 firmware, enabling communication between the Keithley 2400 and a PC via USB. A Python-based interface (using Streamlit, Pandas, NumPy, and Cryptography libraries) provides a web-accessible platform for controlling and monitoring the device over a local network via Wi-Fi or Ethernet. This approach not only facilitates remote access but also allows real-time data acquisition of voltage and current, while enabling full control over the Keithley instrument, which functions as both a power source and a precision multimeter. The proposed solution significantly …

# Summary. An optional shortened abstract.
summary: This paper presents a cost-effective and user-friendly alternative to traditional GPIB-to-USB converters for controlling laboratory instruments like the Keithley 2400 SourceMeter. By utilizing an ATmega328P microcontroller with AR488 firmware, we enable communication between the device and a PC via USB. A Python-based interface provides a web-accessible platform for remote control and real-time data acquisition over a local network.

tags:
  - ioT
  - GPIB
  - ATmega328P
  - AR488
  - Streamlit
  - Python
  - Keithley2400

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.1109/BlackSeaCom65655.2025.11193898

# Custom links
links:
  - type: pdf
    url: "https://repository.utm.md/bitstream/handle/5014/35222/Conf-Int-Communic-Networking-BlackSeaCom-2025-p1-4c.pdf?sequence=1"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - photocatalytic-nanomaterials

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---



