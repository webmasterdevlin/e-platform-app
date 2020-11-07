import * as Yup from 'yup';

const personalSummaryYupObject = Yup.object({
  summary: Yup.string().required().label('Summary'),
});

export { personalSummaryYupObject };
