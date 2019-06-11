<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Notes;

class NotesController extends Controller
{
    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'value' => 'required|string',
            'number' => 'required',
        ]);

        $note = Notes::create($validatedData);

        return response(['note' => $note]);
    }

    public function showAll()
    {
        return Notes::orderBy('created_at', 'desc')->get();
    }
}
