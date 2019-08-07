<?php

namespace App\Exceptions;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

trait ExceptionTrait 
{
    public function apiException($request, $e){
        // Si no encuentra el producto
        if ($e instanceof ModelNotFoundException) {
            return response()->json([
                "errors" => __("Product not found")
            ], Response::HTTP_NOT_FOUND);
        }
        // Ruta incorrecta
        if ($e instanceof NotFoundHttpException) {
            return response()->json([
                "errors" => __("Incorect route")
            ], Response::HTTP_NOT_FOUND);
        }
    }
}