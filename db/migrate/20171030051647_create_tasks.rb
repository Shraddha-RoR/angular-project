class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.date :start_date
      t.date :end_date
      t.boolean :status
      t.integer :priority
      t.references :project, index: true

      t.timestamps
    end
  end
end
