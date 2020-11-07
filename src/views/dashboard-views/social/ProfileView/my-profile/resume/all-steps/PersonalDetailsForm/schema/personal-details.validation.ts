import * as Yup from 'yup';

const personalDetailsYupObject = Yup.object({
  firstName: Yup.string().required().label('First Name'),
  lastName: Yup.string().required().label('Last Name'),
  mobileNumber: Yup.string().nullable().notRequired(),
  country: Yup.string().required().label('Country'),
  email: Yup.string().email(),
});

export { personalDetailsYupObject };
