import Knex from 'knex';

// faz alterações
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table=>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        
        // relacionamento
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

// desfaz alterações
export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}