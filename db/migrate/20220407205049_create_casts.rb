class CreateCasts < ActiveRecord::Migration[6.1]
  def change
    create_table :casts do |t|
      t.string :headshot
      t.string :name

      t.timestamps
    end
  end
end
