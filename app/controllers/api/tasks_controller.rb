class Api::TasksController < ApiController
  respond_to :json
  before_filter :set_project

  def index
    respond_with :api, @project.tasks.all.order("priority DESC")
  end

  def create
    respond_with :api, @project.tasks.create(task_params), :location => nil
  end

  def update
    respond_with :api, @project.tasks.update(params[:id], task_params)
  end

  def destroy
    respond_with :api, @project.tasks.destroy(params[:id])
  end

  private

    def set_project
      @project = Project.find(params[:project_id])
    end

    def task_params
      params.require(:task).permit(:priority, :start_date, :end_date, :user_id, :status, :task_name)
    end
end
