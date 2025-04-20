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