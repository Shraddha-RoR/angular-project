class Api::ProjectsController < ApiController
  respond_to :json
  before_filter :set_user

  def index
    respond_with :api, @user.projects.all
  end

  def create
    respond_with :api, @user.projects.create(project_params), :location => nil
  end

  def update
    respond_with :api, @user.projects.update(params[:id], project_params)
  end

  def destroy
    respond_with :api, @user.projects.destroy(params[:id])
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def project_params
      params.require(:project).permit(:start_time, :end_time, :user_id, :status, :project_name)
    end
end
