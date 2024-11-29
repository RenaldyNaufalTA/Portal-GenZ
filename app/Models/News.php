<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class News extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $with = ['user'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeFilter($query, $search)
    {
        // $query->when($filters['search'] ?? false, function($query, $search) {

        // });
        $query->when($search, function ($query, $search) {
            $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('category', 'like', '%' . $search . '%');

            $query->orwhereHas('user', function ($query) use ($search) {
                $query->Where('users.name', 'like', '%' . $search . '%');
            });
        });
    }
}
