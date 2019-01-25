

<?php
/**
 * Mainbody 3 columns, content in left, mast-col on top of 2 sidebars: content - sidebar1 - sidebar2
 */

// positions configuration
$mastcol  = 'mast-col';
$sidebar1 = 'sidebar-1';
$sidebar2 = 'sidebar-2';

$mastcol  = $this->countModules($mastcol)  ? $mastcol  : false;
$sidebar1 = $this->countModules($sidebar1) ? $sidebar1 : false;
$sidebar2 = $this->countModules($sidebar2) ? $sidebar2 : false;

if ($sidebar1 && $sidebar2) {
	$this->loadBlock('mainbody/two-sidebar-right', array('sidebar1' => $sidebar1, 'sidebar2' => $sidebar2, 'mastcol' => $mastcol));
} elseif ($mastcol && ($sidebar1 || $sidebar2)) {
	$this->loadBlock('mainbody/one-sidebar-right-with-mastcol', array('sidebar' => $sidebar1 ? $sidebar1 : $sidebar2, 'mastcol' => $mastcol));
} elseif ($sidebar1 || $sidebar2) {
	$this->loadBlock('mainbody/one-sidebar-right', array('sidebar' => $sidebar1 ? $sidebar1 : $sidebar2));
} else {
	$this->loadBlock('mainbody/no-sidebar');
}

//should we show mastcol when there was no sidebar
?>


