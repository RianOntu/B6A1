2. What is the use of the keyof keyword in TypeScript? Provide an example.

Answer:
টাইপ সাধারণত কি : ভ্যালু আকারে থাকে। typeof ইউস করে আমরা টাইপের কীগুলো পেতে পারি, আর keyof সেই কীগুলোকে union টাইপ হিসেবে রিটার্ন করে।

Example:
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type PersonKeys = keyof Person;
// Result: "name" | "age" | "isStudent"

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}

const p: Person = { name: "Rian", age: 29, isStudent: false };
console.log(getValue(p, "name")); // Output: Rian

3. Explain the difference between any, unknown, and never types in TypeScript.

Answer:

any: যেকোনো টাইপ আসতে পারে।

unknown: যখন রিটার্ন টাইপ বা মানটি কি হতে পারে নিশ্চিত না, তখন ব্যবহার করা হয়।

never: যখন কোনো ফাংশন কখনোই কিছু রিটার্ন করে না—যেমন infinite loop, বা error throw করা—তখন এই টাইপ ব্যবহার করা হয়।

Example:
let data: any = 10;
data = "Hello";  // OK
data = true;     // OK

let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); 
}

function throwError(msg: string): never {
  throw new Error(msg); 
}

function infiniteLoop(): never {
  while (true) {}
}