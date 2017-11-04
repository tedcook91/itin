class CreateItineraries < ActiveRecord::Migration[5.1]
  def change
    create_table :itineraries do |t|
      t.belongs_to :user, null: false
      t.text :name, null: false
      t.integer :days
      t.text :notes

      t.timestamps null: false
    end
  end
end
