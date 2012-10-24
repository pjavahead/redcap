<?php
/**
 * @brief Turn on verbose error message reporting
 *
 * @file errorReporting.php
 * $Revision: 196 $
 * $Author: fmcclurg $
 * @author Fred R. McClurg, University of Iowa
 * $Date:: 2012-10-11 10:56:54 #$
 * $URL: https://srcvault.icts.uiowa.edu/repos/REDCap/REDCap/tags/geochart-1.0/lib/errorReporting.php $
 */

   // Turn off all error reporting
   # error_reporting(0);

   // Report all PHP errors (see changelog)
   error_reporting(E_ALL | E_STRICT);
   # error_reporting(E_ALL);

   // Report simple running errors
   # error_reporting(E_ERROR | E_WARNING | E_PARSE);

   // Reporting E_NOTICE can be good too (to report uninitialized
   // variables or catch variable name misspellings ...)
   # error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

   // Report all errors except E_NOTICE
   // This is the default value set in php.ini
   # error_reporting(E_ALL ^ E_NOTICE);

   ini_set("display_errors", 1);
?>
