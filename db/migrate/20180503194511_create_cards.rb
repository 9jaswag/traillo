class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.datetime :due_date
      t.boolean :is_archived, default: false
      t.references :list, foreign_key: true

      t.timestamps
    end
    add_index :cards, :name
  end
end
