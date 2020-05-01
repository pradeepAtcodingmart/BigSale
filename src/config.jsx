const envBaseURLS = {
  development: 'http://localhost:8080',
  test: 'http://testlocalhost:8080',
  production: 'http://prodlocalhost:8080',
};

export const baseURL = envBaseURLS[process.env.NODE_ENV];

export const restarunts = [
  {
    value: 'Hydrabad briyani',
    label: 'Hydrabad briyani',
  },
  {
    value: 'Thalappa katti',
    label: 'Thalappa katti',
  },
];

export const foodCategories = {
  cloth: [],
  shoes: [],
  watchs: [],
  briyani: [],
  meals: [],
};

export const foodcategoriesArray = [
  {
    value: 'cloth',
    label: 'CLOTH',
  },
  {
    value: 'shoes',
    label: 'SHOES',
  },
  {
    value: 'watchs',
    label: 'WATCHS',
  },
  {
    value: 'briyani',
    label: 'BRIYANI',
  },
  {
    value: 'meals',
    label: 'Meals',
  },
];

export const authConfig = {
  userName: 'prade',
  password: 'prade',
};
