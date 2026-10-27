const today = new Date();
const stringDate = today.toDateString()
let notes = [
    {id: 1 , date: "24/7/2026", title: "Ingredients for cake making", body:"Flour, egg, butter, sugar, water."  }
]

module.exports = {
  notes,
  stringDate
};