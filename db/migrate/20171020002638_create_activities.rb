class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :location
      t.string :type
      t.text :notes
    end
  end
end
