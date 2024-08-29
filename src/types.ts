export type Maybe<T> = T | null;

type Initial = {
  id: number;
  name?: Maybe<string>;
  title?: Maybe<string>;
  initials?: Maybe<string>;
};

type Lawyer = {
  name?: Maybe<string>;
  address1?: Maybe<string>;
  address2?: Maybe<string>;
  city?: Maybe<string>;
  state?: Maybe<string>;
  zip?: Maybe<string>;
  salutation?: Maybe<string>;
};

export interface ISentToLawyer {
  irs?: Maybe<string>;
  name?: Maybe<string>;
  lawyer?: Maybe<Lawyer>;
  selectedInitial?: Initial;
  currentDate?: Maybe<string>;
  netAmount?: Maybe<number>;
  billingBasis?: Maybe<string>;
  allLossesCaseAmount?: Maybe<string>;
  selectedDetails?: Maybe<Array<Maybe<string>>>;
}

export interface IWriteChecks {
  initials?: Initial[];
}

export type DataType = ISentToLawyer | IWriteChecks;
