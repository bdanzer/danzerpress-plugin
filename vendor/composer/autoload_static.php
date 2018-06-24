<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit508cdd33b578495c44c01c4f72ba8183
{
    public static $prefixLengthsPsr4 = array (
        'D' => 
        array (
            'Danzerpress\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Danzerpress\\' => 
        array (
            0 => __DIR__ . '/../..' . '/dpsections',
            1 => __DIR__ . '/../..' . '/dpsections/contexts',
            2 => __DIR__ . '/../..' . '/dpsections/sections',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit508cdd33b578495c44c01c4f72ba8183::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit508cdd33b578495c44c01c4f72ba8183::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
