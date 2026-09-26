// portfolioData.js - Central configuration for all CV & Portfolio content

export const personalInfo = {
  name: "Adithya Venkat Kumar",
  firstName: "Adithya",
  title: "Cloud Engineer & Frontend Developer",
  tagline: "Building scalable cloud infrastructure through DevOps, automation, and cloud-native technologies.",
  dynamicTitles: [
    "Cloud Engineer (AWS & Terraform)",
    "Frontend Developer (React & Tailwind)",
    "DevOps & Containerization Enthusiast",
    "Postgraduate Computer Science Candidate",
    "Open Source Contributor"
  ],
  email: "adithyavenkata.ravuri@gmail.com",
  location: "Bangalore, India",
  status: "Available for Cloud & Frontend Engineering Roles",
  resumeUrl: "/resume.pdf", // Place your resume PDF in public/resume.pdf
  logoUrl: "/logo.png", // Place your logo image (logo.png / logo.svg) in public/logo.png
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  githubUsername: "adithyavenkatkumar",
  socialLinks: {
    github: "https://github.com/adithyavenkatkumar",
    linkedin: "https://www.linkedin.com/in/adithya-venkat-kumar-520062231/",
    email: "mailto:adithyavenkata.ravuri@gmail.com"
  }
};

export const aboutData = {
  headline: "",
  bioParagraphs: [
    "Hello! I'm Adithya, an aspiring Cloud Engineer and DevOps professional. I recently completed my Integrated M.Tech in Computer Science and Engineering at VIT-AP University (2021–2026), where I developed a strong foundation in cloud infrastructure, automation, and modern software technologies.",
    "My technical experience includes Microsoft Azure, AWS, Terraform, Docker, Kubernetes, and CI/CD tools such as Azure DevOps, Jenkins, and GitHub Actions. I'm particularly interested in building scalable cloud infrastructure, automating deployments, and applying DevOps and cloud-native practices to create reliable systems.",
    "During my time at VIT-AP University, I earned the Oracle Cloud Infrastructure 2024 Generative AI Certified Professional credential, volunteered for the Engineering Clinics Expo (Fall 2022–23), and contributed as a Marketing Member at the Pennify Chapter.",
    "I'm eager to contribute to an engineering team where I can build scalable cloud solutions, automate infrastructure and deployments, and continue growing as a Cloud and DevOps Engineer."
  ],
  stats: [
    { label: "Degree", value: "Integrated M.Tech" },
    { label: "University", value: "VIT-AP (2026)" },
    { label: "Role Focus", value: "Cloud & Frontend" },
    { label: "Certification", value: "OCI GenAI 2024" }
  ],
  education: [
    {
      id: 1,
      degree: "Integrated M.Tech in Computer Science & Engineering",
      institution: "Vellore Institute of Technology – AP",
      location: "Amaravati, India",
      period: "2021 — 2026",
      grade: "CGPA: 7.83",
      highlights: [
        "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
        "Volunteer – Engineering Clinics Expo (Fall 2022–23)",
        "Marketing Member at Pennify Chapter (VIT-AP University)"
      ]
    },
    {
      id: 2,
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      location: "Guntur, Andhra Pradesh, India",
      period: "2019 — 2021",
      grade: "CGPA: 6.94",
      highlights: [
        "Mathematics, Physics, and Chemistry (MPC) Specialization"
      ]
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Oxford IIT School",
      location: "Guntur, Andhra Pradesh, India",
      period: "2019",
      grade: "CGPA: 9.0",
      highlights: [
        "Excellence in Science and Mathematics"
      ]
    }
  ]
};

export const certificationsData = [
  {
    id: "oracle-oci-genai-2024",
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle Cloud Infrastructure",
    issueDate: "2024",
    credentialId: "OCI-GENAI-9202050C",
    status: "Oracle Certified Professional",
    icon: "FaCloud",
    skills: ["OCI Generative AI", "LLMs & Prompting", "OCI AI Services", "Cloud Architecture"],
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9202050C2040B5764F3550066B1D6B1593D9487BBCE9D73EA89C82963E133CD2",
    secondaryUrl: "https://certificate.givemycertificate.com/c/81a3c18f-8420-4d38-a76f-2b7dfded41c7",
    secondaryUrlLabel: "View Certificate"
  },
  {
    id: "vitap-engineering-clinics-volunteer",
    title: "Certificate of Volunteer – Engineering Clinics Expo (Fall 2022–23)",
    issuer: "VIT-AP University",
    issueDate: "Fall 2022–23",
    credentialId: "VITAP-ECE-2022-23",
    status: "Official University Badge",
    icon: "FaGraduationCap",
    skills: ["Technical Expo Organization", "Volunteer Leadership", "Event Coordination", "Student Mentorship"],
    verifyUrl: "https://certificate.givemycertificate.com/c/81a3c18f-8420-4d38-a76f-2b7dfded41c7"
  },
  {
    id: "pennify-chapter-marketing",
    title: "Marketing Member at Pennify Chapter",
    issuer: "VIT-AP University Chapter",
    issueDate: "2022 — 2023",
    credentialId: "PENNIFY-MKTG-VITAP",
    status: "Verified Chapter Badge",
    icon: "FaUsers",
    skills: ["Technical Marketing", "Community Outreach", "Event Promotion", "Public Relations"],
    verifyUrl: "https://www.linkedin.com/in/adithya-venkat-kumar-520062231/overlay/Certifications/666614736/treasury?profileId=ACoAADnZxmgBbN5soVVeBwdceuSrOHhonqtFmTs"
  }
];

export const experienceData = [];

export const projectsData = {
  categories: ["All", "Cloud & DevOps", "Machine Learning & AI"],
  projects: [
    {
      id: "azure-windows-linux-vm-terraform",
      title: "Azure Multi-OS VM Infrastructure with Terraform",
      category: "Cloud & DevOps",
      tagline: "Automated multi-OS Azure Virtual Machines & networking with Terraform HCL modules.",
      description: "Designed and deployed scalable Azure infrastructure using Terraform for Linux and Windows virtual machines, with a focus on networking, security, automation, and reusable infrastructure components.",
      image: "/azure-terraform.png",
      techStack: ["Terraform", "Microsoft Azure", "Azure Key Vault", "VNets & Subnets", "NSGs", "Azure CLI"],
      githubUrl: "https://github.com/adithyavenkatkumar/azure-windows-linux-vm-terraform",
      liveUrl: "https://github.com/adithyavenkatkumar/azure-windows-linux-vm-terraform",
      featured: true,
      metrics: "100% Terraform IaC • Multi-OS Linux & Windows",
      architectureDiagram: [
        { step: "IaC Definition", node: "Terraform HCL Modules", detail: "Map-based data-driven configuration for VM & networking" },
        { step: "Security", node: "Azure Key Vault", detail: "Secure administrator credential & password management" },
        { step: "Network Layer", node: "VNet, Subnets & NSGs", detail: "Isolated subnets with Network Security Group firewall rules" },
        { step: "Compute Layer", node: "Azure Linux & Windows VMs", detail: "Provisioned virtual machines with Public IPs & NICs" }
      ],
      details: {
        problem: "Manual creation of virtual machines on Azure causes configuration drift, security vulnerabilities, and unmanageable credential storage.",
        solution: "Implemented reusable data-driven Terraform modules to provision Linux & Windows VMs, VNets, Subnets, NSGs, NICs, and Key Vault integration.",
        architecture: [
          "Terraform HCL: Modular map-based data structures for dynamic resource provisioning.",
          "Azure Key Vault: Encrypted storage for VM admin passwords and secrets.",
          "Networking: Virtual Network (VNet), Subnets, NICs, Public IPs, and Network Security Groups (NSGs).",
          "Deployment Workflow: Complete terraform init, validate, plan, apply, and destroy automation via Azure CLI."
        ],
        keyChallenges: [
          "Configuring map-based dynamic resource blocks in Terraform HCL for multi-OS virtual machines.",
          "Securely referencing credentials from Azure Key Vault during automated apply stages."
        ]
      }
    },
    {
      id: "email-spam-detection-system",
      title: "Email Spam Detection System",
      category: "Machine Learning & AI",
      tagline: "ML-powered Flask web application for real-time email spam classification.",
      description: "Developed a machine-learning-based web application that classifies emails as spam or legitimate messages, achieving over 92% classification accuracy.",
      image: "/spam-detection.png",
      techStack: ["Python", "Flask", "Scikit-learn", "Naive Bayes", "Pandas", "NumPy"],
      githubUrl: "https://github.com/adithyavenkatkumar/spam-detection",
      liveUrl: "https://github.com/adithyavenkatkumar/spam-detection",
      featured: true,
      metrics: "92%+ Classification Accuracy • Real-Time ML Inference",
      architectureDiagram: [
        { step: "Data Prep", node: "Pandas & NumPy NLP", detail: "Text tokenization, cleaning, and feature extraction" },
        { step: "Model Training", node: "Naive Bayes Classifier", detail: "Supervised machine learning model evaluated at 92%+ accuracy" },
        { step: "Web Service", node: "Python Flask REST API", detail: "Processes user input and returns real-time spam predictions" },
        { step: "UI Interface", node: "Interactive Web View", detail: "Responsive web interface for instant email content analysis" }
      ],
      details: {
        problem: "Identifying malicious spam and phishing emails automatically requires fast natural language processing and high model classification accuracy.",
        solution: "Built an end-to-end Python machine learning pipeline using Naive Bayes classification integrated into a responsive Flask web application.",
        architecture: [
          "Data Pipeline: Preprocessing and text vectorization using Pandas and NumPy.",
          "ML Engine: Naive Bayes classifier trained using Scikit-learn with 92%+ accuracy.",
          "Backend API: Lightweight Flask server serving model inference endpoints.",
          "Frontend UI: Interactive form allowing users to submit text and view real-time spam confidence."
        ],
        keyChallenges: [
          "Cleaning and vectorizing noisy email text data efficiently for feature matrices.",
          "Persisting and serializing the trained Scikit-learn model for low-latency web request inference."
        ]
      }
    }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "Linux Administration & Bash", icon: "FaTerminal", tag: "Core" },
        { name: "Microsoft Azure Cloud", icon: "VscAzure", tag: "Practitioner" },
        { name: "Docker Containerization", icon: "FaDocker", tag: "Core" },
        { name: "Kubernetes Orchestration", icon: "SiKubernetes", tag: "Core" },
        { name: "Git & GitHub Version Control", icon: "FaGitAlt", tag: "Expert" },
        { name: "Amazon Web Services (AWS)", icon: "FaAws", tag: "Core" }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React 18 / Hooks", icon: "FaReact", tag: "Core" },
        { name: "JavaScript (ES6+) & TypeScript", icon: "SiTypescript", tag: "Core" },
        { name: "TailwindCSS 3 & CSS3", icon: "SiTailwindcss", tag: "Expert" },
        { name: "HTML5 & Responsive Design", icon: "FaHtml5", tag: "Expert" },
        { name: "Framer Motion Animations", icon: "SiFramer", tag: "Core" }
      ]
    }
  ]
};

export const contactData = {
  formspreeId: "xrbgnkwd", // Replace with your Formspree form ID
  email: "adithyavenkata.ravuri@gmail.com",
  availability: "Open for Entry-Level Cloud & Frontend Engineering Roles",
  responseWindow: "Usually responds within 24 hours"
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];
