// xdebug config

20-xdebug.ini file:

zend_extension=xdebug.so
xdebug.mode=coverage,debug
xdebug.start_with_request=no

xdebug.output_dir=/tmp
xdebug.trace_output_name=trace.%t
xdebug.cache_dir=/tmp

running tests with coverage: 

./vendor/bin/pest --coverage

./vendor/bin/pest --coverage --min=40

running tests with type coverage:

./vendor/bin/pest --type-coverage

./vendor/bin/pest --type-coverage --min=85

running architectural tests:

./vendor/bin/pest --arch
