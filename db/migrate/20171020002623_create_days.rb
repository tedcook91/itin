class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.belongs_to :itinerary, null: false
      t.text :notes

      t.timestamps null: false
    end
  end
end
