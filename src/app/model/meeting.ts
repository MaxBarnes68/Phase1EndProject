export interface Meeting {
    mid: number;
    clientname: string;
    datetime: Date;
    agenda: string;
    id?: number; // optional for update operation, added for the server to return the updated meeting record.
}