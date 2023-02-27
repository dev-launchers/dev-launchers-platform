docker build -t strapiv4 .
docker run --env-file .env -p 1337:1337 -it strapiv4