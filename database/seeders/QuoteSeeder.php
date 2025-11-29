<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

final class QuoteSeeder extends Seeder
{
    public function run(): void
    {
        app(Quote::class)->create
    }
}
