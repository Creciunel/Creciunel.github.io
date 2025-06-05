# sudo docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:latest sh -c "bundle add webrick && bundle exec jekyll serve --force_polling --livereload"

sudo docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:latest sh -c "bundle && bundle exec jekyll serve --force_polling --livereload --host 0.0.0.0 --trace"
