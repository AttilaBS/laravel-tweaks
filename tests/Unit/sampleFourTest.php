<?php

declare(strict_types=1);

test('sleeps for 2 seconds - test four', function () {
   sleep(2);

   expect(true)->toBeTrue();
});
