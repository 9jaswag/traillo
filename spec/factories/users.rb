FactoryBot.define do
  factory :user do
    first_name "MyString"
    last_name "MyString"
    bio "MyText"
    avatar ""
    username "MyString"
    email "MyString"
    password_digest "MyString"
    reset_digest "MyString"
    reset_time "2018-04-16 10:51:09"
    activation_digest "MyString"
    activation_time "2018-04-16 10:51:09"
    activated false
  end
end
