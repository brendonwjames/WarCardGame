from app.models import db, User

def seed_users():
    demo = User(username='Computer', email='demo@aa.io', password='38asd4uhgav83', wins=7)
    jon = User(username='JonSnow', email='muhqueen@winteriscoming.net', password='password', wins=2)
    dexter = User(username='bobbie', email='nothinginmyfreezer23@dexter.io', password='password', wins=1)
    dexter = User(username='Demo', email='demo@demo.com', password='password', wins=8)

    db.session.add(demo)
    db.session.add(jon)
    db.session.add(dexter)
    db.session.add(demo)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
