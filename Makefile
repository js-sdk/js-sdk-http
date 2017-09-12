include builder/compile.mk

pre-build:
	-mkdir -p lib
	-mkdir -p dist

lib/http.js: src/index.js
	$(BABEL) $< -o $@

dist/http.js: src/index.js
	$(BABEL) $(CFLAGS) $< -o $@

dist/http.min.js: src/index.js
	$(BABEL) $(CFLAGS) --minified $< -o $@

dist-all: pre-build dist/http.js dist/http.min.js

all: test dist-all lib/http.js

test:
	$(MOCHA) $(TEST_CFLAGS) tests/*.js

clean:
	rm -rf lib dist

clean-all: clean
	rm -rf node_modules
