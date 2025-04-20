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
  // Science Questions (200 total - 50 each difficulty)
  // Easy Questions (50)
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
    question: 'What is the state of matter that has a definite volume but no definite shape?',
    options: ['Liquid', 'Solid', 'Gas', 'Plasma'],
    correctAnswer: 'Liquid',
    explanation: 'Liquids have a definite volume but take the shape of their container, unlike solids which have both definite volume and shape.'
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
    question: 'What is the process by which genetic traits are passed from parents to offspring?',
    options: ['Inheritance', 'Evolution', 'Mutation', 'Adaptation'],
    correctAnswer: 'Inheritance',
    explanation: 'Inheritance is the biological process by which traits are passed from parents to their offspring through genes.'
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
    question: 'What is the basic unit of life?',
    options: ['Cell', 'Atom', 'Molecule', 'Tissue'],
    correctAnswer: 'Cell',
    explanation: 'The cell is the basic structural and functional unit of all known living organisms.'
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
    question: 'What is the role of enzymes in chemical reactions?',
    options: ['They lower activation energy', 'They increase reaction temperature', 'They add more reactants', 'They change the products'],
    correctAnswer: 'They lower activation energy',
    explanation: 'Enzymes are biological catalysts that lower the activation energy required for chemical reactions to occur.'
  },
  {
    id: 'sci72',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the function of mitochondria in cells?',
    options: ['Energy production', 'Protein synthesis', 'DNA replication', 'Cell division'],
    correctAnswer: 'Energy production',
    explanation: 'Mitochondria are often called the powerhouse of the cell because they produce most of the cell\'s energy through cellular respiration.'
  },
  {
    id: 'sci73',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the principle behind magnetic resonance imaging (MRI)?',
    options: ['Nuclear magnetic resonance', 'X-ray diffraction', 'Ultrasound waves', 'Radioactive decay'],
    correctAnswer: 'Nuclear magnetic resonance',
    explanation: 'MRI uses strong magnetic fields and radio waves to create detailed images of the body based on the principle of nuclear magnetic resonance.'
  },
  {
    id: 'sci74',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the role of neurotransmitters in the nervous system?',
    options: ['Chemical signal transmission', 'Energy production', 'Waste removal', 'Blood circulation'],
    correctAnswer: 'Chemical signal transmission',
    explanation: 'Neurotransmitters are chemicals that transmit signals across synapses between neurons.'
  },
  {
    id: 'sci75',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the greenhouse effect?',
    options: ['Trapping of heat by atmospheric gases', 'Plant growth in greenhouses', 'Formation of clouds', 'Ocean warming'],
    correctAnswer: 'Trapping of heat by atmospheric gases',
    explanation: 'The greenhouse effect is a natural process where certain gases in Earth\'s atmosphere trap heat, keeping the planet warm enough for life.'
  },
  {
    id: 'sci76',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Higgs field in particle physics?',
    options: [
      'It gives mass to elementary particles',
      'It creates magnetic fields',
      'It causes radioactive decay',
      'It generates gravitational waves'
    ],
    correctAnswer: 'It gives mass to elementary particles',
    explanation: 'The Higgs field is a quantum field that gives mass to elementary particles through their interaction with it.'
  },
  {
    id: 'sci77',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of quantum tunneling?',
    options: [
      'It allows particles to pass through energy barriers',
      'It creates new particles',
      'It splits atoms',
      'It generates light'
    ],
    correctAnswer: 'It allows particles to pass through energy barriers',
    explanation: 'Quantum tunneling is a quantum mechanical phenomenon where particles can pass through potential barriers that they classically could not overcome.'
  },
  {
    id: 'sci78',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the second law of thermodynamics?',
    options: [
      'The entropy of an isolated system always increases',
      'Energy cannot be created or destroyed',
      'Force equals mass times acceleration',
      'Matter cannot be created or destroyed'
    ],
    correctAnswer: 'The entropy of an isolated system always increases',
    explanation: 'The second law of thermodynamics states that the total entropy of an isolated system always increases over time.'
  },
  {
    id: 'sci79',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of dark matter in cosmology?',
    options: [
      'It explains galactic rotation curves',
      'It causes black holes',
      'It creates stars',
      'It generates cosmic rays'
    ],
    correctAnswer: 'It explains galactic rotation curves',
    explanation: 'Dark matter was proposed to explain the observed rotation curves of galaxies, which suggest the presence of unseen mass.'
  },
  {
    id: 'sci80',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the human microbiome?',
    options: [
      'It influences health and disease',
      'It produces vitamins',
      'It digests food',
      'It fights infections'
    ],
    correctAnswer: 'It influences health and disease',
    explanation: 'The human microbiome plays crucial roles in health and disease, affecting metabolism, immunity, and even behavior.'
  },
  {
    id: 'sci81',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of supersymmetry in particle physics?',
    options: [
      'It predicts partner particles for known particles',
      'It explains gravity',
      'It describes atomic structure',
      'It explains chemical bonding'
    ],
    correctAnswer: 'It predicts partner particles for known particles',
    explanation: 'Supersymmetry is a theoretical symmetry that predicts the existence of partner particles for all known elementary particles.'
  },
  {
    id: 'sci82',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of string theory?',
    options: [
      'It attempts to unify quantum mechanics and gravity',
      'It explains chemical reactions',
      'It describes cellular processes',
      'It explains evolution'
    ],
    correctAnswer: 'It attempts to unify quantum mechanics and gravity',
    explanation: 'String theory is a theoretical framework attempting to unify quantum mechanics and gravity by describing particles as one-dimensional strings.'
  },
  {
    id: 'sci83',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of quantum chromodynamics?',
    options: [
      'It describes the strong nuclear force',
      'It explains gravity',
      'It describes electricity',
      'It explains magnetism'
    ],
    correctAnswer: 'It describes the strong nuclear force',
    explanation: 'Quantum chromodynamics is the theory of the strong interaction between quarks and gluons, the fundamental particles that make up composite hadrons.'
  },
  {
    id: 'sci84',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of loop quantum gravity?',
    options: [
      'It attempts to reconcile quantum mechanics with general relativity',
      'It explains chemical bonding',
      'It describes cellular division',
      'It explains evolution'
    ],
    correctAnswer: 'It attempts to reconcile quantum mechanics with general relativity',
    explanation: 'Loop quantum gravity is a theory that attempts to merge quantum mechanics and general relativity to explain gravity at the quantum level.'
  },
  {
    id: 'sci85',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the holographic principle?',
    options: [
      'It suggests the universe might be a hologram',
      'It explains black holes',
      'It describes quantum mechanics',
      'It explains gravity'
    ],
    correctAnswer: 'It suggests the universe might be a hologram',
    explanation: 'The holographic principle suggests that the information content of a region of space can be described by a theory that lives only on the boundary of that region.'
  },
  // Additional Easy Questions
  {
    id: 'sci241',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical symbol for sodium?',
    options: ['Na', 'So', 'Sd', 'No'],
    correctAnswer: 'Na',
    explanation: 'Sodium is represented by the chemical symbol Na, derived from the Latin word "natrium".'
  },
  {
    id: 'sci242',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the smallest unit of life?',
    options: ['Cell', 'Atom', 'Molecule', 'Organelle'],
    correctAnswer: 'Cell',
    explanation: 'The cell is the smallest unit of life, capable of performing all the functions necessary for life.'
  },
  {
    id: 'sci243',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the process by which plants take in carbon dioxide?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation: 'During photosynthesis, plants take in carbon dioxide and release oxygen.'
  },
  {
    id: 'sci244',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the unit of energy in the International System of Units (SI)?',
    options: ['Joule', 'Watt', 'Newton', 'Pascal'],
    correctAnswer: 'Joule',
    explanation: 'The joule (J) is the SI unit of energy, named after James Prescott Joule.'
  },
  {
    id: 'sci245',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical formula for methane?',
    options: ['CH4', 'CO2', 'H2O', 'NH3'],
    correctAnswer: 'CH4',
    explanation: 'Methane is composed of one carbon atom and four hydrogen atoms, hence the formula CH4.'
  },

  // Additional Complex Questions
  {
    id: 'sci246',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants convert light energy into chemical energy?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose.'
  },
  {
    id: 'sci247',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the theory that explains the evolution of species?',
    options: ['Natural Selection', 'Genetic Drift', 'Mutation', 'Gene Flow'],
    correctAnswer: 'Natural Selection',
    explanation: 'Natural selection is the process by which organisms better adapted to their environment tend to survive and produce more offspring.'
  },
  {
    id: 'sci248',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which rocks are formed from sediments?',
    options: ['Lithification', 'Weathering', 'Erosion', 'Deposition'],
    correctAnswer: 'Lithification',
    explanation: 'Lithification is the process by which sediments are compacted and cemented to form sedimentary rocks.'
  },
  {
    id: 'sci249',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the process by which plants respond to light?',
    options: ['Phototropism', 'Gravitropism', 'Thigmotropism', 'Hydrotropism'],
    correctAnswer: 'Phototropism',
    explanation: 'Phototropism is the process by which plants grow toward or away from light.'
  },
  {
    id: 'sci250',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the name of the force that opposes the motion of objects through fluids?',
    options: ['Drag', 'Gravity', 'Friction', 'Tension'],
    correctAnswer: 'Drag',
    explanation: 'Drag is the force that opposes the motion of objects through fluids, such as air or water.'
  },

  // Additional Hard Questions
  {
    id: 'sci251',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the ribosome?',
    options: [
      'It proved the existence of RNA',
      'It demonstrated the nature of genetic code',
      'It explained how proteins are synthesized',
      'It explained the process of DNA replication'
    ],
    correctAnswer: 'It explained how proteins are synthesized',
    explanation: 'The discovery of the ribosome\'s structure explained how proteins are synthesized from mRNA templates.'
  },
  {
    id: 'sci252',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the atom?',
    options: [
      'It proved the existence of subatomic particles',
      'It demonstrated the nature of chemical bonds',
      'It explained the behavior of matter at the atomic level',
      'It explained the process of nuclear reactions'
    ],
    correctAnswer: 'It explained the behavior of matter at the atomic level',
    explanation: 'The discovery of the atom\'s structure explained the behavior of matter at the atomic level.'
  },
  {
    id: 'sci253',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the structure of the double helix?',
    options: [
      'It proved the theory of evolution',
      'It demonstrated the existence of genes',
      'It explained how genetic information is stored and transmitted',
      'It explained the process of protein synthesis'
    ],
    correctAnswer: 'It explained how genetic information is stored and transmitted',
    explanation: 'The discovery of DNA\'s double-helix structure explained how genetic information is stored and transmitted.'
  },
  {
    id: 'sci254',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of the cosmic microwave background radiation?',
    options: [
      'It proved the existence of dark matter',
      'It demonstrated the expansion of the universe',
      'It provided evidence for the Big Bang theory',
      'It explained the formation of galaxies'
    ],
    correctAnswer: 'It provided evidence for the Big Bang theory',
    explanation: 'The discovery of cosmic microwave background radiation provided strong evidence for the Big Bang theory.'
  },
  {
    id: 'sci255',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the discovery of penicillin?',
    options: [
      'It proved the germ theory of disease',
      'It demonstrated the existence of viruses',
      'It explained the process of immunity',
      'It revolutionized the treatment of bacterial infections'
    ],
    correctAnswer: 'It revolutionized the treatment of bacterial infections',
    explanation: 'The discovery of penicillin revolutionized medicine by providing an effective treatment for bacterial infections.'
  },

  // Additional Extremely Complex Questions
  {
    id: 'sci256',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Birch and Swinnerton-Dyer conjecture in mathematics?',
    options: [
      'It describes the behavior of prime numbers',
      'It explains the nature of infinity',
      'It defines the properties of complex numbers',
      'It concerns the number of rational points on elliptic curves'
    ],
    correctAnswer: 'It concerns the number of rational points on elliptic curves',
    explanation: 'The Birch and Swinnerton-Dyer conjecture is one of the seven Millennium Prize Problems, concerning the number of rational points on elliptic curves.'
  },
  {
    id: 'sci257',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Hodge conjecture in algebraic geometry?',
    options: [
      'It describes the behavior of geometric shapes',
      'It explains the nature of symmetry',
      'It defines the properties of topological spaces',
      'It concerns the relationship between algebraic cycles and cohomology classes'
    ],
    correctAnswer: 'It concerns the relationship between algebraic cycles and cohomology classes',
    explanation: 'The Hodge conjecture is one of the seven Millennium Prize Problems, concerning the relationship between algebraic cycles and cohomology classes.'
  },
  {
    id: 'sci258',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Poincaré conjecture in topology?',
    options: [
      'It describes the behavior of geometric shapes',
      'It explains the nature of space',
      'It defines the properties of surfaces',
      'It concerns the classification of three-dimensional manifolds'
    ],
    correctAnswer: 'It concerns the classification of three-dimensional manifolds',
    explanation: 'The Poincaré conjecture is one of the seven Millennium Prize Problems, concerning the classification of three-dimensional manifolds.'
  },
  {
    id: 'sci259',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Navier-Stokes existence and smoothness problem?',
    options: [
      'It describes the behavior of quantum particles',
      'It explains the nature of turbulence',
      'It predicts weather patterns',
      'It concerns the mathematical properties of fluid flow equations'
    ],
    correctAnswer: 'It concerns the mathematical properties of fluid flow equations',
    explanation: 'The Navier-Stokes existence and smoothness problem is one of the seven Millennium Prize Problems, concerning the mathematical properties of solutions to the Navier-Stokes equations.'
  },
  {
    id: 'sci260',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Yang-Mills existence and mass gap problem?',
    options: [
      'It explains the nature of dark matter',
      'It describes the behavior of elementary particles',
      'It predicts the existence of new fundamental forces',
      'It concerns the mathematical properties of quantum field theory'
    ],
    correctAnswer: 'It concerns the mathematical properties of quantum field theory',
    explanation: 'The Yang-Mills existence and mass gap problem is one of the seven Millennium Prize Problems, concerning the mathematical properties of quantum field theory.'
  },

  // Additional Easy Questions
  {
    id: 'sci261',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical symbol for calcium?',
    options: ['Ca', 'Cl', 'C', 'Cu'],
    correctAnswer: 'Ca',
    explanation: 'Calcium is represented by the chemical symbol Ca, derived from the Latin word "calx" meaning lime.'
  },
  {
    id: 'sci262',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the pH of pure water at room temperature?',
    options: ['7', '0', '14', '10'],
    correctAnswer: '7',
    explanation: 'Pure water has a pH of 7 at room temperature, making it neutral (neither acidic nor basic).'
  },
  {
    id: 'sci263',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the most abundant gas in Earth\'s atmosphere?',
    options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    correctAnswer: 'Nitrogen',
    explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere, making it the most abundant gas.'
  },
  {
    id: 'sci264',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the name of the smallest unit of an element that retains its properties?',
    options: ['Atom', 'Molecule', 'Cell', 'Proton'],
    correctAnswer: 'Atom',
    explanation: 'An atom is the smallest unit of an element that retains the chemical properties of that element.'
  },
  {
    id: 'sci265',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the main function of red blood cells?',
    options: ['Transport oxygen', 'Fight infection', 'Clot blood', 'Produce antibodies'],
    correctAnswer: 'Transport oxygen',
    explanation: 'Red blood cells contain hemoglobin, which allows them to transport oxygen throughout the body.'
  },

  // Additional Complex Questions
  {
    id: 'sci266',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the role of telomeres in chromosomes?',
    options: ['Protect chromosome ends', 'Replicate DNA', 'Produce proteins', 'Store genetic information'],
    correctAnswer: 'Protect chromosome ends',
    explanation: 'Telomeres are repetitive DNA sequences that protect the ends of chromosomes from damage and degradation.'
  },
  {
    id: 'sci267',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the function of the Golgi apparatus in cells?',
    options: ['Package and transport proteins', 'Produce energy', 'Break down waste', 'Store water'],
    correctAnswer: 'Package and transport proteins',
    explanation: 'The Golgi apparatus modifies, packages, and distributes proteins and lipids to their final destinations.'
  },
  {
    id: 'sci268',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the principle behind gel electrophoresis?',
    options: ['Separate molecules by size', 'Generate electricity', 'Create chemical reactions', 'Measure temperature'],
    correctAnswer: 'Separate molecules by size',
    explanation: 'Gel electrophoresis uses an electric field to separate molecules (like DNA fragments) based on their size and charge.'
  },
  {
    id: 'sci269',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the role of neurotransmitters in the nervous system?',
    options: ['Chemical signal transmission', 'Energy production', 'Waste removal', 'Blood circulation'],
    correctAnswer: 'Chemical signal transmission',
    explanation: 'Neurotransmitters are chemicals that transmit signals between neurons across synapses.'
  },
  {
    id: 'sci270',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the principle behind chromatography?',
    options: ['Separate mixtures', 'Generate heat', 'Create light', 'Measure mass'],
    correctAnswer: 'Separate mixtures',
    explanation: 'Chromatography is a technique used to separate mixtures based on different rates of migration through a medium.'
  },
  {
    id: 'sci271',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Stern-Gerlach experiment?',
    options: [
      'It demonstrated electron spin',
      'It proved atomic theory',
      'It discovered radioactivity',
      'It showed wave-particle duality'
    ],
    correctAnswer: 'It demonstrated electron spin',
    explanation: 'The Stern-Gerlach experiment provided evidence for the quantization of angular momentum and electron spin.'
  },
  {
    id: 'sci272',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Miller-Urey experiment?',
    options: [
      'It demonstrated abiotic synthesis of organic compounds',
      'It proved evolution',
      'It discovered DNA',
      'It showed cell division'
    ],
    correctAnswer: 'It demonstrated abiotic synthesis of organic compounds',
    explanation: 'The Miller-Urey experiment showed that organic compounds could be created from inorganic materials under conditions simulating early Earth.'
  },
  {
    id: 'sci273',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Meselson-Stahl experiment?',
    options: [
      'It proved DNA replication is semiconservative',
      'It discovered mutations',
      'It showed protein synthesis',
      'It demonstrated evolution'
    ],
    correctAnswer: 'It proved DNA replication is semiconservative',
    explanation: 'The Meselson-Stahl experiment demonstrated that DNA replication occurs through a semiconservative mechanism.'
  },
  {
    id: 'sci274',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Michelson-Morley experiment?',
    options: [
      'It disproved the existence of the luminiferous ether',
      'It discovered light waves',
      'It proved atomic theory',
      'It showed gravity waves'
    ],
    correctAnswer: 'It disproved the existence of the luminiferous ether',
    explanation: 'The Michelson-Morley experiment failed to detect the hypothetical luminiferous ether, leading to the development of special relativity.'
  },
  {
    id: 'sci275',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Millikan oil drop experiment?',
    options: [
      'It measured the charge of an electron',
      'It discovered protons',
      'It showed atomic structure',
      'It proved quantum theory'
    ],
    correctAnswer: 'It measured the charge of an electron',
    explanation: 'The Millikan oil drop experiment precisely measured the elementary electric charge of the electron.'
  },
  {
    id: 'sci276',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of M-theory in theoretical physics?',
    options: [
      'It unifies different versions of string theory',
      'It explains gravity',
      'It describes atomic structure',
      'It predicts new particles'
    ],
    correctAnswer: 'It unifies different versions of string theory',
    explanation: 'M-theory is a theory that unifies all consistent versions of superstring theory, suggesting they are all different limits of the same theory.'
  },

  // ... existing questions from other categories ...
  {
    id: 'sci57',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Krebs cycle in cellular respiration?',
    options: [
      'It generates ATP and CO2 from the oxidation of acetyl-CoA',
      'It breaks down glucose into pyruvate',
      'It produces ethanol from pyruvate',
      'It synthesizes glucose from CO2'
    ],
    correctAnswer: 'It generates ATP and CO2 from the oxidation of acetyl-CoA',
    explanation: 'The Krebs cycle is a key metabolic pathway that generates energy through the oxidation of acetyl-CoA.'
  },
  {
    id: 'sci60',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the endosymbiotic theory?',
    options: [
      'It explains the origin of mitochondria and chloroplasts',
      'It describes the formation of new species',
      'It explains the origin of multicellular organisms',
      'It describes the evolution of sexual reproduction'
    ],
    correctAnswer: 'It explains the origin of mitochondria and chloroplasts',
    explanation: 'The endosymbiotic theory proposes that mitochondria and chloroplasts evolved from ancient bacteria that were engulfed by early eukaryotic cells.'
  },
  {
    id: 'sci62',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of quantum entanglement in quantum mechanics?',
    options: [
      'It describes the instantaneous correlation between quantum states of particles',
      'It explains the wave-particle duality',
      'It describes the uncertainty principle',
      'It explains quantum tunneling'
    ],
    correctAnswer: 'It describes the instantaneous correlation between quantum states of particles',
    explanation: 'Quantum entanglement is a phenomenon where particles become correlated in such a way that the quantum state of each particle cannot be described independently.'
  },
  {
    id: 'sci65',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of dark energy in cosmology?',
    options: [
      'It explains the accelerating expansion of the universe',
      'It describes the formation of black holes',
      'It explains the origin of cosmic rays',
      'It describes the formation of galaxies'
    ],
    correctAnswer: 'It explains the accelerating expansion of the universe',
    explanation: 'Dark energy is a hypothetical form of energy that permeates all of space and tends to accelerate the expansion of the universe.'
  },
  {
    id: 'sci67',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the speed of light in a vacuum?',
    options: ['299,792,458 meters per second', '300,000,000 meters per second', '250,000,000 meters per second', '350,000,000 meters per second'],
    correctAnswer: '299,792,458 meters per second',
    explanation: 'The speed of light in a vacuum is exactly 299,792,458 meters per second, a fundamental constant of nature.'
  },
  {
    id: 'sci246',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the role of antibodies in the immune system?',
    options: ['They identify and neutralize pathogens', 'They produce energy', 'They digest food', 'They transport oxygen'],
    correctAnswer: 'They identify and neutralize pathogens',
    explanation: 'Antibodies are proteins produced by the immune system to identify and neutralize foreign substances like bacteria and viruses.'
  },
  {
    id: 'sci247',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the function of the endoplasmic reticulum in cells?',
    options: ['Protein synthesis and transport', 'Energy production', 'Cell division', 'Waste removal'],
    correctAnswer: 'Protein synthesis and transport',
    explanation: 'The endoplasmic reticulum is involved in protein synthesis, folding, modification, and transport within cells.'
  },
  {
    id: 'sci248',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the principle behind nuclear magnetic resonance (NMR) spectroscopy?',
    options: ['Magnetic properties of atomic nuclei', 'Radioactive decay', 'Chemical reactions', 'Electrical conductivity'],
    correctAnswer: 'Magnetic properties of atomic nuclei',
    explanation: 'NMR spectroscopy uses the magnetic properties of atomic nuclei to determine molecular structure and dynamics.'
  },
  {
    id: 'sci249',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the role of ATP in cellular metabolism?',
    options: ['Energy storage and transfer', 'Protein synthesis', 'DNA replication', 'Cell division'],
    correctAnswer: 'Energy storage and transfer',
    explanation: 'ATP (adenosine triphosphate) is the primary energy currency of cells, storing and transferring energy for cellular processes.'
  },
  {
    id: 'sci250',
    category: 'Science',
    difficulty: 'complex',
    question: 'What is the principle behind polymerase chain reaction (PCR)?',
    options: ['DNA amplification', 'Protein synthesis', 'Cell division', 'Energy production'],
    correctAnswer: 'DNA amplification',
    explanation: 'PCR is a technique used to amplify specific DNA sequences by creating multiple copies through repeated cycles of DNA replication.'
  },
  {
    id: 'sci251',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of epigenetics in gene expression?',
    options: [
      'It modifies gene expression without changing DNA sequence',
      'It causes DNA mutations',
      'It repairs DNA damage',
      'It synthesizes new genes'
    ],
    correctAnswer: 'It modifies gene expression without changing DNA sequence',
    explanation: 'Epigenetics involves changes in gene expression that do not involve changes to the DNA sequence itself.'
  },
  {
    id: 'sci252',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Casimir effect in quantum physics?',
    options: [
      'It demonstrates quantum vacuum fluctuations',
      'It explains gravity',
      'It describes atomic structure',
      'It explains chemical bonding'
    ],
    correctAnswer: 'It demonstrates quantum vacuum fluctuations',
    explanation: 'The Casimir effect demonstrates the existence of quantum vacuum fluctuations and their ability to produce measurable forces.'
  },
  {
    id: 'sci253',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Belousov-Zhabotinsky reaction?',
    options: [
      'It demonstrates chemical oscillation and pattern formation',
      'It produces new elements',
      'It generates energy',
      'It synthesizes proteins'
    ],
    correctAnswer: 'It demonstrates chemical oscillation and pattern formation',
    explanation: 'The Belousov-Zhabotinsky reaction is a classical example of non-equilibrium thermodynamics, resulting in the establishment of a nonlinear chemical oscillator.'
  },
  {
    id: 'sci254',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Haber process?',
    options: [
      'It enables industrial nitrogen fixation',
      'It produces energy',
      'It creates new elements',
      'It synthesizes proteins'
    ],
    correctAnswer: 'It enables industrial nitrogen fixation',
    explanation: 'The Haber process is an artificial nitrogen fixation process that revolutionized agriculture by enabling the industrial production of ammonia.'
  },
  {
    id: 'sci255',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the significance of the Krebs cycle in cellular respiration?',
    options: [
      'It generates ATP and CO2 from acetyl-CoA',
      'It breaks down glucose',
      'It synthesizes proteins',
      'It replicates DNA'
    ],
    correctAnswer: 'It generates ATP and CO2 from acetyl-CoA',
    explanation: 'The Krebs cycle is a key metabolic pathway that generates energy through the oxidation of acetyl-CoA in cellular respiration.'
  },
  {
    id: 'sci256',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of topological quantum computing?',
    options: [
      'It uses topological states for fault-tolerant quantum computation',
      'It improves classical computers',
      'It generates energy',
      'It processes information faster'
    ],
    correctAnswer: 'It uses topological states for fault-tolerant quantum computation',
    explanation: 'Topological quantum computing uses topologically protected states to perform quantum computations that are inherently protected from decoherence.'
  },
  {
    id: 'sci257',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the quantum Hall effect?',
    options: [
      'It demonstrates quantum conductance quantization',
      'It explains gravity',
      'It describes atomic structure',
      'It explains chemical bonding'
    ],
    correctAnswer: 'It demonstrates quantum conductance quantization',
    explanation: 'The quantum Hall effect demonstrates the quantization of conductance in two-dimensional electron systems under strong magnetic fields.'
  },
  {
    id: 'sci258',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of renormalization in quantum field theory?',
    options: [
      'It handles infinities in quantum field calculations',
      'It explains gravity',
      'It describes atomic structure',
      'It explains chemical bonding'
    ],
    correctAnswer: 'It handles infinities in quantum field calculations',
    explanation: 'Renormalization is a collection of techniques in quantum field theory used to handle infinities that arise in calculated quantities.'
  },
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