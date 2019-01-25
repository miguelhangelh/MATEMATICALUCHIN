<?php
/**
 * @version		2.6.x
 * @package		K2
 * @author		JoomlaWorks http://www.joomlaworks.net
 * @copyright	Copyright (c) 2006 - 2014 JoomlaWorks Ltd. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

// no direct access
defined('_JEXEC') or die;

?>

<div id="k2ModuleBox<?php echo $module->id; ?>" class="k2LoginBlock<?php if($params->get('moduleclass_sfx')) echo ' '.$params->get('moduleclass_sfx'); ?>">
	<form action="<?php echo JRoute::_('index.php', true, $params->get('usesecure')); ?>" method="post" name="login" id="form-login">
		<?php if($params->get('pretext')): ?>
		<p class="preText"><?php echo $params->get('pretext'); ?></p>
	  <?php endif; ?>

	  <fieldset class="input">
	    <p id="form-login-username">
	      <label for="modlgn_username">Nombre usuario</label>
	      <input id="modlgn_username" type="text" name="username" class="inputbox" size="18" />
	    </p>
	    <p id="form-login-password">
	      <label for="modlgn_passwd">Contraseña</label>
	      <input id="modlgn_passwd" type="password" name="<?php echo $passwordFieldName; ?>" class="inputbox" size="18" />
	    </p>
	    <?php if(JPluginHelper::isEnabled('system', 'remember')): ?>
	    <p id="form-login-remember">
	      <label for="modlgn_remember">Recuérdeme</label>
	      <input id="modlgn_remember" type="checkbox" name="remember" class="inputbox" value="yes" />
	    </p>
	    <?php endif; ?>

	    <input type="submit" name="Submit" class="button" value="Iniciar Sesión" />
	  </fieldset>

	  <ul>
	    <li><a href="<?php echo $resetLink; ?>">¿Recordar Contraseña?</a></li>
	    <li><a href="<?php echo $remindLink ?>">¿Recordar Nombre?</a></li>
	    <?php if ($usersConfig->get('allowUserRegistration')): ?>
	    <li><a href="<?php echo $registrationLink; ?>">Crear una cuenta</a></li>
	    <?php endif; ?>
	  </ul>

	  <?php if($params->get('posttext')): ?>
	  <p class="postText"><?php echo $params->get('posttext'); ?></p>
	  <?php endif; ?>

	  <input type="hidden" name="option" value="<?php echo $option; ?>" />
	  <input type="hidden" name="task" value="<?php echo $task; ?>" />
	  <input type="hidden" name="return" value="<?php echo $return; ?>" />
	  <?php echo JHTML::_( 'form.token' ); ?>
	</form>
</div>
