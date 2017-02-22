class InteractionController < ApplicationController
  protect_from_forgery with: :null_session

  def execute
    log_json
    render text: 'OK', status: 200
  end

  def save
    log_json
    render text: 'OK', status: 200
  end

  def publish
    log_json
    render text: 'OK', status: 200
  end

  def validate
    log_json
    render text: 'OK', status: 200
  end

  def edit
    log_json
    render text: 'OK', status: 200
  end

  def log_json
    json_request = JSON.parse request.body.read
    logger.info("json: #{json_request}")
  end


end
