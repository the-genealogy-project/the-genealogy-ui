// Custom FC Props types

interface AppProps {
  applicationName: string;
}

// Custom data model types

interface Person {
  id: string;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  placeOfBirth?: string | null;
  dateOfBirth?: Date | null;
  photoFileName?: string | null;
  parents: Person[];
  children: Person[];
  siblings: Person[];
  spouses: Person[];
}
