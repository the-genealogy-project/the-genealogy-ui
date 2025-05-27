// Stylesheets

declare module "*.css";

// Image types

declare module "*.png";

// Custom FC Props types

interface AppProps {
  applicationName: string;
}

interface HeaderProps {
  logo: string;
  applicationName: string;
}

interface FooterProps {
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
