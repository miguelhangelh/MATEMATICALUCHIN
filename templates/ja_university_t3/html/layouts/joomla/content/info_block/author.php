<?php
/**
 * @package     Joomla.Site
 * @subpackage  Layout
 *
 * @copyright   Copyright (C) 2005 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('JPATH_BASE') or die;
$item = $displayData['item'];
$author = ($item->created_by_alias ? $item->created_by_alias : $item->author);
$author = '<span itemprop="name">' . $author . '</span>';
?>

<dd class="createdby hasTooltip" itemprop="author" itemscope itemtype="http://schema.org/Person" title="<?php echo JText::sprintf('COM_CONTENT_WRITTEN_BY', ''); ?>">
	<?php if (!empty($displayData['item']->contact_link ) && $displayData['params']->get('link_author') == true) : ?>
  	<?php echo JText::sprintf('COM_CONTENT_WRITTEN_BY', '<strong>' . JHtml::_('link', $displayData['item']->contact_link, $author, array('itemprop' => 'url')) . '</strong>'); ?>
  <?php else :?>
    <?php echo JText::sprintf('COM_CONTENT_WRITTEN_BY', '<strong>' . $author . '</strong>'); ?>
	<?php endif; ?>
</dd>
