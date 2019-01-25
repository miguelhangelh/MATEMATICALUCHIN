<?php
/**
 * @package   T3 Blank
 * @copyright Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license   GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

// get params
$sitename2  = $this->params->get('sitename2');
$slogan    = $this->params->get('slogan', '');
$logotype  = $this->params->get('logotype', 'text');
$logoimage = $logotype == 'image' ? $this->params->get('logoimage', 'templates/' . T3_TEMPLATE . '/images/logo.png') : '';
$logoimgsm = ($logotype == 'image' && $this->params->get('enable_logoimage_sm', 0)) ? $this->params->get('logoimage_sm', '') : false;

if (!$sitename2) {
	$sitename2 = JFactory::getConfig()->get('sitename2');
}

$logosize = 'col-sm-12';
if ($headright = $this->countModules('head-search or languageswitcherload')) {
	$logosize = 'col-sm-6';
}
?>

<!-- HEADER -->
<header id="t3-header" class="t3-header">
	<div class="container">
		<div class="row">

			<!-- LOGO -->
			<div class="col-xs-12 <?php echo $logosize ?> logo">
				<div class="logo-<?php echo $logotype, ($logoimgsm ? ' logo-control' : '') ?>">
					<a href="<?php echo JURI::base(true) ?>" title="<?php echo strip_tags($sitename2) ?>">
						<?php if($logotype == 'image'): ?>
							<img class="logo-img" src="<?php echo JURI::base(true) . '/' . $logoimage ?>" alt="<?php echo strip_tags($sitename2) ?>" />
						<?php endif ?>
						<?php if($logoimgsm) : ?>
							<img class="logo-img-sm" src="<?php echo JURI::base(true) . '/' . $logoimgsm ?>" alt="<?php echo strip_tags($sitename2) ?>" />
						<?php endif ?>
						<span><?php echo $sitename2 ?></span>
					</a>
					<small class="site-slogan"><?php echo $slogan ?></small>
				</div>
			</div>
			<!-- //LOGO -->

				<?php if ($headright): ?>
					<div class="col-xs-12 col-sm-6">
						<?php if ($this->countModules('head-search')) : ?>
							<!-- HEAD SEARCH -->
							<div class="head-search <?php $this->_c('head-search') ?>">
								<jdoc:include type="modules" name="<?php $this->_p('head-search') ?>" style="raw" />
							</div>
							<!-- //HEAD SEARCH -->
						<?php endif ?>

						<?php if ($this->countModules('languageswitcherload')) : ?>
							<!-- LANGUAGE SWITCHER -->
							<div class="languageswitcherload">
								<jdoc:include type="modules" name="<?php $this->_p('languageswitcherload') ?>" style="raw" />
							</div>
							<!-- //LANGUAGE SWITCHER -->
						<?php endif ?>
						
				<?php endif ?>

			</div>
	</div>
	</div>
</header>
<!-- //HEADER -->