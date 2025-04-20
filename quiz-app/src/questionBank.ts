export interface Question {
  id: string;
  category: string;
  difficulty: 'easy' | 'complex' | 'hard' | 'extremely complex';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export const questionBank: Question[] = [
  // Science Questions (100)
  {
    id: 'sci1',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical symbol for gold?',
    options: ['Ag', 'Au', 'Fe', 'Cu'],
    correctAnswer: 'Au',
    explanation: 'Gold is represented by the chemical symbol Au, derived from the Latin word "aurum".'
  },
  {
    id: 'sci2',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the largest planet in our solar system?',
    options: ['Saturn', 'Jupiter', 'Neptune', 'Earth'],
    correctAnswer: 'Jupiter',
    explanation: 'Jupiter is the largest planet in our solar system, with a diameter of about 86,881 miles.'
  },
  {
    id: 'sci3',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the process by which plants convert sunlight into energy?',
    options: ['Respiration', 'Transpiration', 'Photosynthesis', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation: 'Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen.'
  },
  {
    id: 'sci4',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the Heisenberg Uncertainty Principle?',
    options: [
      'Energy cannot be created or destroyed',
      'Every action has an equal and opposite reaction',
      'The speed of light is constant in a vacuum',
      'It is impossible to know both position and momentum of a particle simultaneously'
    ],
    correctAnswer: 'It is impossible to know both position and momentum of a particle simultaneously',
    explanation: 'The Heisenberg Uncertainty Principle states that the more precisely the position of a particle is determined, the less precisely its momentum can be known, and vice versa.'
  },
  {
    id: 'sci5',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Higgs boson in the Standard Model of particle physics?',
    options: [
      'It mediates the strong nuclear force',
      'It is responsible for radioactive decay',
      'It explains dark matter',
      'It gives mass to elementary particles'
    ],
    correctAnswer: 'It gives mass to elementary particles',
    explanation: 'The Higgs boson is associated with the Higgs field, which gives mass to elementary particles through the Higgs mechanism.'
  },
  // New Science Questions
  {
    id: 'sci6',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the smallest unit of matter?',
    options: ['Atom', 'Molecule', 'Cell', 'Electron'],
    correctAnswer: 'Atom',
    explanation: 'An atom is the smallest unit of matter that retains the properties of an element.'
  },
  {
    id: 'sci7',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical formula for water?',
    options: ['H2O', 'CO2', 'O2', 'H2O2'],
    correctAnswer: 'H2O',
    explanation: 'Water is composed of two hydrogen atoms and one oxygen atom, hence the formula H2O.'
  },
  {
    id: 'sci8',
    category: 'Science',
    difficulty: 'easy',
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
    explanation: 'Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface.'
  },
  {
    id: 'sci9',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the main component of the Sun?',
    options: ['Hydrogen', 'Helium', 'Oxygen', 'Carbon'],
    correctAnswer: 'Hydrogen',
    explanation: 'The Sun is primarily composed of hydrogen (about 70%) and helium (about 28%).'
  },
  {
    id: 'sci10',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the unit of electrical resistance?',
    options: ['Ohm', 'Volt', 'Ampere', 'Watt'],
    correctAnswer: 'Ohm',
    explanation: 'The ohm (Ω) is the unit of electrical resistance, named after Georg Simon Ohm.'
  },
  {
    id: 'sci11',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the process by which cells divide to create new cells?',
    options: ['Mitosis', 'Meiosis', 'Photosynthesis', 'Respiration'],
    correctAnswer: 'Mitosis',
    explanation: 'Mitosis is the process of cell division that results in two identical daughter cells.'
  },
  {
    id: 'sci12',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the chemical process that breaks down food to release energy?',
    options: ['Cellular Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
    correctAnswer: 'Cellular Respiration',
    explanation: 'Cellular respiration is the process by which cells convert nutrients into energy (ATP).'
  },
  {
    id: 'sci13',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the theory that explains the movement of Earth\'s continents?',
    options: ['Plate Tectonics', 'Continental Drift', 'Seafloor Spreading', 'Mantle Convection'],
    correctAnswer: 'Plate Tectonics',
    explanation: 'Plate tectonics theory explains how Earth\'s lithosphere is divided into plates that move over the asthenosphere.'
  },
  {
    id: 'sci14',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants lose water through their leaves?',
    options: ['Transpiration', 'Photosynthesis', 'Respiration', 'Osmosis'],
    correctAnswer: 'Transpiration',
    explanation: 'Transpiration is the process by which plants lose water vapor through their stomata.'
  },
  {
    id: 'sci15',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the force that opposes motion between two surfaces in contact?',
    options: ['Friction', 'Gravity', 'Tension', 'Normal Force'],
    correctAnswer: 'Friction',
    explanation: 'Friction is the force that opposes the relative motion of two surfaces in contact.'
  },
  {
    id: 'sci16',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the double-helix structure of DNA?',
    options: [
      'It allows for accurate replication of genetic information',
      'It provides structural support to cells',
      'It enables rapid cell division',
      'It protects DNA from environmental damage'
    ],
    correctAnswer: 'It allows for accurate replication of genetic information',
    explanation: 'The double-helix structure of DNA enables accurate replication through complementary base pairing.'
  },
  {
    id: 'sci17',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the principle behind the operation of a nuclear reactor?',
    options: [
      'Controlled nuclear fission',
      'Nuclear fusion',
      'Radioactive decay',
      'Particle acceleration'
    ],
    correctAnswer: 'Controlled nuclear fission',
    explanation: 'Nuclear reactors operate by controlling the rate of nuclear fission reactions to produce heat.'
  },
  {
    id: 'sci18',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Michelson-Morley experiment?',
    options: [
      'It failed to detect the existence of the luminiferous aether',
      'It proved the existence of the luminiferous aether',
      'It demonstrated the wave nature of light',
      'It confirmed Newton\'s theory of gravity'
    ],
    correctAnswer: 'It failed to detect the existence of the luminiferous aether',
    explanation: 'The Michelson-Morley experiment\'s failure to detect the aether led to the development of special relativity.'
  },
  {
    id: 'sci19',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the role of messenger RNA (mRNA) in protein synthesis?',
    options: [
      'It carries genetic information from DNA to ribosomes',
      'It provides structural support to ribosomes',
      'It catalyzes the formation of peptide bonds',
      'It transports amino acids to the ribosome'
    ],
    correctAnswer: 'It carries genetic information from DNA to ribosomes',
    explanation: 'mRNA carries the genetic code from DNA to ribosomes, where it serves as a template for protein synthesis.'
  },
  {
    id: 'sci20',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the photoelectric effect in quantum mechanics?',
    options: [
      'It demonstrated the particle nature of light',
      'It proved the wave nature of light',
      'It confirmed the existence of the aether',
      'It demonstrated the existence of dark matter'
    ],
    correctAnswer: 'It demonstrated the particle nature of light',
    explanation: 'The photoelectric effect showed that light can behave as particles (photons), supporting quantum theory.'
  },
  {
    id: 'sci21',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Riemann Hypothesis in mathematics?',
    options: [
      'It concerns the distribution of prime numbers',
      'It describes the behavior of complex functions',
      'It explains the nature of infinity',
      'It defines the properties of fractals'
    ],
    correctAnswer: 'It concerns the distribution of prime numbers',
    explanation: 'The Riemann Hypothesis is a conjecture about the distribution of the zeros of the Riemann zeta function, which is deeply connected to the distribution of prime numbers.'
  },
  {
    id: 'sci22',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the holographic principle in theoretical physics?',
    options: [
      'It suggests that the information in a volume of space can be encoded on its boundary',
      'It explains the nature of black holes',
      'It describes the behavior of quantum particles',
      'It predicts the existence of parallel universes'
    ],
    correctAnswer: 'It suggests that the information in a volume of space can be encoded on its boundary',
    explanation: 'The holographic principle suggests that the information in a volume of space can be represented as a theory on the boundary of that space.'
  },
  {
    id: 'sci23',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the AdS/CFT correspondence in string theory?',
    options: [
      'It establishes a duality between a gravity theory and a quantum field theory',
      'It explains the nature of dark energy',
      'It describes the behavior of black holes',
      'It predicts the existence of extra dimensions'
    ],
    correctAnswer: 'It establishes a duality between a gravity theory and a quantum field theory',
    explanation: 'The AdS/CFT correspondence is a conjectured relationship between two kinds of physical theories: a quantum field theory and a gravity theory.'
  },
  {
    id: 'sci24',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Navier-Stokes existence and smoothness problem?',
    options: [
      'It concerns the mathematical properties of fluid flow equations',
      'It describes the behavior of quantum particles',
      'It explains the nature of turbulence',
      'It predicts weather patterns'
    ],
    correctAnswer: 'It concerns the mathematical properties of fluid flow equations',
    explanation: 'The Navier-Stokes existence and smoothness problem is one of the seven Millennium Prize Problems, concerning the mathematical properties of solutions to the Navier-Stokes equations.'
  },
  {
    id: 'sci25',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Yang-Mills existence and mass gap problem?',
    options: [
      'It concerns the mathematical properties of quantum field theory',
      'It explains the nature of dark matter',
      'It describes the behavior of elementary particles',
      'It predicts the existence of new fundamental forces'
    ],
    correctAnswer: 'It concerns the mathematical properties of quantum field theory',
    explanation: 'The Yang-Mills existence and mass gap problem is one of the seven Millennium Prize Problems, concerning the mathematical properties of quantum field theory.'
  },
  {
    id: 'sci26',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical symbol for oxygen?',
    options: ['O', 'Ox', 'O2', 'Oy'],
    correctAnswer: 'O',
    explanation: 'Oxygen is represented by the chemical symbol O, derived from the Greek word "oxys" meaning sharp or acid.'
  },
  {
    id: 'sci27',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the smallest bone in the human body?',
    options: ['Stapes', 'Femur', 'Tibia', 'Radius'],
    correctAnswer: 'Stapes',
    explanation: 'The stapes, located in the middle ear, is the smallest bone in the human body, measuring about 2.8-3.5 mm.'
  },
  {
    id: 'sci28',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the process by which plants make their own food?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Digestion'],
    correctAnswer: 'Photosynthesis',
    explanation: 'Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen.'
  },
  {
    id: 'sci29',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the unit of force in the International System of Units (SI)?',
    options: ['Newton', 'Joule', 'Watt', 'Pascal'],
    correctAnswer: 'Newton',
    explanation: 'The newton (N) is the SI unit of force, named after Sir Isaac Newton.'
  },
  {
    id: 'sci30',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical formula for table salt?',
    options: ['NaCl', 'H2O', 'CO2', 'O2'],
    correctAnswer: 'NaCl',
    explanation: 'Table salt is sodium chloride (NaCl), composed of sodium (Na) and chlorine (Cl) ions.'
  },
  {
    id: 'sci31',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which water moves through a plant?',
    options: ['Transpiration', 'Photosynthesis', 'Respiration', 'Osmosis'],
    correctAnswer: 'Transpiration',
    explanation: 'Transpiration is the process by which water moves through a plant and evaporates from its leaves.'
  },
  {
    id: 'sci32',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the theory that explains the origin of the universe?',
    options: ['Big Bang Theory', 'Steady State Theory', 'String Theory', 'Quantum Theory'],
    correctAnswer: 'Big Bang Theory',
    explanation: 'The Big Bang Theory is the prevailing cosmological model explaining the existence of the observable universe.'
  },
  {
    id: 'sci33',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which rocks are broken down into smaller pieces?',
    options: ['Weathering', 'Erosion', 'Deposition', 'Sedimentation'],
    correctAnswer: 'Weathering',
    explanation: 'Weathering is the process by which rocks are broken down into smaller pieces by physical or chemical means.'
  },
  {
    id: 'sci34',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants reproduce without seeds?',
    options: ['Vegetative Propagation', 'Pollination', 'Fertilization', 'Germination'],
    correctAnswer: 'Vegetative Propagation',
    explanation: 'Vegetative propagation is a form of asexual reproduction in plants where new plants grow from vegetative parts.'
  },
  {
    id: 'sci35',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the force that keeps planets in orbit around the sun?',
    options: ['Gravity', 'Magnetism', 'Friction', 'Tension'],
    correctAnswer: 'Gravity',
    explanation: 'Gravity is the force that attracts two bodies toward each other, keeping planets in orbit around the sun.'
  },
  {
    id: 'sci36',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the double-slit experiment in quantum mechanics?',
    options: [
      'It demonstrated wave-particle duality',
      'It proved the existence of the aether',
      'It confirmed Newton\'s laws of motion',
      'It demonstrated the photoelectric effect'
    ],
    correctAnswer: 'It demonstrated wave-particle duality',
    explanation: 'The double-slit experiment showed that particles can exhibit both wave-like and particle-like behavior.'
  },
  {
    id: 'sci37',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of DNA?',
    options: [
      'It explained how genetic information is stored and transmitted',
      'It proved the theory of evolution',
      'It demonstrated the existence of genes',
      'It explained the process of protein synthesis'
    ],
    correctAnswer: 'It explained how genetic information is stored and transmitted',
    explanation: 'The discovery of DNA\'s double-helix structure explained how genetic information is stored and transmitted.'
  },
  {
    id: 'sci38',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the cosmic microwave background radiation?',
    options: [
      'It provided evidence for the Big Bang theory',
      'It proved the existence of dark matter',
      'It demonstrated the expansion of the universe',
      'It explained the formation of galaxies'
    ],
    correctAnswer: 'It provided evidence for the Big Bang theory',
    explanation: 'The discovery of cosmic microwave background radiation provided strong evidence for the Big Bang theory.'
  },
  {
    id: 'sci39',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of penicillin?',
    options: [
      'It revolutionized the treatment of bacterial infections',
      'It proved the germ theory of disease',
      'It demonstrated the existence of viruses',
      'It explained the process of immunity'
    ],
    correctAnswer: 'It revolutionized the treatment of bacterial infections',
    explanation: 'The discovery of penicillin revolutionized medicine by providing an effective treatment for bacterial infections.'
  },
  {
    id: 'sci40',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci41',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the P vs NP problem in computer science?',
    options: [
      'It concerns the relationship between problems that can be solved quickly and those that can be verified quickly',
      'It explains the nature of quantum computing',
      'It describes the behavior of artificial intelligence',
      'It predicts the future of computing technology'
    ],
    correctAnswer: 'It concerns the relationship between problems that can be solved quickly and those that can be verified quickly',
    explanation: 'The P vs NP problem is one of the seven Millennium Prize Problems, concerning the relationship between problems that can be solved quickly and those that can be verified quickly.'
  },
  {
    id: 'sci42',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Birch and Swinnerton-Dyer conjecture in mathematics?',
    options: [
      'It concerns the number of rational points on elliptic curves',
      'It describes the behavior of prime numbers',
      'It explains the nature of infinity',
      'It defines the properties of complex numbers'
    ],
    correctAnswer: 'It concerns the number of rational points on elliptic curves',
    explanation: 'The Birch and Swinnerton-Dyer conjecture is one of the seven Millennium Prize Problems, concerning the number of rational points on elliptic curves.'
  },
  {
    id: 'sci43',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Hodge conjecture in algebraic geometry?',
    options: [
      'It concerns the relationship between algebraic cycles and cohomology classes',
      'It describes the behavior of geometric shapes',
      'It explains the nature of symmetry',
      'It defines the properties of topological spaces'
    ],
    correctAnswer: 'It concerns the relationship between algebraic cycles and cohomology classes',
    explanation: 'The Hodge conjecture is one of the seven Millennium Prize Problems, concerning the relationship between algebraic cycles and cohomology classes.'
  },
  {
    id: 'sci44',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Poincaré conjecture in topology?',
    options: [
      'It concerns the classification of three-dimensional manifolds',
      'It describes the behavior of geometric shapes',
      'It explains the nature of space',
      'It defines the properties of surfaces'
    ],
    correctAnswer: 'It concerns the classification of three-dimensional manifolds',
    explanation: 'The Poincaré conjecture is one of the seven Millennium Prize Problems, concerning the classification of three-dimensional manifolds.'
  },
  {
    id: 'sci45',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the quantum chromodynamics (QCD) in particle physics?',
    options: [
      'It describes the strong interaction between quarks and gluons',
      'It explains the nature of dark matter',
      'It describes the behavior of elementary particles',
      'It predicts the existence of new fundamental forces'
    ],
    correctAnswer: 'It describes the strong interaction between quarks and gluons',
    explanation: 'Quantum chromodynamics (QCD) is the theory of the strong interaction between quarks and gluons.'
  },
  {
    id: 'sci46',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical symbol for carbon?',
    options: ['C', 'Ca', 'Co', 'Cr'],
    correctAnswer: 'C',
    explanation: 'Carbon is represented by the chemical symbol C, derived from the Latin word "carbo" meaning coal.'
  },
  {
    id: 'sci47',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the largest organ in the human body?',
    options: ['Skin', 'Liver', 'Heart', 'Brain'],
    correctAnswer: 'Skin',
    explanation: 'The skin is the largest organ in the human body, covering an area of about 20 square feet in adults.'
  },
  {
    id: 'sci48',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the process by which plants release water vapor?',
    options: ['Transpiration', 'Photosynthesis', 'Respiration', 'Evaporation'],
    correctAnswer: 'Transpiration',
    explanation: 'Transpiration is the process by which plants release water vapor through their stomata.'
  },
  {
    id: 'sci49',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the unit of electric current in the International System of Units (SI)?',
    options: ['Ampere', 'Volt', 'Ohm', 'Watt'],
    correctAnswer: 'Ampere',
    explanation: 'The ampere (A) is the SI unit of electric current, named after André-Marie Ampère.'
  },
  {
    id: 'sci50',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical formula for carbon dioxide?',
    options: ['CO2', 'CO', 'C2O', 'CO3'],
    correctAnswer: 'CO2',
    explanation: 'Carbon dioxide is composed of one carbon atom and two oxygen atoms, hence the formula CO2.'
  },
  {
    id: 'sci51',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants convert light energy into chemical energy?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose.'
  },
  {
    id: 'sci52',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the theory that explains the evolution of species?',
    options: ['Natural Selection', 'Genetic Drift', 'Mutation', 'Gene Flow'],
    correctAnswer: 'Natural Selection',
    explanation: 'Natural selection is the process by which organisms better adapted to their environment tend to survive and produce more offspring.'
  },
  {
    id: 'sci53',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which rocks are formed from sediments?',
    options: ['Lithification', 'Weathering', 'Erosion', 'Deposition'],
    correctAnswer: 'Lithification',
    explanation: 'Lithification is the process by which sediments are compacted and cemented to form sedimentary rocks.'
  },
  {
    id: 'sci54',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants respond to light?',
    options: ['Phototropism', 'Gravitropism', 'Thigmotropism', 'Hydrotropism'],
    correctAnswer: 'Phototropism',
    explanation: 'Phototropism is the process by which plants grow toward or away from light.'
  },
  {
    id: 'sci55',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the force that opposes the motion of objects through fluids?',
    options: ['Drag', 'Gravity', 'Friction', 'Tension'],
    correctAnswer: 'Drag',
    explanation: 'Drag is the force that opposes the motion of objects through fluids, such as air or water.'
  },
  {
    id: 'sci56',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci57',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci58',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the double helix?',
    options: [
      'It explained how genetic information is stored and transmitted',
      'It proved the theory of evolution',
      'It demonstrated the existence of genes',
      'It explained the process of protein synthesis'
    ],
    correctAnswer: 'It explained how genetic information is stored and transmitted',
    explanation: 'The discovery of DNA\'s double-helix structure explained how genetic information is stored and transmitted.'
  },
  {
    id: 'sci59',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci60',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci61',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci62',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci63',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the double helix?',
    options: [
      'It explained how genetic information is stored and transmitted',
      'It proved the theory of evolution',
      'It demonstrated the existence of genes',
      'It explained the process of protein synthesis'
    ],
    correctAnswer: 'It explained how genetic information is stored and transmitted',
    explanation: 'The discovery of DNA\'s double-helix structure explained how genetic information is stored and transmitted.'
  },
  {
    id: 'sci64',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci65',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci66',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical symbol for nitrogen?',
    options: ['N', 'Ni', 'Na', 'Ne'],
    correctAnswer: 'N',
    explanation: 'Nitrogen is represented by the chemical symbol N, derived from the Greek word "nitron" meaning native soda.'
  },
  {
    id: 'sci67',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the smallest unit of life?',
    options: ['Cell', 'Atom', 'Molecule', 'Organelle'],
    correctAnswer: 'Cell',
    explanation: 'The cell is the smallest unit of life, capable of performing all the functions necessary for life.'
  },
  {
    id: 'sci68',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the process by which plants take in carbon dioxide?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation: 'During photosynthesis, plants take in carbon dioxide and release oxygen.'
  },
  {
    id: 'sci69',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the unit of energy in the International System of Units (SI)?',
    options: ['Joule', 'Watt', 'Newton', 'Pascal'],
    correctAnswer: 'Joule',
    explanation: 'The joule (J) is the SI unit of energy, named after James Prescott Joule.'
  },
  {
    id: 'sci70',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical formula for methane?',
    options: ['CH4', 'CO2', 'H2O', 'NH3'],
    correctAnswer: 'CH4',
    explanation: 'Methane is composed of one carbon atom and four hydrogen atoms, hence the formula CH4.'
  },
  {
    id: 'sci71',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants convert light energy into chemical energy?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose.'
  },
  {
    id: 'sci72',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the theory that explains the evolution of species?',
    options: ['Natural Selection', 'Genetic Drift', 'Mutation', 'Gene Flow'],
    correctAnswer: 'Natural Selection',
    explanation: 'Natural selection is the process by which organisms better adapted to their environment tend to survive and produce more offspring.'
  },
  {
    id: 'sci73',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which rocks are formed from sediments?',
    options: ['Lithification', 'Weathering', 'Erosion', 'Deposition'],
    correctAnswer: 'Lithification',
    explanation: 'Lithification is the process by which sediments are compacted and cemented to form sedimentary rocks.'
  },
  {
    id: 'sci74',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants respond to light?',
    options: ['Phototropism', 'Gravitropism', 'Thigmotropism', 'Hydrotropism'],
    correctAnswer: 'Phototropism',
    explanation: 'Phototropism is the process by which plants grow toward or away from light.'
  },
  {
    id: 'sci75',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the force that opposes the motion of objects through fluids?',
    options: ['Drag', 'Gravity', 'Friction', 'Tension'],
    correctAnswer: 'Drag',
    explanation: 'Drag is the force that opposes the motion of objects through fluids, such as air or water.'
  },
  {
    id: 'sci76',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci77',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci78',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the double helix?',
    options: [
      'It explained how genetic information is stored and transmitted',
      'It proved the theory of evolution',
      'It demonstrated the existence of genes',
      'It explained the process of protein synthesis'
    ],
    correctAnswer: 'It explained how genetic information is stored and transmitted',
    explanation: 'The discovery of DNA\'s double-helix structure explained how genetic information is stored and transmitted.'
  },
  {
    id: 'sci79',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci80',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci81',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci82',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci83',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the double helix?',
    options: [
      'It explained how genetic information is stored and transmitted',
      'It proved the theory of evolution',
      'It demonstrated the existence of genes',
      'It explained the process of protein synthesis'
    ],
    correctAnswer: 'It explained how genetic information is stored and transmitted',
    explanation: 'The discovery of DNA\'s double-helix structure explained how genetic information is stored and transmitted.'
  },
  {
    id: 'sci84',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci85',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci86',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical symbol for hydrogen?',
    options: ['H', 'He', 'Hy', 'Hg'],
    correctAnswer: 'H',
    explanation: 'Hydrogen is represented by the chemical symbol H, derived from the Greek word "hydro" meaning water.'
  },
  {
    id: 'sci87',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the largest organ in the human body?',
    options: ['Skin', 'Liver', 'Heart', 'Brain'],
    correctAnswer: 'Skin',
    explanation: 'The skin is the largest organ in the human body, covering an area of about 20 square feet in adults.'
  },
  {
    id: 'sci88',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the process by which plants release oxygen?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation: 'During photosynthesis, plants release oxygen as a byproduct of converting carbon dioxide and water into glucose.'
  },
  {
    id: 'sci89',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the unit of power in the International System of Units (SI)?',
    options: ['Watt', 'Joule', 'Newton', 'Pascal'],
    correctAnswer: 'Watt',
    explanation: 'The watt (W) is the SI unit of power, named after James Watt.'
  },
  {
    id: 'sci90',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical formula for ammonia?',
    options: ['NH3', 'NO2', 'N2O', 'NO'],
    correctAnswer: 'NH3',
    explanation: 'Ammonia is composed of one nitrogen atom and three hydrogen atoms, hence the formula NH3.'
  },
  {
    id: 'sci91',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants convert light energy into chemical energy?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose.'
  },
  {
    id: 'sci92',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the theory that explains the evolution of species?',
    options: ['Natural Selection', 'Genetic Drift', 'Mutation', 'Gene Flow'],
    correctAnswer: 'Natural Selection',
    explanation: 'Natural selection is the process by which organisms better adapted to their environment tend to survive and produce more offspring.'
  },
  {
    id: 'sci93',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which rocks are formed from sediments?',
    options: ['Lithification', 'Weathering', 'Erosion', 'Deposition'],
    correctAnswer: 'Lithification',
    explanation: 'Lithification is the process by which sediments are compacted and cemented to form sedimentary rocks.'
  },
  {
    id: 'sci94',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants respond to light?',
    options: ['Phototropism', 'Gravitropism', 'Thigmotropism', 'Hydrotropism'],
    correctAnswer: 'Phototropism',
    explanation: 'Phototropism is the process by which plants grow toward or away from light.'
  },
  {
    id: 'sci95',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the force that opposes the motion of objects through fluids?',
    options: ['Drag', 'Gravity', 'Friction', 'Tension'],
    correctAnswer: 'Drag',
    explanation: 'Drag is the force that opposes the motion of objects through fluids, such as air or water.'
  },
  {
    id: 'sci96',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci97',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci98',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the double helix?',
    options: [
      'It explained how genetic information is stored and transmitted',
      'It proved the theory of evolution',
      'It demonstrated the existence of genes',
      'It explained the process of protein synthesis'
    ],
    correctAnswer: 'It explained how genetic information is stored and transmitted',
    explanation: 'The discovery of DNA\'s double-helix structure explained how genetic information is stored and transmitted.'
  },
  {
    id: 'sci99',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It explained how proteins are synthesized',
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci100',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It explained the behavior of matter at the atomic level',
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  // Add more science questions here...

  // History Questions (100)
  {
    id: 'his1',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did World War II end?',
    options: ['1945', '1943', '1947', '1941'],
    correctAnswer: '1945',
    explanation: 'World War II ended in 1945 with the surrender of Germany in May and Japan in September.'
  },
  {
    id: 'his2',
    category: 'History',
    difficulty: 'complex',
    question: 'Who was the first President of the United States?',
    options: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Benjamin Franklin'],
    correctAnswer: 'George Washington',
    explanation: 'George Washington served as the first President of the United States from 1789 to 1797.'
  },
  {
    id: 'his3',
    category: 'History',
    difficulty: 'hard',
    question: 'What was the significance of the Treaty of Westphalia in 1648?',
    options: [
      'It ended the Thirty Years\' War and established the modern state system',
      'It marked the beginning of the Renaissance',
      'It established the Holy Roman Empire',
      'It ended the Hundred Years\' War'
    ],
    correctAnswer: 'It ended the Thirty Years\' War and established the modern state system',
    explanation: 'The Treaty of Westphalia ended the Thirty Years\' War and is considered the birth of the modern state system and international law.'
  },
  // Add more history questions here...

  // Geography Questions (100)
  {
    id: 'geo1',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
    explanation: 'Paris is the capital and largest city of France.'
  },
  {
    id: 'geo2',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which is the largest desert in the world?',
    options: ['Antarctic Desert', 'Sahara Desert', 'Arabian Desert', 'Gobi Desert'],
    correctAnswer: 'Antarctic Desert',
    explanation: 'The Antarctic Desert is the largest desert in the world, covering about 5.5 million square miles.'
  },
  // Add more geography questions here...

  // Technology Questions (100)
  {
    id: 'tech1',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "HTML" stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Hyper Transfer Markup Language',
      'Home Tool Markup Language'
    ],
    correctAnswer: 'Hyper Text Markup Language',
    explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.'
  },
  {
    id: 'tech2',
    category: 'Technology',
    difficulty: 'hard',
    question: 'What is the difference between TCP and UDP protocols?',
    options: [
      'TCP is connection-oriented while UDP is connectionless',
      'TCP is faster than UDP',
      'UDP provides error checking while TCP does not',
      'TCP is used for video streaming while UDP is used for web browsing'
    ],
    correctAnswer: 'TCP is connection-oriented while UDP is connectionless',
    explanation: 'TCP (Transmission Control Protocol) is connection-oriented and reliable, while UDP (User Datagram Protocol) is connectionless and faster but less reliable.'
  },
  // Add more technology questions here...

  // Sports Questions (100)
  {
    id: 'spt1',
    category: 'Sports',
    difficulty: 'easy',
    question: 'How many players are there in a standard soccer team?',
    options: ['11', '9', '13', '15'],
    correctAnswer: '11',
    explanation: 'A standard soccer team consists of 11 players, including one goalkeeper.'
  },
  {
    id: 'spt2',
    category: 'Sports',
    difficulty: 'complex',
    question: 'Which country has won the most FIFA World Cup titles?',
    options: ['Brazil', 'Germany', 'Italy', 'Argentina'],
    correctAnswer: 'Brazil',
    explanation: 'Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002).'
  },
  // Add more sports questions here...

  // Entertainment Questions (100)
  {
    id: 'ent1',
    category: 'Entertainment',
    difficulty: 'easy',
    question: 'Who directed the movie "Titanic"?',
    options: ['James Cameron', 'Steven Spielberg', 'Christopher Nolan', 'Martin Scorsese'],
    correctAnswer: 'James Cameron',
    explanation: 'James Cameron directed the 1997 blockbuster movie "Titanic".'
  },
  {
    id: 'ent2',
    category: 'Entertainment',
    difficulty: 'hard',
    question: 'Which composer wrote the "Moonlight Sonata"?',
    options: ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Frédéric Chopin'],
    correctAnswer: 'Ludwig van Beethoven',
    explanation: 'Ludwig van Beethoven composed the "Moonlight Sonata" (Piano Sonata No. 14) in 1801.'
  },
  // Add more entertainment questions here...
];

// Helper function to get questions by category and difficulty
export function getQuestionsByCategoryAndDifficulty(
  category: string,
  difficulty: 'easy' | 'complex' | 'hard' | 'extremely complex',
  count: number
): Question[] {
  const filteredQuestions = questionBank.filter(
    q => q.category === category && q.difficulty === difficulty
  );
  
  // Shuffle the questions and their options
  const shuffled = [...filteredQuestions].map(q => {
    const options = [...q.options];
    const correctAnswer = q.correctAnswer;
    const correctIndex = options.indexOf(correctAnswer);
    
    // Shuffle options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    // Update correct answer position
    const newCorrectIndex = options.indexOf(correctAnswer);
    
    return {
      ...q,
      options,
      correctAnswer: options[newCorrectIndex]
    };
  }).sort(() => Math.random() - 0.5);
  
  // Return the requested number of questions
  return shuffled.slice(0, count);
}

// Helper function to get random questions for a quiz
export function getRandomQuestionsForQuiz(
  categories: string[],
  questionsPerCategory: number,
  difficultyDistribution: {
    easy: number;
    complex: number;
    hard: number;
    'extremely complex': number;
  }
): Question[] {
  const selectedQuestions: Question[] = [];
  
  categories.forEach(category => {
    Object.entries(difficultyDistribution).forEach(([difficulty, count]) => {
      const questions = getQuestionsByCategoryAndDifficulty(
        category,
        difficulty as 'easy' | 'complex' | 'hard' | 'extremely complex',
        count
      );
      selectedQuestions.push(...questions);
    });
  });
  
  // Shuffle all selected questions
  return selectedQuestions.sort(() => Math.random() - 0.5);
} 