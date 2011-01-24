require 'rake'

DOMMONSTER_VERSION  = "1.2.3"

DOMMONSTER_ROOT     = File.expand_path(File.dirname(__FILE__))
DOMMONSTER_SRC_DIR  = File.join(DOMMONSTER_ROOT, 'src')
DOMMONSTER_DIST_DIR = File.join(DOMMONSTER_ROOT, 'dist')

DOMMONSTER_FILES    = [
  File.join(DOMMONSTER_SRC_DIR,'dommonster.js'),
]

task :default => [:clean, :concat, :dist]

desc "Clean the distribution directory."
task :clean do
  rm_rf DOMMONSTER_DIST_DIR
  mkdir DOMMONSTER_DIST_DIR
end

def normalize_whitespace(filename)
  contents = File.readlines(filename)
  contents.each { |line| line.sub!(/\s+$/, "") }
  File.open(filename, "w") do |file|
    file.write contents.join("\n").sub(/(\n+)?\Z/m, "\n")
  end
end

desc "Strip trailing whitespace and ensure each file ends with a newline"
task :whitespace do
  Dir["*", "src/**/*", "test/**/*", "examples/**/*"].each do |filename|
    normalize_whitespace(filename) if File.file?(filename)
  end
end

desc "Concatenate DOM Monster files to build a distributable dommonster.js file"
task :concat => :whitespace do
  File.open(File.join(DOMMONSTER_DIST_DIR,'dommonster.js'),"w") do |f|
    f.puts DOMMONSTER_FILES.map{ |s| IO.read(s) }
  end
end

def uglifyjs(src, target)
  puts "Minifying #{src} with UglifyJS web service..."
  `curl -s --data-urlencode js_code@#{src} http://marijnhaverbeke.nl/uglifyjs > #{target}`
end

def process_minified(src, target)
  cp target, File.join(DOMMONSTER_DIST_DIR,'temp.js')
  msize = File.size(File.join(DOMMONSTER_DIST_DIR,'temp.js'))
  `gzip -9 #{File.join(DOMMONSTER_DIST_DIR,'temp.js')}`

  osize = File.size(src)
  dsize = File.size(File.join(DOMMONSTER_DIST_DIR,'temp.js.gz'))
  rm_rf File.join(DOMMONSTER_DIST_DIR,'temp.js.gz')

  puts "Original version: %.3fk" % (osize/1024.0)
  puts "Minified: %.3fk" % (msize/1024.0)
  puts "Minified and gzipped: %.3fk, compression factor %.3f" % [dsize/1024.0, osize/dsize.to_f]
end

desc "Generates a minified version for distribution."
task :dist do
  src, target = File.join(DOMMONSTER_DIST_DIR,'dommonster.js'), File.join(DOMMONSTER_DIST_DIR,'dommonster.min.js')
  uglifyjs src, target
  process_minified src, target
end
