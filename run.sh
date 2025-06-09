#!/bin/bash

# This script runs a Jekyll server using Docker.
sudo docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:latest sh -c "bundle && bundle exec jekyll serve --force_polling --livereload --host 0.0.0.0 --trace"


# docker run --rm -v "${PWD}:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:latest sh -c "bundle && bundle exec jekyll serve --force_polling --livereload --host 127.0.0.1 --trace" || docker run --rm -v "${PWD}:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:latest sh -c "bundle && bundle exec jekyll serve --force_polling --livereload --host 0.0.0.0 --trace"
