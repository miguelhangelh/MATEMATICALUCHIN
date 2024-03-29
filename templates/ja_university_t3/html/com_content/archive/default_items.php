<?php
/**
 * @package     Joomla.Site
 * @subpackage  com_content
 *
 * @copyright   Copyright (C) 2005 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

JHtml::addIncludePath(JPATH_COMPONENT . '/helpers');
$params = $this->params;

$info    = $params->get('info_block_position', 2);
$aInfo1 = ($params->get('show_publish_date') || $params->get('show_category') || $params->get('show_parent_category') || $params->get('show_author'));
$aInfo2 = ($params->get('show_create_date') || $params->get('show_modify_date') || $params->get('show_hits'));
$topInfo = ($aInfo1 && $info != 1) || ($aInfo2 && $info == 0);
$botInfo = ($aInfo1 && $info == 1) || ($aInfo2 && $info != 0);
$icons = $params->get('access-edit') || $params->get('show_print_icon') || $params->get('show_email_icon');

?>

<div id="archive-items">
	<?php foreach ($this->items as $i => $item) : ?>
		<?php $info = $item->params->get('info_block_position', 0); ?>
		<article class="row<?php echo $i % 2; ?>" itemscope itemtype="http://schema.org/Article">

			<?php echo JLayoutHelper::render('joomla.content.item_title', array('item' => $item, 'params' => $params, 'title-tag'=>'h2')); ?>

			<?php if ($topInfo) : ?>
				<?php echo JLayoutHelper::render('joomla.content.item_aside', array('item' => $item, 'params' => $params)); ?>
			<?php endif; ?>

			<?php if ($params->get('show_intro')) :?>
				<div class="intro" itemprop="articleBody"> <?php echo JHtml::_('string.truncateComplex', $item->introtext, $params->get('introtext_limit')); ?> </div>
			<?php endif; ?>

			<?php if ($botInfo) : ?>
				<?php echo JLayoutHelper::render('joomla.content.item_footer', array('item' => $item, 'params' => $params)); ?>
			<?php endif; ?>

		</article>
	<?php endforeach; ?>
</div>
<div class="pagination">
	<p class="counter"> <?php echo $this->pagination->getPagesCounter(); ?> </p>
	<?php echo $this->pagination->getPagesLinks(); ?>
</div>
