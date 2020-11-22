const { default: AddItem } = require("./components/AddItem");

export const addItem = (payload) => ({type: 'add', paylaod: payload});
export const removeItem = (payload) => ({type: 'remove', paylaod: payload});