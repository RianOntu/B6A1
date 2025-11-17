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

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
const printBookDetails = (book: Book): string => {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? 'Yes' : 'No'}`;
};

const getUniqueValues = <T extends string | number>(arr1: T[], arr2: T[]) => {
  let result: T[] = [];
  for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i];
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (value === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result[result.length] = value;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let value = arr2[i];
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (value === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result[result.length] = value;
    }
  }
  return result;
};
const array1 = [1,1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];



const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
  if (products.length > 0) {
    return products.reduce((acc: number, product: Product) => {
      const basePrice = product.quantity * product.price;
      const productDiscount = product.discount ? product.discount / 100 : 0;
      const finalPrice = basePrice * (1 - productDiscount);
      return acc + finalPrice;
    }, 0);
  } else {
    return 0;
  }
};


