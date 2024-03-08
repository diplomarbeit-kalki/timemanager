export type User = {
  id?: string;
  username: string;
  password: string;
};

export type EmployeeForm = {
  tag: string | number | readonly string[] | undefined;
  id: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  street: string;
  housenr: string;
  residence: string;
  postalcode: string;
  phonenr: string;
  email: string;
  tag: string;
}
