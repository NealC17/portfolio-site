export const CONTACT = {
  name: "Neal Chandra",
  email: "nealxchandra@gmail.com",
  linkedin: "https://www.linkedin.com/in/nealchandra0/",
  github: "https://github.com/nealc17",
  location: "san jose, ca",
};

export const NAV_SECTIONS = [
  { id: "experience", label: "experience" },
  { id: "research", label: "research" },
  { id: "projects", label: "projects" },
  { id: "education", label: "education" },
  { id: "skills", label: "skills" },
];

export const EXPERIENCE = [
  {
    role: "ASIC Engineer",
    org: "Eridu AI",
    location: "Saratoga, CA",
    period: "Jun 2026 — Present",
    bullets: [
      "Built internal web tools to visualize ASIC trace data — timing violations, capacitance, falling-edge points",
      "Stored Synopsys and Cadence report data in a SQL database; scaled multiprocessing across SLURM nodes for faster computation",
    ],
  },
  {
    role: "Lead Algorithm Engineer / Co-founder",
    org: "Sun Valley Holdings",
    location: "San Jose, CA",
    period: "Jan 2024 — Present",
    bullets: [
      "Helped start an investing firm implementing machine learning trading algorithms, attracting investor attention",
      "Implemented Lorentzian classification, KNN, convex optimization, Brownian motion, and regression models in Python",
      "Built data analysis tools and visualizations on the Alpaca Trading API using Plotly and Matplotlib",
      "Continuously updates backend trading logic by implementing findings from algorithmic trading research papers",
    ],
  },
  {
    role: "Embedded Firmware Engineer",
    org: "Hydrolink Systems",
    location: "San Jose, CA",
    period: "Jan 2024 — Present",
    bullets: [
      "Joined an effort to build water-consumption tracking products; the team received SJSU investor attention and funding",
      "Used an ESP32 and water flow sensor with a MOSFET switching circuit to measure and power the device",
      "Used FreeRTOS to manage device electronics and stream data to the backend",
    ],
  },
];

export const RESEARCH = {
  title: "Multi-Task Unified Vision Transformer for Chest Radiographs",
  date: "Dec 2025",
  stack: "Python · PyTorch · NumPy · Numba (JIT) · Matplotlib · Plotly",
  bullets: [
    "Trained a vision transformer across the MIMIC-CXR-JPG, NIH ChestX-ray, and ChestX-det datasets",
    "Built a single framework unifying age regression, orientation detection, disease localization, classification, and segmentation",
    "Outperformed state-of-the-art models including DINO and DETR on each individual task",
  ],
  process:
    "Built as one multi-task vision transformer rather than separate models per task: a shared transformer backbone encoded each chest X-ray into patch embeddings, and lightweight task-specific heads branched off that shared representation for classification, segmentation, localization, and demographic/orientation prediction. Training combined losses across all tasks jointly, so features useful for one task — like locating anatomical structures — reinforced performance on related tasks, which is part of why the shared model outperformed single-task specialists like DINO and DETR on their own individual tasks.",
};

export const PROJECT_CATEGORIES = [
  "All",
  "Early & Foundational",
  "Machine Learning",
  "Embedded & Hardware",
  "Compilers & Math",
];

export const PROJECTS = [
  // --- Early & Foundational ---
  {
    title: "ChatRooms — Basic Networking",
    category: "Early & Foundational",
    date: "Oct 2018",
    stack: "Java · Sockets",
    url: "https://github.com/nealc17/ChatRooms",
    skills: ["Java", "Sockets & Networking"],
    bullets: [
      "Built a client-server chat application handling multiple simultaneous connections",
    ],
    process:
      "The server accepted multiple socket connections and spun up a thread per client to read incoming messages and broadcast them to every other connected client — an early hands-on introduction to concurrent networked I/O.",
  },
  {
    title: "Snake",
    category: "Early & Foundational",
    date: "Oct–Nov 2018",
    stack: "Java",
    url: "https://github.com/nealc17/Snake",
    skills: ["Java"],
    bullets: ["Classic Snake built on a grid-based game loop"],
    process:
      "Each tick advanced the snake's head in the current direction, checked for collisions with walls, itself, or food, and grew the snake's body by appending a new segment whenever food was eaten.",
  },
  {
    title: "Early Neural Network Implementations",
    category: "Early & Foundational",
    date: "Nov 2018",
    stack: "Java",
    url: "https://github.com/nealc17/NeuralNetwork",
    skills: ["Java", "Neural Networks"],
    bullets: ["A feedforward neural network built from scratch, no ML libraries"],
    process:
      "Implemented forward propagation through weighted layers with a sigmoid-style activation function, and backpropagation to adjust weights via gradient descent — entirely by hand, without any ML library support.",
  },
  {
    title: "Flappy Bird → FlappyBirdNEAT",
    category: "Early & Foundational",
    date: "Dec 2018 – Feb 2022",
    stack: "Java · NEAT",
    url: "https://github.com/nealc17/FlappyBirdNEAT",
    skills: ["Java", "Neural Networks", "NEAT"],
    bullets: [
      "Started as a manual Java clone of Flappy Bird; years later, evolved into an AI that learns to play itself",
    ],
    process:
      "The original version used manual physics — gravity, jump impulse, pipe collision. FlappyBirdNEAT replaced the player with a population of neural networks evolved using NEAT (NeuroEvolution of Augmenting Topologies): networks that survived longer and passed more pipes were selected and mutated or crossed over to produce the next generation, gradually evolving networks that could play the game on their own — including growing their own topology, not just their weights.",
  },
  {
    title: "Q-Learning Maze AI",
    category: "Early & Foundational",
    date: "Apr 2019",
    stack: "Java · Reinforcement Learning",
    url: "https://github.com/nealc17/ReinforcementLearning_2",
    skills: ["Java", "Reinforcement Learning", "Q-Learning"],
    bullets: ["A maze-solving agent trained with tabular Q-learning"],
    process:
      "For each state (grid cell) and action (move direction), the agent maintained a Q-value estimating expected future reward. After each move it updated that value using the Bellman equation, and gradually shifted from random exploration to exploiting the learned policy — reaching the goal in fewer and fewer steps as training progressed.",
  },
  {
    title: "Perceptron From Scratch",
    category: "Early & Foundational",
    date: "May 2019",
    stack: "Java",
    url: "https://github.com/nealc17/Perceptron3",
    skills: ["Java", "Perceptrons"],
    bullets: ["A single-layer perceptron implemented directly, including its learning rule"],
    process:
      "Computed a weighted sum of inputs, applied a step activation function, and updated weights whenever a prediction was wrong, using the classic perceptron learning rule — repeating until the decision boundary correctly separated the training data.",
  },
  {
    title: "PyVector",
    category: "Early & Foundational",
    date: "Jun 2022",
    stack: "Python",
    url: "https://github.com/nealc17/PyVector",
    skills: ["Python", "Linear Algebra"],
    bullets: ["A lightweight vector-math library used as a foundation for later projects"],
    process:
      "Implemented common linear-algebra operations directly — addition, dot and cross products, magnitude, normalization — as a small reusable library that later signal-processing and simulation projects built on top of.",
  },
  {
    title: "A* Pathfinder",
    category: "Early & Foundational",
    date: "Jul 2023",
    stack: "Java",
    url: "https://github.com/nealc17/A_STAR",
    skills: ["Java", "A* Search", "Graph Search"],
    bullets: ["A shortest-path search implementation with an admissible heuristic"],
    process:
      "Maintained a priority queue of frontier nodes ranked by f(n) = g(n) + h(n) — the cost so far plus a heuristic estimate to the goal — expanding the lowest-cost node each step until the goal was reached, guaranteeing a shortest path as long as the heuristic never overestimated true cost.",
  },
  {
    title: "Image Filtering & Mouse Tracking",
    category: "Early & Foundational",
    date: "Jul 2023",
    stack: "Java",
    url: "https://github.com/nealc17/ImageFiltering",
    skills: ["Java", "Linear Algebra"],
    bullets: ["Pixel-level image filtering paired with interactive mouse tracking"],
    process:
      "Applied convolution-based filters — blur, edge detection — by sliding a small kernel across the image's raw pixel array and computing a weighted sum at each position, while tracking live mouse position to interactively highlight or manipulate regions of the image.",
  },
  {
    title: "MPU6050 Servo Gimbal",
    category: "Early & Foundational",
    date: "Sep 2023",
    stack: "C++ · MPU6050 · Servo Motors",
    url: "https://github.com/nealc17/Control_Systems_Project",
    skills: ["C++", "IMU / MPU6050", "Servo Control", "Sensor Fusion"],
    bullets: ["A two-axis camera gimbal stabilized against unwanted rotation"],
    process:
      "The MPU6050's accelerometer and gyroscope readings were fused to estimate orientation, and a control loop compared that estimate against a level setpoint to drive servo motors that countered unwanted rotation in real time, keeping the platform stable as the base moved.",
  },

  // --- Machine Learning ---
  {
    title: "Real-Time Exercise Detection, Form Correction & Rep Counting",
    category: "Machine Learning",
    date: "Oct 2024 – May 2025",
    stack: "Python · TensorFlow / TFLite · ESP32-C3 · MPU6050 · Pandas",
    url: "https://github.com/nealc17/senior_design",
    skills: ["Python", "TensorFlow", "TensorFlow Lite", "CNNs", "K-Means", "FFT", "ESP32", "Eye Diagrams"],
    bullets: [
      "Collected multi-sensor workout data across multiple people performing bench press, squat, and deadlift at varying weights and sets — a senior capstone project",
      "Designed a hierarchical dataset (person → exercise → set → sensor data) using pandas multi-indexing",
      "Combined CNNs, K-means clustering, and Fourier analysis into one pipeline for classification, form correction, and rep counting",
      "Converted trained models to TensorFlow Lite and exported C/C++ headers for on-device deployment",
    ],
    process:
      "Raw sensor streams from each set were segmented and converted into eye diagrams — overlaying repeated signal segments to visualize timing and shape consistency — then clustered with K-means to separate correct-form repetitions from faulty ones. A parallel CNN pipeline consumed windowed sensor data directly to classify which exercise was being performed, while Fourier transforms and low-pass filtering cleaned the rep-counting signal before a threshold/Heaviside-style operation counted discrete repetitions. The trained models were converted to TensorFlow Lite and exported as C/C++ headers so they could run directly on the ESP32-C3.",
  },
  {
    title: "Algorithmic Trading Infrastructure",
    category: "Machine Learning",
    date: "Summer–Fall 2024",
    stack: "Python · Alpaca API · NumPy / Pandas",
    url: "",
    skills: ["Python", "Lorentzian Classification", "KNN", "Convex Optimization", "Alpaca API", "Backtesting"],
    bullets: [
      "Built the quantitative infrastructure behind an automated trading system — beyond a single price-prediction model, this covered the tooling needed to tell whether a strategy actually works",
      "Implemented Lorentzian classification alongside KNN-based methods to identify entry opportunities, plus clustering and convex optimization to refine decisions under risk constraints",
      "Pulled and processed hourly candlestick data from the Alpaca API",
      "Wrote a custom backtesting system to evaluate strategies against historical market data",
    ],
    process:
      "Hourly candlestick data pulled from the Alpaca API fed a Lorentzian-distance classifier that compared current price action against historical patterns to flag likely entry points, cross-checked against a KNN-based similarity search. Candidate trades were filtered through a convex-optimization step balancing expected return against risk exposure, and every strategy variant was run through a custom backtester against historical data before being considered for live use.",
  },
  {
    title: "Options Greeks Prediction Model",
    category: "Machine Learning",
    date: "Jan 2025",
    stack: "Python · Quantitative Finance",
    url: "",
    skills: ["Python", "Options Greeks"],
    bullets: [
      "Built a model to predict the future Greeks of an option — delta, gamma, theta, vega — rather than forecasting the underlying price directly",
      "Used the predicted Greeks to estimate the option's forward value",
    ],
    process:
      "Historical options-chain data trained a model to predict how an option's Greeks would evolve forward in time, rather than predicting the underlying's price directly. Those predicted Greeks were then combined into an estimate of the option's forward value, since an option's price is, to a first approximation, a function of its Greeks and the time remaining until expiration.",
  },
  {
    title: "English → French Attention Translation Model",
    category: "Machine Learning",
    date: "Jan 2025",
    stack: "Python · Seq2Seq · Attention",
    url: "https://github.com/nealc17/fr_en_attention",
    skills: ["Python", "Transformers", "Attention"],
    bullets: ["A sequence-to-sequence neural machine translation model with attention"],
    process:
      "An encoder processed the English input sentence into a sequence of hidden states, and at each decoding step the model computed attention weights over those states to decide which source words were most relevant to the French word being generated next — rather than compressing the whole sentence into a single fixed-length vector, the way earlier seq2seq models did.",
  },
  {
    title: "AI Music Generation Pipeline",
    category: "Machine Learning",
    date: "May–Jun 2025",
    stack: "Python · Audio Processing",
    url: "https://github.com/nealc17/music_gen",
    skills: ["Python", "Transformers"],
    bullets: [
      "Built a training dataset from NCS (NoCopyrightSounds) tracks as groundwork for a music-generation model",
    ],
    process:
      "Built a training corpus from royalty-free NCS tracks, laying the data groundwork for a generative model. The intended architecture treats audio (or a symbolic representation of it) as a sequence and applies attention-based modeling to learn patterns in melody, rhythm, and structure well enough to generate new, similar-sounding sequences.",
  },
  {
    title: "Kolmogorov-Arnold Network (KAN) Implementation",
    category: "Machine Learning",
    date: "2025",
    stack: "Python · pyKAN",
    url: "",
    skills: ["Python", "KANs", "Neural Networks"],
    bullets: [
      "Implemented a Kolmogorov-Arnold Network using the pyKAN framework as an alternative to standard MLP architectures",
    ],
    process:
      "Built using the pyKAN framework, where each edge in the network holds a learnable spline-parameterized function rather than a fixed weight, and each node simply sums its inputs. The model is trained by adjusting each spline's control points via gradient descent, rather than adjusting scalar weights the way a standard MLP would.",
  },
  {
    title: "K-Means Clustering From Scratch",
    category: "Machine Learning",
    date: "2026",
    stack: "Python · NumPy",
    url: "",
    skills: ["Python", "K-Means", "Linear Algebra"],
    bullets: ["Implemented K-means without scikit-learn, fully vectorized with NumPy broadcasting"],
    process:
      "Broadcast the point set X (n×d) against the centroid set C (k×d) into an n×k×d tensor of coordinate differences, squared and summed along the last axis to get every pairwise distance in one vectorized pass, assigned each point to its nearest centroid via argmin, and recomputed each centroid as the mean of its assigned points — repeating until assignments stopped changing.",
  },
  {
    title: "Gaussian Bayesian Image Classifier",
    category: "Machine Learning",
    date: "2026",
    stack: "Python · NumPy",
    url: "",
    skills: ["Python", "Gaussian Classifiers"],
    bullets: ["A Bayes classifier modeling class-conditional features as Gaussians, implemented directly"],
    process:
      "For each class, estimated the per-feature mean and variance from training data, then modeled each feature's likelihood as Gaussian. For a new example, computed the Gaussian likelihood of its features under each class's distribution, combined it with the class prior via Bayes' rule, and picked whichever class produced the higher posterior probability.",
  },

  // --- Embedded & Hardware ---
  {
    title: "PWM Signal Generator",
    category: "Embedded & Hardware",
    date: "Jun 2024",
    stack: "C · ATmega328p · 74HC595 shift registers · AVR-GCC",
    url: "",
    skills: ["C", "Shift Registers", "PWM", "Firmware", "Interrupts"],
    bullets: [
      "Bit patterns generated by a polynomial-seeded linear-feedback shift register, shifted out through cascaded 74HC595s",
      "Bare-metal, interrupt-driven design supporting up to 900 PWM channels at 0.5 MHz",
    ],
    process:
      "Bit patterns for each PWM channel were generated by a linear-feedback shift register (LFSR) whose feedback taps were defined by an input polynomial — the polynomial effectively seeded and shaped the resulting bit sequence. Those sequences were shifted out through cascaded 74HC595 shift registers, so many output channels could be driven from a small number of microcontroller pins. Because each channel's output level was set by which specific bits were high within a cycle — bit-angle modulation — rather than a single duty-cycle counter, the design scaled to hundreds of independent PWM channels on the same hardware, all interrupt-driven and bare-metal.",
  },
  {
    title: "FPGA / SystemVerilog Digital Logic Environment",
    category: "Embedded & Hardware",
    date: "Aug 2026 — Present",
    stack: "SystemVerilog · Icarus Verilog · Yosys · OSS CAD Suite",
    url: "",
    skills: ["SystemVerilog", "Verilog", "RTL Design", "Testbenches", "Icarus Verilog", "Yosys", "Sequential Logic", "Combinational Logic"],
    bullets: [
      "Set up a full open-source FPGA and digital-logic development flow",
      "Implemented and tested counters, 2:1 multiplexers, registers, and combinational case logic",
    ],
    process:
      "Digital designs were written in SystemVerilog and simulated with Icarus Verilog, which compiles the RTL and testbench into an executable (vvp) that runs the simulation and emits a VCD waveform file for inspection. Yosys handled synthesis, translating the RTL into a gate-level netlist as the first step toward an actual FPGA bitstream. Each module — counter, mux, register — was paired with its own testbench that drove inputs and checked outputs against expected values in simulation before synthesis was ever attempted.",
  },
  {
    title: "Infinity LED Cube (Audio-Reactive)",
    category: "Embedded & Hardware",
    date: "Spring 2025",
    stack: "Embedded C · Microphone module · DSP",
    url: "",
    skills: ["C", "Firmware", "FFT"],
    bullets: [
      "Expanded an infinity LED cube into an audio-reactive system",
      "Designed a modular physical frame with acrylic panels and dual LED strips per side",
    ],
    process:
      "A microphone module sampled ambient audio, which was processed in real time — extracting amplitude and frequency-domain information — to modulate the color and intensity patterns driven across the LED strips lining the cube's acrylic panels, so the visual pattern responded live to music or sound.",
  },
  {
    title: "Monocopter Drone",
    category: "Embedded & Hardware",
    date: "2024–2025",
    stack: "Embedded Systems · IMU · Motor Control",
    url: "",
    skills: ["C++", "IMU / MPU6050", "Servo Control"],
    bullets: [
      "Designed and built the mechanical airframe for a single-wing rotorcraft",
      "Diagnosed ESC and motor issues while bringing up the power system",
    ],
    process:
      "Unlike a quadcopter, a monocopter uses a single rotating wing to generate lift, spinning the entire airframe like a maple seed — control has to work by timing thrust or control-surface changes to specific points in the rotation, rather than by varying four independent rotor speeds. The mechanical airframe was built first; the control system, planned around IMU-based rotational position sensing, is the remaining piece.",
  },

  // --- Compilers & Math ---
  {
    title: "Miterand — Lambda Calculus Interpreter",
    category: "Compilers & Math",
    date: "May 2025",
    stack: "Python · Lexer/Parser/Codegen",
    url: "https://github.com/nealc17/Miterand",
    skills: ["Python", "Lexing & Parsing", "Recursive-Descent Parsing", "AST Construction", "Lambda Calculus", "Code Generation"],
    bullets: [
      "A small language implementation: tokenizer → recursive-descent parser → AST → code generator → persistent REPL",
      "Supports currying, Church-style Boolean/function encodings, and arithmetic",
    ],
    process:
      "A tokenizer converts source text into a stream of tokens, a recursive-descent parser consumes those tokens to build an abstract syntax tree representing lambda expressions and applications, and a code generator walks that tree to emit executable Python, which runs inside a persistent REPL. Supports currying and Church-style Boolean/function encodings — meaning booleans and conditionals are represented as lambda functions themselves, in the tradition of pure lambda calculus, rather than as built-in language primitives.",
  },
  {
    title: "Pure-Math Programming Language & Polynomial Compiler",
    category: "Compilers & Math",
    date: "Mar 2026",
    stack: "C++ · Lexer/Parser Design",
    url: "",
    skills: ["C++", "Lexing & Parsing", "Recursive-Descent Parsing", "AST Construction", "Code Generation"],
    bullets: [
      "Designed a compiler and parser (CSE 340) for a custom polynomial language",
      "Separately began designing a language oriented natively around pure mathematics",
    ],
    process:
      "The polynomial-language compiler uses a recursive-descent parser to turn polynomial declarations, terms, and expressions into an AST, runs semantic checks over it, then walks the tree to evaluate or expand polynomial expressions — including nested polynomial evaluation, where the output of one polynomial becomes the input to another. The separate pure-math language concept extends this idea further: rather than polynomials being just one supported expression type, objects from group theory, real analysis, and measure theory would be native grammar constructs with their own parsing and evaluation rules.",
  },
  {
    title: "Nova Fractal Renderer",
    category: "Compilers & Math",
    date: "Sep 2024",
    stack: "Python · Complex Number Dynamics",
    url: "",
    skills: ["Python", "Complex Dynamics"],
    bullets: ["Implemented the Nova fractal using iterative complex-number dynamics"],
    process:
      "The Nova fractal is generated by iterating a variant of Newton's method for root-finding — z ← z − a·f(z)/f'(z) + c — over the complex plane, where a small added constant c prevents the iteration from cleanly converging to a root the way plain Newton's method would. Each pixel corresponds to a starting complex number; the number of iterations before its behavior escapes a threshold, and which root it eventually approaches, determines that pixel's color, producing the fractal's characteristic swirling boundary structure.",
  },
];

export const CLUBS = [
  {
    org: "Machine Learning Club",
    role: "Member / Project Lead",
    location: "San Jose, CA",
    period: "Sep 2023 — Present",
    detail:
      "Leads and participates in research paper discussions on attention layers, NLP, and Kolmogorov-Arnold networks (KANs)",
  },
  {
    org: "Formula SAE",
    role: "Member, sensor2can subteam",
    location: "San Jose, CA",
    period: "Sep 2023 — Present",
    detail:
      "Interfaces an STM32-based CAN transceiver with dozens of sensors; bare-metal programming with interrupts, timers, and watchdogs to improve data bandwidth",
  },
];

export const EDUCATION = [
  {
    school: "Arizona State University",
    degree: "M.S., Computer Science",
    period: "Aug 2025 — May 2027",
    gpa: "GPA 3.50",
  },
  {
    school: "San José State University",
    degree: "B.S., Computer Engineering",
    period: "Aug 2021 — May 2025",
    gpa: "GPA 3.60",
  },
];

// Verbose, clickable skill vocabulary. Every item here appears in at least
// one PROJECTS[].skills array, so clicking any tag always surfaces work.
export const SKILLS = [
  {
    label: "Languages & Tools",
    items: ["Python", "C", "C++", "Java", "SystemVerilog", "Verilog"],
  },
  {
    label: "Machine Learning",
    items: [
      "Neural Networks",
      "CNNs",
      "Transformers",
      "Attention",
      "Reinforcement Learning",
      "KANs",
      "K-Means",
      "Gaussian Classifiers",
      "Perceptrons",
      "NEAT",
      "TensorFlow",
      "TensorFlow Lite",
    ],
  },
  {
    label: "Embedded & Hardware",
    items: ["Firmware", "Interrupts", "PWM", "ESP32", "Shift Registers", "IMU / MPU6050", "Servo Control"],
  },
  {
    label: "Signal Processing & Math",
    items: ["FFT", "Convex Optimization", "Complex Dynamics", "Sensor Fusion", "Linear Algebra", "Eye Diagrams"],
  },
  {
    label: "Compilers & Languages",
    items: ["Lexing & Parsing", "Recursive-Descent Parsing", "AST Construction", "Lambda Calculus", "Code Generation"],
  },
  {
    label: "FPGA & Digital Logic",
    items: ["RTL Design", "Testbenches", "Icarus Verilog", "Yosys", "Sequential Logic", "Combinational Logic"],
  },
  {
    label: "Quantitative Finance",
    items: ["Options Greeks", "Backtesting", "Alpaca API", "Lorentzian Classification", "KNN"],
  },
  {
    label: "Networking & Algorithms",
    items: ["Sockets & Networking", "A* Search", "Q-Learning", "Graph Search"],
  },
];
