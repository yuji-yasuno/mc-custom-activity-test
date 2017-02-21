require 'test_helper'

class InteractionControllerTest < ActionDispatch::IntegrationTest
  test "should get execute" do
    get interaction_execute_url
    assert_response :success
  end

  test "should get save" do
    get interaction_save_url
    assert_response :success
  end

  test "should get publish" do
    get interaction_publish_url
    assert_response :success
  end

  test "should get validate" do
    get interaction_validate_url
    assert_response :success
  end

  test "should get edit" do
    get interaction_edit_url
    assert_response :success
  end

end
