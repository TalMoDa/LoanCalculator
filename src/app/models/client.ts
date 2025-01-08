export interface Client {
  id: string;
  fullName: string;
  age: number;
}


export const clientsListFromDbHardCoded: Client[] = [
  {
    id: '069C62F2-005B-4974-96A4-319E6E641BD4',
    fullName: 'John Doe',
    age: 21
  },
  {
    id: 'FBD58F33-8C8D-4F61-BB91-4922CC4957DD',
    fullName: 'John Doe',
    age: 25
  },
  {
    id: '028C1CC1-DB2A-4464-9694-5517717E097C',
    fullName: 'Jane Doe',
    age: 35
  },
  {
    id: '94F94586-2B49-4DAA-850D-BAE017133457',
    fullName: 'Alice Doe',
    age: 45
  },
  {
    id: '10048726-5E8C-4A28-B13D-E44990E14AFF',
    fullName: 'Bob Doe',
    age: 55
  },
  {
    id: '2E8E8379-2F06-4F33-BBA0-E9675BF22574',
    fullName: 'Charlie Doe',
    age: 65
  }
];

