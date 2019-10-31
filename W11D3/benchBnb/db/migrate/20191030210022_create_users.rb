class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string "email"
      t.string "password_digest"
      t.string "session_token"
      t.index ["session_token"], name: "index_users_on_session_token"
      t.index ["username"], name: "index_users_on_username", unique: true
      t.timestamps
    end
  end
end
