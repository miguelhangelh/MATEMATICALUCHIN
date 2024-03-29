<?php
/**
 * ------------------------------------------------------------------------
 * JA University T3 template
 * ------------------------------------------------------------------------
 * Copyright (C) 2004-2011 J.O.O.M Solutions Co., Ltd. All Rights Reserved.
 * @license - Copyrighted Commercial Software
 * Author: J.O.O.M Solutions Co., Ltd
 * Websites:  http://www.joomlart.com -  http://www.joomlancers.com
 * This file may not be redistributed in whole or significant part.
 * ------------------------------------------------------------------------
 */


defined('_JEXEC') or die;
?>


<!DOCTYPE html>
<!--[if IE 8]>         <html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>" class="ie8 lt-ie9 lt-ie10 <jdoc:include type="pageclass" />"> <![endif]-->
<!--[if IE 9]>         <html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>" class="ie9 lt-ie10 <jdoc:include type="pageclass" />"> <![endif]-->

<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>"
	  class='<jdoc:include type="pageclass" />'>

<head>
	<jdoc:include type="head" />
	<?php $this->loadBlock('head') ?>
  <?php $this->addScript(T3_TEMPLATE_URL.'/js/holder.js'); ?>
</head>

<body>

<div class="t3-wrapper"> <!-- Need this wrapper for off-canvas menu. Remove if you don't use of-canvas -->

  <?php $this->loadBlock('header') ?>

  <?php $this->loadBlock('mainnav') ?>

  <?php $this->loadBlock('masthead') ?>

  <?php $this->loadBlock('mainbody') ?>
	
  <?php $this->loadBlock('spotlight-2') ?>
	
  <?php $this->loadBlock('spotlight-3') ?>

  <?php $this->loadBlock('navhelper') ?>

  <?php $this->loadBlock('footer') ?>

</div>

</body>

</html>