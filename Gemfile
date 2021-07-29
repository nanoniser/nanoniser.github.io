source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "kramdown-math-katex"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]