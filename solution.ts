const formatValue = (
  value: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
};

const getLength = (value: string | number[] | string[]): number | undefined => {
  if (typeof value === 'string') {
    return value.length;
  }
  return value.length;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person('John Doe', 30);
person1.getDetails();



const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

type TitleAndRating = {
  title: string;
  rating: number;
};

const filterByRating = (items: TitleAndRating[]): TitleAndRating[] => {
  return items.filter((item) => item.rating >= 4);
};


