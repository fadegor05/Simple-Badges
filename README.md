# Simple-Badge-Gen
Simple-Badge-Gen is a simple and easy to use generator of badges, which you can use anywhere, starting from your github account ending website. You can use it to easily give links to yours Telegram, Github, Youtube, Discord accounts.

# Examples
<img src="readmemd/example1.png" height="100">
<img src="readmemd/example2.png" height="100">
<img src="readmemd/example3.png" height="100">
<img src="readmemd/example4.png" height="100">
<img src="readmemd/example5.png" height="100">

# How it works
First you need to do is a start a Flask server, after that you just need to enter in your browser some kind of code for your <b>Simple-Badge</b>. To generate badge like this you need just use easy <b>Simple-Badges</b> syntax:

<b>Flask Server Address</b>/<b>Title</b>/<b>Subtitle</b>/<b>Color in Hex</b>/<b>Height in PX</b>

### Example:

<img src="readmemd/example6.png" height="100">


``
http://127.0.0.1:5000/Title/Subtitle/8c26ab/150
``

# Requirements
- Flask
- html2img
- Pillow

# Installation
### Clone this Github project
```
git clone https://github.com/fadegor05/Simple-Badge-Gen
```
### Creating a new python virtual environment
```
py -m venv venv
```
### Installing Flask, html2img, Pillow
```
pip install Flask html2img PILLOW
```
### Start the developer Flask server
```
py main.py
```