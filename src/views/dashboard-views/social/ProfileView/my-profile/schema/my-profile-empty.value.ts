export const myProfileEmptyValue: MyProfileModel = {
  id: '',
  imageFile: {
    name: '',
    type: '',
    size: '',
  },
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
