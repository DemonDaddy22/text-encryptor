const descriptionValue = `Excepteur pariatur nulla in ulla
mco aliqua ea cupidatat incididunt proident culpa sint non exercitation deserunt dolor.
Voluptate voluptate dolor reprehenderit laboris fugiat laboris consequat id ex ullamco ad duis elit.
Irure do sint sint do veniam aliqua consequat est deserunt ullamco.
Minim ut commodo exercitation deserunt sunt qui proident culpa ad ex tempor aliqua do irure.
Et ullamco deserunt minim adipisicing et est dolor.
`;

const selectOptions = Object.freeze([
  { name: "15 Minutes", value: "15" },
  { name: "30 Minutes", value: "30" },
  { name: "1 Hour", value: "60" },
  { name: "3 Hour", value: "180" },
  { name: "6 Hour", value: "360" },
  { name: "12 Hour", value: "720" },
  { name: "1 Day", value: "1440" },
]);

const isEmptyString = (value) =>
  value === null ||
  value === undefined ||
  (typeof value === "string" && value.trim() === "");
const buttonName = (value) => (value === 1 ? "Encrypt" : "Decrypt");

export { descriptionValue, selectOptions, isEmptyString, buttonName };
