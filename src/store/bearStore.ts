import { create } from "zustand";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

type AsyncState = {
  fetchUser: (id: number) => Promise<User>;
};

export const useAsyncStore = create<AsyncState>()(() => ({
  fetchUser: async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();
    return user;
  },
}));
