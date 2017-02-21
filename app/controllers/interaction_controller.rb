class InteractionController < ApplicationController
  protect_from_forgery with: :null_session
  def execute
    render text: 'OK', status: 200
  end

  def save
    render text: 'OK', status: 200
  end

  def publish
    render text: 'OK', status: 200
  end

  def validate
    render text: 'OK', status: 200
  end

  def edit
    render text: 'OK', status: 200
  end
end
