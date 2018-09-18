Jekyll::Hooks.register(:site, :post_write) do |_site|
  # Before we begin building, find critical css classes
  # Dir.glob('_site/assets/*.css').each { |f| File.delete(f) }
end

