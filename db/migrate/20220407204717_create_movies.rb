class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :genre
      t.string :poster
      t.string :trailer
      t.text :plot
      t.string :runtime
      t.integer :year
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
