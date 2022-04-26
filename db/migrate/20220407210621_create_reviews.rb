class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.float :rating
      t.boolean :watched
      t.text :comment
      t.integer :movie_id
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
