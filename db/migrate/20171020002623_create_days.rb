class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.text :notes
    end
  end
end
