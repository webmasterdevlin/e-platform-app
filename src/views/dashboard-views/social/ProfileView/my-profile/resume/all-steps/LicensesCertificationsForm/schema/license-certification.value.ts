/*
* {
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "issuer": "string",
  "isCertificateNeverExpire": true,
  "issueDate": "2020-11-11T01:18:27.661Z",
  "expiryDate": "2020-11-11T01:18:27.661Z",
  "certificateId": "string",
  "certificateUrl": "string"
}
* */

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
