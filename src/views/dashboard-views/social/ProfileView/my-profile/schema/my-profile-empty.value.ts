/*
* {
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "firstName": "string",
  "lastName": "string",
  "mobile": "string",
  "mobileCountryCode": "string",
  "email": "string",
  "imageUrl": "string",
  "personalWebsite": "string",
  "linkedinProfile": "string",
  "facebookProfile": "string",
  "twitterProfile": "string",
  "profileSummary": "string",
  "country": "string",
  "zip": "string",
  "city": "string",
  "streetAddress": "string",
  "addressLineExtra": "string",
  "state": "string"
}
* */

export const myProfileEmptyValue: MyProfileModel = {
  id: '',
  firstName: '',
  lastName: '',
  mobileNumber: '',
  yearBorn: '',
  personalSummary: '',
  address: {
    streetAddress: '',
    zipCode: '',
    province: '',
    state: '',
    country: '',
  },
  socialLinks: {
    personalWebsite: '',
    linkedIn: '',
    twitter: '',
    facebook: '',
    other: '',
  },
  imageFile: {
    name: '',
    type: '',
    size: '',
  },
};

export type MyProfileModel = {
  id: string;
  imageFile: any | (any & Blob);
  firstName: string;
  lastName: string;
  mobileNumber: string;
  yearBorn: string;
  personalSummary: string;
  address: AddressModel;
  socialLinks: SocialLinksModel;
};

type AddressModel = {
  streetAddress: string;
  zipCode: string;
  province: string;
  state: string;
  country: string;
};

type SocialLinksModel = {
  personalWebsite: string;
  linkedIn: string;
  twitter: string;
  facebook: string;
  other: string;
};
