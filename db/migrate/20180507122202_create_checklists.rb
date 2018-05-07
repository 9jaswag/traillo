class CreateChecklists < ActiveRecord::Migration[5.1]
  def change
    create_table :checklists do |t|
      t.string :name
      t.references :card, foreign_key: true

      t.timestamps
    end
  end
end
