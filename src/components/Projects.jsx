import React, { useState, useRef, useEffect } from 'react';
import {
  ExternalLink,
  Sparkles,
  Layers,
  Book,
  Bike,
  Server,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  FileText,
  GraduationCap,
  Video,
  Play,
  Pause,
  RotateCcw,
  Compass,
  ChevronLeft,
  ChevronRight,
  Radio,
  Sliders,
  Maximize2,
  X,
  Upload,
  Activity,
  Zap,
  ShoppingBag,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [initialModalTab, setInitialModalTab] = useState('gallery');

  const projects = [
    {
      id: 'bookbridge',
      title: 'BookBridge',
      subtitle: 'Community Book Donation & Free Knowledge Redistribution Platform',
      icon: Book,
      type: 'software',
      category: 'SOCIAL IMPACT & MERN FULL-STACK PLATFORM',
      previewBadge: '📚 BOOK DONATION & IMPACT',
      status: 'PRODUCTION READY',
      github: 'https://github.com/abhishek838/BookBridge',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Social Impact', 'REST APIs', 'UI/UX'],
      summary:
        'A compassionate community book-donation and literature redistribution platform built to democratize education. BookBridge bridges the financial divide by enabling generous individuals, alumni, and readers to donate their pre-owned textbooks and literature directly to students and avid readers who cannot afford them—completely free of cost. Engineered with the full MERN stack, it features seamless donation onboarding, zero-cost student request workflows, real-time inventory management, and proximity matching.',
      highlights: [
        'Compassionate Donation Pipeline: Enables donors to easily list pre-owned textbooks, study guides, and literature to pass the gift of knowledge forward.',
        'Zero-Cost Access for Underprivileged Students: Students facing financial constraints can request needed academic books and receive them 100% free of charge.',
        'Smart Proximity & Campus Drop Matching: Intelligent matching algorithm pairs local book donors with nearby student requests for streamlined peer handoffs and campus drop-boxes.',
        'Transparent Book Journey Tracking: Donors receive real-time notifications when their donated book reaches an appreciative student, fostering tangible community impact.',
        'End-to-End MERN Stack Architecture: Modular React frontend backed by Express/Node.js REST APIs and MongoDB multi-user inventory tracking.',
      ],
      algorithmHeader: 'COMMUNITY DONATION WORKFLOW & SOCIAL IMPACT PILLARS',
      algorithmPoints: [
        {
          title: '1. "Give a Book, Spark a Mind" (Donation Portal)',
          desc: 'Donors upload book details, condition rating, curriculum tags, and preferred pickup/drop points in seconds.',
        },
        {
          title: '2. Zero-Cost Student Request Gateway',
          desc: 'Students facing financial barriers browse verified inventory and request needed study materials with zero financial charges.',
        },
        {
          title: '3. Proximity Matching & Campus Hubs',
          desc: 'Pairs donors with local students or designated campus drop centers for smooth, sustainable, and reliable book handoffs.',
        },
        {
          title: '4. Circular Knowledge Economy',
          desc: 'Prolongs the lifecycle of physical books, prevents educational waste, and builds an equitable community of learning.',
        },
      ],
      slides: [
        {
          image: './images/bookbridge-community.jpg',
          tag: 'DONATE & EMPOWER',
          title: 'Bridging Generous Donors with Students in Need',
          desc: 'A social-impact digital platform connecting individuals who want to give away pre-owned textbooks and literature with students and readers who cannot afford educational materials.',
          fit: 'cover',
        },
      ],
      metrics: {
        archLabel: 'MISSION',
        archVal: 'Free Books',
        statLabel: 'IMPACT',
        statVal: 'Zero Cost',
        flowLabel: 'STACK',
        flowVal: 'MERN Stack',
      },
      gradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
    },
    {
      id: 'tapua-makhana',
      title: 'Tapua Makhana (D2C E-Commerce)',
      subtitle: 'GI-Tagged Mithila Makhana • Spring Boot • React • MySQL • Google OAuth 2.0',
      icon: ShoppingBag,
      type: 'software',
      category: 'FULL-STACK D2C E-COMMERCE & AGRI-TECH',
      previewBadge: '🌾 D2C E-COMMERCE & AGRI-TECH',
      status: 'DEVELOPED FROM SCRATCH',
      tags: [
        'React.js',
        'Spring Boot',
        'MySQL / SQL',
        'Google OAuth 2.0',
        'REST APIs',
        'Bootstrap 5',
        'HTML5 / CSS3',
        'JavaScript ES6+',
        'JWT Auth',
        'Direct Sourcing',
      ],
      summary:
        'A full-stack D2C e-commerce platform developed from scratch to deliver authentic, hand-picked GI-tagged Mithila Makhana from Bihar across India. Built with React.js & Bootstrap 5 backed by Java Spring Boot REST microservices, Google OAuth 2.0 security, and a MySQL relational database for catalog browsing, cart management, and farmer empowerment.',
      highlights: [
        'Full-Stack Development from Scratch: Designed and engineered end-to-end using HTML5, CSS3, JavaScript ES6+, React.js, Bootstrap 5, Java Spring Boot, and MySQL.',
        'Google OAuth 2.0 & Role-Based Security: Frictionless one-tap social authentication with Google Identity Services, coupled with Spring Security and stateless JWT session management.',
        'Enterprise Relational Schema (MySQL): ACID-compliant relational database modeling products, variant SKUs (Raw, Roasted, Hand-Picked, Flavored, Flour), shopping cart states, and order records.',
        'Curated Agri-Tech Catalog: Categorized product lines (Classic Raw Makhana, Roasted Lightly Spiced Snacks, Traditional Makhana Flour) with real-time stock availability and nutritional breakdowns.',
        'Authentic Mithila GI-Tag Showcase & Farmer Empowerment: Digital storytelling celebrating Bihar’s traditional wetland harvesting, cutting out multi-tier middlemen to support local farming families.',
        'Complete E-Commerce Lifecycle: Dynamic cart state calculation, free shipping logic (orders above ₹499), delivery address management, and order status tracking.',
      ],
      algorithmHeader: 'SPRING BOOT REST BACKEND, GOOGLE OAUTH & D2C ARCHITECTURE',
      algorithmPoints: [
        {
          title: '1. Google OAuth 2.0 Identity & Spring Security',
          desc: 'Client-side Google OAuth 2.0 token acquisition triggers server-side validation against Google identity servers. Spring Security filters issue signed JWT bearer tokens and automatically provision or synchronize user records in MySQL with encrypted credentials.',
        },
        {
          title: '2. Stateless Spring Boot RESTful Microservices',
          desc: 'Organized into decoupled Controller, Service, and Spring Data JPA Repository layers. Exposes optimized REST endpoints for product catalog querying, category filtering, cart state synchronization, and checkout pipelines.',
        },
        {
          title: '3. Normalized Relational MySQL Database Engine',
          desc: 'ACID-compliant relational database modeling Users, Roles, Categories, Products, SKU Variants (Raw / Roasted / Lightly Spiced / Flour / Weight), Orders, and Order Items with foreign key constraints and transactional integrity.',
        },
        {
          title: '4. Farm-to-Table Supply Chain & Farmer Economics',
          desc: 'Cuts out multi-tier wholesale intermediaries to directly empower Bihar’s Mithila makhana farming communities, ensuring fair compensation and bringing unadulterated, fresh-harvested superfood to consumers.',
        },
      ],
      slides: [
        {
          image: './images/tapua-makhana.png',
          tag: 'FLAGSHIP D2C STOREFRONT',
          title: 'Tapua Makhana: Goodness in Every Bite (Bihar to India)',
          desc: 'Storefront UI with curated categories (Classic Raw Makhana, Flavored Snacks, Makhana Flour, Empowering Farmers) and complete D2C ordering pipeline.',
          fit: 'cover',
        },
      ],
      metrics: {
        archLabel: 'BACKEND',
        archVal: 'Spring Boot',
        statLabel: 'AUTH',
        statVal: 'Google OAuth',
        flowLabel: 'DATABASE',
        flowVal: 'MySQL / SQL',
      },
      gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.18) 0%, rgba(234, 88, 12, 0.18) 100%)',
    },
    {
      id: 'line-follower-robot',
      title: 'Autonomous Line Follower Robot',
      subtitle: 'Arduino Uno • Infrared Optical Sensor Deck • L298N Differential 4WD',
      icon: Cpu,
      type: 'robotics',
      category: 'EMBEDDED ROBOTICS & HARDWARE',
      status: 'WORKING PROTOTYPE • VIDEO READY',
      videoSupport: true,
      videoUrl: 'https://drive.google.com/file/d/1xOEqRo3X5vPgr7Y_uMyznW27edQl-tSs/preview',
      videoDriveLink: 'https://drive.google.com/file/d/1xOEqRo3X5vPgr7Y_uMyznW27edQl-tSs/view?usp=sharing',
      tags: [
        'Arduino Uno',
        'Embedded C++',
        'IR Optical Array',
        'L298N Dual H-Bridge',
        'High-Torque DC Motors',
        'Differential Steering',
        'Hardware Fabrication',
      ],
      summary:
        'A self-guided autonomous robotic ground vehicle engineered to detect, lock onto, and follow high-contrast black line paths in real time. Powered by an Arduino Uno (ATmega328P), a multi-channel optical infrared reflectance array, dual H-bridge motor drivers, and high-traction chevron rubber wheels on a custom dual-tier chassis.',
      highlights: [
        'Multi-channel infrared photodiode array operating on optical surface reflectance (black absorption vs. white reflection).',
        'ATmega328P microsecond closed-loop differential drive algorithm delivering dynamic steering corrections and zero-overshoot stability.',
        'High-torque DC gearmotors paired with heavy-duty ribbed all-terrain tires for slip-resistant cornering through acute bends and 90° angles.',
        'Custom dual-tier fabricated chassis with M3/M4 threaded standoffs, dual-rail battery power isolation, and vibration dampening.',
        'Engineered as a milestone College Engineering Mechanics & Robotics project (Registered Roll ID: B8280838 - Abhishek Kumar).',
        'Integrated video player ready for track run demonstration of autonomous steering and junction navigation.',
      ],
      hardwareSpecs: [
        { label: 'Microcontroller', value: 'Arduino Uno R3 (ATmega328P @ 16MHz)' },
        { label: 'Optical Sensor Deck', value: '3-Channel IR Reflectance Array (LM393 Comparators)' },
        { label: 'Drive Motors', value: 'High-Torque DC Geared Motors (4WD Layout)' },
        { label: 'Motor Driver', value: 'L298N Dual Full-Bridge PWM Controller' },
        { label: 'Traction Wheels', value: 'Wide Chevron-Ribbed Rubber All-Terrain Tires' },
        { label: 'Power Subsystem', value: 'Rechargeable Battery Pack with Isolated Rails' },
        { label: 'Chassis Platform', value: 'Dual-Tier Fabricated Standoff Deck' },
        { label: 'Control Theory', value: 'Differential Closed-Loop Trajectory Correction' },
      ],
      algorithmPoints: [
        {
          title: '1. Infrared Absorption & Reflection',
          desc: 'Infrared emitters pulse 940nm light downward. The high-reflectance white floor bounces photons back into the phototransistor (logic LOW). The matte black guide line absorbs the infrared beam (logic HIGH).',
        },
        {
          title: '2. Closed-Loop Differential Steering',
          desc: 'When the center sensor is active, both left and right wheels drive forward symmetrically. If the vehicle veers right and the left sensor hits black, the left motor decelerates or reverses while the right accelerates, snapping the vehicle back to center.',
        },
        {
          title: '3. Zero-Radius Corner Pivots',
          desc: 'For 90-degree hairpin turns, the L298N driver executes counter-rotational torque (one side clockwise, the other counter-clockwise), pivoting the chassis on its geometric axis with zero turning radius.',
        },
        {
          title: '4. Power Isolation & Noise Filtering',
          desc: 'DC motors generate electrical noise and inductive kickback. The hardware uses decoupling capacitors and isolated supply rails to prevent the Arduino Uno logic circuitry from suffering brownout resets.',
        },
      ],
      metrics: {
        archLabel: 'CORE',
        archVal: 'ATmega328P',
        statLabel: 'OPTICAL',
        statVal: '3-Ch IR Array',
        flowLabel: 'DRIVE',
        flowVal: '4WD Differential',
      },
      slides: [
        {
          image: './images/robotics/line-follower-side.jpg',
          tag: '4WD CHASSIS & WHEELS',
          title: 'Robotic Vehicle & High-Traction Wheels',
          desc: 'Side elevation highlighting the wide chevron-ribbed rubber wheels, internal battery compartment, and dual DC motor drive wiring.',
        },
        {
          image: './images/robotics/line-follower-sensors.jpg',
          tag: 'OPTICAL SENSOR DECK',
          title: 'Infrared (IR) Sensor Array Platform',
          desc: 'Top view of the optical sensor mounting deck with calibrated IR sensors, potentiometers, and ribbon wiring harness tuned for black line contrast.',
        },
        {
          image: './images/robotics/line-follower-chassis.jpg',
          tag: 'FABRICATED MECHANICS PLATE',
          title: 'Dual-Deck Chassis & College Engineering IDs',
          desc: 'Fabricated chassis plate bearing college Engineering Mechanics markings and team registration IDs (including B8280838 - Abhishek Kumar).',
        },
      ],
      gradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
    },
    {
      id: 'clap-switch',
      title: 'Acoustic Clap-Activated Smart Automation Switch',
      subtitle: 'Arduino Uno • Sound Sensor Module (LM393) • 5V Optocoupled Relay Controller',
      icon: Zap,
      type: 'robotics',
      category: 'EMBEDDED IOT & HARDWARE AUTOMATION',
      previewBadge: '⚡ IOT HARDWARE',
      status: 'FUNCTIONAL HARDWARE PROTOTYPE',
      tags: [
        'Arduino Uno',
        'Acoustic Sound Sensor',
        '5V Relay Module',
        'Embedded C++',
        'IoT Home Automation',
        'Mains AC Control',
        'Noise Debouncing',
        'Optocoupler Isolation',
      ],
      summary:
        'A physical IoT home automation and acoustic switching system engineered to toggle mains AC electrical room lighting through sound impulses. When an occupant claps once, the acoustic condenser sensor detects the audio pressure wave, the Arduino Uno processes the digital trigger through an anti-chatter debouncing algorithm, and toggles the optocoupled 5V relay to turn off or turn on the room light.',
      highlights: [
        'Real-time acoustic sound impulse detection utilizing an electret condenser microphone with onboard LM393 comparator.',
        'Solid-state bistable state-latching logic (flip-flop) in Embedded C++ providing reliable Clap ON / Clap OFF operation.',
        'Software debouncing and thresholding algorithm to eliminate false triggers from ambient room chatter and sound reflections.',
        '5V single-channel SPDT relay with optocoupled galvanic isolation, safely isolating low-voltage logic from 230V AC mains.',
        'Live physical wall installation wired directly into room illumination fixtures and regulated DC power supply.',
      ],
      hardwareSpecs: [
        { label: 'Microcontroller', value: 'Arduino Uno R3 (ATmega328P @ 16MHz)' },
        { label: 'Acoustic Sensor', value: 'Electret Microphone + LM393 Comparator Module' },
        { label: 'Switching Actuator', value: '5V Single-Channel SPDT Relay (10A 250VAC rating)' },
        { label: 'Electrical Isolation', value: 'Optocoupler Galvanic Isolation (PC817)' },
        { label: 'Operating Logic', value: 'Bistable State-Toggle (Flip-Flop) with 350ms Debounce' },
        { label: 'Controlled Load', value: 'Mains AC Room Illumination (Fluorescent / LED Tubelight)' },
        { label: 'Input Sensitivity', value: 'Analog Potentiometer Calibrated for Hand Claps' },
        { label: 'Power Delivery', value: 'Regulated 5V USB-B Power Supply & Wall Adapter' },
      ],
      algorithmHeader: 'ACOUSTIC SIGNAL PROCESSING & RELAY TOGGLE LOGIC',
      algorithmPoints: [
        {
          title: '1. Acoustic Wave Spike Detection',
          desc: 'The electret condenser microphone converts hand-clap sound pressure waves into an analog voltage spike. The LM393 comparator compares this against a calibrated potentiometer threshold, sending a clean digital trigger to the Arduino interrupt/digital pin.',
        },
        {
          title: '2. Software Debounce & False-Positive Filter',
          desc: 'Physical claps produce reverberant acoustic decay and microphonics. The microcontroller code enforces a non-blocking 350ms lockout timer (using millis()) to reject acoustic reflections and ensure each hand clap counts as exactly one distinct trigger.',
        },
        {
          title: '3. Bistable State-Flip Memory (Latching)',
          desc: 'An internal boolean state flag maintains memory of the current light status (isLightOn = !isLightOn). Each validated clap inverts the state: if the light was ON, it turns OFF; when clapped again, it snaps back ON.',
        },
        {
          title: '4. Optocoupled High-Voltage AC Switching',
          desc: 'The Arduino digital pin energizes an optocoupler LED, optically triggering a phototransistor to drive the relay coil. This provides total galvanic isolation between sensitive 5V digital logic and dangerous 230V AC mains electricity.',
        },
      ],
      slides: [
        {
          image: './images/robotics/clap-switch-overview.jpg',
          tag: 'WALL INSTALLATION',
          title: 'Full Hardware & AC Light Wall Deployment',
          desc: 'Complete live system deployed on wall: regulated AC power adapter, Arduino Uno, 5V optocoupled relay, and acoustic microphone sensor wired to the room tubelight fixture.',
          fit: 'cover',
        },
        {
          image: './images/robotics/clap-switch-circuit.jpg',
          tag: 'RELAY & SENSOR CIRCUITRY',
          title: 'Acoustic Sound Sensor & Optocoupled Relay Module',
          desc: 'Detailed view of the LM393 acoustic sensor module with threshold potentiometer, 5V SPDT switching relay, and high-voltage AC mains junction wiring.',
          fit: 'cover',
        },
        {
          image: './images/robotics/clap-switch-arduino.jpg',
          tag: 'ARDUINO UNO CORE',
          title: 'Arduino Uno R3 Microcontroller Deck',
          desc: 'Macro inspection of the genuine Arduino Uno R3 board (ATmega328P @ 16MHz) running bistable state-latching logic and noise-filtered debounce routines.',
          fit: 'cover',
        },
      ],
      metrics: {
        archLabel: 'LOGIC',
        archVal: 'Bistable Toggle',
        statLabel: 'RESPONSE',
        statVal: '< 15ms Trigger',
        flowLabel: 'LOAD',
        flowVal: '230V AC Mains',
      },
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
    },
    {
      id: 'hydraulic-gate-project',
      title: 'Hydraulic Canal Gate & Lock System',
      subtitle: '1st Year Engineering Milestone • Pascal’s Principle • Fluid Kinematics',
      icon: Layers,
      type: 'robotics',
      category: 'FLUID POWER & MECHANICAL ENGINEERING',
      status: '1ST YEAR FOUNDATIONAL PROTOTYPE',
      tags: [
        "Pascal's Law",
        'Fluid Mechanics',
        'Hydraulic Actuation',
        'Mechanical Linkages',
        'Physical Prototyping',
        'College Team Project',
      ],
      summary:
        'A working fluid power and civil-mechanical kinematics prototype designed and fabricated during 1st year of engineering. Utilizes Pascal’s Principle of fluid pressure transmission through dual-cylinder hydraulic circuits to hoist heavy infrastructure sluice gates and simulate canal navigation locks.',
      highlights: [
        'Applied Pascal’s Principle (P = F / A) to achieve mechanical force amplification through an incompressible fluid medium.',
        'Dual-cylinder hydraulic circuit with flexible airtight conduits and manual plunger stroke control.',
        'Structural timber framing with precision pivot hinges demonstrating radial arc floodgate elevation.',
        'Presented on the campus quad before engineering faculty evaluators with theoretical pressure equations and live gate actuation.',
        'Foundational milestone that cemented my passion for end-to-end engineering, mechanical tolerances, and hardware prototyping.',
      ],
      hardwareSpecs: [
        { label: 'Governing Law', value: "Pascal's Principle (P1 = P2, F1/A1 = F2/A2)" },
        { label: 'Actuation Assembly', value: 'Dual Master-Slave Hydraulic Syringe Cylinders' },
        { label: 'Working Medium', value: 'Incompressible Fluid (Airtight Liquid Circuit)' },
        { label: 'Mechanical Framework', value: 'Reinforced Timber Chassis & Hinged Sluice Barrier' },
        { label: 'Motion Kinematics', value: 'Radial Arc Elevation via Linear Plunger Extension' },
        { label: 'Real-World Applications', value: 'Canal Navigation Locks, Spillway Dams & Floodgates' },
      ],
      algorithmPoints: [
        {
          title: "1. Pascal's Law of Pressure Transmission",
          desc: "Pressure exerted anywhere in an enclosed incompressible fluid is transmitted equally in all directions: P = F1 / A1. Applying a modest force to a smaller input cylinder generates multiplied lifting force on the larger gate cylinder.",
        },
        {
          title: '2. Sluice Gate Kinematic Linkage',
          desc: 'The linear stroke of the slave piston connects to the gate leaf through a moment arm, converting linear fluid thrust into rotational torque about the hinge axis to raise and lower the floodgate.',
        },
        {
          title: '3. Canal Lock Water Level Balancing',
          desc: 'Simulates the operation of modern shipping canal locks (such as the Panama Canal), where controlled gate elevation balances hydrostatic head pressure between adjacent river chambers.',
        },
        {
          title: '4. Physical Craftsmanship & Team Collaboration',
          desc: 'Fabricated from raw timber, brass hinges, and fluid lines by Abhishek Kumar and first-year cohort peers, presented with comprehensive technical calculation charts on the college quad.',
        },
      ],
      metrics: {
        archLabel: 'PHYSICS',
        archVal: "Pascal's Law",
        statLabel: 'CIRCUIT',
        statVal: 'Dual Cylinder',
        flowLabel: 'ORIGIN',
        flowVal: '1st Year Lab',
      },
      slides: [
        {
          image: './images/story-hydraulic-gate.jpg',
          tag: '1ST YEAR TEAM PRESENTATION',
          title: 'Campus Quad Prototype Presentation',
          desc: 'Abhishek Kumar and engineering teammates presenting the working Hydraulic Gate prototype and theoretical display board on the college campus quad.',
        },
      ],
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(0, 240, 255, 0.15) 100%)',
    },
    {
      id: 'blockchain-paper',
      title: 'Blockchain Encryption using Biometric Auth',
      subtitle: 'Published in GIJET • Indexed on EBSCOhost Academic Database',
      icon: ShieldCheck,
      type: 'research',
      category: 'PEER-REVIEWED SCHOLARLY PUBLICATION',
      previewBadge: '🛡️ CRYPTOGRAPHY & RESEARCH',
      status: 'PUBLISHED 2023',
      publicationUrl:
        'https://openurl.ebsco.com/EPDB%3Agcd%3A11%3A19783659/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A162319875&crl=c',
      journal: 'Grenze International Journal of Engineering & Technology (GIJET)',
      volume: 'Vol 9, Issue 1, 2023, p. 371',
      issn: '2395-5287',
      authors: 'Anjani Nandan, Abhishek Kumar, Parth Srivastava, Shivateja Chalvadhi, Neha Hajare',
      tags: ['Blockchain', 'Biometric Auth', 'Cryptography', 'Cybersecurity', 'Peer-Reviewed', 'EBSCO'],
      summary:
        'A peer-reviewed academic research publication detailing the fusion of decentralized blockchain architectures with multi-layer biometric authentication to eliminate single-point-of-failure server breaches and ensure zero-trust cryptographic user integrity.',
      highlights: [
        'Published in Grenze International Journal of Engineering & Technology (GIJET), ISSN: 2395-5287.',
        'Indexed and accessible worldwide on the EBSCOhost academic scholar research network.',
        'Replaces fragile centralized credential vaults with distributed ledger consensus nodes.',
        'Integrates biometric entropy hashing to secure credentials against network interception and fraud.',
      ],
      algorithmHeader: 'DECENTRALIZED CRYPTOGRAPHIC & BIOMETRIC PROTOCOLS',
      algorithmPoints: [
        {
          title: '1. Biometric Entropy Extraction',
          desc: 'Converts physical biometric signatures (fingerprint/iris) into irreversible high-entropy cryptographic hashes that verify user identity without storing raw biometric profiles.',
        },
        {
          title: '2. Multi-Node Distributed Consensus',
          desc: 'Replaces single-point-of-failure central authentication servers with Byzantine fault-tolerant blockchain validation nodes.',
        },
        {
          title: '3. Zero-Trust Access Protocol',
          desc: 'Validates integrity at every authentication handshake via immutable ledger blocks, guaranteeing non-repudiation and replay attack immunity.',
        },
        {
          title: '4. Scholarly Research Impact',
          desc: 'Peer-reviewed by international engineering panels and archived on EBSCOhost, demonstrating formal academic and algorithmic excellence.',
        },
      ],
      slides: [
        {
          image: './images/blockchain-biometric-auth.jpg',
          tag: 'CRYPTOGRAPHIC VISUALIZATION',
          title: 'Decentralized Blockchain & Biometric Entropy Encryption',
          desc: 'Conceptual visualization of multi-layer biometric authentication entropy combined with SHA-256 decentralized blockchain consensus nodes to eliminate single-point server vulnerabilities.',
          fit: 'cover',
        },
      ],
      metrics: {
        archLabel: 'INDEX',
        archVal: 'EBSCOhost',
        statLabel: 'JOURNAL',
        statVal: 'GIJET Vol 9',
        flowLabel: 'REVIEW',
        flowVal: 'Peer-Reviewed',
      },
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(0, 240, 255, 0.15) 100%)',
    },
    {
      id: 'monkbike',
      title: 'MonkBike (Rental Ecosystem)',
      subtitle: 'Two-Wheeler Mobility Platform • WE5 Mobility Solutions Internship',
      icon: Bike,
      type: 'software',
      category: 'LOGISTICS & SMART MOBILITY PLATFORM (INTERNSHIP)',
      previewBadge: '🛵 SMART MOBILITY',
      status: 'VERIFIED REPO',
      github: 'https://github.com/abhishek838/Monk_Bike',
      tags: ['React.js', 'JavaScript ES6+', 'HTML5 / CSS3', 'State Management', 'Fleet Logistics', 'WE5 Mobility Solutions', 'Internship'],
      summary:
        'A two-wheeler rental bike web platform created during my internship at WE5 Mobility Solutions in college. Engineered the frontend from scratch using HTML, CSS, JavaScript, and React to streamline vehicle fleet logistics, real-time availability checks, date-driven reservation scheduling, and seamless checkout flows.',
      highlights: [
        'Internship at WE5 Mobility Solutions: Created during college as a frontend engineering intern, collaborating on production vehicle fleet workflows.',
        'Built Frontend with React & Modern Web Stack: Engineered the user interface from scratch using HTML5, CSS3, JavaScript ES6+, and React.js with modular component architecture.',
        'Optimized Client-Side State Machine: Managed complex vehicle scheduling, duration calculation, and deposit validation.',
        'Interactive Vehicle Catalog: Dynamic filtering by two-wheeler category, engine displacement (CC), transmission, and pricing tiers.',
        'Frictionless Booking User Journey: Instant field-level client validation, zero cumulative layout shifts (CLS), and snappy reactive transitions.',
      ],
      algorithmHeader: 'FLEET TELEMETRY & BOOKING WORKFLOW ENGINE',
      algorithmPoints: [
        {
          title: '1. Dynamic Fleet Telemetry & Availability',
          desc: 'Real-time vehicle inventory state engine tracking reservation calendars, return windows, and maintenance cycles.',
        },
        {
          title: '2. Frictionless Booking User Journey',
          desc: 'Intuitive multi-step reservation funnel with immediate client-side date-range validation and security deposit calculation.',
        },
        {
          title: '3. Responsive Catalog Filtering',
          desc: 'Instant categorical filtering by vehicle class, engine displacement (CC), transmission, and hourly/daily rates.',
        },
        {
          title: '4. High-Performance Client Architecture',
          desc: 'Engineered with zero cumulative layout shifts (CLS) and snappy sub-50ms reactive state transitions.',
        },
      ],
      slides: [
        {
          image: './images/monkbike.png',
          tag: 'WE5 MOBILITY INTERNSHIP',
          title: 'MonkBike Two-Wheeler Rental Platform',
          desc: 'Frontend web application engineered during college internship at WE5 Mobility Solutions using HTML, CSS, JavaScript, and React for vehicle fleet rental management and booking.',
          fit: 'contain',
          bg: '#fcedd4',
        },
      ],
      metrics: {
        archLabel: 'ARCH',
        archVal: 'Client Core',
        statLabel: 'DOM SPEED',
        statVal: 'Instant',
        flowLabel: 'FLOW',
        flowVal: 'Agile Fleet',
      },
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.type === activeCategory);

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span className="glass-pill">
              <Sparkles size={13} color="var(--accent-primary)" /> FEATURED ENGINEERING & HARDWARE
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Flagship <span className="text-gradient">Creations</span>, Robotics & Papers
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            From full-stack web platforms and peer-reviewed cryptographic blockchain research to autonomous Arduino
            embedded robotics and differential motor control.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem',
          }}
        >
          {[
            { id: 'all', label: 'All Projects & Research' },
            { id: 'software', label: 'Web Applications & Code' },
            { id: 'robotics', label: 'Robotics & Hardware (Arduino)' },
            { id: 'research', label: 'Peer-Reviewed Research' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              style={{
                background: activeCategory === tab.id ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                color: activeCategory === tab.id ? '#050508' : 'var(--text-secondary)',
                border: activeCategory === tab.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInspect={(initialTab = 'gallery') => {
                setInitialModalTab(initialTab);
                setSelectedProject(project);
              }}
            />
          ))}
        </div>

        {/* Architecture & Deep Dive Modal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            initialTab={initialModalTab}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

// =========================================================================
// Project Card with dynamic hover tilt, glare & auto-slider if multi-photo
// =========================================================================
function ProjectCard({ project, onInspect }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [cardSlideIdx, setCardSlideIdx] = useState(0);

  // Auto rotate card slides if project has images
  useEffect(() => {
    if (!project.slides || project.slides.length <= 1) return;
    const interval = setInterval(() => {
      setCardSlideIdx((prev) => (prev + 1) % project.slides.length);
    }, 3400);
    return () => clearInterval(interval);
  }, [project.slides]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.22 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-panel"
      style={{
        position: 'relative',
        borderRadius: '26px',
        padding: '2rem',
        transform,
        transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: project.publicationUrl
          ? '1px solid var(--accent-violet)'
          : project.videoSupport
          ? '1px solid var(--accent-primary)'
          : '1px solid var(--border-subtle)',
        background: 'var(--bg-card)',
        boxShadow: project.publicationUrl
          ? '0 10px 30px rgba(139, 92, 246, 0.15)'
          : project.videoSupport
          ? '0 15px 35px rgba(0, 240, 255, 0.12)'
          : 'none',
      }}
    >
      {/* Specular glare */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 70%)`,
        }}
      />

      {/* If project has photo slides, render interactive preview banner */}
      {project.slides && (
        <div
          onClick={() => onInspect('gallery')}
          style={{
            position: 'relative',
            height: '210px',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '1.4rem',
            background: (project.slides[cardSlideIdx] && project.slides[cardSlideIdx].bg) || '#070a12',
            cursor: 'pointer',
            border: '1px solid var(--border-accent)',
          }}
        >
          {project.slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.image}
              alt={slide.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: slide.fit || 'cover',
                opacity: idx === cardSlideIdx ? 1 : 0,
                transform: idx === cardSlideIdx ? 'scale(1)' : 'scale(1.04)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            />
          ))}

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                project.slides[cardSlideIdx] && project.slides[cardSlideIdx].fit === 'contain'
                  ? 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 55%, rgba(6, 9, 15, 0.75) 100%)'
                  : 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(6, 9, 15, 0.85) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Top badges on image */}
          <div
            style={{
              position: 'absolute',
              top: '0.75rem',
              left: '0.75rem',
              right: '0.75rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-accent)',
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                padding: '3px 8px',
                borderRadius: '9999px',
                fontWeight: 600,
              }}
            >
              {project.previewBadge ||
                (project.type === 'robotics'
                  ? '🤖 ROBOTICS'
                  : project.type === 'research'
                  ? '📄 SCHOLAR'
                  : '💻 FULL-STACK')}
            </span>

            {project.videoSupport ? (
              <span
                style={{
                  background: 'rgba(239, 68, 68, 0.25)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid #ef4444',
                  color: '#fca5a5',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Video size={11} /> VIDEO DEMO
              </span>
            ) : (
              <span
                style={{
                  background: 'rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                }}
              >
                {project.status}
              </span>
            )}
          </div>

          {/* Bottom tag & slide dots */}
          <div
            style={{
              position: 'absolute',
              bottom: '0.65rem',
              left: '0.75rem',
              right: '0.75rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--accent-primary)',
                background: 'rgba(0, 0, 0, 0.75)',
                padding: '2px 8px',
                borderRadius: '9999px',
                border: '1px solid var(--border-accent)',
              }}
            >
              ● {project.slides[cardSlideIdx].tag}
            </span>

            <div style={{ display: 'flex', gap: '4px' }}>
              {project.slides.map((_, dotI) => (
                <button
                  key={dotI}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCardSlideIdx(dotI);
                  }}
                  style={{
                    width: dotI === cardSlideIdx ? '16px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: dotI === cardSlideIdx ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.4)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Top Bar with Icon & Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: project.publicationUrl ? 'var(--accent-violet)' : 'var(--accent-primary)',
          }}
        >
          <Icon size={24} />
        </div>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            padding: '3px 9px',
            borderRadius: '9999px',
            background: project.publicationUrl
              ? 'rgba(139, 92, 246, 0.15)'
              : project.videoSupport
              ? 'rgba(0, 240, 255, 0.12)'
              : 'rgba(0, 240, 255, 0.08)',
            border: project.publicationUrl
              ? '1px solid var(--accent-violet)'
              : project.videoSupport
              ? '1px solid var(--accent-primary)'
              : '1px solid var(--border-accent)',
            color: project.publicationUrl
              ? '#c084fc'
              : project.videoSupport
              ? 'var(--accent-primary)'
              : 'var(--accent-primary)',
            fontWeight: 600,
          }}
        >
          {project.status}
        </span>
      </div>

      {/* Title & Category */}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          marginBottom: '0.35rem',
        }}
      >
        {project.category}
      </span>
      <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.25 }}>
        {project.title}
      </h3>
      <p style={{ color: 'var(--accent-secondary)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem' }}>
        {project.subtitle}
      </p>

      {/* Description */}
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.5rem', flex: 1 }}>
        {project.summary}
      </p>

      {/* Live Telemetry Metric Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.75rem',
          padding: '0.85rem',
          borderRadius: '12px',
          background: 'rgba(0, 0, 0, 0.25)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{project.metrics.archLabel}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 600 }}>{project.metrics.archVal}</div>
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{project.metrics.statLabel}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{project.metrics.statVal}</div>
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{project.metrics.flowLabel}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 600 }}>{project.metrics.flowVal}</div>
        </div>
      </div>

      {/* Tech Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
        {project.tags.map((tag) => (
          <span key={tag} className="glass-pill" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Footer Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {project.publicationUrl ? (
          <a
            href={project.publicationUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{
              flex: 1,
              justifyContent: 'center',
              textDecoration: 'none',
              fontSize: '0.88rem',
              padding: '0.75rem 1rem',
            }}
          >
            <ExternalLink size={16} />
            <span>Read on EBSCOhost</span>
          </a>
        ) : project.videoSupport ? (
          <div style={{ display: 'flex', gap: '0.45rem', flex: 1 }}>
            <button
              onClick={() => onInspect('video')}
              className="btn-primary"
              style={{
                flex: 1,
                justifyContent: 'center',
                fontSize: '0.88rem',
                padding: '0.75rem 1rem',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(0, 240, 255, 0.25))',
                border: '1px solid var(--accent-primary)',
              }}
            >
              <Video size={16} />
              <span>Watch Video Demo</span>
            </button>
            {project.videoDriveLink && (
              <a
                href={project.videoDriveLink}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{
                  textDecoration: 'none',
                  padding: '0.75rem 0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Open Video in Google Drive"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        ) : project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{
              flex: 1,
              justifyContent: 'center',
              textDecoration: 'none',
              fontSize: '0.88rem',
              padding: '0.75rem 1rem',
            }}
          >
            <GithubIcon size={16} />
            <span>GitHub Code</span>
          </a>
        ) : (
          <button
            onClick={() => onInspect('gallery')}
            className="btn-primary"
            style={{
              flex: 1,
              justifyContent: 'center',
              fontSize: '0.88rem',
              padding: '0.75rem 1rem',
            }}
          >
            <Sparkles size={16} />
            <span>Inspect Architecture</span>
          </button>
        )}

        <button
          onClick={() => onInspect('gallery')}
          className="btn-secondary"
          style={{
            fontSize: '0.88rem',
            padding: '0.75rem 1.15rem',
          }}
          title="Inspect Technical Specs"
        >
          <ExternalLink size={16} />
          <span>Specs</span>
        </button>
      </div>
    </div>
  );
}

// =========================================================================
// Comprehensive Project Detail Modal with Gallery & Video Support
// =========================================================================
function ProjectDetailModal({ project, initialTab, onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab || (project.videoSupport ? 'video' : 'gallery'));
  const [modalSlideIdx, setModalSlideIdx] = useState(0);

  const slides = project.slides || [];
  const currentSlide = slides[modalSlideIdx] || slides[0];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9990,
        backgroundColor: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: '26px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-accent)',
          padding: '0',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 30,
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.75)',
            border: '1px solid var(--border-accent)',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={20} />
        </button>

        {/* Multi-Media Header for Line Follower Robot (Photo Gallery vs Video Demo) */}
        {project.slides && (
          <div>
            {/* Modal Media Tab Switcher */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.75rem 0',
                background: 'rgba(8, 12, 20, 0.95)',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <button
                onClick={() => setActiveTab('gallery')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  border: 'none',
                  borderBottom: activeTab === 'gallery' ? '2px solid var(--accent-primary)' : '2px solid transparent',
                  background: 'transparent',
                  color: activeTab === 'gallery' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>📸 PHOTO GALLERY ({slides.length} VIEWS)</span>
              </button>

              {project.videoSupport && (
                <button
                  onClick={() => setActiveTab('video')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    border: 'none',
                    borderBottom: activeTab === 'video' ? '2px solid #ef4444' : '2px solid transparent',
                    background: 'transparent',
                    color: activeTab === 'video' ? '#f87171' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Video size={14} color={activeTab === 'video' ? '#ef4444' : 'currentColor'} />
                  <span>🎥 VIDEO DEMONSTRATION</span>
                </button>
              )}
            </div>

            {/* Media Content Area */}
            {activeTab === 'gallery' ? (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '380px',
                  backgroundColor: currentSlide.bg || '#060911',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: currentSlide.fit || 'contain',
                    display: 'block',
                    backgroundColor: currentSlide.bg || '#05070d',
                  }}
                />

                {/* Left/Right controls */}
                <button
                  onClick={() => setModalSlideIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    border: '1px solid var(--border-accent)',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={() => setModalSlideIdx((prev) => (prev + 1) % slides.length)}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    border: '1px solid var(--border-accent)',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <ChevronRight size={18} />
                </button>

                {/* Slide Title Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(4, 7, 13, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-accent)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--accent-primary)',
                  }}
                >
                  ● {currentSlide.tag}: {currentSlide.title}
                </div>
              </div>
            ) : (
              <VideoPlayerStage
                defaultUrl={project.videoUrl}
                driveLink={project.videoDriveLink}
                title={project.title}
              />
            )}

            {/* Thumbnails strip for photo gallery */}
            {activeTab === 'gallery' && slides.length > 1 && (
              <div
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  padding: '0.75rem 1.75rem',
                  background: 'rgba(10, 14, 22, 0.95)',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setModalSlideIdx(idx)}
                    style={{
                      height: '52px',
                      flex: 1,
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: idx === modalSlideIdx ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                      background: '#070a12',
                      padding: 0,
                      cursor: 'pointer',
                    }}
                    title={slide.title}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: idx === modalSlideIdx ? 1 : 0.6,
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Modal Main Body */}
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="glass-pill">{project.category}</span>
            <span className="glass-pill">{project.status}</span>
          </div>

          <h3 style={{ fontSize: '1.9rem', color: '#ffffff', margin: '0.2rem 0 0.4rem' }}>
            {project.title}
          </h3>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.92rem', fontFamily: 'var(--font-mono)', marginBottom: '1.4rem' }}>
            {project.subtitle}
          </p>

          {/* Research Metadata Box if publication */}
          {project.journal && (
            <div
              style={{
                background: 'rgba(139, 92, 246, 0.08)',
                border: '1px solid var(--accent-violet)',
                borderRadius: '16px',
                padding: '1.25rem',
                marginBottom: '1.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                lineHeight: 1.7,
              }}
            >
              <div style={{ color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                <strong>Journal:</strong> {project.journal}
              </div>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                <strong>Volume/Issue:</strong> {project.volume} | <strong>ISSN:</strong> {project.issn}
              </div>
              <div style={{ color: 'var(--accent-primary)' }}>
                <strong>Authors:</strong> {project.authors}
              </div>
            </div>
          )}

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {project.summary}
          </p>

          {/* Hardware Specs Grid (For Robotics) */}
          {project.hardwareSpecs && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                HARDWARE ARCHITECTURE & MECHANICAL SUBSYSTEMS
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {project.hardwareSpecs.map((spec, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(0, 0, 0, 0.35)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', color: 'var(--accent-primary)', marginBottom: '2px' }}>
                      {spec.label}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Optical & Algorithm Breakdown (For Robotics) */}
          {project.algorithmPoints && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                {project.algorithmHeader || 'SYSTEM ARCHITECTURE & CORE WORKFLOW'}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.algorithmPoints.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(0, 240, 255, 0.04)',
                      border: '1px solid var(--border-accent)',
                      borderRadius: '12px',
                      padding: '1rem 1.25rem',
                    }}
                  >
                    <div style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                      {item.title}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.85rem', fontFamily: 'var(--font-mono)' }}>
            KEY ENGINEERING HIGHLIGHTS & CONTRIBUTIONS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
            {project.highlights.map((highlight, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={16} color="var(--accent-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="glass-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {project.publicationUrl ? (
              <a
                href={project.publicationUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', flex: 1, justifyContent: 'center' }}
              >
                <ExternalLink size={18} />
                <span>Read Paper on EBSCOhost</span>
              </a>
            ) : project.videoSupport ? (
              <div style={{ display: 'flex', gap: '0.75rem', flex: 1, flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveTab('video')}
                  className="btn-primary"
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(0, 240, 255, 0.3))',
                    border: '1px solid var(--accent-primary)',
                  }}
                >
                  <Video size={18} />
                  <span>{activeTab === 'video' ? 'Viewing Video Demo' : 'Open Video Demonstration Player'}</span>
                </button>
                {project.videoDriveLink && (
                  <a
                    href={project.videoDriveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.75rem 1.25rem',
                      fontSize: '0.88rem',
                    }}
                  >
                    <ExternalLink size={16} />
                    <span>Open in Google Drive</span>
                  </a>
                )}
              </div>
            ) : project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', flex: 1, justifyContent: 'center' }}
              >
                <GithubIcon size={18} />
                <span>View Source on GitHub</span>
              </a>
            ) : (
              <button
                onClick={onClose}
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>Close Project Details</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// High-Tech Video Player Stage Component
// =========================================================================
function VideoPlayerStage({ defaultUrl, driveLink, title }) {
  const [videoUrl, setVideoUrl] = useState(
    defaultUrl || 'https://drive.google.com/file/d/1xOEqRo3X5vPgr7Y_uMyznW27edQl-tSs/preview'
  );
  const [customInput, setCustomInput] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (defaultUrl) {
      setVideoUrl(defaultUrl);
      setHasError(false);
    }
  }, [defaultUrl]);

  const isDriveUrl = typeof videoUrl === 'string' && videoUrl.includes('drive.google.com');
  const isYouTubeUrl = typeof videoUrl === 'string' && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'));

  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('drive.google.com')) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
      return url.replace(/\/view(\?.*)?$/, '/preview');
    }
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (ytMatch && ytMatch[1]) {
        return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;
      }
    }
    return url;
  };

  const directDriveLink =
    driveLink ||
    (isDriveUrl
      ? videoUrl.replace('/preview', '/view?usp=sharing')
      : 'https://drive.google.com/file/d/1xOEqRo3X5vPgr7Y_uMyznW27edQl-tSs/view?usp=sharing');

  const handleApplyCustomUrl = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setVideoUrl(customInput.trim());
    setHasError(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '420px',
        background: '#05070d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {isDriveUrl ? (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', height: '420px', position: 'relative', background: '#000000' }}>
            <iframe
              src={getEmbedUrl(videoUrl)}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={title || 'Autonomous Line Follower Robot Demo'}
              style={{ border: 'none', width: '100%', height: '100%', display: 'block' }}
            />
          </div>
          <div
            style={{
              padding: '0.85rem 1.5rem',
              background: 'rgba(5, 9, 18, 0.95)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  color: 'var(--accent-primary)',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 8px #10b981',
                  }}
                />
                GOOGLE DRIVE DEMO STREAM
              </span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                Autonomous 4WD Tracking Run Video
              </span>
            </div>
            <a
              href={directDriveLink}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{
                textDecoration: 'none',
                fontSize: '0.78rem',
                padding: '0.45rem 0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <ExternalLink size={13} />
              <span>Open in Google Drive</span>
            </a>
          </div>
        </div>
      ) : isYouTubeUrl ? (
        <div style={{ width: '100%', height: '420px', position: 'relative', background: '#000000' }}>
          <iframe
            src={getEmbedUrl(videoUrl)}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video demonstration"
            style={{ border: 'none', width: '100%', height: '100%', display: 'block' }}
          />
        </div>
      ) : !hasError ? (
        <div style={{ width: '100%', height: '380px', position: 'relative', background: '#000000' }}>
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            playsInline
            onError={() => setHasError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>
      ) : (
        /* Futuristic Video Placeholder Screen when video file isn't uploaded yet */
        <div
          style={{
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            maxWidth: '620px',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '2px solid #ef4444',
              color: '#f87171',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 0 25px rgba(239, 68, 68, 0.35)',
            }}
          >
            <Play size={28} style={{ marginLeft: '4px' }} />
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid var(--border-accent)',
              color: 'var(--accent-primary)',
              padding: '3px 10px',
              borderRadius: '9999px',
              fontWeight: 600,
            }}
          >
            ● VIDEO DEMO CONTAINER ACTIVE
          </span>

          <h4 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '0.85rem 0 0.4rem' }}>
            Autonomous Line Tracking Run Video
          </h4>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Watch the robot automatically follow the black trajectory tape with real-time optical IR sensor feedback,
            differential speed throttling, and sharp 90-degree corner recovery.
          </p>

          {/* Quick instructions box */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.45)',
              border: '1px dashed var(--border-accent)',
              borderRadius: '14px',
              padding: '1rem',
              marginBottom: '1.5rem',
              textAlign: 'left',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
            }}
          >
            <div style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '4px' }}>
              📁 Ready for your video file:
            </div>
            <div>
              Place your demo video file as <code style={{ color: '#ffffff' }}>public/videos/line-follower-demo.mp4</code> or paste a Google Drive / YouTube link below.
            </div>
          </div>

          {/* Live custom URL input form */}
          <form
            onSubmit={handleApplyCustomUrl}
            style={{
              display: 'flex',
              gap: '0.5rem',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            <input
              type="text"
              placeholder="Or paste video / Google Drive / YouTube URL..."
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              style={{
                flex: 1,
                padding: '0.65rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(10, 15, 25, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{
                fontSize: '0.8rem',
                padding: '0.65rem 1.25rem',
              }}
            >
              Load Video
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
