class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.string :name
      t.references :task, index: true
      t.timestamps
    end
  end
end
