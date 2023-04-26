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
