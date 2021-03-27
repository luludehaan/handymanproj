class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :name
      t.string :title
      t.string :experience

      t.timestamps
    end
  end
end
