class CreateTts < ActiveRecord::Migration[6.1]
  def change
    create_table :tts do |t|

      t.timestamps
    end
  end
end
