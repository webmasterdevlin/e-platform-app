/* Validation for each input */
import * as Yup from 'yup';

const myProfileYupObject = Yup.object({
  imageFile: Yup.mixed().nullable().notRequired(),
  firstName: Yup.string().min(2).max(50).required().label('First Name'),
  lastName: Yup.string().max(2).max(50).required().label('Last Name'),
  mobileNumber: Yup.string().max(50).nullable().notRequired(),
  yearBorn: Yup.string().min(4).max(4).nullable().notRequired(),
  personalSummary: Yup.string().max(1200).nullable().notRequired(),
  address: Yup.object({
    streetAddress: Yup.string().max(240),
    zipCode: Yup.string().max(50),
    province: Yup.string().max(50),
    state: Yup.string().max(50),
    country: Yup.string().max(50),
  })
    .nullable()
    .notRequired(),
  socialLinks: Yup.object({
    personalWebsite: Yup.string().url().max(100),
    linkedIn: Yup.string().url().max(100),
    twitter: Yup.string().url().max(100),
    facebook: Yup.string().url().max(100),
  })
    .nullable()
    .notRequired(),
});

export { myProfileYupObject };
