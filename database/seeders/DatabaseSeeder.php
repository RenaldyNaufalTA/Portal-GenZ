<?php

namespace Database\Seeders;

use App\Models\News;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Laravel 9 factory has + method relation from model "hasUsers"
        // User::factory(5)->hasNews(5)->create();

        // Buatkan 5 User yang mempunyai 10 News per user
        User::factory(5)->has(News::factory(10))->create();
        // x3
        // User::factory()->create()->each(function ($a) {
        //     $a->news()->saveMany(News::factory(20)->create());
        // });

        User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
        ]);

        // News::create([
        //     'title' => 'News 1',
        //     'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus similique aperiam corporis facere, suscipit recusandae maiores accusamus. Porro consequatur quo rerum molestiae sequi.',
        //     'category' => 'Design',
        //     'user_id' => 1
        // ]);

        // News::create([
        //     'title' => 'News 2',
        //     'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus similique aperiam corporis facere, suscipit recusandae maiores accusamus. Porro consequatur quo rerum molestiae sequi.',
        //     'category' => 'Programming',
        //     'user_id' => 1
        // ]);
    }
}
