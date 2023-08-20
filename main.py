from flask import Flask, render_template, send_file
from config import *
from html2image import Html2Image
from PIL import Image
from color import convert

#*
#*      Simple-Badge-Gen
#*      Made by fadegor05
#*      Project on Github:
#*      https://github.com/fadegor05/Simple-Badge-Gen
#*


#* Creating a Flask App
app = Flask(__name__)


#* Main route
@app.route('/')
def home():
    # Rendering template
    return render_template('main.html')

# Cropping image function
def crop_image(image, out):
    im = Image.open(image)
    im.size
    im.getbbox()
    im2 = im.crop(im.getbbox())
    im2.size
    im2.save(out)

# Generating PNG from HTML function
def generate_image(page, height, temp_file):
    hti = Html2Image(size=(1920,height+16))
    hti.screenshot(html_str=page, save_as=temp_file)[0]

#* Generating a badge
@app.route('/<string:title>/<string:subtitle>/<string:color>/<int:px>')
def generate(title, subtitle, color, px):
    out = [ convert(color, i, START_GRAY) for i in GRAY_LIST ]
    page = render_template('index.html', title=title, subtitle=subtitle, bottom=f"#{color}", top=out[0], accent=out[1], size=px/6)
    generate_image(page, px, TEMP_IMAGE_FILENAME)
    crop_image(TEMP_IMAGE_FILENAME, OUT_IMAGE_FILENAME)
    return send_file(OUT_IMAGE_FILENAME, mimetype='image/png')


#* Error Handler (404)
@app.errorhandler(404)
def page_not_found(error):
    # Rendering template
    return render_template('error.html')


#* Starting Flask App
if __name__ == '__main__':
    app.run(debug=False)