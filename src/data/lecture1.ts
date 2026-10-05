import { MCQQuestion } from '../types/quiz';

export const lecture1Questions: MCQQuestion[] = [
  {
    id: 1,
    lecture: 'inorganic_1',
    questionNumber: 1,
    globalId: 'lec1_q1',
    topic: 'Introduction & Scope',
    topicAr: 'مقدمة ونطاق الكيمياء الصيدلانية',
    question: 'Pharmaceutical Chemistry is mainly concerned with the:',
    options: [
      { key: 'A', text: 'Physical properties of metals only' },
      { key: 'B', text: 'Chemical, biochemical and pharmacological aspects of drugs' },
      { key: 'C', text: 'Preparation of organic solvents' },
      { key: 'D', text: 'Study of microorganisms' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Pharmaceutical Chemistry is the science that deals with the chemical, biochemical, and pharmacological aspects of drugs, including their design, synthesis, and biological interactions.',
    explanationAr: 'الكيمياء الصيدلانية تهتم بشكل أساسي بالجوانب الكيميائية والكيميوحيوية والفارماكولوجية (الدوائية) للأدوية وتأثيرها على الجسم.',
    isHighYield: true
  },
  {
    id: 2,
    lecture: 'inorganic_1',
    questionNumber: 2,
    globalId: 'lec1_q2',
    topic: 'Introduction & Scope',
    topicAr: 'تعريف الكيمياء غير العضوية',
    question: 'Inorganic chemistry is the study of:',
    options: [
      { key: 'A', text: 'Carbon compounds only' },
      { key: 'B', text: 'Proteins and carbohydrates' },
      { key: 'C', text: 'All elements and their compounds except carbon and its compounds' },
      { key: 'D', text: 'Drugs only' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Inorganic chemistry classically encompasses all elements and their compounds, excluding hydrocarbons and the vast majority of carbon-containing organic compounds.',
    explanationAr: 'الكيمياء غير العضوية تُعنى بدراسة جميع العناصر ومركباتها باستثناء الكربون ومركباته العضوية.',
    isHighYield: false
  },
  {
    id: 3,
    lecture: 'inorganic_1',
    questionNumber: 3,
    globalId: 'lec1_q3',
    topic: 'Pharmaceutical Aids & Therapeutic Applications',
    topicAr: 'المساعدات الصيدلانية والتطبيقات العلاجية',
    question: 'Which of the following is an example of an inorganic pharmaceutical used as a pharmaceutical aid?',
    options: [
      { key: 'A', text: 'Oxygen' },
      { key: 'B', text: 'Bentonite' },
      { key: 'C', text: 'Iron' },
      { key: 'D', text: 'Silver nitrate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Bentonite (native colloidal hydrated aluminum silicate) is used as a suspending agent and pharmaceutical aid. Oxygen and iron are therapeutic agents; silver nitrate is an antiseptic/astringent.',
    explanationAr: 'البنتونايت (Bentonite) يُستخدم كمساعد صيدلاني (Pharmaceutical aid) كعامل معلق ومثبت للصيغ الدوائية.',
    isHighYield: true
  },
  {
    id: 4,
    lecture: 'inorganic_1',
    questionNumber: 4,
    globalId: 'lec1_q4',
    topic: 'Electrolytes & Fluid Replenishment',
    topicAr: 'الكهارل وتعويض سوائل الجسم',
    question: 'Which inorganic pharmaceuticals can be used to replace or replenish normal body-fluid contents?',
    options: [
      { key: 'A', text: 'Sodium and potassium ions' },
      { key: 'B', text: 'Platinum and nickel' },
      { key: 'C', text: 'Talc and bentonite' },
      { key: 'D', text: 'Lithium aluminum hydride' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Sodium and potassium salts (e.g., NaCl, KCl, oral rehydration salts, Ringer\'s solution) are essential electrolytes used to replenish and restore normal fluid and electrolyte balance.',
    explanationAr: 'أيونات الصوديوم والبوتاسيوم (Na⁺ و K⁺) هي الكهارل الرئيسية المستخدمة لتعويض سوائل الجسم والحفاظ على التوازن الأسموزي.',
    isHighYield: true
  },
  {
    id: 5,
    lecture: 'inorganic_1',
    questionNumber: 5,
    globalId: 'lec1_q5',
    topic: 'Analytical Reagents',
    topicAr: 'الكواشف التحليلية الصيدلانية',
    question: 'Potassium permanganate is mentioned as an example of a:',
    options: [
      { key: 'A', text: 'Pharmaceutical aid' },
      { key: 'B', text: 'Titrant used in pharmaceutical analysis' },
      { key: 'C', text: 'Antacid' },
      { key: 'D', text: 'Chelating agent' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Potassium permanganate (KMnO4) is a powerful oxidizing titrant widely used in redox titrations (permanganometry) in pharmaceutical quality control and assay.',
    explanationAr: 'برمنغنات البوتاسيوم (KMnO₄) تُعد مثالاً هاماً على محلول قياسي (Titrant) في التحليل الصيدلاني وتفاعلات الأكسدة والاختزال.',
    isHighYield: true
  },
  {
    id: 6,
    lecture: 'inorganic_1',
    questionNumber: 6,
    globalId: 'lec1_q6',
    topic: 'Pharmaceutical Aids & Therapeutic Applications',
    topicAr: 'علاج حب الشباب والمطهرات',
    question: 'Which substance is associated with treatment of acne according to the lecture?',
    options: [
      { key: 'A', text: 'Iron compounds' },
      { key: 'B', text: 'Sulphur and its compounds' },
      { key: 'C', text: 'Oxygen' },
      { key: 'D', text: 'Magnesium sulphate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Sulfur and sulfur compounds exhibit keratolytic and mild antiseptic actions, making them well-established topical agents for the treatment of acne and seborrhea.',
    explanationAr: 'مركبات الكبريت (Sulphur and its compounds) تُستخدم موضعياً في علاج حب الشباب (Acne) بفضل تأثيرها المقشر والمطهر.',
    isHighYield: true
  },
  {
    id: 7,
    lecture: 'inorganic_1',
    questionNumber: 7,
    globalId: 'lec1_q7',
    topic: 'Pharmaceutical Aids & Therapeutic Applications',
    topicAr: 'علاج فقر الدم بالحديد',
    question: 'Iron compounds are listed under treatment of:',
    options: [
      { key: 'A', text: 'Anaemia' },
      { key: 'B', text: 'Asphyxia' },
      { key: 'C', text: 'Burns' },
      { key: 'D', text: 'Arthritis' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Inorganic and organic iron salts (e.g., ferrous sulfate, ferrous fumarate) are hematinics indicated for the prevention and treatment of iron deficiency anaemia.',
    explanationAr: 'مركبات الحديد (مثل Ferrous sulfate) تُستخدم كعلاج أساسي لفقر الدم ونقص الحديد (Anaemia).',
    isHighYield: false
  },
  {
    id: 8,
    lecture: 'inorganic_1',
    questionNumber: 8,
    globalId: 'lec1_q8',
    topic: 'Pharmaceutical Aids & Therapeutic Applications',
    topicAr: 'الأكسجين الطبي والاختناق',
    question: 'Oxygen is listed as useful in the treatment of:',
    options: [
      { key: 'A', text: 'Acne only' },
      { key: 'B', text: 'Anaemia only' },
      { key: 'C', text: 'Anoxia and asphyxia' },
      { key: 'D', text: 'Arthritis' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Medical oxygen (O2) inhalation is indicated in conditions characterized by severe tissue hypoxia, anoxia, hypoxemia, and asphyxiation.',
    explanationAr: 'الأكسجين الطبي ضروري لعلاج نقص الأكسجة في الأنسجة (Anoxia) والاختناق (Asphyxia).',
    isHighYield: false
  },
  {
    id: 9,
    lecture: 'inorganic_1',
    questionNumber: 9,
    globalId: 'lec1_q9',
    topic: 'Pharmaceutical Aids & Therapeutic Applications',
    topicAr: 'مركبات الذهب والتهاب المفاصل',
    question: 'Sodium aurothiomalate is associated with:',
    options: [
      { key: 'A', text: 'Arthritis' },
      { key: 'B', text: 'Burns' },
      { key: 'C', text: 'Boils' },
      { key: 'D', text: 'Acne' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Sodium aurothiomalate is a gold(I) complex used as a disease-modifying antirheumatic drug (DMARD) in chrysotherapy for active rheumatoid arthritis.',
    explanationAr: 'صوديوم أوروثيومالات (Sodium aurothiomalate) مركب ذهب علاجي يستخدم في معالجة التهاب المفاصل الروماتويدي (Arthritis).',
    isHighYield: true
  },
  {
    id: 10,
    lecture: 'inorganic_1',
    questionNumber: 10,
    globalId: 'lec1_q10',
    topic: 'Gastrointestinal Agents',
    topicAr: 'مضادات الحموضة',
    question: 'Which of the following is listed as an antacid?',
    options: [
      { key: 'A', text: 'Potassium bromide' },
      { key: 'B', text: 'Aluminum hydroxide gel' },
      { key: 'C', text: 'Sodium citrate' },
      { key: 'D', text: 'Nitrous oxide' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Aluminum hydroxide gel is a nonsystemic gastric antacid that neutralizes gastric hydrochloric acid without causing rebound acid secretion.',
    explanationAr: 'جل هيدروكسيد الألومنيوم (Aluminum hydroxide gel) يُصنف كمضاد حموضة معدي موضعي شهير.',
    isHighYield: true
  },
  {
    id: 11,
    lecture: 'inorganic_1',
    questionNumber: 11,
    globalId: 'lec1_q11',
    topic: 'Dental & Topical Aids',
    topicAr: 'كاشط معجون الأسنان',
    question: 'Dibasic calcium phosphate is used as a/an:',
    options: [
      { key: 'A', text: 'Absorbent' },
      { key: 'B', text: 'Abrasive' },
      { key: 'C', text: 'Acidifier' },
      { key: 'D', text: 'Anesthetic' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Dibasic calcium phosphate dihydrate (CaHPO4·2H2O) is widely incorporated into dentifrices and toothpastes as a mild cleaning and polishing abrasive.',
    explanationAr: 'فوسفات الكالسيوم ثنائي القاعدة (Dibasic calcium phosphate) يُستخدم كعامل كاشط وملمع (Abrasive) في معاجين الأسنان.',
    isHighYield: true
  },
  {
    id: 12,
    lecture: 'inorganic_1',
    questionNumber: 12,
    globalId: 'lec1_q12',
    topic: 'Pharmaceutical Aids & Therapeutic Applications',
    topicAr: 'الممتصات الصيدلانية',
    question: 'Calcium carbonate is listed as a/an:',
    options: [
      { key: 'A', text: 'Absorbent' },
      { key: 'B', text: 'Adsorbent' },
      { key: 'C', text: 'Anthelmintic' },
      { key: 'D', text: 'Anticonvulsant' }
    ],
    correctAnswer: 'A',
    explanationEn: 'In the lecture classification table, Calcium carbonate is listed under Absorbents (and can also act as an antacid/calcium supplement).',
    explanationAr: 'كربونات الكالسيوم (Calcium carbonate) صُنفت في جدول المحاضرة كـ Absorbent (ممتص).',
    isHighYield: false
  },
  {
    id: 13,
    lecture: 'inorganic_1',
    questionNumber: 13,
    globalId: 'lec1_q13',
    topic: 'Gastrointestinal Agents',
    topicAr: 'محمضات الجهاز الهضمي',
    question: 'Dilute hydrochloric acid is used as a/an:',
    options: [
      { key: 'A', text: 'Alkalizer' },
      { key: 'B', text: 'Acidifier' },
      { key: 'C', text: 'Antacid' },
      { key: 'D', text: 'Antibacterial' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Dilute hydrochloric acid (HCl) is used as a gastric acidifier (in cases of achlorhydria or hypochlorhydria) to restore necessary digestive acidity.',
    explanationAr: 'حمض الهيدروكلوريك المخفف (Dilute HCl) يُستخدم كمحمض معدي (Acidifier) في حالات نقص إفراز حمض المعدة.',
    isHighYield: true
  },
  {
    id: 14,
    lecture: 'inorganic_1',
    questionNumber: 14,
    globalId: 'lec1_q14',
    topic: 'Gastrointestinal Agents',
    topicAr: 'المدمصات المعدية المعوية',
    question: 'Which of the following is an adsorbent?',
    options: [
      { key: 'A', text: 'Sodium citrate' },
      { key: 'B', text: 'Bismuth subcarbonate' },
      { key: 'C', text: 'Nitrous oxide' },
      { key: 'D', text: 'Potassium bromide' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Bismuth subcarbonate acts as an intestinal adsorbent and mucosal protective agent in antidiarrheal formulations, binding toxins and protective coating.',
    explanationAr: 'تحت كربونات البزموت (Bismuth subcarbonate) يُستخدم كعامل مدمص سطحي (Adsorbent) وحامي للغشاء المخاطي.',
    isHighYield: true
  },
  {
    id: 15,
    lecture: 'inorganic_1',
    questionNumber: 15,
    globalId: 'lec1_q15',
    topic: 'Electrolytes & Fluid Replenishment',
    topicAr: 'القلويات ومعادلة حموضة البول',
    question: 'Sodium citrate is classified as a/an:',
    options: [
      { key: 'A', text: 'Alkalizer' },
      { key: 'B', text: 'Antacid' },
      { key: 'C', text: 'Abrasive' },
      { key: 'D', text: 'Anesthetic' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Sodium citrate is metabolized in the liver to sodium bicarbonate, making it an effective systemic and urinary alkalizer.',
    explanationAr: 'سترات الصوديوم (Sodium citrate) تصنف كـ Alkalizer (عامل قلوي) يُساعد على تقليل حموضة البول والدم.',
    isHighYield: true
  },
  {
    id: 16,
    lecture: 'inorganic_1',
    questionNumber: 16,
    globalId: 'lec1_q16',
    topic: 'Anesthetics & CNS Agents',
    topicAr: 'الغازات المخدرة',
    question: 'Nitrous oxide is used as a/an:',
    options: [
      { key: 'A', text: 'Anthelmintic' },
      { key: 'B', text: 'Anesthetic' },
      { key: 'C', text: 'Antibacterial' },
      { key: 'D', text: 'Acidifier' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Nitrous oxide (N2O, "laughing gas") is an inorganic gas widely used as an inhalation general anesthetic and analgesic in dental and surgical procedures.',
    explanationAr: 'أكسيد النيتروز (N₂O أو غاز الضحك) غاز غير عضوي يُستخدم كمخدر عام بالاستنشاق ومسكن للآلام (Anesthetic).',
    isHighYield: false
  },
  {
    id: 17,
    lecture: 'inorganic_1',
    questionNumber: 17,
    globalId: 'lec1_q17',
    topic: 'Anesthetics & CNS Agents',
    topicAr: 'مضادات الاختلاج والمهدئات',
    question: 'Potassium bromide is listed as a/an:',
    options: [
      { key: 'A', text: 'Anticonvulsant' },
      { key: 'B', text: 'Antacid' },
      { key: 'C', text: 'Adsorbent' },
      { key: 'D', text: 'Abrasive' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Potassium bromide (KBr) was historically the first effective anticonvulsant and CNS depressant sedative used in epilepsy treatment.',
    explanationAr: 'بروميد البوتاسيوم (KBr) صُنف كأول مضاد اختلاج وتشنجات فعال تاريخياً (Anticonvulsant).',
    isHighYield: true
  },
  {
    id: 18,
    lecture: 'inorganic_1',
    questionNumber: 18,
    globalId: 'lec1_q18',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'العدد الذري',
    question: 'The atomic number (Z) is equal to the number of:',
    options: [
      { key: 'A', text: 'Neutrons only' },
      { key: 'B', text: 'Protons only' },
      { key: 'C', text: 'Electrons in a neutral atom and protons' },
      { key: 'D', text: 'Protons + neutrons' }
    ],
    correctAnswer: 'C',
    explanationEn: 'The atomic number Z defines the number of protons in the nucleus, which in a neutral atom is also precisely equal to the number of surrounding electrons.',
    explanationAr: 'العدد الذري (Z) يساوي عدد البروتونات في النواة، وفي الذرة المتعادلة كهربائياً يساوي أيضاً عدد الإلكترونات.',
    isHighYield: true
  },
  {
    id: 19,
    lecture: 'inorganic_1',
    questionNumber: 19,
    globalId: 'lec1_q19',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'الكتلة الذرية',
    question: 'The atomic mass (A) is represented by:',
    options: [
      { key: 'A', text: 'mp − mn' },
      { key: 'B', text: 'mp + mn' },
      { key: 'C', text: 'mp + me' },
      { key: 'D', text: 'Z + e' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The atomic mass number (A) represents the total nucleons in the nucleus: the sum of protons (mp) and neutrons (mn): A = mp + mn.',
    explanationAr: 'الكتلة الذرية (Mass Number A) تمثل مجموع كتل النواة: بروتونات + نيوترونات (mp + mn).',
    isHighYield: false
  },
  {
    id: 20,
    lecture: 'inorganic_1',
    questionNumber: 20,
    globalId: 'lec1_q20',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'تعادل الذرة الكهربائي',
    question: 'In a neutral atom:',
    options: [
      { key: 'A', text: 'Number of electrons > protons' },
      { key: 'B', text: 'Number of electrons < protons' },
      { key: 'C', text: 'Number of electrons = number of protons' },
      { key: 'D', text: 'Number of neutrons = electrons' }
    ],
    correctAnswer: 'C',
    explanationEn: 'In any electrically neutral atom, positive nuclear charges (protons) are exactly balanced by negative extranuclear charges (electrons).',
    explanationAr: 'في الذرة المتعادلة يكون عدد الإلكترونات السالبة مساوياً تماماً لعدد البروتونات الموجبة.',
    isHighYield: false
  },
  {
    id: 21,
    lecture: 'inorganic_1',
    questionNumber: 21,
    globalId: 'lec1_q21',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'تعريف النظائر',
    question: 'Isotopes differ in their number of:',
    options: [
      { key: 'A', text: 'Protons' },
      { key: 'B', text: 'Electrons' },
      { key: 'C', text: 'Neutrons' },
      { key: 'D', text: 'Atomic orbitals' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Isotopes are atoms of the same chemical element having the same number of protons (same Z) but differing numbers of neutrons, resulting in different mass numbers (A).',
    explanationAr: 'النظائر (Isotopes) هي ذرات لنفس العنصر تتفق في عدد البروتونات وتختلف في عدد النيوترونات.',
    isHighYield: true
  },
  {
    id: 22,
    lecture: 'inorganic_1',
    questionNumber: 22,
    globalId: 'lec1_q22',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'أنواع المدارات الذرية',
    question: 'Which of the following is NOT an atomic orbital type mentioned in the lecture?',
    options: [
      { key: 'A', text: 's' },
      { key: 'B', text: 'p' },
      { key: 'C', text: 'd' },
      { key: 'D', text: 'g' }
    ],
    correctAnswer: 'D',
    explanationEn: 'Standard atomic orbitals discussed in foundational pharmaceutical chemistry are s, p, d, and f orbitals. "g" is theoretical and not covered.',
    explanationAr: 'المدارات الذرية الأساسية هي s و p و d و f، بينما مدار g ليس ضمن المدارات المشروحة.',
    isHighYield: false
  },
  {
    id: 23,
    lecture: 'inorganic_1',
    questionNumber: 23,
    globalId: 'lec1_q23',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'قاعدة هوند',
    question: 'According to Hund\'s rule, orbitals in the same sublevel are:',
    options: [
      { key: 'A', text: 'Doubly occupied before singly occupied' },
      { key: 'B', text: 'Singly occupied before any orbital is doubly occupied' },
      { key: 'C', text: 'Always empty' },
      { key: 'D', text: 'Filled randomly' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Hund\'s Rule states that degenerate orbitals in a given subshell are each occupied singly with parallel spins before any one orbital is doubly occupied.',
    explanationAr: 'تنص قاعدة هوند (Hund\'s rule) على أن المدارات متساوية الطاقة تُشغل فرادى أولاً قبل أن يبدأ الازدواج.',
    isHighYield: true
  },
  {
    id: 24,
    lecture: 'inorganic_1',
    questionNumber: 24,
    globalId: 'lec1_q24',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'عدد الكم الرئيسي',
    question: 'The principal quantum number is represented by:',
    options: [
      { key: 'A', text: 'n' },
      { key: 'B', text: 'l' },
      { key: 'C', text: 'ml' },
      { key: 'D', text: 'ms' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The principal quantum number is designated by n (n = 1, 2, 3, ...), specifying the main energy level/shell.',
    explanationAr: 'عدد الكم الرئيسي يُرمز له بالحرف (n).',
    isHighYield: false
  },
  {
    id: 25,
    lecture: 'inorganic_1',
    questionNumber: 25,
    globalId: 'lec1_q25',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'دلالة عدد الكم الرئيسي',
    question: 'The principal quantum number describes the:',
    options: [
      { key: 'A', text: 'Shape of orbital' },
      { key: 'B', text: 'Orientation of orbital' },
      { key: 'C', text: 'Energy/shell' },
      { key: 'D', text: 'Spin of electron' }
    ],
    correctAnswer: 'C',
    explanationEn: 'The principal quantum number n defines the main electron shell and primary energy level of the orbital.',
    explanationAr: 'عدد الكم الرئيسي (n) يحدد مستوى الطاقة الرئيسي وغلاف الذرة.',
    isHighYield: true
  },
  {
    id: 26,
    lecture: 'inorganic_1',
    questionNumber: 26,
    globalId: 'lec1_q26',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'عدد الكم المداري (الفرعي)',
    question: 'The angular momentum quantum number is represented by:',
    options: [
      { key: 'A', text: 'n' },
      { key: 'B', text: 'l' },
      { key: 'C', text: 'ml' },
      { key: 'D', text: 'ms' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The angular momentum (azimuthal) quantum number is designated by l (values 0 to n-1) and defines the orbital subshell and shape.',
    explanationAr: 'عدد الكم المداري أو الفرعي (Angular momentum) يُرمز له بالرمز (l).',
    isHighYield: false
  },
  {
    id: 27,
    lecture: 'inorganic_1',
    questionNumber: 27,
    globalId: 'lec1_q27',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'قيم المدارات s, p, d, f',
    question: 'The values s, p, d and f correspond to:',
    options: [
      { key: 'A', text: 'n' },
      { key: 'B', text: 'l' },
      { key: 'C', text: 'ml' },
      { key: 'D', text: 'ms' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The letter designations s, p, d, f correspond to angular momentum quantum numbers l = 0, 1, 2, and 3 respectively.',
    explanationAr: 'الأحرف s و p و d و f تقابل قيم عدد الكم الفرعي l (حيث l=0 تعني s، l=1 تعني p، إلخ).',
    isHighYield: true
  },
  {
    id: 28,
    lecture: 'inorganic_1',
    questionNumber: 28,
    globalId: 'lec1_q28',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'عدد الكم المغناطيسي',
    question: 'The magnetic quantum number describes the:',
    options: [
      { key: 'A', text: 'Spin' },
      { key: 'B', text: 'Energy' },
      { key: 'C', text: 'Orientation of the orbital' },
      { key: 'D', text: 'Mass of electron' }
    ],
    correctAnswer: 'C',
    explanationEn: 'The magnetic quantum number (ml) designates the spatial orientation of the orbital in three-dimensional space (-l to +l).',
    explanationAr: 'عدد الكم المغناطيسي (ml) يصف الاتجاه الفراغي للمدار في الفضاء ثلاثي الأبعاد.',
    isHighYield: true
  },
  {
    id: 29,
    lecture: 'inorganic_1',
    questionNumber: 29,
    globalId: 'lec1_q29',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'عدد كم الغزل (الدوران)',
    question: 'The spin quantum number has values:',
    options: [
      { key: 'A', text: '0 and 1' },
      { key: 'B', text: '+1 and −1' },
      { key: 'C', text: '+1/2 and −1/2' },
      { key: 'D', text: '+2 and −2' }
    ],
    correctAnswer: 'C',
    explanationEn: 'The spin quantum number (ms) represents the intrinsic angular momentum (spin) of an electron and can only take values of +1/2 or -1/2.',
    explanationAr: 'عدد كم الغزل أو الدوران المغزلي (ms) يأخذ فقط القيمتين +1/2 و -1/2.',
    isHighYield: false
  },
  {
    id: 30,
    lecture: 'inorganic_1',
    questionNumber: 30,
    globalId: 'lec1_q30',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'التوزيع الإلكتروني لليثيوم',
    question: 'Which element has the electron configuration 1s² 2s¹?',
    options: [
      { key: 'A', text: 'C' },
      { key: 'B', text: 'Li' },
      { key: 'C', text: 'O' },
      { key: 'D', text: 'Ne' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Lithium (Z = 3) has three electrons arranged as 1s² 2s¹.',
    explanationAr: 'عنصر الليثيوم (Li, Z=3) يمتلك التوزيع الإلكتروني 1s² 2s¹.',
    isHighYield: false
  },
  {
    id: 31,
    lecture: 'inorganic_1',
    questionNumber: 31,
    globalId: 'lec1_q31',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'التوزيع الإلكتروني للأكسجين',
    question: 'The electron configuration of oxygen is:',
    options: [
      { key: 'A', text: '1s² 2s² 2p²' },
      { key: 'B', text: '1s² 2s² 2p⁴' },
      { key: 'C', text: '1s² 2s² 2p⁶' },
      { key: 'D', text: '1s² 2s¹' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Oxygen has atomic number Z = 8. Its electron configuration is 1s² 2s² 2p⁴.',
    explanationAr: 'الأكسجين (Z=8) توزيعه الإلكتروني هو 1s² 2s² 2p⁴.',
    isHighYield: false
  },
  {
    id: 32,
    lecture: 'inorganic_1',
    questionNumber: 32,
    globalId: 'lec1_q32',
    topic: 'Atomic Structure & Quantum Numbers',
    topicAr: 'التوزيع الإلكتروني للغاز النبيل النيون',
    question: 'The electron configuration 1s² 2s² 2p⁶ belongs to:',
    options: [
      { key: 'A', text: 'Li' },
      { key: 'B', text: 'C' },
      { key: 'C', text: 'O' },
      { key: 'D', text: 'Ne' }
    ],
    correctAnswer: 'D',
    explanationEn: 'Neon (Ne, Z = 10) is a noble gas with a complete octet in its second shell: 1s² 2s² 2p⁶.',
    explanationAr: 'التوزيع 1s² 2s² 2p⁶ يمثل 10 إلكترونات وهو غاز النيون الخامل (Neon Ne).',
    isHighYield: false
  },
  {
    id: 33,
    lecture: 'inorganic_1',
    questionNumber: 33,
    globalId: 'lec1_q33',
    topic: 'Periodic Trends',
    topicAr: 'طاقة التأين',
    question: 'Ionization energy is the energy required to:',
    options: [
      { key: 'A', text: 'Add a proton to an atom' },
      { key: 'B', text: 'Remove an electron from a gaseous atom' },
      { key: 'C', text: 'Add a neutron' },
      { key: 'D', text: 'Break a nucleus' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Ionization energy (IE) is defined as the minimum energy required to remove the most loosely bound valence electron from an isolated gaseous atom in its ground state: X(g) → X⁺(g) + e⁻.',
    explanationAr: 'طاقة التأين (Ionization Energy) هي مقدار الطاقة اللازمة لانتزاع أضعف الإلكترونات ارتباطاً من الذرة في حالتها الغازية المنفردة.',
    isHighYield: true
  },
  {
    id: 34,
    lecture: 'inorganic_1',
    questionNumber: 34,
    globalId: 'lec1_q34',
    topic: 'Periodic Trends',
    topicAr: 'تدرج طاقة التأين عبر الدورة',
    question: 'Across a period from left to right, ionization energy generally:',
    options: [
      { key: 'A', text: 'Decreases' },
      { key: 'B', text: 'Increases' },
      { key: 'C', text: 'Remains constant' },
      { key: 'D', text: 'Becomes zero' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Across a period (left to right), effective nuclear charge (Zeff) increases while atomic radius shrinks, holding valence electrons tighter and increasing ionization energy.',
    explanationAr: 'عبر الدورة من اليسار إلى اليمين، تزداد طاقة التأين عموماً بسبب زيادة الشحنة النووية الفعالة وصغر الحجم الذري.',
    isHighYield: true
  },
  {
    id: 35,
    lecture: 'inorganic_1',
    questionNumber: 35,
    globalId: 'lec1_q35',
    topic: 'Periodic Trends',
    topicAr: 'تدرج طاقة التأين في المجموعة',
    question: 'Down a group, ionization energy generally:',
    options: [
      { key: 'A', text: 'Increases' },
      { key: 'B', text: 'Decreases' },
      { key: 'C', text: 'Remains constant' },
      { key: 'D', text: 'Doubles' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Down a group (top to bottom), additional shells increase atomic radius and electron shielding, decreasing the electrostatic pull on outer electrons, so ionization energy decreases.',
    explanationAr: 'بالانتقال لأسفل المجموعة، تقل طاقة التأين نظراً لزيادة عدد المستويات وزيادة الحجب (Shielding) وبعد الإلكترونات عن النواة.',
    isHighYield: true
  },
  {
    id: 36,
    lecture: 'inorganic_1',
    questionNumber: 36,
    globalId: 'lec1_q36',
    topic: 'Periodic Trends',
    topicAr: 'تدرج نصف القطر الذري عبر الدورة',
    question: 'Atomic radius across a period generally:',
    options: [
      { key: 'A', text: 'Increases' },
      { key: 'B', text: 'Decreases' },
      { key: 'C', text: 'Does not change' },
      { key: 'D', text: 'Becomes infinite' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Across a period (left to right), electrons enter the same principal shell while proton count increases, drawing the electron cloud closer and decreasing atomic radius.',
    explanationAr: 'يقل نصف القطر الذري عبر الدورة من اليسار لليمين بسبب زيادة جذب النواة للإلكترونات الخارجية.',
    isHighYield: true
  },
  {
    id: 37,
    lecture: 'inorganic_1',
    questionNumber: 37,
    globalId: 'lec1_q37',
    topic: 'Periodic Trends',
    topicAr: 'تدرج نصف القطر الذري في المجموعة',
    question: 'Atomic radius down a group generally:',
    options: [
      { key: 'A', text: 'Decreases' },
      { key: 'B', text: 'Increases' },
      { key: 'C', text: 'Remains constant' },
      { key: 'D', text: 'Becomes zero' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Down a group, each period adds a completely new principal quantum shell (n), substantially increasing atomic radius.',
    explanationAr: 'يزداد نصف القطر الذري عند النزول لأسفل في المجموعة بسبب إضافة مستويات طاقة رئيسية جديدة.',
    isHighYield: true
  },
  {
    id: 38,
    lecture: 'inorganic_1',
    questionNumber: 38,
    globalId: 'lec1_q38',
    topic: 'Periodic Trends',
    topicAr: 'تعريف الكهروسالبية',
    question: 'Electronegativity is the ability of an atom in a molecule to:',
    options: [
      { key: 'A', text: 'Lose neutrons' },
      { key: 'B', text: 'Attract shared electrons toward itself' },
      { key: 'C', text: 'Repel protons' },
      { key: 'D', text: 'Produce ions only' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Electronegativity is the relative tendency of a bonded atom to attract the shared bonding electron pair toward itself.',
    explanationAr: 'الكهروسالبية (Electronegativity) هي قدرة الذرة في الجزيء على جذب إلكترونات الرابطة التساهمية المشتركة نحوها.',
    isHighYield: true
  },
  {
    id: 39,
    lecture: 'inorganic_1',
    questionNumber: 39,
    globalId: 'lec1_q39',
    topic: 'Periodic Trends',
    topicAr: 'أعلى العناصر كهروسالبية',
    question: 'The most electronegative element mentioned in the lecture is:',
    options: [
      { key: 'A', text: 'Cl' },
      { key: 'B', text: 'O' },
      { key: 'C', text: 'F' },
      { key: 'D', text: 'Fr' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Fluorine (F) is the most electronegative element on the Pauling scale (value ~ 4.0).',
    explanationAr: 'عنصر الفلور (Fluorine F) هو الأعلى كهروسالبية في الجدول الدوري بأكمله (قيمته 4.0).',
    isHighYield: true
  },
  {
    id: 40,
    lecture: 'inorganic_1',
    questionNumber: 40,
    globalId: 'lec1_q40',
    topic: 'Periodic Trends',
    topicAr: 'اتجاه زيادة الكهروسالبية',
    question: 'Electronegativity generally increases across a period:',
    options: [
      { key: 'A', text: 'Right to left' },
      { key: 'B', text: 'Left to right' },
      { key: 'C', text: 'Top to bottom' },
      { key: 'D', text: 'Randomly' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Across a period from left to right, electronegativity increases towards the halogens due to greater effective nuclear charge.',
    explanationAr: 'تزداد الكهروسالبية عبر الدورة من اليسار إلى اليمين باتجاه الهالوجينات.',
    isHighYield: false
  },
  {
    id: 41,
    lecture: 'inorganic_1',
    questionNumber: 41,
    globalId: 'lec1_q41',
    topic: 'Periodic Trends',
    topicAr: 'اتجاه تناقص الكهروسالبية',
    question: 'Electronegativity generally decreases:',
    options: [
      { key: 'A', text: 'From left to right' },
      { key: 'B', text: 'From bottom to top' },
      { key: 'C', text: 'From top to bottom in a group' },
      { key: 'D', text: 'Across period 1 only' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Moving top to bottom down a group, the valence shell is further from the nucleus, decreasing electronegativity.',
    explanationAr: 'تقل الكهروسالبية عند الانتقال من أعلى لأسفل في المجموعة.',
    isHighYield: false
  },
  {
    id: 42,
    lecture: 'inorganic_1',
    questionNumber: 42,
    globalId: 'lec1_q42',
    topic: 'Chemical Bonding & Forces',
    topicAr: 'الرابطة الأيونية',
    question: 'Which type of bonding involves electrostatic interaction?',
    options: [
      { key: 'A', text: 'Covalent' },
      { key: 'B', text: 'Ionic' },
      { key: 'C', text: 'Coordinate covalent' },
      { key: 'D', text: 'Hydrogen bonding' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Ionic bonding is characterized primarily by non-directional electrostatic attraction between oppositely charged cations and anions (e.g., Na⁺ and Cl⁻).',
    explanationAr: 'الرابطة الأيونية (Ionic bonding) تقوم أساساً على التجاذب الكهروستاتيكي بين الأيونات الموجبة والأيونات السالبة.',
    isHighYield: true
  },
  {
    id: 43,
    lecture: 'inorganic_1',
    questionNumber: 43,
    globalId: 'lec1_q43',
    topic: 'Chemical Bonding & Forces',
    topicAr: 'الرابطة التساهمية',
    question: 'Covalent bonding involves:',
    options: [
      { key: 'A', text: 'Sharing of electron pairs' },
      { key: 'B', text: 'Complete loss of neutrons' },
      { key: 'C', text: 'Nuclear fusion' },
      { key: 'D', text: 'Only electrostatic attraction' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Covalent bonding is formed by the mutual sharing of one or more electron pairs between two atoms.',
    explanationAr: 'الرابطة التساهمية (Covalent bonding) تنشأ من التشارك في أزواج الإلكترونات بين الذرات.',
    isHighYield: false
  },
  {
    id: 44,
    lecture: 'inorganic_1',
    questionNumber: 44,
    globalId: 'lec1_q44',
    topic: 'Chemical Bonding & Forces',
    topicAr: 'الرابطة التساهمية التناسقية',
    question: 'Coordinate covalent bonding is exemplified in:',
    options: [
      { key: 'A', text: 'Sodium chloride' },
      { key: 'B', text: 'Boron trifluoride etherate' },
      { key: 'C', text: 'Hydrogen' },
      { key: 'D', text: 'Calcium chloride' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Boron trifluoride etherate (BF3·OEt2) is a classic example of a coordinate covalent (dative) bond, where the oxygen of ether donates both electrons into the empty p-orbital of electron-deficient boron.',
    explanationAr: 'مركب (Boron trifluoride etherate) مثال كلاسيكي على الرابطة التناسقية (Coordinate covalent)، حيث تمنح ذرة الأكسجين زوج إلكتروناتها لمدار البورون الفارغ.',
    isHighYield: true
  },
  {
    id: 45,
    lecture: 'inorganic_1',
    questionNumber: 45,
    globalId: 'lec1_q45',
    topic: 'Chemical Bonding & Forces',
    topicAr: 'شروط الرابطة الهيدروجينية',
    question: 'Hydrogen bonding requires hydrogen to be directly attached to:',
    options: [
      { key: 'A', text: 'C, S or Cl' },
      { key: 'B', text: 'F, O or N' },
      { key: 'C', text: 'Na, K or Ca' },
      { key: 'D', text: 'Fe, Cu or Zn' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Hydrogen bonding occurs when hydrogen is covalently linked to a small, highly electronegative atom with lone pairs: Fluorine (F), Oxygen (O), or Nitrogen (N).',
    explanationAr: 'لتكوين رابطة هيدروجينية، يجب أن تكون ذرة الهيدروجين مرتبطة تساهمياً بذرة ذات كهروسالبية عالية جداً وصغيرة الحجم: F أو O أو N.',
    isHighYield: true
  },
  {
    id: 46,
    lecture: 'inorganic_1',
    questionNumber: 46,
    globalId: 'lec1_q46',
    topic: 'Chemical Bonding & Forces',
    topicAr: 'تأثير الرابطة الهيدروجينية على غليان الماء',
    question: 'Hydrogen bonding helps explain the relatively high:',
    options: [
      { key: 'A', text: 'Melting point of metals' },
      { key: 'B', text: 'Boiling point of water' },
      { key: 'C', text: 'Atomic mass of oxygen' },
      { key: 'D', text: 'Ionization energy of sodium' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Extensive intermolecular hydrogen bonding networks between H2O molecules require high thermal energy to disrupt, leading to the anomalously high boiling point of water (100°C).',
    explanationAr: 'تفسر الروابط الهيدروجينية القوية بين جزيئات الماء سبب ارتفاع نقطة غليانه العالية غير المعتادة (100 درجة مئوية).',
    isHighYield: true
  },
  {
    id: 47,
    lecture: 'inorganic_1',
    questionNumber: 47,
    globalId: 'lec1_q47',
    topic: 'Chemical Bonding & Forces',
    topicAr: 'قوى فان دير فالس',
    question: 'Van der Waals forces are:',
    options: [
      { key: 'A', text: 'Strong ionic bonds' },
      { key: 'B', text: 'Weak intermolecular forces' },
      { key: 'C', text: 'Nuclear forces' },
      { key: 'D', text: 'Metallic bonds' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Van der Waals forces encompass weak intermolecular electrostatic attractions, including dipole-dipole, dipole-induced dipole, and London dispersion forces.',
    explanationAr: 'قوى فان دير فالس (Van der Waals forces) هي قوى تجاذب جزيئية ضعيفة بين الجزيئات.',
    isHighYield: false
  },
  {
    id: 48,
    lecture: 'inorganic_1',
    questionNumber: 48,
    globalId: 'lec1_q48',
    topic: 'Coordination Compounds',
    topicAr: 'استقرار المعقدات التناسقية وقاعدية الليجاند',
    question: 'The stability of a coordination complex depends on the metal ion and the:',
    options: [
      { key: 'A', text: 'Atomic mass of carbon' },
      { key: 'B', text: 'Basicity of the ligand' },
      { key: 'C', text: 'Number of neutrons only' },
      { key: 'D', text: 'Temperature only' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Coordination complex stability is governed by metal ion charge and radius (ionic potential) along with the Lewis basicity (electron-donating capacity) of the ligand.',
    explanationAr: 'يعتمد استقرار المعقد التناسقي على خصائص أيون الفلز وكذلك على قاعدية الليجاند (قدرته على منح أزواج الإلكترونات).',
    isHighYield: true
  },
  {
    id: 49,
    lecture: 'inorganic_1',
    questionNumber: 49,
    globalId: 'lec1_q49',
    topic: 'Coordination Compounds',
    topicAr: 'العدد التناسقي',
    question: 'The maximum number of sites of the central metal occupied by ligands is called the:',
    options: [
      { key: 'A', text: 'Atomic number' },
      { key: 'B', text: 'Coordination number' },
      { key: 'C', text: 'Mass number' },
      { key: 'D', text: 'Oxidation number' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The coordination number (CN) is the number of donor atoms/ligand attachment sites directly bonded to the central metal ion in a coordination entity.',
    explanationAr: 'العدد التناسقي (Coordination number) هو عدد مواقع الارتباط أو الذرات المانحة المرتبطة مباشرة بذرة أو أيون الفلز المركزي.',
    isHighYield: true
  },
  {
    id: 50,
    lecture: 'inorganic_1',
    questionNumber: 50,
    globalId: 'lec1_q50',
    topic: 'Coordination Compounds',
    topicAr: 'الليجاند ثنائي السن',
    question: 'A ligand capable of donating through two donor sites is called:',
    options: [
      { key: 'A', text: 'Monodentate' },
      { key: 'B', text: 'Bidentate' },
      { key: 'C', text: 'Tridentate' },
      { key: 'D', text: 'Hexadentate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'A bidentate ligand possesses two distinct electron-pair donor atoms capable of simultaneously coordinating to a central metal ion (e.g., ethylenediamine, oxalate).',
    explanationAr: 'الليجاند الذي يمتلك موقعي منح قادرين على الارتباط بالفلز يُسمى ثنائي السن (Bidentate ligand).',
    isHighYield: false
  },
  {
    id: 51,
    lecture: 'inorganic_1',
    questionNumber: 51,
    globalId: 'lec1_q51',
    topic: 'Coordination Compounds',
    topicAr: 'مدارات d الواقعة على المحاور الديكارتية',
    question: 'The d orbitals directed along the Cartesian axes are:',
    options: [
      { key: 'A', text: 'dxy, dyz' },
      { key: 'B', text: 'dxz, dxy' },
      { key: 'C', text: 'dx²−y² and dz²' },
      { key: 'D', text: 'All five equally' }
    ],
    correctAnswer: 'C',
    explanationEn: 'In crystal field theory, the eg orbitals (dx²−y² and dz²) point directly along the Cartesian x, y, and z axes, causing maximal electrostatic repulsion with octahedral ligands.',
    explanationAr: 'مدارات d الواقعة مباشرة على امتداد المحاور الديكارتية x و y و z هي dx²-y² و dz² (مجموعة eg).',
    isHighYield: true
  },
  {
    id: 52,
    lecture: 'inorganic_1',
    questionNumber: 52,
    globalId: 'lec1_q52',
    topic: 'Coordination Compounds',
    topicAr: 'عدد إلكترونات d لأيون الكروم الثلاثي',
    question: 'Cr³⁺ is described in the lecture as a:',
    options: [
      { key: 'A', text: 'd¹ ion' },
      { key: 'B', text: 'd² ion' },
      { key: 'C', text: 'd³ ion' },
      { key: 'D', text: 'd⁵ ion' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Chromium neutral atom is [Ar] 4s¹ 3d⁵. When losing 3 electrons to form Cr³⁺, one 4s and two 3d electrons are lost, leaving a 3d³ configuration.',
    explanationAr: 'أيون الكروم الثلاثي (Cr³⁺) يفقد 3 إلكترونات ليتبقى لديه 3 إلكترونات في المدار d (أي d³ ion).',
    isHighYield: true
  },
  {
    id: 53,
    lecture: 'inorganic_1',
    questionNumber: 53,
    globalId: 'lec1_q53',
    topic: 'Coordination Compounds',
    topicAr: 'العدد التناسقي لمعقد السيانو',
    question: 'In the Cr(CN)₆³⁻ complex, the coordination number is:',
    options: [
      { key: 'A', text: '2' },
      { key: 'B', text: '4' },
      { key: 'C', text: '6' },
      { key: 'D', text: '8' }
    ],
    correctAnswer: 'C',
    explanationEn: 'There are six monodentate cyanide (CN⁻) ligands bonded to the central chromium ion, so the coordination number is 6 (octahedral geometry).',
    explanationAr: 'في المعقد [Cr(CN)₆]³⁻، يوجد 6 ليجاندات سيانيد أحادية السن، لذا العدد التناسقي هو 6 (شكل ثماني السطوح).',
    isHighYield: false
  },
  {
    id: 54,
    lecture: 'inorganic_1',
    questionNumber: 54,
    globalId: 'lec1_q54',
    topic: 'Coordination Compounds',
    topicAr: 'توزيع إلكترونات d لأيون الحديد الثلاثي',
    question: 'Fe³⁺ is a:',
    options: [
      { key: 'A', text: 'd³ ion' },
      { key: 'B', text: 'd⁴ ion' },
      { key: 'C', text: 'd⁵ ion' },
      { key: 'D', text: 'd⁶ ion' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Iron neutral atom has configuration [Ar] 4s² 3d⁶. Fe³⁺ loses both 4s electrons and one 3d electron, resulting in [Ar] 3d⁵ (a d⁵ ion).',
    explanationAr: 'أيون الحديد الثلاثي (Fe³⁺) يفقد إلكتروني 4s وإلكترون واحد من 3d، فيصبح نظامه الإلكتروني d⁵.',
    isHighYield: true
  },
  {
    id: 55,
    lecture: 'inorganic_1',
    questionNumber: 55,
    globalId: 'lec1_q55',
    topic: 'Coordination Compounds',
    topicAr: 'معقد الحديد المائي عالي الغزل',
    question: 'Hexa-aquo iron(III) is described as a:',
    options: [
      { key: 'A', text: 'Low-spin complex' },
      { key: 'B', text: 'High-spin complex' },
      { key: 'C', text: 'Square planar complex' },
      { key: 'D', text: 'Linear complex' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Water (H2O) is a weak-field ligand; in [Fe(H2O)6]³⁺, the crystal field splitting (Δo) is small, producing a high-spin complex with 5 unpaired electrons.',
    explanationAr: 'معقد هكسا أكوا الحديد الثلاثي [Fe(H₂O)₆]³⁺ هو معقد عالي الغزل (High-spin) لأن الماء ليجاند ضعيف المجال ولا يقترن الإلكترونات.',
    isHighYield: true
  },
  {
    id: 56,
    lecture: 'inorganic_1',
    questionNumber: 56,
    globalId: 'lec1_q56',
    topic: 'Coordination Compounds',
    topicAr: 'تأثير السيانيد ومعقد منخفض الغزل',
    question: 'Replacing water ligands with cyano groups in an iron(III) complex produces a:',
    options: [
      { key: 'A', text: 'Higher-spin complex' },
      { key: 'B', text: 'Low-spin complex' },
      { key: 'C', text: 'Non-coordinated ion' },
      { key: 'D', text: 'Tetrahedral complex only' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Cyanide (CN⁻) is a strong-field ligand causing large crystal field splitting (Δo > pairing energy), resulting in forced electron pairing and a low-spin complex [Fe(CN)6]³⁻.',
    explanationAr: 'استبدال جزيئات الماء بمجموعات السيانو القوية ينتج معقداً منخفض الغزل (Low-spin complex) بسبب اتساع فرق الطاقة واقتران الإلكترونات.',
    isHighYield: true
  },
  {
    id: 57,
    lecture: 'inorganic_1',
    questionNumber: 57,
    globalId: 'lec1_q57',
    topic: 'Coordination Compounds',
    topicAr: 'تأثير الليجاندات القوية على الإلكترونات',
    question: 'Strong-field cyano groups cause electrons to:',
    options: [
      { key: 'A', text: 'Remain completely unpaired' },
      { key: 'B', text: 'Pair in the d orbitals' },
      { key: 'C', text: 'Leave the atom' },
      { key: 'D', text: 'Become protons' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Strong-field ligands (such as CN⁻ and CO) induce large d-orbital splitting, forcing electrons to overcome pairing energy and pair up in the lower t2g orbitals.',
    explanationAr: 'مجموعات السيانو قوية المجال تجبر إلكترونات المدار d على الازدواج (Pairing in d orbitals).',
    isHighYield: true
  },
  {
    id: 58,
    lecture: 'inorganic_1',
    questionNumber: 58,
    globalId: 'lec1_q58',
    topic: 'Coordination Compounds',
    topicAr: 'العدد التناسقي لفلزات 7 إلى 9 إلكترونات d',
    question: 'Transition metal ions with 7–9 d electrons generally have coordination number:',
    options: [
      { key: 'A', text: '1' },
      { key: 'B', text: '2' },
      { key: 'C', text: '4' },
      { key: 'D', text: '8' }
    ],
    correctAnswer: 'C',
    explanationEn: 'According to the lecture text, transition metal ions with d⁷–d⁹ configurations (e.g., Ni²⁺, Cu²⁺, Pt²⁺) characteristically adopt coordination number 4 (tetrahedral or square planar).',
    explanationAr: 'أيونات الفلزات الانتقالية التي تحتوي على 7 إلى 9 إلكترونات d تميل عموماً لامتلاك عدد تناسقي 4 (شكل رباعي السطوح أو مربع مستو).',
    isHighYield: true
  },
  {
    id: 59,
    lecture: 'inorganic_1',
    questionNumber: 59,
    globalId: 'lec1_q59',
    topic: 'Coordination Compounds',
    topicAr: 'المجال الضعيف مع d8 وشكل رباعي السطوح',
    question: 'A weak ligand field with a d⁸ ion may produce a:',
    options: [
      { key: 'A', text: 'Tetrahedral complex' },
      { key: 'B', text: 'Linear complex' },
      { key: 'C', text: 'Trigonal complex' },
      { key: 'D', text: 'Pentagonal complex' }
    ],
    correctAnswer: 'A',
    explanationEn: 'A weak field ligand interacting with a d⁸ metal ion (such as Ni²⁺ with chloride) produces an sp³ hybridized tetrahedral complex (e.g., [NiCl4]²⁻).',
    explanationAr: 'الليجاند ضعيف المجال مع أيون d⁸ (مثل Ni²⁺ مع الكلوريد) ينتج معقداً رباعي السطوح (Tetrahedral complex) بتهجين sp³.',
    isHighYield: true
  },
  {
    id: 60,
    lecture: 'inorganic_1',
    questionNumber: 60,
    globalId: 'lec1_q60',
    topic: 'Coordination Compounds',
    topicAr: 'تهجين المربع المستوي dsp2',
    question: 'A strong ligand can produce a square planar complex through:',
    options: [
      { key: 'A', text: 'sp³ hybridization' },
      { key: 'B', text: 'sp³d² hybridization' },
      { key: 'C', text: 'dsp² hybridization' },
      { key: 'D', text: 'd²sp³ only' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Strong-field ligands force electron pairing in d⁸ systems, vacating an inner d-orbital to allow dsp² hybridization, which yields a square planar geometry (e.g., [Ni(CN)4]²⁻).',
    explanationAr: 'الليجاند القوي يجبر الإلكترونات على الاقتران مما يتيح مدار d داخلي فارغ للتهجين dsp² منتجاً شكلاً مربعاً مستوياً (Square planar).',
    isHighYield: true
  },
  {
    id: 61,
    lecture: 'inorganic_1',
    questionNumber: 61,
    globalId: 'lec1_q61',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'دور العوامل المخلبية في التسمم',
    question: 'Chelating agents are important in the treatment of poisoning by:',
    options: [
      { key: 'A', text: 'Heavy metals' },
      { key: 'B', text: 'Carbohydrates' },
      { key: 'C', text: 'Vitamins' },
      { key: 'D', text: 'Proteins' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Chelating agents bind heavy metal ions (lead, mercury, arsenic, iron, copper) into stable, water-soluble, nontoxic ring complexes excreted readily by the kidneys.',
    explanationAr: 'العوامل المخلبية (Chelating agents) لها أهمية بالغة في علاج التسمم بالمعادن الثقيلة (Heavy metals) حيث تحبسها وتطرحها عبر الكلى.',
    isHighYield: true
  },
  {
    id: 62,
    lecture: 'inorganic_1',
    questionNumber: 62,
    globalId: 'lec1_q62',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'مركب EDTA المخلبي',
    question: 'Which of the following is a chelating agent mentioned in the lecture?',
    options: [
      { key: 'A', text: 'EDTA' },
      { key: 'B', text: 'Sodium chloride' },
      { key: 'C', text: 'Oxygen' },
      { key: 'D', text: 'Potassium bromide' }
    ],
    correctAnswer: 'A',
    explanationEn: 'EDTA (Ethylenediaminetetraacetic acid) is a classic hexadentate chelating agent widely used in pharmacology and toxicology to sequester divalent and trivalent cations.',
    explanationAr: 'مادة EDTA هي عامل مخلبي سداسي السن شهير جداً يُستخدم لمعالجة التسمم بالمعادن وحفظ الأدوية.',
    isHighYield: false
  },
  {
    id: 63,
    lecture: 'inorganic_1',
    questionNumber: 63,
    globalId: 'lec1_q63',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'اسم مركب BAL وديميركابرول',
    question: 'BAL stands for:',
    options: [
      { key: 'A', text: 'Basic Aluminum Ligand' },
      { key: 'B', text: 'Dimercaprol' },
      { key: 'C', text: 'Deferoxamine' },
      { key: 'D', text: 'Disodium edetate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'BAL stands for British Anti-Lewisite, chemically known as Dimercaprol (2,3-dimercaptopropanol).',
    explanationAr: 'مركب BAL (British Anti-Lewisite) يُعرف كيميائياً وصيدلانياً باسم ديميركابرول (Dimercaprol).',
    isHighYield: true
  },
  {
    id: 64,
    lecture: 'inorganic_1',
    questionNumber: 64,
    globalId: 'lec1_q64',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'استخدامات BAL في تسمم الزرنيخ والذهب',
    question: 'BAL is particularly useful in treatment of:',
    options: [
      { key: 'A', text: 'Arsenic or gold poisoning' },
      { key: 'B', text: 'Iron deficiency' },
      { key: 'C', text: 'Acne' },
      { key: 'D', text: 'Anaemia' }
    ],
    correctAnswer: 'A',
    explanationEn: 'BAL (Dimercaprol) contains two sulfhydryl (-SH) groups that avidly chelate arsenic, gold, and mercury, preventing their binding to vital cellular enzymes.',
    explanationAr: 'يُستخدم BAL (Dimercaprol) بشكل خاص وفعال في علاج التسمم بالزرنيخ والذهب والزئبق بفضل مجموعات الثيول (-SH).',
    isHighYield: true
  },
  {
    id: 65,
    lecture: 'inorganic_1',
    questionNumber: 65,
    globalId: 'lec1_q65',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'استخدام البنيسيلامين في داء ويلسون',
    question: 'Penicillamine is used in the treatment of:',
    options: [
      { key: 'A', text: 'Wilson\'s disease' },
      { key: 'B', text: 'Asphyxia' },
      { key: 'C', text: 'Burns only' },
      { key: 'D', text: 'Athlete\'s foot only' }
    ],
    correctAnswer: 'A',
    explanationEn: 'D-Penicillamine is an oral copper-chelating agent that is the standard treatment for Wilson\'s disease (hepatolenticular degeneration).',
    explanationAr: 'يُستخدم البنيسيلامين (Penicillamine) كعلاج أساسي لداء ويلسون (Wilson\'s disease) لخلب النحاس الفائض.',
    isHighYield: true
  },
  {
    id: 66,
    lecture: 'inorganic_1',
    questionNumber: 66,
    globalId: 'lec1_q66',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'داء ويلسون وتراكم النحاس',
    question: 'Wilson\'s disease is associated with increased levels of:',
    options: [
      { key: 'A', text: 'Sodium' },
      { key: 'B', text: 'Calcium' },
      { key: 'C', text: 'Copper' },
      { key: 'D', text: 'Chloride' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Wilson\'s disease is an autosomal recessive genetic disorder of copper metabolism causing toxic accumulation of copper in the liver, brain, and eyes (Kayser-Fleischer rings).',
    explanationAr: 'داء ويلسون (Wilson\'s disease) ناتج عن خلل جيني يؤدي إلى تراكم سام لمعدن النحاس (Copper) في الكبد والمخ والأنسجة.',
    isHighYield: true
  },
  {
    id: 67,
    lecture: 'inorganic_1',
    questionNumber: 67,
    globalId: 'lec1_q67',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'معقد الديفيروكسامين مع الحديد الثلاثي',
    question: 'Deferoxamine forms an:',
    options: [
      { key: 'A', text: 'Octahedral complex with Fe³⁺' },
      { key: 'B', text: 'Tetrahedral complex with Fe²⁺' },
      { key: 'C', text: 'Square planar complex with Na⁺' },
      { key: 'D', text: 'Linear complex with Ca²⁺' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Deferoxamine (Desferal) is a hexadentate siderophore chelator that wraps around ferric iron (Fe³⁺) to form a very stable octahedral ferrioxamine complex.',
    explanationAr: 'يشكل الديفيروكسامين (Deferoxamine) معقداً ثماني السطوح (Octahedral complex) شديد الثبات مع الحديد الثلاثي Fe³⁺.',
    isHighYield: true
  },
  {
    id: 68,
    lecture: 'inorganic_1',
    questionNumber: 68,
    globalId: 'lec1_q68',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'انعدام تقارب الديفيروكسامين للحديد الثنائي',
    question: 'Deferoxamine has no affinity for:',
    options: [
      { key: 'A', text: 'Fe³⁺' },
      { key: 'B', text: 'Fe²⁺' },
      { key: 'C', text: 'Iron' },
      { key: 'D', text: 'Ferric ions' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Deferoxamine exhibits extraordinarily high selectivity for ferric ions (Fe³⁺, Kf ~ 10³¹) and virtually no affinity for ferrous ions (Fe²⁺) or divalent trace metals.',
    explanationAr: 'الديفيروكسامين نوعي جداً للحديد الثلاثي Fe³⁺ ولا يمتلك أي انجذاب أو تقارب للحديد الثنائي Fe²⁺.',
    isHighYield: true
  },
  {
    id: 69,
    lecture: 'inorganic_1',
    questionNumber: 69,
    globalId: 'lec1_q69',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'سبب عدم امتصاص الديفيروكسامين فموياً',
    question: 'Oral administration of deferoxamine is ineffective because it is:',
    options: [
      { key: 'A', text: 'Highly volatile' },
      { key: 'B', text: 'Not soluble in the gastrointestinal tract' },
      { key: 'C', text: 'Too acidic' },
      { key: 'D', text: 'A gas' }
    ],
    correctAnswer: 'B',
    explanationEn: 'As stated in the lecture slides, deferoxamine is ineffective orally because it is not properly absorbed/soluble across the GI mucosal tract, requiring parenteral (IV or IM) administration.',
    explanationAr: 'وفقاً لسلايدات المحاضرة، لا يعطى الديفيروكسامين فموياً لعلاج التسمم الجهازي لعدم ذائبيته وامتصاصه الكافي عبر الجهاز الهضمي.',
    isHighYield: true
  },
  {
    id: 70,
    lecture: 'inorganic_1',
    questionNumber: 70,
    globalId: 'lec1_q70',
    topic: 'Chelating Agents & Toxicology',
    topicAr: 'الترياق المخلبي للتسمم الحاد بالحديد',
    question: 'Which chelating agent is associated with acute iron poisoning according to the lecture?',
    options: [
      { key: 'A', text: 'BAL' },
      { key: 'B', text: 'Penicillamine' },
      { key: 'C', text: 'Deferoxamine' },
      { key: 'D', text: 'EDTA' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Deferoxamine (Desferoxamine / Desferal) is the specific antidote of choice for acute iron poisoning and chronic iron overload (hemochromatosis).',
    explanationAr: 'الديفيروكسامين (Deferoxamine) هو الترياق النوعي المعتمد لعلاج التسمم الحاد بالحديد (Acute iron poisoning).',
    isHighYield: true
  }
];
