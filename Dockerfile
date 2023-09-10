FROM python:3.11-alpine

WORKDIR /simple-badges

COPY . .

EXPOSE 5000

CMD ["python3", "-m", "http.server","5000","--cgi"]
