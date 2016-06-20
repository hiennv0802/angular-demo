class UsersController < ApplicationController
	# protect_from_forgery with: :null_session
	protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }
	def new
		@user = User.new user_params
	end

	def create
		@user = User.new user_params
		if @user.save
			redirect_to root_path
		end
	end

	private
	def user_params
		params.require("user").permit(:name, :email, :phone, :date, :city, :intro)
	end
end
