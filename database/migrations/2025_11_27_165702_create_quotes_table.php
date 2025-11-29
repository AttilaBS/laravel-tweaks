<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('famous_quotes', function (Blueprint $table) {
            $table->id();
            $table->string('quote');
            $table->string('owner')->index();
            $table->enum('type', ['inspiring', 'spiritual', 'funny', 'thought-provoking']);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('famous_quotes');
    }
};
