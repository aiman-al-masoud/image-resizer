from flask import Flask


# app = Flask(__name__)#, static_url_path='/')
app = Flask(__name__, static_url_path='/static')
# app = Flask(__name__, static_url_path='/')
# print(app.static_folder)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_file(path):

    print('path=', path)
    if path == '/':
        return app.send_static_file('index.html')

    return app.send_static_file(path)


@app.route("/share")
def share():
    print('sharing requested!')



@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r