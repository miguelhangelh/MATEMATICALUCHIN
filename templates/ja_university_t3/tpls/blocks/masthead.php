<?php
/**
 * @package   T3 Blank
 * @copyright Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license   GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<!-- MASTHEAD -->
<div id="t3-masthead" class="t3-masthead">			
	<?php if ($this->countModules('masthead')) : ?>
		<!-- MASTHEAD -->
			<jdoc:include type="modules" name="<?php $this->_p('masthead') ?>" style="raw" />
		<!-- //MASTHEAD -->
	<?php endif ?>
</div>
<!-- //MASTHEAD -->