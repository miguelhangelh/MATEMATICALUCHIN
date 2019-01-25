<?php
/**
 * @package   T3 Blank
 * @copyright Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license   GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<?php if ($this->countModules('contentslider')) : ?>
<!-- CONTENTSLIDER -->
<div class="t3-contentslider">
	<div class="container contentslider">
		<div class="main <?php $this->_c('contentslider') ?>">
			<jdoc:include type="modules" name="<?php $this->_p('contentslider') ?>" style="T3Xhtml" />
		</div>
	</div>
</div>
<!-- //CONTENTSLIDER -->
<?php endif ?>