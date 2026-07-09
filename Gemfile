# frozen_string_literal: true

# These gems require 3.1 or 3.4 use rbenv (and 7zip)
# - to check available versions rbenv global
# - to check current version "rbenv version"
# - to change current version to 3.4 "rbenv local 3.4"
# Version will revert to original when a new powershell is opened.

source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 7.6"

gem "html-proofer", "~> 5.0", group: :test

platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", :platforms => [:windows]
