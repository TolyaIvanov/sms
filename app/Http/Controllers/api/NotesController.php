<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Notes;

class NotesController extends Controller
{
    public function create(Request $request)
    {
        dd($request);
    }

    public function showAll()
    {
        return Notes::all();
    }
}
