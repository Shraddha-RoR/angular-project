class ApiController < ActionController::Base
  protect_from_forgery with: :null_session
  before_filter :restrict_access

  private

  def restrict_access
    authenticate_or_request_with_http_token do |token, options|
      @token = token
      ApiToken.exists?(api_token: @token)
    end
  end
end
