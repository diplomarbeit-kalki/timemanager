export type User = {
  id?: string;
  username: string;
  password: string;
};

export type EmployeeForm = {
  id: string;
  tag: string | undefined;
  firstname: string;
  lastname: string;
  birthdate: string;
  street: string;
  housenr: string;
  residence: string;
  postalcode: string;
  phonenr: string;
  email: string;
}
