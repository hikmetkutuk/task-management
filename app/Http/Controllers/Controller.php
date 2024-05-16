<?php

namespace App\Http\Controllers;

/**
 * @OA\Info(title="Task Management", version="0.0.1")
 * @OA\SecurityScheme(
 *      securityScheme="X-Api-Key",
 *      in="header",
 *      name="X-Api-Key",
 *      type="apiKey",
 *  ),
 * @OA\OpenApi(
 *      security={
 *          {"apiKeyAuth": {}}
 *      }
 *  )
 *
 *
 */
abstract class Controller
{
    //
}
