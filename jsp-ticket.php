<?php

/**
 * Plugin Name: JSP Ticketing
 * Plugin URI: 
 * Description: A plugin for managing the JSP Ticketing System built with React
 * Version: 1.0.0
 * Author: PCES Doo
 * Author URI: https://pces.mk
 * Text Domain: jsp-ticket
 * License: GPLv3
 *
 * This plugin is private adn therefore cannot be used by any other application
 */

define('RT_PLUGIN_VERSION', '0.1.0');
define('RT_PLUGIN_DIR_URL', plugin_dir_url(__FILE__) . 'ticket/');
define('RT_REACT_APP_BUILD', RT_PLUGIN_DIR_URL . 'build/');
define('RT_MANIFEST_URL', RT_REACT_APP_BUILD . 'asset-manifest.json');

/**
 * Calling the plugin class with parameters.
 */

function rt_load_plugin()
{
  new RtLoadReactApp('wp_enqueue_scripts', '', '#user-account', 'is_page');
}

add_action('init', 'rt_load_plugin');

/**
 * Class RtLoadReactApp.
 */
class RtLoadReactApp
{
  /**
   * @var string
   */
  private $selector = '';
  /**
   * @var string
   */
  private $limit_load_hook = '';
  /**
   * @var bool|string
   */
  private $limit_callback = '';

  /**
   * RtLoadReactApp constructor.
   *
   * @param string $enqueue_hook Hook to enqueue scripts.
   * @param string $limit_load_hook Limit load to hook in admin load. If front end pass empty string.
   * @param bool|string $limit_callback Limit load by callback result. If back end send false.
   * @param string $css_selector Css selector to render app.
   */

  function __construct($enqueue_hook, $limit_load_hook, $css_selector, $limit_callback = false)
  {
    $this->selector = $css_selector;
    $this->limit_load_hook = $limit_load_hook;
    $this->limit_callback = $limit_callback;

    add_action($enqueue_hook, [$this, 'load_react_app']);
  }

  /**
   * Load react app files in WordPress admin.
   *
   * @param $hook
   *
   * @return bool|void
   */
  function load_react_app($hook)
  {
    // Limit app load in front end home page and route planner page by callback.
    $limit_callback = $this->limit_callback;

    if (is_string($limit_callback) && !$limit_callback('user-account'))
      return;

    // Get assets links
    $assets_files = $this->get_assets_files();

    $js_files = array_filter($assets_files, fn ($file_string) => pathinfo($file_string, PATHINFO_EXTENSION) === 'js');
    $css_files = array_filter($assets_files, fn ($file_string) => pathinfo($file_string, PATHINFO_EXTENSION) === 'css');

    // Load css files
    foreach ($css_files as $index => $css_file) {
      wp_enqueue_style('jsp-react-' . $index, RT_REACT_APP_BUILD . $css_file);
    }

    // Load js files
    foreach ($js_files as $index => $js_file) {
      wp_enqueue_script('jsp-react-' . $index, RT_REACT_APP_BUILD . $js_file, array(), 1, true);
    }

    // Variables for app use - These variables will be available in window.rtReactPlugin variable.
    wp_localize_script('jsp-react-0', 'rtReactPlugin', array('appSelector' => $this->selector));
  }

  /**
   * Get app entry points assets files.
   *
   * @return array|void
   */
  private function get_assets_files()
  {
    // Request manifest file.
    $request = file_get_contents(RT_MANIFEST_URL);

    // If the remote request fails
    if (!$request)
      return false;

    // Convert json to php array
    $files_data = json_decode($request);
    if ($files_data === null)
      return;

    // No entry points found
    if (!property_exists($files_data, 'entrypoints'))
      return false;


    return $files_data->entrypoints;
  }
}
