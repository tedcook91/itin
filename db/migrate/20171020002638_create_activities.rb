class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.belongs_to :itinerary, null: false
      t.string :location
      t.string :type
      t.text :body

      t.timestamps null: false
    end
  end
end
