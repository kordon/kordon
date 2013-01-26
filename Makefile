MOCHA=node_modules/.bin/mocha test/specs -u tdd -t 4000

test:
	$(MOCHA) -R spec

md:
	$(MOCHA) -R Markdown > test/results/test.md

html:
	$(MOCHA) -R HTML > test/results/test.html

cov:
	rm -rf src-cov
	jscoverage src src-cov

html-cov:
	make cov
	@KORDON_COV=1 $(MOCHA) -R html-cov > test/results/coverage.html

json-cov:
	make cov
	@KORDON_COV=1 $(MOCHA) -R json-cov > test/results/coverage.json


.PHONY: test html-cov json-cov md html