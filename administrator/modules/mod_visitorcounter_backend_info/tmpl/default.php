<?php
/**
 * @Copyright
 *
 * @package    Visitorcounter Backend Info - VCNT for Joomla! 3
 * @author     Viktor Vogel <admin@kubik-rubik.de>
 * @version    3.1.0 - 2015-08-01
 * @link       https://joomla-extensions.kubik-rubik.de/vcnt-visitorcounter
 *
 * @license    GNU/GPL
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
defined('_JEXEC') or die('Restricted access');
echo '<!-- VCNT - Visitorcounter Backend Info for Joomla 3 - Kubik-Rubik Joomla! Extensions by Viktor Vogel -->';
?>
<div class="visitorcounter <?php echo $moduleclass_sfx ?>">
    <?php if($vcnt_installed) : ?>
        <?php if(!$horizontal) : ?>
            <?php if($s_today) : ?>
                <p>
                    <?php echo $today ?>
                    <span class="floatright"><?php echo $today_visitors ?></span>
                </p>
            <?php endif; ?>
            <?php if($s_yesterday) : ?>
                <p>
                    <?php echo $yesterday ?>
                    <span class="floatright"><?php echo $yesterday_visitors ?></span>
                </p>
            <?php endif; ?>
            <?php if($s_week) : ?>
                <p>
                    <?php echo $x_week ?>
                    <span class="floatright"><?php echo $week_visitors ?></span>
                </p>
            <?php endif; ?>
            <?php if($s_month) : ?>
                <p>
                    <?php echo $x_month ?>
                    <span class="floatright"><?php echo $month_visitors ?></span>
                </p>
            <?php endif; ?>
            <?php if($s_all) : ?>
                <p>
                    <?php echo $all ?>
                    <span class="floatright"><?php echo $all_visitors ?></span>
                </p>
            <?php endif; ?>
        <?php elseif($horizontal == 1) : ?>
            <p>
                <?php $numbers = $s_today + $s_yesterday + $s_week + $s_month + $s_all - 1; ?>
                <?php if($hor_text) : ?>
                    <strong><?php echo $hor_text ?></strong>
                <?php endif; ?>
                <?php if($s_today) : ?>
                    <?php echo $today.' '.$today_visitors ?>
                <?php endif; ?>
                <?php if($numbers AND $s_today) : ?>
                    <?php echo $separator ?>
                    <?php $numbers-- ?>
                <?php endif; ?>
                <?php if($s_yesterday) : ?>
                    <?php echo $yesterday.' '.$yesterday_visitors ?>
                <?php endif; ?>
                <?php if($numbers AND $s_yesterday) : ?>
                    <?php echo $separator ?>
                    <?php $numbers-- ?>
                <?php endif; ?>
                <?php if($s_week) : ?>
                    <?php echo $x_week.' '.$week_visitors ?>
                <?php endif; ?>
                <?php if($numbers AND $s_week) : ?>
                    <?php echo $separator ?>
                    <?php $numbers-- ?>
                <?php endif; ?>
                <?php if($s_month) : ?>
                    <?php echo $x_month.' '.$month_visitors ?>
                <?php endif; ?>
                <?php if($numbers AND $s_month) : ?>
                    <?php echo $separator ?>
                    <?php $numbers-- ?>
                <?php endif; ?>
                <?php if($s_all) : ?>
                    <?php echo $all.' '.$all_visitors ?>
                <?php endif; ?>
            </p>
        <?php
        elseif($horizontal == 2) : ?>
            <p>
                <?php if($hor_text) : ?>
                    <strong><?php echo $hor_text ?></strong>
                <?php endif; ?>
                <?php echo $all_visitors.' ('.($today_visitors).')' ?>
            </p>
        <?php endif; ?>
        <?php if($whoisonline == 1 OR $whoisonline == 2) : ?>
            <?php $guest = JText::plural('MOD_VISITORCOUNTER_BACKEND_INFO_GUESTS', $users_online['guest']); ?>
            <?php $member = JText::plural('MOD_VISITORCOUNTER_BACKEND_INFO_MEMBERS', $users_online['user']); ?>
            <p class="whoisonline">
                <?php echo JText::sprintf('MOD_VISITORCOUNTER_BACKEND_INFO_USERONLINE', $guest, $member); ?>
            </p>
            <?php if($whoisonline == 2 AND !empty($users_online['usernames'])) : ?>
                <ul class="whoisonline_users">
                    <?php foreach($users_online['usernames'] as $user_online) : ?>
                        <li class="members">
                            <?php if(!empty($whoisonline_linknames)) : ?>
                                <a href="index.php?option=com_users&task=user.edit&id=<?php echo (int)$user_online['userid']; ?>">
                                    <?php echo $user_online['username']; ?>
                                </a>
                            <?php else : ?>
                                <?php echo $user_online['username']; ?>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        <?php endif; ?>
    <?php else : ?>
        <?php echo JTEXT::_('MOD_VISITORCOUNTER_BACKEND_INFO_NOMAINPLUGIN'); ?>
    <?php endif; ?>
</div>