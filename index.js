const { response } = require("express");
const express = require("express");
const ExpressApp = express();
const list = [
  {
    _id: "607684e0d549710016f2951e",
    title: "How to Make Cut-Out Sugar Cookies",
    body:
      "Versatile sugar cookie dough is like edible modeling clay. It can be simply rolled into balls and baked, like snickerdoodles, but when you want to take it further and cut sugar cookie into shapes, like The Best Rolled Sugar Cookies, these tips will help your sugar cookie cut-outs turn out beautifully every time.",
  },
  {
    _id: "607684e0d549710016f2951f",
    title: "Thick Cut-Outs",
    body:
      "A big batch of big thick sugar cookies. These are THE big soft sugar cookies you have been looking for. Frost them while warm and sprinkle with colored sugar.",
  },
  {
    _id: "607684e0d549710016f29520",
    title: "Chicken Pot Pie IX",
    body:
      "A delicious chicken pot pie made from scratch with carrots, peas, and celery for a comfort…",
  },
  {
    _id: "607684e0d549710016f29521",
    title: "Ginger-Chicken Stir Fry",
    body:
      "Stir fries require very little cooking time and you can pretty much use any vegetables you like, but the star of this one is the ginger. This dish is quick and easy to make, but get all of your ingredients together (including mixing the sauce) before you start cooking because everything happens fast! Serve with rice, and garnish with sliced green onions.",
  },
  {
    _id: "607684e0d549710016f29522",
    title: "Air Fryer Keto Chicken Wings",
    body:
      "These air-fried chicken wings are finished in under 15 minutes and a great dish if you are on the keto diet. If desired, separate wings into drumettes.",
  },
  {
    _id: "607684e0d549710016f29523",
    title: "Chicken Fajita Cauliflower Pizza",
    body:
      "All your favorite chicken fajita flavors on a delicious, better-for-you cauliflower pizza crust!",
  },
  {
    _id: "607684e0d549710016f29524",
    title: "Margherita Pizza with Sausage and Pesto",
    body:
      "Two of my favorite ingredients, pesto sauce and sausage, come together to make one of my family's favorite foods: pizza! They loved how crispy, melty, and cheesy it was! Feel free to adjust ingredients according to your personal tastes.",
  },
  {
    _id: "607684e0d549710016f29525",
    title: "Taco Salad Pizza",
    body:
      "When you can't decide between pizza and tacos, make both! Save time by starting with a pre-made frozen CAULIPOWER® crust.",
  },
  {
    _id: "607684e0d549710016f29526",
    title: "BLAT Pizza with Basil Mayo",
    body:
      "Bacon, lettuce, tomato, and avocado combine for a twist on gluten-free pizza that explodes with crispy texture and fresh flavors.",
  },
  {
    _id: "607684e0d549710016f29527",
    title: "Greek Veggie Pizza",
    body:
      "Top this crispy, melty three-cheese pizza with some Greek flavors and a quick, easy chilled Greek sauce.",
  },
];
ExpressApp.listen(3000);
ExpressApp.get("/", (request, response) => {
  try {
    response.send("<div class='container'><h1>This is Main Page</h1></div>");
  } catch (error) {
    response.status(400).json({ error: error });
  }
});
ExpressApp.get("/api/resources", (request, response) => {
  response.send(list);
});
ExpressApp.get("/api/resources/:id", (req, resp) => {
  let found = 0;
  console.log(req.params);
  for (let item of list) {
    if (item._id == req.params.id) {
      found = 1;
      resp.send(item);
    }
  }
  if (found == 0) {
    resp.send("NOT FOUND");
  }
});
