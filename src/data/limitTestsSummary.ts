export interface LimitTestInfo {
  id: string;
  nameEn: string;
  nameAr: string;
  impurity: string;
  principleEn: string;
  principleAr: string;
  chemicalEquation: string;
  mainReagents: { name: string; role: string }[];
  standardConcentration: string;
  visualEndpoint: string;
  colorHex: string;
  container: string;
  viewingMethod: string;
  criticalNotesEn: string[];
  criticalNotesAr: string[];
}

export const LIMIT_TESTS_DATA: LimitTestInfo[] = [
  {
    id: 'chloride',
    nameEn: 'Limit Test for Chloride',
    nameAr: 'اختبار حد الكلوريد',
    impurity: 'Chloride ion (Cl⁻)',
    principleEn: 'Precipitation of soluble chloride with silver nitrate in the presence of dilute nitric acid to form insoluble silver chloride.',
    principleAr: 'ترسيب أيونات الكلوريد الذائبة بواسطة نترات الفضة بوجود حمض النيتريك المخفف لتكوين كلوريد الفضة غير الذائب.',
    chemicalEquation: 'Cl⁻ + AgNO₃ ⟶ AgCl (white precipitate / opalescence) + NO₃⁻',
    mainReagents: [
      { name: '0.1 M Silver Nitrate (AgNO₃)', role: 'Precipitating reagent forming insoluble AgCl' },
      { name: 'Dilute Nitric Acid (HNO₃)', role: 'Acidifies medium, prevents precipitation of other silver salts (Ag₂CO₃, Ag₃PO₄)' },
      { name: 'Standard Chloride Solution', role: 'Calibrated at 25 ppm Cl for direct optical comparison' }
    ],
    standardConcentration: '25 ppm Cl',
    visualEndpoint: 'Opalescence / Turbidity compared against black background',
    colorHex: '#e2e8f0',
    container: 'Nessler cylinders (50 mL, Borosilicate glass)',
    viewingMethod: 'Transversely against a dark/black background',
    criticalNotesEn: [
      'Solutions must be protected from direct light for 5 minutes (AgCl decomposes photolytically into gray metallic silver).',
      'Sample passes if test opalescence is equal to or less than standard opalescence.'
    ],
    criticalNotesAr: [
      'يجب حماية المحلول من الضوء لمدة 5 دقائق لمنع التفكك الضوئي لكلوريد الفضة إلى فضة معدنية رمادية.',
      'تعتبر العينة مطابقة وناجحة إذا كانت العتامة أقل من أو مساوية للمحلول القياسي.'
    ]
  },
  {
    id: 'sulfate',
    nameEn: 'Limit Test for Sulfate',
    nameAr: 'اختبار حد الكبريتات',
    impurity: 'Sulfate ion (SO₄²⁻)',
    principleEn: 'Reaction of sulfate ions with barium chloride in acidic medium to precipitate insoluble barium sulfate.',
    principleAr: 'تفاعل أيونات الكبريتات مع كلوريد الباريوم في وسط حمضي لترسيب كبريتات الباريوم البيضاء غير الذائبة.',
    chemicalEquation: 'SO₄²⁻ + BaCl₂ ⟶ BaSO₄ (white turbidity) + 2Cl⁻',
    mainReagents: [
      { name: '25% w/v Barium Chloride Reagent', role: 'Precipitating agent yielding BaSO₄' },
      { name: '5 M Acetic Acid', role: 'Prevents precipitation of other barium salts (BaCO₃, BaSO₃)' },
      { name: 'Potassium Sulfate (K₂SO₄ in alcohol)', role: 'Seeds crystallization, improves test sensitivity and reproducibility' }
    ],
    standardConcentration: 'Sulfate standard (calibrated pharmacopeial limit)',
    visualEndpoint: 'White turbidity / opalescence',
    colorHex: '#cbd5e1',
    container: 'Nessler cylinders (Borosilicate glass)',
    viewingMethod: 'Transversely against a black background',
    criticalNotesEn: [
      'Trace K₂SO₄ in the barium reagent increases sensitivity by providing a critical ionic threshold.',
      'Allow to stand 5 minutes before visual inspection.'
    ],
    criticalNotesAr: [
      'إضافة كبريتات البوتاسيوم في كاشف الباريوم تزيد حساسية الاختبار من خلال توفير بذور التبلور.',
      'تترك الأسطوانة لمدة 5 دقائق قبل المقارنة البصرية.'
    ]
  },
  {
    id: 'iron',
    nameEn: 'Limit Test for Iron',
    nameAr: 'اختبار حد الحديد',
    impurity: 'Iron (Fe²⁺ / Fe³⁺)',
    principleEn: 'Thioglycolic acid reduces Fe³⁺ to Fe²⁺, and coordinates with Fe²⁺ in ammoniacal alkaline medium to form a stable purple ferrous thioglycolate complex.',
    principleAr: 'يقوم حمض الثيوجليكوليك باختزال Fe³⁺ إلى Fe²⁺ ثم يرتبط معه في وسط نشادري قلوي ليكون معقد ثيوجليكولات الحديدوز البنفسجي الثابت.',
    chemicalEquation: '2Fe³⁺ + 2HS-CH₂-COOH ⟶ 2Fe²⁺ + (S-CH₂-COOH)₂ + 2H⁺ \nFe²⁺ + 2HS-CH₂-COO⁻ + NH₄OH ⟶ [Fe(S-CH₂-COO)₂]²⁻ (Purple complex)',
    mainReagents: [
      { name: 'Thioglycolic Acid (Mercaptoacetic acid)', role: 'Reduces Fe³⁺ to Fe²⁺ and acts as coordinating ligand' },
      { name: '20% Citric Acid', role: 'Complexes interfering polyvalent metals & prevents Fe(OH)₃ precipitation upon ammonia addition' },
      { name: 'Ammonia Solution', role: 'Renders the medium alkaline, essential for purple chromophore development' }
    ],
    standardConcentration: 'Standard Iron solution (20 ppm or pharmacopeial specification)',
    visualEndpoint: 'Intense purple / reddish-purple color',
    colorHex: '#9333ea',
    container: 'Nessler cylinders (Borosilicate glass)',
    viewingMethod: 'Vertically down through the cylinder over a white tile/surface',
    criticalNotesEn: [
      'Compared vertically down through the column, unlike turbidity tests which are viewed transversely.',
      'Citric acid is indispensable: without it, adding ammonia would precipitate insoluble brown Fe(OH)₃.'
    ],
    criticalNotesAr: [
      'تتم المقارنة بالنظر رأسياً من الأعلى إلى الأسفل فوق بلاطة بيضاء.',
      'حمض الستريك ضروري جداً لمنع ترسب هيدروكسيد الحديد غير الذائب عند إضافة النشادر وحجب الأيونات الأخرى.'
    ]
  },
  {
    id: 'heavymetals',
    nameEn: 'Limit Test for Heavy Metals',
    nameAr: 'اختبار حد المعادن الثقيلة',
    impurity: 'Heavy metals (Lead, Mercury, Bismuth, Arsenic, Antimony, Tin, Cadmium, Copper)',
    principleEn: 'Reaction of heavy metal cations with hydrogen sulfide at controlled acidic pH (3.0–4.0) to form dark colloidal metallic sulfides.',
    principleAr: 'تفاعل كاتيونات المعادن الثقيلة مع كبريتيد الهيدروجين عند pH محدد (3-4) لتكوين كبريتيدات معدنية غروية داكنة.',
    chemicalEquation: 'M²⁺ + H₂S ⟶ MS (brownish colloidal sulfide) + 2H⁺  [where M = Pb, Hg, Bi, Cu, etc.]',
    mainReagents: [
      { name: 'Freshly Prepared Hydrogen Sulfide (H₂S) Water', role: 'Sulfide source (must be fresh to avoid atmospheric oxidation to sulfur)' },
      { name: 'Dilute Acetic Acid / Buffer (pH 3–4)', role: 'Maintains pH 3.0–4.0 to yield uniform colloidal precipitate' },
      { name: 'Standard Lead Solution', role: 'Calibrated at 20 ppm Pb' }
    ],
    standardConcentration: '20 ppm (expressed as parts of lead per million)',
    visualEndpoint: 'Brownish / yellow-brown colloidal coloration',
    colorHex: '#854d0e',
    container: 'Nessler cylinders (Borosilicate glass)',
    viewingMethod: 'Vertically against a white background',
    criticalNotesEn: [
      'Heavy metal limits are universally calibrated and reported in terms of Lead (ppm Pb). Standard limit is typically 20 ppm.',
      'Strict control of pH at 3–4 ensures colloidal uniformity and prevents premature flocking or non-precipitation.'
    ],
    criticalNotesAr: [
      'يُعبر عن كمية المعادن الثقيلة إجمالاً كأجزاء من الرصاص في المليون (ppm Pb)، والحد المعتاد 20 جزء في المليون.',
      'الحفاظ الصارم على الأس الهيدروجيني بين 3 و 4 يضمن الحصول على معلق غروي متجانس لمقارنة دقيقة.'
    ]
  },
  {
    id: 'arsenic',
    nameEn: 'Limit Test for Arsenic (Gutzeit Test)',
    nameAr: 'اختبار حد الزرنيخ (طريقة غوتزيت)',
    impurity: 'Arsenic compounds (As³⁺ / As⁵⁺)',
    principleEn: 'Reduction of arsenic impurities to volatile arsine gas (AsH₃) using Zn and HCl, which reacts with mercuric chloride paper producing a yellow-to-brown stain.',
    principleAr: 'اختزال شوائب الزرنيخ إلى غاز الآرسين المتطاير (AsH₃) بواسطة الخارصين وحمض الهيدروكلوريك، ليتفاعل مع ورقة كلوريد الزئبقيك منتجاً بقعة صفراء إلى بنية.',
    chemicalEquation: 'H₃AsO₄ + 2[H] ⟶ H₃AsO₃ + H₂O \nH₃AsO₃ + 6[H] (from Zn + HCl) ⟶ AsH₃↑ + 3H₂O \nAsH₃ + 3HgCl₂ ⟶ As(HgCl)₃ (Yellow/brown stain) + 3HCl',
    mainReagents: [
      { name: 'Granulated Zinc (Arsenic-free) + Conc. HCl', role: 'Generates reactive nascent hydrogen [H]' },
      { name: '1 M Potassium Iodide (KI) + Stannous Chloride', role: 'Reduces arsenic acid (As⁵⁺) to arsenious acid (As³⁺)' },
      { name: 'Lead Acetate Cotton Wool Plug', role: 'Traps byproduct H₂S gas which would otherwise blacken HgCl₂ paper (forms PbS)' },
      { name: 'Mercuric Chloride (HgCl₂) Test Paper', role: 'Reacts with arsine gas to produce yellow/brown stain' }
    ],
    standardConcentration: 'Standard Arsenic Solution (10 ppm or pharmacopeial limit)',
    visualEndpoint: 'Length & intensity of yellow to brown stain on paper',
    colorHex: '#d97706',
    container: 'Gutzeit Arsenic Apparatus with clip and calibrated tube',
    viewingMethod: 'Visual inspection of the test paper stain against standard paper',
    criticalNotesEn: [
      'Unique limit test that evaluates a stain on paper rather than a solution color/turbidity.',
      'The lead acetate wool plug is essential to absorb interfering H₂S gas from sulfur impurities.'
    ],
    criticalNotesAr: [
      'هو الاختبار الوحيد الذي يعتمد على فحص بقعة ورقية (Stain) وليس محلولاً مائياً.',
      'قطعة القطن المشربة بخلات الرصاص تمتص غاز كبريتيد الهيدروجين لمنع اسوداد ورقة الاختبار.'
    ]
  },
  {
    id: 'lead',
    nameEn: 'Limit Test for Lead (Dithizone Method)',
    nameAr: 'اختبار حد الرصاص (طريقة الديثيزون)',
    impurity: 'Lead (Pb²⁺)',
    principleEn: 'Lead reacts with dithizone (diphenylthiocarbazone) in alkaline medium to form lead dithizonate, which is extracted into chloroform as an intense violet complex.',
    principleAr: 'يتفاعل الرصاص مع كاشف الديثيزون في وسط قلوي ليكون معقد ديثيزونات الرصاص الذي يُستخلص في الكلوروفورم بلون بنفسجي مميز.',
    chemicalEquation: 'Pb²⁺ + 2 H₂Dz ⟶ Pb(HDz)₂ (Violet complex in CHCl₃) + 2H⁺',
    mainReagents: [
      { name: 'Dithizone in Chloroform', role: 'Specific chelating chromogenic reagent (stored refrigerated)' },
      { name: 'Phenol Red', role: 'pH indicator to verify alkaline medium' },
      { name: 'Ammonium Citrate', role: 'Masks iron, aluminum, and prevents phosphate precipitation' },
      { name: 'Potassium Cyanide (KCN)', role: 'Masks copper, zinc, nickel, cobalt, and cadmium' },
      { name: 'Hydroxylamine Hydrochloride', role: 'Reducing agent preventing dithizone oxidation' }
    ],
    standardConcentration: 'Lead standard solution (calibrated ppm Pb)',
    visualEndpoint: 'Brilliant violet color in the extracted organic chloroform layer',
    colorHex: '#7c3aed',
    container: 'Separatory funnel and optical Nessler tubes',
    viewingMethod: 'Comparison of violet chloroform layer against standard layer',
    criticalNotesEn: [
      'Extracted into chloroform layer because lead dithizonate is lipophilic and insoluble in water.',
      'Dithizone reagent must be stored in amber glass in the refrigerator to avoid oxidative degradation.',
      'Masking agents (KCN, citrate, hydroxylamine) eliminate virtually all competing metal ions.'
    ],
    criticalNotesAr: [
      'يُستخلص في طبقة الكلوروفورم لأن معقد ديثيزونات الرصاص محب للدهون وغير ذائب في الماء.',
      'يجب حفظ كاشف الديثيزون في زجاج معتم داخل الثلاجة لحمايته من التفكك التأكسدي.',
      'كواشف الحجب (السيانيد والسترات والهيدروكسيلامين) تمنع تماماً تداخل أي معادن أخرى.'
    ]
  }
];

export interface ChelatorInfo {
  name: string;
  nameAr: string;
  chemicalName: string;
  denticity: string;
  targetMetals: string;
  clinicalUses: string[];
  route: string;
  criticalPoints: string[];
}

export const CHELATING_AGENTS: ChelatorInfo[] = [
  {
    name: 'BAL (British Anti-Lewisite)',
    nameAr: 'مركب بال (ديميركابرول)',
    chemicalName: 'Dimercaprol (2,3-dimercaptopropanol)',
    denticity: 'Bidentate (contains two active sulfhydryl -SH groups)',
    targetMetals: 'Arsenic (As), Gold (Au), Mercury (Hg)',
    clinicalUses: ['Arsenic poisoning', 'Gold toxicity after rheumatoid arthritis therapy', 'Acute mercury poisoning'],
    route: 'Intramuscular injection (in peanut oil)',
    criticalPoints: [
      'Developed during WWII as an antidote against lewisite (arsenic war gas).',
      'Sulfhydryl groups compete with cellular enzymes, binding heavy metals into stable excretable chelates.'
    ]
  },
  {
    name: 'Penicillamine',
    nameAr: 'بنيسيلامين',
    chemicalName: 'D-3-mercaptovaline',
    denticity: 'Tridentate (amino, carboxyl, and thiol groups)',
    targetMetals: 'Copper (Cu²⁺), Lead (Pb²⁺), Mercury (Hg²⁺)',
    clinicalUses: ['Wilson\'s disease (hepatolenticular copper accumulation)', 'Cystinuria', 'Severe rheumatoid arthritis'],
    route: 'Oral administration',
    criticalPoints: [
      'First-line treatment for Wilson\'s disease, characterized by copper accumulation in liver, brain, and Kayser-Fleischer rings.',
      'Forms water-soluble copper complexes excreted in urine.'
    ]
  },
  {
    name: 'Deferoxamine (Desferal)',
    nameAr: 'ديفيروكسامين (ديسفيرال)',
    chemicalName: 'Deferoxamine B (bacterial siderophore)',
    denticity: 'Hexadentate (three hydroxamate groups)',
    targetMetals: 'Ferric iron (Fe³⁺)',
    clinicalUses: ['Acute iron poisoning (e.g. pediatric iron tablet overdose)', 'Chronic iron overload (Thalassemia major, Hemochromatosis)'],
    route: 'Parenteral (IV infusion or deep IM injection)',
    criticalPoints: [
      'Forms a very stable octahedral complex with Fe³⁺.',
      'Extremely specific for Fe³⁺; possesses NO affinity for Fe²⁺, calcium, or magnesium.',
      'Ineffective orally because it is not properly absorbed/soluble in the GI tract.'
    ]
  },
  {
    name: 'EDTA (Disodium / Calcium Edetate)',
    nameAr: 'إيدتا (إيديتات الكالسيوم ثنائي الصوديوم)',
    chemicalName: 'Ethylenediaminetetraacetic acid',
    denticity: 'Hexadentate (2 nitrogens + 4 carboxylate oxygens)',
    targetMetals: 'Lead (Pb²⁺), Calcium (Ca²⁺)',
    clinicalUses: ['Lead poisoning (plumbism)', 'Pharmaceutical preservative and anticoagulant'],
    route: 'Slow intravenous infusion',
    criticalPoints: [
      'Administered as Calcium Disodium EDTA to prevent acute hypocalcemia and severe tetany.'
    ]
  }
];

export const WATER_PURIFICATION_SUMMARY = [
  {
    type: 'Tap Water (ماء الصنبور)',
    preparation: 'Municipal source without purification',
    composition: 'Contains Mg²⁺, Ca²⁺, Na⁺, sulfates, chlorides, carbonates, dissolved organic matter.',
    pharmaceuticalSuitability: 'Not suitable for pharmaceutical preparations; only for washing external containers.'
  },
  {
    type: 'Softened Water (الماء اليسر)',
    preparation: 'Precipitation with lime/soda or cation exchange',
    composition: 'Hardness ions (Ca²⁺, Mg²⁺) are replaced with Na⁺.',
    pharmaceuticalSuitability: 'Used for boilers/cleaning; not suitable for compounding.'
  },
  {
    type: 'Demineralized Water (الماء منزوع المعادن)',
    preparation: 'Ion exchange resin columns (cation & anion resins)',
    composition: 'Free of mineral ions; BUT may still harbor bacteria, pyrogens, and non-ionic organic impurities.',
    pharmaceuticalSuitability: 'Used for analytical reagents; NOT suitable for injections/parenterals.'
  },
  {
    type: 'Distilled Water (الماء المقطر)',
    preparation: 'Vaporization followed by condensation',
    composition: 'Free from both inorganic minerals AND organic impurities & microorganisms.',
    pharmaceuticalSuitability: 'Standard vehicle for oral/topical pharmaceuticals and basis for Water for Injection (WFI).'
  }
];
