### setup
``composer require laravel/breeze --dev`` https://github.com/laravel/breeze

``php artisan breeze:install``

``php artisan serve``

``npm run dev``

``php artisan tinker``

``php artisan make:model Project -fm``

``php artisan migrate --seed``

``php artisan migrate:refresh --seed``

### controller

``php artisan make:controller ProjectController --model=Project --requests --resource``

### resource
`` php artisan make:resource ProjectResource``

### swagger
``composer require "darkaonline/l5-swagger``

``php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"``

``php artisan l5-swagger:generate``

### prettier
``npm install --save-dev --save-exact prettier``
