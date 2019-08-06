<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'customer' => $this->customer,
            'body' => $this->review,
            'star' => $this->star,
            'href'          => [
                'reviewDetail' => route('review.show', [$this->product_id, $this->id]),
                'ReturnDetailsProduct' => route('products.show', $this->product_id),
            ],
        ];
    }
}