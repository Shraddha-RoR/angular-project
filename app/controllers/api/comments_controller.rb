class Api::CommentsController < ApiController
  respond_to :json
  before_filter :set_task

  def index
    respond_with :api, @task.comments.all
  end

  def create
    respond_with :api, @task.comments.create(comment_params), :location => nil
  end

  def update
    respond_with :api, @task.comments.update(params[:id], task_params)
  end

  def destroy
    respond_with :api, @task.comments.destroy(params[:id])
  end

  private

    def set_task
      @task = Task.find(params[:task_id])
    end

    def comment_params
      params.require(:comment).permit(:name, :body)
    end
end
