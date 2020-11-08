commit:
	git add .
	git commit -m "$m"
	git push
build:
	npm install
	npm run build
docker: build
	docker-compose up -d
dev:
	npm run serve