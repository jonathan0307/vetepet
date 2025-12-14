export interface Customer {        // Required field
  id?: string | number;           // Required field (string|number)
  name: string;          // Required field
  email: string;         // Required field
  phone?: string;        // Optional field
  address?: string;      // Optional field
}
