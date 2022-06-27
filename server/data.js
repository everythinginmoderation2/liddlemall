import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Prince",
      email: "ps@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Guest",
      email: "guest@example.com",
      password: bcrypt.hashSync("123457"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id: '2',
      name: "Addidas Fit shirt",
      slug: "addidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 0,
      brand: "Nike",
      rating: 4.0,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id: '3',
      name: "Nike Slim pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
  ],
};

export default data;
