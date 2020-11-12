/* Validation for each input */
import * as Yup from 'yup';

const myProfileYupObject = Yup.object({
  imageFile: Yup.mixed().nullable().notRequired(),
  firstName: Yup.string().min(2).max(50).required().label('First Name'),
  lastName: Yup.string().max(2).max(50).required().label('Last Name'),
  mobile: Yup.string().max(10).nullable().notRequired(),
  mobileCountryCode: Yup.string()
    .max(3)
    .nullable()
    .notRequired()
    .label('Country code'),
  email: Yup.string().email().nullable().notRequired(),
  imageUrl: Yup.string().nullable().notRequired(),
  personalWebsite: Yup.string().url().max(100).nullable().notRequired(),
  facebookProfile: Yup.string().url().max(100).nullable().notRequired(),
  linkedinProfile: Yup.string().url().max(100).nullable().notRequired(),
  twitterProfile: Yup.string().url().max(100).nullable().notRequired(),
  profileSummary: Yup.string().max(1200).nullable().notRequired(),
  country: Yup.string().max(50).nullable().notRequired(),
  zip: Yup.string().max(50).nullable().notRequired(),
  city: Yup.string().max(50).nullable().notRequired(),
  streetAddress: Yup.string().max(240).nullable().notRequired(),
  addressLineExtra: Yup.string().max(50).nullable().notRequired(),
  state: Yup.string().max(50).nullable().notRequired(),
});

export { myProfileYupObject };
