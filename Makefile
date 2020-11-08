commit:
	git add .
	git commit -m "$m"
	git push
build:
	npm install
	npm run build
dev:
	npm run serve