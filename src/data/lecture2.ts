import { MCQQuestion } from '../types/quiz';

export const lecture2Questions: MCQQuestion[] = [
  {
    id: 71,
    lecture: 'inorganic_2',
    questionNumber: 1,
    globalId: 'lec2_q1',
    topic: 'Impurities & Sources',
    topicAr: 'تعريف الشوائب الصيدلانية',
    question: 'Impurity in a pharmaceutical substance is best defined as:',
    options: [
      { key: 'A', text: 'The active pharmaceutical ingredient' },
      { key: 'B', text: 'Any material other than the defined drug substance' },
      { key: 'C', text: 'Only toxic materials' },
      { key: 'D', text: 'Only inorganic salts' }
    ],
    correctAnswer: 'B',
    explanationEn: 'In pharmacopeial standards, an impurity is defined as any component or foreign entity present in the pharmaceutical product that is not the chemical entity defined as the active drug substance or excipient.',
    explanationAr: 'تُعرف الشائبة (Impurity) بأنها أي مادة غريبة موجودة في المستحضر الصيدلاني خلاف المادة الدوائية الفعالة المعرفة دستورياً.',
    isHighYield: true
  },
  {
    id: 72,
    lecture: 'inorganic_2',
    questionNumber: 2,
    globalId: 'lec2_q2',
    topic: 'Impurities & Sources',
    topicAr: 'الآثار المترتبة على وجود الشوائب',
    question: 'Which of the following may result from impurities?',
    options: [
      { key: 'A', text: 'Increased therapeutic effect always' },
      { key: 'B', text: 'Increased shelf life' },
      { key: 'C', text: 'Changes in odor, color, or taste' },
      { key: 'D', text: 'Complete chemical stability' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Impurities can trigger physical organoleptic defects such as unwanted changes in color, discoloration, unpleasant taste, or foul odor, as well as chemical degradation or toxicity.',
    explanationAr: 'قد تسبب الشوائب تغيرات غير مرغوبة في الخصائص الحسية للدواء مثل الرائحة أو اللون أو الطعم وتؤثر سلباً على جودته.',
    isHighYield: false
  },
  {
    id: 73,
    lecture: 'inorganic_2',
    questionNumber: 3,
    globalId: 'lec2_q3',
    topic: 'Impurities & Sources',
    topicAr: 'المصادر الرئيسية للشوائب (المواد الخام)',
    question: 'Which is a major source of pharmaceutical impurities?',
    options: [
      { key: 'A', text: 'Raw materials' },
      { key: 'B', text: 'Pure distilled water only' },
      { key: 'C', text: 'Packaging labels' },
      { key: 'D', text: 'Patient age' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Raw materials utilized in chemical manufacturing are one of the primary sources from which impurities, by-products, and natural mineral contaminants enter pharmaceutical substances.',
    explanationAr: 'المواد الخام (Raw materials) المستخدمة في التصنيع هي أحد أهم المصادر الرئيسية لدخول الشوائب في المستحضرات.',
    isHighYield: true
  },
  {
    id: 74,
    lecture: 'inorganic_2',
    questionNumber: 4,
    globalId: 'lec2_q4',
    topic: 'Impurities & Sources',
    topicAr: 'شوائب الملح الصخري وكلوريد الصوديوم',
    question: 'Rock salt used in the preparation of sodium chloride may contain:',
    options: [
      { key: 'A', text: 'Calcium and magnesium chlorides' },
      { key: 'B', text: 'Sodium nitrate only' },
      { key: 'C', text: 'Potassium iodide only' },
      { key: 'D', text: 'Silver chloride' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Natural rock salt contains substantial amounts of calcium chloride (CaCl2) and magnesium chloride (MgCl2) as native mineral impurities.',
    explanationAr: 'الملح الصخري الطبيعي يحتوي عادة على شوائب من أملاح كلوريد الكالسيوم وكلوريد المغنيسيوم (CaCl₂ و MgCl₂).',
    isHighYield: true
  },
  {
    id: 75,
    lecture: 'inorganic_2',
    questionNumber: 5,
    globalId: 'lec2_q5',
    topic: 'Impurities & Sources',
    topicAr: 'بقايا الكواشف أثناء التصنيع',
    question: 'Reagents remaining incompletely removed after manufacturing may:',
    options: [
      { key: 'A', text: 'Become impurities in the final product' },
      { key: 'B', text: 'Increase purity' },
      { key: 'C', text: 'Prevent degradation completely' },
      { key: 'D', text: 'Act only as preservatives' }
    ],
    correctAnswer: 'A',
    explanationEn: 'If reagents, solvents, or catalysts used during intermediate synthesis are not thoroughly washed or purified away, they carry over as residual impurities in the finished drug.',
    explanationAr: 'الكواشف غير المزالة تماماً أثناء التصنيع تظل كشوائب ومخلفات متبقية في المنتج النهائي.',
    isHighYield: false
  },
  {
    id: 76,
    lecture: 'inorganic_2',
    questionNumber: 6,
    globalId: 'lec2_q6',
    topic: 'Water Quality & Types',
    topicAr: 'الماء المقطر وخلوه من الشوائب',
    question: 'Which type of water is described as free from inorganic and organic impurities?',
    options: [
      { key: 'A', text: 'Tap water' },
      { key: 'B', text: 'Softened water' },
      { key: 'C', text: 'Demineralized water' },
      { key: 'D', text: 'Distilled water' }
    ],
    correctAnswer: 'D',
    explanationEn: 'Distilled water is prepared by vaporization and condensation, removing non-volatile inorganic minerals, microorganisms, and non-volatile organic matter.',
    explanationAr: 'الماء المقطر (Distilled water) يعتبر نقياً وخالياً من الشوائب غير العضوية والعضوية على حد سواء بفضل عملية التبخير والتكثيف.',
    isHighYield: true
  },
  {
    id: 77,
    lecture: 'inorganic_2',
    questionNumber: 7,
    globalId: 'lec2_q7',
    topic: 'Water Quality & Types',
    topicAr: 'تحضير الماء منزوع المعادن بالتبادل الأيوني',
    question: 'Demineralized water is mainly prepared by:',
    options: [
      { key: 'A', text: 'Distillation' },
      { key: 'B', text: 'Ion exchange' },
      { key: 'C', text: 'Filtration only' },
      { key: 'D', text: 'Evaporation' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Demineralized (deionized) water is produced by passing water through cation and anion exchange resin beds.',
    explanationAr: 'الماء منزوع المعادن (Demineralized water) يتم تحضيره أساساً عبر عملية التبادل الأيوني (Ion exchange resins).',
    isHighYield: true
  },
  {
    id: 78,
    lecture: 'inorganic_2',
    questionNumber: 8,
    globalId: 'lec2_q8',
    topic: 'Water Quality & Types',
    topicAr: 'الشوائب التي قد تبقى في الماء منزوع المعادن',
    question: 'Demineralized water may still contain:',
    options: [
      { key: 'A', text: 'Calcium and magnesium only' },
      { key: 'B', text: 'Bacteria, pyrogens and organic impurities' },
      { key: 'C', text: 'Chloride and sulfate only' },
      { key: 'D', text: 'No impurities whatsoever' }
    ],
    correctAnswer: 'B',
    explanationEn: 'While ion exchange strips ionic minerals effectively, non-ionic organic molecules, bacteria, and bacterial endotoxins (pyrogens) are not removed and can proliferate.',
    explanationAr: 'الماء منزوع المعادن (Demineralized) يزيل الأيونات فقط، لكنه قد يظل محتوياً على البكتيريا والمواد الحارورية (Pyrogens) والشوائب العضوية غير المتأينة.',
    isHighYield: true
  },
  {
    id: 79,
    lecture: 'inorganic_2',
    questionNumber: 9,
    globalId: 'lec2_q9',
    topic: 'Water Quality & Types',
    topicAr: 'مكونات ماء الصنبور',
    question: 'Tap water may contain:',
    options: [
      { key: 'A', text: 'Mg, Ca, Na, sulfates, chlorides and carbonates' },
      { key: 'B', text: 'Only sodium chloride' },
      { key: 'C', text: 'Only organic compounds' },
      { key: 'D', text: 'Only pyrogens' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Untreated or municipal tap water contains various dissolved minerals including calcium, magnesium, sodium, carbonates, bicarbonates, sulfates, and chlorides.',
    explanationAr: 'ماء الصنبور (Tap water) يحتوي على مزيج من المعادن الذائبة مثل الكالسيوم، المغنيسيوم، الصوديوم، الكبريتات، الكلوريدات والكربونات.',
    isHighYield: false
  },
  {
    id: 80,
    lecture: 'inorganic_2',
    questionNumber: 10,
    globalId: 'lec2_q10',
    topic: 'Impurities & Sources',
    topicAr: 'شوائب برومات الصوديوم في بروميد الصوديوم',
    question: 'Sodium bromate may remain as an impurity in sodium bromide if:',
    options: [
      { key: 'A', text: 'It is completely converted' },
      { key: 'B', text: 'It is not completely reduced' },
      { key: 'C', text: 'Distillation is performed' },
      { key: 'D', text: 'Water is removed' }
    ],
    correctAnswer: 'B',
    explanationEn: 'During NaBr synthesis via bromine and sodium hydroxide (giving NaBr and NaBrO3), if the bromate intermediate is not fully reduced with charcoal/reductant, residual NaBrO3 remains as an impurity.',
    explanationAr: 'في تحضير بروميد الصوديوم، إذا لم يتم اختزال برومات الصوديوم (NaBrO₃) بالكامل، فإنها تتبقى كشائبة في المنتج النهائي.',
    isHighYield: true
  },
  {
    id: 81,
    lecture: 'inorganic_2',
    questionNumber: 11,
    globalId: 'lec2_q11',
    topic: 'Impurities & Sources',
    topicAr: 'التلوث الجوي',
    question: 'Atmospheric contamination during manufacturing may involve:',
    options: [
      { key: 'A', text: 'Dust and gases' },
      { key: 'B', text: 'Only oxygen' },
      { key: 'C', text: 'Only nitrogen' },
      { key: 'D', text: 'Only water vapor' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Atmospheric contamination arises from ambient airborne particulate dust, spores, and noxious industrial gases (CO2, SO2, H2S).',
    explanationAr: 'التلوث الجوي أثناء التصنيع قد ينجم عن الغبار العالق في الهواء والغازات الجوية المختلفة.',
    isHighYield: false
  },
  {
    id: 82,
    lecture: 'inorganic_2',
    questionNumber: 12,
    globalId: 'lec2_q12',
    topic: 'Impurities & Sources',
    topicAr: 'امتصاص هيدروكسيد الصوديوم لغاز CO2',
    question: 'Sodium hydroxide readily absorbs atmospheric:',
    options: [
      { key: 'A', text: 'Nitrogen' },
      { key: 'B', text: 'Carbon dioxide' },
      { key: 'C', text: 'Hydrogen' },
      { key: 'D', text: 'Sulfur' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Solid and dissolved sodium hydroxide (NaOH) is deliquescent and avidity absorbs carbon dioxide (CO2) from the air to form sodium carbonate (Na2CO3) impurity.',
    explanationAr: 'هيدروكسيد الصوديوم (NaOH) يمتص بسرعة غاز ثاني أكسيد الكربون (CO₂) من الجو ليتحول جزئياً إلى كربونات الصوديوم.',
    isHighYield: true
  },
  {
    id: 83,
    lecture: 'inorganic_2',
    questionNumber: 13,
    globalId: 'lec2_q13',
    topic: 'Impurities & Sources',
    topicAr: 'التلوث المتبادل (Cross-contamination)',
    question: 'Cross-contamination may occur due to:',
    options: [
      { key: 'A', text: 'Airborne dust from powders and granules' },
      { key: 'B', text: 'Distilled water' },
      { key: 'C', text: 'Pure nitrogen' },
      { key: 'D', text: 'Amber bottles' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Cross-contamination occurs during pharmaceutical processing when airborne particles/dust of one drug powder travel to an adjacent batch of another product.',
    explanationAr: 'يحدث التلوث المتبادل (Cross-contamination) غالباً بسبب الغبار المتطاير في الهواء من المساحيق والحبيبات الدوائية المختلفة.',
    isHighYield: false
  },
  {
    id: 84,
    lecture: 'inorganic_2',
    questionNumber: 14,
    globalId: 'lec2_q14',
    topic: 'Impurities & Sources',
    topicAr: 'التلوث الميكروبي',
    question: 'Microbial contamination may involve:',
    options: [
      { key: 'A', text: 'Bacteria, fungi and algae' },
      { key: 'B', text: 'Only viruses' },
      { key: 'C', text: 'Only metals' },
      { key: 'D', text: 'Only salts' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Microbial bioburden can comprise pathogenic or opportunistic vegetative bacteria, bacterial spores, yeasts, molds/fungi, and algae.',
    explanationAr: 'التلوث الميكروبي يشمل نمو البكتيريا، الفطريات، الخمائر والطحالب في المستحضرات.',
    isHighYield: false
  },
  {
    id: 85,
    lecture: 'inorganic_2',
    questionNumber: 15,
    globalId: 'lec2_q15',
    topic: 'Impurities & Sources',
    topicAr: 'عوامل عدم الاستقرار الكيميائي',
    question: 'Chemical instability may be catalyzed by:',
    options: [
      { key: 'A', text: 'Light' },
      { key: 'B', text: 'Traces of acid or alkali' },
      { key: 'C', text: 'Metallic impurities' },
      { key: 'D', text: 'All of the above' }
    ],
    correctAnswer: 'D',
    explanationEn: 'Chemical degradation (oxidation, hydrolysis, photolysis) is strongly accelerated by light, acidic or basic pH shifts, and trace transition metal impurities (e.g., Fe, Cu acting as redox catalysts).',
    explanationAr: 'عدم الاستقرار الكيميائي والتفكك يتسارع بفعل الضوء، ووجود آثار من الأحماض أو القواعد، وشوائب المعادن الانتقالية المحفزة للأكسدة (جميع ما سبق).',
    isHighYield: true
  },
  {
    id: 86,
    lecture: 'inorganic_2',
    questionNumber: 16,
    globalId: 'lec2_q16',
    topic: 'Principles of Limit Tests',
    topicAr: 'الهدف من اختبارات الحدود (Limit Tests)',
    question: 'A limit test is mainly designed to:',
    options: [
      { key: 'A', text: 'Determine the exact molecular weight' },
      { key: 'B', text: 'Identify and control small quantities of impurities' },
      { key: 'C', text: 'Determine melting point' },
      { key: 'D', text: 'Identify active ingredients only' }
    ],
    correctAnswer: 'B',
    explanationEn: 'A pharmacopeial limit test is a quantitative or semi-quantitative assay designed to identify and control small permissible threshold amounts of inorganic impurities in pharmaceuticals.',
    explanationAr: 'اختبار الحد (Limit test) هو اختبار تحليلي نوعي أو شبه كمي يهدف إلى الكشف عن كميات ضئيلة من الشوائب وتحديد ما إذا كانت ضمن الحدود المسموح بها دستورياً.',
    isHighYield: true
  },
  {
    id: 87,
    lecture: 'inorganic_2',
    questionNumber: 17,
    globalId: 'lec2_q17',
    topic: 'Principles of Limit Tests',
    topicAr: 'أسطوانات نسلر (Nessler cylinders)',
    question: 'Limit tests for chloride, sulfate, iron, lead and heavy metals are carried out using:',
    options: [
      { key: 'A', text: 'Beakers' },
      { key: 'B', text: 'Nessler cylinders' },
      { key: 'C', text: 'Conical flasks only' },
      { key: 'D', text: 'Burettes' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Standard pharmacopeial limit tests for turbidity (Cl, SO4) and color comparison (Fe, Heavy Metals, Pb) utilize matched 50 mL flat-bottomed Nessler cylinders.',
    explanationAr: 'تُجرى اختبارات الحدود للكلوريد والكبريتات والحديد والرصاص والمعادن الثقيلة في أسطوانات نسلر المخصصة للمقارنة (Nessler cylinders).',
    isHighYield: true
  },
  {
    id: 88,
    lecture: 'inorganic_2',
    questionNumber: 18,
    globalId: 'lec2_q18',
    topic: 'Principles of Limit Tests',
    topicAr: 'مادة زجاج أسطوانات نسلر',
    question: 'Nessler cylinders are made of:',
    options: [
      { key: 'A', text: 'Plastic' },
      { key: 'B', text: 'Ordinary glass' },
      { key: 'C', text: 'Borosilicate glass' },
      { key: 'D', text: 'Metal' }
    ],
    correctAnswer: 'C',
    explanationEn: 'Nessler cylinders are precision optical-quality flat-bottomed tubes crafted from high-grade clear borosilicate glass to minimize parallax, color cast, and chemical leaching.',
    explanationAr: 'تُصنع أسطوانات نسلر من زجاج البوروسيليكات (Borosilicate glass) عالي النقاوة والمقاومة للمواد الكيميائية.',
    isHighYield: false
  },
  {
    id: 89,
    lecture: 'inorganic_2',
    questionNumber: 19,
    globalId: 'lec2_q19',
    topic: 'Principles of Limit Tests',
    topicAr: 'المقارنة مع المحلول القياسي (Standard solution)',
    question: 'In a limit test, the test solution is generally compared with:',
    options: [
      { key: 'A', text: 'Blank solution' },
      { key: 'B', text: 'Standard solution' },
      { key: 'C', text: 'Distilled water only' },
      { key: 'D', text: 'Solvent only' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The optical response (turbidity, color intensity, or stain) of the Test solution is directly compared side-by-side against a Standard solution prepared under identical conditions.',
    explanationAr: 'في اختبارات الحدود، تتم مقارنة عتامة أو لون محلول العينة بمحلول قياسي (Standard solution) يحتوي على الحد الأقصى المسموح به من الشائبة.',
    isHighYield: true
  },
  {
    id: 90,
    lecture: 'inorganic_2',
    questionNumber: 20,
    globalId: 'lec2_q20',
    topic: 'Principles of Limit Tests',
    topicAr: 'محتوى المحلول القياسي',
    question: 'The standard solution contains:',
    options: [
      { key: 'A', text: 'A known amount of impurity' },
      { key: 'B', text: 'No impurity' },
      { key: 'C', text: 'An unknown amount of impurity' },
      { key: 'D', text: 'Only the drug substance' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The Standard solution is prepared using an accurately measured known concentration of the pure impurity reference standard matching the pharmacopeial limit.',
    explanationAr: 'يحتوي المحلول القياسي (Standard solution) على كمية معلومة بدقة من الشائبة المراد اختبارها.',
    isHighYield: true
  },
  {
    id: 91,
    lecture: 'inorganic_2',
    questionNumber: 21,
    globalId: 'lec2_q21',
    topic: 'Limit Test for Chloride',
    topicAr: 'أساس اختبار الكلوريد (نترات الفضة)',
    question: 'The limit test for chloride is based on the reaction between chloride and:',
    options: [
      { key: 'A', text: 'Barium chloride' },
      { key: 'B', text: 'Silver nitrate' },
      { key: 'C', text: 'Hydrogen sulfide' },
      { key: 'D', text: 'Thioglycolic acid' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The limit test for chloride is based on the precipitation reaction between soluble chloride ions and silver nitrate (AgNO3): Cl⁻ + Ag⁺ → AgCl(s).',
    explanationAr: 'يعتمد اختبار حد الكلوريد على تفاعل أيونات الكلوريد مع نترات الفضة (AgNO₃) لتكوين راسب كلوريد الفضة.',
    isHighYield: true
  },
  {
    id: 92,
    lecture: 'inorganic_2',
    questionNumber: 22,
    globalId: 'lec2_q22',
    topic: 'Limit Test for Chloride',
    topicAr: 'راسب كلوريد الفضة AgCl',
    question: 'The precipitate/opalescence formed in the chloride test is due to:',
    options: [
      { key: 'A', text: 'AgCl' },
      { key: 'B', text: 'BaSO₄' },
      { key: 'C', text: 'FeS' },
      { key: 'D', text: 'PbS' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The opalescence / turbidity observed in the Nessler tube is caused by the formation of an insoluble white precipitate of Silver Chloride (AgCl).',
    explanationAr: 'العتامة أو العكر (Opalescence) المتكونة في اختبار الكلوريد تعود لتشكل كلوريد الفضة غير الذائب (AgCl).',
    isHighYield: true
  },
  {
    id: 93,
    lecture: 'inorganic_2',
    questionNumber: 23,
    globalId: 'lec2_q23',
    topic: 'Limit Test for Chloride',
    topicAr: 'دور حمض النيتريك المخفف',
    question: 'Dilute nitric acid is used in the chloride limit test mainly to:',
    options: [
      { key: 'A', text: 'Produce chloride ions' },
      { key: 'B', text: 'Maintain suitable acidic conditions and remove interfering impurities' },
      { key: 'C', text: 'Produce sulfate' },
      { key: 'D', text: 'Reduce silver nitrate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Dilute nitric acid (HNO3) prevents precipitation of other silver salts (such as carbonate, phosphate, and hydroxide) that could create false-positive turbidity, ensuring only AgCl precipitates.',
    explanationAr: 'يُضاف حمض النيتريك المخفف (Dilute HNO₃) لتوفير وسط حمضي ملائم يمنع ترسب أملاح الفضة الأخرى (كالـ Carbonates والفوسفات) كشوائب متداخلة.',
    isHighYield: true
  },
  {
    id: 94,
    lecture: 'inorganic_2',
    questionNumber: 24,
    globalId: 'lec2_q24',
    topic: 'Limit Test for Chloride',
    topicAr: 'تركيز المحلول القياسي للكلوريد',
    question: 'The chloride standard solution contains:',
    options: [
      { key: 'A', text: '2 ppm Cl' },
      { key: 'B', text: '10 ppm Cl' },
      { key: 'C', text: '25 ppm Cl' },
      { key: 'D', text: '100 ppm Cl' }
    ],
    correctAnswer: 'C',
    explanationEn: 'According to the lecture text, the standard chloride reference solution contains 25 ppm (parts per million) of chloride ions.',
    explanationAr: 'المحلول القياسي للكلوريد بحسب المحاضرة يحتوي على تركيز 25 جزء في المليون (25 ppm Cl).',
    isHighYield: true
  },
  {
    id: 95,
    lecture: 'inorganic_2',
    questionNumber: 25,
    globalId: 'lec2_q25',
    topic: 'Limit Test for Chloride',
    topicAr: 'تركيز نترات الفضة المستخدمة',
    question: 'Silver nitrate used in the chloride test is:',
    options: [
      { key: 'A', text: '0.01 M' },
      { key: 'B', text: '0.05 M' },
      { key: 'C', text: '0.1 M' },
      { key: 'D', text: '1 M' }
    ],
    correctAnswer: 'C',
    explanationEn: '0.1 M (0.1 molar) silver nitrate solution (AgNO3) is the reagent added to precipitate silver chloride in the test.',
    explanationAr: 'تركيز نترات الفضة المستخدمة ككاشف في اختبار الكلوريد هو 0.1 مولار (0.1 M AgNO₃).',
    isHighYield: false
  },
  {
    id: 96,
    lecture: 'inorganic_2',
    questionNumber: 26,
    globalId: 'lec2_q26',
    topic: 'Limit Test for Chloride',
    topicAr: 'حماية راسب AgCl من الضوء',
    question: 'After adding silver nitrate in the chloride test, the solution is protected from:',
    options: [
      { key: 'A', text: 'Heat' },
      { key: 'B', text: 'Light' },
      { key: 'C', text: 'Oxygen' },
      { key: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Silver chloride is photosensitive and photo-decomposes in light to metallic silver (gray-violet discoloration: 2AgCl → 2Ag + Cl2), so solutions must be shielded from light (or set aside in the dark for 5 minutes).',
    explanationAr: 'بعد إضافة نترات الفضة يجب حماية المحلول من الضوء (Light) لتجنب التحلل الضوئي لـ AgCl إلى فضة معدنية داكنة.',
    isHighYield: true
  },
  {
    id: 97,
    lecture: 'inorganic_2',
    questionNumber: 27,
    globalId: 'lec2_q27',
    topic: 'Limit Test for Chloride',
    topicAr: 'طريقة مقارنة نتيجة اختبار الكلوريد',
    question: 'The chloride test is compared by observing:',
    options: [
      { key: 'A', text: 'Purple color' },
      { key: 'B', text: 'Violet stain' },
      { key: 'C', text: 'Opalescence/turbidity' },
      { key: 'D', text: 'Green color' }
    ],
    correctAnswer: 'C',
    explanationEn: 'The chloride limit test is evaluated by visual comparison of opalescence (cloudiness/turbidity) against a black or dark background across the transverse axis of the Nessler cylinders.',
    explanationAr: 'تتم مقارنة اختبار الكلوريد عبر ملاحظة درجة العتامة أو العكر (Opalescence / Turbidity).',
    isHighYield: true
  },
  {
    id: 98,
    lecture: 'inorganic_2',
    questionNumber: 28,
    globalId: 'lec2_q28',
    topic: 'Limit Test for Sulfate',
    topicAr: 'أساس اختبار الكبريتات (كلوريد الباريوم)',
    question: 'The sulfate limit test is based on the reaction of sulfate with:',
    options: [
      { key: 'A', text: 'Silver nitrate' },
      { key: 'B', text: 'Barium chloride' },
      { key: 'C', text: 'Sodium sulfide' },
      { key: 'D', text: 'Dithizone' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The limit test for sulfate is based on the reaction between sulfate ions and barium chloride (BaCl2) to yield an insoluble white precipitate of barium sulfate.',
    explanationAr: 'يعتمد اختبار حد الكبريتات على تفاعل أيونات الكبريتات مع كلوريد الباريوم (BaCl₂).',
    isHighYield: true
  },
  {
    id: 99,
    lecture: 'inorganic_2',
    questionNumber: 29,
    globalId: 'lec2_q29',
    topic: 'Limit Test for Sulfate',
    topicAr: 'راسب كبريتات الباريوم BaSO4',
    question: 'The precipitate formed in the sulfate test is:',
    options: [
      { key: 'A', text: 'AgCl' },
      { key: 'B', text: 'BaSO₄' },
      { key: 'C', text: 'PbS' },
      { key: 'D', text: 'Fe-thioglycolate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The precipitate responsible for turbidity in this limit test is Barium Sulfate (BaSO4): SO4²⁻ + Ba²⁺ → BaSO4(s).',
    explanationAr: 'الراسب المتكون في اختبار الكبريتات هو كبريتات الباريوم غير الذائبة (BaSO₄).',
    isHighYield: true
  },
  {
    id: 100,
    lecture: 'inorganic_2',
    questionNumber: 30,
    globalId: 'lec2_q30',
    topic: 'Limit Test for Sulfate',
    topicAr: 'المظهر البصري لاختبار الكبريتات',
    question: 'The sulfate test produces:',
    options: [
      { key: 'A', text: 'Turbidity/opalescence' },
      { key: 'B', text: 'Violet stain' },
      { key: 'C', text: 'Yellow stain' },
      { key: 'D', text: 'Blue color' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Like the chloride test, the sulfate test produces a white turbidity / opalescence compared in Nessler cylinders against a dark background.',
    explanationAr: 'ينتج عن اختبار الكبريتات عتامة أو عكر (Turbidity / Opalescence).',
    isHighYield: false
  },
  {
    id: 101,
    lecture: 'inorganic_2',
    questionNumber: 31,
    globalId: 'lec2_q31',
    topic: 'Limit Test for Sulfate',
    topicAr: 'تركيز محلول كلوريد الباريوم',
    question: 'Barium chloride solution used in the test has a concentration of:',
    options: [
      { key: 'A', text: '5% w/v' },
      { key: 'B', text: '10% w/v' },
      { key: 'C', text: '25% w/v' },
      { key: 'D', text: '50% w/v' }
    ],
    correctAnswer: 'C',
    explanationEn: 'According to the pharmacopeial method stated in the lecture, barium chloride reagent is prepared at 25% w/v (barium chloride reagent).',
    explanationAr: 'تركيز محلول كلوريد الباريوم المستخدم في كاشف الكبريتات هو 25% w/v.',
    isHighYield: true
  },
  {
    id: 102,
    lecture: 'inorganic_2',
    questionNumber: 32,
    globalId: 'lec2_q32',
    topic: 'Limit Test for Sulfate',
    topicAr: 'تركيز حمض الأسيتيك المستخدم',
    question: 'Acetic acid used in the sulfate test is:',
    options: [
      { key: 'A', text: '1 M' },
      { key: 'B', text: '2 M' },
      { key: 'C', text: '5 M' },
      { key: 'D', text: '10 M' }
    ],
    correctAnswer: 'C',
    explanationEn: 'The acid specified in the lecture protocol for acidifying the sulfate test mixture is 5 M acetic acid.',
    explanationAr: 'حمض الأسيتيك (الخل) المستخدم لضبط حموضة اختبار الكبريتات تركيزه 5 مولار (5 M Acetic acid).',
    isHighYield: false
  },
  {
    id: 103,
    lecture: 'inorganic_2',
    questionNumber: 33,
    globalId: 'lec2_q33',
    topic: 'Limit Test for Sulfate',
    topicAr: 'دور كبريتات البوتاسيوم في زيادة حساسية الكاشف',
    question: 'Potassium sulfate is used in the sulfate test to:',
    options: [
      { key: 'A', text: 'Decrease sensitivity' },
      { key: 'B', text: 'Increase sensitivity by providing ionic concentration' },
      { key: 'C', text: 'Produce a violet color' },
      { key: 'D', text: 'Remove iron' }
    ],
    correctAnswer: 'B',
    explanationEn: 'A trace amount of potassium sulfate in alcohol is added to the barium chloride reagent ("barium sulfate reagent") to seed crystallization and increase testing sensitivity by providing a threshold ionic concentration.',
    explanationAr: 'تُضاف كمية ضئيلة من كبريتات البوتاسيوم لكاشف الباريوم لزيادة الحساسية (Increase sensitivity) عبر تحفيز بذر البلورات وتوفير تركيز أيوني موحد.',
    isHighYield: true
  },
  {
    id: 104,
    lecture: 'inorganic_2',
    questionNumber: 34,
    globalId: 'lec2_q34',
    topic: 'Limit Test for Iron',
    topicAr: 'كاشف حمض الثيوجليكوليك لاختبار الحديد',
    question: 'The limit test for iron is based on the reaction of iron with:',
    options: [
      { key: 'A', text: 'Thioglycolic acid' },
      { key: 'B', text: 'Silver nitrate' },
      { key: 'C', text: 'Dithizone' },
      { key: 'D', text: 'Hydrogen sulfide' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The limit test for iron is based on the reaction between iron and thioglycolic acid (mercaptoacetic acid) in an ammoniacal alkaline medium.',
    explanationAr: 'يعتمد اختبار حد الحديد على تفاعل الحديد مع حمض الثيوجليكوليك (Thioglycolic acid) في وسط قلوي بالنشادر.',
    isHighYield: true
  },
  {
    id: 105,
    lecture: 'inorganic_2',
    questionNumber: 35,
    globalId: 'lec2_q35',
    topic: 'Limit Test for Iron',
    topicAr: 'اللون البنفسجي لمركب الحديد',
    question: 'The iron test produces a:',
    options: [
      { key: 'A', text: 'Yellow color' },
      { key: 'B', text: 'Purple color' },
      { key: 'C', text: 'Green color' },
      { key: 'D', text: 'Black stain' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The reaction produces an intense, water-soluble purple (or reddish-purple) coordination complex.',
    explanationAr: 'ينتج عن تفاعل اختبار الحديد لون بنفسجي أرجواني واضح (Purple color).',
    isHighYield: true
  },
  {
    id: 106,
    lecture: 'inorganic_2',
    questionNumber: 36,
    globalId: 'lec2_q36',
    topic: 'Limit Test for Iron',
    topicAr: 'معقد ثيوجليكولات الحديدوز Ferrous thioglycolate',
    question: 'The colored compound formed in the iron test is:',
    options: [
      { key: 'A', text: 'Silver chloride' },
      { key: 'B', text: 'Ferrous thioglycolate' },
      { key: 'C', text: 'Lead dithizonate' },
      { key: 'D', text: 'Barium sulfate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Thioglycolic acid first reduces Fe³⁺ to Fe²⁺, and then coordinates with Fe²⁺ in alkaline solution to form the purple complex: Ferrous thioglycolate [Fe(HSCH2COO)2].',
    explanationAr: 'المعقد الملون الناتج هو ثيوجليكولات الحديدوز (Ferrous thioglycolate)، حيث يقوم الكاشف باختزال Fe³⁺ إلى Fe²⁺ ثم تكوين المعقد البنفسجي.',
    isHighYield: true
  },
  {
    id: 107,
    lecture: 'inorganic_2',
    questionNumber: 37,
    globalId: 'lec2_q37',
    topic: 'Limit Test for Iron',
    topicAr: 'دور حمض الستريك لمنع تداخل الأيونات الأخرى',
    question: 'Citric acid in the iron test is used to:',
    options: [
      { key: 'A', text: 'Complex metal cations other than iron' },
      { key: 'B', text: 'Produce chloride' },
      { key: 'C', text: 'Oxidize sulfate' },
      { key: 'D', text: 'Produce arsine' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Citric acid acts as a masking/complexing agent that binds other interfering polyvalent metallic cations (and prevents premature precipitation of iron as insoluble iron hydroxide when ammonia is added).',
    explanationAr: 'يُضاف حمض الستريك (Citric acid) كعامل حجب لتكوين معقدات مع الكاتيونات الفلزية الأخرى ومنع ترسب هيدروكسيدات المعادن عند إضافة الأمونيا.',
    isHighYield: true
  },
  {
    id: 108,
    lecture: 'inorganic_2',
    questionNumber: 38,
    globalId: 'lec2_q38',
    topic: 'Limit Test for Iron',
    topicAr: 'إضافة الأمونيا لجعل الوسط قلوياً',
    question: 'Ammonia is added in the iron test to:',
    options: [
      { key: 'A', text: 'Make the solution acidic' },
      { key: 'B', text: 'Make the solution alkaline' },
      { key: 'C', text: 'Produce arsine' },
      { key: 'D', text: 'Precipitate chloride' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The purple ferrous thioglycolate coordination chromophore requires an alkaline pH environment to develop its stable, intense color; ammonia makes the solution alkaline.',
    explanationAr: 'تُضاف الأمونيا (Ammonia) لجعل الوسط قلوياً (Alkaline)، وهو شرط أساسي لظهور واستقرار اللون البنفسجي لثيوجليكولات الحديدوز.',
    isHighYield: true
  },
  {
    id: 109,
    lecture: 'inorganic_2',
    questionNumber: 39,
    globalId: 'lec2_q39',
    topic: 'Limit Test for Iron',
    topicAr: 'المقارنة الرأسية في اختبار الحديد',
    question: 'The color in the iron test is compared:',
    options: [
      { key: 'A', text: 'Horizontally' },
      { key: 'B', text: 'Vertically' },
      { key: 'C', text: 'After filtration only' },
      { key: 'D', text: 'Under UV light' }
    ],
    correctAnswer: 'B',
    explanationEn: 'In colored solution comparisons (such as iron in Nessler tubes), the depth of color is viewed vertically down through the longitudinal axis of the cylinder against a white background.',
    explanationAr: 'تتم مقارنة كثافة اللون في اختبار الحديد بالنظر رأسياً (Vertically) من أعلى إلى أسفل عبر أسطوانة نسلر فوق خلفية بيضاء.',
    isHighYield: true
  },
  {
    id: 110,
    lecture: 'inorganic_2',
    questionNumber: 40,
    globalId: 'lec2_q40',
    topic: 'Limit Test for Heavy Metals',
    topicAr: 'كاشف كبريتيد الهيدروجين للمعادن الثقيلة',
    question: 'The heavy-metal limit test commonly uses:',
    options: [
      { key: 'A', text: 'Hydrogen sulfide' },
      { key: 'B', text: 'Silver nitrate' },
      { key: 'C', text: 'Thioglycolic acid' },
      { key: 'D', text: 'Dithizone only' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The standard pharmacopeial limit test for heavy metals (Method A/B) uses hydrogen sulfide (H2S) solution or sodium sulfide to precipitate metallic sulfides.',
    explanationAr: 'يستخدم اختبار حد المعادن الثقيلة عادة كبريتيد الهيدروجين (Hydrogen sulfide H₂S) ككاشف ترسيبي.',
    isHighYield: true
  },
  {
    id: 111,
    lecture: 'inorganic_2',
    questionNumber: 41,
    globalId: 'lec2_q41',
    topic: 'Limit Test for Heavy Metals',
    topicAr: 'تكوين أملاح الكبريتيد مع H2S',
    question: 'Heavy metals react with hydrogen sulfide to form:',
    options: [
      { key: 'A', text: 'Sulfates' },
      { key: 'B', text: 'Sulfides' },
      { key: 'C', text: 'Nitrates' },
      { key: 'D', text: 'Carbonates' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Heavy metals (M²⁺) react with sulfide ions (S²⁻) to form sparingly soluble colloidal metallic sulfides (MS): M²⁺ + H2S → MS + 2H⁺.',
    explanationAr: 'تتفاعل المعادن الثقيلة مع H₂S لتشكل كبريتيدات معدنية غروية غير ذائبة (Sulfides).',
    isHighYield: false
  },
  {
    id: 112,
    lecture: 'inorganic_2',
    questionNumber: 42,
    globalId: 'lec2_q42',
    topic: 'Limit Test for Heavy Metals',
    topicAr: 'اللون البني المميز للمعادن الثقيلة',
    question: 'The heavy-metal test generally produces a:',
    options: [
      { key: 'A', text: 'Brownish color' },
      { key: 'B', text: 'Purple color' },
      { key: 'C', text: 'Violet chloroform layer' },
      { key: 'D', text: 'Yellow stain only' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The formation of colloidal heavy metal sulfides produces a distinctive yellowish-brown to brownish colloidal dispersion/color.',
    explanationAr: 'ينتج عن اختبار المعادن الثقيلة لون بني أو بني مائل للصفرة (Brownish color).',
    isHighYield: true
  },
  {
    id: 113,
    lecture: 'inorganic_2',
    questionNumber: 43,
    globalId: 'lec2_q43',
    topic: 'Limit Test for Heavy Metals',
    topicAr: 'التعبير عن شوائب المعادن الثقيلة كأجزاء من الرصاص',
    question: 'Heavy-metal impurities are expressed as:',
    options: [
      { key: 'A', text: 'Parts of iron per million' },
      { key: 'B', text: 'Parts of lead per million' },
      { key: 'C', text: 'Parts of chloride per million' },
      { key: 'D', text: 'Parts of sulfate per million' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Because lead is the primary prototype toxic heavy metal, collective heavy-metal limits in pharmacopeias are conventionally calibrated and expressed as parts of lead per million (ppm Pb).',
    explanationAr: 'يتم التعبير عن شوائب المعادن الثقيلة الإجمالية بـ أجزاء من الرصاص في المليون (Parts of lead per million - ppm Pb).',
    isHighYield: true
  },
  {
    id: 114,
    lecture: 'inorganic_2',
    questionNumber: 44,
    globalId: 'lec2_q44',
    topic: 'Limit Test for Heavy Metals',
    topicAr: 'الحد المعتاد للمعادن الثقيلة 20 ppm',
    question: 'The usual heavy-metal limit according to the lecture is:',
    options: [
      { key: 'A', text: '2 ppm' },
      { key: 'B', text: '5 ppm' },
      { key: 'C', text: '20 ppm' },
      { key: 'D', text: '200 ppm' }
    ],
    correctAnswer: 'C',
    explanationEn: 'As stated explicitly in the lecture slides, the conventional pharmacopeial limit for heavy metals in standard pharmaceutical raw substances is 20 ppm.',
    explanationAr: 'الحد المعتاد والمسموح به عموماً لشوائب المعادن الثقيلة وفق المحاضرة هو 20 جزء في المليون (20 ppm).',
    isHighYield: true
  },
  {
    id: 115,
    lecture: 'inorganic_2',
    questionNumber: 45,
    globalId: 'lec2_q45',
    topic: 'Limit Test for Heavy Metals',
    topicAr: 'المعادن المستجيبة للاختبار',
    question: 'Which of the following can respond to the heavy-metal test?',
    options: [
      { key: 'A', text: 'Lead' },
      { key: 'B', text: 'Mercury' },
      { key: 'C', text: 'Bismuth' },
      { key: 'D', text: 'All of the above' }
    ],
    correctAnswer: 'D',
    explanationEn: 'The group of heavy metals precipitated by sulfide at pH 3–4 includes Lead (Pb), Mercury (Hg), Bismuth (Bi), Copper (Cu), Arsenic (As), Antimony (Sb), Tin (Sn), and Cadmium (Cd).',
    explanationAr: 'تستجيب لاختبار المعادن الثقيلة العديد من العناصر السامة كالرصاص والزئبق والبزموت والنحاس (جميع ما سبق).',
    isHighYield: true
  },
  {
    id: 116,
    lecture: 'inorganic_2',
    questionNumber: 46,
    globalId: 'lec2_q46',
    topic: 'Limit Test for Heavy Metals',
    topicAr: 'ضبط درجة الحموضة pH 3-4 في الطريقة A',
    question: 'In Method A of the heavy-metal test, the pH is adjusted to:',
    options: [
      { key: 'A', text: '1–2' },
      { key: 'B', text: '3–4' },
      { key: 'C', text: '6–7' },
      { key: 'D', text: '9–10' }
    ],
    correctAnswer: 'B',
    explanationEn: 'In Method A of the heavy metal limit test, dilute acetic acid / ammonium acetate buffer is used to strictly maintain the solution at pH 3.0 to 4.0.',
    explanationAr: 'في الطريقة A لاختبار المعادن الثقيلة، يتم ضبط الأس الهيدروجيني بدقة عند pH 3–4.',
    isHighYield: true
  },
  {
    id: 117,
    lecture: 'inorganic_2',
    questionNumber: 47,
    globalId: 'lec2_q47',
    topic: 'Limit Test for Heavy Metals',
    topicAr: 'تحضير محلول H2S طازجاً',
    question: 'Hydrogen sulfide solution in Method A is:',
    options: [
      { key: 'A', text: 'Freshly prepared' },
      { key: 'B', text: 'Stored for several months' },
      { key: 'C', text: 'Replaced by nitric acid' },
      { key: 'D', text: 'Used only after heating' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Hydrogen sulfide water oxidizes readily upon air exposure to elemental sulfur (causing cloudy precipitation and loss of S²⁻ activity), so it must always be freshly prepared.',
    explanationAr: 'يجب أن يكون محلول كبريتيد الهيدروجين (H₂S) طازج التحضير (Freshly prepared) لأنه يتأكسد بالهواء الجوي ويفقد فاعليته.',
    isHighYield: true
  },
  {
    id: 118,
    lecture: 'inorganic_2',
    questionNumber: 48,
    globalId: 'lec2_q48',
    topic: 'Limit Test for Heavy Metals',
    topicAr: 'أهمية pH 3-4 في تكوين راسب غروي متجانس',
    question: 'The purpose of maintaining pH 3–4 is to:',
    options: [
      { key: 'A', text: 'Produce a colloidal and uniform precipitate' },
      { key: 'B', text: 'Destroy all metals' },
      { key: 'C', text: 'Prevent any reaction' },
      { key: 'D', text: 'Produce arsine gas' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Maintaining pH 3–4 ensures selective precipitation of group II heavy metals while preventing premature flocculation or coarse precipitation, producing an optically uniform colloidal suspension for accurate color comparison.',
    explanationAr: 'الحفاظ على درجة الحموضة عند pH 3–4 يضمن تكوين راسب غروي متجانس ومنتظم (Colloidal and uniform precipitate) يمكن مقارنته بصرياً بدقة.',
    isHighYield: true
  },
  {
    id: 119,
    lecture: 'inorganic_2',
    questionNumber: 49,
    globalId: 'lec2_q49',
    topic: 'Limit Test for Arsenic (Gutzeit)',
    topicAr: 'اختبار غوتزيت للزرنيخ (Gutzeit test)',
    question: 'The limit test for arsenic is also called:',
    options: [
      { key: 'A', text: 'Volhard test' },
      { key: 'B', text: 'Gutzeit test' },
      { key: 'C', text: 'Mohr test' },
      { key: 'D', text: 'Biuret test' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The pharmacopeial limit test for arsenic uses the specialized Gutzeit apparatus (or modified Gutzeit test).',
    explanationAr: 'يُعرف اختبار حد الزرنيخ الصيدلاني الشهير باسم اختبار غوتزيت (Gutzeit test).',
    isHighYield: true
  },
  {
    id: 120,
    lecture: 'inorganic_2',
    questionNumber: 50,
    globalId: 'lec2_q50',
    topic: 'Limit Test for Arsenic (Gutzeit)',
    topicAr: 'تحويل الزرنيخ إلى غاز الآرسين',
    question: 'The arsenic test is based on conversion of arsenic impurity into:',
    options: [
      { key: 'A', text: 'Arsine gas' },
      { key: 'B', text: 'Chlorine gas' },
      { key: 'C', text: 'Hydrogen sulfide' },
      { key: 'D', text: 'Carbon dioxide' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Arsenic impurities are reduced in the generator bottle to volatile arsine gas (AsH3), which ascends through the apparatus tube.',
    explanationAr: 'يقوم اختبار الزرنيخ على اختزال شوائب الزرنيخ وتحويلها إلى غاز الآرسين المتطاير (Arsine gas - AsH₃).',
    isHighYield: true
  },
  {
    id: 121,
    lecture: 'inorganic_2',
    questionNumber: 51,
    globalId: 'lec2_q51',
    topic: 'Limit Test for Arsenic (Gutzeit)',
    topicAr: 'تفاعل غاز الآرسين مع ورقة كلوريد الزئبق',
    question: 'Arsine gas reacts with:',
    options: [
      { key: 'A', text: 'Silver nitrate paper' },
      { key: 'B', text: 'Mercuric chloride test paper' },
      { key: 'C', text: 'Litmus paper' },
      { key: 'D', text: 'Starch paper' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Ascending arsine gas reacts specifically with mercuric chloride (HgCl2) impregnated test paper secured at the top of the Gutzeit apparatus.',
    explanationAr: 'يتفاعل غاز الآرسين المتصاعد مع ورقة كاشف مشربة بـ كلوريد الزئبقيك (Mercuric chloride paper HgCl₂).',
    isHighYield: true
  },
  {
    id: 122,
    lecture: 'inorganic_2',
    questionNumber: 52,
    globalId: 'lec2_q52',
    topic: 'Limit Test for Arsenic (Gutzeit)',
    topicAr: 'البقعة الصفراء أو البنية لغاز الآرسين',
    question: 'The reaction of arsine with mercuric chloride produces a:',
    options: [
      { key: 'A', text: 'Blue stain' },
      { key: 'B', text: 'Yellow or brown stain' },
      { key: 'C', text: 'Purple solution' },
      { key: 'D', text: 'Green precipitate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Arsine reacts with HgCl2 to form complex mercuric arsenides (such as As(HgCl)3 and Hg3As2), creating a characteristic yellow to brownish-yellow stain on the paper.',
    explanationAr: 'ينتج عن تفاعل الآرسين مع كلوريد الزئبقيك بقعة صفراء إلى بنية (Yellow or brown stain) يُقاس طولها وعمق لونها.',
    isHighYield: true
  },
  {
    id: 123,
    lecture: 'inorganic_2',
    questionNumber: 53,
    globalId: 'lec2_q53',
    topic: 'Limit Test for Arsenic (Gutzeit)',
    topicAr: 'اختزال حمض الزرنيخيك إلى حمض الزرنيخوز',
    question: 'Arsenic acid can be reduced to:',
    options: [
      { key: 'A', text: 'Arsenious acid' },
      { key: 'B', text: 'Sulfuric acid' },
      { key: 'C', text: 'Nitric acid' },
      { key: 'D', text: 'Acetic acid' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Arsenic present as arsenic acid (H3AsO4, As⁵⁺) is first reduced by potassium iodide / stannous chloride to arsenious acid (H3AsO3, As³⁺) prior to hydride generation.',
    explanationAr: 'يتم أولاً اختزال حمض الزرنيخيك الخماسي (Arsenic acid) إلى حمض الزرنيخوز الثلاثي (Arsenious acid).',
    isHighYield: true
  },
  {
    id: 124,
    lecture: 'inorganic_2',
    questionNumber: 54,
    globalId: 'lec2_q54',
    topic: 'Limit Test for Arsenic (Gutzeit)',
    topicAr: 'توليد الهيدروجين الوليد بواسطة الخارصين وحمض الهيدروكلوريك',
    question: 'Zinc and hydrochloric acid generate:',
    options: [
      { key: 'A', text: 'Oxygen' },
      { key: 'B', text: 'Nascent hydrogen' },
      { key: 'C', text: 'Chlorine' },
      { key: 'D', text: 'Nitrogen' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Reaction of granulated zinc with concentrated hydrochloric acid generates highly reactive nascent hydrogen (atomic [H]): Zn + 2HCl → ZnCl2 + 2[H].',
    explanationAr: 'تفاعل فلز الخارصين (Zinc) مع حمض الهيدروكلوريك يولد الهيدروجين الوليد شديد النشاط (Nascent hydrogen [H]).',
    isHighYield: true
  },
  {
    id: 125,
    lecture: 'inorganic_2',
    questionNumber: 55,
    globalId: 'lec2_q55',
    topic: 'Limit Test for Arsenic (Gutzeit)',
    topicAr: 'اختزال حمض الزرنيخوز بالهيدروجين الوليد إلى آرسين',
    question: 'Nascent hydrogen helps convert arsenious acid into:',
    options: [
      { key: 'A', text: 'Arsine' },
      { key: 'B', text: 'Lead sulfide' },
      { key: 'C', text: 'Silver chloride' },
      { key: 'D', text: 'Barium sulfate' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Active nascent hydrogen reduces arsenious acid into arsine gas: H3AsO3 + 6[H] → AsH3↑ + 3H2O.',
    explanationAr: 'يقوم الهيدروجين الوليد باختزال حمض الزرنيخوز وتحويله مباشرة إلى غاز الآرسين (Arsine - AsH₃).',
    isHighYield: true
  },
  {
    id: 126,
    lecture: 'inorganic_2',
    questionNumber: 56,
    globalId: 'lec2_q56',
    topic: 'Limit Test for Arsenic (Gutzeit)',
    topicAr: 'تركيز يوديد البوتاسيوم في اختبار الزرنيخ',
    question: 'Potassium iodide used in the arsenic test is:',
    options: [
      { key: 'A', text: '0.1 M' },
      { key: 'B', text: '1 M' },
      { key: 'C', text: '2 M' },
      { key: 'D', text: '5 M' }
    ],
    correctAnswer: 'B',
    explanationEn: 'According to the protocol detailed in the lecture, Potassium iodide (KI) solution added as a reducing agent is 1 M.',
    explanationAr: 'تركيز محلول يوديد البوتاسيوم (KI) المستخدم كعامل مختزل في اختبار الزرنيخ هو 1 مولار (1 M KI).',
    isHighYield: false
  },
  {
    id: 127,
    lecture: 'inorganic_2',
    questionNumber: 57,
    globalId: 'lec2_q57',
    topic: 'Limit Test for Lead (Dithizone)',
    topicAr: 'كاشف الديثيزون لاختبار الرصاص',
    question: 'The lead limit test is based on the reaction of lead with:',
    options: [
      { key: 'A', text: 'Dithizone' },
      { key: 'B', text: 'Thioglycolic acid' },
      { key: 'C', text: 'Silver nitrate' },
      { key: 'D', text: 'Barium chloride' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The sensitive specific limit test for lead is based on the extraction-colorimetric reaction of lead with dithizone.',
    explanationAr: 'يعتمد اختبار حد الرصاص النوعي والحساس على تفاعل الرصاص مع كاشف الديثيزون (Dithizone).',
    isHighYield: true
  },
  {
    id: 128,
    lecture: 'inorganic_2',
    questionNumber: 58,
    globalId: 'lec2_q58',
    topic: 'Limit Test for Lead (Dithizone)',
    topicAr: 'الاسم الكيميائي للديثيزون (Diphenyl thiocarbazone)',
    question: 'Dithizone is also known as:',
    options: [
      { key: 'A', text: 'Diphenyl thiocarbazone' },
      { key: 'B', text: 'Diphenyl carbonate' },
      { key: 'C', text: 'Phenyl thiocyanate' },
      { key: 'D', text: 'Sodium dithionite' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Dithizone is the trivial name for 1,5-diphenylthiocarbazone (C6H5NHNHCSN=NC6H5).',
    explanationAr: 'يُعرف الديثيزون كيميائياً باسم ثنائي فينيل ثيوكاربازون (Diphenyl thiocarbazone).',
    isHighYield: true
  },
  {
    id: 129,
    lecture: 'inorganic_2',
    questionNumber: 59,
    globalId: 'lec2_q59',
    topic: 'Limit Test for Lead (Dithizone)',
    topicAr: 'معقد ديثيزونات الرصاص Lead dithizonate',
    question: 'Lead reacts with dithizone to form:',
    options: [
      { key: 'A', text: 'Lead chloride' },
      { key: 'B', text: 'Lead dithizonate' },
      { key: 'C', text: 'Lead sulfate' },
      { key: 'D', text: 'Lead nitrate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Lead coordinates with dithizone ligands in alkaline conditions to form a neutral chelate complex: Lead dithizonate.',
    explanationAr: 'يتفاعل الرصاص مع الديثيزون ليكون معقد ديثيزونات الرصاص المخلبي (Lead dithizonate).',
    isHighYield: true
  },
  {
    id: 130,
    lecture: 'inorganic_2',
    questionNumber: 60,
    globalId: 'lec2_q60',
    topic: 'Limit Test for Lead (Dithizone)',
    topicAr: 'اللون البنفسجي في طبقة الكلوروفورم',
    question: 'Lead dithizonate produces a violet color in:',
    options: [
      { key: 'A', text: 'Water' },
      { key: 'B', text: 'Chloroform' },
      { key: 'C', text: 'Ammonia' },
      { key: 'D', text: 'Nitric acid' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Lead dithizonate is lipophilic and is extracted quantitatively into chloroform (CHCl3), imparting a characteristic brilliant violet/red-violet color to the organic layer.',
    explanationAr: 'يُستخلص معقد ديثيزونات الرصاص في مذيب الكلوروفورم (Chloroform) العضوي حيث يعطي لوناً بنفسجياً مميزاً.',
    isHighYield: true
  },
  {
    id: 131,
    lecture: 'inorganic_2',
    questionNumber: 61,
    globalId: 'lec2_q61',
    topic: 'Limit Test for Lead (Dithizone)',
    topicAr: 'تناسب شدة اللون مع كمية الرصاص',
    question: 'The intensity of the violet color is related to:',
    options: [
      { key: 'A', text: 'Amount of lead present' },
      { key: 'B', text: 'Amount of chloride present' },
      { key: 'C', text: 'Amount of sulfate present' },
      { key: 'D', text: 'Amount of iron present' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Following Beer-Lambert\'s law, the spectrophotometric / visual intensity of the violet color in the chloroform layer is directly proportional to the amount/concentration of lead present.',
    explanationAr: 'تتناسب شدة اللون البنفسجي في طبقة الكلوروفورم طردياً مع كمية وتركيز الرصاص الموجود في العينة.',
    isHighYield: false
  },
  {
    id: 132,
    lecture: 'inorganic_2',
    questionNumber: 62,
    globalId: 'lec2_q62',
    topic: 'Limit Test for Lead (Dithizone)',
    topicAr: 'استخدام الفينول ريج كدليل (Phenol red indicator)',
    question: 'Phenol red is used as:',
    options: [
      { key: 'A', text: 'An oxidizing agent' },
      { key: 'B', text: 'An indicator' },
      { key: 'C', text: 'A reducing agent' },
      { key: 'D', text: 'A precipitating agent' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Phenol red is employed as a pH indicator to verify the alkaline adjustment (pH 8.5–10) required before dithizone extraction.',
    explanationAr: 'يُستخدم أحمر الفينول (Phenol red) كدليل (Indicator) للتحقق من ضبط درجة الحموضة القلوية المطلوبة قبل الاستخلاص.',
    isHighYield: false
  },
  {
    id: 133,
    lecture: 'inorganic_2',
    questionNumber: 63,
    globalId: 'lec2_q63',
    topic: 'Limit Test for Lead (Dithizone)',
    topicAr: 'كواشف التخلص من تداخل المعادن الأخرى (الحجب)',
    question: 'Which reagent helps eliminate interference from other metal ions?',
    options: [
      { key: 'A', text: 'Ammonium citrate' },
      { key: 'B', text: 'Potassium cyanide' },
      { key: 'C', text: 'Hydroxylamine hydrochloride' },
      { key: 'D', text: 'All of the above' }
    ],
    correctAnswer: 'D',
    explanationEn: 'To prevent interference from competing metals: Ammonium citrate masks iron/aluminum; Potassium cyanide complexes copper, zinc, nickel; and Hydroxylamine hydrochloride maintains reducing conditions. All are used.',
    explanationAr: 'يتم استخدام سيترات الأمونيوم، سيانيد البوتاسيوم، وهيدروكسيلامين هيدروكلوريد معاً لحجب وتثبيط تداخل الأيونات المعدنية الأخرى (جميع ما سبق).',
    isHighYield: true
  },
  {
    id: 134,
    lecture: 'inorganic_2',
    questionNumber: 64,
    globalId: 'lec2_q64',
    topic: 'Limit Test for Lead (Dithizone)',
    topicAr: 'مذيب استخلاص الديثيزون (الكلوروفورم)',
    question: 'In the lead test, the dithizone extraction solution is prepared using:',
    options: [
      { key: 'A', text: 'Water' },
      { key: 'B', text: 'Chloroform' },
      { key: 'C', text: 'Ethanol only' },
      { key: 'D', text: 'Acetic acid' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Dithizone is virtually insoluble in water; its standardized extraction reagent solution is prepared in pure chloroform (CHCl3).',
    explanationAr: 'يتم تحضير محلول استخلاص الديثيزون باستخدام مذيب الكلوروفورم (Chloroform).',
    isHighYield: true
  },
  {
    id: 135,
    lecture: 'inorganic_2',
    questionNumber: 65,
    globalId: 'lec2_q65',
    topic: 'Limit Test for Lead (Dithizone)',
    topicAr: 'حفظ محلول الديثيزون في الثلاجة',
    question: 'The dithizone extraction solution is stored in:',
    options: [
      { key: 'A', text: 'A refrigerator' },
      { key: 'B', text: 'Direct sunlight' },
      { key: 'C', text: 'An open container' },
      { key: 'D', text: 'A metal container' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Dithizone solutions are prone to oxidative degradation and must be stored in amber glassware under refrigeration (cold storage).',
    explanationAr: 'محلول الديثيزون حساس جداً للأكسدة والحرارة ويجب تخزينه مبرداً داخل الثلاجة (Refrigerator).',
    isHighYield: true
  },
  {
    id: 136,
    lecture: 'inorganic_2',
    questionNumber: 66,
    globalId: 'lec2_q66',
    topic: 'Higher-Level Synthesis',
    topicAr: 'معيار نجاح العينة في اختبار الحد',
    question: 'A sample passes a limit test when the color/opalescence/turbidity of the test solution is:',
    options: [
      { key: 'A', text: 'Greater than the standard' },
      { key: 'B', text: 'Equal to or less than the standard' },
      { key: 'C', text: 'Always darker than the standard' },
      { key: 'D', text: 'Unrelated to the standard' }
    ],
    correctAnswer: 'B',
    explanationEn: 'Under pharmacopeial standards, a sample passes (conforms) if the turbidity, opalescence, color intensity, or stain of the test solution is equal to or less than that of the standard solution.',
    explanationAr: 'تنجح العينة وتطابق المواصفات الدستورية إذا كانت درجة العكر أو اللون الناتجة في محلول الاختبار أقل من أو مساوية للمحلول القياسي.',
    isHighYield: true
  },
  {
    id: 137,
    lecture: 'inorganic_2',
    questionNumber: 67,
    globalId: 'lec2_q67',
    topic: 'Higher-Level Synthesis',
    topicAr: 'المطابقة الصحيحة لنواتج اختبارات الحدود',
    question: 'Which pairing is CORRECT?',
    options: [
      { key: 'A', text: 'Chloride — AgCl' },
      { key: 'B', text: 'Sulfate — BaSO₄' },
      { key: 'C', text: 'Iron — purple ferrous thioglycolate' },
      { key: 'D', text: 'All are correct' }
    ],
    correctAnswer: 'D',
    explanationEn: 'All stated pairs are correct: Chloride forms insoluble AgCl, Sulfate precipitates as BaSO4, and Iron reacts with thioglycolate to form purple ferrous thioglycolate.',
    explanationAr: 'جميع الأزواج المذكورة صحيحة تماماً: الكلوريد مع نترات الفضة يعطي AgCl، الكبريتات مع الباريوم تعطي BaSO₄، والحديد يعطي معقد ثيوجليكولات الحديدوز البنفسجي.',
    isHighYield: true
  },
  {
    id: 138,
    lecture: 'inorganic_2',
    questionNumber: 68,
    globalId: 'lec2_q68',
    topic: 'Higher-Level Synthesis',
    topicAr: 'الاختبار المعتمد على بقعة ورقية (Stain)',
    question: 'Which test uses a stain rather than a solution color as the main comparison?',
    options: [
      { key: 'A', text: 'Arsenic limit test' },
      { key: 'B', text: 'Chloride limit test' },
      { key: 'C', text: 'Sulfate limit test' },
      { key: 'D', text: 'Iron limit test' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The Gutzeit arsenic limit test uniquely evaluates a yellow/brown stain on mercuric chloride paper, unlike the solution turbidity (Cl, SO4) or solution color (Fe, HM, Pb).',
    explanationAr: 'اختبار الزرنيخ (Arsenic limit test) هو الوحيد الذي يعتمد على مقارنة بقعة ملونة على ورقة ترشيح وليس لوناً في محلول.',
    isHighYield: true
  },
  {
    id: 139,
    lecture: 'inorganic_2',
    questionNumber: 69,
    globalId: 'lec2_q69',
    topic: 'Higher-Level Synthesis',
    topicAr: 'المعقد البنفسجي في الكلوروفورم (الرصاص)',
    question: 'Which test involves a violet-colored complex in chloroform?',
    options: [
      { key: 'A', text: 'Arsenic' },
      { key: 'B', text: 'Lead' },
      { key: 'C', text: 'Chloride' },
      { key: 'D', text: 'Sulfate' }
    ],
    correctAnswer: 'B',
    explanationEn: 'The limit test for lead forms lead dithizonate, which yields an intense violet color extracted specifically into an organic chloroform layer.',
    explanationAr: 'اختبار الرصاص (Lead) هو الذي يشمل استخلاص معقد ديثيزونات الرصاص البنفسجي داخل طبقة الكلوروفورم.',
    isHighYield: true
  },
  {
    id: 140,
    lecture: 'inorganic_2',
    questionNumber: 70,
    globalId: 'lec2_q70',
    topic: 'Higher-Level Synthesis',
    topicAr: 'التسلسل التفاعلي لاختبار الزرنيخ',
    question: 'Which sequence correctly represents the arsenic test?',
    options: [
      { key: 'A', text: 'Arsenic → Arsine → Mercuric chloride paper → Yellow/brown stain' },
      { key: 'B', text: 'Arsenic → AgCl → White precipitate' },
      { key: 'C', text: 'Arsenic → BaSO₄ → Turbidity' },
      { key: 'D', text: 'Arsenic → Lead dithizonate → Violet color' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The complete chemical chain in the Gutzeit test is: Arsenic impurities → reduced to volatile Arsine gas (AsH3) → reacts with Mercuric chloride (HgCl2) paper → produces a characteristic Yellow/brown stain.',
    explanationAr: 'التسلسل الصحيح لاختبار الزرنيخ هو: زرنيخ ← غاز الآرسين ← ورقة كلوريد الزئبقيك ← بقعة صفراء/بنية.',
    isHighYield: true
  }
];
