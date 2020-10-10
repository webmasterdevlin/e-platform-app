export type AuthUser = {
  id_token?: string;
  access_token?: string;
  token_type?: string;
  profile: ProfileModel;
  expires_at: number;
  state: StateUrlModel;
  isLoadingUser: boolean;
};

export type ProfileModel = {
  ver?: string;
  sub?: string;
  auth_time?: number;
  given_name?: string;
  family_name?: string;
  idp?: string;
  oid?: string;
  emails?: [];
  tfp?: string;
};

export type StateUrlModel = {
  url?: string;
};
