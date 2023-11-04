from flask import request

from . import user_bp

from app.controllers.user.create_user import CreateUser
from app.controllers.user.get_users import GetUsers
from app.controllers.user.get_user import GetUser
from app.controllers.user.get_users_like import GetUsersLike
from app.controllers.user.delete_user import DeleteUser

@user_bp.route("/user", methods=["POST"])
def post_user():  
    create_user=CreateUser()
    return create_user(request)

@user_bp.route("/users", methods=["GET"])
def get_users():
    term=request.args.get(key="term",default=False)
    if not term:
        get_users=GetUsers()
        return get_users()
    else:
        get_users_like=GetUsersLike()
        return get_users_like(term)

@user_bp.route("/user/<user_email>", methods=["GET","DELETE"])
def get_delete_user(user_email):
    if request.method=="GET":
        get_user=GetUser()
        return get_user(user_email)
    elif request.method=="DELETE":
        delete_user=DeleteUser()
        return delete_user(user_email)

'''
@user_bp.route("/users/paginate/<int:page_num>", methods=["GET"])
def get_paginated_users(page_num):
    pagination= User.query.filter_by(active=True).order_by(User.id).paginate(per_page=2, page=page_num, error_out=True)
    for i in range(pagination.pages):
        print(pagination.items)
        pagination=pagination.next()
 
    return {"msg": "printed in console"}
'''

class Author:
  def __init__(self, first_name, last_name, year_born):
    self.first_name = first_name
    self.last_name = last_name
    self.year_born = year_born

  def get_full_name(self):
    return self.first_name + " " + self.last_name

# Create a new Author
author = Author("Douglas", "Adams", 1952)
author.first_name = "Doug"

# Prints "Doug Adams"
fullName = author.get_full_name()
print(fullName)

def map(self, start_index: int, end_index: int):
    return self[start_index:end_index]

def slice(self, start_index: int, end_index: int):
    return self[start_index:end_index]

def reduce(self, start_index: int, end_index: int):
    return self[start_index:end_index]