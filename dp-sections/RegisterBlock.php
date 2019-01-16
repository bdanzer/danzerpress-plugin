<?php
namespace Danzerpress;

class RegisterBlock
{
	protected $namespace;
	protected $attributes = [];
	protected $is_section = false;
	protected $callback;

	public function __construct(string $namespace, array $atts, array $callback, bool $is_section) 
	{
		$this->namespace = $namespace;
		$this->is_section = $is_section;
		$this->callback = $callback;

		$this->set_attributes($atts);
		$this->register_block_type();
	}
	public function register_block_type() 
	{
		// Only load if Gutenberg is available.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}
		$array = [
			'attributes' => $this->get_attributes(),
			'render_callback' => $this->callback
		];
		
		// Hook server side rendering into render callback
		register_block_type($this->namespace, $array);
	}
	public function set_attributes($attr) 
	{
		if (is_array($attr)) {
			$this->attributes = $attr;
		}
	}
	public function set_namespace($namespace) 
	{
		$this->namespace = $namespace;
	}
	public function merge_attributes($attr) 
	{
		$attr = array_merge($attr, $this->attributes);
		return $attr;
	}
	public function get_attributes() 
	{
		$attributes = $this->attributes;

		$attributes = apply_filters('block_attributes_filter', $attributes, $this->namespace, $this->is_section);
		$attributes = apply_filters($this->namespace . '_attributes_filter', $attributes, $this->namespace, $this->is_section);

		return $attributes;
	}
	//Override this method
	public function render($attributes, $content) {}
}