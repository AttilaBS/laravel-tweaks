<?php

namespace App\Models\Quote;

use Illuminate\Database\Eloquent\Model;

final class FamousQuote extends Model
{
    protected $fillable = [
        'quote',
        'owner',
        'type',
    ];
}
