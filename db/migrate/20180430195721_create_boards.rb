class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :name
      t.boolean :is_private
      t.boolean :is_archived, default: false
      t.string :bg_img
      t.string :bg_color
      t.string :uid

      t.timestamps
    end
    add_index :boards, :uid, unique: true
  end
end
