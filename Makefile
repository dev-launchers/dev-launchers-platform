# build dev docker img
build-docker:
	docker build --tag strapiv4 -f Dockerfile.dev .

# run dev docker img
run-docker:
	docker run --env-file .env \
 	--mount type=bind,source=$(shell pwd)/src,target=/srv/app/src  \
	-p 1337:1337 \
	-it strapiv4
