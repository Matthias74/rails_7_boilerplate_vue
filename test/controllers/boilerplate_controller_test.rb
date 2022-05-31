require "test_helper"

class BoilerplateControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get boilerplate_home_url
    assert_response :success
  end
end
