export interface Availability {}

export interface Schedule {}

export interface Location {
  id: string;
  placeId: string;
  type: string;
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  addressLine1: string;
  addressLine2: string;
  formattedAddress: string;
}

export interface LocationInforamtion {
  type: string;
  location: Location;
}

export interface Subscription {
  hours: number;
  price: number;
  title: string;
  description: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface PostLessonAdParam {
  adType: string;
  title: string;
  description: string;
  skillId: string;
  subjectModuleId: string;
  availability: Availability;
  schedule: Schedule;
  locationInforamtion: LocationInforamtion;
  subscriptions: Subscription[];
  tags: Tag[];
}
