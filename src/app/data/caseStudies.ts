// MOHFW Case Study - PDF Pages as Images
import page1 from 'figma:asset/281ce5d47a58681170fa62c907d7bd7ca813389d.png';
import page2 from 'figma:asset/09bd73b04435e8eea71859de3e0d2e7694b347e4.png';
import page3 from 'figma:asset/cc51a65961ad727ad8968afb9e0a3381751a6b8c.png';

// Samsung Iris Case Study Slides
import samsungSlide1 from 'figma:asset/44e7118740bed5e86aef7142d45f5920f928c840.png';
import samsungSlide2 from 'figma:asset/030b927494b6edc44436ed8cce2c399d2cb6c1bf.png';
import samsungSlide3 from 'figma:asset/e22810488a2dea398cea28b8afe2e029a45b5b57.png';

export const mohfwCaseStudy = {
  pages: [page1, page2, page3]
};

export const samsungIrisCaseStudy = {
  pages: [samsungSlide1, samsungSlide2, samsungSlide3]
};

// Export all case studies
export const caseStudies = {
  mohfw: mohfwCaseStudy,
  samsungIris: samsungIrisCaseStudy,
  // Add other projects here
};