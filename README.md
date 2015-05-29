Solving github rate limit issues on Heroku

1) Create github access token
		Go to Github, login, settings, personal access tokens
2) Create a personal access token and copy it (we will use it later)

1) $ heroku buildpacks:set https://github.com/ddollar/heroku-buildpack-multi.git
2) Create a .buildpacks file in project root -> where package.json is
3) Add the following buildpacks to it and save and commit
		https://github.com/timshadel/heroku-buildpack-github-netrc.git 
		https://github.com/heroku/heroku-buildpack-nodejs.git
4) $ heroku config:set GITHUB_AUTH_TOKEN=<Personal Auth Token>
5) git push heorku deploy:master or git push heorku master