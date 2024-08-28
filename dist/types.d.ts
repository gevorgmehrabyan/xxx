type Initial = {
    id: number;
    initials?: string | null;
    name?: string | null;
};
export interface ISentToLawyer {
    text: string;
    initials?: Initial[];
}
interface IWriteChecks {
    text: string;
}
export type DataType = ISentToLawyer | IWriteChecks;
export {};
