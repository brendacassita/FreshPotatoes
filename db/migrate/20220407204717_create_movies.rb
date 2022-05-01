class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :poster
      t.string :trailer
      t.text :plot
      t.string :runtime
      t.integer :year

      t.timestamps
    end
  end
end
