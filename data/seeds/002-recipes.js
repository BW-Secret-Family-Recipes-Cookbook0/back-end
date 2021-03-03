exports.seed = function (knex) {
  return knex("recipes").insert([
    {
      user_id: 1,
      title: "Black Bean SOUP",
      source: "GMA",
      ingredients:
        "QuTotam rerum modi velit ratione ab sed autem.",
      instructions:
        "Quibusdam aut et repellendus harum laborum. Totam rerum modi velit ratione ab sed autem.",
      category: "SOUPS",
    },
    {
      user_id: 2,
      title: "Tuna Sammy",
      source: "Tio",
      ingredients:
        "Repellat et et est possimus odit aliquam. Quia dolorem et omnis dolores laborum.",
      instructions:
        "Quibusdam aut et repellendus harum laborum.",
      category: "Sandwich.",
    },
  ]);
};