<?php
/**
 * @package   T3 Blank
 * @copyright Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license   GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<?php

/**
 * Mainbody 3 columns, content in center: sidebar1 - content - sidebar2
 */

// positions configuration
$sidebar1 = 'sidebar-1';
$sidebar2 = 'sidebar-2';

$sidebar1 = $this->countModules($sidebar1) ? $sidebar1 : false;
$sidebar2 = $this->countModules($sidebar2) ? $sidebar2 : false;

// detect layout

?>

<div id="t3-mainbody" class="container t3-mainbody" >
	<div class="main-container">
		<div class="row">

			<!-- MAIN CONTENT -->
			<div id="t3-content" class="t3-content col-xs-12 col-md-6">
				<?php if($this->hasMessage()) : ?>
				<jdoc:include type="message" />
				<?php endif ?>
				
				<?php if ($this->countModules('content-mass-top')) : ?>
					<!-- CONTENT MASS TOP -->
					<div class="content-mass-top <?php $this->_c('content-mass-top') ?>">
						<jdoc:include type="modules" name="<?php $this->_p('content-mass-top') ?>" style="T3Xhtml" />
					</div>
					<!-- CONTENT MASS TOP -->
				<?php endif ?>
				
				<jdoc:include type="component" />
			</div>
			<!-- //MAIN CONTENT -->
			
			<div class="t3-sidebar col-xs-12 col-md-6">
			<?php if ($this->countModules($sidebar1)) : ?>
				<!-- SIDEBAR LEFT -->
				<div class="t3-sidebar t3-sidebar-1 col-xs-12 col-sm-6 <?php $this->_c($sidebar1) ?>">
					<jdoc:include type="modules" name="<?php $this->_p($sidebar1) ?>" style="T3Xhtml" />
				</div>
				<!-- SIDEBAR LEFT -->
			<?php endif ?>

			<?php if ($this->countModules($sidebar2)) : ?>
				<!-- SIDEBAR LEFT -->
				<div class="t3-sidebar t3-sidebar-2 col-xs-12 col-sm-6 <?php $this->_c($sidebar2) ?>">
					<jdoc:include type="modules" name="<?php $this->_p($sidebar2) ?>" style="T3Xhtml" />
				</div>
				<!-- SIDEBAR LEFT -->
			<?php endif ?>
			</div>

	
		</div>

	</div>
</div> 