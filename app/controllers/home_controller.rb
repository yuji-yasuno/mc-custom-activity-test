class HomeController < ApplicationController
  after_filter :allow_iframe

  def index
  end

  def allow_iframe
    response.headers.except! 'X-Frame-Options'
  end
end
