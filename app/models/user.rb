class User < ActiveRecord::Base
  has_secure_password

  has_many :projects
  has_many :tasks
  has_many :api_tokens

  validates_presence_of :email
  validates_uniqueness_of :email
end