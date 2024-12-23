export interface Client {
    cid: number;
    name: string;
    email: string;
    phone: string;
    company: string;
    id?: number; // optional for update operation, added for the server to return the updated client record.
}