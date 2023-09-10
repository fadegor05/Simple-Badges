# Simple-Badges
Simple-Badges is a simple and easy to use generator of badges, which you can use anywhere, starting from your github account ending website. You can use it to easily give links to yours Telegram, Github, Youtube, Discord accounts.

# Examples
<img src="readmemd/example1.png" height="100">
<img src="readmemd/example2.png" height="100">
<img src="readmemd/example3.png" height="100">
<img src="readmemd/example4.png" height="100">
<img src="readmemd/example5.png" height="100">

# How it works
One thing you need to do is open <b>index.html</b> in your browser. To generate badge like this you need just use easy <b>Simple-Badges</b> syntax:

<b>Python Server Adress</b>/?<b>title=Title</b>&<b>subtitle=Subtitle</b>&<b>color=Color in Hex</b>&<b>px=Height in PX</b>

### Example:

<img src="readmemd/example6.png" height="100">


``
http://127.0.0.1:8000/?title=Title&subtitle=Subtitle&color=8c26ab&px=96
``

# Installation
### Clone this Github project
```
git clone https://github.com/fadegor05/Simple-Badges
```
### Building a Docker image
```
docker build -t simple-badges-image .
```
### Run the docker container from image
```
docker run -rm -t --name simple-badges-instance -p 8000:5000 simple-badges
```
instead of port <b>8000</b> you can use any you want.