<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0768c93f60e48f8fb46a73587d211708
{
    public static $prefixLengthsPsr4 = array (
        'D' => 
        array (
            'Danzerpress\\filters\\' => 20,
            'Danzerpress\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Danzerpress\\filters\\' => 
        array (
            0 => __DIR__ . '/../..' . '/filters',
        ),
        'Danzerpress\\' => 
        array (
            0 => __DIR__ . '/../..' . '/dp-sections',
            1 => __DIR__ . '/../..' . '/dp-sections/contexts',
            2 => __DIR__ . '/../..' . '/dp-sections/sections',
            3 => __DIR__ . '/../..' . '/dp-sections/helpers',
            4 => __DIR__ . '/../..' . '/inc',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0768c93f60e48f8fb46a73587d211708::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0768c93f60e48f8fb46a73587d211708::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
