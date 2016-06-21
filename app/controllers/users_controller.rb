class UsersController < ApplicationController
	protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

	def index
		@users = User.all.limit(params[:data])
		@number = (User.all.size/25.0).ceil
		if(params[:time])
			@time = params[:time]
			start_point = 25 * @time.to_i
			end_point = 25 * (@time.to_i + 1)
			@user_paginations = []
			User.all.each_with_index do |u, i|
				if(i>=start_point) && (i<=end_point)
					@user_paginations.push u
				end
			end
		end
 		render json: {datas: {users: @users, numbers: @number, user_paginations: @user_paginations}}
	end

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
