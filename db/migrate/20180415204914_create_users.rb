class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.attachment :avatar
      t.string :username

      t.timestamps
    end
    add_index :users, :username
  end
end
