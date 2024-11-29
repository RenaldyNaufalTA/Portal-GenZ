<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Http\Resources\NewsCollection;
use App\Http\Resources\NewsResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $news = News::all();
        // $news->each(function ($collection, $alphabet) {
        //     dump($alphabet, $collection);
        // });
        // dd($news);
        $myNews = News::where("user_id", auth()->user()->id)->latest()->paginate(5);
        return Inertia::render('MainNews', ['myNews' => $myNews]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('News/CreateNews');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        News::create([
            'title' => $request->title,
            'body' => $request->body,
            'category' => $request->category,
            'user_id' => auth()->user()->id
        ]);
        return redirect()->route('index-news')->with('message', 'News Added!');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        // $user = User::find(auth()->user()->id);
        // return Inertia::render('CreateNews', ['myNews' => $user->news]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        return Inertia('News/EditNews', [
            'news' => $news->find($news->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $myNews = News::findOrFail($news->id);
        $myNews->update($request->all());
        return redirect()->route('index-news')->with('message', 'News Updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        $news->find($news->id)->delete();
        return redirect()->route('index-news')->with('message', 'News Deleted!');
    }
}
