<?php
/**
 * ------------------------------------------------------------------------
 * JA Facebook Activity Module for J25 & J30
 * ------------------------------------------------------------------------
 * Copyright (C) 2004-2011 J.O.O.M Solutions Co., Ltd. All Rights Reserved.
 * @license - GNU/GPL, http://www.gnu.org/licenses/gpl.html
 * Author: J.O.O.M Solutions Co., Ltd
 * Websites: http://www.joomlart.com - http://www.joomlancers.com
 * ------------------------------------------------------------------------
 */

// no direct access
defined('_JEXEC') or die('Restricted accessd');

?>
<iframe src="http://www.facebook.com/plugins/activity.php?<?php echo $sFacebookQuery ?>" scrolling="no" frameborder="0" class="<?php echo $aParams['colorscheme'] ?>" style="allowTransparency:true;overflow:hidden; width:<?php echo $aParams['width'].'px' ?>; height:<?php echo $aParams['height'].'px' ?>;"></iframe>