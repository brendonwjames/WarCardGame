from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import User
from app.models.db import db



from app.forms.signup_form import SignUpForm

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    # Function that turns the WTForms validation errors into a simple list

    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/edit', methods=['POST'])
@login_required
def edit_wins(id):
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        edit_wins = User.query.get(id)

        edit_wins.username = form.data['username']
        edit_wins.email = form.data['email']
        edit_wins.password = form.data['password']
        edit_wins.wins = edit_wins.wins + 1

        db.session.commit()
        return edit_wins.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401