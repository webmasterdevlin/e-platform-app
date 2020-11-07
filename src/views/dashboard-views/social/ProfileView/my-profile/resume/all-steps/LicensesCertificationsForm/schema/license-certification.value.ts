export const licenseCertificationValue: LicenseCertificationModel = {
  id: '',
  name: '',
  issuingOrganization: '',
  doesNotExpire: false,
  issueDate: new Date(),
  expirationDate: new Date(),
  credentialId: '',
  credentialUrl: '',
};

export type LicenseCertificationModel = {
  id: string;
  name: string;
  issuingOrganization: string;
  doesNotExpire: boolean;
  issueDate: Date;
  expirationDate: Date;
  credentialId: string;
  credentialUrl: string;
};
