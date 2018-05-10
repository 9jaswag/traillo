class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :is_done
      t.references :checklist, foreign_key: true

      t.timestamps
    end
    add_index :items, :name
  end
end
