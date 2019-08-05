## Paquetes que debes instalar

1) para la base de datos
    - ** $ sudo apt-get install mysql-server mysql-client

    para mas informacion [consultar](https://www.digitalocean.com/community/tutorials/como-instalar-mysql-en-ubuntu-18-04-es)

2) Instalar php
    - Instalar Apache
        - ** $ sudo apt -get install apache2
    - Instalar php
        - ** $ sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql
3) Instalar composer
    [consultar](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
4) Instalar laravel
    [consultar](https://laravel.com/docs/5.8/installation)

## Instalacion

1) Clonar el proyecto
    - ** $ git clone https://github.com/carlosnp/laravelEcommerce.git

2) Instalar dependencias
    - ** $ composer install

3) Crear el archivo de configuracion de laravel
    - ** $ cp .env.default .env

4) Crear la API key
    - ** $ php artisan key:generate

5) Base de datos y migraciones
Debemos abrir otro terminal para entrar al shell de mysql y crear la base de datos.
    - Entramos a mysql
        - ** $ mysql -u root -p
        o si usas un usuario ya creado
        - ** $ mysql -u *USUARIO* -p
        si deseas ver los usuarios de mysql
        - ** > select User from mysql.user;
        Si deseas ver la tabla de usuarios
        - ** > SELECT user,authentication_string,plugin,host FROM mysql.user;
    - Creamos un usuaior si no deseamos utilizar el 'root' (opcional)
        - ** > CREATE USER 'ecommerce'@'localhost' IDENTIFIED BY 'ecommerce';
    - Le damos al usuario los permisos necesarios
        - ** > GRANT ALL PRIVILEGES ON *.* TO 'ecommerce'@'localhost' WITH GRANT OPTION;
        - ** > FLUSH PRIVILEGES;
    - Creamos la base de datos
        - ** > CREATE DATABASE ecommerce;
        - ** > En caso de emergencia y necesite borrar la base de datos: DROP DATABASE blog;
    - Configuramos la base de datos en el archivo .env
        DB_DATABASE=blog
        DB_USERNAME=*USUARIO*
        DB_PASSWORD=*password*
    - Realizamos las migraciones
        - ** $ php artisan migrate
    - Si desea crear archivos semilla
        - ** $ composer dump-autoload
        - ** $ php artisan migrate:refresh --seed
    - Crear la tabla de autentificacion
        - ** $ php artisan passport:install
6) Iniciar el servidor
    - ** $ php artisan serve