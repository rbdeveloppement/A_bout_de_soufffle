import { createSlice } from "@reduxjs/toolkit";

const cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  articles: cart,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const duplicates = state.articles.some(
        (cartItem) => cartItem.id === action.payload.id
      );
      const articleToAdd = {
        ...action.payload,
        count: 1,
      };
      if (!duplicates) {
        state.articles.push(articleToAdd);
        localStorage.setItem("cart", JSON.stringify(state.articles));
      } else {
        state.articles.forEach((article) => {
          if (article.id === action.payload.id) {
            article.count = action.payload.target.value || "1";
            localStorage.setItem("cart", JSON.stringify(state.articles));
          }
        });
      }
    },

    deleteFromCart: (state, action) => {
      // Recuperer le tableau d'articles dans le state pour filtrer les article par leurs id pour recuperer tout les article qui ne possede pas id de l'article a supprimer
      const articles = state.articles.filter(
        (articleFromState) => articleFromState.id !== action.payload
      );
      state.articles = articles;
      localStorage.setItem("cart", JSON.stringify(articles));
    },
  },
});

export const selectArticlesByNameContaining = (articles, stringToSearch) => {
  if (!stringToSearch || stringToSearch === "" ) return articles;
  return articles.filter((article) => article.name.toLowerCase().includes(stringToSearch.toLowerCase()));
};
export const { addToCart, deleteFromCart } = CartSlice.actions;
export default CartSlice.reducer;
