<?php
/**
 * @package     Joomla.Site
 * @subpackage  com_contact
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

$cparams = JComponentHelper::getParams('com_media');

jimport('joomla.html.html.bootstrap');
?>
<div class="contact<?php echo $this->pageclass_sfx ?>">
<?php if ($this->params->get('show_page_heading')) : ?>
	<h1><?php echo $this->escape($this->params->get('page_heading')); ?></h1>
<?php endif; ?>

<div class="contact-wrap clearfix">

<?php if ($this->params->get('show_contact_category') == 'show_no_link') : ?>
	<h3><span class="contact-category"><?php echo $this->contact->category_title; ?></span></h3>
<?php endif; ?>

<?php if ($this->params->get('show_contact_category') == 'show_with_link') : ?>
	<?php $contactLink = ContactHelperRoute::getCategoryRoute($this->contact->catid); ?>
	<h3>
				<span class="contact-category"><a href="<?php echo $contactLink; ?>">
						<?php echo $this->escape($this->contact->category_title); ?></a>
				</span>
	</h3>
<?php endif; ?>

<?php if ($this->params->get('show_contact_list') && count($this->contacts) > 1) : ?>
	<form action="#" method="get" name="selectForm" id="selectForm">
		<?php echo JText::_('COM_CONTACT_SELECT_CONTACT'); ?>
		<?php echo JHtml::_('select.genericlist', $this->contacts, 'id', 'class="input" onchange="document.location.href = this.value"', 'link', 'name', $this->contact->link); ?>
	</form>
<?php endif; ?>

<?php if ($this->params->get('show_tags', 1) && !empty($this->item->tags)) : ?>
	<?php $this->item->tagLayout = new JLayoutFile('joomla.content.tags'); ?>
	<?php echo $this->item->tagLayout->render($this->item->tags->itemTags); ?>
<?php endif; ?>

<?php if ($this->params->get('presentation_style') == 'tabs'): ?>
		<ul class="nav nav-tabs" id="contact-tab">
			
			<?php if ($this->params->get('show_email_form') && ($this->contact->email_to || $this->contact->user_id)) : ?>
				<li class="active"><a data-toggle="tab" href="#display-form"><?php echo JText::_('COM_CONTACT_EMAIL_FORM'); ?></a>
				</li><?php endif; ?>
			<?php if ($this->params->get('show_links')) : ?>
				<li><a data-toggle="tab" href="#display-links"><?php echo JText::_('COM_CONTACT_LINKS'); ?></a>
				</li><?php endif; ?>
			<?php if ($this->params->get('show_articles') && $this->contact->user_id && $this->contact->articles) : ?>
				<li><a data-toggle="tab" href="#display-articles"><?php echo JText::_('JGLOBAL_ARTICLES'); ?></a>
				</li><?php endif; ?>
			<?php if ($this->params->get('show_profile') && $this->contact->user_id && JPluginHelper::isEnabled('user', 'profile')) : ?>
				<li><a data-toggle="tab" href="#display-profile"><?php echo JText::_('COM_CONTACT_PROFILE'); ?></a>
				</li><?php endif; ?>
			<?php if ($this->contact->misc && $this->params->get('show_misc')) : ?>
				<li><a data-toggle="tab"
					   href="#display-misc"><?php echo JText::_('COM_CONTACT_OTHER_INFORMATION'); ?></a>
				</li><?php endif; ?>
		</ul>
		<div class="tab-content" id="contact-tab-content">
				<?php endif; ?>

<?php if ($this->params->get('presentation_style') == 'sliders') : ?>
<div class="accordion" id="slide-contact">

<?php endif; ?>

<?php if ($this->params->get('show_links')) : ?>
	<?php echo $this->loadTemplate('links'); ?>
<?php endif; ?>

<?php if ($this->params->get('show_articles') && $this->contact->user_id && $this->contact->articles) : ?>
	<?php if ($this->params->get('presentation_style') == 'sliders'): ?>
		<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle" data-toggle="collapse" data-parent="#slide-contact" href="#display-articles">
				<?php echo JText::_('JGLOBAL_ARTICLES'); ?>
			</a>
		</div>
		<div id="display-articles" class="accordion-body collapse">
		<div class="accordion-inner">
	<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'tabs') : ?>
	<div id="display-articles" class="tab-pane">
<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'plain'): ?>
		<?php echo '<h3>' . JText::_('JGLOBAL_ARTICLES') . '</h3>'; ?>
	<?php endif; ?>

	<?php echo $this->loadTemplate('articles'); ?>

	<?php if ($this->params->get('presentation_style') == 'sliders'): ?>
	</div>
	</div>
	</div>
<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'tabs') : ?>
		</div>
	<?php endif; ?>
<?php endif; ?>

<?php if ($this->params->get('show_profile') && $this->contact->user_id && JPluginHelper::isEnabled('user', 'profile')) : ?>

	<?php if ($this->params->get('presentation_style') == 'sliders'): ?>
		<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle" data-toggle="collapse" data-parent="#slide-contact" href="#display-profile">
				<?php echo JText::_('COM_CONTACT_PROFILE'); ?>
			</a>
		</div>
		<div id="display-profile" class="accordion-body collapse">
		<div class="accordion-inner">
	<?php endif; ?>


	<?php if ($this->params->get('presentation_style') == 'tabs') : ?>
	<div id="display-profile" class="tab-pane">
<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'plain'): ?>
		<h3><?php echo JText::_('COM_CONTACT_PROFILE') ?></h3>
	<?php endif; ?>

	<?php echo $this->loadTemplate('profile'); ?>

	<?php if ($this->params->get('presentation_style') == 'sliders'): ?>
	</div>
	</div>
	</div>
<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'tabs') : ?>
		</div>
	<?php endif; ?>
<?php endif; ?>

<?php if ($this->params->get('show_email_form') && ($this->contact->email_to || $this->contact->user_id)) : ?>

	<?php if ($this->params->get('presentation_style') == 'plain') : ?>
		<div class="row">
		<div class="contact-col2 col-md-4 col-sm-5 col-xs-12">
			<?php if ($this->params->get('presentation_style') == 'plain') { ?>
				<?php if ($this->contact->misc && $this->params->get('show_misc')) : ?>
						<div class="contact-misc">
							<h3><?php echo JText::_('COM_CONTACT_OTHER_INFORMATION');?></h3>
							<?php echo $this->contact->misc; ?>
						</div>
				<?php endif ?>
			<?php }else{?>
			<?php echo $this->loadTemplate('form'); ?>
			<?php } ?>
		</div>
		<div class="contact-col2 col-md-8 col-sm-7 col-xs-12">
	<?php endif ?>

	<?php if ($this->params->get('presentation_style') == 'sliders'): ?>
	<div class="accordion-group">
	<div class="accordion-heading">
		<a class="accordion-toggle" data-toggle="collapse" data-parent="#slide-contact" href="#display-form">
			<?php echo JText::_('COM_CONTACT_EMAIL_FORM'); ?>
		</a>
	</div>
	<div id="display-form" class="accordion-body">
	<div class="accordion-inner">
<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'tabs') : ?>
	<div id="display-form" class="tab-pane active">
<?php endif; ?>
	
	<?php echo $this->loadTemplate('form'); ?>
	<?php if ($this->params->get('presentation_style') == 'sliders'): ?>
	</div>
	</div>
	</div>
<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'tabs') : ?>
	</div>
<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'plain') : ?>
		</div>
		</div>
	<?php endif ?>
<?php endif ?>

<?php if ($this->contact->misc && $this->params->get('show_misc') && $this->params->get('presentation_style') != 'plain') : ?>

	<?php if ($this->params->get('presentation_style') == 'sliders'): ?>
		<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle" data-toggle="collapse" data-parent="#slide-contact" href="#display-misc">
				<?php echo JText::_('COM_CONTACT_OTHER_INFORMATION'); ?>
			</a>
		</div>
		<div id="display-misc" class="accordion-body collapse">
		<div class="accordion-inner">
	<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'tabs') : ?>
	<div id="display-misc" class="tab-pane">
<?php endif; ?>

	<?php if ($this->params->get('presentation_style') == 'plain'): ?>
		<?php echo '<h3>' . JText::_('COM_CONTACT_OTHER_INFORMATION') . '</h3>'; ?>
	<?php endif; ?>

	<div class="contact-miscinfo">
		<dl class="dl-horizontal">
			<dt>
				<span class="<?php echo $this->params->get('marker_class'); ?>">
					<?php echo $this->params->get('marker_misc'); ?>
				</span>
			</dt>
			<dd>
				<div class="contact-misc">
					<?php echo $this->contact->misc; ?>
				</div>
			</dd>
		</dl>
	</div>

	<?php if ($this->params->get('presentation_style') == 'sliders'): ?>
	</div>
	</div>
	</div>
<?php endif; ?>
	<?php if ($this->params->get('presentation_style') == 'tabs') : ?>
		</div>
		</div>
	<?php endif; ?>

<?php endif; ?>

<?php if ($this->params->get('presentation_style') == 'sliders'): ?>
<script type="text/javascript">
	(function ($) {
		$('#slide-contact').collapse({ parent: false, toggle: true, active: 'display-form'});
	})(jQuery);
</script>
</div>
<?php endif; ?>
<?php if ($this->params->get('presentation_style') == 'tabs') : ?>
<script type="text/javascript">
	(function ($) {
		if(typeof google != 'undefined' && typeof google.maps != 'undefined' && typeof objWidgetMap1 != 'undefined'){
			$('#contact-tab [data-toggle="tab"]').on('shown', function(){
				google.maps.event.trigger(objWidgetMap1.objMap, 'resize');
			});
		}
	})(jQuery);
</script>
</div>
<?php endif; ?>
</div>
</div>
