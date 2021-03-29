class Comment < ApplicationRecord
  belongs_to :service
  validates :author, presence: true
end
