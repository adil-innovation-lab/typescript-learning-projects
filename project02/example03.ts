type ImranType = {
  name: { firstName: string; lastName: string };
  age: number;
  teaching: boolean;
  dob: Date;
  cerfications: string[];
};

let imran: ImranType;

imran = {
  name: { firstName: "Imran", lastName: "Ali" },
  age: 21,
  teaching: true,
  dob: new Date(),
  cerfications: ["AWS", "Docker", "Rust"],
};

imran = "Alexander"

export {};
