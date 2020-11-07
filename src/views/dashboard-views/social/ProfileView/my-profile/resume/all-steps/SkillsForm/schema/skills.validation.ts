import * as Yup from 'yup';

const skillsYupObject = Yup.object({
  list: Yup.array().of(Yup.string().label('Skill')).required(),
});

export { skillsYupObject };
