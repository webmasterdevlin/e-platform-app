import * as Yup from 'yup';

const skillsYupObject = Yup.object({
  skills: Yup.array()
    .of(
      Yup.object({
        skillId: Yup.string().required(),
        skillLevel: Yup.number().required(),
      }),
    )
    .min(1)
    .required(),
});

export { skillsYupObject };
