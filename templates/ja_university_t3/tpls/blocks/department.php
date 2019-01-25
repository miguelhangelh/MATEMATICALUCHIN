<?php
/**
 * @package   T3 Blank
 * @copyright Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license   GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<?php if ($this->countModules('department')) : ?>
<!-- DEPARTMENT -->
<div id="t3-department">
	<div class="container department">
		<div class="main <?php $this->_c('department') ?>">
			<jdoc:include type="modules" name="<?php $this->_p('department') ?>" style="raw" />
		</div>
	</div>
</div>
<!-- //DEPARTMENT -->
<?php endif ?>