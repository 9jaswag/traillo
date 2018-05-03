class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :name
      t.references :board, foreign_key: true
      t.boolean :is_archived, default: false

      t.timestamps
    end
    add_index :lists, :name
  end
end
