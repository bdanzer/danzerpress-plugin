<?php

namespace Danzerpress;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class GutenbergLoader
{
	public function __construct() 
	{
		// Hook: Frontend assets.
		add_action('enqueue_block_assets', [$this, 'danzerpress_style_block_assets']);
		// Hook: Editor assets.
		add_action('enqueue_block_editor_assets', [$this, 'danzerpress_editor_block_assets']);
		//Add Danzerpress block category
		add_filter( 'block_categories', [$this, 'dp_block_category'], 10, 2);
	}

	/**
	 * Enqueue Gutenberg block assets for both frontend + backend.
	 *
	 * @uses {wp-editor} for WP editor styles.
	 * @since 1.0.0
	 */
	public function danzerpress_style_block_assets() 
	{
		// Styles.
		wp_enqueue_style(
			'danzerpress-style-css', // Handle.
			dp::get_url() . 'dist/blocks.style.build.css', // Block style CSS.
			array( 'wp-editor' ) // Dependency to include the CSS after it.
			// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
		);
	}

	/**
	 * Enqueue Gutenberg block assets for backend editor.
	 *
	 * @uses {wp-blocks} for block type registration & related functions.
	 * @uses {wp-element} for WP Element abstraction — structure of blocks.
	 * @uses {wp-i18n} to internationalize the block's text.
	 * @uses {wp-editor} for WP editor styles.
	 * @since 1.0.0
	 */
	public function danzerpress_editor_block_assets() 
	{
		// Scripts.
		wp_enqueue_script(
			'my_block-cgb-block-js', // Handle.
			dp::get_url() . 'dist/blocks.build.js', // Block.build.js: We register the block here. Built with Webpack.
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
			// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
			true // Enqueue the script in the footer.
		);

		// Styles.
		wp_enqueue_style(
			'my_block-cgb-block-editor-css', // Handle.
			dp::get_url() . 'dist/blocks.editor.build.css', // Block editor CSS.
			array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
			// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
		);
	}

	/**
	 * Add danzerpress block category
	 */
	public function dp_block_category( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'danzerpress',
					'title' => __( 'DanzerPress Blocks', 'danzerpress' ),
				),
			)
		);
	}
}

new GutenbergLoader();