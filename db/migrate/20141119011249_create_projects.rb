class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.datetime :start_time
      t.datetime :end_time
      t.string :project_name
      t.boolean :status
      t.timestamps
    end
  end
end
