Jekyll::Hooks.register(:site, :post_write) do |_site|
  # Before we begin building, delete any lingering CSS files. This ensures we
  # don't purge the incorrect file.
  # Dir.glob('_site/assets/*.css').each { |f| File.delete(f) }
end

