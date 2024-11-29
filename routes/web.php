<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $news = new NewsCollection(News::latest()->filter(request('search'))->paginate(8)->withQueryString());
    // dd($news);

    return Inertia::render('Home', [
        'title' => 'Portal GenZ',
        'description' => 'Sebuah Web portal berita tentang GenZ',
        'news' => $news
    ]);
})->name('home');

// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/news', [NewsController::class, 'index'])->name('index-news');
    Route::get('/create-news', [NewsController::class, 'create'])->name('create-news');
    Route::post('/store-news', [NewsController::class, 'store'])->name('store-news');
    Route::get('/show-news', [NewsController::class, 'show'])->name('show-news');
    Route::get('/edit-news/{news}', [NewsController::class, 'edit'])->name('edit-news');
    Route::put('/update-news/{news}', [NewsController::class, 'update'])->name('update-news');
    Route::delete('/delete-news/{news}', [NewsController::class, 'destroy'])->name('delete-news');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
