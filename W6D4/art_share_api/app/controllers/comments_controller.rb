class CommentsController < ApplicationController

  def index
    if params[:commenter_id]
      comments = Comment.where(id: params[:commenter_id])
      render json: comments
    else
      comments = Comment.where(artwork_id: params[:artwork_id])
      render json: comments
    end
  end

  def create
    comment = Comment.new(comments_params)
    
    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: 422
      ## status: :unprocessable_entity
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  private
  
  def comments_params
    params.require(:comment).permit(:commenter_id, :artwork_id, :body)
  end

end
