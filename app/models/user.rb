# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password
    validates :name, length: {in: 3..30 }, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true

    before_validation :ensure_session_token

    has_many :carts
    has_many :reviews, dependent: :destroy

    has_many :items,
        through: :carts,
        source: :item

    def self.find_by_credentials(email, password)
       user = User.find_by(email: email)
       user&.authenticate(password)
    end

    def reset_session_token!
        self.update!(session_token: genertare_token)
        self.session_token
    end

    private

    def genertare_token
        loop do
            token = SecureRandom.base64
            break token unless User.exists?(session_token: token)
        end
    end

    def ensure_session_token
        self.session_token ||= genertare_token
    end
end
