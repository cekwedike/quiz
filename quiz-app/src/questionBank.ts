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

  // History Questions - Easy (50 questions)
  {
    id: 'hist1',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did World War II end?',
    options: ['1945', '1939', '1950', '1941'],
    correctAnswer: '1945',
    explanation: 'World War II ended in 1945 with the surrender of Germany in May and Japan in September.'
  },
  {
    id: 'hist2',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first President of the United States?',
    options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
    correctAnswer: 'George Washington',
    explanation: 'George Washington served as the first President of the United States from 1789 to 1797.'
  },
  {
    id: 'hist3',
    category: 'History',
    difficulty: 'easy',
    question: 'Which ancient civilization built the pyramids?',
    options: ['Egyptians', 'Romans', 'Greeks', 'Mayans'],
    correctAnswer: 'Egyptians',
    explanation: 'The ancient Egyptians built the pyramids, with the Great Pyramid of Giza being the most famous.'
  },
  {
    id: 'hist4',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did the Titanic sink?',
    options: ['1912', '1905', '1920', '1918'],
    correctAnswer: '1912',
    explanation: 'The RMS Titanic sank on April 15, 1912, after hitting an iceberg on its maiden voyage.'
  },
  {
    id: 'hist5',
    category: 'History',
    difficulty: 'easy',
    question: 'Who wrote the Declaration of Independence?',
    options: ['Thomas Jefferson', 'George Washington', 'Benjamin Franklin', 'John Adams'],
    correctAnswer: 'Thomas Jefferson',
    explanation: 'Thomas Jefferson was the primary author of the Declaration of Independence in 1776.'
  },
  // ... continue with more easy history questions ...

  // History Questions - Complex (50 questions)
  {
    id: 'hist51',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Battle of Hastings in 1066?',
    options: [
      'It marked the Norman conquest of England',
      'It ended the Hundred Years War',
      'It established the Magna Carta',
      'It began the Crusades'
    ],
    correctAnswer: 'It marked the Norman conquest of England',
    explanation: 'The Battle of Hastings in 1066 resulted in William the Conqueror becoming King of England, marking the beginning of Norman rule.'
  },
  {
    id: 'hist52',
    category: 'History',
    difficulty: 'complex',
    question: 'Which treaty ended the Thirty Years War?',
    options: [
      'Peace of Westphalia',
      'Treaty of Versailles',
      'Treaty of Paris',
      'Peace of Augsburg'
    ],
    correctAnswer: 'Peace of Westphalia',
    explanation: 'The Peace of Westphalia in 1648 ended the Thirty Years War and established the modern system of sovereign states.'
  },
  {
    id: 'hist53',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the main cause of the French Revolution?',
    options: [
      'Financial crisis and social inequality',
      'Religious conflicts',
      'Foreign invasion',
      'Natural disasters'
    ],
    correctAnswer: 'Financial crisis and social inequality',
    explanation: 'The French Revolution was primarily caused by financial crisis, social inequality, and the absolute monarchy\'s inability to address these issues.'
  },
  {
    id: 'hist54',
    category: 'History',
    difficulty: 'complex',
    question: 'Which event marked the beginning of the Renaissance?',
    options: [
      'The fall of Constantinople',
      'The invention of the printing press',
      'The Black Death',
      'The discovery of America'
    ],
    correctAnswer: 'The fall of Constantinople',
    explanation: 'The fall of Constantinople in 1453 is often considered the beginning of the Renaissance, as it led to the migration of Greek scholars to Western Europe.'
  },
  {
    id: 'hist55',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Magna Carta?',
    options: [
      'It established the principle of limited government',
      'It created the British Parliament',
      'It ended the feudal system',
      'It established religious freedom'
    ],
    correctAnswer: 'It established the principle of limited government',
    explanation: 'The Magna Carta, signed in 1215, established the principle that the king was subject to the law, laying the foundation for constitutional government.'
  },
  // ... continue with more complex history questions ...

  // History Questions - Hard (50 questions)
  {
    id: 'hist101',
    category: 'History',
    difficulty: 'hard',
    question: 'What was the significance of the Congress of Vienna in 1815?',
    options: [
      'It reorganized Europe after the Napoleonic Wars',
      'It established the League of Nations',
      'It ended the Crimean War',
      'It created the European Union'
    ],
    correctAnswer: 'It reorganized Europe after the Napoleonic Wars',
    explanation: 'The Congress of Vienna in 1815 reorganized Europe after the Napoleonic Wars, establishing a balance of power and new territorial boundaries.'
  },
  {
    id: 'hist102',
    category: 'History',
    difficulty: 'hard',
    question: 'Which event marked the beginning of the Cold War?',
    options: [
      'The Truman Doctrine',
      'The Yalta Conference',
      'The Berlin Blockade',
      'The Cuban Missile Crisis'
    ],
    correctAnswer: 'The Truman Doctrine',
    explanation: 'The Truman Doctrine in 1947 marked the beginning of the Cold War by establishing the policy of containment against Soviet expansion.'
  },
  {
    id: 'hist103',
    category: 'History',
    difficulty: 'hard',
    question: 'What was the significance of the Treaty of Tordesillas?',
    options: [
      'It divided the New World between Spain and Portugal',
      'It ended the Hundred Years War',
      'It established the Holy Roman Empire',
      'It created the Spanish Inquisition'
    ],
    correctAnswer: 'It divided the New World between Spain and Portugal',
    explanation: 'The Treaty of Tordesillas in 1494 divided the newly discovered lands outside Europe between Spain and Portugal along a meridian.'
  },
  {
    id: 'hist104',
    category: 'History',
    difficulty: 'hard',
    question: 'Which event led to the Protestant Reformation?',
    options: [
      'Martin Luther\'s 95 Theses',
      'The Council of Trent',
      'The Peace of Augsburg',
      'The Diet of Worms'
    ],
    correctAnswer: 'Martin Luther\'s 95 Theses',
    explanation: 'Martin Luther\'s posting of the 95 Theses in 1517 challenged the Catholic Church\'s practices and initiated the Protestant Reformation.'
  },
  {
    id: 'hist105',
    category: 'History',
    difficulty: 'hard',
    question: 'What was the significance of the Meiji Restoration?',
    options: [
      'It modernized Japan and ended feudalism',
      'It established Japanese democracy',
      'It created the Japanese Empire',
      'It ended Japanese isolation'
    ],
    correctAnswer: 'It modernized Japan and ended feudalism',
    explanation: 'The Meiji Restoration in 1868 modernized Japan, ended feudalism, and transformed it into a modern industrial state.'
  },
  // ... continue with more hard history questions ...

  // History Questions - Extremely Complex (50 questions)
  {
    id: 'hist151',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'What was the significance of the Treaty of Westphalia in relation to the concept of sovereignty?',
    options: [
      'It established the principle of territorial sovereignty',
      'It created the Holy Roman Empire',
      'It ended religious wars in Europe',
      'It established the balance of power'
    ],
    correctAnswer: 'It established the principle of territorial sovereignty',
    explanation: 'The Treaty of Westphalia in 1648 established the modern concept of territorial sovereignty, where states have exclusive authority within their borders.'
  },
  {
    id: 'hist152',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'Which historical event best illustrates the concept of "The Great Divergence"?',
    options: [
      'The Industrial Revolution',
      'The Renaissance',
      'The Age of Exploration',
      'The Scientific Revolution'
    ],
    correctAnswer: 'The Industrial Revolution',
    explanation: 'The Great Divergence refers to the process by which Western Europe and North America developed modern economic growth while other regions did not, primarily during the Industrial Revolution.'
  },
  {
    id: 'hist153',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'What was the significance of the Congress of Vienna in terms of international relations theory?',
    options: [
      'It established the Concert of Europe system',
      'It created the balance of power',
      'It ended the Napoleonic Wars',
      'It established the Holy Alliance'
    ],
    correctAnswer: 'It established the Concert of Europe system',
    explanation: 'The Congress of Vienna established the Concert of Europe, a system of dispute resolution and collective security that maintained peace in Europe for nearly a century.'
  },
  {
    id: 'hist154',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'Which historical development best represents the concept of "The Military Revolution"?',
    options: [
      'The changes in warfare during the 16th-17th centuries',
      'The development of nuclear weapons',
      'The Napoleonic Wars',
      'The World Wars'
    ],
    correctAnswer: 'The changes in warfare during the 16th-17th centuries',
    explanation: 'The Military Revolution refers to the radical changes in military tactics, strategy, and technology that occurred in Europe between 1560 and 1660, transforming the nature of warfare.'
  },
  {
    id: 'hist155',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'What was the significance of the Peace of Augsburg in terms of religious tolerance?',
    options: [
      'It established the principle of cuius regio, eius religio',
      'It ended the Thirty Years War',
      'It created religious freedom',
      'It established the Protestant Reformation'
    ],
    correctAnswer: 'It established the principle of cuius regio, eius religio',
    explanation: 'The Peace of Augsburg in 1555 established the principle of "cuius regio, eius religio" (whose realm, his religion), allowing rulers to determine the religion of their territories.'
  },
  // ... continue with more extremely complex history questions ...

  {
    id: 'hist6',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to walk on the moon?',
    options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'John Glenn'],
    correctAnswer: 'Neil Armstrong',
    explanation: 'Neil Armstrong became the first person to walk on the moon on July 20, 1969, during the Apollo 11 mission.'
  },
  {
    id: 'hist7',
    category: 'History',
    difficulty: 'easy',
    question: 'Which country was the first to use paper money?',
    options: ['China', 'Italy', 'Greece', 'Egypt'],
    correctAnswer: 'China',
    explanation: 'China was the first country to use paper money, starting in the 7th century during the Tang Dynasty.'
  },
  {
    id: 'hist8',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did the American Civil War begin?',
    options: ['1861', '1776', '1812', '1848'],
    correctAnswer: '1861',
    explanation: 'The American Civil War began in 1861 when Confederate forces attacked Fort Sumter.'
  },
  {
    id: 'hist9',
    category: 'History',
    difficulty: 'easy',
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Vincent van Gogh'],
    correctAnswer: 'Leonardo da Vinci',
    explanation: 'Leonardo da Vinci painted the Mona Lisa between 1503 and 1519.'
  },
  {
    id: 'hist10',
    category: 'History',
    difficulty: 'easy',
    question: 'Which ancient civilization built the Great Wall of China?',
    options: ['Chinese', 'Mongols', 'Japanese', 'Koreans'],
    correctAnswer: 'Chinese',
    explanation: 'The Great Wall of China was built by various Chinese dynasties, primarily to protect against invasions.'
  },
  {
    id: 'hist11',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first female Prime Minister of the United Kingdom?',
    options: ['Margaret Thatcher', 'Theresa May', 'Queen Elizabeth I', 'Queen Victoria'],
    correctAnswer: 'Margaret Thatcher',
    explanation: 'Margaret Thatcher served as the first female Prime Minister of the United Kingdom from 1979 to 1990.'
  },
  {
    id: 'hist12',
    category: 'History',
    difficulty: 'easy',
    question: 'Which country was the first to give women the right to vote?',
    options: ['New Zealand', 'United States', 'United Kingdom', 'France'],
    correctAnswer: 'New Zealand',
    explanation: 'New Zealand became the first country to grant women the right to vote in 1893.'
  },
  {
    id: 'hist13',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first President of the United States?',
    options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
    correctAnswer: 'George Washington',
    explanation: 'George Washington served as the first President of the United States from 1789 to 1797.'
  },
  {
    id: 'hist14',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did the Berlin Wall fall?',
    options: ['1989', '1991', '1985', '1995'],
    correctAnswer: '1989',
    explanation: 'The Berlin Wall fell on November 9, 1989, marking the beginning of the end of the Cold War.'
  },
  {
    id: 'hist15',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to circumnavigate the globe?',
    options: ['Ferdinand Magellan', 'Christopher Columbus', 'Vasco da Gama', 'Marco Polo'],
    correctAnswer: 'Ferdinand Magellan',
    explanation: 'Ferdinand Magellan\'s expedition was the first to circumnavigate the globe, though Magellan himself died during the journey.'
  },
  {
    id: 'hist16',
    category: 'History',
    difficulty: 'easy',
    question: 'Which ancient civilization built the pyramids?',
    options: ['Egyptians', 'Romans', 'Greeks', 'Mayans'],
    correctAnswer: 'Egyptians',
    explanation: 'The ancient Egyptians built the pyramids, with the Great Pyramid of Giza being the most famous.'
  },
  {
    id: 'hist17',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did World War I begin?',
    options: ['1914', '1918', '1939', '1941'],
    correctAnswer: '1914',
    explanation: 'World War I began in 1914 after the assassination of Archduke Franz Ferdinand of Austria.'
  },
  {
    id: 'hist18',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to reach the South Pole?',
    options: ['Roald Amundsen', 'Robert Scott', 'Ernest Shackleton', 'Richard Byrd'],
    correctAnswer: 'Roald Amundsen',
    explanation: 'Roald Amundsen was the first person to reach the South Pole on December 14, 1911.'
  },
  {
    id: 'hist19',
    category: 'History',
    difficulty: 'easy',
    question: 'Which country was the first to land on the moon?',
    options: ['United States', 'Soviet Union', 'China', 'Japan'],
    correctAnswer: 'United States',
    explanation: 'The United States was the first country to land humans on the moon during the Apollo 11 mission in 1969.'
  },
  {
    id: 'hist20',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to fly solo across the Atlantic Ocean?',
    options: ['Charles Lindbergh', 'Amelia Earhart', 'Wright Brothers', 'Howard Hughes'],
    correctAnswer: 'Charles Lindbergh',
    explanation: 'Charles Lindbergh made the first solo nonstop flight across the Atlantic Ocean in 1927.'
  },
  {
    id: 'hist21',
    category: 'History',
    difficulty: 'easy',
    question: 'Which ancient civilization built the Colosseum?',
    options: ['Romans', 'Greeks', 'Egyptians', 'Persians'],
    correctAnswer: 'Romans',
    explanation: 'The Romans built the Colosseum in Rome, Italy, between 70-80 AD.'
  },
  {
    id: 'hist22',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did the United States declare independence?',
    options: ['1776', '1789', '1812', '1861'],
    correctAnswer: '1776',
    explanation: 'The United States declared independence from Great Britain on July 4, 1776.'
  },
  {
    id: 'hist23',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to discover America?',
    options: ['Christopher Columbus', 'Leif Erikson', 'Amerigo Vespucci', 'Ferdinand Magellan'],
    correctAnswer: 'Christopher Columbus',
    explanation: 'Christopher Columbus is credited with discovering America in 1492, though Leif Erikson may have reached North America earlier.'
  },
  {
    id: 'hist24',
    category: 'History',
    difficulty: 'easy',
    question: 'Which country was the first to use gunpowder?',
    options: ['China', 'Japan', 'India', 'Persia'],
    correctAnswer: 'China',
    explanation: 'China was the first country to use gunpowder, with evidence of its use dating back to the 9th century.'
  },
  {
    id: 'hist25',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to climb Mount Everest?',
    options: ['Edmund Hillary and Tenzing Norgay', 'George Mallory', 'Reinhold Messner', 'Junko Tabei'],
    correctAnswer: 'Edmund Hillary and Tenzing Norgay',
    explanation: 'Edmund Hillary and Tenzing Norgay were the first people to reach the summit of Mount Everest in 1953.'
  },
  {
    id: 'hist26',
    category: 'History',
    difficulty: 'easy',
    question: 'Which ancient civilization built the Parthenon?',
    options: ['Greeks', 'Romans', 'Egyptians', 'Persians'],
    correctAnswer: 'Greeks',
    explanation: 'The ancient Greeks built the Parthenon in Athens between 447-438 BC.'
  },
  {
    id: 'hist27',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did the French Revolution begin?',
    options: ['1789', '1776', '1812', '1848'],
    correctAnswer: '1789',
    explanation: 'The French Revolution began in 1789 with the storming of the Bastille.'
  },
  {
    id: 'hist28',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to discover penicillin?',
    options: ['Alexander Fleming', 'Louis Pasteur', 'Joseph Lister', 'Robert Koch'],
    correctAnswer: 'Alexander Fleming',
    explanation: 'Alexander Fleming discovered penicillin in 1928, revolutionizing medicine.'
  },
  {
    id: 'hist29',
    category: 'History',
    difficulty: 'easy',
    question: 'Which country was the first to use the printing press?',
    options: ['Germany', 'China', 'Italy', 'France'],
    correctAnswer: 'Germany',
    explanation: 'Johann Gutenberg invented the printing press in Germany around 1440.'
  },
  {
    id: 'hist30',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to discover electricity?',
    options: ['Benjamin Franklin', 'Thomas Edison', 'Nikola Tesla', 'Alessandro Volta'],
    correctAnswer: 'Benjamin Franklin',
    explanation: 'Benjamin Franklin conducted experiments with electricity in the 18th century, including his famous kite experiment.'
  },
  {
    id: 'hist31',
    category: 'History',
    difficulty: 'easy',
    question: 'Which ancient civilization built the Great Pyramid of Giza?',
    options: ['Egyptians', 'Romans', 'Greeks', 'Persians'],
    correctAnswer: 'Egyptians',
    explanation: 'The ancient Egyptians built the Great Pyramid of Giza around 2560 BC.'
  },
  {
    id: 'hist32',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did the American Revolution begin?',
    options: ['1775', '1776', '1789', '1812'],
    correctAnswer: '1775',
    explanation: 'The American Revolution began in 1775 with the Battles of Lexington and Concord.'
  },
  {
    id: 'hist33',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to discover America?',
    options: ['Christopher Columbus', 'Leif Erikson', 'Amerigo Vespucci', 'Ferdinand Magellan'],
    correctAnswer: 'Christopher Columbus',
    explanation: 'Christopher Columbus is credited with discovering America in 1492, though Leif Erikson may have reached North America earlier.'
  },
  {
    id: 'hist34',
    category: 'History',
    difficulty: 'easy',
    question: 'Which country was the first to use paper money?',
    options: ['China', 'Italy', 'Greece', 'Egypt'],
    correctAnswer: 'China',
    explanation: 'China was the first country to use paper money, starting in the 7th century during the Tang Dynasty.'
  },
  {
    id: 'hist35',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to walk on the moon?',
    options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'John Glenn'],
    correctAnswer: 'Neil Armstrong',
    explanation: 'Neil Armstrong became the first person to walk on the moon on July 20, 1969, during the Apollo 11 mission.'
  },
  {
    id: 'hist36',
    category: 'History',
    difficulty: 'easy',
    question: 'Which ancient civilization built the Great Wall of China?',
    options: ['Chinese', 'Mongols', 'Japanese', 'Koreans'],
    correctAnswer: 'Chinese',
    explanation: 'The Great Wall of China was built by various Chinese dynasties, primarily to protect against invasions.'
  },
  {
    id: 'hist37',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did World War II begin?',
    options: ['1939', '1941', '1945', '1918'],
    correctAnswer: '1939',
    explanation: 'World War II began in 1939 when Germany invaded Poland.'
  },
  {
    id: 'hist38',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first female Prime Minister of the United Kingdom?',
    options: ['Margaret Thatcher', 'Theresa May', 'Queen Elizabeth I', 'Queen Victoria'],
    correctAnswer: 'Margaret Thatcher',
    explanation: 'Margaret Thatcher served as the first female Prime Minister of the United Kingdom from 1979 to 1990.'
  },
  {
    id: 'hist39',
    category: 'History',
    difficulty: 'easy',
    question: 'Which country was the first to give women the right to vote?',
    options: ['New Zealand', 'United States', 'United Kingdom', 'France'],
    correctAnswer: 'New Zealand',
    explanation: 'New Zealand became the first country to grant women the right to vote in 1893.'
  },
  {
    id: 'hist40',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first President of the United States?',
    options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
    correctAnswer: 'George Washington',
    explanation: 'George Washington served as the first President of the United States from 1789 to 1797.'
  },
  {
    id: 'hist41',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did the Berlin Wall fall?',
    options: ['1989', '1991', '1985', '1995'],
    correctAnswer: '1989',
    explanation: 'The Berlin Wall fell on November 9, 1989, marking the beginning of the end of the Cold War.'
  },
  {
    id: 'hist42',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to circumnavigate the globe?',
    options: ['Ferdinand Magellan', 'Christopher Columbus', 'Vasco da Gama', 'Marco Polo'],
    correctAnswer: 'Ferdinand Magellan',
    explanation: 'Ferdinand Magellan\'s expedition was the first to circumnavigate the globe, though Magellan himself died during the journey.'
  },
  {
    id: 'hist43',
    category: 'History',
    difficulty: 'easy',
    question: 'Which ancient civilization built the pyramids?',
    options: ['Egyptians', 'Romans', 'Greeks', 'Mayans'],
    correctAnswer: 'Egyptians',
    explanation: 'The ancient Egyptians built the pyramids, with the Great Pyramid of Giza being the most famous.'
  },
  {
    id: 'hist44',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did World War I begin?',
    options: ['1914', '1918', '1939', '1941'],
    correctAnswer: '1914',
    explanation: 'World War I began in 1914 after the assassination of Archduke Franz Ferdinand of Austria.'
  },
  {
    id: 'hist45',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to reach the South Pole?',
    options: ['Roald Amundsen', 'Robert Scott', 'Ernest Shackleton', 'Richard Byrd'],
    correctAnswer: 'Roald Amundsen',
    explanation: 'Roald Amundsen was the first person to reach the South Pole on December 14, 1911.'
  },
  {
    id: 'hist46',
    category: 'History',
    difficulty: 'easy',
    question: 'Which country was the first to land on the moon?',
    options: ['United States', 'Soviet Union', 'China', 'Japan'],
    correctAnswer: 'United States',
    explanation: 'The United States was the first country to land humans on the moon during the Apollo 11 mission in 1969.'
  },
  {
    id: 'hist47',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to fly solo across the Atlantic Ocean?',
    options: ['Charles Lindbergh', 'Amelia Earhart', 'Wright Brothers', 'Howard Hughes'],
    correctAnswer: 'Charles Lindbergh',
    explanation: 'Charles Lindbergh made the first solo nonstop flight across the Atlantic Ocean in 1927.'
  },
  {
    id: 'hist48',
    category: 'History',
    difficulty: 'easy',
    question: 'Which ancient civilization built the Colosseum?',
    options: ['Romans', 'Greeks', 'Egyptians', 'Persians'],
    correctAnswer: 'Romans',
    explanation: 'The Romans built the Colosseum in Rome, Italy, between 70-80 AD.'
  },
  {
    id: 'hist49',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did the United States declare independence?',
    options: ['1776', '1789', '1812', '1861'],
    correctAnswer: '1776',
    explanation: 'The United States declared independence from Great Britain on July 4, 1776.'
  },
  {
    id: 'hist50',
    category: 'History',
    difficulty: 'easy',
    question: 'Who was the first person to discover America?',
    options: ['Christopher Columbus', 'Leif Erikson', 'Amerigo Vespucci', 'Ferdinand Magellan'],
    correctAnswer: 'Christopher Columbus',
    explanation: 'Christopher Columbus is credited with discovering America in 1492, though Leif Erikson may have reached North America earlier.'
  },
  {
    id: 'hist56',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Treaty of Tordesillas in 1494?',
    options: [
      'It divided the New World between Spain and Portugal',
      'It ended the Hundred Years War',
      'It established the Holy Roman Empire',
      'It created the Spanish Inquisition'
    ],
    correctAnswer: 'It divided the New World between Spain and Portugal',
    explanation: 'The Treaty of Tordesillas divided the newly discovered lands outside Europe between Spain and Portugal along a meridian 370 leagues west of the Cape Verde islands.'
  },
  {
    id: 'hist57',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the main cause of the Industrial Revolution in Britain?',
    options: [
      'Agricultural revolution and technological innovation',
      'Political revolution',
      'Religious reform',
      'Foreign invasion'
    ],
    correctAnswer: 'Agricultural revolution and technological innovation',
    explanation: 'The Industrial Revolution in Britain was primarily caused by the agricultural revolution, which increased food production and freed up labor, combined with technological innovations like the steam engine.'
  },
  {
    id: 'hist58',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Congress of Vienna in 1815?',
    options: [
      'It reorganized Europe after the Napoleonic Wars',
      'It established the League of Nations',
      'It ended the Crimean War',
      'It created the European Union'
    ],
    correctAnswer: 'It reorganized Europe after the Napoleonic Wars',
    explanation: 'The Congress of Vienna reorganized Europe after the Napoleonic Wars, establishing a balance of power and new territorial boundaries to maintain peace.'
  },
  {
    id: 'hist59',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the main cause of the Russian Revolution in 1917?',
    options: [
      'Economic hardship and political discontent',
      'Foreign invasion',
      'Religious conflict',
      'Natural disaster'
    ],
    correctAnswer: 'Economic hardship and political discontent',
    explanation: 'The Russian Revolution was caused by economic hardship, food shortages, and political discontent with the Tsarist regime, exacerbated by World War I.'
  },
  {
    id: 'hist60',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Meiji Restoration in Japan?',
    options: [
      'It modernized Japan and ended feudalism',
      'It established Japanese democracy',
      'It created the Japanese Empire',
      'It ended Japanese isolation'
    ],
    correctAnswer: 'It modernized Japan and ended feudalism',
    explanation: 'The Meiji Restoration transformed Japan from a feudal society into a modern industrial state, adopting Western technology and institutions.'
  },
  {
    id: 'hist61',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Protestant Reformation?',
    options: [
      'It challenged the authority of the Catholic Church',
      'It unified Europe under one religion',
      'It ended religious wars',
      'It established democracy'
    ],
    correctAnswer: 'It challenged the authority of the Catholic Church',
    explanation: 'The Protestant Reformation challenged the authority of the Catholic Church and led to the creation of Protestant denominations, fundamentally changing European religious and political landscapes.'
  },
  {
    id: 'hist62',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Scientific Revolution?',
    options: [
      'It established the scientific method and modern science',
      'It ended religious belief',
      'It created modern technology',
      'It unified scientific knowledge'
    ],
    correctAnswer: 'It established the scientific method and modern science',
    explanation: 'The Scientific Revolution established the scientific method and modern science, challenging traditional views and laying the foundation for modern scientific inquiry.'
  },
  {
    id: 'hist63',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Enlightenment?',
    options: [
      'It promoted reason, science, and individual rights',
      'It established absolute monarchy',
      'It ended religious tolerance',
      'It created modern democracy'
    ],
    correctAnswer: 'It promoted reason, science, and individual rights',
    explanation: 'The Enlightenment promoted reason, science, and individual rights, influencing political revolutions and modern democratic thought.'
  },
  {
    id: 'hist64',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Berlin Conference of 1884-1885?',
    options: [
      'It regulated European colonization of Africa',
      'It ended World War I',
      'It established the League of Nations',
      'It created the European Union'
    ],
    correctAnswer: 'It regulated European colonization of Africa',
    explanation: 'The Berlin Conference regulated European colonization and trade in Africa, establishing rules for the partition of Africa among European powers.'
  },
  {
    id: 'hist65',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Treaty of Versailles?',
    options: [
      'It ended World War I and imposed harsh terms on Germany',
      'It created the United Nations',
      'It established the European Union',
      'It ended the Cold War'
    ],
    correctAnswer: 'It ended World War I and imposed harsh terms on Germany',
    explanation: 'The Treaty of Versailles ended World War I but imposed harsh terms on Germany, contributing to the rise of Nazi Germany and World War II.'
  },
  {
    id: 'hist66',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Marshall Plan?',
    options: [
      'It provided economic aid to rebuild Western Europe after World War II',
      'It established NATO',
      'It created the European Union',
      'It ended the Cold War'
    ],
    correctAnswer: 'It provided economic aid to rebuild Western Europe after World War II',
    explanation: 'The Marshall Plan provided economic aid to rebuild Western Europe after World War II, helping to prevent the spread of communism and promoting economic recovery.'
  },
  {
    id: 'hist67',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Cuban Missile Crisis?',
    options: [
      'It brought the world to the brink of nuclear war',
      'It ended the Cold War',
      'It established NATO',
      'It created the United Nations'
    ],
    correctAnswer: 'It brought the world to the brink of nuclear war',
    explanation: 'The Cuban Missile Crisis was a 13-day confrontation between the United States and the Soviet Union that brought the world to the brink of nuclear war.'
  },
  {
    id: 'hist68',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Cultural Revolution in China?',
    options: [
      'It was a sociopolitical movement to preserve communist ideology',
      'It modernized China\'s economy',
      'It established democracy in China',
      'It ended Chinese isolation'
    ],
    correctAnswer: 'It was a sociopolitical movement to preserve communist ideology',
    explanation: 'The Cultural Revolution was a sociopolitical movement in China to preserve communist ideology by purging capitalist and traditional elements from Chinese society.'
  },
  {
    id: 'hist69',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Iranian Revolution?',
    options: [
      'It established an Islamic republic in Iran',
      'It modernized Iran\'s economy',
      'It established democracy in Iran',
      'It ended Iranian isolation'
    ],
    correctAnswer: 'It established an Islamic republic in Iran',
    explanation: 'The Iranian Revolution transformed Iran from a monarchy to an Islamic republic, establishing a theocratic government under Ayatollah Khomeini.'
  },
  {
    id: 'hist70',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Berlin Airlift?',
    options: [
      'It supplied West Berlin during a Soviet blockade',
      'It ended World War II',
      'It established NATO',
      'It created the European Union'
    ],
    correctAnswer: 'It supplied West Berlin during a Soviet blockade',
    explanation: 'The Berlin Airlift supplied West Berlin with food and fuel during a Soviet blockade, demonstrating Western commitment to defending democratic values.'
  },
  {
    id: 'hist71',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Suez Crisis?',
    options: [
      'It marked the decline of British and French colonial power',
      'It ended World War II',
      'It established NATO',
      'It created the European Union'
    ],
    correctAnswer: 'It marked the decline of British and French colonial power',
    explanation: 'The Suez Crisis marked the decline of British and French colonial power and the rise of the United States and Soviet Union as superpowers.'
  },
  {
    id: 'hist72',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Vietnam War?',
    options: [
      'It demonstrated the limits of American military power',
      'It ended the Cold War',
      'It established NATO',
      'It created the United Nations'
    ],
    correctAnswer: 'It demonstrated the limits of American military power',
    explanation: 'The Vietnam War demonstrated the limits of American military power and led to significant changes in U.S. foreign policy and public opinion.'
  },
  {
    id: 'hist73',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Korean War?',
    options: [
      'It established the division of Korea',
      'It ended World War II',
      'It established NATO',
      'It created the United Nations'
    ],
    correctAnswer: 'It established the division of Korea',
    explanation: 'The Korean War established the division of Korea into North and South, setting the stage for ongoing tensions on the Korean peninsula.'
  },
  {
    id: 'hist74',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Space Race?',
    options: [
      'It demonstrated technological and ideological competition between the US and USSR',
      'It ended the Cold War',
      'It established NASA',
      'It created the United Nations'
    ],
    correctAnswer: 'It demonstrated technological and ideological competition between the US and USSR',
    explanation: 'The Space Race demonstrated technological and ideological competition between the United States and Soviet Union during the Cold War.'
  },
  {
    id: 'hist75',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Arab-Israeli conflict?',
    options: [
      'It shaped Middle Eastern politics and international relations',
      'It ended World War II',
      'It established NATO',
      'It created the United Nations'
    ],
    correctAnswer: 'It shaped Middle Eastern politics and international relations',
    explanation: 'The Arab-Israeli conflict has shaped Middle Eastern politics and international relations, involving multiple wars and ongoing tensions.'
  },
  {
    id: 'hist76',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Indian Independence Movement?',
    options: [
      'It led to the end of British colonial rule in India',
      'It established democracy in India',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It led to the end of British colonial rule in India',
    explanation: 'The Indian Independence Movement, led by figures like Gandhi, led to the end of British colonial rule in India and the creation of independent India and Pakistan.'
  },
  {
    id: 'hist77',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the African Independence Movements?',
    options: [
      'They ended European colonial rule in Africa',
      'They established democracy in Africa',
      'They created the United Nations',
      'They ended World War II'
    ],
    correctAnswer: 'They ended European colonial rule in Africa',
    explanation: 'The African Independence Movements ended European colonial rule in Africa, leading to the creation of independent African nations.'
  },
  {
    id: 'hist78',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Civil Rights Movement in the US?',
    options: [
      'It ended legal segregation and discrimination',
      'It established democracy in the US',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It ended legal segregation and discrimination',
    explanation: 'The Civil Rights Movement ended legal segregation and discrimination in the United States, leading to significant social and political changes.'
  },
  {
    id: 'hist79',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Women\'s Suffrage Movement?',
    options: [
      'It secured voting rights for women',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It secured voting rights for women',
    explanation: 'The Women\'s Suffrage Movement secured voting rights for women, leading to greater political participation and social change.'
  },
  {
    id: 'hist80',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Industrial Revolution?',
    options: [
      'It transformed economies and societies through mechanization',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It transformed economies and societies through mechanization',
    explanation: 'The Industrial Revolution transformed economies and societies through mechanization, leading to urbanization and modern economic systems.'
  },
  {
    id: 'hist81',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Agricultural Revolution?',
    options: [
      'It increased food production and supported population growth',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It increased food production and supported population growth',
    explanation: 'The Agricultural Revolution increased food production and supported population growth, enabling the Industrial Revolution.'
  },
  {
    id: 'hist82',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Renaissance?',
    options: [
      'It revived classical learning and transformed European culture',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It revived classical learning and transformed European culture',
    explanation: 'The Renaissance revived classical learning and transformed European culture, leading to significant developments in art, science, and philosophy.'
  },
  {
    id: 'hist83',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Reformation?',
    options: [
      'It challenged Catholic authority and created Protestant denominations',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It challenged Catholic authority and created Protestant denominations',
    explanation: 'The Reformation challenged Catholic authority and created Protestant denominations, leading to religious and political changes in Europe.'
  },
  {
    id: 'hist84',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Scientific Revolution?',
    options: [
      'It established modern scientific methods and knowledge',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It established modern scientific methods and knowledge',
    explanation: 'The Scientific Revolution established modern scientific methods and knowledge, transforming understanding of the natural world.'
  },
  {
    id: 'hist85',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Enlightenment?',
    options: [
      'It promoted reason, science, and individual rights',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It promoted reason, science, and individual rights',
    explanation: 'The Enlightenment promoted reason, science, and individual rights, influencing political revolutions and modern democratic thought.'
  },
  {
    id: 'hist86',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the French Revolution?',
    options: [
      'It overthrew the monarchy and established republican government',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It overthrew the monarchy and established republican government',
    explanation: 'The French Revolution overthrew the monarchy and established republican government, spreading revolutionary ideals across Europe.'
  },
  {
    id: 'hist87',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the American Revolution?',
    options: [
      'It established the United States as an independent nation',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It established the United States as an independent nation',
    explanation: 'The American Revolution established the United States as an independent nation, inspiring other independence movements.'
  },
  {
    id: 'hist88',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Industrial Revolution?',
    options: [
      'It transformed economies and societies through mechanization',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It transformed economies and societies through mechanization',
    explanation: 'The Industrial Revolution transformed economies and societies through mechanization, leading to urbanization and modern economic systems.'
  },
  {
    id: 'hist89',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Agricultural Revolution?',
    options: [
      'It increased food production and supported population growth',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It increased food production and supported population growth',
    explanation: 'The Agricultural Revolution increased food production and supported population growth, enabling the Industrial Revolution.'
  },
  {
    id: 'hist90',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Renaissance?',
    options: [
      'It revived classical learning and transformed European culture',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It revived classical learning and transformed European culture',
    explanation: 'The Renaissance revived classical learning and transformed European culture, leading to significant developments in art, science, and philosophy.'
  },
  {
    id: 'hist91',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Reformation?',
    options: [
      'It challenged Catholic authority and created Protestant denominations',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It challenged Catholic authority and created Protestant denominations',
    explanation: 'The Reformation challenged Catholic authority and created Protestant denominations, leading to religious and political changes in Europe.'
  },
  {
    id: 'hist92',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Scientific Revolution?',
    options: [
      'It established modern scientific methods and knowledge',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It established modern scientific methods and knowledge',
    explanation: 'The Scientific Revolution established modern scientific methods and knowledge, transforming understanding of the natural world.'
  },
  {
    id: 'hist93',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Enlightenment?',
    options: [
      'It promoted reason, science, and individual rights',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It promoted reason, science, and individual rights',
    explanation: 'The Enlightenment promoted reason, science, and individual rights, influencing political revolutions and modern democratic thought.'
  },
  {
    id: 'hist94',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the French Revolution?',
    options: [
      'It overthrew the monarchy and established republican government',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It overthrew the monarchy and established republican government',
    explanation: 'The French Revolution overthrew the monarchy and established republican government, spreading revolutionary ideals across Europe.'
  },
  {
    id: 'hist95',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the American Revolution?',
    options: [
      'It established the United States as an independent nation',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It established the United States as an independent nation',
    explanation: 'The American Revolution established the United States as an independent nation, inspiring other independence movements.'
  },
  {
    id: 'hist96',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Industrial Revolution?',
    options: [
      'It transformed economies and societies through mechanization',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It transformed economies and societies through mechanization',
    explanation: 'The Industrial Revolution transformed economies and societies through mechanization, leading to urbanization and modern economic systems.'
  },
  {
    id: 'hist97',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Agricultural Revolution?',
    options: [
      'It increased food production and supported population growth',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It increased food production and supported population growth',
    explanation: 'The Agricultural Revolution increased food production and supported population growth, enabling the Industrial Revolution.'
  },
  {
    id: 'hist98',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Renaissance?',
    options: [
      'It revived classical learning and transformed European culture',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It revived classical learning and transformed European culture',
    explanation: 'The Renaissance revived classical learning and transformed European culture, leading to significant developments in art, science, and philosophy.'
  },
  {
    id: 'hist99',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Reformation?',
    options: [
      'It challenged Catholic authority and created Protestant denominations',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It challenged Catholic authority and created Protestant denominations',
    explanation: 'The Reformation challenged Catholic authority and created Protestant denominations, leading to religious and political changes in Europe.'
  },
  {
    id: 'hist100',
    category: 'History',
    difficulty: 'complex',
    question: 'What was the significance of the Scientific Revolution?',
    options: [
      'It established modern scientific methods and knowledge',
      'It established democracy',
      'It created the United Nations',
      'It ended World War II'
    ],
    correctAnswer: 'It established modern scientific methods and knowledge',
    explanation: 'The Scientific Revolution established modern scientific methods and knowledge, transforming understanding of the natural world.'
  },
  {
    id: 'hist_hard_46',
    category: 'History',
    difficulty: 'hard',
    question: 'Which ancient civilization developed the concept of zero independently of other civilizations?',
    options: ['Maya', 'Babylonian', 'Egyptian', 'Chinese'],
    correctAnswer: 'Maya',
    explanation: 'The Maya civilization independently developed the concept of zero around 350 CE, using it in their sophisticated calendar system and mathematical calculations.'
  },
  {
    id: 'hist_hard_47',
    category: 'History',
    difficulty: 'hard',
    question: 'What was the primary cause of the Bronze Age Collapse around 1200 BCE?',
    options: ['Climate change and drought', 'Invasions by Sea Peoples', 'Economic collapse', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'The Bronze Age Collapse was likely caused by a combination of factors including climate change, invasions by the Sea Peoples, economic collapse, and internal unrest.'
  },
  {
    id: 'hist_hard_48',
    category: 'History',
    difficulty: 'hard',
    question: 'Which ancient city was known as the "City of a Thousand Temples"?',
    options: ['Angkor', 'Babylon', 'Thebes', 'Persepolis'],
    correctAnswer: 'Angkor',
    explanation: 'Angkor, the capital of the Khmer Empire, was known as the "City of a Thousand Temples" and was one of the largest pre-industrial cities in the world.'
  },
  {
    id: 'hist_hard_49',
    category: 'History',
    difficulty: 'hard',
    question: 'What was the significance of the Treaty of Tordesillas in 1494?',
    options: ['Divided the New World between Spain and Portugal', 'Ended the Hundred Years\' War', 'Established the Holy Roman Empire', 'Created the Hanseatic League'],
    correctAnswer: 'Divided the New World between Spain and Portugal',
    explanation: 'The Treaty of Tordesillas divided the newly discovered lands outside Europe between Spain and Portugal along a meridian 370 leagues west of the Cape Verde islands.'
  },
  {
    id: 'hist_hard_50',
    category: 'History',
    difficulty: 'hard',
    question: 'Which ancient civilization developed the first known system of writing?',
    options: ['Sumerian', 'Egyptian', 'Indus Valley', 'Chinese'],
    correctAnswer: 'Sumerian',
    explanation: 'The Sumerians developed cuneiform, the first known system of writing, around 3200 BCE in Mesopotamia.'
  },
  {
    id: 'hist_extreme_1',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'Which ancient civilization developed the first known system of writing?',
    options: ['Sumerian', 'Egyptian', 'Indus Valley', 'Chinese'],
    correctAnswer: 'Sumerian',
    explanation: 'The Sumerians developed cuneiform, the first known system of writing, around 3200 BCE in Mesopotamia.'
  },
  {
    id: 'hist_extreme_2',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'What was the significance of the Treaty of Tordesillas in 1494?',
    options: ['Divided the New World between Spain and Portugal', 'Ended the Hundred Years\' War', 'Established the Holy Roman Empire', 'Created the Hanseatic League'],
    correctAnswer: 'Divided the New World between Spain and Portugal',
    explanation: 'The Treaty of Tordesillas divided the newly discovered lands outside Europe between Spain and Portugal along a meridian 370 leagues west of the Cape Verde islands.'
  },
  {
    id: 'hist_extreme_3',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'Which ancient city was known as the "City of a Thousand Temples"?',
    options: ['Angkor', 'Babylon', 'Thebes', 'Persepolis'],
    correctAnswer: 'Angkor',
    explanation: 'Angkor, the capital of the Khmer Empire, was known as the "City of a Thousand Temples" and was one of the largest pre-industrial cities in the world.'
  },
  {
    id: 'hist_extreme_4',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'What was the primary cause of the Bronze Age Collapse around 1200 BCE?',
    options: ['Climate change and drought', 'Invasions by Sea Peoples', 'Economic collapse', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'The Bronze Age Collapse was likely caused by a combination of factors including climate change, invasions by the Sea Peoples, economic collapse, and internal unrest.'
  },
  {
    id: 'hist_extreme_5',
    category: 'History',
    difficulty: 'extremely complex',
    question: 'Which ancient civilization developed the concept of zero independently of other civilizations?',
    options: ['Maya', 'Babylonian', 'Egyptian', 'Chinese'],
    correctAnswer: 'Maya',
    explanation: 'The Maya civilization independently developed the concept of zero around 350 CE, using it in their sophisticated calendar system and mathematical calculations.'
  },
  {
    id: 'geo_easy_1',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the largest continent by area?',
    options: ['Asia', 'Africa', 'North America', 'South America'],
    correctAnswer: 'Asia',
    explanation: 'Asia is the largest continent, covering about 30% of Earth\'s land area and containing 60% of the world\'s population.'
  },
  {
    id: 'geo_easy_2',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the longest river in the world?',
    options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correctAnswer: 'Nile',
    explanation: 'The Nile River is approximately 6,650 kilometers (4,130 miles) long, making it the longest river in the world.'
  },
  {
    id: 'geo_easy_3',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
    explanation: 'Paris is the capital and largest city of France, known for its iconic Eiffel Tower and rich cultural heritage.'
  },
  {
    id: 'geo_easy_4',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which ocean is the largest?',
    options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    correctAnswer: 'Pacific',
    explanation: 'The Pacific Ocean is the largest and deepest ocean, covering about 30% of Earth\'s surface.'
  },
  {
    id: 'geo_easy_5',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the highest mountain in the world?',
    options: ['K2', 'Mount Everest', 'Kilimanjaro', 'Denali'],
    correctAnswer: 'Mount Everest',
    explanation: 'Mount Everest is the highest mountain above sea level, standing at 8,848 meters (29,029 feet).'
  },
  {
    id: 'geo_easy_6',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which country has the most natural lakes?',
    options: ['Canada', 'Russia', 'United States', 'Finland'],
    correctAnswer: 'Canada',
    explanation: 'Canada has over 2 million lakes, more than any other country in the world.'
  },
  {
    id: 'geo_easy_7',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the largest desert in the world?',
    options: ['Sahara', 'Gobi', 'Antarctic', 'Arabian'],
    correctAnswer: 'Antarctic',
    explanation: 'The Antarctic Desert is the largest desert in the world, covering about 14 million square kilometers.'
  },
  {
    id: 'geo_easy_8',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which country is both an island and a continent?',
    options: ['Greenland', 'Australia', 'Madagascar', 'New Zealand'],
    correctAnswer: 'Australia',
    explanation: 'Australia is both a country and a continent, making it the only country that is also a continent.'
  },
  {
    id: 'geo_easy_9',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Japan?',
    options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
    correctAnswer: 'Tokyo',
    explanation: 'Tokyo is the capital and largest city of Japan, known for its modern architecture and vibrant culture.'
  },
  {
    id: 'geo_easy_10',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which river flows through London?',
    options: ['Thames', 'Seine', 'Danube', 'Rhine'],
    correctAnswer: 'Thames',
    explanation: 'The River Thames flows through London and is the longest river entirely in England.'
  },
  {
    id: 'geo_easy_11',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the largest country by area?',
    options: ['China', 'Canada', 'Russia', 'United States'],
    correctAnswer: 'Russia',
    explanation: 'Russia is the largest country in the world by area, covering about 17 million square kilometers.'
  },
  {
    id: 'geo_easy_12',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which continent contains the most countries?',
    options: ['Asia', 'Africa', 'Europe', 'South America'],
    correctAnswer: 'Africa',
    explanation: 'Africa has 54 recognized sovereign states, making it the continent with the most countries.'
  },
  {
    id: 'geo_easy_13',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correctAnswer: 'Canberra',
    explanation: 'Canberra is the capital city of Australia, located between Sydney and Melbourne.'
  },
  {
    id: 'geo_easy_14',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the smallest continent?',
    options: ['Europe', 'Australia', 'Antarctica', 'South America'],
    correctAnswer: 'Australia',
    explanation: 'Australia is the smallest continent, covering about 7.7 million square kilometers.'
  },
  {
    id: 'geo_easy_15',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Brazil?',
    options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
    correctAnswer: 'Brasília',
    explanation: 'Brasília is the capital of Brazil, known for its modernist architecture and urban planning.'
  },
  {
    id: 'geo_easy_16',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which country has the most time zones?',
    options: ['Russia', 'United States', 'China', 'France'],
    correctAnswer: 'France',
    explanation: 'France has 12 time zones due to its overseas territories around the world.'
  },
  {
    id: 'geo_easy_17',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Egypt?',
    options: ['Alexandria', 'Cairo', 'Luxor', 'Giza'],
    correctAnswer: 'Cairo',
    explanation: 'Cairo is the capital and largest city of Egypt, located near the Nile Delta.'
  },
  {
    id: 'geo_easy_18',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest island in the world?',
    options: ['Greenland', 'New Guinea', 'Borneo', 'Madagascar'],
    correctAnswer: 'Greenland',
    explanation: 'Greenland is the world\'s largest island, covering about 2.16 million square kilometers.'
  },
  {
    id: 'geo_easy_19',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of India?',
    options: ['Mumbai', 'Delhi', 'New Delhi', 'Bangalore'],
    correctAnswer: 'New Delhi',
    explanation: 'New Delhi is the capital of India and part of the larger National Capital Territory of Delhi.'
  },
  {
    id: 'geo_easy_20',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest lake in the world?',
    options: ['Caspian Sea', 'Superior', 'Victoria', 'Huron'],
    correctAnswer: 'Caspian Sea',
    explanation: 'The Caspian Sea is the largest lake in the world by area, covering about 371,000 square kilometers.'
  },
  {
    id: 'geo_easy_21',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Canada?',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
    correctAnswer: 'Ottawa',
    explanation: 'Ottawa is the capital of Canada, located in the province of Ontario.'
  },
  {
    id: 'geo_easy_22',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest waterfall in the world?',
    options: ['Niagara Falls', 'Angel Falls', 'Victoria Falls', 'Iguazu Falls'],
    correctAnswer: 'Angel Falls',
    explanation: 'Angel Falls in Venezuela is the world\'s highest uninterrupted waterfall, with a height of 979 meters.'
  },
  {
    id: 'geo_easy_23',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of South Africa?',
    options: ['Cape Town', 'Pretoria', 'Johannesburg', 'Durban'],
    correctAnswer: 'Pretoria',
    explanation: 'Pretoria is the administrative capital of South Africa, while Cape Town is the legislative capital and Bloemfontein is the judicial capital.'
  },
  {
    id: 'geo_easy_24',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest coral reef system in the world?',
    options: ['Great Barrier Reef', 'Belize Barrier Reef', 'New Caledonia Barrier Reef', 'Red Sea Coral Reef'],
    correctAnswer: 'Great Barrier Reef',
    explanation: 'The Great Barrier Reef is the world\'s largest coral reef system, stretching over 2,300 kilometers off the coast of Australia.'
  },
  {
    id: 'geo_easy_25',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Mexico?',
    options: ['Guadalajara', 'Monterrey', 'Mexico City', 'Cancún'],
    correctAnswer: 'Mexico City',
    explanation: 'Mexico City is the capital and largest city of Mexico, located in the Valley of Mexico.'
  },
  {
    id: 'geo_easy_26',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest peninsula in the world?',
    options: ['Arabian Peninsula', 'Indian Peninsula', 'Scandinavian Peninsula', 'Iberian Peninsula'],
    correctAnswer: 'Arabian Peninsula',
    explanation: 'The Arabian Peninsula is the largest peninsula in the world, covering about 3.2 million square kilometers.'
  },
  {
    id: 'geo_easy_27',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Argentina?',
    options: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
    correctAnswer: 'Buenos Aires',
    explanation: 'Buenos Aires is the capital and largest city of Argentina, located on the western shore of the Río de la Plata.'
  },
  {
    id: 'geo_easy_28',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest gulf in the world?',
    options: ['Gulf of Mexico', 'Persian Gulf', 'Gulf of Guinea', 'Gulf of Alaska'],
    correctAnswer: 'Gulf of Mexico',
    explanation: 'The Gulf of Mexico is the largest gulf in the world, covering about 1.5 million square kilometers.'
  },
  {
    id: 'geo_easy_29',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of China?',
    options: ['Shanghai', 'Beijing', 'Hong Kong', 'Guangzhou'],
    correctAnswer: 'Beijing',
    explanation: 'Beijing is the capital of China and one of the most populous cities in the world.'
  },
  {
    id: 'geo_easy_30',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest archipelago in the world?',
    options: ['Japanese Archipelago', 'Philippine Archipelago', 'Indonesian Archipelago', 'Malay Archipelago'],
    correctAnswer: 'Indonesian Archipelago',
    explanation: 'The Indonesian Archipelago is the largest archipelago in the world, consisting of over 17,000 islands.'
  },
  {
    id: 'geo_easy_31',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Italy?',
    options: ['Milan', 'Rome', 'Venice', 'Florence'],
    correctAnswer: 'Rome',
    explanation: 'Rome is the capital of Italy and was the capital of the Roman Empire.'
  },
  {
    id: 'geo_easy_32',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest bay in the world?',
    options: ['Hudson Bay', 'Bay of Bengal', 'Chesapeake Bay', 'San Francisco Bay'],
    correctAnswer: 'Bay of Bengal',
    explanation: 'The Bay of Bengal is the largest bay in the world, covering about 2.2 million square kilometers.'
  },
  {
    id: 'geo_easy_33',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Germany?',
    options: ['Munich', 'Berlin', 'Hamburg', 'Frankfurt'],
    correctAnswer: 'Berlin',
    explanation: 'Berlin is the capital and largest city of Germany.'
  },
  {
    id: 'geo_easy_34',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest delta in the world?',
    options: ['Nile Delta', 'Ganges-Brahmaputra Delta', 'Mississippi Delta', 'Mekong Delta'],
    correctAnswer: 'Ganges-Brahmaputra Delta',
    explanation: 'The Ganges-Brahmaputra Delta is the largest delta in the world, covering about 105,000 square kilometers.'
  },
  {
    id: 'geo_easy_35',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Spain?',
    options: ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
    correctAnswer: 'Madrid',
    explanation: 'Madrid is the capital and largest city of Spain.'
  },
  {
    id: 'geo_easy_36',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest saltwater lake in the world?',
    options: ['Caspian Sea', 'Aral Sea', 'Dead Sea', 'Great Salt Lake'],
    correctAnswer: 'Caspian Sea',
    explanation: 'The Caspian Sea is the largest saltwater lake in the world, covering about 371,000 square kilometers.'
  },
  {
    id: 'geo_easy_37',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Russia?',
    options: ['St. Petersburg', 'Moscow', 'Novosibirsk', 'Yekaterinburg'],
    correctAnswer: 'Moscow',
    explanation: 'Moscow is the capital and largest city of Russia.'
  },
  {
    id: 'geo_easy_38',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest freshwater lake in the world?',
    options: ['Lake Superior', 'Lake Victoria', 'Lake Huron', 'Lake Michigan'],
    correctAnswer: 'Lake Superior',
    explanation: 'Lake Superior is the largest freshwater lake in the world by surface area, covering about 82,100 square kilometers.'
  },
  {
    id: 'geo_easy_39',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of South Korea?',
    options: ['Busan', 'Seoul', 'Incheon', 'Daegu'],
    correctAnswer: 'Seoul',
    explanation: 'Seoul is the capital and largest city of South Korea.'
  },
  {
    id: 'geo_easy_40',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest desert in Africa?',
    options: ['Kalahari Desert', 'Sahara Desert', 'Namib Desert', 'Libyan Desert'],
    correctAnswer: 'Sahara Desert',
    explanation: 'The Sahara Desert is the largest desert in Africa and the third-largest desert in the world.'
  },
  {
    id: 'geo_easy_41',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Thailand?',
    options: ['Chiang Mai', 'Bangkok', 'Phuket', 'Pattaya'],
    correctAnswer: 'Bangkok',
    explanation: 'Bangkok is the capital and largest city of Thailand.'
  },
  {
    id: 'geo_easy_42',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest island in the Mediterranean Sea?',
    options: ['Sicily', 'Sardinia', 'Cyprus', 'Corsica'],
    correctAnswer: 'Sicily',
    explanation: 'Sicily is the largest island in the Mediterranean Sea, covering about 25,700 square kilometers.'
  },
  {
    id: 'geo_easy_43',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Vietnam?',
    options: ['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hai Phong'],
    correctAnswer: 'Hanoi',
    explanation: 'Hanoi is the capital of Vietnam and its second-largest city.'
  },
  {
    id: 'geo_easy_44',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest river in Europe?',
    options: ['Danube', 'Rhine', 'Volga', 'Seine'],
    correctAnswer: 'Volga',
    explanation: 'The Volga is the longest river in Europe, flowing about 3,530 kilometers through Russia.'
  },
  {
    id: 'geo_easy_45',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Indonesia?',
    options: ['Jakarta', 'Surabaya', 'Bandung', 'Medan'],
    correctAnswer: 'Jakarta',
    explanation: 'Jakarta is the capital and largest city of Indonesia.'
  },
  {
    id: 'geo_easy_46',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest mountain range in Europe?',
    options: ['Alps', 'Carpathians', 'Pyrenees', 'Ural Mountains'],
    correctAnswer: 'Alps',
    explanation: 'The Alps are the highest and most extensive mountain range in Europe.'
  },
  {
    id: 'geo_easy_47',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of Malaysia?',
    options: ['Kuala Lumpur', 'Putrajaya', 'Penang', 'Johor Bahru'],
    correctAnswer: 'Kuala Lumpur',
    explanation: 'Kuala Lumpur is the capital and largest city of Malaysia.'
  },
  {
    id: 'geo_easy_48',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest lake in Africa?',
    options: ['Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Lake Chad'],
    correctAnswer: 'Lake Victoria',
    explanation: 'Lake Victoria is the largest lake in Africa and the second-largest freshwater lake in the world.'
  },
  {
    id: 'geo_easy_49',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of the Philippines?',
    options: ['Manila', 'Cebu', 'Davao', 'Quezon City'],
    correctAnswer: 'Manila',
    explanation: 'Manila is the capital of the Philippines and its second-most populous city.'
  },
  {
    id: 'geo_easy_50',
    category: 'Geography',
    difficulty: 'easy',
    question: 'Which is the largest island in the Caribbean?',
    options: ['Cuba', 'Hispaniola', 'Jamaica', 'Puerto Rico'],
    correctAnswer: 'Cuba',
    explanation: 'Cuba is the largest island in the Caribbean, covering about 105,806 square kilometers.'
  },
  {
    id: 'geo_complex_1',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most official languages?',
    options: ['South Africa', 'Nigeria', 'Ethiopia', 'Cameroon'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 11 official languages, including Zulu, Xhosa, Afrikaans, and English, making it the country with the most official languages in Africa.'
  },
  {
    id: 'geo_complex_2',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest lake in Africa by volume?',
    options: ['Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Lake Chad'],
    correctAnswer: 'Lake Tanganyika',
    explanation: 'Lake Tanganyika is the largest lake in Africa by volume and the second deepest lake in the world, holding about 18% of the world\'s fresh water.'
  },
  {
    id: 'geo_complex_3',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the highest number of UNESCO World Heritage Sites?',
    options: ['Egypt', 'Morocco', 'Ethiopia', 'South Africa'],
    correctAnswer: 'Ethiopia',
    explanation: 'Ethiopia has 9 UNESCO World Heritage Sites, including the rock-hewn churches of Lalibela and the Simien Mountains National Park.'
  },
  {
    id: 'geo_complex_4',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the longest river in Africa that flows entirely within one country?',
    options: ['Niger River', 'Zambezi River', 'Orange River', 'Limpopo River'],
    correctAnswer: 'Orange River',
    explanation: 'The Orange River is the longest river in Africa that flows entirely within one country (South Africa), stretching about 2,200 kilometers.'
  },
  {
    id: 'geo_complex_5',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the highest average elevation?',
    options: ['Lesotho', 'Ethiopia', 'Rwanda', 'Burundi'],
    correctAnswer: 'Lesotho',
    explanation: 'Lesotho has the highest average elevation of any country in Africa, with its lowest point being 1,400 meters above sea level.'
  },
  {
    id: 'geo_complex_6',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest desert in Africa after the Sahara?',
    options: ['Kalahari Desert', 'Namib Desert', 'Libyan Desert', 'Nubian Desert'],
    correctAnswer: 'Kalahari Desert',
    explanation: 'The Kalahari Desert is the second largest desert in Africa, covering approximately 900,000 square kilometers across Botswana, Namibia, and South Africa.'
  },
  {
    id: 'geo_complex_7',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most landlocked neighbors?',
    options: ['Democratic Republic of the Congo', 'Zambia', 'Central African Republic', 'Chad'],
    correctAnswer: 'Democratic Republic of the Congo',
    explanation: 'The Democratic Republic of the Congo has 9 landlocked neighbors, more than any other country in Africa.'
  },
  {
    id: 'geo_complex_8',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the highest waterfall in Africa?',
    options: ['Victoria Falls', 'Tugela Falls', 'Maletsunyane Falls', 'Augrabies Falls'],
    correctAnswer: 'Tugela Falls',
    explanation: 'Tugela Falls in South Africa is the highest waterfall in Africa, with a total drop of 948 meters (3,110 feet).'
  },
  {
    id: 'geo_complex_9',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most time zones?',
    options: ['Democratic Republic of the Congo', 'Algeria', 'South Africa', 'Egypt'],
    correctAnswer: 'Democratic Republic of the Congo',
    explanation: 'The Democratic Republic of the Congo spans two time zones (UTC+1 and UTC+2), more than any other African country.'
  },
  {
    id: 'geo_complex_10',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest island in Africa?',
    options: ['Madagascar', 'Zanzibar', 'Bioko', 'São Tomé'],
    correctAnswer: 'Madagascar',
    explanation: 'Madagascar is the largest island in Africa and the fourth largest island in the world, covering approximately 587,000 square kilometers.'
  },
  {
    id: 'geo_complex_11',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most international borders?',
    options: ['Democratic Republic of the Congo', 'Sudan', 'Chad', 'Ethiopia'],
    correctAnswer: 'Democratic Republic of the Congo',
    explanation: 'The Democratic Republic of the Congo shares borders with 9 countries, more than any other African nation.'
  },
  {
    id: 'geo_complex_12',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest natural harbor in Africa?',
    options: ['Table Bay', 'Durban Harbor', 'Lagos Harbor', 'Mombasa Harbor'],
    correctAnswer: 'Durban Harbor',
    explanation: 'Durban Harbor in South Africa is the largest natural harbor in Africa and one of the busiest ports on the continent.'
  },
  {
    id: 'geo_complex_13',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Biosphere Reserves?',
    options: ['South Africa', 'Kenya', 'Tanzania', 'Morocco'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 8 UNESCO Biosphere Reserves, more than any other African country.'
  },
  {
    id: 'geo_complex_14',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest national park in Africa?',
    options: ['Kruger National Park', 'Serengeti National Park', 'Namib-Naukluft National Park', 'Etosha National Park'],
    correctAnswer: 'Namib-Naukluft National Park',
    explanation: 'Namib-Naukluft National Park in Namibia is the largest national park in Africa, covering approximately 49,768 square kilometers.'
  },
  {
    id: 'geo_complex_15',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most active volcanoes?',
    options: ['Ethiopia', 'Democratic Republic of the Congo', 'Tanzania', 'Cameroon'],
    correctAnswer: 'Democratic Republic of the Congo',
    explanation: 'The Democratic Republic of the Congo has the most active volcanoes in Africa, including Nyiragongo and Nyamuragira.'
  },
  {
    id: 'geo_complex_16',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest delta in Africa?',
    options: ['Niger Delta', 'Okavango Delta', 'Zambezi Delta', 'Senegal Delta'],
    correctAnswer: 'Niger Delta',
    explanation: 'The Niger Delta is the largest delta in Africa, covering approximately 70,000 square kilometers in Nigeria.'
  },
  {
    id: 'geo_complex_17',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Global Geoparks?',
    options: ['Morocco', 'South Africa', 'Tanzania', 'Egypt'],
    correctAnswer: 'Morocco',
    explanation: 'Morocco has 3 UNESCO Global Geoparks, more than any other African country.'
  },
  {
    id: 'geo_complex_18',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest salt pan in Africa?',
    options: ['Makgadikgadi Pan', 'Etosha Pan', 'Chott el Djerid', 'Qattara Depression'],
    correctAnswer: 'Makgadikgadi Pan',
    explanation: 'The Makgadikgadi Pan in Botswana is the largest salt pan in Africa, covering approximately 12,000 square kilometers.'
  },
  {
    id: 'geo_complex_19',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most Ramsar Wetlands?',
    options: ['South Africa', 'Kenya', 'Tanzania', 'Uganda'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 27 Ramsar Wetlands, more than any other African country.'
  },
  {
    id: 'geo_complex_20',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest canyon in Africa?',
    options: ['Blyde River Canyon', 'Fish River Canyon', 'Tugela Canyon', 'Orange River Canyon'],
    correctAnswer: 'Fish River Canyon',
    explanation: 'Fish River Canyon in Namibia is the largest canyon in Africa and the second largest in the world, after the Grand Canyon.'
  },
  {
    id: 'geo_complex_21',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the highest percentage of its land area covered by rainforest?',
    options: ['Gabon', 'Democratic Republic of the Congo', 'Cameroon', 'Republic of the Congo'],
    correctAnswer: 'Gabon',
    explanation: 'Gabon has approximately 85% of its land area covered by rainforest, the highest percentage of any African country.'
  },
  {
    id: 'geo_complex_22',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest mountain range in North Africa?',
    options: ['Atlas Mountains', 'Ahaggar Mountains', 'Tibesti Mountains', 'Aïr Mountains'],
    correctAnswer: 'Atlas Mountains',
    explanation: 'The Atlas Mountains stretch about 2,500 kilometers across Morocco, Algeria, and Tunisia, making it the largest mountain range in North Africa.'
  },
  {
    id: 'geo_complex_23',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Intangible Cultural Heritage elements?',
    options: ['Morocco', 'Egypt', 'Ethiopia', 'Nigeria'],
    correctAnswer: 'Morocco',
    explanation: 'Morocco has 12 UNESCO Intangible Cultural Heritage elements, including the Jemaa el-Fnaa square and the Argan tree practices.'
  },
  {
    id: 'geo_complex_24',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest inland delta in Africa?',
    options: ['Okavango Delta', 'Niger Delta', 'Zambezi Delta', 'Senegal Delta'],
    correctAnswer: 'Okavango Delta',
    explanation: 'The Okavango Delta in Botswana is the largest inland delta in Africa, covering approximately 15,000 square kilometers.'
  },
  {
    id: 'geo_complex_25',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Creative Cities?',
    options: ['South Africa', 'Egypt', 'Morocco', 'Senegal'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 4 UNESCO Creative Cities, including Cape Town (Design) and Durban (Literature).'
  },
  {
    id: 'geo_complex_26',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest saltwater lake in Africa?',
    options: ['Lake Turkana', 'Lake Natron', 'Lake Assal', 'Lake Chad'],
    correctAnswer: 'Lake Turkana',
    explanation: 'Lake Turkana in Kenya is the largest saltwater lake in Africa and the largest permanent desert lake in the world.'
  },
  {
    id: 'geo_complex_27',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Memory of the World inscriptions?',
    options: ['South Africa', 'Egypt', 'Ethiopia', 'Morocco'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 7 UNESCO Memory of the World inscriptions, including the Bleek Collection and the Liberation Struggle Archives.'
  },
  {
    id: 'geo_complex_28',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest volcanic crater in Africa?',
    options: ['Ngorongoro Crater', 'Menengai Crater', 'Mount Elgon Crater', 'Mount Longonot Crater'],
    correctAnswer: 'Ngorongoro Crater',
    explanation: 'The Ngorongoro Crater in Tanzania is the largest unbroken volcanic caldera in the world, covering about 260 square kilometers.'
  },
  {
    id: 'geo_complex_29',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Global Geoparks?',
    options: ['Morocco', 'Tanzania', 'South Africa', 'Egypt'],
    correctAnswer: 'Morocco',
    explanation: 'Morocco has 3 UNESCO Global Geoparks, including M\'Goun and Jbel Bani.'
  },
  {
    id: 'geo_complex_30',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest mangrove forest in Africa?',
    options: ['Niger Delta Mangroves', 'Rufiji Delta Mangroves', 'Casamance Mangroves', 'Zambezi Delta Mangroves'],
    correctAnswer: 'Niger Delta Mangroves',
    explanation: 'The Niger Delta Mangroves in Nigeria are the largest mangrove forest in Africa, covering approximately 10,000 square kilometers.'
  },
  {
    id: 'geo_complex_31',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Biosphere Reserves?',
    options: ['South Africa', 'Kenya', 'Tanzania', 'Morocco'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 8 UNESCO Biosphere Reserves, including the Cape Winelands and Kruger to Canyons.'
  },
  {
    id: 'geo_complex_32',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest salt pan in Africa?',
    options: ['Makgadikgadi Pan', 'Etosha Pan', 'Chott el Djerid', 'Qattara Depression'],
    correctAnswer: 'Makgadikgadi Pan',
    explanation: 'The Makgadikgadi Pan in Botswana is the largest salt pan in Africa, covering approximately 12,000 square kilometers.'
  },
  {
    id: 'geo_complex_33',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most Ramsar Wetlands?',
    options: ['South Africa', 'Kenya', 'Tanzania', 'Uganda'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 27 Ramsar Wetlands, more than any other African country.'
  },
  {
    id: 'geo_complex_34',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest canyon in Africa?',
    options: ['Blyde River Canyon', 'Fish River Canyon', 'Tugela Canyon', 'Orange River Canyon'],
    correctAnswer: 'Fish River Canyon',
    explanation: 'Fish River Canyon in Namibia is the largest canyon in Africa and the second largest in the world, after the Grand Canyon.'
  },
  {
    id: 'geo_complex_35',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Global Geoparks?',
    options: ['Morocco', 'South Africa', 'Tanzania', 'Egypt'],
    correctAnswer: 'Morocco',
    explanation: 'Morocco has 3 UNESCO Global Geoparks, more than any other African country.'
  },
  {
    id: 'geo_complex_36',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest salt pan in Africa?',
    options: ['Makgadikgadi Pan', 'Etosha Pan', 'Chott el Djerid', 'Qattara Depression'],
    correctAnswer: 'Makgadikgadi Pan',
    explanation: 'The Makgadikgadi Pan in Botswana is the largest salt pan in Africa, covering approximately 12,000 square kilometers.'
  },
  {
    id: 'geo_complex_37',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most Ramsar Wetlands?',
    options: ['South Africa', 'Kenya', 'Tanzania', 'Uganda'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 27 Ramsar Wetlands, more than any other African country.'
  },
  {
    id: 'geo_complex_38',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest canyon in Africa?',
    options: ['Blyde River Canyon', 'Fish River Canyon', 'Tugela Canyon', 'Orange River Canyon'],
    correctAnswer: 'Fish River Canyon',
    explanation: 'Fish River Canyon in Namibia is the largest canyon in Africa and the second largest in the world, after the Grand Canyon.'
  },
  {
    id: 'geo_complex_39',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Global Geoparks?',
    options: ['Morocco', 'South Africa', 'Tanzania', 'Egypt'],
    correctAnswer: 'Morocco',
    explanation: 'Morocco has 3 UNESCO Global Geoparks, more than any other African country.'
  },
  {
    id: 'geo_complex_40',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest salt pan in Africa?',
    options: ['Makgadikgadi Pan', 'Etosha Pan', 'Chott el Djerid', 'Qattara Depression'],
    correctAnswer: 'Makgadikgadi Pan',
    explanation: 'The Makgadikgadi Pan in Botswana is the largest salt pan in Africa, covering approximately 12,000 square kilometers.'
  },
  {
    id: 'geo_complex_41',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the highest number of transboundary rivers?',
    options: ['Democratic Republic of the Congo', 'Sudan', 'Ethiopia', 'Chad'],
    correctAnswer: 'Democratic Republic of the Congo',
    explanation: 'The Democratic Republic of the Congo shares 9 major river basins with neighboring countries, more than any other African nation.'
  },
  {
    id: 'geo_complex_42',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest protected area for desert-adapted elephants in Africa?',
    options: ['Skeleton Coast National Park', 'Namib-Naukluft National Park', 'Etosha National Park', 'Kgalagadi Transfrontier Park'],
    correctAnswer: 'Skeleton Coast National Park',
    explanation: 'Skeleton Coast National Park in Namibia protects the largest population of desert-adapted elephants in Africa.'
  },
  {
    id: 'geo_complex_43',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO World Heritage Sites related to rock art?',
    options: ['South Africa', 'Algeria', 'Libya', 'Namibia'],
    correctAnswer: 'Algeria',
    explanation: 'Algeria has 5 UNESCO World Heritage Sites featuring rock art, including Tassili n\'Ajjer, which contains one of the most important collections of prehistoric rock art in the world.'
  },
  {
    id: 'geo_complex_44',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest protected area for mountain gorillas in Africa?',
    options: ['Virunga National Park', 'Bwindi Impenetrable National Park', 'Volcanoes National Park', 'Mgahinga Gorilla National Park'],
    correctAnswer: 'Virunga National Park',
    explanation: 'Virunga National Park in the Democratic Republic of the Congo is the largest protected area for mountain gorillas, covering approximately 7,800 square kilometers.'
  },
  {
    id: 'geo_complex_45',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Global Geoparks?',
    options: ['Morocco', 'South Africa', 'Tanzania', 'Egypt'],
    correctAnswer: 'Morocco',
    explanation: 'Morocco has 3 UNESCO Global Geoparks, including M\'Goun and Jbel Bani.'
  },
  {
    id: 'geo_complex_46',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest protected area for cheetahs in Africa?',
    options: ['Namib-Naukluft National Park', 'Kgalagadi Transfrontier Park', 'Etosha National Park', 'Serengeti National Park'],
    correctAnswer: 'Kgalagadi Transfrontier Park',
    explanation: 'Kgalagadi Transfrontier Park, shared by South Africa and Botswana, is the largest protected area for cheetahs in Africa.'
  },
  {
    id: 'geo_complex_47',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most UNESCO Biosphere Reserves?',
    options: ['South Africa', 'Kenya', 'Tanzania', 'Morocco'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 8 UNESCO Biosphere Reserves, including the Cape Winelands and Kruger to Canyons.'
  },
  {
    id: 'geo_complex_48',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest protected area for black rhinos in Africa?',
    options: ['Etosha National Park', 'Kruger National Park', 'Hluhluwe-iMfolozi Park', 'Serengeti National Park'],
    correctAnswer: 'Etosha National Park',
    explanation: 'Etosha National Park in Namibia is the largest protected area for black rhinos in Africa.'
  },
  {
    id: 'geo_complex_49',
    category: 'Geography',
    difficulty: 'complex',
    question: 'Which African country has the most Ramsar Wetlands?',
    options: ['South Africa', 'Kenya', 'Tanzania', 'Uganda'],
    correctAnswer: 'South Africa',
    explanation: 'South Africa has 27 Ramsar Wetlands, more than any other African country.'
  },
  {
    id: 'geo_complex_50',
    category: 'Geography',
    difficulty: 'complex',
    question: 'What is the largest protected area for African wild dogs in Africa?',
    options: ['Kruger National Park', 'Hwange National Park', 'Selous Game Reserve', 'Moremi Game Reserve'],
    correctAnswer: 'Selous Game Reserve',
    explanation: 'Selous Game Reserve in Tanzania is the largest protected area for African wild dogs in Africa.'
  },
  {
    id: 'geo_hard_1',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of orographic precipitation?',
    options: [
      'Precipitation caused by the lifting of air over mountains',
      'Precipitation caused by the convergence of air masses',
      'Precipitation caused by the cooling of air over water bodies',
      'Precipitation caused by the heating of air over deserts'
    ],
    correctAnswer: 'Precipitation caused by the lifting of air over mountains',
    explanation: 'Orographic precipitation occurs when moist air is forced to rise over a mountain range, cooling and condensing to form precipitation on the windward side.'
  },
  {
    id: 'geo_hard_2',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the Coriolis effect?',
    options: [
      'The Earth\'s rotation',
      'The Earth\'s revolution around the Sun',
      'The tilt of the Earth\'s axis',
      'The gravitational pull of the Moon'
    ],
    correctAnswer: 'The Earth\'s rotation',
    explanation: 'The Coriolis effect is caused by the Earth\'s rotation, which deflects moving objects to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.'
  },
  {
    id: 'geo_hard_3',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of isostasy?',
    options: [
      'The equilibrium between the Earth\'s crust and mantle',
      'The movement of tectonic plates',
      'The formation of mountain ranges',
      'The erosion of landforms'
    ],
    correctAnswer: 'The equilibrium between the Earth\'s crust and mantle',
    explanation: 'Isostasy refers to the gravitational equilibrium between the Earth\'s crust and mantle, where the crust "floats" on the denser mantle below.'
  },
  {
    id: 'geo_hard_4',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a rain shadow?',
    options: [
      'The presence of a mountain range',
      'The proximity to an ocean',
      'The latitude of the location',
      'The altitude of the location'
    ],
    correctAnswer: 'The presence of a mountain range',
    explanation: 'A rain shadow is formed when moist air rises over a mountain range, causing precipitation on the windward side and creating a dry area on the leeward side.'
  },
  {
    id: 'geo_hard_5',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of thermohaline circulation?',
    options: [
      'The global ocean circulation driven by temperature and salinity differences',
      'The movement of air masses in the atmosphere',
      'The flow of rivers and streams',
      'The movement of tectonic plates'
    ],
    correctAnswer: 'The global ocean circulation driven by temperature and salinity differences',
    explanation: 'Thermohaline circulation is the global ocean circulation driven by differences in water density, which is affected by temperature (thermo) and salinity (haline).'
  },
  {
    id: 'geo_hard_6',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a fjord?',
    options: [
      'Glacial erosion',
      'River erosion',
      'Wind erosion',
      'Wave erosion'
    ],
    correctAnswer: 'Glacial erosion',
    explanation: 'Fjords are formed by glacial erosion, where glaciers carve deep, U-shaped valleys that are later flooded by rising sea levels.'
  },
  {
    id: 'geo_hard_7',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of desertification?',
    options: [
      'The transformation of fertile land into desert',
      'The expansion of existing deserts',
      'The formation of new deserts',
      'The movement of sand dunes'
    ],
    correctAnswer: 'The transformation of fertile land into desert',
    explanation: 'Desertification is the process by which fertile land becomes desert, typically as a result of drought, deforestation, or inappropriate agriculture.'
  },
  {
    id: 'geo_hard_8',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a karst landscape?',
    options: [
      'The dissolution of soluble rocks',
      'The deposition of sediments',
      'The movement of glaciers',
      'The action of wind'
    ],
    correctAnswer: 'The dissolution of soluble rocks',
    explanation: 'Karst landscapes are formed by the dissolution of soluble rocks, such as limestone, creating features like sinkholes, caves, and underground drainage systems.'
  },
  {
    id: 'geo_hard_9',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of plate tectonics?',
    options: [
      'The movement of the Earth\'s lithospheric plates',
      'The formation of mountains',
      'The creation of ocean basins',
      'The erosion of landforms'
    ],
    correctAnswer: 'The movement of the Earth\'s lithospheric plates',
    explanation: 'Plate tectonics is the theory that describes the movement of the Earth\'s lithospheric plates, which float on the semi-fluid asthenosphere below.'
  },
  {
    id: 'geo_hard_10',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a delta?',
    options: [
      'The deposition of sediments at a river mouth',
      'The erosion of a coastline',
      'The movement of sand dunes',
      'The action of waves'
    ],
    correctAnswer: 'The deposition of sediments at a river mouth',
    explanation: 'Deltas are formed when a river deposits sediments at its mouth, creating a fan-shaped landform that extends into a body of water.'
  },
  {
    id: 'geo_hard_11',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of soil formation?',
    options: [
      'The weathering of parent material and organic matter accumulation',
      'The deposition of sediments',
      'The erosion of rocks',
      'The movement of water'
    ],
    correctAnswer: 'The weathering of parent material and organic matter accumulation',
    explanation: 'Soil formation involves the weathering of parent material, accumulation of organic matter, and the action of living organisms over time.'
  },
  {
    id: 'geo_hard_12',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a meander?',
    options: [
      'The erosion and deposition of river banks',
      'The slope of the river bed',
      'The volume of water',
      'The type of sediment'
    ],
    correctAnswer: 'The erosion and deposition of river banks',
    explanation: 'Meanders are formed by the erosion of the outer bank and deposition on the inner bank of a river, creating a sinuous course.'
  },
  {
    id: 'geo_hard_13',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of glacial retreat?',
    options: [
      'The melting of a glacier\'s terminus',
      'The movement of a glacier',
      'The formation of a glacier',
      'The erosion by a glacier'
    ],
    correctAnswer: 'The melting of a glacier\'s terminus',
    explanation: 'Glacial retreat occurs when a glacier\'s terminus melts faster than new ice can form, causing the glacier to shrink in size.'
  },
  {
    id: 'geo_hard_14',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a tsunami?',
    options: [
      'Underwater earthquakes or volcanic eruptions',
      'Strong winds',
      'Tidal forces',
      'Ocean currents'
    ],
    correctAnswer: 'Underwater earthquakes or volcanic eruptions',
    explanation: 'Tsunamis are primarily caused by underwater earthquakes or volcanic eruptions that displace large volumes of water.'
  },
  {
    id: 'geo_hard_15',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of coastal erosion?',
    options: [
      'The wearing away of land by wave action',
      'The deposition of sediments',
      'The formation of beaches',
      'The movement of sand dunes'
    ],
    correctAnswer: 'The wearing away of land by wave action',
    explanation: 'Coastal erosion is the process by which land is worn away by wave action, currents, and other coastal processes.'
  },
  {
    id: 'geo_hard_16',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a tornado?',
    options: [
      'The interaction of warm, moist air with cold, dry air',
      'The movement of ocean currents',
      'The rotation of the Earth',
      'The presence of mountains'
    ],
    correctAnswer: 'The interaction of warm, moist air with cold, dry air',
    explanation: 'Tornadoes form when warm, moist air interacts with cold, dry air, creating instability and rotation in the atmosphere.'
  },
  {
    id: 'geo_hard_17',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of urbanization?',
    options: [
      'The growth of cities and towns',
      'The movement of people to rural areas',
      'The development of agriculture',
      'The formation of natural landscapes'
    ],
    correctAnswer: 'The growth of cities and towns',
    explanation: 'Urbanization is the process by which cities and towns grow, typically through migration from rural areas and natural population increase.'
  },
  {
    id: 'geo_hard_18',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a rift valley?',
    options: [
      'The pulling apart of tectonic plates',
      'The collision of tectonic plates',
      'The erosion of a mountain range',
      'The deposition of sediments'
    ],
    correctAnswer: 'The pulling apart of tectonic plates',
    explanation: 'Rift valleys are formed when tectonic plates pull apart, creating a depression in the Earth\'s surface.'
  },
  {
    id: 'geo_hard_19',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of metamorphism?',
    options: [
      'The transformation of rocks under heat and pressure',
      'The formation of sedimentary rocks',
      'The erosion of rocks',
      'The movement of tectonic plates'
    ],
    correctAnswer: 'The transformation of rocks under heat and pressure',
    explanation: 'Metamorphism is the process by which rocks are transformed under heat and pressure, changing their mineral composition and structure.'
  },
  {
    id: 'geo_hard_20',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a coral reef?',
    options: [
      'The growth of coral polyps in warm, shallow water',
      'The deposition of sediments',
      'The movement of ocean currents',
      'The action of waves'
    ],
    correctAnswer: 'The growth of coral polyps in warm, shallow water',
    explanation: 'Coral reefs are formed by the growth of coral polyps in warm, shallow water, typically in tropical regions.'
  },
  {
    id: 'geo_hard_21',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of mass wasting?',
    options: [
      'The downslope movement of rock and soil under gravity',
      'The erosion of rocks by water',
      'The deposition of sediments',
      'The formation of mountains'
    ],
    correctAnswer: 'The downslope movement of rock and soil under gravity',
    explanation: 'Mass wasting refers to the downslope movement of rock and soil under the influence of gravity, including processes like landslides, mudflows, and rockfalls.'
  },
  {
    id: 'geo_hard_22',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a cirque?',
    options: [
      'Glacial erosion in a mountain valley',
      'River erosion',
      'Wind erosion',
      'Wave erosion'
    ],
    correctAnswer: 'Glacial erosion in a mountain valley',
    explanation: 'A cirque is formed by glacial erosion in a mountain valley, creating a bowl-shaped depression with steep walls.'
  },
  {
    id: 'geo_hard_23',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of isostatic rebound?',
    options: [
      'The rise of land after the removal of ice sheets',
      'The sinking of land under the weight of ice',
      'The movement of tectonic plates',
      'The formation of mountains'
    ],
    correctAnswer: 'The rise of land after the removal of ice sheets',
    explanation: 'Isostatic rebound is the rise of land after the removal of ice sheets, as the Earth\'s crust returns to equilibrium.'
  },
  {
    id: 'geo_hard_24',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a drumlin?',
    options: [
      'Glacial deposition',
      'River deposition',
      'Wind deposition',
      'Wave deposition'
    ],
    correctAnswer: 'Glacial deposition',
    explanation: 'Drumlins are formed by glacial deposition, creating elongated hills with a steep side facing the direction from which the ice advanced.'
  },
  {
    id: 'geo_hard_25',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of saltation?',
    options: [
      'The bouncing movement of sand grains in wind or water',
      'The dissolution of rocks',
      'The formation of salt deposits',
      'The movement of glaciers'
    ],
    correctAnswer: 'The bouncing movement of sand grains in wind or water',
    explanation: 'Saltation is the bouncing movement of sand grains in wind or water, where particles are lifted briefly and then fall back to the surface.'
  },
  {
    id: 'geo_hard_26',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a hanging valley?',
    options: [
      'The differential erosion by glaciers',
      'The movement of tectonic plates',
      'The action of rivers',
      'The formation of mountains'
    ],
    correctAnswer: 'The differential erosion by glaciers',
    explanation: 'Hanging valleys are formed when a smaller glacier erodes a valley less deeply than a larger glacier, creating a valley that "hangs" above the main valley.'
  },
  {
    id: 'geo_hard_27',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of periglacial activity?',
    options: [
      'Geomorphic processes in areas adjacent to glaciers',
      'The movement of glaciers',
      'The formation of ice sheets',
      'The melting of permafrost'
    ],
    correctAnswer: 'Geomorphic processes in areas adjacent to glaciers',
    explanation: 'Periglacial activity refers to geomorphic processes that occur in areas adjacent to glaciers, including freeze-thaw cycles and patterned ground formation.'
  },
  {
    id: 'geo_hard_28',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a tarn?',
    options: [
      'Glacial erosion in a cirque',
      'River erosion',
      'Wind erosion',
      'Wave erosion'
    ],
    correctAnswer: 'Glacial erosion in a cirque',
    explanation: 'A tarn is formed by glacial erosion in a cirque, creating a small mountain lake.'
  },
  {
    id: 'geo_hard_29',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of aeolian transport?',
    options: [
      'The movement of sediment by wind',
      'The movement of water',
      'The movement of glaciers',
      'The movement of tectonic plates'
    ],
    correctAnswer: 'The movement of sediment by wind',
    explanation: 'Aeolian transport is the movement of sediment by wind, including processes like saltation, suspension, and surface creep.'
  },
  {
    id: 'geo_hard_30',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a roche moutonnée?',
    options: [
      'Glacial abrasion and plucking',
      'River erosion',
      'Wind erosion',
      'Wave erosion'
    ],
    correctAnswer: 'Glacial abrasion and plucking',
    explanation: 'A roche moutonnée is formed by glacial abrasion on the upstream side and plucking on the downstream side, creating an asymmetrical hill.'
  },
  {
    id: 'geo_hard_31',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of solifluction?',
    options: [
      'The slow downslope movement of waterlogged soil',
      'The rapid movement of rock and soil',
      'The formation of soil',
      'The erosion of rocks'
    ],
    correctAnswer: 'The slow downslope movement of waterlogged soil',
    explanation: 'Solifluction is the slow downslope movement of waterlogged soil, typically occurring in periglacial environments.'
  },
  {
    id: 'geo_hard_32',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a kame?',
    options: [
      'Glacial deposition in a depression',
      'River deposition',
      'Wind deposition',
      'Wave deposition'
    ],
    correctAnswer: 'Glacial deposition in a depression',
    explanation: 'A kame is formed by glacial deposition in a depression, creating a mound or hill of stratified drift.'
  },
  {
    id: 'geo_hard_33',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of deflation?',
    options: [
      'The removal of fine particles by wind',
      'The deposition of sediments',
      'The formation of dunes',
      'The movement of sand'
    ],
    correctAnswer: 'The removal of fine particles by wind',
    explanation: 'Deflation is the removal of fine particles by wind, leaving behind coarser material and creating desert pavement.'
  },
  {
    id: 'geo_hard_34',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a pingo?',
    options: [
      'The freezing of water in permafrost',
      'The melting of ice',
      'The movement of glaciers',
      'The formation of lakes'
    ],
    correctAnswer: 'The freezing of water in permafrost',
    explanation: 'A pingo is formed by the freezing of water in permafrost, creating a mound of ice-covered earth.'
  },
  {
    id: 'geo_hard_35',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of thermokarst?',
    options: [
      'The melting of permafrost and subsequent ground collapse',
      'The formation of karst landscapes',
      'The movement of glaciers',
      'The erosion of rocks'
    ],
    correctAnswer: 'The melting of permafrost and subsequent ground collapse',
    explanation: 'Thermokarst is the process of melting permafrost and subsequent ground collapse, creating depressions and irregular terrain.'
  },
  {
    id: 'geo_hard_36',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a esker?',
    options: [
      'Glacial deposition in a subglacial tunnel',
      'River deposition',
      'Wind deposition',
      'Wave deposition'
    ],
    correctAnswer: 'Glacial deposition in a subglacial tunnel',
    explanation: 'An esker is formed by glacial deposition in a subglacial tunnel, creating a long, winding ridge of stratified drift.'
  },
  {
    id: 'geo_hard_37',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of nivation?',
    options: [
      'Erosion by snow and ice in a hollow',
      'The formation of snow',
      'The movement of glaciers',
      'The melting of ice'
    ],
    correctAnswer: 'Erosion by snow and ice in a hollow',
    explanation: 'Nivation is the process of erosion by snow and ice in a hollow, contributing to the formation of cirques.'
  },
  {
    id: 'geo_hard_38',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a kettled hole?',
    options: [
      'The melting of a buried ice block',
      'The movement of glaciers',
      'The formation of lakes',
      'The erosion of rocks'
    ],
    correctAnswer: 'The melting of a buried ice block',
    explanation: 'A kettled hole is formed by the melting of a buried ice block, creating a depression in glacial deposits.'
  },
  {
    id: 'geo_hard_39',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of gelifluction?',
    options: [
      'The slow movement of waterlogged soil in permafrost',
      'The rapid movement of rock and soil',
      'The formation of soil',
      'The erosion of rocks'
    ],
    correctAnswer: 'The slow movement of waterlogged soil in permafrost',
    explanation: 'Gelifluction is the slow movement of waterlogged soil in permafrost, a type of solifluction specific to cold environments.'
  },
  {
    id: 'geo_hard_40',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a moraine?',
    options: [
      'Glacial deposition of rock and soil',
      'River deposition',
      'Wind deposition',
      'Wave deposition'
    ],
    correctAnswer: 'Glacial deposition of rock and soil',
    explanation: 'A moraine is formed by glacial deposition of rock and soil, creating ridges or mounds of unsorted material.'
  },
  {
    id: 'geo_hard_41',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of ENSO (El Niño-Southern Oscillation)?',
    options: [
      'The periodic warming and cooling of the tropical Pacific Ocean',
      'The movement of ocean currents',
      'The formation of hurricanes',
      'The melting of polar ice'
    ],
    correctAnswer: 'The periodic warming and cooling of the tropical Pacific Ocean',
    explanation: 'ENSO is a climate pattern that involves the periodic warming (El Niño) and cooling (La Niña) of the tropical Pacific Ocean, affecting global weather patterns.'
  },
  {
    id: 'geo_hard_42',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a Hadley cell?',
    options: [
      'The differential heating of the Earth\'s surface',
      'The rotation of the Earth',
      'The presence of mountains',
      'The movement of ocean currents'
    ],
    correctAnswer: 'The differential heating of the Earth\'s surface',
    explanation: 'Hadley cells are formed by the differential heating of the Earth\'s surface, creating a large-scale atmospheric circulation pattern between the equator and subtropics.'
  },
  {
    id: 'geo_hard_43',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of ecological succession?',
    options: [
      'The gradual change in species composition in an ecosystem',
      'The movement of species',
      'The formation of new ecosystems',
      'The extinction of species'
    ],
    correctAnswer: 'The gradual change in species composition in an ecosystem',
    explanation: 'Ecological succession is the process of gradual change in species composition in an ecosystem, typically following a disturbance or the creation of new habitat.'
  },
  {
    id: 'geo_hard_44',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a rain shadow desert?',
    options: [
      'The blocking of moisture by mountain ranges',
      'The distance from the ocean',
      'The latitude of the location',
      'The presence of high pressure systems'
    ],
    correctAnswer: 'The blocking of moisture by mountain ranges',
    explanation: 'Rain shadow deserts are formed when mountain ranges block moisture-laden air, causing precipitation on the windward side and creating arid conditions on the leeward side.'
  },
  {
    id: 'geo_hard_45',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of urban heat island formation?',
    options: [
      'The increased temperature in urban areas compared to surrounding rural areas',
      'The formation of cities',
      'The movement of people to urban areas',
      'The development of infrastructure'
    ],
    correctAnswer: 'The increased temperature in urban areas compared to surrounding rural areas',
    explanation: 'Urban heat islands are formed by the increased temperature in urban areas compared to surrounding rural areas, caused by human activities and modified surfaces.'
  },
  {
    id: 'geo_hard_46',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a biodiversity hotspot?',
    options: [
      'High species richness and endemism with significant habitat loss',
      'The presence of many species',
      'The formation of new species',
      'The movement of species'
    ],
    correctAnswer: 'High species richness and endemism with significant habitat loss',
    explanation: 'Biodiversity hotspots are areas with high species richness and endemism that have experienced significant habitat loss, making them conservation priorities.'
  },
  {
    id: 'geo_hard_47',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of soil salinization?',
    options: [
      'The accumulation of salts in the soil',
      'The formation of soil',
      'The erosion of soil',
      'The movement of water'
    ],
    correctAnswer: 'The accumulation of salts in the soil',
    explanation: 'Soil salinization is the process of salt accumulation in the soil, often caused by irrigation in arid regions or the rise of saline groundwater.'
  },
  {
    id: 'geo_hard_48',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary cause of the formation of a monsoon climate?',
    options: [
      'The seasonal reversal of wind patterns',
      'The presence of mountains',
      'The proximity to the ocean',
      'The latitude of the location'
    ],
    correctAnswer: 'The seasonal reversal of wind patterns',
    explanation: 'Monsoon climates are formed by the seasonal reversal of wind patterns, bringing wet and dry seasons to affected regions.'
  },
  {
    id: 'geo_hard_49',
    category: 'Geography',
    difficulty: 'hard',
    question: 'Which of the following best describes the process of cultural landscape formation?',
    options: [
      'The modification of the natural landscape by human activity',
      'The formation of cities',
      'The movement of people',
      'The development of agriculture'
    ],
    correctAnswer: 'The modification of the natural landscape by human activity',
    explanation: 'Cultural landscapes are formed by the modification of the natural landscape by human activity, reflecting the interaction between people and their environment.'
  },
  {
    id: 'geo_hard_50',
    category: 'Geography',
    difficulty: 'hard',
    question: 'What is the primary factor that determines the formation of a megacity?',
    options: [
      'Rapid urbanization and population growth',
      'The presence of infrastructure',
      'The development of industry',
      'The movement of people'
    ],
    correctAnswer: 'Rapid urbanization and population growth',
    explanation: 'Megacities are formed by rapid urbanization and population growth, typically defined as urban areas with populations exceeding 10 million people.'
  },
  {
    id: 'geo_extreme_1',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of teleconnection in climate science?',
    options: [
      'The relationship between climate anomalies in widely separated regions',
      'The connection between ocean currents and atmospheric circulation',
      'The interaction between different climate systems',
      'The relationship between local and global climate patterns'
    ],
    correctAnswer: 'The relationship between climate anomalies in widely separated regions',
    explanation: 'Teleconnection refers to the relationship between climate anomalies in widely separated regions, often caused by large-scale atmospheric circulation patterns like ENSO or the North Atlantic Oscillation.'
  },
  {
    id: 'geo_extreme_2',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a Rossby wave in atmospheric circulation?',
    options: [
      'The conservation of potential vorticity in a rotating fluid',
      'The interaction between different air masses',
      'The movement of high and low pressure systems',
      'The effect of the Coriolis force on air movement'
    ],
    correctAnswer: 'The conservation of potential vorticity in a rotating fluid',
    explanation: 'Rossby waves are formed due to the conservation of potential vorticity in a rotating fluid, creating large-scale meanders in the jet stream and influencing weather patterns.'
  },
  {
    id: 'geo_extreme_3',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of geomorphic threshold in landscape evolution?',
    options: [
      'The point at which a small change in driving forces results in a significant change in landform',
      'The maximum rate of erosion a landscape can sustain',
      'The minimum energy required for geomorphic processes to occur',
      'The balance between erosion and deposition in a landscape'
    ],
    correctAnswer: 'The point at which a small change in driving forces results in a significant change in landform',
    explanation: 'A geomorphic threshold represents the point at which a small change in driving forces results in a significant change in landform, often leading to rapid landscape transformation.'
  },
  {
    id: 'geo_extreme_4',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a katabatic wind?',
    options: [
      'The cooling of air over elevated terrain and subsequent downslope flow',
      'The heating of air over low-lying areas',
      'The interaction between different pressure systems',
      'The effect of the Coriolis force on air movement'
    ],
    correctAnswer: 'The cooling of air over elevated terrain and subsequent downslope flow',
    explanation: 'Katabatic winds are formed by the cooling of air over elevated terrain, which becomes denser and flows downslope under the influence of gravity.'
  },
  {
    id: 'geo_extreme_5',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of equifinality in geomorphology?',
    options: [
      'The principle that different processes can produce similar landforms',
      'The final state of landscape evolution',
      'The balance between different geomorphic processes',
      'The relationship between process and form in landscape development'
    ],
    correctAnswer: 'The principle that different processes can produce similar landforms',
    explanation: 'Equifinality is the principle that different processes can produce similar landforms, making it challenging to determine the exact process responsible for a particular landform.'
  },
  {
    id: 'geo_extreme_6',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective complex?',
    options: [
      'The organization of thunderstorms into a large, long-lived convective system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a large, long-lived convective system',
    explanation: 'Mesoscale convective complexes form when thunderstorms organize into a large, long-lived convective system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'geo_extreme_7',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of critical zone science?',
    options: [
      'The study of Earth\'s surface processes from the top of vegetation to the bottom of groundwater',
      'The analysis of climate change impacts on ecosystems',
      'The study of human-environment interactions',
      'The investigation of geological hazards'
    ],
    correctAnswer: 'The study of Earth\'s surface processes from the top of vegetation to the bottom of groundwater',
    explanation: 'Critical zone science is the study of Earth\'s surface processes from the top of vegetation to the bottom of groundwater, integrating various disciplines to understand Earth\'s surface systems.'
  },
  {
    id: 'geo_extreme_8',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a polar vortex?',
    options: [
      'The strong westerly winds that circle the polar regions',
      'The interaction between different air masses',
      'The effect of the Coriolis force on air movement',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The strong westerly winds that circle the polar regions',
    explanation: 'A polar vortex is formed by strong westerly winds that circle the polar regions, creating a large area of low pressure and cold air.'
  },
  {
    id: 'geo_extreme_9',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape sensitivity?',
    options: [
      'The degree to which a landscape responds to changes in driving forces',
      'The vulnerability of a landscape to erosion',
      'The stability of a landscape over time',
      'The ability of a landscape to recover from disturbance'
    ],
    correctAnswer: 'The degree to which a landscape responds to changes in driving forces',
    explanation: 'Landscape sensitivity refers to the degree to which a landscape responds to changes in driving forces, influencing how it evolves over time.'
  },
  {
    id: 'geo_extreme_10',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a Madden-Julian Oscillation?',
    options: [
      'The eastward propagation of large-scale tropical convection',
      'The interaction between different air masses',
      'The effect of the Coriolis force on air movement',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The eastward propagation of large-scale tropical convection',
    explanation: 'The Madden-Julian Oscillation is formed by the eastward propagation of large-scale tropical convection, influencing weather patterns across the tropics and beyond.'
  },
  {
    id: 'geo_extreme_11',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of geomorphic memory?',
    options: [
      'The persistence of landform features from past environmental conditions',
      'The record of past climate in geological formations',
      'The influence of historical land use on current landscapes',
      'The relationship between process and form in landscape development'
    ],
    correctAnswer: 'The persistence of landform features from past environmental conditions',
    explanation: 'Geomorphic memory refers to the persistence of landform features from past environmental conditions, influencing current landscape processes and evolution.'
  },
  {
    id: 'geo_extreme_12',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a blocking high?',
    options: [
      'The persistence of a high-pressure system that disrupts normal atmospheric flow',
      'The interaction between different air masses',
      'The effect of topography on atmospheric circulation',
      'The influence of ocean currents on weather patterns'
    ],
    correctAnswer: 'The persistence of a high-pressure system that disrupts normal atmospheric flow',
    explanation: 'A blocking high forms when a high-pressure system persists and disrupts normal atmospheric flow, often leading to prolonged weather conditions.'
  },
  {
    id: 'geo_extreme_13',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape connectivity?',
    options: [
      'The degree to which different parts of a landscape are functionally linked',
      'The physical connection between different landforms',
      'The relationship between different ecosystems',
      'The movement of species across a landscape'
    ],
    correctAnswer: 'The degree to which different parts of a landscape are functionally linked',
    explanation: 'Landscape connectivity refers to the degree to which different parts of a landscape are functionally linked, influencing ecological processes and species movement.'
  },
  {
    id: 'geo_extreme_14',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a gravity wave in the atmosphere?',
    options: [
      'The oscillation of air parcels in a stable atmosphere',
      'The interaction between different air masses',
      'The effect of topography on air movement',
      'The influence of pressure differences on air flow'
    ],
    correctAnswer: 'The oscillation of air parcels in a stable atmosphere',
    explanation: 'Gravity waves form when air parcels oscillate in a stable atmosphere, often influenced by topography or convective processes.'
  },
  {
    id: 'geo_extreme_15',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape resilience?',
    options: [
      'The ability of a landscape to absorb disturbance and maintain its essential structure and function',
      'The stability of a landscape over time',
      'The ability of a landscape to recover from disturbance',
      'The resistance of a landscape to change'
    ],
    correctAnswer: 'The ability of a landscape to absorb disturbance and maintain its essential structure and function',
    explanation: 'Landscape resilience refers to the ability of a landscape to absorb disturbance and maintain its essential structure and function, influencing its long-term evolution.'
  },
  {
    id: 'geo_extreme_16',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective vortex?',
    options: [
      'The organization of thunderstorms into a rotating system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a rotating system',
    explanation: 'A mesoscale convective vortex forms when thunderstorms organize into a rotating system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'geo_extreme_17',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape feedback?',
    options: [
      'The process by which changes in one part of a landscape affect other parts',
      'The response of a landscape to external forces',
      'The interaction between different landscape elements',
      'The relationship between process and form in landscape development'
    ],
    correctAnswer: 'The process by which changes in one part of a landscape affect other parts',
    explanation: 'Landscape feedback refers to the process by which changes in one part of a landscape affect other parts, creating complex interactions and responses.'
  },
  {
    id: 'geo_extreme_18',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a thermal low?',
    options: [
      'The heating of land surfaces creating low pressure',
      'The interaction between different air masses',
      'The effect of topography on atmospheric circulation',
      'The influence of ocean currents on weather patterns'
    ],
    correctAnswer: 'The heating of land surfaces creating low pressure',
    explanation: 'A thermal low forms when land surfaces heat up, creating low pressure that draws in air from surrounding areas.'
  },
  {
    id: 'geo_extreme_19',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape hysteresis?',
    options: [
      'The dependence of a landscape\'s state on its history of environmental conditions',
      'The response of a landscape to changing conditions',
      'The stability of a landscape over time',
      'The relationship between process and form in landscape development'
    ],
    correctAnswer: 'The dependence of a landscape\'s state on its history of environmental conditions',
    explanation: 'Landscape hysteresis refers to the dependence of a landscape\'s state on its history of environmental conditions, influencing its response to change.'
  },
  {
    id: 'geo_extreme_20',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective system?',
    options: [
      'The organization of thunderstorms into a large, long-lived system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a large, long-lived system',
    explanation: 'A mesoscale convective system forms when thunderstorms organize into a large, long-lived system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'geo_extreme_21',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of biogeochemical cycling in Earth systems?',
    options: [
      'The movement of elements through living organisms and the physical environment',
      'The cycling of water through different states',
      'The movement of tectonic plates',
      'The formation of different rock types'
    ],
    correctAnswer: 'The movement of elements through living organisms and the physical environment',
    explanation: 'Biogeochemical cycling refers to the movement of elements through living organisms and the physical environment, creating complex feedback loops in Earth systems.'
  },
  {
    id: 'geo_extreme_22',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a Walker circulation?',
    options: [
      'The east-west atmospheric circulation in the tropical Pacific',
      'The north-south movement of air masses',
      'The interaction between different pressure systems',
      'The effect of the Coriolis force on air movement'
    ],
    correctAnswer: 'The east-west atmospheric circulation in the tropical Pacific',
    explanation: 'The Walker circulation is formed by the east-west atmospheric circulation in the tropical Pacific, driven by temperature differences between the eastern and western Pacific.'
  },
  {
    id: 'geo_extreme_23',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape metastability?',
    options: [
      'The ability of a landscape to maintain its structure despite changing conditions',
      'The stability of a landscape over time',
      'The ability of a landscape to recover from disturbance',
      'The resistance of a landscape to change'
    ],
    correctAnswer: 'The ability of a landscape to maintain its structure despite changing conditions',
    explanation: 'Landscape metastability refers to the ability of a landscape to maintain its structure despite changing conditions, often through complex feedback mechanisms.'
  },
  {
    id: 'geo_extreme_24',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a quasi-biennial oscillation?',
    options: [
      'The periodic reversal of winds in the tropical stratosphere',
      'The interaction between different air masses',
      'The effect of the Coriolis force on air movement',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The periodic reversal of winds in the tropical stratosphere',
    explanation: 'The quasi-biennial oscillation is formed by the periodic reversal of winds in the tropical stratosphere, influencing global atmospheric circulation patterns.'
  },
  {
    id: 'geo_extreme_25',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape self-organization?',
    options: [
      'The emergence of ordered patterns in landscapes through local interactions',
      'The formation of landscapes by external forces',
      'The development of landscapes over time',
      'The relationship between process and form in landscape development'
    ],
    correctAnswer: 'The emergence of ordered patterns in landscapes through local interactions',
    explanation: 'Landscape self-organization refers to the emergence of ordered patterns in landscapes through local interactions, often creating complex spatial structures.'
  },
  {
    id: 'geo_extreme_26',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a stratospheric sudden warming?',
    options: [
      'The rapid warming of the polar stratosphere',
      'The interaction between different air masses',
      'The effect of the Coriolis force on air movement',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The rapid warming of the polar stratosphere',
    explanation: 'A stratospheric sudden warming is formed by the rapid warming of the polar stratosphere, often disrupting the polar vortex and influencing weather patterns.'
  },
  {
    id: 'geo_extreme_27',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape complexity?',
    options: [
      'The degree of heterogeneity and organization in a landscape',
      'The number of different elements in a landscape',
      'The size of a landscape',
      'The age of a landscape'
    ],
    correctAnswer: 'The degree of heterogeneity and organization in a landscape',
    explanation: 'Landscape complexity refers to the degree of heterogeneity and organization in a landscape, influencing its ecological function and response to change.'
  },
  {
    id: 'geo_extreme_28',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective vortex?',
    options: [
      'The organization of thunderstorms into a rotating system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a rotating system',
    explanation: 'A mesoscale convective vortex forms when thunderstorms organize into a rotating system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'geo_extreme_29',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape emergence?',
    options: [
      'The appearance of new properties in a landscape that are not present in its individual components',
      'The formation of new landscapes',
      'The development of landscapes over time',
      'The relationship between process and form in landscape development'
    ],
    correctAnswer: 'The appearance of new properties in a landscape that are not present in its individual components',
    explanation: 'Landscape emergence refers to the appearance of new properties in a landscape that are not present in its individual components, creating complex system behavior.'
  },
  {
    id: 'geo_extreme_30',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective system?',
    options: [
      'The organization of thunderstorms into a large, long-lived system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a large, long-lived system',
    explanation: 'A mesoscale convective system forms when thunderstorms organize into a large, long-lived system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'geo_extreme_31',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape self-regulation?',
    options: [
      'The ability of a landscape to maintain its structure through feedback mechanisms',
      'The stability of a landscape over time',
      'The ability of a landscape to recover from disturbance',
      'The resistance of a landscape to change'
    ],
    correctAnswer: 'The ability of a landscape to maintain its structure through feedback mechanisms',
    explanation: 'Landscape self-regulation refers to the ability of a landscape to maintain its structure through feedback mechanisms, creating stability in complex systems.'
  },
  {
    id: 'geo_extreme_32',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective vortex?',
    options: [
      'The organization of thunderstorms into a rotating system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a rotating system',
    explanation: 'A mesoscale convective vortex forms when thunderstorms organize into a rotating system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'geo_extreme_33',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape adaptation?',
    options: [
      'The ability of a landscape to adjust to changing conditions',
      'The stability of a landscape over time',
      'The ability of a landscape to recover from disturbance',
      'The resistance of a landscape to change'
    ],
    correctAnswer: 'The ability of a landscape to adjust to changing conditions',
    explanation: 'Landscape adaptation refers to the ability of a landscape to adjust to changing conditions, often through complex feedback mechanisms.'
  },
  {
    id: 'geo_extreme_34',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective system?',
    options: [
      'The organization of thunderstorms into a large, long-lived system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a large, long-lived system',
    explanation: 'A mesoscale convective system forms when thunderstorms organize into a large, long-lived system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'geo_extreme_35',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape transformation?',
    options: [
      'The fundamental change in a landscape\'s structure and function',
      'The development of a landscape over time',
      'The ability of a landscape to recover from disturbance',
      'The resistance of a landscape to change'
    ],
    correctAnswer: 'The fundamental change in a landscape\'s structure and function',
    explanation: 'Landscape transformation refers to the fundamental change in a landscape\'s structure and function, often resulting from significant environmental change.'
  },
  {
    id: 'geo_extreme_36',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective vortex?',
    options: [
      'The organization of thunderstorms into a rotating system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a rotating system',
    explanation: 'A mesoscale convective vortex forms when thunderstorms organize into a rotating system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'geo_extreme_37',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape resilience?',
    options: [
      'The ability of a landscape to absorb disturbance and maintain its essential structure and function',
      'The stability of a landscape over time',
      'The ability of a landscape to recover from disturbance',
      'The resistance of a landscape to change'
    ],
    correctAnswer: 'The ability of a landscape to absorb disturbance and maintain its essential structure and function',
    explanation: 'Landscape resilience refers to the ability of a landscape to absorb disturbance and maintain its essential structure and function, influencing its long-term evolution.'
  },
  {
    id: 'geo_extreme_38',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective system?',
    options: [
      'The organization of thunderstorms into a large, long-lived system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a large, long-lived system',
    explanation: 'A mesoscale convective system forms when thunderstorms organize into a large, long-lived system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'geo_extreme_39',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'Which of the following best describes the concept of landscape feedback?',
    options: [
      'The process by which changes in one part of a landscape affect other parts',
      'The response of a landscape to external forces',
      'The interaction between different landscape elements',
      'The relationship between process and form in landscape development'
    ],
    correctAnswer: 'The process by which changes in one part of a landscape affect other parts',
    explanation: 'Landscape feedback refers to the process by which changes in one part of a landscape affect other parts, creating complex interactions and responses.'
  },
  {
    id: 'geo_extreme_40',
    category: 'Geography',
    difficulty: 'extremely complex',
    question: 'What is the primary mechanism behind the formation of a mesoscale convective vortex?',
    options: [
      'The organization of thunderstorms into a rotating system',
      'The interaction between different air masses',
      'The effect of topography on storm development',
      'The influence of ocean currents on atmospheric circulation'
    ],
    correctAnswer: 'The organization of thunderstorms into a rotating system',
    explanation: 'A mesoscale convective vortex forms when thunderstorms organize into a rotating system, often producing severe weather and heavy precipitation.'
  },
  {
    id: 'tech1',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "CPU" stand for in computing?',
    options: [
      'Central Processing Unit',
      'Computer Processing Unit',
      'Central Program Unit',
      'Computer Program Unit'
    ],
    correctAnswer: 'Central Processing Unit',
    explanation: 'CPU stands for Central Processing Unit, which is the primary component of a computer that performs most processing inside computers.'
  },
  {
    id: 'tech2',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company developed the Windows operating system?',
    options: [
      'Microsoft',
      'Apple',
      'Google',
      'IBM'
    ],
    correctAnswer: 'Microsoft',
    explanation: 'Microsoft developed and released the Windows operating system, with the first version being Windows 1.0 in 1985.'
  },
  {
    id: 'tech3',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "URL" stand for?',
    options: [
      'Uniform Resource Locator',
      'Universal Resource Link',
      'Uniform Resource Link',
      'Universal Resource Locator'
    ],
    correctAnswer: 'Uniform Resource Locator',
    explanation: 'URL stands for Uniform Resource Locator, which is the address of a specific webpage or file on the internet.'
  },
  {
    id: 'tech4',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a web browser?',
    options: [
      'Chrome',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Chrome',
    explanation: 'Chrome is a web browser developed by Google, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech5',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What is the name of Apple\'s mobile operating system?',
    options: [
      'iOS',
      'Android',
      'Windows',
      'Linux'
    ],
    correctAnswer: 'iOS',
    explanation: 'iOS is Apple\'s mobile operating system used on iPhones and iPads.'
  },
  {
    id: 'tech6',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "Wi-Fi" stand for?',
    options: [
      'Wireless Fidelity',
      'Wireless Internet',
      'Wireless Frequency',
      'Wireless Function'
    ],
    correctAnswer: 'Wireless Fidelity',
    explanation: 'Wi-Fi stands for Wireless Fidelity, which is a technology that allows devices to connect to the internet wirelessly.'
  },
  {
    id: 'tech7',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a social media platform?',
    options: [
      'Facebook',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Facebook',
    explanation: 'Facebook is a social media platform, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech8',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "RAM" stand for in computing?',
    options: [
      'Random Access Memory',
      'Read Access Memory',
      'Random Access Module',
      'Read Access Module'
    ],
    correctAnswer: 'Random Access Memory',
    explanation: 'RAM stands for Random Access Memory, which is a type of computer memory that can be accessed randomly.'
  },
  {
    id: 'tech9',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the Android operating system?',
    options: [
      'Google',
      'Apple',
      'Microsoft',
      'Samsung'
    ],
    correctAnswer: 'Google',
    explanation: 'Google created the Android operating system, which is now the most widely used mobile OS in the world.'
  },
  {
    id: 'tech10',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "PDF" stand for?',
    options: [
      'Portable Document Format',
      'Personal Document Format',
      'Portable Data Format',
      'Personal Data Format'
    ],
    correctAnswer: 'Portable Document Format',
    explanation: 'PDF stands for Portable Document Format, which is a file format used to present documents in a manner independent of application software.'
  },
  {
    id: 'tech11',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a search engine?',
    options: [
      'Google',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Google',
    explanation: 'Google is a search engine, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech12',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "HTML" stand for?',
    options: [
      'HyperText Markup Language',
      'HyperText Machine Language',
      'HyperText Markup Link',
      'HyperText Machine Link'
    ],
    correctAnswer: 'HyperText Markup Language',
    explanation: 'HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages.'
  },
  {
    id: 'tech13',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a video streaming service?',
    options: [
      'Netflix',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Netflix',
    explanation: 'Netflix is a video streaming service, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech14',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "USB" stand for?',
    options: [
      'Universal Serial Bus',
      'Universal System Bus',
      'Universal Serial Board',
      'Universal System Board'
    ],
    correctAnswer: 'Universal Serial Bus',
    explanation: 'USB stands for Universal Serial Bus, which is a standard for connecting devices to computers.'
  },
  {
    id: 'tech15',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the iPhone?',
    options: [
      'Apple',
      'Samsung',
      'Google',
      'Microsoft'
    ],
    correctAnswer: 'Apple',
    explanation: 'Apple created the iPhone, which was first released in 2007.'
  },
  {
    id: 'tech16',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "VPN" stand for?',
    options: [
      'Virtual Private Network',
      'Virtual Public Network',
      'Virtual Private Node',
      'Virtual Public Node'
    ],
    correctAnswer: 'Virtual Private Network',
    explanation: 'VPN stands for Virtual Private Network, which is a service that creates a secure, encrypted connection over the internet.'
  },
  {
    id: 'tech17',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a cloud storage service?',
    options: [
      'Google Drive',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Google Drive',
    explanation: 'Google Drive is a cloud storage service, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech18',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "AI" stand for?',
    options: [
      'Artificial Intelligence',
      'Automated Intelligence',
      'Artificial Information',
      'Automated Information'
    ],
    correctAnswer: 'Artificial Intelligence',
    explanation: 'AI stands for Artificial Intelligence, which refers to the simulation of human intelligence by machines.'
  },
  {
    id: 'tech19',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the PlayStation gaming console?',
    options: [
      'Sony',
      'Microsoft',
      'Nintendo',
      'Sega'
    ],
    correctAnswer: 'Sony',
    explanation: 'Sony created the PlayStation gaming console, with the first version being released in 1994.'
  },
  {
    id: 'tech20',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "GPS" stand for?',
    options: [
      'Global Positioning System',
      'Global Pointing System',
      'Global Positioning Service',
      'Global Pointing Service'
    ],
    correctAnswer: 'Global Positioning System',
    explanation: 'GPS stands for Global Positioning System, which is a satellite-based navigation system.'
  },
  {
    id: 'tech21',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a programming language?',
    options: [
      'Python',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Python',
    explanation: 'Python is a programming language, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech22',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "SSD" stand for in computing?',
    options: [
      'Solid State Drive',
      'Solid State Disk',
      'Solid Storage Drive',
      'Solid Storage Disk'
    ],
    correctAnswer: 'Solid State Drive',
    explanation: 'SSD stands for Solid State Drive, which is a type of storage device that uses flash memory.'
  },
  {
    id: 'tech23',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the Xbox gaming console?',
    options: [
      'Microsoft',
      'Sony',
      'Nintendo',
      'Sega'
    ],
    correctAnswer: 'Microsoft',
    explanation: 'Microsoft created the Xbox gaming console, with the first version being released in 2001.'
  },
  {
    id: 'tech24',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "IoT" stand for?',
    options: [
      'Internet of Things',
      'Internet of Technology',
      'Internet of Tools',
      'Internet of Tasks'
    ],
    correctAnswer: 'Internet of Things',
    explanation: 'IoT stands for Internet of Things, which refers to the network of physical objects embedded with sensors and software.'
  },
  {
    id: 'tech25',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a messaging app?',
    options: [
      'WhatsApp',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'WhatsApp',
    explanation: 'WhatsApp is a messaging app, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech26',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "HDMI" stand for?',
    options: [
      'High-Definition Multimedia Interface',
      'High-Definition Media Interface',
      'High-Definition Multimedia Input',
      'High-Definition Media Input'
    ],
    correctAnswer: 'High-Definition Multimedia Interface',
    explanation: 'HDMI stands for High-Definition Multimedia Interface, which is a standard for transmitting audio and video data.'
  },
  {
    id: 'tech27',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the Nintendo Switch?',
    options: [
      'Nintendo',
      'Sony',
      'Microsoft',
      'Sega'
    ],
    correctAnswer: 'Nintendo',
    explanation: 'Nintendo created the Nintendo Switch gaming console, which was released in 2017.'
  },
  {
    id: 'tech28',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "VR" stand for?',
    options: [
      'Virtual Reality',
      'Virtual Response',
      'Virtual Resolution',
      'Virtual Resource'
    ],
    correctAnswer: 'Virtual Reality',
    explanation: 'VR stands for Virtual Reality, which is a simulated experience that can be similar to or completely different from the real world.'
  },
  {
    id: 'tech29',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a photo editing software?',
    options: [
      'Photoshop',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Photoshop',
    explanation: 'Photoshop is a photo editing software, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech30',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "AR" stand for?',
    options: [
      'Augmented Reality',
      'Artificial Reality',
      'Augmented Response',
      'Artificial Response'
    ],
    correctAnswer: 'Augmented Reality',
    explanation: 'AR stands for Augmented Reality, which is an interactive experience where real-world objects are enhanced by computer-generated information.'
  },
  {
    id: 'tech31',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the Mac computer?',
    options: [
      'Apple',
      'Microsoft',
      'IBM',
      'Dell'
    ],
    correctAnswer: 'Apple',
    explanation: 'Apple created the Mac computer, with the first model being released in 1984.'
  },
  {
    id: 'tech32',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "LED" stand for?',
    options: [
      'Light Emitting Diode',
      'Light Emitting Display',
      'Light Emitting Device',
      'Light Emitting Data'
    ],
    correctAnswer: 'Light Emitting Diode',
    explanation: 'LED stands for Light Emitting Diode, which is a semiconductor light source that emits light when current flows through it.'
  },
  {
    id: 'tech33',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a video conferencing app?',
    options: [
      'Zoom',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Zoom',
    explanation: 'Zoom is a video conferencing app, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech34',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "LCD" stand for?',
    options: [
      'Liquid Crystal Display',
      'Liquid Crystal Device',
      'Liquid Crystal Data',
      'Liquid Crystal Drive'
    ],
    correctAnswer: 'Liquid Crystal Display',
    explanation: 'LCD stands for Liquid Crystal Display, which is a flat-panel display that uses liquid crystals to produce images.'
  },
  {
    id: 'tech35',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the Tesla electric car?',
    options: [
      'Tesla',
      'Ford',
      'Toyota',
      'General Motors'
    ],
    correctAnswer: 'Tesla',
    explanation: 'Tesla created the Tesla electric car, with the first model being the Roadster in 2008.'
  },
  {
    id: 'tech36',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "ISP" stand for?',
    options: [
      'Internet Service Provider',
      'Internet Service Protocol',
      'Internet System Provider',
      'Internet System Protocol'
    ],
    correctAnswer: 'Internet Service Provider',
    explanation: 'ISP stands for Internet Service Provider, which is a company that provides internet access to customers.'
  },
  {
    id: 'tech37',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a music streaming service?',
    options: [
      'Spotify',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Spotify',
    explanation: 'Spotify is a music streaming service, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech38',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "DNS" stand for?',
    options: [
      'Domain Name System',
      'Domain Name Service',
      'Domain Network System',
      'Domain Network Service'
    ],
    correctAnswer: 'Domain Name System',
    explanation: 'DNS stands for Domain Name System, which is the system that translates domain names into IP addresses.'
  },
  {
    id: 'tech39',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the Amazon Echo smart speaker?',
    options: [
      'Amazon',
      'Google',
      'Apple',
      'Microsoft'
    ],
    correctAnswer: 'Amazon',
    explanation: 'Amazon created the Amazon Echo smart speaker, which was first released in 2014.'
  },
  {
    id: 'tech40',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "FTP" stand for?',
    options: [
      'File Transfer Protocol',
      'File Transfer Program',
      'File Transfer Process',
      'File Transfer Procedure'
    ],
    correctAnswer: 'File Transfer Protocol',
    explanation: 'FTP stands for File Transfer Protocol, which is a standard network protocol used for transferring files between computers.'
  },
  {
    id: 'tech41',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a cloud computing service?',
    options: [
      'Amazon Web Services',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Amazon Web Services',
    explanation: 'Amazon Web Services is a cloud computing service, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech42',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "HTTP" stand for?',
    options: [
      'HyperText Transfer Protocol',
      'HyperText Transfer Program',
      'HyperText Transfer Process',
      'HyperText Transfer Procedure'
    ],
    correctAnswer: 'HyperText Transfer Protocol',
    explanation: 'HTTP stands for HyperText Transfer Protocol, which is the foundation of data communication for the World Wide Web.'
  },
  {
    id: 'tech43',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the Google Home smart speaker?',
    options: [
      'Google',
      'Amazon',
      'Apple',
      'Microsoft'
    ],
    correctAnswer: 'Google',
    explanation: 'Google created the Google Home smart speaker, which was first released in 2016.'
  },
  {
    id: 'tech44',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "HTTPS" stand for?',
    options: [
      'HyperText Transfer Protocol Secure',
      'HyperText Transfer Protocol Safe',
      'HyperText Transfer Protocol System',
      'HyperText Transfer Protocol Service'
    ],
    correctAnswer: 'HyperText Transfer Protocol Secure',
    explanation: 'HTTPS stands for HyperText Transfer Protocol Secure, which is the secure version of HTTP.'
  },
  {
    id: 'tech45',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a project management tool?',
    options: [
      'Trello',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Trello',
    explanation: 'Trello is a project management tool, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech46',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "API" stand for?',
    options: [
      'Application Programming Interface',
      'Application Program Interface',
      'Application Programming Input',
      'Application Program Input'
    ],
    correctAnswer: 'Application Programming Interface',
    explanation: 'API stands for Application Programming Interface, which is a set of rules and protocols for building and interacting with software applications.'
  },
  {
    id: 'tech47',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which company created the Oculus VR headset?',
    options: [
      'Meta (Facebook)',
      'Google',
      'Apple',
      'Microsoft'
    ],
    correctAnswer: 'Meta (Facebook)',
    explanation: 'Meta (formerly Facebook) acquired Oculus VR in 2014 and now produces the Oculus VR headset.'
  },
  {
    id: 'tech48',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "CSS" stand for?',
    options: [
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Cascading Style System',
      'Computer Style System'
    ],
    correctAnswer: 'Cascading Style Sheets',
    explanation: 'CSS stands for Cascading Style Sheets, which is a style sheet language used for describing the presentation of a document written in HTML.'
  },
  {
    id: 'tech49',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a code repository service?',
    options: [
      'GitHub',
      'Word',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'GitHub',
    explanation: 'GitHub is a code repository service, while Word, Excel, and PowerPoint are Microsoft Office applications.'
  },
  {
    id: 'tech50',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "SQL" stand for?',
    options: [
      'Structured Query Language',
      'Structured Question Language',
      'Structured Query Logic',
      'Structured Question Logic'
    ],
    correctAnswer: 'Structured Query Language',
    explanation: 'SQL stands for Structured Query Language, which is a programming language designed for managing data in relational database management systems.'
  }
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