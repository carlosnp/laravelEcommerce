<?php

namespace App\Exceptions;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

trait ExceptionTrait 
{
    public function apiException($request, $e){
        // Si no encuentra el producto
        if ($this->isModel($e)) {
            return $this->ModelResponse($e);
        }
        // Ruta incorrecta
        if ($this->isHttp($e)) {
            return $this->HttpResponse($e);
        }
    }

    protected function isModel($e) {
        return $e instanceof ModelNotFoundException;
    }
    protected function isHttp($e) {
        return $e instanceof NotFoundHttpException;
    }
    protected function ModelResponse($e) {
        return response()->json([
            "errors" => __("Product not found")
        ], Response::HTTP_NOT_FOUND);
    }
    protected function HttpResponse($e) {
        return response()->json([
            "errors" => __("Incorect route")
        ], Response::HTTP_NOT_FOUND);
    }
}