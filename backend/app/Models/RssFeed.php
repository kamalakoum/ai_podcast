<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RssFeed extends Model
{
    use HasFactory;

    protected $fillable = ['source', 'url', 'topic_id'];

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }
    
}
