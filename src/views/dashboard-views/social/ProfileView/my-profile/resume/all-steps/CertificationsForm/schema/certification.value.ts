export const certificationValue: CertificationModel = {
  id: '',
  name: '',
  issuer: '',
  isCertificateNeverExpire: false,
  issueDate: new Date(),
  expiryDate: new Date(),
  certificateId: '',
  certificateUrl: '',
};

export type CertificationModel = {
  id: string;
  name: string;
  issuer: string;
  isCertificateNeverExpire: boolean;
  issueDate: Date;
  expiryDate: Date;
  certificateId: string;
  certificateUrl: string;
};
