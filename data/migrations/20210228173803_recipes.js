exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).unique().notNullable();
      tbl.string("password", 128).notNullable();
    })
    .createTable("recipes", (tbl) => {
      tbl.increments("id");
      tbl.string("title", 255).notNullable();
      tbl.string("source").notNullable();
      tbl.string("ingredients").notNullable();
      tbl.string("instructions").notNullable();
      tbl.string("category").notNullable();
      tbl.string("private").notNullable().defaultTo("true");
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipes").dropTableIfExists("users");
};
