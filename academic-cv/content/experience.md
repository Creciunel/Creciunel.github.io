---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: me
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
      
  - block: markdown
    content:
      title: 'Professional Memberships & Volunteering'
      text: |
        {{< certificate 
          title="Member" 
          org="Danube Youth Council (DYC)" 
          date="2025 - Present" 
          icon="fa-user-graduate"
          id="EUSDR Priority Areas 4, 7 & 8" 
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkE9U8NxYDnt59QY1zwGmMQCFWcXxL9V2Rg&s" 
          link="https://danube-region.eu/danube-youth-council/"
          button_text="Organization ↗"
        >}}

        {{< certificate 
          title="Member" 
          org="Societatea Fizicienilor din Moldova (SFM)" 
          date="2025 - Present" 
          icon="fa-user-graduate"
          id="Physical Sciences Promotion" 
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA0sHvnzm3RL0DNTYJUN81APntDyoEH9VmA&s" 
          link="https://sfm.utm.md/" 
          button_text="Website ↗"
        >}}

        {{< certificate 
          title="Member" 
          org="Moldavian Youth Academy (MYA)" 
          date="2026 - Present" 
          icon="fa-user-graduate"
          id="Academic Mentorship" 
          logo="https://www.mya.md/sites/default/files/MYA_logo_01.png" 
          link="https://www.mya.md/en/members" 
          button_text="Profile ↗"
        >}}
    design:
      columns: '1'

  - block: markdown
    content:
      title: '💻 GitHub Ecosystem'
      subtitle: 'Personal & Research Organization'
      text: '{{< github_stats >}}'
    design:
      columns: '1'

  - block: resume-awards
    content:
      title: Awards
      username: me

  - block: markdown
    content:
      title: 'Certifications'
      text: |
        {{< certificate 
          title="Certificate of Completion" 
          org="Creo Incubator" 
          date="Sep 2025" 
          icon="fa-id-card"
          id="686bf2b21f3bd222920b8569" 
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyaegZYY0bdspTPbzrQ2GjUh6kyAn8XMbeA&s" 
          link="https://mycourse.app/SJXBiORVenhuEYQpB?trk=public_profile_see-credential" 
        >}}

        {{< certificate 
          title="Wi-Fi Fundamentals" 
          org="Nordic Semiconductor" 
          date="Mar 2025" 
          id="7019A867D0D7598-7019A867CC19E5C-11EFA0107D01A1_34" 
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMKEwIzdrwniyT8DXb8yDLhNGF3osC7E5Bw&s" 
          link="https://academy.nordicsemi.com/check-certificate/7019A867D0D7598-7019A867CC19E5C-11EFA0107D01A1_34/?trk=public_profile_see-credential" 
        >}}

        {{< certificate 
          title="Foundations of Git - Certification Course" 
          org="GitKraken" 
          date="Mar 2024" 
          id="irejxyhtro" 
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCT87YF0AxZpTAbLWPnku6EOR3L6Uo354iA&s" 
          link="https://learn.gitkraken.com/certificates/irejxyhtro?trk=public_profile_see-credential" 
        >}}

        {{< certificate 
          title="Embedded C" 
          org="AROBS Group" 
          date="Feb 2022" 
          id="#" 
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTIABHiq5pR0jm24BFFoG5rlKs497DNn-1A&s" 
          link="#" 
        >}}

        {{< certificate 
          title="Introduction to Embedded Linux" 
          org="Microchip Technology Inc." 
          date="Feb 2024 " 
          id="ov58fgz8xazz" 
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0TjaB5NpkpOE9xf4BK9haQsd3I8BmvrG8Q&s" 
          link="https://verify.skilljar.com/c/ov58fgz8xazz?trk=public_profile_see-credential" 
        >}}

    design:
      columns: '1'


  - block: resume-languages
    content:
      title: Languages
      username: me

  - block: resume-skills
    content:
      title: Skills & Hobbies
      username: me

---
