import { lecture1Questions } from './lecture1';
import { lecture2Questions } from './lecture2';
import { MCQQuestion, LectureId } from '../types/quiz';

export const allQuestions: MCQQuestion[] = [
  ...lecture1Questions,
  ...lecture2Questions
];

export const getQuestionsByLecture = (lectureId?: LectureId | 'all'): MCQQuestion[] => {
  if (!lectureId || lectureId === 'all') {
    return allQuestions;
  }
  return allQuestions.filter(q => q.lecture === lectureId);
};

export const getTopicsForLecture = (lectureId?: LectureId | 'all'): string[] => {
  const qs = getQuestionsByLecture(lectureId);
  const set = new Set<string>();
  qs.forEach(q => set.add(q.topic));
  return Array.from(set);
};

export const LECTURE_INFO = {
  inorganic_1: {
    id: 'inorganic_1' as LectureId,
    titleEn: 'Inorganic Pharmaceutical Chemistry 1',
    titleAr: 'الكيمياء الصيدلانية غير العضوية 1',
    descriptionEn: 'Core concepts: Pharmaceutical aids, electrolytes, antacids, atomic structure, quantum numbers, periodic trends, chemical bonding, coordination compounds, crystal field theory & chelating antidotes.',
    descriptionAr: 'المفاهيم الأساسية: المساعدات الصيدلانية، الكهارل، مضادات الحموضة، البنية الذرية، أعداد الكم، تدرج الخواص الدورية، الروابط الكيميائية، المعقدات التناسقية، والعوامل المخلبية.',
    questionCount: 70,
    badgeColor: 'teal'
  },
  inorganic_2: {
    id: 'inorganic_2' as LectureId,
    titleEn: 'Inorganic Pharmaceutical Chemistry 2: Impurities & Limit Tests',
    titleAr: 'الكيمياء الصيدلانية غير العضوية 2: الشوائب واختبارات الحدود',
    descriptionEn: 'Impurities in drugs, water types (tap, demineralized, distilled), principles of Limit Tests, Nessler cylinders, limit tests for Chloride, Sulfate, Iron, Heavy Metals, Arsenic (Gutzeit), and Lead (Dithizone).',
    descriptionAr: 'مصادر الشوائب، أنواع المياه، مبادئ اختبارات الحدود وأسطوانات نسلر، واختبارات حدود الكلوريد، الكبريتات، الحديد، المعادن الثقيلة، الزرنيخ (غوتزيت)، والرصاص (الديثيزون).',
    questionCount: 70,
    badgeColor: 'indigo'
  }
};
