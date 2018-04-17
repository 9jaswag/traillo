class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.text :bio
      t.attachment :avatar
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :reset_digest
      t.datetime :reset_time
      t.string :activation_digest
      t.datetime :activation_time
      t.boolean :activated, default: false

      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email
  end
end
