from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/<string:Site>")
def site(Site):
	return render_template(Site)