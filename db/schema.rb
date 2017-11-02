# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171030094349) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_tokens", force: true do |t|
    t.string   "api_token"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "comments", force: true do |t|
    t.string   "body"
    t.string   "name"
    t.integer  "task_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["task_id"], name: "index_comments_on_task_id", using: :btree

  create_table "projects", force: true do |t|
    t.integer  "user_id"
    t.datetime "start_time"
    t.datetime "end_time"
    t.string   "project_name"
    t.boolean  "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tasks", force: true do |t|
    t.string   "task_name"
    t.date     "start_date"
    t.date     "end_date"
    t.boolean  "status"
    t.integer  "priority"
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tasks", ["project_id"], name: "index_tasks_on_project_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
