export const licenseCertificationValue: LicenseCertificationModel = {
  id: '',
  name: '',
  issuer: '',
  isCertificateNeverExpire: false,
  issueDate: new Date(),
  expiryDate: new Date(),
  certificateId: '',
  certificateUrl: '',
};

export type LicenseCertificationModel = {
  id: string;
  name: string;
  issuer: string;
  isCertificateNeverExpire: boolean;
  issueDate: Date;
  expiryDate: Date;
  certificateId: string;
  certificateUrl: string;
};
