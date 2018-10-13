<?php
namespace Danzerpress\filters;

use Danzerpress\Images\Image;
use Timber;

class TwigFunctions extends MethodExtractor {
    public function __construct() 
    {
        parent::__construct();
        
    }

    public function __que_functions()
	{
		add_filter( 'timber/twig', function( \Twig_Environment $twig ) {
            foreach ($this->functions as $value) {
                $twig->addFunction( new Timber\Twig_Function( $value['name'], [$this, $value['name']] ));
            }
            return $twig;
        });
    }
    
    public function dpImage($image_id, $classes = null) {
        $image = new Image($image_id, $classes);
        return $image->build_image();
    }
}