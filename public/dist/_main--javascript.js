'use strict';

var _templateObject = _taggedTemplateLiteral(['<input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'$', '\' value=\'$', '\'>'], ['<input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'$', '\' value=\'$', '\'>']),
    _templateObject2 = _taggedTemplateLiteral(['<p>', ' ', '</p>'], ['<p>', ' ', '</p>']),
    _templateObject3 = _taggedTemplateLiteral(['<p>', ' $', ' ', ' ', '</p>'], ['<p>', ' $', ' ', ' ', '</p>']),
    _templateObject4 = _taggedTemplateLiteral(['<p>', '<input class=\'text\' name=\'description\' type=\'text\' maxlength=\'800\' placeholder=\'$', '\' value=\'$', '\'></p>'], ['<p>', '<input class=\'text\' name=\'description\' type=\'text\' maxlength=\'800\' placeholder=\'$', '\' value=\'$', '\'></p>']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t<div>\n\t\t<p>', '\n\t\t<span class="select" style="width:270px">\n\t\t\t<select name="license" id="license">\n\t\t\t\t<option value="none">', '</option>\n\t\t\t\t<option value="reserved">', '</option>\n\t\t\t\t<option value="CC0">CC0 - Public Domain</option>\n\t\t\t\t<option value="CC-BY">CC Attribution 4.0</option>\n\t\t\t\t<option value="CC-BY-ND">CC Attribution-NoDerivatives 4.0</option>\n\t\t\t\t<option value="CC-BY-SA">CC Attribution-ShareAlike 4.0</option>\n\t\t\t\t<option value="CC-BY-NC">CC Attribution-NonCommercial 4.0</option>\n\t\t\t\t<option value="CC-BY-NC-ND">CC Attribution-NonCommercial-NoDerivatives 4.0</option>\n\t\t\t\t<option value="CC-BY-NC-SA">CC Attribution-NonCommercial-ShareAlike 4.0</option>\n\t\t\t</select>\n\t\t</span>\n\t\t<br />\n\t\t<a href="https://creativecommons.org/choose/" target="_blank">', '</a>\n\t\t</p>\n\t</div>'], ['\n\t<div>\n\t\t<p>', '\n\t\t<span class="select" style="width:270px">\n\t\t\t<select name="license" id="license">\n\t\t\t\t<option value="none">', '</option>\n\t\t\t\t<option value="reserved">', '</option>\n\t\t\t\t<option value="CC0">CC0 - Public Domain</option>\n\t\t\t\t<option value="CC-BY">CC Attribution 4.0</option>\n\t\t\t\t<option value="CC-BY-ND">CC Attribution-NoDerivatives 4.0</option>\n\t\t\t\t<option value="CC-BY-SA">CC Attribution-ShareAlike 4.0</option>\n\t\t\t\t<option value="CC-BY-NC">CC Attribution-NonCommercial 4.0</option>\n\t\t\t\t<option value="CC-BY-NC-ND">CC Attribution-NonCommercial-NoDerivatives 4.0</option>\n\t\t\t\t<option value="CC-BY-NC-SA">CC Attribution-NonCommercial-ShareAlike 4.0</option>\n\t\t\t</select>\n\t\t</span>\n\t\t<br />\n\t\t<a href="https://creativecommons.org/choose/" target="_blank">', '</a>\n\t\t</p>\n\t</div>']),
    _templateObject6 = _taggedTemplateLiteral(['?albumID=', ''], ['?albumID=', '']),
    _templateObject7 = _taggedTemplateLiteral(['<p>', ' \'$', '\' ', ' \'$', '\'?</p>'], ['<p>', ' \'$', '\' ', ' \'$', '\'?</p>']),
    _templateObject8 = _taggedTemplateLiteral(['<p>', ' \'$', '\'?</p>'], ['<p>', ' \'$', '\'?</p>']),
    _templateObject9 = _taggedTemplateLiteral(['<p>', ' \'$', '\' ', '</p>'], ['<p>', ' \'$', '\' ', '</p>']),
    _templateObject10 = _taggedTemplateLiteral(['<p>', ' $', ' ', '</p>'], ['<p>', ' $', ' ', '</p>']),
    _templateObject11 = _taggedTemplateLiteral(['<svg class=\'iconic ', '\'><use xlink:href=\'#', '\' /></svg>'], ['<svg class=\'iconic ', '\'><use xlink:href=\'#', '\' /></svg>']),
    _templateObject12 = _taggedTemplateLiteral(['<div class=\'divider\'><h1>', '</h1></div>'], ['<div class=\'divider\'><h1>', '</h1></div>']),
    _templateObject13 = _taggedTemplateLiteral(['<div id=\'', '\' class=\'edit\'>', '</div>'], ['<div id=\'', '\' class=\'edit\'>', '</div>']),
    _templateObject14 = _taggedTemplateLiteral(['<div id=\'multiselect\' style=\'top: ', 'px; left: ', 'px;\'></div>'], ['<div id=\'multiselect\' style=\'top: ', 'px; left: ', 'px;\'></div>']),
    _templateObject15 = _taggedTemplateLiteral(['\n\t\t\t<div class=\'album ', '\' data-id=\'', '\'>\n\t\t\t\t  ', '\n\t\t\t\t  ', '\n\t\t\t\t  ', '\n\t\t\t\t<div class=\'overlay\'>\n\t\t\t\t\t<h1 title=\'$', '\'>$', '</h1>\n\t\t\t\t\t<a>$', '</a>\n\t\t\t\t</div>\n\t\t\t'], ['\n\t\t\t<div class=\'album ', '\' data-id=\'', '\'>\n\t\t\t\t  ', '\n\t\t\t\t  ', '\n\t\t\t\t  ', '\n\t\t\t\t<div class=\'overlay\'>\n\t\t\t\t\t<h1 title=\'$', '\'>$', '</h1>\n\t\t\t\t\t<a>$', '</a>\n\t\t\t\t</div>\n\t\t\t']),
    _templateObject16 = _taggedTemplateLiteral(['\n\t\t\t\t<div class=\'badges\'>\n\t\t\t\t\t<a class=\'badge ', ' icn-star\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', ' ', ' icn-share\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', '\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', '\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', '\'>', '</a>\n\t\t\t\t</div>\n\t\t\t\t'], ['\n\t\t\t\t<div class=\'badges\'>\n\t\t\t\t\t<a class=\'badge ', ' icn-star\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', ' ', ' icn-share\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', '\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', '\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', '\'>', '</a>\n\t\t\t\t</div>\n\t\t\t\t']),
    _templateObject17 = _taggedTemplateLiteral(['\n\t\t\t\t<div class=\'subalbum_badge\'>\n\t\t\t\t\t<a class=\'badge badge--folder\'>', '</a>\n\t\t\t\t</div>'], ['\n\t\t\t\t<div class=\'subalbum_badge\'>\n\t\t\t\t\t<a class=\'badge badge--folder\'>', '</a>\n\t\t\t\t</div>']),
    _templateObject18 = _taggedTemplateLiteral(['\n\t\t\t<div class=\'photo\' data-album-id=\'', '\' data-id=\'', '\'>\n\t\t\t\t', '\n\t\t\t\t<div class=\'overlay\'>\n\t\t\t\t\t<h1 title=\'$', '\'>$', '</h1>\n\t\t\t'], ['\n\t\t\t<div class=\'photo\' data-album-id=\'', '\' data-id=\'', '\'>\n\t\t\t\t', '\n\t\t\t\t<div class=\'overlay\'>\n\t\t\t\t\t<h1 title=\'$', '\'>$', '</h1>\n\t\t\t']),
    _templateObject19 = _taggedTemplateLiteral(['<a><span title=\'Camera Date\'>', '</span>', '</a>'], ['<a><span title=\'Camera Date\'>', '</span>', '</a>']),
    _templateObject20 = _taggedTemplateLiteral(['<a>', '</a>'], ['<a>', '</a>']),
    _templateObject21 = _taggedTemplateLiteral(['\n\t\t\t\t<div class=\'badges\'>\n\t\t\t\t\t<a class=\'badge ', ' icn-star\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', ' icn-share\'>', '</a>\n\t\t\t\t</div>\n\t\t\t\t'], ['\n\t\t\t\t<div class=\'badges\'>\n\t\t\t\t\t<a class=\'badge ', ' icn-star\'>', '</a>\n\t\t\t\t\t<a class=\'badge ', ' icn-share\'>', '</a>\n\t\t\t\t</div>\n\t\t\t\t']),
    _templateObject22 = _taggedTemplateLiteral(['\n\t\t\t\t\t<div id="image_overlay">\n\t\t\t\t\t\t<h1>$', '</h1>\n\t\t\t\t\t\t<p>$', '</p>\n\t\t\t\t\t</div>\n\t\t\t\t'], ['\n\t\t\t\t\t<div id="image_overlay">\n\t\t\t\t\t\t<h1>$', '</h1>\n\t\t\t\t\t\t<p>$', '</p>\n\t\t\t\t\t</div>\n\t\t\t\t']),
    _templateObject23 = _taggedTemplateLiteral(['\n\t\t\t<div id="image_overlay">\n\t\t\t\t<h1>$', '</h1>\n\t\t\t\t<p>', '</p>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<div id="image_overlay">\n\t\t\t\t<h1>$', '</h1>\n\t\t\t\t<p>', '</p>\n\t\t\t</div>\n\t\t']),
    _templateObject24 = _taggedTemplateLiteral(['\n\t\t\t<div id="image_overlay"><h1>$', '</h1>\n\t\t\t<p>', ' at ', ', ', ' ', '<br>\n\t\t\t', ' ', '</p>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<div id="image_overlay"><h1>$', '</h1>\n\t\t\t<p>', ' at ', ', ', ' ', '<br>\n\t\t\t', ' ', '</p>\n\t\t\t</div>\n\t\t']),
    _templateObject25 = _taggedTemplateLiteral(['<video width="auto" height="auto" id=\'image\' controls class=\'', '\' autoplay><source src=\'', '\'>Your browser does not support the video tag.</video>'], ['<video width="auto" height="auto" id=\'image\' controls class=\'', '\' autoplay><source src=\'', '\'>Your browser does not support the video tag.</video>']),
    _templateObject26 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject27 = _taggedTemplateLiteral(['<div class=\'no_content fadeIn\'>', ''], ['<div class=\'no_content fadeIn\'>', '']),
    _templateObject28 = _taggedTemplateLiteral(['<p>', '</p>'], ['<p>', '</p>']),
    _templateObject29 = _taggedTemplateLiteral(['\n\t\t\t<h1>$', '</h1>\n\t\t\t<div class=\'rows\'>\n\t\t\t'], ['\n\t\t\t<h1>$', '</h1>\n\t\t\t<div class=\'rows\'>\n\t\t\t']),
    _templateObject30 = _taggedTemplateLiteral(['\n\t\t\t\t<div class=\'row\'>\n\t\t\t\t\t<a class=\'name\'>', '</a>\n\t\t\t\t\t<a class=\'status\'></a>\n\t\t\t\t\t<p class=\'notice\'></p>\n\t\t\t\t</div>\n\t\t\t\t'], ['\n\t\t\t\t<div class=\'row\'>\n\t\t\t\t\t<a class=\'name\'>', '</a>\n\t\t\t\t\t<a class=\'status\'></a>\n\t\t\t\t\t<p class=\'notice\'></p>\n\t\t\t\t</div>\n\t\t\t\t']),
    _templateObject31 = _taggedTemplateLiteral(['<a class=\'tag\'>$', ''], ['<a class=\'tag\'>$', '']),
    _templateObject32 = _taggedTemplateLiteral(['<div class=\'empty\'>', '</div>'], ['<div class=\'empty\'>', '</div>']),
    _templateObject33 = _taggedTemplateLiteral(['<div class="users_view_line">\n\t\t\t<p id="UserData', '">\n\t\t\t<input name="id" type="hidden" value="', '" />\n\t\t\t<input class="text" name="username" type="text" value="$', '" placeholder="username" />\n\t\t\t<input class="text" name="password" type="text" placeholder="new password" />\n\t\t\t<span class="choice" title="Allow uploads">\n\t\t\t<label>\n\t\t\t<input type="checkbox" name="upload" />\n\t\t\t<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>\n\t\t\t</label>\n\t\t\t</span>\n\t\t\t<span class="choice" title="Restricted account">\n\t\t\t<label>\n\t\t\t<input type="checkbox" name="lock" />\n\t\t\t<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>\n\t\t\t</label>\n\t\t\t</span>\n\t\t\t</p>\n\t\t\t<a id="UserUpdate', '"  class="basicModal__button basicModal__button_OK">Save</a>\n\t\t\t<a id="UserDelete', '"  class="basicModal__button basicModal__button_DEL">Delete</a>\n\t\t</div>\n\t\t'], ['<div class="users_view_line">\n\t\t\t<p id="UserData', '">\n\t\t\t<input name="id" type="hidden" value="', '" />\n\t\t\t<input class="text" name="username" type="text" value="$', '" placeholder="username" />\n\t\t\t<input class="text" name="password" type="text" placeholder="new password" />\n\t\t\t<span class="choice" title="Allow uploads">\n\t\t\t<label>\n\t\t\t<input type="checkbox" name="upload" />\n\t\t\t<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>\n\t\t\t</label>\n\t\t\t</span>\n\t\t\t<span class="choice" title="Restricted account">\n\t\t\t<label>\n\t\t\t<input type="checkbox" name="lock" />\n\t\t\t<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>\n\t\t\t</label>\n\t\t\t</span>\n\t\t\t</p>\n\t\t\t<a id="UserUpdate', '"  class="basicModal__button basicModal__button_OK">Save</a>\n\t\t\t<a id="UserDelete', '"  class="basicModal__button basicModal__button_DEL">Delete</a>\n\t\t</div>\n\t\t']),
    _templateObject34 = _taggedTemplateLiteral(['\n\t\t\t           ', '\n\t\t\t           <img class=\'cover\' width=\'16\' height=\'16\' src=\'', '\'>\n\t\t\t           <div class=\'title\'>$', '</div>\n\t\t\t           '], ['\n\t\t\t           ', '\n\t\t\t           <img class=\'cover\' width=\'16\' height=\'16\' src=\'', '\'>\n\t\t\t           <div class=\'title\'>$', '</div>\n\t\t\t           ']),
    _templateObject35 = _taggedTemplateLiteral(['$', '', ''], ['$', '', '']),
    _templateObject36 = _taggedTemplateLiteral(['\n\t\t<a id="text_settings_close" class="closetxt">', '</a>\n\t\t<a id="button_settings_close" class="closebtn" >&times;</a>\n\t\t<a class="linkMenu" id="button_settings_open"><svg class="iconic"><use xlink:href="#cog"></use></svg>', '</a>'], ['\n\t\t<a id="text_settings_close" class="closetxt">', '</a>\n\t\t<a id="button_settings_close" class="closebtn" >&times;</a>\n\t\t<a class="linkMenu" id="button_settings_open"><svg class="iconic"><use xlink:href="#cog"></use></svg>', '</a>']),
    _templateObject37 = _taggedTemplateLiteral(['\n\t\t<a class="linkMenu" id="button_users">', ' ', ' </a>\n\t\t<a class="linkMenu" id="button_sharing">', ' ', '</a>'], ['\n\t\t<a class="linkMenu" id="button_users">', ' ', ' </a>\n\t\t<a class="linkMenu" id="button_sharing">', ' ', '</a>']),
    _templateObject38 = _taggedTemplateLiteral(['\n\t\t<a class="linkMenu" id="button_logs">', ' ', '</a>\n\t\t<a class="linkMenu" id="button_diagnostics">', ' ', '</a>\n\t\t<a class="linkMenu" id="button_about">', ' ', '</a>\n\t\t<a class="linkMenu" id="button_signout">', ' ', '</a>'], ['\n\t\t<a class="linkMenu" id="button_logs">', ' ', '</a>\n\t\t<a class="linkMenu" id="button_diagnostics">', ' ', '</a>\n\t\t<a class="linkMenu" id="button_about">', ' ', '</a>\n\t\t<a class="linkMenu" id="button_signout">', ' ', '</a>']),
    _templateObject39 = _taggedTemplateLiteral(['\n\t\t\t\t<h1>Lychee ', '</h1>\n\t\t\t\t<div class=\'version\'><span><a target=\'_blank\' href=\'', '\'>', '</a></span></div>\n\t\t\t\t<h1>', '</h1>\n\t\t\t\t<p><a target=\'_blank\' href=\'', '\'>Lychee</a> ', '</p>\n\t\t\t  '], ['\n\t\t\t\t<h1>Lychee ', '</h1>\n\t\t\t\t<div class=\'version\'><span><a target=\'_blank\' href=\'', '\'>', '</a></span></div>\n\t\t\t\t<h1>', '</h1>\n\t\t\t\t<p><a target=\'_blank\' href=\'', '\'>Lychee</a> ', '</p>\n\t\t\t  ']),
    _templateObject40 = _taggedTemplateLiteral(['\n\t\t\t\t<p class=\'signIn\'>\n\t\t\t\t\t<input class=\'text\' name=\'username\' autocomplete=\'on\' type=\'text\' placeholder=\'$', '\' autocapitalize=\'off\'>\n\t\t\t\t\t<input class=\'text\' name=\'password\' autocomplete=\'current-password\' type=\'password\' placeholder=\'$', '\'>\n\t\t\t\t</p>\n\t\t\t\t<p class=\'version\'>Lychee ', '<span> &#8211; <a target=\'_blank\' href=\'', '\'>', '</a><span></p>\n\t\t\t'], ['\n\t\t\t\t<p class=\'signIn\'>\n\t\t\t\t\t<input class=\'text\' name=\'username\' autocomplete=\'on\' type=\'text\' placeholder=\'$', '\' autocapitalize=\'off\'>\n\t\t\t\t\t<input class=\'text\' name=\'password\' autocomplete=\'current-password\' type=\'password\' placeholder=\'$', '\'>\n\t\t\t\t</p>\n\t\t\t\t<p class=\'version\'>Lychee ', '<span> &#8211; <a target=\'_blank\' href=\'', '\'>', '</a><span></p>\n\t\t\t']),
    _templateObject41 = _taggedTemplateLiteral(['<p>', ' \'', '\' ', '</p>'], ['<p>', ' \'', '\' ', '</p>']),
    _templateObject42 = _taggedTemplateLiteral(['<p>', ' ', ' ', '</p>'], ['<p>', ' ', ' ', '</p>']),
    _templateObject43 = _taggedTemplateLiteral(['<input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'Title\' value=\'$', '\'>'], ['<input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'Title\' value=\'$', '\'>']),
    _templateObject44 = _taggedTemplateLiteral(['<p>', ' ', ' ', ' ', '</p>'], ['<p>', ' ', ' ', ' ', '</p>']),
    _templateObject45 = _taggedTemplateLiteral(['<p>', ' <input class=\'text\' name=\'description\' type=\'text\' maxlength=\'800\' placeholder=\'', '\' value=\'$', '\'></p>'], ['<p>', ' <input class=\'text\' name=\'description\' type=\'text\' maxlength=\'800\' placeholder=\'', '\' value=\'$', '\'></p>']),
    _templateObject46 = _taggedTemplateLiteral(['<input class=\'text\' name=\'tags\' type=\'text\' maxlength=\'800\' placeholder=\'Tags\' value=\'$', '\'>'], ['<input class=\'text\' name=\'tags\' type=\'text\' maxlength=\'800\' placeholder=\'Tags\' value=\'$', '\'>']),
    _templateObject47 = _taggedTemplateLiteral(['?photoID=', '&kind=', ''], ['?photoID=', '&kind=', '']),
    _templateObject48 = _taggedTemplateLiteral(['<span class=\'attr_', '\'>$', '</span>'], ['<span class=\'attr_', '\'>$', '</span>']),
    _templateObject49 = _taggedTemplateLiteral(['\n\t\t\t\t\t <tr>\n\t\t\t\t\t\t <td>', '</td>\n\t\t\t\t\t\t <td>', '</td>\n\t\t\t\t\t </tr>\n\t\t\t\t\t '], ['\n\t\t\t\t\t <tr>\n\t\t\t\t\t\t <td>', '</td>\n\t\t\t\t\t\t <td>', '</td>\n\t\t\t\t\t </tr>\n\t\t\t\t\t ']),
    _templateObject50 = _taggedTemplateLiteral(['\n\t\t\t\t <div class=\'sidebar__divider\'>\n\t\t\t\t\t <h1>', '</h1>\n\t\t\t\t </div>\n\t\t\t\t <div id=\'tags\'>\n\t\t\t\t\t <div class=\'attr_', '\'>', '</div>\n\t\t\t\t\t ', '\n\t\t\t\t </div>\n\t\t\t\t '], ['\n\t\t\t\t <div class=\'sidebar__divider\'>\n\t\t\t\t\t <h1>', '</h1>\n\t\t\t\t </div>\n\t\t\t\t <div id=\'tags\'>\n\t\t\t\t\t <div class=\'attr_', '\'>', '</div>\n\t\t\t\t\t ', '\n\t\t\t\t </div>\n\t\t\t\t ']),
    _templateObject51 = _taggedTemplateLiteral(['<p>'], ['<p>']),
    _templateObject52 = _taggedTemplateLiteral(['linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("', '")'], ['linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("', '")']),
    _templateObject53 = _taggedTemplateLiteral(['\n\t\t\t<div class="setCSS">\n\t\t\t\t<a id="basicModal__action_more" class="basicModal__button basicModal__button_MORE">', '</a>\n\t\t\t</div>\n\t\t\t'], ['\n\t\t\t<div class="setCSS">\n\t\t\t\t<a id="basicModal__action_more" class="basicModal__button basicModal__button_MORE">', '</a>\n\t\t\t</div>\n\t\t\t']),
    _templateObject54 = _taggedTemplateLiteral(['\n\t\t\t\t<div id="fullSettings">\n\t\t\t\t<div class="setting_line">\n\t\t\t\t<p class="warning">\n\t\t\t\t', '\n\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t'], ['\n\t\t\t\t<div id="fullSettings">\n\t\t\t\t<div class="setting_line">\n\t\t\t\t<p class="warning">\n\t\t\t\t', '\n\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t']),
    _templateObject55 = _taggedTemplateLiteral(['\n\t\t\t\t\t\t<div class="setting_category">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t$', '\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>'], ['\n\t\t\t\t\t\t<div class="setting_category">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t$', '\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>']),
    _templateObject56 = _taggedTemplateLiteral(['\n\t\t\t<div class="setting_line">\n\t\t\t\t<p>\n\t\t\t\t<span class="text">$', '</span>\n\t\t\t\t<input class="text" name="$', '" type="text" value="$', '" placeholder="" />\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<div class="setting_line">\n\t\t\t\t<p>\n\t\t\t\t<span class="text">$', '</span>\n\t\t\t\t<input class="text" name="$', '" type="text" value="$', '" placeholder="" />\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t']),
    _templateObject57 = _taggedTemplateLiteral(['\n\t\t\t<a id="FullSettingsSave_button"  class="basicModal__button basicModal__button_SAVE">', '</a>\n\t\t</div>\n\t\t\t'], ['\n\t\t\t<a id="FullSettingsSave_button"  class="basicModal__button basicModal__button_SAVE">', '</a>\n\t\t</div>\n\t\t\t']),
    _templateObject58 = _taggedTemplateLiteral(['<div class="clear_logs_update"><a id="Clean_Noise" class="basicModal__button">', '</a></div>'], ['<div class="clear_logs_update"><a id="Clean_Noise" class="basicModal__button">', '</a></div>']),
    _templateObject59 = _taggedTemplateLiteral(['<div class="clear_logs_update"><a id="Update_Lychee" class="basicModal__button">', '</a></div>'], ['<div class="clear_logs_update"><a id="Update_Lychee" class="basicModal__button">', '</a></div>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * @description This module communicates with Lychee's API
 */

api = {

	path: 'php/index.php',
	onError: null

};

api.get_url = function (fn) {

	var api_url = '';

	if (lychee.api_V2) {
		// because the api is defined directly by the function called in the route.php
		api_url = 'api/' + fn;
	} else {
		api_url = api.path;
	}

	return api_url;
};

api.post = function (fn, params, callback) {

	loadingBar.show();

	params = $.extend({ function: fn }, params);

	var api_url = api.get_url(fn);

	var success = function success(data) {

		setTimeout(loadingBar.hide, 100);

		// Catch errors
		if (typeof data === 'string' && data.substring(0, 7) === 'Error: ') {
			api.onError(data.substring(7, data.length), params, data);
			return false;
		}

		callback(data);
	};

	var error = function error(jqXHR, textStatus, errorThrown) {

		api.onError('Server error or API not found.', params, errorThrown);
	};

	$.ajax({
		type: 'POST',
		url: api_url,
		data: params,
		dataType: 'json',
		success: success,
		error: error
	});
};

api.get = function (url, callback) {

	loadingBar.show();

	var success = function success(data) {

		setTimeout(loadingBar.hide, 100);

		// Catch errors
		if (typeof data === 'string' && data.substring(0, 7) === 'Error: ') {
			api.onError(data.substring(7, data.length), params, data);
			return false;
		}

		callback(data);
	};

	var error = function error(jqXHR, textStatus, errorThrown) {

		api.onError('Server error or API not found.', {}, errorThrown);
	};

	$.ajax({
		type: 'GET',
		url: url,
		data: {},
		dataType: 'text',
		success: success,
		error: error
	});
};

api.post_raw = function (fn, params, callback) {
	loadingBar.show();

	params = $.extend({ function: fn }, params);

	var api_url = api.get_url(fn);

	var success = function success(data) {

		setTimeout(loadingBar.hide, 100);

		// Catch errors
		if (typeof data === 'string' && data.substring(0, 7) === 'Error: ') {
			api.onError(data.substring(7, data.length), params, data);
			return false;
		}

		callback(data);
	};

	var error = function error(jqXHR, textStatus, errorThrown) {

		api.onError('Server error or API not found.', params, errorThrown);
	};

	$.ajax({
		type: 'POST',
		url: api_url,
		data: params,
		dataType: 'text',
		success: success,
		error: error
	});
};
csrf = {};

csrf.addLaravelCSRF = function (event, jqxhr, settings) {
	if (settings.url !== lychee.updatePath) {
		jqxhr.setRequestHeader('X-XSRF-TOKEN', csrf.getCookie('XSRF-TOKEN'));
	}
};

csrf.escape = function (s) {
	return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
};

csrf.getCookie = function (name) {
	// we stop the selection at = (default json) but also at % to prevent any %3D at the end of the string
	var match = document.cookie.match(RegExp('(?:^|;\\s*)' + csrf.escape(name) + '=([^;^%]*)'));
	return match ? match[1] : null;
};

csrf.bind = function () {
	$(document).on('ajaxSend', csrf.addLaravelCSRF);
};

function gup(b) {

	b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

	var a = "[\\?&]" + b + "=([^&#]*)";
	var d = new RegExp(a);
	var c = d.exec(window.location.href);

	if (c === null) return '';else return c[1];
}
/**
 * @description Takes care of every action an album can handle and execute.
 */

album = {

	json: null
};

album.isSmartID = function (id) {

	return id === '0' || id === 'f' || id === 's' || id === 'r';
};

album.getParent = function () {

	if (album.json == null || album.isSmartID(album.json.id) === true || !album.json.parent_id || album.json.parent_id === 0) return '';
	return album.json.parent_id;
};

album.getID = function () {

	var id = null;

	var isID = function isID(id) {
		if (id === '0' || id === 'f' || id === 's' || id === 'r') return true;
		return $.isNumeric(id);
	};

	if (photo.json) id = photo.json.album;else if (album.json) id = album.json.id;

	// Search
	if (isID(id) === false) id = $('.album:hover, .album.active').attr('data-id');
	if (isID(id) === false) id = $('.photo:hover, .photo.active').attr('data-album-id');

	if (isID(id) === true) return id;else return false;
};

album.getByID = function (photoID) {

	// Function returns the JSON of a photo

	if (photoID == null || !album.json || !album.json.photos) {
		lychee.error('Error: Album json not found !');
		return undefined;
	}

	var i = 0;
	while (i < album.json.photos.length) {
		if (parseInt(album.json.photos[i].id) === parseInt(photoID)) {
			return album.json.photos[i];
		}
		i++;
	}

	lychee.error('Error: photo ' + photoID + ' not found !');
	return undefined;
};

album.getSubByID = function (albumID) {

	// Function returns the JSON of a subalbum

	if (albumID == null || !album.json || !album.json.albums) {
		lychee.error('Error: Album json not found!');
		return undefined;
	}

	var i = 0;
	while (i < album.json.albums.length) {
		if (parseInt(album.json.albums[i].id) === parseInt(albumID)) {
			return album.json.albums[i];
		}
		i++;
	}

	lychee.error('Error: album ' + albumID + ' not found!');
	return undefined;
};

album.hasSub = function (albumID) {

	// Return true if the current album has albumID as its descendant

	if (albumID == null || !album.json || !album.json.albums) {
		return false;
	}

	var ret = false;

	var func = function func() {
		if (parseInt(this.id, 10) === parseInt(albumID, 10)) {
			ret = true;
			return false;
		}
		if (this.albums) {
			$.each(this.albums, func);
		}
	};

	$.each(album.json.albums, func);

	return ret;
};

album.deleteByID = function (photoID) {

	if (photoID == null || !album.json || !album.json.photos) {
		lychee.error('Error: Album json not found !');
		return false;
	}

	var deleted = false;

	$.each(album.json.photos, function (i) {

		if (parseInt(album.json.photos[i].id) === parseInt(photoID)) {
			album.json.photos.splice(i, 1);
			deleted = true;
			return false;
		}
	});

	return deleted;
};

album.deleteSubByID = function (albumID) {

	if (albumID == null || !album.json || !album.json.albums) {
		lychee.error('Error: Album json not found !');
		return false;
	}

	var deleted = false;

	$.each(album.json.albums, function (i) {

		if (parseInt(album.json.albums[i].id) === parseInt(albumID)) {
			album.json.albums.splice(i, 1);
			deleted = true;
			return false;
		}
	});

	return deleted;
};

album.load = function (albumID) {
	var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	var params = {
		albumID: albumID,
		password: ''
	};

	var processData = function processData(data) {

		if (data === 'Warning: Wrong password!') {
			// User hit Cancel at the password prompt
			return false;
		}

		if (data === 'Warning: Album private!') {

			if (document.location.hash.replace('#', '').split('/')[1] !== undefined) {
				// Display photo only
				lychee.setMode('view');
			} else {
				// Album not public
				lychee.content.show();
				if (!visible.albums() && !visible.album()) lychee.goto();
			}
			return false;
		}

		album.json = data;

		if (refresh === false) lychee.animate('.content', 'contentZoomOut');
		var waitTime = 300;

		// Skip delay when refresh is true
		// Skip delay when opening a blank Lychee
		if (refresh === true) waitTime = 0;
		if (!visible.albums() && !visible.photo() && !visible.album()) waitTime = 0;

		setTimeout(function () {

			view.album.init();

			if (refresh === false) {
				lychee.animate(lychee.content, 'contentZoomIn');
				header.setMode('album');
			}
		}, waitTime);
	};

	api.post('Album::get', params, function (data) {

		if (data === 'Warning: Wrong password!') {
			password.getDialog(albumID, function () {

				params.password = password.value;

				api.post('Album::get', params, function (data) {
					processData(data);
				});
			});
		} else {
			processData(data);
		}
	});
};

album.parse = function () {

	if (!album.json.title) album.json.title = lychee.locale['UNTITLED'];
};

album.add = function () {
	var IDs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


	var action = function action(data) {

		// let title = data.title;

		var isNumber = function isNumber(n) {
			return !isNaN(parseInt(n, 10)) && isFinite(n);
		};

		basicModal.close();

		var params = {
			title: data.title,
			parent_id: 0
		};

		if (visible.albums()) {
			params.parent_id = 0;
		} else if (visible.album()) {
			params.parent_id = album.json.id;
		} else if (visible.photo()) {
			params.parent_id = photo.json.album;
		}

		api.post('Album::add', params, function (data) {

			if (data !== false && isNumber(data)) {
				if (IDs != null && callback != null) {
					callback(IDs, data, false); // we do not confirm
				} else {
					albums.refresh();
					lychee.goto(data);
				}
			} else {
				lychee.error(null, params, data);
			}
		});
	};

	basicModal.show({
		body: '<p>' + lychee.locale['TITLE_NEW_ALBUM'] + ' <input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'Title\' value=\'Untitled\'></p>',
		buttons: {
			action: {
				title: lychee.locale['CREATE_ALBUM'],
				fn: action
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: basicModal.close
			}
		}
	});
};

album.setTitle = function (albumIDs) {

	var oldTitle = '';
	var msg = '';

	if (!albumIDs) return false;
	if (albumIDs instanceof Array === false) albumIDs = [albumIDs];

	if (albumIDs.length === 1) {

		// Get old title if only one album is selected
		if (album.json) {
			if (parseInt(album.getID()) === parseInt(albumIDs[0])) {
				oldTitle = album.json.title;
			} else oldTitle = album.getSubByID(albumIDs[0]).title;
		}
		if (!oldTitle && albums.json) oldTitle = albums.getByID(albumIDs[0]).title;
	}

	var action = function action(data) {

		basicModal.close();

		var newTitle = data.title;

		if (visible.album()) {

			if (albumIDs.length === 1 && parseInt(album.getID()) === parseInt(albumIDs[0])) {
				// Rename only one album

				album.json.title = newTitle;
				view.album.title();

				if (albums.json) albums.getByID(albumIDs[0]).title = newTitle;
			} else {
				albumIDs.forEach(function (id) {
					album.getSubByID(id).title = newTitle;
					view.album.content.titleSub(id);

					if (albums.json) albums.getByID(id).title = newTitle;
				});
			}
		} else if (visible.albums()) {

			// Rename all albums

			albumIDs.forEach(function (id) {
				albums.getByID(id).title = newTitle;
				view.albums.content.title(id);
			});
		}

		var params = {
			albumIDs: albumIDs.join(),
			title: newTitle
		};

		api.post('Album::setTitle', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	var input = lychee.html(_templateObject, lychee.locale['ALBUM_TITLE'], oldTitle);

	if (albumIDs.length === 1) msg = lychee.html(_templateObject2, lychee.locale['ALBUM_NEW_TITLE'], input);else msg = lychee.html(_templateObject3, lychee.locale['ALBUMS_NEW_TITLE_1'], albumIDs.length, lychee.locale['ALBUMS_NEW_TITLE_2'], input);

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: lychee.locale['ALBUM_SET_TITLE'],
				fn: action
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: basicModal.close
			}
		}
	});
};

album.setDescription = function (albumID) {

	var oldDescription = album.json.description;

	var action = function action(data) {

		var description = data.description;

		basicModal.close();

		if (visible.album()) {
			album.json.description = description;
			view.album.description();
		}

		var params = {
			albumID: albumID,
			description: description
		};

		api.post('Album::setDescription', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	basicModal.show({
		body: lychee.html(_templateObject4, lychee.locale['ALBUM_NEW_DESCRIPTION'], lychee.locale['ALBUM_DESCRIPTION'], oldDescription),
		buttons: {
			action: {
				title: lychee.locale['ALBUM_SET_DESCRIPTION'],
				fn: action
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: basicModal.close
			}
		}
	});
};

album.setLicense = function (albumID) {

	var callback = function callback() {
		$('select#license').val(album.json.license === '' ? 'none' : album.json.license);
		return false;
	};

	var action = function action(data) {

		var license = data.license;

		basicModal.close();

		var params = {
			albumID: albumID,
			license: license
		};

		api.post('Album::setLicense', params, function (data) {

			if (data !== true) {
				lychee.error(null, params, data);
			} else {
				if (visible.album()) {
					album.json.license = params.license;
					view.album.license();
				}
			}
		});
	};

	var msg = lychee.html(_templateObject5, lychee.locale['ALBUM_LICENSE'], lychee.locale['ALBUM_LICENSE_NONE'], lychee.locale['ALBUM_RESERVED'], lychee.locale['ALBUM_LICENSE_HELP']);

	basicModal.show({
		body: msg,
		callback: callback,
		buttons: {
			action: {
				title: lychee.locale['ALBUM_SET_LICENSE'],
				fn: action
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: basicModal.close
			}
		}
	});
};

album.setPublic = function (albumID, modal, e) {

	var password = '';

	albums.refresh();

	if (modal === true) {

		var text = '';
		var action = {};

		action.fn = function () {

			// Call setPublic function without showing the modal
			album.setPublic(album.getID(), false, e);
		};

		// Album public = Editing a shared album
		if (album.json.public === '1') {

			action.title = lychee.locale['EDIT_SHARING_TITLE'];
			text = lychee.locale['EDIT_SHARING_TEXT'];
		} else {

			action.title = lychee.locale['SHARE_ALBUM'];
			text = lychee.locale['SHARE_ALBUM_TEXT'];
		}

		var msg = '\n\t\t\t\t  <p class=\'less\'>' + text + '</p>\n\t\t\t\t  <form>\n\t\t\t\t\t  <div class=\'choice\'>\n\t\t\t\t\t\t  <label>\n\t\t\t\t\t\t\t  <input type=\'checkbox\' name=\'hidden\'>\n\t\t\t\t\t\t\t  <span class=\'checkbox\'>' + build.iconic('check') + '</span>\n\t\t\t\t\t\t\t  <span class=\'label\'>' + lychee.locale['ALBUM_HIDDEN'] + '</span>\n\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t  <p>' + lychee.locale['ALBUM_HIDDEN_EXPL'] + '</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\'choice\'>\n\t\t\t\t\t\t  <label>\n\t\t\t\t\t\t\t  <input type=\'checkbox\' name=\'downloadable\'>\n\t\t\t\t\t\t\t  <span class=\'checkbox\'>' + build.iconic('check') + '</span>\n\t\t\t\t\t\t\t  <span class=\'label\'>' + lychee.locale['ALBUM_DOWNLOADABLE'] + '</span>\n\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t  <p>' + lychee.locale['ALBUM_DOWNLOADABLE_EXPL'] + '</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\'choice\'>\n\t\t\t\t\t\t  <label>\n\t\t\t\t\t\t\t  <input type=\'checkbox\' name=\'password\'>\n\t\t\t\t\t\t\t  <span class=\'checkbox\'>' + build.iconic('check') + '</span>\n\t\t\t\t\t\t\t  <span class=\'label\'>' + lychee.locale['ALBUM_PASSWORD_PROT'] + '</span>\n\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t  <p>' + lychee.locale['ALBUM_PASSWORD_PROT_EXPL'] + '</p>\n\t\t\t\t\t\t  <input class=\'text\' name=\'passwordtext\' type=\'text\' placeholder=\'password\' value=\'\'>\n\t\t\t\t\t  </div>\n\t\t\t\t  </form>\n\t\t\t\t  ';

		basicModal.show({
			body: msg,
			buttons: {
				action: {
					title: action.title,
					fn: action.fn
				},
				cancel: {
					title: lychee.locale['CANCEL'],
					fn: basicModal.close
				}
			}
		});

		if (album.json.public === '1' && album.json.visible === '0') $('.basicModal .choice input[name="hidden"]').click();
		if (album.json.downloadable === '1') $('.basicModal .choice input[name="downloadable"]').click();

		$('.basicModal .choice input[name="password"]').on('change', function () {

			if ($(this).prop('checked') === true) $('.basicModal .choice input[name="passwordtext"]').show().focus();else $('.basicModal .choice input[name="passwordtext"]').hide();
		});

		return true;
	}

	// Set data
	if (basicModal.visible()) {

		// Visible modal => Set album public
		album.json.public = '1';

		// Set visible
		if ($('.basicModal .choice input[name="hidden"]:checked').length === 1) album.json.visible = '0';else album.json.visible = '1';

		// Set downloadable
		if ($('.basicModal .choice input[name="downloadable"]:checked').length === 1) album.json.downloadable = '1';else album.json.downloadable = '0';

		// Set password
		if ($('.basicModal .choice input[name="password"]:checked').length === 1) {
			password = $('.basicModal .choice input[name="passwordtext"]').val();
			album.json.password = '1';
		} else {
			password = '';
			album.json.password = '0';
		}

		// Modal input has been processed, now it can be closed
		basicModal.close();
	} else {

		// Modal not visible => Set album private
		album.json.public = '0';
	}

	// Set data and refresh view
	if (visible.album()) {

		album.json.visible = album.json.public === '0' ? '1' : album.json.visible;
		album.json.downloadable = album.json.public === '0' ? '0' : album.json.downloadable;
		album.json.password = album.json.public === '0' ? '0' : album.json.password;

		view.album.public();
		view.album.hidden();
		view.album.downloadable();
		view.album.password();

		if (album.json.public === '1') contextMenu.shareAlbum(albumID, e);
	}

	var params = {
		albumID: albumID,
		public: album.json.public,
		password: password,
		visible: album.json.visible,
		downloadable: album.json.downloadable
	};

	api.post('Album::setPublic', params, function (data) {

		if (data !== true) lychee.error(null, params, data);
	});
};

album.share = function (service) {

	var url = location.href;

	switch (service) {
		case 'twitter':
			window.open('https://twitter.com/share?url=' + encodeURI(url));
			break;
		case 'facebook':
			window.open('http://www.facebook.com/sharer.php?u=' + encodeURI(url) + '&t=' + encodeURI(album.json.title));
			break;
		case 'mail':
			location.href = 'mailto:?subject=' + encodeURI(album.json.title) + '&body=' + encodeURI(url);
			break;
	}
};

album.getArchive = function (albumID) {

	var link = '';

	// double check with API_V2 this will not work...
	if (lychee.api_V2) {
		location.href = api.get_url('Album::getArchive') + lychee.html(_templateObject6, albumID);
	} else {
		var url = api.path + '?function=Album::getArchive&albumID=' + albumID;

		if (location.href.indexOf('index.html') > 0) link = location.href.replace(location.hash, '').replace('index.html', url);else link = location.href.replace(location.hash, '') + url;

		if (lychee.publicMode === true) link += '&password=' + encodeURIComponent(password.value);

		location.href = link;
	}
};

album.buildMessage = function (albumIDs, albumID, op1, op2, ops) {

	var title = '';
	var sTitle = '';
	var msg = '';

	if (!albumIDs) return false;
	if (albumIDs instanceof Array === false) albumIDs = [albumIDs];

	// Get title of first album
	if (parseInt(albumID, 10) === 0) {
		title = lychee.locale['ROOT'];
	} else if (albums.json) title = albums.getByID(albumID).title;

	// Fallback for first album without a title
	if (title === '') title = lychee.locale['UNTITLED'];

	if (albumIDs.length === 1) {

		// Get title of second album
		if (albums.json) sTitle = albums.getByID(albumIDs[0]).title;

		// Fallback for second album without a title
		if (sTitle === '') sTitle = lychee.locale['UNTITLED'];

		msg = lychee.html(_templateObject7, lychee.locale[op1], sTitle, lychee.locale[op2], title);
	} else {

		msg = lychee.html(_templateObject8, lychee.locale[ops], title);
	}

	return msg;
};

album.delete = function (albumIDs) {

	var action = {};
	var cancel = {};
	var msg = '';

	if (!albumIDs) return false;
	if (albumIDs instanceof Array === false) albumIDs = [albumIDs];

	action.fn = function () {

		basicModal.close();

		var params = {
			albumIDs: albumIDs.join()
		};

		api.post('Album::delete', params, function (data) {

			if (visible.albums()) {

				albumIDs.forEach(function (id) {
					view.albums.content.delete(id);
					albums.deleteByID(id);
				});
			} else if (visible.album()) {

				albums.refresh();
				if (albumIDs.length === 1 && parseInt(album.getID()) === parseInt(albumIDs[0])) {
					lychee.goto(album.getParent());
				} else {
					albumIDs.forEach(function (id) {
						album.deleteSubByID(id);
						view.album.content.deleteSub(id);
					});
				}
			}

			if (data !== true) lychee.error(null, params, data);
		});
	};

	if (albumIDs.toString() === '0') {

		action.title = lychee.locale['CLEAR_UNSORTED'];
		cancel.title = lychee.locale['KEEP_UNSORTED'];

		msg = '<p>' + lychee.locale['DELETE_UNSORTED_CONFIRM'] + '</p>';
	} else if (albumIDs.length === 1) {

		var albumTitle = '';

		action.title = lychee.locale['DELETE_ALBUM_QUESTION'];
		cancel.title = lychee.locale['KEEP_ALBUM'];

		// Get title
		if (album.json) {
			if (parseInt(album.getID()) === parseInt(albumIDs[0])) {
				albumTitle = album.json.title;
			} else albumTitle = album.getSubByID(albumIDs[0]).title;
		}
		if (!albumTitle && albums.json) albumTitle = albums.getByID(albumIDs).title;

		// Fallback for album without a title
		if (albumTitle === '') albumTitle = lychee.locale['UNTITLED'];

		msg = lychee.html(_templateObject9, lychee.locale['DELETE_ALBUM_CONFIRMATION_1'], albumTitle, lychee.locale['DELETE_ALBUM_CONFIRMATION_2']);
	} else {

		action.title = lychee.locale['DELETE_ALBUMS_QUESTION'];
		cancel.title = lychee.locale['KEEP_ALBUMS'];

		msg = lychee.html(_templateObject10, lychee.locale['DELETE_ALBUMS_CONFIRMATION_1'], albumIDs.length, lychee.locale['DELETE_ALBUMS_CONFIRMATION_2']);
	}

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: action.title,
				fn: action.fn,
				class: 'red'
			},
			cancel: {
				title: cancel.title,
				fn: basicModal.close
			}
		}
	});
};

album.merge = function (albumIDs, albumID) {
	var confirm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


	var action = function action() {

		basicModal.close();
		albumIDs.unshift(albumID);

		var params = {
			albumIDs: albumIDs.join()
		};

		api.post('Album::merge', params, function (data) {

			if (data !== true) {
				lychee.error(null, params, data);
			} else {
				album.reload();
			}
		});
	};

	if (confirm) {
		basicModal.show({
			body: album.buildMessage(albumIDs, albumID, 'ALBUM_MERGE_1', 'ALBUM_MERGE_2', 'ALBUMS_MERGE'),
			buttons: {
				action: {
					title: lychee.locale['MERGE_ALBUM'],
					fn: action,
					class: 'red'
				},
				cancel: {
					title: lychee.locale['DONT_MERGE'],
					fn: basicModal.close
				}
			}
		});
	} else {
		action();
	}
};

album.setAlbum = function (albumIDs, albumID) {
	var confirm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


	var action = function action() {

		basicModal.close();
		albumIDs.unshift(albumID);

		var params = {
			albumIDs: albumIDs.join()
		};

		api.post('Album::move', params, function (data) {

			if (data !== true) {
				lychee.error(null, params, data);
			} else {
				album.reload();
			}
		});
	};

	if (confirm) {
		basicModal.show({
			body: album.buildMessage(albumIDs, albumID, 'ALBUM_MOVE_1', 'ALBUM_MOVE_2', 'ALBUMS_MOVE'),
			buttons: {
				action: {
					title: lychee.locale['MOVE_ALBUMS'],
					fn: action,
					class: 'red'
				},
				cancel: {
					title: lychee.locale['NOT_MOVE_ALBUMS'],
					fn: basicModal.close
				}
			}
		});
	} else {
		action();
	}
};

album.reload = function () {

	var albumID = album.getID();

	album.refresh();
	albums.refresh();

	if (visible.album()) lychee.goto(albumID);else lychee.goto();
};

album.refresh = function () {

	album.json = null;
};

/**
 * @description Takes care of every action albums can handle and execute.
 */

albums = {

	json: null

};

albums.load = function () {

	var startTime = new Date().getTime();

	lychee.animate('.content', 'contentZoomOut');

	if (albums.json === null) {

		api.post('Albums::get', {}, function (data) {

			var waitTime = 0;

			// Smart Albums
			if (lychee.publicMode === false && data.smartalbums != null) albums._createSmartAlbums(data.smartalbums);

			albums.json = data;

			// Calculate delay
			var durationTime = new Date().getTime() - startTime;
			if (durationTime > 300) waitTime = 0;else waitTime = 300 - durationTime;

			// Skip delay when opening a blank Lychee
			if (!visible.albums() && !visible.photo() && !visible.album()) waitTime = 0;
			if (visible.album() && lychee.content.html() === '') waitTime = 0;

			setTimeout(function () {
				header.setMode('albums');
				view.albums.init();
				lychee.animate(lychee.content, 'contentZoomIn');
			}, waitTime);
		});
	} else {

		setTimeout(function () {
			header.setMode('albums');
			view.albums.init();
			lychee.animate(lychee.content, 'contentZoomIn');
		}, 300);
	}
};

albums.parse = function (album) {

	if (album.password === '1' && lychee.publicMode === true) {
		album.thumbs[0] = 'Lychee-front/images/password.svg';
		album.thumbs[1] = 'Lychee-front/images/password.svg';
		album.thumbs[2] = 'Lychee-front/images/password.svg';
	} else {
		if (!album.thumbs[0]) album.thumbs[0] = 'Lychee-front/images/no_images.svg';
		if (!album.thumbs[1]) album.thumbs[1] = 'Lychee-front/images/no_images.svg';
		if (!album.thumbs[2]) album.thumbs[2] = 'Lychee-front/images/no_images.svg';
	}
};

albums._createSmartAlbums = function (data) {

	data.unsorted = {
		id: 0,
		title: lychee.locale['UNSORTED'],
		sysdate: data.unsorted.num + ' ' + lychee.locale['NUM_PHOTOS'],
		unsorted: '1',
		thumbs: data.unsorted.thumbs,
		thumbs2x: data.unsorted.thumbs2x ? data.unsorted.thumbs2x : null,
		types: data.unsorted.types
	};

	data.starred = {
		id: 'f',
		title: lychee.locale['STARRED'],
		sysdate: data.starred.num + ' ' + lychee.locale['NUM_PHOTOS'],
		star: '1',
		thumbs: data.starred.thumbs,
		thumbs2x: data.starred.thumbs2x ? data.starred.thumbs2x : null,
		types: data.starred.types
	};

	data.public = {
		id: 's',
		title: lychee.locale['PUBLIC'],
		sysdate: data.public.num + ' ' + lychee.locale['NUM_PHOTOS'],
		public: '1',
		thumbs: data.public.thumbs,
		thumbs2x: data.public.thumbs2x ? data.public.thumbs2x : null,
		hidden: '1',
		types: data.public.types
	};

	data.recent = {
		id: 'r',
		title: lychee.locale['RECENT'],
		sysdate: data.recent.num + ' ' + lychee.locale['NUM_PHOTOS'],
		recent: '1',
		thumbs: data.recent.thumbs,
		thumbs2x: data.recent.thumbs2x ? data.recent.thumbs2x : null,
		types: data.recent.types
	};
};

albums.isShared = function (albumID) {

	if (albumID == null) return false;
	if (!albums.json) return false;
	if (!albums.json.albums) return false;

	var found = false;

	var func = function func() {
		if (parseInt(this.id, 10) === parseInt(albumID, 10)) {
			found = true;
			return false; // stop the loop
		}
		if (this.albums) {
			$.each(this.albums, func);
		}
	};

	if (albums.json.shared_albums !== null) $.each(albums.json.shared_albums, func);

	return found;
};

albums.getByID = function (albumID) {

	// Function returns the JSON of an album

	if (albumID == null) return undefined;
	if (!albums.json) return undefined;
	if (!albums.json.albums) return undefined;

	var json = undefined;

	var func = function func() {
		if (parseInt(this.id, 10) === parseInt(albumID, 10)) {
			json = this;
			return false; // stop the loop
		}
		if (this.albums) {
			$.each(this.albums, func);
		}
	};

	$.each(albums.json.albums, func);

	if (json === undefined && albums.json.shared_albums !== null) $.each(albums.json.shared_albums, func);

	return json;
};

albums.deleteByID = function (albumID) {

	// Function returns the JSON of an album
	// This function is only ever invoked for top-level albums so it
	// doesn't need to descend down the albums tree.

	if (albumID == null) return false;
	if (!albums.json) return false;
	if (!albums.json.albums) return false;

	var deleted = false;

	$.each(albums.json.albums, function (i) {

		if (parseInt(albums.json.albums[i].id) === parseInt(albumID)) {
			albums.json.albums.splice(i, 1);
			deleted = true;
			return false; // stop the loop
		}
	});

	if (deleted === false) {
		if (!albums.json.shared_albums) return undefined;
		$.each(albums.json.shared_albums, function (i) {

			if (parseInt(albums.json.shared_albums[i].id) === parseInt(albumID)) {
				albums.json.shared_albums.splice(i, 1);
				deleted = true;
				return false; // stop the loop
			}
		});
	}

	return deleted;
};

albums.refresh = function () {
	albums.json = null;
};

/**
 * @description This module is used to generate HTML-Code.
 */

build = {};

build.iconic = function (icon) {
	var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


	var html = '';

	html += lychee.html(_templateObject11, classes, icon);

	return html;
};

build.divider = function (title) {

	var html = '';

	html += lychee.html(_templateObject12, title);

	return html;
};

build.editIcon = function (id) {

	var html = '';

	html += lychee.html(_templateObject13, id, build.iconic('pencil'));

	return html;
};

build.multiselect = function (top, left) {

	return lychee.html(_templateObject14, top, left);
};

build.getAlbumThumb = function (data, i) {
	var isVideo = data.types[i] && data.types[i].indexOf('video') > -1;
	var thumb = data.thumbs[i];

	if (thumb === 'uploads/thumb/' && isVideo) {
		return '<span class="thumbimg"><img src=\'dist/play-icon.png\' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'></span>';
	}

	thumb2x = '';
	if (data.thumbs2x) {
		if (data.thumbs2x[i]) {
			thumb2x = data.thumbs2x[i];
		}
	} else {
		// Fallback code for Lychee v3
		var _lychee$retinize = lychee.retinize(data.thumbs[i]),
		    thumb2x = _lychee$retinize.path,
		    isPhoto = _lychee$retinize.isPhoto;

		if (!isPhoto) {
			thumb2x = '';
		}
	}

	return '<span class="thumbimg' + (isVideo ? ' video' : '') + '"><img class=\'lazyload\' src=\'dist/placeholder.png\' data-src=\'' + thumb + '\' ' + (thumb2x !== '' ? 'data-srcset=\'' + thumb2x + ' 2x\'' : '') + ' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'></span>';
};

build.album = function (data) {
	var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var html = '';
	var date_stamp = data.sysdate;
	var sortingAlbums = [];

	// In the special case of take date sorting use the take stamps as title
	if (lychee.sortingAlbums !== '' && data.min_takestamp && data.max_takestamp) {

		sortingAlbums = lychee.sortingAlbums.replace('ORDER BY ', '').split(' ');
		if (sortingAlbums[0] === 'max_takestamp' || sortingAlbums[0] === 'min_takestamp') {
			if (data.min_takestamp !== '' && data.max_takestamp !== '') {
				date_stamp = data.min_takestamp === data.max_takestamp ? data.max_takestamp : data.min_takestamp + ' - ' + data.max_takestamp;
			} else if (data.min_takestamp !== '' && sortingAlbums[0] === 'min_takestamp') {
				date_stamp = data.min_takestamp;
			} else if (data.max_takestamp !== '' && sortingAlbums[0] === 'max_takestamp') {
				date_stamp = data.max_takestamp;
			}
		}
	}

	html += lychee.html(_templateObject15, disabled ? 'disabled' : '', data.id, build.getAlbumThumb(data, 2), build.getAlbumThumb(data, 1), build.getAlbumThumb(data, 0), data.title, data.title, date_stamp);

	if (lychee.publicMode === false) {

		html += lychee.html(_templateObject16, data.star === '1' ? 'badge--star' : '', build.iconic('star'), data.public === '1' ? 'badge--visible' : '', data.hidden === '1' ? 'badge--not--hidden' : 'badge--hidden', build.iconic('eye'), data.unsorted === '1' ? 'badge--visible' : '', build.iconic('list'), data.recent === '1' ? 'badge--visible badge--list' : '', build.iconic('clock'), data.password === '1' ? 'badge--visible' : '', build.iconic('lock-locked'));
	}

	if (data.albums && data.albums.length > 0) {
		html += lychee.html(_templateObject17, build.iconic('layers'));
	}

	html += '</div>';

	return html;
};

build.photo = function (data) {

	var html = '';
	var thumbnail = '';
	var thumb2x = '';

	var isVideo = data.type && data.type.indexOf('video') > -1;
	if (data.thumbUrl === 'uploads/thumb/' && isVideo) {
		thumbnail = '<span class="thumbimg"><img src=\'dist/play-icon.png\' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'></span>';
	} else if (lychee.layout === '0') {

		if (data.hasOwnProperty('thumb2x')) {
			// Lychee v4
			thumb2x = data.thumb2x;
		} else {
			// Lychee v3
			var _lychee$retinize2 = lychee.retinize(data.thumbUrl),
			    thumb2x = _lychee$retinize2.path;
		}

		if (thumb2x !== '') {
			thumb2x = 'data-srcset=\'' + thumb2x + ' 2x\'';
		}

		thumbnail = '<span class="thumbimg' + (isVideo ? ' video' : '') + '">';
		thumbnail += '<img class=\'lazyload\' src=\'dist/placeholder.png\' data-src=\'' + data.thumbUrl + '\' ' + thumb2x + ' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'>';
		thumbnail += '</span>';
	} else {

		if (data.small !== '') {
			if (data.hasOwnProperty('small2x') && data.small2x !== '') {
				thumb2x = 'data-srcset=\'' + data.small + ' ' + parseInt(data.small_dim, 10) + 'w, ' + data.small2x + ' ' + parseInt(data.small2x_dim, 10) + 'w\'';
			}

			thumbnail = '<span class="thumbimg' + (isVideo ? ' video' : '') + '">';
			thumbnail += '<img class=\'lazyload\' src=\'dist/placeholder.png\' data-src=\'' + data.small + '\' ' + thumb2x + ' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'>';
			thumbnail += '</span>';
		} else if (data.medium !== '') {
			if (data.hasOwnProperty('medium2x') && data.medium2x !== '') {
				thumb2x = 'data-srcset=\'' + data.medium + ' ' + parseInt(data.medium_dim, 10) + 'w, ' + data.medium2x + ' ' + parseInt(data.medium2x_dim, 10) + 'w\'';
			}

			thumbnail = '<span class="thumbimg' + (isVideo ? ' video' : '') + '">';
			thumbnail += '<img class=\'lazyload\' src=\'dist/placeholder.png\' data-src=\'' + data.medium + '\' ' + thumb2x + ' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'>';
			thumbnail += '</span>';
		} else if (!isVideo) {
			// Fallback for images with no small or medium.
			thumbnail = '<span class="thumbimg">';
			thumbnail += '<img class=\'lazyload\' src=\'dist/placeholder.png\' data-src=\'' + data.url + '\' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'>';
			thumbnail += '</span>';
		} else {
			// Fallback for videos with no small (the case of no thumb is
			// handled at the top of this function).

			if (data.hasOwnProperty('thumb2x')) {
				// Lychee v4
				thumb2x = data.thumb2x;
			} else {
				// Lychee v3
				var _lychee$retinize3 = lychee.retinize(data.thumbUrl),
				    thumb2x = _lychee$retinize3.path;
			}

			if (thumb2x !== '') {
				thumb2x = 'data-srcset=\'' + data.thumbUrl + ' 200w, ' + thumb2x + ' 400w\'';
			}

			thumbnail = '<span class="thumbimg video">';
			thumbnail += '<img class=\'lazyload\' src=\'dist/placeholder.png\' data-src=\'' + data.thumbUrl + '\' ' + thumb2x + ' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'>';
			thumbnail += '</span>';
		}
	}

	html += lychee.html(_templateObject18, data.album, data.id, thumbnail, data.title, data.title);

	if (data.cameraDate === '1') html += lychee.html(_templateObject19, build.iconic('camera-slr'), data.takedate);else html += lychee.html(_templateObject20, data.sysdate);

	html += '</div>';

	if (lychee.publicMode === false) {

		html += lychee.html(_templateObject21, data.star === '1' ? 'badge--star' : '', build.iconic('star'), data.public === '1' && album.json.public !== '1' ? 'badge--visible' : '', build.iconic('eye'));
	}

	html += '</div>';

	return html;
};

build.overlay_image = function (data) {
	var exifHash = data.make + data.model + data.shutter + data.aperture + data.focal + data.iso;

	// Get the stored setting for the overlay_image
	var type = lychee.image_overlay_type;
	var html = '';

	if (type && type === 'desc' && data.description !== '') {
		html = lychee.html(_templateObject22, data.title, data.description);
	} else if (type && type === 'takedate' && data.takedate !== '') {
		html = lychee.html(_templateObject23, data.title, data.takedate);
	}
	// fall back to exif data if there is no description
	else if (exifHash !== '') {

			html += lychee.html(_templateObject24, data.title, data.shutter.replace('s', 'sec'), data.aperture.replace('f/', '&fnof; / '), lychee.locale['PHOTO_ISO'], data.iso, data.focal, data.lens && data.lens !== '' ? '(' + data.lens + ')' : '');
		}

	return html;
};

build.imageview = function (data, visibleControls) {

	var html = '';

	if (data.type.indexOf('video') > -1) {
		html += lychee.html(_templateObject25, visibleControls === true ? '' : 'full', data.url);
	} else {
		var img = '';

		if (data.medium !== '') {
			var medium = '';

			if (data.hasOwnProperty('medium2x') && data.medium2x !== '') {
				medium = 'srcset=\'' + data.medium + ' ' + parseInt(data.medium_dim, 10) + 'w, ' + data.medium2x + ' ' + parseInt(data.medium2x_dim, 10) + 'w\'';
			}
			img = '<img id=\'image\' class=\'' + (visibleControls === true ? '' : 'full') + '\' src=\'' + data.medium + '\' ' + medium + '  draggable=\'false\' alt=\'medium\'>';
		} else {
			img = '<img id=\'image\' class=\'' + (visibleControls === true ? '' : 'full') + '\' src=\'' + data.url + '\' draggable=\'false\' alt=\'big\'>';
		}
		html += lychee.html(_templateObject26, img);

		if (lychee.image_overlay) html += build.overlay_image(data);
	}

	html += '\n\t\t\t<div class=\'arrow_wrapper arrow_wrapper--previous\'><a id=\'previous\'>' + build.iconic('caret-left') + '</a></div>\n\t\t\t<div class=\'arrow_wrapper arrow_wrapper--next\'><a id=\'next\'>' + build.iconic('caret-right') + '</a></div>\n\t\t\t';

	return html;
};

build.no_content = function (typ) {

	var html = '';

	html += lychee.html(_templateObject27, build.iconic(typ));

	switch (typ) {
		case 'magnifying-glass':
			html += lychee.html(_templateObject28, lychee.locale['VIEW_NO_RESULT']);
			break;
		case 'eye':
			html += lychee.html(_templateObject28, lychee.locale['VIEW_NO_PUBLIC_ALBUMS']);
			break;
		case 'cog':
			html += lychee.html(_templateObject28, lychee.locale['VIEW_NO_CONFIGURATION']);
			break;
		case 'question-mark':
			html += lychee.html(_templateObject28, lychee.locale['VIEW_PHOTO_NOT_FOUND']);
			break;
	}

	html += '</div>';

	return html;
};

build.uploadModal = function (title, files) {

	var html = '';

	html += lychee.html(_templateObject29, title);

	var i = 0;

	while (i < files.length) {

		var file = files[i];

		if (file.name.length > 40) file.name = file.name.substr(0, 17) + '...' + file.name.substr(file.name.length - 20, 20);

		html += lychee.html(_templateObject30, file.name);

		i++;
	}

	html += '</div>';

	return html;
};

build.tags = function (tags, editable) {

	var html = '';

	if (tags !== '') {

		tags = tags.split(',');

		tags.forEach(function (tag, index) {
			html += lychee.html(_templateObject31, tag);
			if (editable) html += '<span data-index=\'' + index + '\'>' + build.iconic('x') + '</span>';
			html += '</a>';
		});
	} else {

		html = lychee.html(_templateObject32, lychee.locale['NO_TAGS']);
	}

	return html;
};

build.user = function (user) {
	var html = lychee.html(_templateObject33, user.id, user.id, user.username, user.id, user.id);

	return html;
};

/**
 * @description This module is used for the context menu.
 */

contextMenu = {};

contextMenu.add = function (e) {

	var items = [{ title: build.iconic('image') + lychee.locale['UPLOAD_PHOTO'], fn: function fn() {
			return $('#upload_files').click();
		} }, {}, { title: build.iconic('link-intact') + lychee.locale['IMPORT_LINK'], fn: upload.start.url }, { title: build.iconic('dropbox', 'ionicons') + lychee.locale['IMPORT_DROPBOX'], fn: upload.start.dropbox }, { title: build.iconic('terminal') + lychee.locale['IMPORT_SERVER'], fn: upload.start.server }, {}, { title: build.iconic('folder') + lychee.locale['NEW_ALBUM'], fn: album.add }];

	if (lychee.api_V2 && !lychee.admin) {
		items.splice(3, 2);
	}

	basicContext.show(items, e.originalEvent);

	upload.notify();
};

contextMenu.album = function (albumID, e) {

	// Notice for 'Merge':
	// fn must call basicContext.close() first,
	// in order to keep the selection

	if (album.isSmartID(albumID)) return false;

	// Show merge-item when there's more than one album
	// Commented out because it doesn't consider subalbums or shared albums.
	// let showMerge = (albums.json && albums.json.albums && Object.keys(albums.json.albums).length>1);
	var showMerge = true;

	var items = [{ title: build.iconic('pencil') + lychee.locale['RENAME'], fn: function fn() {
			return album.setTitle([albumID]);
		} }, { title: build.iconic('collapse-left') + lychee.locale['MERGE'], visible: showMerge, fn: function fn() {
			basicContext.close();contextMenu.move([albumID], e, album.merge, 'ROOT', false);
		} }, { title: build.iconic('folder') + lychee.locale['MOVE'], visible: lychee.sub_albums, fn: function fn() {
			basicContext.close();contextMenu.move([albumID], e, album.setAlbum, 'ROOT');
		} },
	// { title: build.iconic('cloud') + lychee.locale['SHARE_WITH'],    visible: lychee.api_V2 && lychee.upload,   fn: () => alert('ho')},
	{ title: build.iconic('trash') + lychee.locale['DELETE'], fn: function fn() {
			return album.delete([albumID]);
		} }];

	$('.album[data-id="' + albumID + '"]').addClass('active');

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.albumMulti = function (albumIDs, e) {

	multiselect.stopResize();

	// Automatically merge selected albums when albumIDs contains more than one album
	// Show list of albums otherwise
	var autoMerge = albumIDs.length > 1;

	// Show merge-item when there's more than one album
	// Commented out because it doesn't consider subalbums or shared albums.
	// let showMerge = (albums.json && albums.json.albums && Object.keys(albums.json.albums).length>1);
	var showMerge = true;

	var items = [{ title: build.iconic('pencil') + lychee.locale['RENAME_ALL'], fn: function fn() {
			return album.setTitle(albumIDs);
		} }, { title: build.iconic('collapse-left') + lychee.locale['MERGE_ALL'], visible: showMerge && autoMerge, fn: function fn() {
			var albumID = albumIDs.shift();album.merge(albumIDs, albumID);
		} }, { title: build.iconic('collapse-left') + lychee.locale['MERGE'], visible: showMerge && !autoMerge, fn: function fn() {
			basicContext.close();contextMenu.move(albumIDs, e, album.merge, 'ROOT', false);
		} }, { title: build.iconic('folder') + lychee.locale['MOVE_ALL'], visible: lychee.sub_albums, fn: function fn() {
			basicContext.close();contextMenu.move(albumIDs, e, album.setAlbum, 'ROOT');
		} }, { title: build.iconic('trash') + lychee.locale['DELETE_ALL'], fn: function fn() {
			return album.delete(albumIDs);
		} }];

	items.push();

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.buildList = function (lists, exclude, action) {
	var parent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	var layer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;


	var find = function find(excl, id) {
		var i = void 0;
		for (i = 0; i < excl.length; i++) {
			if (parseInt(excl[i], 10) === parseInt(id, 10)) return true;
		}
		return false;
	};

	var items = [];

	var i = 0;
	while (i < lists.length) {
		if (layer === 0 && !lists[i].parent_id || lists[i].parent_id === parent) {
			(function () {

				var item = lists[i];

				var thumb = 'Lychee-front/images/no_cover.svg';
				if (item.thumbs && item.thumbs[0]) thumb = item.thumbs[0];else if (item.thumbUrl) thumb = item.thumbUrl;

				if (item.title === '') item.title = lychee.locale['UNTITLED'];

				var prefix = layer > 0 ? '&nbsp;&nbsp;'.repeat(layer - 1) + '└ ' : '';

				var html = lychee.html(_templateObject34, prefix, thumb, item.title);

				items.push({
					title: html,
					disabled: find(exclude, item.id),
					fn: function fn() {
						return action(item);
					}
				});

				if (item.albums && item.albums.length > 0) {
					items = items.concat(contextMenu.buildList(item.albums, exclude, action, item.id, layer + 1));
				} else {
					// Fallback for flat tree representation.  Should not be
					// needed anymore but shouldn't hurt either.
					items = items.concat(contextMenu.buildList(lists, exclude, action, item.id, layer + 1));
				}
			})();
		}

		i++;
	}

	return items;
};

contextMenu.albumTitle = function (albumID, e) {

	api.post('Albums::get', {}, function (data) {

		var items = [];

		items = items.concat({ title: lychee.locale['ROOT'], fn: function fn() {
				return lychee.goto();
			} });

		if (data.albums && data.albums.length > 0) {

			items = items.concat({});
			items = items.concat(contextMenu.buildList(data.albums, [parseInt(albumID, 10)], function (a) {
				return lychee.goto(a.id);
			}));
		}

		if (data.shared_albums && data.shared_albums.length > 0) {

			items = items.concat({});
			items = items.concat(contextMenu.buildList(data.shared_albums, [parseInt(albumID, 10)], function (a) {
				return lychee.goto(a.id);
			}));
		}

		if (items.length > 0) {
			items.unshift({});
		}

		items.unshift({ title: build.iconic('pencil') + lychee.locale['RENAME'], fn: function fn() {
				return album.setTitle([albumID]);
			} });

		basicContext.show(items, e.originalEvent, contextMenu.close);
	});
};

contextMenu.photo = function (photoID, e) {

	// Notice for 'Move':
	// fn must call basicContext.close() first,
	// in order to keep the selection

	var items = [{ title: build.iconic('star') + lychee.locale['STAR'], fn: function fn() {
			return photo.setStar([photoID]);
		} }, { title: build.iconic('tag') + lychee.locale['TAGS'], fn: function fn() {
			return photo.editTags([photoID]);
		} }, {}, { title: build.iconic('pencil') + lychee.locale['RENAME'], fn: function fn() {
			return photo.setTitle([photoID]);
		} }, { title: build.iconic('layers') + lychee.locale['DUPLICATE'], fn: function fn() {
			return photo.duplicate([photoID]);
		} }, { title: build.iconic('layers') + lychee.locale['COPY_TO'], fn: function fn() {
			basicContext.close();contextMenu.move([photoID], e, photo.copyTo, 'UNSORTED');
		} }, { title: build.iconic('folder') + lychee.locale['MOVE'], fn: function fn() {
			basicContext.close();contextMenu.move([photoID], e, photo.setAlbum, 'UNSORTED');
		} }, { title: build.iconic('trash') + lychee.locale['DELETE'], fn: function fn() {
			return photo.delete([photoID]);
		} }];

	$('.photo[data-id="' + photoID + '"]').addClass('active');

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.countSubAlbums = function (photoIDs) {

	var count = 0;

	var i = void 0,
	    j = void 0;

	if (album.albums) {

		for (i = 0; i < photoIDs.length; i++) {
			for (j = 0; j < album.albums.length; j++) {
				if (album.albums[j].id === photoIDs[i]) {
					count++;
					break;
				}
			}
		}
	}

	return count;
};

contextMenu.photoMulti = function (photoIDs, e) {

	// Notice for 'Move All':
	// fn must call basicContext.close() first,
	// in order to keep the selection and multiselect
	var subcount = contextMenu.countSubAlbums(photoIDs);
	var photocount = photoIDs.length - subcount;

	if (subcount && photocount) {
		multiselect.deselect('.photo.active, .album.active');
		multiselect.close();
		lychee.error('Please select either albums or photos!');
		return;
	}
	if (subcount) {
		contextMenu.albumMulti(photoIDs, e);
		return;
	}

	multiselect.stopResize();

	var items = [{ title: build.iconic('star') + lychee.locale['STAR_ALL'], fn: function fn() {
			return photo.setStar(photoIDs);
		} }, { title: build.iconic('tag') + lychee.locale['TAGS_ALL'], fn: function fn() {
			return photo.editTags(photoIDs);
		} }, {}, { title: build.iconic('pencil') + lychee.locale['RENAME_ALL'], fn: function fn() {
			return photo.setTitle(photoIDs);
		} }, { title: build.iconic('layers') + lychee.locale['DUPLICATE_ALL'], fn: function fn() {
			return photo.duplicate(photoIDs);
		} }, { title: build.iconic('layers') + lychee.locale['COPY_ALL_TO'], fn: function fn() {
			basicContext.close();contextMenu.move(photoIDs, e, photo.copyTo, 'UNSORTED');
		} }, { title: build.iconic('folder') + lychee.locale['MOVE_ALL'], fn: function fn() {
			basicContext.close();contextMenu.move(photoIDs, e, photo.setAlbum, 'UNSORTED');
		} }, { title: build.iconic('trash') + lychee.locale['DELETE_ALL'], fn: function fn() {
			return photo.delete(photoIDs);
		} }];

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.photoTitle = function (albumID, photoID, e) {

	var items = [{ title: build.iconic('pencil') + lychee.locale['RENAME'], fn: function fn() {
			return photo.setTitle([photoID]);
		} }];

	var data = album.json;

	if (data.photos !== false && data.photos.length > 1) {

		items.push({});

		items = items.concat(contextMenu.buildList(data.photos, [photoID], function (a) {
			return lychee.goto(albumID + '/' + a.id);
		}));
	}

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.photoMore = function (photoID, e) {

	// Show download-item when
	// a) Public mode is off
	// b) Downloadable is 1 and public mode is on
	var showDownload = lychee.publicMode === false || album.json && album.json.downloadable && album.json.downloadable === '1' && lychee.publicMode === true;

	var showMedium = photo.json.medium && photo.json.medium !== '' && showDownload;
	var showSmall = photo.json.small && photo.json.small !== '' && showDownload;
	var items = [{ title: build.iconic('fullscreen-enter') + lychee.locale['FULL_PHOTO'], visible: !!lychee.full_photo, fn: function fn() {
			return window.open(photo.getDirectLink());
		} }, { title: build.iconic('cloud-download') + lychee.locale['DOWNLOAD'], visible: !!showDownload, fn: function fn() {
			return photo.getArchive(photoID, 'FULL');
		} }, { title: build.iconic('cloud-download') + lychee.locale['DOWNLOAD_MEDIUM'], visible: !!showMedium, fn: function fn() {
			return photo.getArchive(photoID, 'MEDIUM');
		} }, { title: build.iconic('cloud-download') + lychee.locale['DOWNLOAD_SMALL'], visible: !!showSmall, fn: function fn() {
			return photo.getArchive(photoID, 'SMALL');
		} }];

	basicContext.show(items, e.originalEvent);
};

contextMenu.getSubIDs = function (albums, albumID) {

	var ids = [parseInt(albumID, 10)];
	var a = void 0,
	    id = void 0;

	for (a = 0; a < albums.length; a++) {
		if (parseInt(albums[a].parent_id, 10) === parseInt(albumID, 10)) {
			ids = ids.concat(contextMenu.getSubIDs(albums, albums[a].id));
		}

		if (albums[a].albums && albums[a].albums.length > 0) {
			ids = ids.concat(contextMenu.getSubIDs(albums[a].albums, albumID));
		}
	}

	return ids;
};

contextMenu.move = function (IDs, e, callback) {
	var kind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'UNSORTED';
	var display_root = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;


	var items = [];

	api.post('Albums::get', {}, function (data) {

		addItems = function addItems(albums) {

			// Disable all children
			// It's not possible to move us into them
			var i = void 0,
			    s = void 0;
			var exclude = [];
			for (i = 0; i < IDs.length; i++) {
				var sub = contextMenu.getSubIDs(albums, IDs[i]);
				for (s = 0; s < sub.length; s++) {
					exclude.push(sub[s]);
				}
			}
			if (visible.album()) {
				if (callback !== album.merge) {
					// For merging, don't exclude the parent.
					exclude.push(album.getID().toString());
				}
				if (IDs.length === 1 && IDs[0] === album.getID() && album.getParent() && callback === album.setAlbum) {
					// If moving the current album, exclude its parent.
					exclude.push(album.getParent().toString());
				}
			} else if (visible.photo()) {
				exclude.push(photo.json.album.toString());
			}
			items = items.concat(contextMenu.buildList(albums, exclude.concat(IDs), function (a) {
				return callback(IDs, a.id);
			}));
		};

		if (data.albums && data.albums.length > 0) {

			// items = items.concat(contextMenu.buildList(data.albums, [ album.getID() ], (a) => callback(IDs, a.id))); //photo.setAlbum

			addItems(data.albums);
		}

		if (data.shared_albums && data.shared_albums.length > 0 && lychee.admin) {

			items = items.concat({});
			addItems(data.shared_albums);
		}

		// Show Unsorted when unsorted is not the current album
		if (display_root && album.getID() !== '0' && !visible.albums()) {

			items.unshift({});
			items.unshift({ title: lychee.locale[kind], fn: function fn() {
					return callback(IDs, 0);
				} });
		}

		items.unshift({});
		items.unshift({ title: lychee.locale['NEW_ALBUM'], fn: function fn() {
				return album.add(IDs, callback);
			} });

		basicContext.show(items, e.originalEvent, contextMenu.close);
	});
};

contextMenu.sharePhoto = function (photoID, e) {

	var link = photo.getViewLink(photoID);
	var iconClass = 'ionicons';

	var items = [{ title: '<input readonly id="link" value="' + link + '">', fn: function fn() {}, class: 'basicContext__item--noHover' }, {}, { title: build.iconic('twitter', iconClass) + 'Twitter', fn: function fn() {
			return photo.share(photoID, 'twitter');
		} }, { title: build.iconic('facebook', iconClass) + 'Facebook', fn: function fn() {
			return photo.share(photoID, 'facebook');
		} }, { title: build.iconic('envelope-closed') + 'Mail', fn: function fn() {
			return photo.share(photoID, 'mail');
		} }, { title: build.iconic('dropbox', iconClass) + 'Dropbox', visible: lychee.publicMode === false, fn: function fn() {
			return photo.share(photoID, 'dropbox');
		} }, { title: build.iconic('link-intact') + lychee.locale['DIRECT_LINK'], fn: function fn() {
			return window.open(photo.getDirectLink());
		} }, {}, { title: build.iconic('ban') + lychee.locale['MAKE_PRIVATE'], visible: lychee.publicMode === false, fn: function fn() {
			return photo.setPublic(photoID);
		} }];

	if (lychee.publicMode === true || lychee.api_V2 && !lychee.upload) {
		items.splice(7, 2);
	}

	basicContext.show(items, e.originalEvent);
	$('.basicContext input#link').focus().select();
};

contextMenu.shareAlbum = function (albumID, e) {

	var iconClass = 'ionicons';

	var items = [{ title: '<input readonly id="link" value="' + location.href + '">', fn: function fn() {}, class: 'basicContext__item--noHover' }, {}, { title: build.iconic('twitter', iconClass) + 'Twitter', fn: function fn() {
			return album.share('twitter');
		} }, { title: build.iconic('facebook', iconClass) + 'Facebook', fn: function fn() {
			return album.share('facebook');
		} }, { title: build.iconic('envelope-closed') + 'Mail', fn: function fn() {
			return album.share('mail');
		} }, {}, { title: build.iconic('pencil') + lychee.locale['EDIT_SHARING'], visible: lychee.publicMode === false, fn: function fn() {
			return album.setPublic(albumID, true, e);
		} }, { title: build.iconic('ban') + lychee.locale['MAKE_PRIVATE'], visible: lychee.publicMode === false, fn: function fn() {
			return album.setPublic(albumID, false);
		} }];

	if (lychee.publicMode === true || lychee.api_V2 && !lychee.upload) items.splice(5, 3);

	basicContext.show(items, e.originalEvent);
	$('.basicContext input#link').focus().select();
};

contextMenu.close = function () {

	if (!visible.contextMenu()) return false;

	basicContext.close();

	multiselect.clearSelection();
	if (visible.multiselect()) {
		multiselect.close();
	}
};

/**
 * @description This module takes care of the header.
 */

header = {

	_dom: $('.header')

};

header.dom = function (selector) {

	if (selector == null || selector === '') return header._dom;
	return header._dom.find(selector);
};

header.bind = function () {

	// Event Name
	var eventName = lychee.getEventName();

	header.dom('.header__title').on(eventName, function (e) {

		if ($(this).hasClass('header__title--editable') === false) return false;

		if (visible.photo()) contextMenu.photoTitle(album.getID(), photo.getID(), e);else contextMenu.albumTitle(album.getID(), e);
	});

	header.dom('#button_share').on(eventName, function (e) {
		if (photo.json.public === '1' || photo.json.public === '2' || lychee.api_V2 && !lychee.upload) contextMenu.sharePhoto(photo.getID(), e);else photo.setPublic(photo.getID(), e);
	});

	header.dom('#button_share_album').on(eventName, function (e) {
		if (album.json.public === '1' || lychee.api_V2 && !lychee.upload) contextMenu.shareAlbum(album.getID(), e);else album.setPublic(album.getID(), true, e);
	});

	header.dom('#button_signin').on(eventName, lychee.loginDialog);
	header.dom('#button_settings').on(eventName, leftMenu.open);
	header.dom('#button_info_album').on(eventName, sidebar.toggle);
	header.dom('#button_info').on(eventName, sidebar.toggle);
	header.dom('.button_add').on(eventName, contextMenu.add);
	header.dom('#button_more').on(eventName, function (e) {
		contextMenu.photoMore(photo.getID(), e);
	});
	header.dom('#button_move_album').on(eventName, function (e) {
		contextMenu.move([album.getID()], e, album.setAlbum, 'ROOT', album.getParent() != '');
	});
	header.dom('#button_move').on(eventName, function (e) {
		contextMenu.move([photo.getID()], e, photo.setAlbum);
	});
	header.dom('.header__hostedwith').on(eventName, function () {
		window.open(lychee.website);
	});
	header.dom('#button_trash_album').on(eventName, function () {
		album.delete([album.getID()]);
	});
	header.dom('#button_trash').on(eventName, function () {
		photo.delete([photo.getID()]);
	});
	header.dom('#button_archive').on(eventName, function () {
		album.getArchive(album.getID());
	});
	header.dom('#button_star').on(eventName, function () {
		photo.setStar([photo.getID()]);
	});
	header.dom('#button_back_home').on(eventName, function () {
		if (!album.json.parent_id) {
			lychee.goto();
		} else {
			lychee.goto(album.getParent());
		}
	});
	header.dom('#button_back').on(eventName, function () {
		lychee.goto(album.getID());
	});
	header.dom('#button_fs_album_enter,#button_fs_enter').on(eventName, lychee.fullscreenEnter);
	header.dom('#button_fs_album_exit,#button_fs_exit').on(eventName, lychee.fullscreenExit).hide();

	header.dom('.header__search').on('keyup click', function () {
		search.find($(this).val());
	});
	header.dom('.header__clear').on(eventName, function () {
		header.dom('.header__search').focus();
		search.reset();
	});

	header.bind_back();

	return true;
};

header.bind_back = function () {

	// Event Name
	var eventName = lychee.getEventName();

	header.dom('.header__title').on(eventName, function () {
		if (lychee.landing_page_enable && visible.albums()) {
			window.location.href = '/';
		} else {
			return false;
		}
	});

	header.dom('.header__search').attr('placeholder', lychee.locale["HEADER_SEARCH_PLACEHOLDER"]);
};

header.show = function () {

	lychee.imageview.removeClass('full');
	header.dom().removeClass('header--hidden');

	return true;
};

header.hide = function () {

	if (visible.photo() && !visible.sidebar() && !visible.contextMenu() && basicModal.visible() === false) {

		lychee.imageview.addClass('full');
		header.dom().addClass('header--hidden');

		return true;
	}

	return false;
};

header.setTitle = function () {
	var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Untitled';


	var $title = header.dom('.header__title');
	var html = lychee.html(_templateObject35, title, build.iconic('caret-bottom'));

	$title.html(html);

	return true;
};

header.setMode = function (mode) {

	if (mode === 'albums' && lychee.publicMode === true) mode = 'public';

	switch (mode) {

		case 'public':

			header.dom().removeClass('header--view');
			header.dom('.header__toolbar--albums, .header__toolbar--album, .header__toolbar--photo').removeClass('header__toolbar--visible');
			header.dom('.header__toolbar--public').addClass('header__toolbar--visible');
			if (lychee.public_search) header.dom(".header__toolbar--public").append(header.dom(".header__search"));
			header.dom(".header__hostedwith").html(lychee.locale["HEADER_HOSTEDWITH"]);

			return true;

		case 'albums':

			header.dom().removeClass('header--view');
			header.dom('.header__toolbar--public, .header__toolbar--album, .header__toolbar--photo').removeClass('header__toolbar--visible');
			header.dom('.header__toolbar--albums').addClass('header__toolbar--visible');

			return true;

		case 'album':

			var albumID = album.getID();

			header.dom().removeClass('header--view');
			header.dom('.header__toolbar--public, .header__toolbar--albums, .header__toolbar--photo').removeClass('header__toolbar--visible');
			header.dom('.header__toolbar--album').addClass('header__toolbar--visible');

			// Hide download button when album empty
			if (!album.json || album.json.photos === false) $('#button_archive').hide();else $('#button_archive').show();

			// Hide download button when not logged in and album not downloadable
			if (lychee.publicMode === true && album.json.downloadable === '0') $('#button_archive').hide();

			if (albumID === 's' || albumID === 'f' || albumID === 'r') {
				$('#button_info_album, #button_trash_album, #button_share_album, #button_move_album').hide();
			} else if (albumID === '0') {
				$('#button_info_album, #button_share_album, #button_move_album').hide();
				$('#button_trash_album').show();
			} else {
				$('#button_info_album, #button_trash_album, #button_share_album, #button_move_album').show();
			}

			return true;

		case 'photo':

			header.dom().addClass('header--view');
			header.dom('.header__toolbar--public, .header__toolbar--albums, .header__toolbar--album').removeClass('header__toolbar--visible');
			header.dom('.header__toolbar--photo').addClass('header__toolbar--visible');
			// Hide More menu if empty (see contextMenu.photoMore)
			if (!lychee.full_photo && lychee.publicMode && !(album.json && album.json.downloadable && album.json.downloadable === '1')) {
				$('#button_more').hide();
			}

			return true;

	}

	return false;
};

header.setEditable = function (editable) {

	var $title = header.dom('.header__title');

	// Hide editable icon when not logged in
	if (lychee.publicMode === true || lychee.api_V2 && !lychee.upload) editable = false;

	if (editable) $title.addClass('header__title--editable');else $title.removeClass('header__title--editable');

	return true;
};

/**
 * @description This module is used for bindings.
 */

$(document).ready(function () {

	// Event Name
	var eventName = lychee.getEventName();

	// set CSRF protection (Laravel)
	csrf.bind();

	// Set API error handler
	api.onError = lychee.error;

	// Multiselect
	multiselect.bind();

	// Header
	header.bind();

	// Image View
	lychee.imageview.on(eventName, '.arrow_wrapper--previous', photo.previous).on(eventName, '.arrow_wrapper--next', photo.next).on('click', 'img', photo.update_display_overlay);

	// Keyboard
	Mousetrap.bind(['left'], function () {
		if (visible.photo()) {
			$('#imageview a#previous').click();return false;
		}
	}).bind(['right'], function () {
		if (visible.photo()) {
			$('#imageview a#next').click();return false;
		}
	}).bind(['u'], function () {
		if (!visible.photo()) {
			$('#upload_files').click();return false;
		}
	}).bind(['n'], function () {
		if (!visible.photo()) {
			album.add();return false;
		}
	}).bind(['s'], function () {
		if (visible.photo()) {
			header.dom('#button_star').click();return false;
		} else if (visible.albums()) {
			header.dom('.header__search').focus();return false;
		}
	}).bind(['r'], function () {
		if (visible.album()) {
			album.setTitle(album.getID());return false;
		} else if (visible.photo()) {
			photo.setTitle([photo.getID()]);return false;
		}
	}).bind(['d'], function () {
		if (visible.photo()) {
			photo.setDescription(photo.getID());return false;
		} else if (visible.album()) {
			album.setDescription(album.getID());return false;
		}
	}).bind(['t'], function () {
		if (visible.photo()) {
			photo.editTags([photo.getID()]);return false;
		}
	}).bind(['i'], function () {
		if (!visible.multiselect()) {
			sidebar.toggle();return false;
		}
	}).bind(['command+backspace', 'ctrl+backspace'], function () {
		if (visible.photo() && basicModal.visible() === false) {
			photo.delete([photo.getID()]);return false;
		} else if (visible.album() && basicModal.visible() === false) {
			album.delete([album.getID()]);return false;
		}
	}).bind(['command+a', 'ctrl+a'], function () {
		if (visible.album() && basicModal.visible() === false) {
			multiselect.selectAll();return false;
		} else if (visible.albums() && basicModal.visible() === false) {
			multiselect.selectAll();return false;
		}
	}).bind(['o'], function () {
		if (visible.photo()) {
			photo.update_overlay_type();return false;
		}
	}).bind(['f'], function () {
		if (visible.album() || visible.photo()) {
			lychee.fullscreenToggle();return false;
		}
	});

	Mousetrap.bindGlobal('enter', function () {
		if (basicModal.visible() === true) basicModal.action();
	});

	Mousetrap.bindGlobal(['esc', 'command+up'], function () {
		if (basicModal.visible() === true) basicModal.cancel();else if (visible.leftMenu()) leftMenu.close();else if (visible.contextMenu()) contextMenu.close();else if (visible.photo()) lychee.goto(album.getID());else if (visible.album() && !album.json.parent_id) lychee.goto();else if (visible.album()) lychee.goto(album.getParent());else if (visible.albums() && header.dom('.header__search').val().length !== 0) search.reset();
		return false;
	});

	if (eventName === 'touchend') {

		$(document)

		// Fullscreen on mobile
		.on('touchend', '#imageview #image', function (e) {
			if (swipe.obj == null || swipe.offset >= -5 && swipe.offset <= 5) {
				if (visible.header()) header.hide(e);else header.show();
			}
		})

		// Swipe on mobile
		.swipe().on('swipeStart', function () {
			if (visible.photo()) swipe.start($('#imageview #image'));
		}).swipe().on('swipeMove', function (e) {
			if (visible.photo()) swipe.move(e.swipe);
		}).swipe().on('swipeEnd', function (e) {
			if (visible.photo()) swipe.stop(e.swipe, photo.previous, photo.next);
		});
	}

	// Document
	$(document)

	// Navigation
	.on('click', '.album', function (e) {
		multiselect.albumClick(e, $(this));
	}).on('click', '.photo', function (e) {
		multiselect.photoClick(e, $(this));
	})

	// Context Menu
	.on('contextmenu', '.photo', function (e) {
		multiselect.photoContextMenu(e, $(this));
	}).on('contextmenu', '.album', function (e) {
		multiselect.albumContextMenu(e, $(this));
	})

	// Upload
	.on('change', '#upload_files', function () {
		basicModal.close();upload.start.local(this.files);
	})

	// Drag and Drop upload
	.on('dragover', function () {
		return false;
	}, false).on('drop', function (e) {

		// Close open overlays or views which are correlating with the upload
		if (visible.photo()) lychee.goto(album.getID());
		if (visible.contextMenu()) contextMenu.close();

		// Detect if dropped item is a file or a link
		if (e.originalEvent.dataTransfer.files.length > 0) upload.start.local(e.originalEvent.dataTransfer.files);else if (e.originalEvent.dataTransfer.getData('Text').length > 3) upload.start.url(e.originalEvent.dataTransfer.getData('Text'));

		return false;
	})

	// Fullscreen
	.on('fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange', lychee.fullscreenUpdate);

	$(window)
	// resize
	.on('resize', function () {
		if (visible.album() || visible.search()) view.album.content.justify();
		if (visible.photo()) view.photo.onresize();
	});

	// Init
	lychee.init();
});

/**
 * @description This module is used for the context menu.
 */

leftMenu = {

	_dom: $('.leftMenu')

};

leftMenu.dom = function (selector) {

	if (selector == null || selector === '') return leftMenu._dom;
	return leftMenu._dom.find(selector);
};

leftMenu.build = function () {
	var html = lychee.html(_templateObject36, lychee.locale['CLOSE'], lychee.locale['SETTINGS']);
	if (lychee.api_V2) {
		html += lychee.html(_templateObject37, build.iconic('person'), lychee.locale['USERS'], build.iconic('cloud'), lychee.locale['SHARING']);
	}
	html += lychee.html(_templateObject38, build.iconic('align-left'), lychee.locale['LOGS'], build.iconic('wrench'), lychee.locale['DIAGNOSTICS'], build.iconic('info'), lychee.locale['ABOUT_LYCHEE'], build.iconic('account-logout'), lychee.locale['SIGN_OUT']);
	leftMenu._dom.html(html);
};

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
leftMenu.open = function () {
	leftMenu._dom.addClass('leftMenu__visible');
	$('.content').addClass('leftMenu__open');
	header.dom('.header__title').addClass('leftMenu__open');
	loadingBar.dom().addClass('leftMenu__open');
};

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
leftMenu.close = function () {
	leftMenu._dom.removeClass('leftMenu__visible');
	$('.content').removeClass('leftMenu__open');
	header.dom('.header__title').removeClass('leftMenu__open');
	loadingBar.dom().removeClass('leftMenu__open');

	multiselect.bind();
	lychee.load();
};

leftMenu.bind = function () {

	// Event Name
	var eventName = lychee.getEventName();

	leftMenu.dom('#button_settings_close').on(eventName, leftMenu.close);
	leftMenu.dom('#text_settings_close').on(eventName, leftMenu.close);
	leftMenu.dom('#button_settings_open').on(eventName, settings.open);
	leftMenu.dom('#button_signout').on(eventName, lychee.logout);
	leftMenu.dom('#button_logs').on(eventName, leftMenu.Logs);
	leftMenu.dom('#button_diagnostics').on(eventName, leftMenu.Diagnostics);
	leftMenu.dom('#button_about').on(eventName, lychee.aboutDialog);

	if (lychee.api_V2) {
		leftMenu.dom('#button_users').on(eventName, leftMenu.Users);
		leftMenu.dom('#button_sharing').on(eventName, leftMenu.Sharing);
	}

	return true;
};

leftMenu.Logs = function () {
	if (lychee.api_V2) {
		view.logs.init();
	} else {
		window.open(lychee.logs());
	}
};

leftMenu.Diagnostics = function () {
	if (lychee.api_V2) {
		view.diagnostics.init();
	} else {
		window.open(lychee.diagnostics());
	}
};

leftMenu.Users = function () {
	users.list();
};

leftMenu.Sharing = function () {
	sharing.list();
};

/**
 * @description This module is used to show and hide the loading bar.
 */

loadingBar = {

	status: null,
	_dom: $('#loading')

};

loadingBar.dom = function (selector) {

	if (selector == null || selector === '') return loadingBar._dom;
	return loadingBar._dom.find(selector);
};

loadingBar.show = function (status, errorText) {

	if (status === 'error') {

		// Set status
		loadingBar.status = 'error';

		// Parse text
		if (errorText) errorText = errorText.replace('<br>', '');
		if (!errorText) errorText = lychee.locale['ERROR_TEXT'];

		// Move header down
		if (visible.header()) header.dom().addClass('header--error');

		// Modify loading
		loadingBar.dom().removeClass('loading uploading error success').html('<h1>' + lychee.locale['ERROR'] + (': <span>' + errorText + '</span></h1>')).addClass(status).show();

		// Set timeout
		clearTimeout(loadingBar._timeout);
		loadingBar._timeout = setTimeout(function () {
			return loadingBar.hide(true);
		}, 3000);

		return true;
	}

	if (status === 'success') {
		// Set status
		loadingBar.status = 'success';

		// Parse text
		if (errorText) errorText = errorText.replace('<br>', '');
		if (!errorText) errorText = lychee.locale['ERROR_TEXT'];

		// Move header down
		if (visible.header()) header.dom().addClass('header--error');

		// Modify loading
		loadingBar.dom().removeClass('loading uploading error success').html('<h1>' + lychee.locale['SUCCESS'] + (': <span>' + errorText + '</span></h1>')).addClass(status).show();

		// Set timeout
		clearTimeout(loadingBar._timeout);
		loadingBar._timeout = setTimeout(function () {
			return loadingBar.hide(true);
		}, 2000);

		return true;
	}

	if (loadingBar.status === null) {

		// Set status
		loadingBar.status = lychee.locale['LOADING'];

		// Set timeout
		clearTimeout(loadingBar._timeout);
		loadingBar._timeout = setTimeout(function () {

			// Move header down
			if (visible.header()) header.dom().addClass('header--loading');

			// Modify loading
			loadingBar.dom().removeClass('loading uploading error').html('').addClass('loading').show();
		}, 1000);

		return true;
	}
};

loadingBar.hide = function (force) {

	if (loadingBar.status !== 'error' && loadingBar.status !== 'success' && loadingBar.status != null || force) {

		// Remove status
		loadingBar.status = null;

		// Move header up
		header.dom().removeClass('header--error header--loading');

		// Set timeout
		clearTimeout(loadingBar._timeout);
		setTimeout(function () {
			return loadingBar.dom().hide();
		}, 300);
	}
};

/**
 * @description This module provides the basic functions of Lychee.
 */

lychee = {

	title: document.title,
	version: '3.2.15-alpha',
	versionCode: '030215-alpha', // not really needed anymore

	updatePath: 'https://LycheeOrg.github.io/update.json',
	updateURL: 'https://github.com/LycheeOrg/Lychee/releases',
	website: 'https://LycheeOrg.github.io',

	publicMode: false,
	viewMode: false,
	full_photo: true,
	api_V2: false, // enable api_V2
	sub_albums: false, // enable sub_albums features
	admin: false, // enable admin mode (multi-user)
	upload: false, // enable possibility to upload (multi-user)
	lock: false, // locked user (multi-user)
	layout: '1', // 0: Use default, "square" layout. 1: Use Flickr-like "justified" layout. 2: Use Google-like "unjustified" layout
	image_overlay: false, // display Overlay like in Lightroom
	image_overlay_default: false, // display Overlay like in Lightroom by default
	image_overlay_type: 'exif', // current Overlay display type
	image_overlay_type_default: 'exif', // image overlay type default type
	landing_page_enabled: false, // is landing page enabled ?

	checkForUpdates: '1',
	update_json: 0,
	update_available: false,
	sortingPhotos: '',
	sortingAlbums: '',
	location: '',

	lang: '',
	lang_available: {},

	dropbox: false,
	dropboxKey: '',

	content: $('.content'),
	imageview: $('#imageview'),

	locale: {}
};

lychee.diagnostics = function () {
	if (lychee.api_V2) {
		return '/Diagnostics';
	} else {
		return 'plugins/Diagnostics/';
	}
};

lychee.logs = function () {
	if (lychee.api_V2) {
		return '/Logs';
	} else {
		return 'plugins/Log/';
	}
};

lychee.aboutDialog = function () {

	var msg = lychee.html(_templateObject39, lychee.version, lychee.updateURL, lychee.locale['UPDATE_AVAILABLE'], lychee.locale['ABOUT_SUBTITLE'], lychee.website, lychee.locale['ABOUT_DESCRIPTION']);

	basicModal.show({
		body: msg,
		buttons: {
			cancel: {
				title: lychee.locale['CLOSE'],
				fn: basicModal.close
			}
		}
	});

	if (lychee.checkForUpdates === '1') lychee.getUpdate();
};

lychee.init = function () {

	api.post('Session::init', {}, function (data) {

		lychee.api_V2 = data.api_V2 || false;

		if (data.status === 0) {

			// No configuration

			lychee.setMode('public');

			header.dom().hide();
			lychee.content.hide();
			$('body').append(build.no_content('cog'));
			settings.createConfig();

			return true;
		}

		lychee.sub_albums = data.sub_albums || false;
		lychee.update_json = data.update_json;
		lychee.update_available = data.update_available;
		lychee.versionCode = data.config.version.slice(7, data.config.version);
		lychee.landing_page_enable = data.config.landing_page_enable && data.config.landing_page_enable === '1' || false;

		if (lychee.api_V2) {
			lychee.versionCode = data.config.version;
			var digits = lychee.versionCode.match(/.{1,2}/g);
			lychee.version = parseInt(digits[0]).toString() + '.' + parseInt(digits[1]).toString() + '.' + parseInt(digits[2]).toString();
		}

		// we copy the locale that exists only.
		// This ensure forward and backward compatibility.
		// e.g. if the front localization is unfished in a language
		// or if we need to change some locale string
		for (var key in data.locale) {
			lychee.locale[key] = data.locale[key];
		}

		// Check status
		// 0 = No configuration
		// 1 = Logged out
		// 2 = Logged in
		if (data.status === 2) {

			// Logged in

			lychee.sortingPhotos = data.config.sortingPhotos || '';
			lychee.sortingAlbums = data.config.sortingAlbums || '';
			lychee.dropboxKey = data.config.dropboxKey || '';
			lychee.location = data.config.location || '';
			lychee.checkForUpdates = data.config.checkForUpdates || '1';
			lychee.lang = data.config.lang || '';
			lychee.lang_available = data.config.lang_available || {};
			lychee.layout = data.config.layout || '1';
			lychee.image_overlay_default = data.config.image_overlay && data.config.image_overlay === '1' || false;
			lychee.image_overlay = lychee.image_overlay_default;
			lychee.image_overlay_type = !data.config.image_overlay_type ? 'exif' : data.config.image_overlay_type;
			lychee.image_overlay_type_default = lychee.image_overlay_type;
			lychee.default_license = data.config.default_license || 'none';
			lychee.css = data.config.css || '';

			lychee.upload = !lychee.api_V2;
			lychee.admin = !lychee.api_V2;

			// leftMenu
			leftMenu.build();
			leftMenu.bind();

			if (lychee.api_V2) {
				lychee.upload = data.admin || data.upload;
				lychee.admin = data.admin;
				lychee.lock = data.lock;
				lychee.setMode('logged_in');
			}

			// Show dialog when there is no username and password
			if (data.config.login === false) settings.createLogin();
		} else if (data.status === 1) {

			// Logged out

			lychee.sortingPhotos = data.config.sortingPhotos || '';
			lychee.sortingAlbums = data.config.sortingAlbums || '';
			lychee.full_photo = data.config.full_photo == null || data.config.full_photo === '1';
			lychee.checkForUpdates = data.config.checkForUpdates || '1';
			lychee.layout = data.config.layout || '1';
			lychee.public_search = data.config.public_search && data.config.public_search === '1' || false;
			lychee.image_overlay = data.config.image_overlay && data.config.image_overlay === '1' || false;
			lychee.image_overlay_type = !data.config.image_overlay_type ? 'exif' : data.config.image_overlay_type;
			lychee.image_overlay_type_default = lychee.image_overlay_type;

			// console.log(lychee.full_photo);
			lychee.setMode('public');
		} else {
			// should not happen.
		}

		$(window).bind('popstate', lychee.load);
		lychee.load();
	});
};

lychee.login = function (data) {

	var user = data.username;
	var password = data.password;

	var params = {
		user: user,
		password: password
	};

	api.post('Session::login', params, function (data) {

		if (data === true) {

			window.location.reload();
		} else {

			// Show error and reactive button
			basicModal.error('password');
		}
	});
};

lychee.loginDialog = function () {

	var msg = lychee.html(_templateObject40, lychee.locale['USERNAME'], lychee.locale['PASSWORD'], lychee.version, lychee.updateURL, lychee.locale['UPDATE_AVAILABLE']);

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: lychee.locale['SIGN_IN'],
				fn: lychee.login
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: basicModal.close
			}
		}
	});

	if (lychee.checkForUpdates === '1') lychee.getUpdate();
};

lychee.logout = function () {

	api.post('Session::logout', {}, function () {
		window.location.reload();
	});
};

lychee.goto = function () {
	var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


	url = '#' + url;

	history.pushState(null, null, url);
	lychee.load();
};

lychee.load = function () {

	var albumID = '';
	var photoID = '';
	var hash = document.location.hash.replace('#', '').split('/');

	$('.no_content').remove();
	contextMenu.close();
	multiselect.close();

	if (hash[0] != null) albumID = hash[0];
	if (hash[1] != null) photoID = hash[1];

	if (albumID && photoID) {

		// Trash data
		photo.json = null;

		// Show Photo
		if (lychee.content.html() === '' || header.dom('.header__search').length && header.dom('.header__search').val().length !== 0) {
			lychee.content.hide();
			album.load(albumID, true);
		}
		photo.load(photoID, albumID);
	} else if (albumID) {

		// Trash data
		photo.json = null;

		// Show Album
		if (visible.photo()) view.photo.hide();
		if (visible.sidebar() && (albumID === '0' || albumID === 'f' || albumID === 's' || albumID === 'r')) sidebar.toggle();
		if (album.json && albumID === album.json.id) view.album.title();else album.load(albumID);
	} else {

		// Trash albums.json when filled with search results
		if (search.hash != null) {
			albums.json = null;
			search.hash = null;
		}

		// Trash data
		album.json = null;
		photo.json = null;

		// Hide sidebar
		if (visible.sidebar()) sidebar.toggle();

		// Show Albums
		if (visible.photo()) view.photo.hide();
		lychee.content.show();
		albums.load();
	}
};

lychee.getUpdate = function () {

	console.log(lychee.update_available);
	console.log(lychee.update_json);

	if (lychee.update_json !== 0) {
		if (lychee.update_available) {
			$('.version span').show();
		}
	} else {
		var success = function success(data) {
			if (data.lychee.version > parseInt(lychee.versionCode)) $('.version span').show();
		};

		$.ajax({
			url: lychee.updatePath,
			success: success
		});
	}
};

lychee.setTitle = function (title, editable) {

	document.title = lychee.title + ' - ' + title;

	header.setEditable(editable);
	header.setTitle(title);
};

lychee.setMode = function (mode) {

	if (lychee.lock) {
		$('#button_settings_open').remove();
	}
	if (!lychee.upload) {
		$('#button_trash_album, .button_add, #button_move_album').remove();
		$('#button_trash, #button_move, #button_star, #button_sharing').remove();

		$('#button_share, #button_share_album').removeClass('button--eye').addClass('button--share').find('use').attr('xlink:href', '#share');

		$(document).off('click', '.header__title--editable').off('touchend', '.header__title--editable').off('contextmenu', '.photo').off('contextmenu', '.album').off('drop');

		Mousetrap.unbind(['u']).unbind(['s']).unbind(['n']).unbind(['r']).unbind(['d']).unbind(['t']).unbind(['command+backspace', 'ctrl+backspace']).unbind(['command+a', 'ctrl+a']);
	}
	if (!lychee.admin) {
		$('#button_users, #button_logs, #button_diagnostics').remove();
	}

	if (mode === 'logged_in') return;

	$('#button_settings, .header__divider, .leftMenu').remove();

	if (mode === 'public') {

		lychee.publicMode = true;
	} else if (mode === 'view') {

		Mousetrap.unbind(['esc', 'command+up']);

		$('#button_back, a#next, a#previous').remove();
		$('.no_content').remove();

		lychee.publicMode = true;
		lychee.viewMode = true;
	}

	// just mak
	header.bind_back();
};

lychee.animate = function (obj, animation) {

	var animations = [['fadeIn', 'fadeOut'], ['contentZoomIn', 'contentZoomOut']];

	if (!obj.jQuery) obj = $(obj);

	for (var i = 0; i < animations.length; i++) {
		for (var x = 0; x < animations[i].length; x++) {
			if (animations[i][x] == animation) {
				obj.removeClass(animations[i][0] + ' ' + animations[i][1]).addClass(animation);
				return true;
			}
		}
	}

	return false;
};

lychee.retinize = function () {
	var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


	var extention = path.split('.').pop();
	var isPhoto = extention !== 'svg';

	if (isPhoto === true) {

		path = path.replace(/\.[^/.]+$/, '');
		path = path + '@2x' + '.' + extention;
	}

	return {
		path: path,
		isPhoto: isPhoto
	};
};

lychee.loadDropbox = function (callback) {

	if (lychee.dropbox === false && lychee.dropboxKey != null && lychee.dropboxKey !== '') {

		loadingBar.show();

		var g = document.createElement('script');
		var s = document.getElementsByTagName('script')[0];

		g.src = 'https://www.dropbox.com/static/api/1/dropins.js';
		g.id = 'dropboxjs';
		g.type = 'text/javascript';
		g.async = 'true';
		g.setAttribute('data-app-key', lychee.dropboxKey);
		g.onload = g.onreadystatechange = function () {
			var rs = this.readyState;
			if (rs && rs !== 'complete' && rs !== 'loaded') return;
			lychee.dropbox = true;
			loadingBar.hide();
			callback();
		};
		s.parentNode.insertBefore(g, s);
	} else if (lychee.dropbox === true && lychee.dropboxKey != null && lychee.dropboxKey !== '') {

		callback();
	} else {

		settings.setDropboxKey(callback);
	}
};

lychee.getEventName = function () {

	var touchendSupport = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && 'ontouchend' in document.documentElement;
	return touchendSupport === true ? 'touchend' : 'click';
};

lychee.escapeHTML = function () {
	var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


	// Ensure that html is a string
	html += '';

	// Escape all critical characters
	html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/`/g, '&#96;');

	return html;
};

lychee.html = function (literalSections) {

	// Use raw literal sections: we don’t want
	// backslashes (\n etc.) to be interpreted
	var raw = literalSections.raw;
	var result = '';

	for (var _len = arguments.length, substs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		substs[_key - 1] = arguments[_key];
	}

	substs.forEach(function (subst, i) {

		// Retrieve the literal section preceding
		// the current substitution
		var lit = raw[i];

		// If the substitution is preceded by a dollar sign,
		// we escape special characters in it
		if (lit.slice(-1) === '$') {
			subst = lychee.escapeHTML(subst);
			lit = lit.slice(0, -1);
		}

		result += lit;
		result += subst;
	});

	// Take care of last literal section
	// (Never fails, because an empty template string
	// produces one literal section, an empty string)
	result += raw[raw.length - 1];

	return result;
};

lychee.error = function (errorThrown) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';


	console.error({
		description: errorThrown,
		params: params,
		response: data
	});

	loadingBar.show('error', errorThrown);
};

lychee.fullscreenEnter = function () {
	var elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		/* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		/* Chrome, Safari and Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		/* IE/Edge */
		elem.msRequestFullscreen();
	}
};

lychee.fullscreenExit = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
		/* Firefox */
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
		/* Chrome, Safari and Opera */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		/* IE/Edge */
		document.msExitFullscreen();
	}
};

lychee.fullscreenToggle = function () {
	if (lychee.fullscreenStatus()) {
		lychee.fullscreenExit();
	} else {
		lychee.fullscreenEnter();
	}
};

lychee.fullscreenStatus = function () {
	var elem = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
	return elem ? true : false;
};

lychee.fullscreenUpdate = function () {
	if (lychee.fullscreenStatus()) {
		$('#button_fs_album_enter,#button_fs_enter').hide();
		$('#button_fs_album_exit,#button_fs_exit').show();
	} else {
		$('#button_fs_album_enter,#button_fs_enter').show();
		$('#button_fs_album_exit,#button_fs_exit').hide();
	}
};

lychee.locale = {

	'USERNAME': 'username',
	'PASSWORD': 'password',
	'ENTER': 'Enter',
	'CANCEL': 'Cancel',
	'SIGN_IN': 'Sign In',
	'CLOSE': 'Close',
	'ABOUT': 'About',

	'SETTINGS': 'Settings',
	'USERS': 'Users',
	'SHARING': 'Sharing',
	'CHANGE_LOGIN': 'Change Login',
	'CHANGE_SORTING': 'Change Sorting',
	'SET_DROPBOX': 'Set Dropbox',
	'ABOUT_LYCHEE': 'About Lychee',
	'DIAGNOSTICS': 'Diagnostics',
	'LOGS': 'Show Logs',
	'CLEAN_LOGS': 'Clean Noise',
	'SIGN_OUT': 'Sign Out',
	'UPDATE_AVAILABLE': 'Update available!',
	'DEFAULT_LICENSE': 'Default License for new uploads:',
	'SET_LICENSE': 'Set License',
	'SET_OVERLAY_TYPE': 'Set Overlay',
	'SAVE_RISK': 'Save my modifications, I accept the Risk!',
	'MORE': 'More',

	'SMART_ALBUMS': 'Smart albums',
	'SHARED_ALBUMS': 'Shared albums',
	'ALBUMS': 'Albums',
	'PHOTOS': 'Pictures',

	'RENAME': 'Rename',
	'RENAME_ALL': 'Rename All',
	'MERGE': 'Merge',
	'MERGE_ALL': 'Merge All',
	'MAKE_PUBLIC': 'Make Public',
	'SHARE_ALBUM': 'Share Album',
	'SHARE_PHOTO': 'Share Photo',
	'SHARE_WITH': 'Share with...',
	'DOWNLOAD_ALBUM': 'Download Album',
	'ABOUT_ALBUM': 'About Album',
	'DELETE_ALBUM': 'Delete Album',
	'FULLSCREEN_ENTER': 'Enter Fullscreen',
	'FULLSCREEN_EXIT': 'Exit Fullscreen',

	'DELETE_ALBUM_QUESTION': 'Delete Album and Photos',
	'KEEP_ALBUM': 'Keep Album',
	'DELETE_ALBUM_CONFIRMATION_1': 'Are you sure you want to delete the album',
	'DELETE_ALBUM_CONFIRMATION_2': 'and all of the photos it contains? This action can\'t be undone!',

	'DELETE_ALBUMS_QUESTION': 'Delete Albums and Photos',
	'KEEP_ALBUMS': 'Keep Albums',
	'DELETE_ALBUMS_CONFIRMATION_1': 'Are you sure you want to delete all',
	'DELETE_ALBUMS_CONFIRMATION_2': 'selected albums and all of the photos they contain? This action can\'t be undone!',

	'DELETE_UNSORTED_CONFIRM': 'Are you sure you want to delete all photos from \'Unsorted\'?<br>This action can\'t be undone!',
	'CLEAR_UNSORTED': 'Clear Unsorted',
	'KEEP_UNSORTED': 'Keep Unsorted',

	'EDIT_SHARING': 'Edit Sharing',
	'MAKE_PRIVATE': 'Make Private',

	'CLOSE_ALBUM': 'Close Album',
	'CLOSE_PHOTO': 'Close Photo',

	'ADD': 'Add',
	'MOVE': 'Move',
	'MOVE_ALL': 'Move All',
	'DUPLICATE': 'Duplicate',
	'DUPLICATE_ALL': 'Duplicate All',
	'COPY_TO': 'Copy to...',
	'COPY_ALL_TO': 'Copy All to...',
	'DELETE': 'Delete',
	'DELETE_ALL': 'Delete All',
	'DOWNLOAD': 'Download original size',
	'DOWNLOAD_MEDIUM': 'Download medium size',
	'DOWNLOAD_SMALL': 'Download small size',
	'UPLOAD_PHOTO': 'Upload Photo',
	'IMPORT_LINK': 'Import from Link',
	'IMPORT_DROPBOX': 'Import from Dropbox',
	'IMPORT_SERVER': 'Import from Server',
	'NEW_ALBUM': 'New Album',

	'TITLE_NEW_ALBUM': 'Enter a title for the new album:',
	'UNTITLED': 'Untilted',
	'UNSORTED': 'Unsorted',
	'STARRED': 'Starred',
	'RECENT': 'Recent',
	'PUBLIC': 'Public',
	'NUM_PHOTOS': 'Photos',

	'CREATE_ALBUM': 'Create Album',

	'STAR_PHOTO': 'Star Photo',
	'STAR': 'Star',
	'STAR_ALL': 'Star All',
	'TAGS': 'Tags',
	'TAGS_ALL': 'Tags All',
	'UNSTAR_PHOTO': 'Unstar Photo',

	'FULL_PHOTO': 'Full Photo',
	'ABOUT_PHOTO': 'About Photo',
	'DIRECT_LINK': 'Direct Link',

	'ALBUM_ABOUT': 'About',
	'ALBUM_BASICS': 'Basics',
	'ALBUM_TITLE': 'Title',
	'ALBUM_NEW_TITLE': 'Enter a new title for this album:',
	'ALBUMS_NEW_TITLE_1': 'Enter a title for all',
	'ALBUMS_NEW_TITLE_2': 'selected albums:',
	'ALBUM_SET_TITLE': 'Set Title',
	'ALBUM_DESCRIPTION': 'Description',
	'ALBUM_NEW_DESCRIPTION': 'Enter a new description for this album:',
	'ALBUM_SET_DESCRIPTION': 'Set Description',
	'ALBUM_ALBUM': 'Album',
	'ALBUM_CREATED': 'Created',
	'ALBUM_IMAGES': 'Images',
	'ALBUM_VIDEOS': 'Videos',
	'ALBUM_SHARING': 'Share',
	'ALBUM_OWNER': 'Owner',
	'ALBUM_SHR_YES': 'YES',
	'ALBUM_SHR_NO': 'No',
	'ALBUM_PUBLIC': 'Public',
	'ALBUM_HIDDEN': 'Hidden',
	'ALBUM_HIDDEN_EXPL': 'Only people with the direct link can view this album.',
	'ALBUM_DOWNLOADABLE': 'Downloadable',
	'ALBUM_DOWNLOADABLE_EXPL': 'Visitors of your Lychee can download this album.',
	'ALBUM_PASSWORD': 'Password',
	'ALBUM_PASSWORD_PROT': 'Password protected',
	'ALBUM_PASSWORD_PROT_EXPL': 'Album only accessible with a valid password.',
	'ALBUM_PASSWORD_REQUIRED': 'This album is protected by a password. Enter the password below to view the photos of this album:',
	'ALBUM_MERGE_1': 'Are you sure you want to merge the album',
	'ALBUM_MERGE_2': 'into the album',
	'ALBUMS_MERGE': 'Are you sure you want to merge all selected albums into the album',
	'MERGE_ALBUM': 'Merge Albums',
	'DONT_MERGE': "Don't Merge",
	'ALBUM_MOVE_1': 'Are you sure you want to move the album',
	'ALBUM_MOVE_2': 'into the album',
	'ALBUMS_MOVE': 'Are you sure you want to move all selected albums into the album',
	'MOVE_ALBUMS': "Move Albums",
	'NOT_MOVE_ALBUMS': "Don't Move",
	'ROOT': "Root",
	'ALBUM_REUSE': "Reuse",
	'ALBUM_LICENSE': 'License',
	'ALBUM_SET_LICENSE': 'Set License',
	'ALBUM_LICENSE_HELP': 'Need help choosing?',
	'ALBUM_LICENSE_NONE': 'None',
	'ALBUM_RESERVED': 'All Rights Reserved',

	'PHOTO_ABOUT': 'About',
	'PHOTO_BASICS': 'Basics',
	'PHOTO_TITLE': 'Title',
	'PHOTO_NEW_TITLE': 'Enter a new title for this photo:',
	'PHOTO_SET_TITLE': 'Set Title',
	'PHOTO_UPLOADED': 'Uploaded',
	'PHOTO_DESCRIPTION': 'Description',
	'PHOTO_NEW_DESCRIPTION': 'Enter a new description for this photo:',
	'PHOTO_SET_DESCRIPTION': 'Set Description',
	'PHOTO_NEW_LICENSE': 'Add a License',
	'PHOTO_SET_LICENSE': 'Set License',
	'PHOTO_REUSE': 'Reuse',
	'PHOTO_LICENSE': 'License',
	'PHOTO_LICENSE_HELP': 'Need help choosing?',
	'PHOTO_LICENSE_NONE': 'None',
	'PHOTO_RESERVED': 'All Rights Reserved',
	'PHOTO_IMAGE': 'Image',
	'PHOTO_VIDEO': 'Video',
	'PHOTO_SIZE': 'Size',
	'PHOTO_FORMAT': 'Format',
	'PHOTO_RESOLUTION': 'Resolution',
	'PHOTO_DURATION': 'Duration',
	'PHOTO_FPS': 'Frame rate',
	'PHOTO_TAGS': 'Tags',
	'PHOTO_NOTAGS': 'No Tags',
	'PHOTO_NEW_TAGS': 'Enter your tags for this photo. You can add multiple tags by separating them with a comma:',
	'PHOTO_NEW_TAGS_1': 'Enter your tags for all',
	'PHOTO_NEW_TAGS_2': 'selected photos. Existing tags will be overwritten. You can add multiple tags by separating them with a comma:',
	'PHOTO_SET_TAGS': 'Set Tags',
	'PHOTO_CAMERA': 'Camera',
	'PHOTO_CAPTURED': 'Captured',
	'PHOTO_MAKE': 'Make',
	'PHOTO_TYPE': 'Type/Model',
	'PHOTO_LENS': 'Lens',
	'PHOTO_SHUTTER': 'Shutter Speed',
	'PHOTO_APERTURE': 'Aperture',
	'PHOTO_FOCAL': 'Focal Length',
	'PHOTO_ISO': 'ISO',
	'PHOTO_SHARING': 'Sharing',
	'PHOTO_SHR_PLUBLIC': 'Public',
	'PHOTO_SHR_ALB': 'Yes (Album)',
	'PHOTO_SHR_PHT': 'Yes (Photo)',
	'PHOTO_SHR_NO': 'No',
	'PHOTO_DELETE': 'Delete Photo',
	'PHOTO_KEEP': 'Keep Photo',
	'PHOTO_DELETE_1': 'Are you sure you want to delete the photo',
	'PHOTO_DELETE_2': '? This action can\'t be undone!',
	'PHOTO_DELETE_ALL_1': 'Are you sure you want to delete all',
	'PHOTO_DELETE_ALL_2': 'selected photo? This action can\'t be undone!',
	'PHOTOS_NEW_TITLE_1': 'Enter a title for all',
	'PHOTOS_NEW_TITLE_2': 'selected photos:',
	'PHOTO_MAKE_PRIVATE_ALBUM': 'This photo is located in a public album. To make this photo private or public, edit the visibility of the associated album.',
	'PHOTO_SHOW_ALBUM': 'Show Album',

	'LOADING': 'Loading',
	'ERROR': 'Error',
	'ERROR_TEXT': 'Whoops, it looks like something went wrong. Please reload the site and try again!',
	'ERROR_DB_1': 'Unable to connect to host database because access was denied. Double-check your host, username and password and ensure that access from your current location is permitted.',
	'ERROR_DB_2': 'Unable to create the database. Double-check your host, username and password and ensure that the specified user has the rights to modify and add content to the database.',
	'ERROR_CONFIG_FILE': "Unable to save this configuration. Permission denied in <b>'data/'</b>. Please set the read, write and execute rights for others in <b>'data/'</b> and <b>'uploads/'</b>. Take a look at the readme for more information.",
	'ERROR_UNKNOWN': 'Something unexpected happened. Please try again and check your installation and server. Take a look at the readme for more information.',
	'ERROR_LOGIN': 'Unable to save login. Please try again with another username and password!',
	'SUCCESS': 'OK',
	'RETRY': 'Retry',

	'SETTINGS_WARNING': 'Changing these advanced settings can be harmful to the stability, security and performance of this application. You should only modify them if you are sure of what you are doing.',
	'SETTINGS_SUCCESS_LOGIN': 'Login Info updated.',
	'SETTINGS_SUCCESS_SORT': 'Sorting order updated.',
	'SETTINGS_SUCCESS_DROPBOX': 'Dropbox Key updated.',
	'SETTINGS_SUCCESS_LANG': 'Language updated',
	'SETTINGS_SUCCESS_LAYOUT': 'Layout updated',
	'SETTINGS_SUCCESS_IMAGE_OVERLAY': 'EXIF Overlay setting updated',
	'SETTINGS_SUCCESS_PUBLIC_SEARCH': 'Public search updated',
	'SETTINGS_SUCCESS_LICENSE': 'Default license updated',
	'SETTINGS_SUCCESS_CSS': 'CSS updated',
	'SETTINGS_SUCCESS_UPDATE': 'Settings updated with success',

	'DB_INFO_TITLE': 'Enter your database connection details below:',
	'DB_INFO_HOST': 'Database Host (optional)',
	'DB_INFO_USER': 'Database Username',
	'DB_INFO_PASSWORD': 'Database Password',
	'DB_INFO_TEXT': 'Lychee will create its own database. If required, you can enter the name of an existing database instead:',
	'DB_NAME': 'Database Name (optional)',
	'DB_PREFIX': 'Table prefix (optional)',
	'DB_CONNECT': 'Connect',

	'LOGIN_TITLE': 'Enter a username and password for your installation:',
	'LOGIN_USERNAME': 'New Username',
	'LOGIN_PASSWORD': 'New Password',
	'LOGIN_PASSWORD_CONFIRM': 'Confirm Password',
	'LOGIN_CREATE': 'Create Login',

	'PASSWORD_TITLE': 'Enter your current username and password:',
	'USERNAME_CURRENT': 'Current Username',
	'PASSWORD_CURRENT': 'Current Password',
	'PASSWORD_TEXT': 'Your username and password will be changed to the following:',
	'PASSWORD_CHANGE': 'Change Login',

	'EDIT_SHARING_TITLE': 'Edit Sharing',
	'EDIT_SHARING_TEXT': 'The sharing-properties of this album will be changed to the following:',
	'SHARE_ALBUM_TEXT': 'This album will be shared with the following properties:',

	'SORT_ALBUM_BY_1': 'Sort albums by',
	'SORT_ALBUM_BY_2': 'in an',
	'SORT_ALBUM_BY_3': 'order.',

	'SORT_ALBUM_SELECT_1': 'Creation Time',
	'SORT_ALBUM_SELECT_2': 'Title',
	'SORT_ALBUM_SELECT_3': 'Description',
	'SORT_ALBUM_SELECT_4': 'Public',
	'SORT_ALBUM_SELECT_5': 'Latest Take Date',
	'SORT_ALBUM_SELECT_6': 'Oldest Take Date',

	'SORT_PHOTO_BY_1': 'Sort photos by',
	'SORT_PHOTO_BY_2': 'in an',
	'SORT_PHOTO_BY_3': 'order.',

	'SORT_PHOTO_SELECT_1': 'Upload Time',
	'SORT_PHOTO_SELECT_2': 'Take Date',
	'SORT_PHOTO_SELECT_3': 'Title',
	'SORT_PHOTO_SELECT_4': 'Description',
	'SORT_PHOTO_SELECT_5': 'Public',
	'SORT_PHOTO_SELECT_6': 'Star',
	'SORT_PHOTO_SELECT_7': 'Photo Format',

	'SORT_ASCENDING': 'Ascending',
	'SORT_DESCENDING': 'Descending',
	'SORT_CHANGE': 'Change Sorting',

	'DROPBOX_TITLE': 'Set Dropbox Key',
	'DROPBOX_TEXT': "In order to import photos from your Dropbox, you need a valid drop-ins app key from <a href='https://www.dropbox.com/developers/apps/create'>their website</a>. Generate yourself a personal key and enter it below:",

	'LANG_TEXT': 'Change Lychee language for:',
	'LANG_TITLE': 'Change Language',

	'CSS_TEXT': 'Personalize your CSS:',
	'CSS_TITLE': 'Change CSS',

	'LAYOUT_TYPE': 'Layout of photos:',
	'LAYOUT_SQUARES': 'Square thumbnails',
	'LAYOUT_JUSTIFIED': 'With aspect, justified',
	'LAYOUT_UNJUSTIFIED': 'With aspect, unjustified',
	'SET_LAYOUT': 'Change layout',
	'PUBLIC_SEARCH_TEXT': 'Public search allowed:',

	'IMAGE_OVERLAY_TEXT': 'Display image overlay by default:',

	'OVERLAY_TYPE': 'Data to use in image overlay:',
	'OVERLAY_EXIF': 'Photo EXIF data',
	'OVERLAY_DESCRIPTION': 'Photo description',
	'OVERLAY_DATE': 'Photo date taken',

	'VIEW_NO_RESULT': 'No results',
	'VIEW_NO_PUBLIC_ALBUMS': 'No public albums',
	'VIEW_NO_CONFIGURATION': 'No configuration',
	'VIEW_PHOTO_NOT_FOUND': 'Photo not found',

	'NO_TAGS': 'No Tags',

	'UPLOAD_MANAGE_NEW_PHOTOS': 'You can now manage your new photo(s).',
	'UPLOAD_COMPLETE': 'Upload complete',
	'UPLOAD_COMPLETE_FAILED': 'Failed to upload one or more photos.',
	'UPLOAD_IMPORTING': 'Importing',
	'UPLOAD_IMPORTING_URL': 'Importing URL',
	'UPLOAD_UPLOADING': 'Uploading',
	'UPLOAD_FINISHED': 'Finished',
	'UPLOAD_PROCESSING': 'Processing',
	'UPLOAD_FAILED': 'Failed',
	'UPLOAD_FAILED_ERROR': 'Upload failed. Server returned an error!',
	'UPLOAD_FAILED_WARNING': 'Upload failed. Server returned a warning!',
	'UPLOAD_SKIPPED': 'Skipped',
	'UPLOAD_ERROR_CONSOLE': 'Please take a look at the console of your browser for further details.',
	'UPLOAD_UNKNOWN': 'Server returned an unknown response. Please take a look at the console of your browser for further details.',
	'UPLOAD_ERROR_UNKNOWN': 'Upload failed. Server returned an unkown error!',
	'UPLOAD_IN_PROGRESS': 'Lychee is currently uploading!',
	'UPLOAD_IMPORT_WARN_ERR': 'The import has been finished, but returned warnings or errors. Please take a look at the log (Settings -> Show Log) for further details.',
	'UPLOAD_IMPORT_COMPLETE': 'Import complete',
	'UPLOAD_IMPORT_INSTR': 'Please enter the direct link to a photo to import it:',
	'UPLOAD_IMPORT': 'Import',
	'UPLOAD_IMPORT_SERVER': 'Importing from server',
	'UPLOAD_IMPORT_SERVER_FOLD': 'Folder empty or no readable files to process. Please take a look at the log (Settings -> Show Log) for further details.',
	'UPLOAD_IMPORT_SERVER_INSTR': 'This action will import all photos, folders and sub-folders which are located in the following directory. The <b>original files will be deleted</b> after the import when possible.',
	'UPLOAD_ABSOLUTE_PATH': 'Absolute path to directory',
	'UPLOAD_IMPORT_SERVER_EMPT': 'Could not start import because the folder was empty!',

	'ABOUT_SUBTITLE': 'Self-hosted photo-management done right',
	'ABOUT_DESCRIPTION': 'is a free photo-management tool, which runs on your server or web-space. Installing is a matter of seconds. Upload, manage and share photos like from a native application. Lychee comes with everything you need and all your photos are stored securely.',

	'HEADER_HOSTEDWITH': 'Hosted with Lychee',
	'HEADER_SEARCH_PLACEHOLDER': 'Search …'
};

/**
 * @description Select multiple albums or photos.
 */

var isSelectKeyPressed = function isSelectKeyPressed(e) {

	return e.metaKey || e.ctrlKey;
};

multiselect = {

	ids: [],
	albumsSelected: 0,
	photosSelected: 0

};

multiselect.position = {

	top: null,
	right: null,
	bottom: null,
	left: null

};

multiselect.bind = function () {

	$('.content').on('mousedown', function (e) {
		if (e.which === 1) multiselect.show(e);
	});

	return true;
};

multiselect.isSelected = function (id) {

	var pos = $.inArray(id, multiselect.ids);

	return {
		selected: pos !== -1,
		position: pos
	};
};

multiselect.toggleItem = function (object, id) {

	if (album.isSmartID(id)) return;

	var selected = multiselect.isSelected(id).selected;

	if (selected === false) multiselect.addItem(object, id);else multiselect.removeItem(object, id);
};

multiselect.addItem = function (object, id) {

	if (album.isSmartID(id)) return;
	if (albums.isShared(id)) return;
	if (multiselect.isSelected(id).selected === true) return;

	var isAlbum = object.hasClass('album');

	if (isAlbum && multiselect.photosSelected > 0 || !isAlbum && multiselect.albumsSelected > 0) {
		lychee.error('Please select either albums or photos!');
		return;
	}

	multiselect.ids.push(id);
	multiselect.select(object);

	if (isAlbum) {
		multiselect.albumsSelected++;
	} else {
		multiselect.photosSelected++;
	}
};

multiselect.removeItem = function (object, id) {
	var _multiselect$isSelect = multiselect.isSelected(id),
	    selected = _multiselect$isSelect.selected,
	    pos = _multiselect$isSelect.pos;

	if (selected === false) return;

	multiselect.ids.splice(pos, 1);
	multiselect.deselect(object);

	var isAlbum = object.hasClass('album');

	if (isAlbum) {
		multiselect.albumsSelected--;
	} else {
		multiselect.photosSelected--;
	}
};

multiselect.albumClick = function (e, albumObj) {

	var id = albumObj.attr('data-id');

	if (isSelectKeyPressed(e) && lychee.upload) {
		if (albumObj.hasClass('disabled') && !lychee.admin) return;
		multiselect.toggleItem(albumObj, id);
	} else {
		lychee.goto(id);
	}
};

multiselect.photoClick = function (e, photoObj) {

	var id = photoObj.attr('data-id');

	if (isSelectKeyPressed(e) && lychee.upload) {
		if (photoObj.hasClass('disabled') && !lychee.admin) return;
		multiselect.toggleItem(photoObj, id);
	} else {
		lychee.goto(album.getID() + '/' + id);
	}
};

multiselect.albumContextMenu = function (e, albumObj) {

	var id = albumObj.attr('data-id');
	var selected = multiselect.isSelected(id).selected;

	if (albumObj.hasClass('disabled') && !lychee.admin) return;

	if (selected !== false && multiselect.ids.length > 1) {
		contextMenu.albumMulti(multiselect.ids, e);
	} else {
		contextMenu.album(id, e);
	}
};

multiselect.photoContextMenu = function (e, photoObj) {

	var id = photoObj.attr('data-id');
	var selected = multiselect.isSelected(id).selected;

	if (photoObj.hasClass('disabled') && !lychee.admin) return;

	if (selected !== false && multiselect.ids.length > 1) {
		contextMenu.photoMulti(multiselect.ids, e);
	} else if (visible.album() || visible.search()) {
		contextMenu.photo(id, e);
	} else if (visible.photo()) {
		// should not happen... but you never know...
		contextMenu.photo(photo.getID(), e);
	} else {
		lychee.error('Could not find what you wnat.');
	}
};

multiselect.clearSelection = function () {

	multiselect.deselect('.photo.active, .album.active');
	multiselect.ids = [];
	multiselect.albumsSelected = 0;
	multiselect.photosSelected = 0;
};

multiselect.show = function (e) {

	if (lychee.publicMode) return false;
	if (!visible.albums() && !visible.album()) return false;
	if ($('.album:hover, .photo:hover').length !== 0) return false;
	if (visible.search()) return false;
	if (visible.multiselect()) $('#multiselect').remove();

	sidebar.setSelectable(false);

	multiselect.position.top = e.pageY;
	multiselect.position.right = -1 * (e.pageX - $(document).width());
	multiselect.position.bottom = -1 * (multiselect.position.top - $(window).height());
	multiselect.position.left = e.pageX;

	$('body').append(build.multiselect(multiselect.position.top, multiselect.position.left));

	$(document).on('mousemove', multiselect.resize).on('mouseup', function (e) {
		if (e.which === 1) multiselect.getSelection(e);
	});
};

multiselect.resize = function (e) {

	if (multiselect.position.top === null || multiselect.position.right === null || multiselect.position.bottom === null || multiselect.position.left === null) return false;

	var newSize = {};
	var documentSize = {};

	// Get the position of the mouse
	var mousePos = {
		x: e.pageX,
		y: e.pageY
	};

	// Default CSS
	var newCSS = {
		top: null,
		bottom: null,
		height: null,
		left: null,
		right: null,
		width: null
	};

	if (mousePos.y >= multiselect.position.top) {

		documentSize.height = $(document).height();

		// Do not leave the screen
		newSize.height = mousePos.y - multiselect.position.top;
		if (multiselect.position.top + newSize.height >= documentSize.height) {
			newSize.height -= multiselect.position.top + newSize.height - documentSize.height + 2;
		}

		newCSS.top = multiselect.position.top;
		newCSS.bottom = 'inherit';
		newCSS.height = newSize.height;
	} else {

		newCSS.top = 'inherit';
		newCSS.bottom = multiselect.position.bottom;
		newCSS.height = multiselect.position.top - e.pageY;
	}

	if (mousePos.x >= multiselect.position.left) {

		documentSize.width = $(document).width();

		// Do not leave the screen
		newSize.width = mousePos.x - multiselect.position.left;
		if (multiselect.position.left + newSize.width >= documentSize.width) {
			newSize.width -= multiselect.position.left + newSize.width - documentSize.width + 2;
		}

		newCSS.right = 'inherit';
		newCSS.left = multiselect.position.left;
		newCSS.width = newSize.width;
	} else {

		newCSS.right = multiselect.position.right;
		newCSS.left = 'inherit';
		newCSS.width = multiselect.position.left - e.pageX;
	}

	// Updated all CSS properties at once
	$('#multiselect').css(newCSS);
};

multiselect.stopResize = function () {

	if (multiselect.position.top !== null) $(document).off('mousemove mouseup');
};

multiselect.getSize = function () {

	if (!visible.multiselect()) return false;

	var $elem = $('#multiselect');
	var offset = $elem.offset();

	return {
		top: offset.top,
		left: offset.left,
		width: parseInt($elem.css('width').replace('px', '')),
		height: parseInt($elem.css('height').replace('px', ''))
	};
};

multiselect.getSelection = function (e) {
	// TODO(nshemon): Make tolerance depend on image size.
	var tolerance = 202;
	var size = multiselect.getSize();

	if (visible.contextMenu()) return false;
	if (!visible.multiselect()) return false;

	if (!e.shiftKey && (size.width === 0 || size.height === 0)) {
		multiselect.close();
		return false;
	}

	var sortKind = function sortKind(a, b) {
		return $(a).hasClass("photo") < $(b).hasClass("photo") ? 1 : -1;
	};

	$('.photo, .album').sort(sortKind).each(function () {

		var offset = $(this).offset();

		if (offset.top >= size.top - tolerance && offset.left >= size.left - tolerance && offset.top + 206 <= size.top + size.height + tolerance && offset.left + 206 <= size.left + size.width + tolerance) {

			var id = $(this).attr('data-id');

			if (isSelectKeyPressed(e) && lychee.upload) {
				multiselect.toggleItem($(this), id);
			} else {
				multiselect.addItem($(this), id);
			}
		}
	});

	multiselect.hide();
};

multiselect.select = function (id) {

	var el = $(id);

	el.addClass('selected');
	el.addClass('active');
};

multiselect.deselect = function (id) {

	var el = $(id);

	el.removeClass('selected');
	el.removeClass('active');
};

multiselect.hide = function () {

	sidebar.setSelectable(true);

	multiselect.stopResize();

	multiselect.position.top = null;
	multiselect.position.right = null;
	multiselect.position.bottom = null;
	multiselect.position.left = null;

	lychee.animate('#multiselect', 'fadeOut');
	setTimeout(function () {
		return $('#multiselect').remove();
	}, 300);
};

multiselect.close = function () {

	sidebar.setSelectable(true);

	multiselect.stopResize();

	multiselect.position.top = null;
	multiselect.position.right = null;
	multiselect.position.bottom = null;
	multiselect.position.left = null;

	lychee.animate('#multiselect', 'fadeOut');
	setTimeout(function () {
		return $('#multiselect').remove();
	}, 300);
};

multiselect.selectAll = function () {

	if (lychee.publicMode) return false;
	if (visible.search()) return false;
	if (!visible.albums() && !visible.album) return false;
	if (visible.multiselect()) $('#multiselect').remove();

	sidebar.setSelectable(false);

	multiselect.position.top = 70;
	multiselect.position.right = 40;
	multiselect.position.bottom = 90;
	multiselect.position.left = 20;

	$('body').append(build.multiselect(multiselect.position.top, multiselect.position.left));

	var documentSize = {
		width: $(document).width(),
		height: $(document).height()
	};

	var newSize = {
		width: documentSize.width - multiselect.position.right + 2,
		height: documentSize.height - multiselect.position.bottom
	};

	var e = {
		pageX: documentSize.width - multiselect.position.right / 2,
		pageY: documentSize.height - multiselect.position.bottom
	};

	$('#multiselect').css(newSize);

	multiselect.getSelection(e);
};

/**
 * @description Controls the access to password-protected albums and photos.
 */

password = {

	value: ''

};

password.getDialog = function (albumID, callback) {

	var action = function action(data) {

		var passwd = data.password;

		var params = {
			albumID: albumID,
			password: passwd
		};

		api.post('Album::getPublic', params, function (data) {

			if (data === true) {
				basicModal.close();
				password.value = passwd;
				callback();
			} else {
				basicModal.error('password');
			}
		});
	};

	var cancel = function cancel() {

		basicModal.close();
		if (!visible.albums() && !visible.album()) lychee.goto();
	};

	var msg = '\n\t\t\t  <p>\n\t\t\t\t  ' + lychee.locale['ALBUM_PASSWORD_REQUIRED'] + '\n\t\t\t\t  <input name=\'password\' class=\'text\' type=\'password\' placeholder=\'' + lychee.locale['PASSWORD'] + '\' value=\'\'>\n\t\t\t  </p>\n\t\t\t  ';

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: lychee.locale['ENTER'],
				fn: action
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: cancel
			}
		}
	});
};

/**
 * @description Takes care of every action a photo can handle and execute.
 */

photo = {

	json: null,
	cache: null

};

photo.getID = function () {

	var id = null;

	if (photo.json) id = photo.json.id;else id = $('.photo:hover, .photo.active').attr('data-id');

	if ($.isNumeric(id) === true) return id;else return false;
};

photo.load = function (photoID, albumID) {

	var checkContent = function checkContent() {
		if (album.json != null && album.json.photos) photo.load(photoID, albumID);else setTimeout(checkContent, 100);
	};

	var checkPasswd = function checkPasswd() {
		if (password.value !== '') photo.load(photoID, albumID);else setTimeout(checkPasswd, 200);
	};

	// we need to check the album.json.photos because otherwise the script is too fast and this raise an error.
	if (album.json == null || album.json.photos == null) {
		checkContent();
		return false;
	}

	var params = {
		photoID: photoID,
		albumID: albumID,
		password: password.value
	};

	api.post('Photo::get', params, function (data) {

		if (data === 'Warning: Photo private!') {
			lychee.content.show();
			lychee.goto();
			return false;
		}

		if (data === 'Warning: Wrong password!') {
			checkPasswd();
			return false;
		}

		photo.json = data;

		if (!visible.photo()) view.photo.show();
		view.photo.init();
		lychee.imageview.show();

		setTimeout(function () {
			lychee.content.show();
			photo.preloadNext(photoID);
		}, 300);
	});
};

photo.hasExif = function () {
	var exifHash = photo.json.make + photo.json.model + photo.json.shutter + photo.json.aperture + photo.json.focal + photo.json.iso;

	return exifHash !== '';
};

photo.hasTakedate = function () {
	return photo.json.takedate && photo.json.takedate !== '';
};

photo.hasDesc = function () {
	return photo.json.description && photo.json.description !== '';
};

photo.update_overlay_type = function () {
	// Only run if the overlay is showing
	if (!lychee.image_overlay) {
		return false;
	} else {
		// console.log('Current ' + lychee.image_overlay_type);
		var types = ['exif', 'desc', 'takedate'];

		var i = types.indexOf(lychee.image_overlay_type);
		var j = (i + 1) % types.length;
		var cont = true;
		while (i !== j && cont) {
			if (types[j] === 'desc' && photo.hasDesc()) cont = false;else if (types[j] === 'takedate' && photo.hasTakedate()) cont = false;else if (types[j] === 'exif' && photo.hasExif()) cont = false;else j = (j + 1) % types.length;
		}

		if (i !== j) {
			lychee.image_overlay_type = types[j];
			$('#image_overlay').remove();
			lychee.imageview.append(build.overlay_image(photo.json));
		} else {
			console.log('no other data found, displaying ' + types[j]);
		}
	}
};

photo.update_display_overlay = function () {
	lychee.image_overlay = !lychee.image_overlay;
	if (!lychee.image_overlay) {
		$('#image_overlay').remove();
	} else {
		lychee.imageview.append(build.overlay_image(photo.json));
	}
};

// Preload the next photo for better response time
photo.preloadNext = function (photoID) {
	if (album.json && album.json.photos && album.getByID(photoID) && album.getByID(photoID).nextPhoto !== '') {

		var nextPhoto = album.getByID(photoID).nextPhoto;
		var url = album.getByID(nextPhoto).url;
		var medium = album.getByID(nextPhoto).medium;
		var href = url;
		if (medium != null && medium !== '') {
			href = medium;

			var medium2x = album.getByID(nextPhoto).medium2x;
			if (medium2x && medium2x !== '') {
				// If the currently displayed image uses the 2x variant,
				// chances are that so will the next one.
				var imgs = $('img#image');
				if (imgs.length > 0 && imgs[0].currentSrc != null && imgs[0].currentSrc.includes('@2x.')) {
					href = medium2x;
				}
			}
		}

		$('head [data-prefetch]').remove();
		$('head').append('<link data-prefetch rel="prefetch" href="' + href + '">');
	}
};

photo.parse = function () {

	if (!photo.json.title) photo.json.title = lychee.locale['UNTITLED'];
};

photo.previous = function (animate) {

	if (photo.getID() !== false && album.json && album.getByID(photo.getID()) && album.getByID(photo.getID()).previousPhoto !== '') {

		var delay = 0;

		if (animate === true) {

			delay = 200;

			$('#imageview #image').css({
				WebkitTransform: 'translateX(100%)',
				MozTransform: 'translateX(100%)',
				transform: 'translateX(100%)',
				opacity: 0
			});
		}

		setTimeout(function () {
			if (photo.getID() === false) return false;
			lychee.goto(album.getID() + '/' + album.getByID(photo.getID()).previousPhoto);
		}, delay);
	}
};

photo.next = function (animate) {

	if (photo.getID() !== false && album.json && album.getByID(photo.getID()) && album.getByID(photo.getID()).nextPhoto !== '') {

		var delay = 0;

		if (animate === true) {

			delay = 200;

			$('#imageview #image').css({
				WebkitTransform: 'translateX(-100%)',
				MozTransform: 'translateX(-100%)',
				transform: 'translateX(-100%)',
				opacity: 0
			});
		}

		setTimeout(function () {
			if (photo.getID() === false) return false;
			lychee.goto(album.getID() + '/' + album.getByID(photo.getID()).nextPhoto);
		}, delay);
	}
};

photo.duplicate = function (photoIDs) {
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	albums.refresh();

	var params = {
		photoIDs: photoIDs.join()
	};

	api.post('Photo::duplicate', params, function (data) {

		if (data !== true) {
			lychee.error(null, params, data);
		} else {
			album.load(album.getID());
			if (callback != null) {
				callback();
			}
		}
	});
};

photo.delete = function (photoIDs) {

	var action = {};
	var cancel = {};
	var msg = '';
	var photoTitle = '';

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	if (photoIDs.length === 1) {

		// Get title if only one photo is selected
		if (visible.photo()) photoTitle = photo.json.title;else photoTitle = album.getByID(photoIDs).title;

		// Fallback for photos without a title
		if (photoTitle === '') photoTitle = lychee.locale['UNTITLED'];
	}

	action.fn = function () {

		var nextPhoto = null;
		var previousPhoto = null;

		basicModal.close();

		photoIDs.forEach(function (id, index) {

			// Change reference for the next and previous photo
			if (album.getByID(id).nextPhoto !== '' || album.getByID(id).previousPhoto !== '') {

				nextPhoto = album.getByID(id).nextPhoto;
				previousPhoto = album.getByID(id).previousPhoto;

				album.getByID(previousPhoto).nextPhoto = nextPhoto;
				album.getByID(nextPhoto).previousPhoto = previousPhoto;
			}

			album.deleteByID(id);
			view.album.content.delete(id, index === photoIDs.length - 1);
		});

		albums.refresh();

		// Go to next photo if there is a next photo and
		// next photo is not the current one. Show album otherwise.
		if (visible.photo() && nextPhoto != null && nextPhoto !== photo.getID()) lychee.goto(album.getID() + '/' + nextPhoto);else if (!visible.albums()) lychee.goto(album.getID());

		var params = {
			photoIDs: photoIDs.join()
		};

		api.post('Photo::delete', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	if (photoIDs.length === 1) {

		action.title = lychee.locale['PHOTO_DELETE'];
		cancel.title = lychee.locale['PHOTO_KEEP'];

		msg = lychee.html(_templateObject41, lychee.locale['PHOTO_DELETE_1'], photoTitle, lychee.locale['PHOTO_DELETE_2']);
	} else {

		action.title = lychee.locale['PHOTO_DELETE'];
		cancel.title = lychee.locale['PHOTO_KEEP'];

		msg = lychee.html(_templateObject42, lychee.locale['PHOTO_DELETE_ALL_1'], photoIDs.length, lychee.locale['PHOTO_DELETE_ALL_2']);
	}

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: action.title,
				fn: action.fn,
				class: 'red'
			},
			cancel: {
				title: cancel.title,
				fn: basicModal.close
			}
		}
	});
};

photo.setTitle = function (photoIDs) {

	var oldTitle = '';
	var msg = '';

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	if (photoIDs.length === 1) {

		// Get old title if only one photo is selected
		if (photo.json) oldTitle = photo.json.title;else if (album.json) oldTitle = album.getByID(photoIDs).title;
	}

	var action = function action(data) {

		basicModal.close();

		var newTitle = data.title;

		if (visible.photo()) {
			photo.json.title = newTitle === '' ? 'Untitled' : newTitle;
			view.photo.title();
		}

		photoIDs.forEach(function (id) {
			album.getByID(id).title = newTitle;
			view.album.content.title(id);
		});

		var params = {
			photoIDs: photoIDs.join(),
			title: newTitle
		};

		api.post('Photo::setTitle', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	var input = lychee.html(_templateObject43, oldTitle);

	if (photoIDs.length === 1) msg = lychee.html(_templateObject2, lychee.locale['PHOTO_NEW_TITLE'], input);else msg = lychee.html(_templateObject44, lychee.locale['PHOTOS_NEW_TITLE_1'], photoIDs.length, lychee.locale['PHOTOS_NEW_TITLE_2'], input);

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: lychee.locale['PHOTO_SET_TITLE'],
				fn: action
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: basicModal.close
			}
		}
	});
};

photo.copyTo = function (photoIDs, albumID) {

	var action = function action() {
		photo.setAlbum(photoIDs, albumID);
	};
	photo.duplicate(photoIDs, action);
};

photo.setAlbum = function (photoIDs, albumID) {

	var nextPhoto = null;
	var previousPhoto = null;

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	photoIDs.forEach(function (id, index) {

		// Change reference for the next and previous photo
		if (album.getByID(id).nextPhoto !== '' || album.getByID(id).previousPhoto !== '') {

			nextPhoto = album.getByID(id).nextPhoto;
			previousPhoto = album.getByID(id).previousPhoto;

			album.getByID(previousPhoto).nextPhoto = nextPhoto;
			album.getByID(nextPhoto).previousPhoto = previousPhoto;
		}

		album.deleteByID(id);
		view.album.content.delete(id, index === photoIDs.length - 1);
	});

	albums.refresh();

	// Go to next photo if there is a next photo and
	// next photo is not the current one. Show album otherwise.
	if (visible.photo() && nextPhoto != null && nextPhoto !== photo.getID()) lychee.goto(album.getID() + '/' + nextPhoto);else if (!visible.albums()) lychee.goto(album.getID());

	var params = {
		photoIDs: photoIDs.join(),
		albumID: albumID
	};

	api.post('Photo::setAlbum', params, function (data) {

		if (data !== true) {
			lychee.error(null, params, data);
		} else {
			if (album.hasSub(albumID)) {
				// If we moved photos to a subalbum of the currently
				// displayed album, that may change the subalbum thumbs
				// being displayed so we need to reload.
				if (visible.album()) {
					album.reload();
				} else {
					// We're most likely in photo view.  We still need to
					// refresh the album but we don't want to reload it
					// since that would switch the view being displayed.
					album.refresh();
				}
			}
		}
	});
};

photo.setStar = function (photoIDs) {

	if (!photoIDs) return false;

	if (visible.photo()) {
		photo.json.star = photo.json.star === '0' ? '1' : '0';
		view.photo.star();
	}

	photoIDs.forEach(function (id) {
		album.getByID(id).star = album.getByID(id).star === '0' ? '1' : '0';
		view.album.content.star(id);
	});

	albums.refresh();

	var params = {
		photoIDs: photoIDs.join()
	};

	api.post('Photo::setStar', params, function (data) {

		if (data !== true) lychee.error(null, params, data);
	});
};

photo.setPublic = function (photoID, e) {

	if (photo.json.public === '2') {

		var action = function action() {

			basicModal.close();
			lychee.goto(photo.json.original_album);
		};

		basicModal.show({
			body: '<p>' + lychee.locale['PHOTO_MAKE_PRIVATE_ALBUM'] + '</p>',
			buttons: {
				action: {
					title: lychee.locale['PHOTO_SHOW_ALBUM'],
					fn: action
				},
				cancel: {
					title: lychee.locale['CANCEL'],
					fn: basicModal.close
				}
			}
		});

		return false;
	}

	if (visible.photo()) {

		photo.json.public = photo.json.public === '0' ? '1' : '0';
		view.photo.public();
		if (photo.json.public === '1') contextMenu.sharePhoto(photoID, e);
	}

	album.getByID(photoID).public = album.getByID(photoID).public === '0' ? '1' : '0';
	view.album.content.public(photoID);

	albums.refresh();

	api.post('Photo::setPublic', { photoID: photoID }, function (data) {

		if (data !== true) lychee.error(null, params, data);
	});
};

photo.setDescription = function (photoID) {

	var oldDescription = photo.json.description;

	var action = function action(data) {

		basicModal.close();

		var description = data.description;

		if (visible.photo()) {
			photo.json.description = description;
			view.photo.description();
		}

		var params = {
			photoID: photoID,
			description: description
		};

		api.post('Photo::setDescription', params, function (data) {
			if (data !== true) lychee.error(null, params, data);
		});
	};

	basicModal.show({
		body: lychee.html(_templateObject45, lychee.locale['PHOTO_NEW_DESCRIPTION'], lychee.locale['PHOTO_DESCRIPTION'], oldDescription),
		buttons: {
			action: {
				title: lychee.locale['PHOTO_SET_DESCRIPTION'],
				fn: action
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: basicModal.close
			}
		}
	});
};

photo.editTags = function (photoIDs) {

	var oldTags = '';
	var msg = '';

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	// Get tags
	if (visible.photo()) oldTags = photo.json.tags;else if (visible.album() && photoIDs.length === 1) oldTags = album.getByID(photoIDs).tags;else if (visible.search() && photoIDs.length === 1) oldTags = album.getByID(photoIDs).tags;else if (visible.album() && photoIDs.length > 1) {
		var same = true;
		photoIDs.forEach(function (id) {
			same = album.getByID(id).tags === album.getByID(photoIDs[0]).tags && same === true;
		});
		if (same === true) oldTags = album.getByID(photoIDs[0]).tags;
	}

	// Improve tags
	oldTags = oldTags.replace(/,/g, ', ');

	var action = function action(data) {

		basicModal.close();
		photo.setTags(photoIDs, data.tags);
	};

	var input = lychee.html(_templateObject46, oldTags);

	if (photoIDs.length === 1) msg = lychee.html(_templateObject2, lychee.locale['PHOTO_NEW_TAGS'], input);else msg = lychee.html(_templateObject44, lychee.locale['PHOTO_NEW_TAGS_1'], photoIDs.length, lychee.locale['PHOTO_NEW_TAGS_2'], input);

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: lychee.locale['PHOTO_SET_TAGS'],
				fn: action
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: basicModal.close
			}
		}
	});
};

photo.setTags = function (photoIDs, tags) {

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	// Parse tags
	tags = tags.replace(/(\ ,\ )|(\ ,)|(,\ )|(,{1,}\ {0,})|(,$|^,)/g, ',');
	tags = tags.replace(/,$|^,|(\ ){0,}$/g, '');

	if (visible.photo()) {
		photo.json.tags = tags;
		view.photo.tags();
	}

	photoIDs.forEach(function (id, index, array) {
		album.getByID(id).tags = tags;
	});

	var params = {
		photoIDs: photoIDs.join(),
		tags: tags
	};

	api.post('Photo::setTags', params, function (data) {

		if (data !== true) lychee.error(null, params, data);
	});
};

photo.deleteTag = function (photoID, index) {

	var tags = void 0;

	// Remove
	tags = photo.json.tags.split(',');
	tags.splice(index, 1);

	// Save
	photo.json.tags = tags.toString();
	photo.setTags([photoID], photo.json.tags);
};

photo.share = function (photoID, service) {

	var url = photo.getViewLink(photoID);

	switch (service) {
		case 'twitter':
			window.open('https://twitter.com/share?url=' + encodeURI(url));
			break;
		case 'facebook':
			window.open('http://www.facebook.com/sharer.php?u=' + encodeURI(url) + '&t=' + encodeURI(photo.json.title));
			break;
		case 'mail':
			location.href = 'mailto:?subject=' + encodeURI(photo.json.title) + '&body=' + encodeURI(url);
			break;
		case 'dropbox':
			lychee.loadDropbox(function () {
				var filename = photo.json.title + '.' + photo.getDirectLink().split('.').pop();
				Dropbox.save(photo.getDirectLink(), filename);
			});
			break;
	}
};

photo.setLicense = function (photoID) {

	var callback = function callback() {
		$('select#license').val(photo.json.license === '' ? 'none' : photo.json.license);
		return false;
	};

	var action = function action(data) {

		basicModal.close();
		var license = data.license;

		var params = {
			photoID: photoID,
			license: license
		};

		api.post('Photo::setLicense', params, function (data) {

			if (data !== true) {
				lychee.error(null, params, data);
			} else {
				// update the photo JSON and reload the license in the sidebar
				photo.json.license = params.license;
				view.photo.license();
			}
		});
	};

	var msg = lychee.html(_templateObject5, lychee.locale['PHOTO_LICENSE'], lychee.locale['PHOTO_LICENSE_NONE'], lychee.locale['PHOTO_RESERVED'], lychee.locale['PHOTO_LICENSE_HELP']);

	basicModal.show({
		body: msg,
		callback: callback,
		buttons: {
			action: {
				title: lychee.locale['PHOTO_SET_LICENSE'],
				fn: action
			},
			cancel: {
				title: lychee.locale['CANCEL'],
				fn: basicModal.close
			}
		}
	});
};

photo.getArchive = function (photoID, kind) {

	var link = void 0;

	if (lychee.api_V2) {
		console.log(api.get_url('Photo::getArchive') + lychee.html(_templateObject47, photoID, kind));
		location.href = api.get_url('Photo::getArchive') + lychee.html(_templateObject47, photoID, kind);
	} else {
		var url = api.path + '?function=Photo::getArchive&photoID=' + photoID + '&kind=' + kind;

		if (location.href.indexOf('index.html') > 0) link = location.href.replace(location.hash, '').replace('index.html', url);else link = location.href.replace(location.hash, '') + url;

		if (lychee.publicMode === true) link += '&password=' + encodeURIComponent(password.value);

		location.href = link;
	}
};

photo.getDirectLink = function () {

	var url = '';

	if (photo.json && photo.json.url && photo.json.url !== '') url = photo.json.url;

	return url;
};

photo.getViewLink = function (photoID) {

	var url = 'view.php?p=' + photoID;
	if (lychee.api_V2) {
		url = 'view?p=' + photoID;
	}

	if (location.href.indexOf('index.html') > 0) return location.href.replace('index.html' + location.hash, url);
	if (location.href.indexOf('gallery') > 0) return location.href.replace('gallery' + location.hash, url);
	return location.href.replace(location.hash, url);
};

/**
 * @description Searches through your photos and albums.
 */

search = {

	hash: null

};

search.find = function (term) {

	if (term.trim() === '') return false;

	clearTimeout($(window).data('timeout'));

	$(window).data('timeout', setTimeout(function () {

		if (header.dom('.header__search').val().length !== 0) {

			api.post('search', { term: term }, function (data) {

				var html = '';
				var albumsData = '';
				var photosData = '';

				// Build albums
				if (data && data.albums) {
					albums.json = { albums: data.albums };
					$.each(albums.json.albums, function () {
						albums.parse(this);
						albumsData += build.album(this);
					});
				}

				// Build photos
				if (data && data.photos) {
					album.json = { photos: data.photos };
					$.each(album.json.photos, function () {
						photosData += build.photo(this);
					});
				}

				var albums_divider = lychee.locale['ALBUMS'];
				var photos_divider = lychee.locale['PHOTOS'];

				if (albumsData !== '') albums_divider += ' (' + data.albums.length + ')';
				if (photosData !== '') {
					photos_divider += ' (' + data.photos.length + ')';
					if (lychee.layout === '1') {
						photosData = '<div class="justified-layout">' + photosData + '</div>';
					} else if (lychee.layout === '2') {
						photosData = '<div class="unjustified-layout">' + photosData + '</div>';
					}
				}

				// 1. No albums and photos
				// 2. Only photos
				// 3. Only albums
				// 4. Albums and photos
				if (albumsData === '' && photosData === '') html = 'error';else if (albumsData === '') html = build.divider(photos_divider) + photosData;else if (photosData === '') html = build.divider(albums_divider) + albumsData;else html = build.divider(albums_divider) + albumsData + build.divider(photos_divider) + photosData;

				// Only refresh view when search results are different
				if (search.hash !== data.hash) {

					$('.no_content').remove();

					lychee.animate('.content', 'contentZoomOut');

					search.hash = data.hash;

					setTimeout(function () {

						if (html === 'error') {
							lychee.content.html('');
							$('body').append(build.no_content('magnifying-glass'));
						} else {
							lychee.content.html(html);
							view.album.content.justify();
							lychee.animate(lychee.content, 'contentZoomIn');
						}
					}, 300);
				}
			});
		} else search.reset();
	}, 250));
};

search.reset = function () {

	header.dom('.header__search').val('');
	$('.no_content').remove();

	if (search.hash != null) {

		// Trash data
		albums.json = null;
		album.json = null;
		photo.json = null;
		search.hash = null;

		lychee.animate('.divider', 'fadeOut');
		lychee.goto();
	}
};

/**
 * @description Lets you change settings.
 */

settings = {};

settings.open = function () {
	if (lychee.api_V2) {
		// we may do something else here later
		view.settings.init();
	} else {
		view.settings.init();
	}
};

settings.createConfig = function () {

	var action = function action(data) {

		var dbName = data.dbName || '';
		var dbUser = data.dbUser || '';
		var dbPassword = data.dbPassword || '';
		var dbHost = data.dbHost || '';
		var dbTablePrefix = data.dbTablePrefix || '';

		if (dbUser.length < 1) {
			basicModal.error('dbUser');
			return false;
		}

		if (dbHost.length < 1) dbHost = 'localhost';
		if (dbName.length < 1) dbName = 'lychee';

		var params = {
			dbName: dbName,
			dbUser: dbUser,
			dbPassword: dbPassword,
			dbHost: dbHost,
			dbTablePrefix: dbTablePrefix
		};

		api.post('Config::create', params, function (data) {

			if (data !== true) {

				// Connection failed
				if (data === 'Warning: Connection failed!') {

					basicModal.show({
						body: '<p>' + lychee.locale['ERROR_DB_1'] + '</p>',
						buttons: {
							action: {
								title: lychee.locale['RETRY'],
								fn: settings.createConfig
							}
						}
					});

					return false;
				}

				// Creation failed
				if (data === 'Warning: Creation failed!') {

					basicModal.show({
						body: '<p>' + lychee.locale['ERROR_DB_2'] + '</p>',
						buttons: {
							action: {
								title: lychee.locale['RETRY'],
								fn: settings.createConfig
							}
						}
					});

					return false;
				}

				// Could not create file
				if (data === 'Warning: Could not create file!') {

					basicModal.show({
						body: "<p>" + lychee.locale['ERROR_CONFIG_FILE'] + "</p>",
						buttons: {
							action: {
								title: lychee.locale['RETRY'],
								fn: settings.createConfig
							}
						}
					});

					return false;
				}

				// Something went wrong
				basicModal.show({
					body: '<p>' + lychee.locale['ERROR_UNKNOWN'] + '</p>',
					buttons: {
						action: {
							title: lychee.locale['RETRY'],
							fn: settings.createConfig
						}
					}
				});

				return false;
			} else {

				// Configuration successful
				window.location.reload();
			}
		});
	};

	var msg = '\n\t\t\t  <p>\n\t\t\t\t  ' + lychee.locale['DB_INFO_TITLE'] + '\n\t\t\t\t  <input name=\'dbHost\' class=\'text\' type=\'text\' placeholder=\'' + lychee.locale['DB_INFO_HOST'] + '\' value=\'\'>\n\t\t\t\t  <input name=\'dbUser\' class=\'text\' type=\'text\' placeholder=\'' + lychee.locale['DB_INFO_USER'] + '\' value=\'\'>\n\t\t\t\t  <input name=\'dbPassword\' class=\'text\' type=\'password\' placeholder=\'' + lychee.locale['DB_INFO_PASSWORD'] + '\' value=\'\'>\n\t\t\t  </p>\n\t\t\t  <p>\n\t\t\t\t  ' + lychee.locale['DB_INFO_TEXT'] + '\n\t\t\t\t  <input name=\'dbName\' class=\'text\' type=\'text\' placeholder=\'' + lychee.locale['DB_NAME'] + '\' value=\'\'>\n\t\t\t\t  <input name=\'dbTablePrefix\' class=\'text\' type=\'text\' placeholder=\'' + lychee.locale['DB_PREFIX'] + '\' value=\'\'>\n\t\t\t  </p>\n\t\t\t  ';

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: lychee.locale['DB_CONNECT'],
				fn: action
			}
		}
	});
};

settings.createLogin = function () {

	var action = function action(data) {

		var username = data.username;
		var password = data.password;
		var confirm = data.confirm;

		if (username.length < 1) {
			basicModal.error('username');
			return false;
		}

		if (password.length < 1) {
			basicModal.error('password');
			return false;
		}

		if (password !== confirm) {
			basicModal.error('confirm');
			return false;
		}

		basicModal.close();

		var params = {
			username: username,
			password: password
		};

		api.post('Settings::setLogin', params, function (data) {

			if (data !== true) {

				basicModal.show({
					body: '<p>' + lychee.locale['ERROR_LOGIN'] + '</p>',
					buttons: {
						action: {
							title: lychee.locale['RETRY'],
							fn: settings.createLogin
						}
					}
				});
			}
		});
	};

	var msg = '\n\t\t\t  <p>\n\t\t\t\t  ' + lychee.locale['LOGIN_TITLE'] + '\n\t\t\t\t  <input name=\'username\' class=\'text\' type=\'text\' placeholder=\'' + lychee.locale['LOGIN_USERNAME'] + '\' value=\'\'>\n\t\t\t\t  <input name=\'password\' class=\'text\' type=\'password\' placeholder=\'' + lychee.locale['LOGIN_PASSWORD'] + '\' value=\'\'>\n\t\t\t\t  <input name=\'confirm\' class=\'text\' type=\'password\' placeholder=\'' + lychee.locale['LOGIN_PASSWORD_CONFIRM'] + '\' value=\'\'>\n\t\t\t  </p>\n\t\t\t  ';

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: lychee.locale['LOGIN_CREATE'],
				fn: action
			}
		}
	});
};

// from https://github.com/electerious/basicModal/blob/master/src/scripts/main.js
settings.getValues = function (form_name) {

	var values = {};
	var inputs_select = $(form_name + ' input[name], ' + form_name + ' select[name]');

	// Get value from all inputs
	$(inputs_select).each(function () {

		var name = $(this).attr('name');
		// Store name and value of input
		values[name] = $(this).val();
	});
	return Object.keys(values).length === 0 ? null : values;
};

// from https://github.com/electerious/basicModal/blob/master/src/scripts/main.js
settings.bind = function (item, name, fn) {

	// if ($(item).length)
	// {
	//     console.log('found');
	// }
	// else
	// {
	//     console.log('not found: ' + item);
	// }
	// Action-button
	$(item).on('click', function () {
		fn(settings.getValues(name));
	});
};

settings.changeLogin = function (params) {

	if (params.username.length < 1) {
		loadingBar.show('error', 'new username cannot be empty.');
		$('input[name=username]').addClass('error');
		return false;
	} else {
		$('input[name=username]').removeClass('error');
	}

	if (params.password.length < 1) {
		loadingBar.show('error', 'new password cannot be empty.');
		$('input[name=password]').addClass('error');
		return false;
	} else {
		$('input[name=password]').removeClass('error');
	}

	if (params.password !== params.confirm) {
		loadingBar.show('error', 'new password does not match.');
		$('input[name=confirm]').addClass('error');
		return false;
	} else {
		$('input[name=confirm]').removeClass('error');
	}

	api.post('Settings::setLogin', params, function (data) {

		if (data !== true) {
			loadingBar.show('error', data.description);
			lychee.error(null, datas, data);
		} else {
			$('input[name]').removeClass('error');
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_LOGIN']);
			view.settings.content.clearLogin();
		}
	});
};

settings.changeSorting = function (params) {

	api.post('Settings::setSorting', params, function (data) {

		if (data === true) {
			lychee.sortingAlbums = 'ORDER BY ' + params['typeAlbums'] + ' ' + params['orderAlbums'];
			lychee.sortingPhotos = 'ORDER BY ' + params['typePhotos'] + ' ' + params['orderPhotos'];
			albums.refresh();
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_SORT']);
		} else lychee.error(null, params, data);
	});
};

settings.changeDropboxKey = function (params) {
	// let key = params.key;

	if (params.key.length < 1) {
		loadingBar.show('error', 'key cannot be empty.');
		return false;
	}

	api.post('Settings::setDropboxKey', params, function (data) {

		if (data === true) {
			lychee.dropboxKey = params.key;
			// if (callback) lychee.loadDropbox(callback)
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_DROPBOX']);
		} else lychee.error(null, params, data);
	});
};

settings.changeLang = function (params) {

	api.post('Settings::setLang', params, function (data) {

		if (data === true) {
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_LANG']);
			lychee.init();
		} else lychee.error(null, params, data);
	});
};

settings.setDefaultLicense = function (params) {

	api.post('Settings::setDefaultLicense', params, function (data) {
		if (data === true) {
			lychee.default_license = params.license;
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_LICENSE']);
		} else lychee.error(null, params, data);
	});
};

settings.setLayout = function (params) {

	api.post('Settings::setLayout', params, function (data) {
		if (data === true) {
			lychee.layout = params.layout;
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_LAYOUT']);
		} else lychee.error(null, params, data);
	});
};

settings.changePublicSearch = function () {
	var params = {};
	if ($('#PublicSearch:checked').length === 1) {
		params.public_search = '1';
	} else {
		params.public_search = '0';
	}
	api.post('Settings::setPublicSearch', params, function (data) {
		if (data === true) {
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_PUBLIC_SEARCH']);
			lychee.image_overlay_default = params.image_overlay === '1';
			lychee.image_overlay = lychee.image_overlay_default;
		} else lychee.error(null, params, data);
	});
};

settings.changeImageOverlay = function () {
	var params = {};
	if ($('#ImageOverlay:checked').length === 1) {
		params.image_overlay = '1';

		// enable image_overlay_type
		$('select#ImgOverlayType').attr('disabled', false);
	} else {
		params.image_overlay = '0';

		// disable image_overlay_type
		$('select#ImgOverlayType').attr('disabled', true);
	}
	api.post('Settings::setImageOverlay', params, function (data) {
		if (data === true) {
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_IMAGE_OVERLAY']);
			lychee.image_overlay_default = params.image_overlay === '1';
			lychee.image_overlay = lychee.image_overlay_default;
		} else lychee.error(null, params, data);
	});
};

settings.setOverlayType = function () {
	// validate the input
	var params = {};
	if ($('#ImageOverlay:checked') && $('#ImgOverlayType').val() === "exif") {
		params.image_overlay_type = 'exif';
	} else if ($('#ImageOverlay:checked') && $('#ImgOverlayType').val() === "desc") {
		params.image_overlay_type = 'desc';
	} else if ($('#ImageOverlay:checked') && $('#ImgOverlayType').val() === "takedate") {
		params.image_overlay_type = 'takedate';
	} else {
		params.image_overlay_type = 'exif';
		console.log('Error - default used');
	}

	api.post('Settings::setOverlayType', params, function (data) {
		if (data === true) {
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_IMAGE_OVERLAY']);
			lychee.image_overlay_type = params.image_overlay_type;
			lychee.image_overlay_type_default = params.image_overlay_type;
		} else lychee.error(null, params, data);
	});
};

settings.changeCSS = function () {

	var params = {};
	params.css = $('#css').val();

	api.post('Settings::setCSS', params, function (data) {

		if (data === true) {
			lychee.css = params.css;
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_CSS']);
		} else lychee.error(null, params, data);
	});
};

settings.save = function (params) {

	api.post('Settings::saveAll', params, function (data) {

		if (data === true) {
			loadingBar.show('success', lychee.locale['SETTINGS_SUCCESS_UPDATE']);
			view.full_settings.init();
			// lychee.init();
		} else lychee.error(null, params, data);
	});
};

sharing = {
	json: null
};

sharing.add = function () {

	var params = {
		albumIDs: '',
		UserIDs: ''
	};

	$('#albums_list_to option').each(function () {
		if (params.albumIDs !== '') params.albumIDs += ',';
		params.albumIDs += this.value;
	});

	$('#user_list_to option').each(function () {
		if (params.UserIDs !== '') params.UserIDs += ',';
		params.UserIDs += this.value;
	});

	api.post('Sharing::Add', params, function (data) {
		if (data !== true) {
			loadingBar.show('error', data.description);
			lychee.error(null, params, data);
		} else {
			loadingBar.show('success', 'Sharing updated!');
			sharing.list(); // reload user list
		}
	});
};

sharing.delete = function () {

	var params = {
		ShareIDs: ''
	};

	$('input[name="remove_id"]').each(function () {
		if (params.ShareIDs !== '') params.ShareIDs += ',';
		params.ShareIDs += this.value;
	});

	api.post('Sharing::Delete', params, function (data) {
		if (data !== true) {
			loadingBar.show('error', data.description);
			lychee.error(null, params, data);
		} else {
			loadingBar.show('success', 'Sharing removed!');
			sharing.list(); // reload user list
		}
	});
};

sharing.list = function () {
	api.post('Sharing::List', {}, function (data) {
		sharing.json = data;
		view.sharing.init();
	});
};
/**
 * @description This module takes care of the sidebar.
 */

sidebar = {

	_dom: $('.sidebar'),
	types: {
		DEFAULT: 0,
		TAGS: 1
	},
	createStructure: {}

};

sidebar.dom = function (selector) {

	if (selector == null || selector === '') return sidebar._dom;

	return sidebar._dom.find(selector);
};

sidebar.bind = function () {

	// This function should be called after building and appending
	// the sidebars content to the DOM.
	// This function can be called multiple times, therefore
	// event handlers should be removed before binding a new one.

	// Event Name
	var eventName = lychee.getEventName();

	sidebar.dom('#edit_title').off(eventName).on(eventName, function () {
		if (visible.photo()) photo.setTitle([photo.getID()]);else if (visible.album()) album.setTitle([album.getID()]);
	});

	sidebar.dom('#edit_description').off(eventName).on(eventName, function () {
		if (visible.photo()) photo.setDescription(photo.getID());else if (visible.album()) album.setDescription(album.getID());
	});

	sidebar.dom('#edit_tags').off(eventName).on(eventName, function () {
		photo.editTags([photo.getID()]);
	});

	sidebar.dom('#tags .tag span').off(eventName).on(eventName, function () {
		photo.deleteTag(photo.getID(), $(this).data('index'));
	});

	sidebar.dom('#edit_license').off(eventName).on(eventName, function () {
		if (visible.photo()) photo.setLicense(photo.getID());else if (visible.album()) album.setLicense(album.getID());
	});

	return true;
};

sidebar.toggle = function () {

	if (visible.sidebar() || visible.sidebarbutton()) {

		header.dom('.button--info').toggleClass('active');
		lychee.content.toggleClass('content--sidebar');
		sidebar.dom().toggleClass('active');

		return true;
	}

	return false;
};

sidebar.setSelectable = function () {
	var selectable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


	// Attributes/Values inside the sidebar are selectable by default.
	// Selection needs to be deactivated to prevent an unwanted selection
	// while using multiselect.

	if (selectable === true) sidebar.dom().removeClass('notSelectable');else sidebar.dom().addClass('notSelectable');
};

sidebar.changeAttr = function (attr) {
	var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
	var dangerouslySetInnerHTML = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


	if (attr == null || attr === '') return false;

	// Set a default for the value
	if (value == null || value === '') value = '-';

	// Escape value
	if (dangerouslySetInnerHTML === false) value = lychee.escapeHTML(value);

	// Set new value
	sidebar.dom('.attr_' + attr).html(value);

	return true;
};

sidebar.secondsToHMS = function (d) {
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor(d % 3600 / 60);
	var s = Math.floor(d % 60);

	return (h > 0 ? h.toString() + 'h' : '') + (m > 0 ? m.toString() + 'm' : '') + (s > 0 || h == 0 && m == 0 ? s.toString() + 's' : '');
};

sidebar.createStructure.photo = function (data) {

	if (data == null || data === '') return false;

	var editable = false;
	var exifHash = data.takedate + data.make + data.model + data.shutter + data.aperture + data.focal + data.iso;
	var structure = {};
	var _public = '';
	var isVideo = data.type && data.type.indexOf('video') > -1;

	// Enable editable when user logged in
	if (lychee.publicMode === false && lychee.upload) editable = true;

	// Set the license string for a photo
	switch (data.license) {
		// if the photo doesn't have a license
		case 'none':
			license = '';
			break;
		// Localize All Rights Reserved
		case 'reserved':
			license = lychee.locale['PHOTO_RESERVED'];
			break;
		// Display anything else that's set
		default:
			license = data.license;
			break;
	}

	// Set value for public
	switch (data.public) {

		case '0':
			_public = lychee.locale['PHOTO_SHR_NO'];
			break;
		case '1':
			_public = lychee.locale['PHOTO_SHR_YES'];
			break;
		case '2':
			_public = lychee.locale['PHOTO_SHR_ALB'];
			break;
		default:
			_public = '-';
			break;

	}

	structure.basics = {
		title: lychee.locale['PHOTO_BASICS'],
		type: sidebar.types.DEFAULT,
		rows: [{ title: lychee.locale['PHOTO_TITLE'], kind: 'title', value: data.title, editable: editable }, { title: lychee.locale['PHOTO_UPLOADED'], kind: 'uploaded', value: data.sysdate }, { title: lychee.locale['PHOTO_DESCRIPTION'], kind: 'description', value: data.description, editable: editable }]
	};

	structure.image = {
		title: lychee.locale[isVideo ? 'PHOTO_VIDEO' : 'PHOTO_IMAGE'],
		type: sidebar.types.DEFAULT,
		rows: [{ title: lychee.locale['PHOTO_SIZE'], kind: 'size', value: data.size }, { title: lychee.locale['PHOTO_FORMAT'], kind: 'type', value: data.type }, { title: lychee.locale['PHOTO_RESOLUTION'], kind: 'resolution', value: data.width + ' x ' + data.height }]
	};

	if (isVideo) {
		if (data.width === 0 || data.height === 0) {
			// Remove the "Resolution" line if we don't have the data.
			structure.image.rows.splice(-1, 1);
		}

		// We overload the database, storing duration (in full seconds) in
		// "aperture" and frame rate (floating point with three digits after
		// the decimal point) in "focal".
		if (data.aperture != '') {
			structure.image.rows.push({ title: lychee.locale['PHOTO_DURATION'],
				kind: 'duration', value: sidebar.secondsToHMS(data.aperture) });
		}
		if (data.focal != '') {
			structure.image.rows.push({ title: lychee.locale['PHOTO_FPS'],
				kind: 'fps', value: data.focal + ' fps' });
		}
	}

	// Only create tags section when user logged in or public search enabled
	if (lychee.publicMode === false && lychee.upload || lychee.public_search) {

		structure.tags = {
			title: lychee.locale['PHOTO_TAGS'],
			type: sidebar.types.TAGS,
			value: build.tags(data.tags, editable),
			editable: editable
		};
	} else {

		structure.tags = {};
	}

	// Only create EXIF section when EXIF data available
	if (exifHash !== '') {

		structure.exif = {
			title: lychee.locale['PHOTO_CAMERA'],
			type: sidebar.types.DEFAULT,
			rows: isVideo ? [{ title: lychee.locale['PHOTO_CAPTURED'], kind: 'takedate', value: data.takedate }] : [{ title: lychee.locale['PHOTO_CAPTURED'], kind: 'takedate', value: data.takedate }, { title: lychee.locale['PHOTO_MAKE'], kind: 'make', value: data.make }, { title: lychee.locale['PHOTO_TYPE'], kind: 'model', value: data.model }, { title: lychee.locale['PHOTO_LENS'], kind: 'lens', value: data.lens }, { title: lychee.locale['PHOTO_SHUTTER'], kind: 'shutter', value: data.shutter }, { title: lychee.locale['PHOTO_APERTURE'], kind: 'aperture', value: data.aperture }, { title: lychee.locale['PHOTO_FOCAL'], kind: 'focal', value: data.focal }, { title: lychee.locale['PHOTO_ISO'], kind: 'iso', value: data.iso }]
		};
	} else {

		structure.exif = {};
	}

	structure.sharing = {
		title: lychee.locale['PHOTO_SHARING'],
		type: sidebar.types.DEFAULT,
		rows: [{ title: lychee.locale['PHOTO_SHR_PLUBLIC'], kind: 'public', value: _public }]
	};

	structure.license = {
		title: lychee.locale['PHOTO_REUSE'],
		type: sidebar.types.DEFAULT,
		rows: [{ title: lychee.locale['PHOTO_LICENSE'], kind: 'license', value: license, editable: editable }]
	};

	// Construct all parts of the structure
	structure = [structure.basics, structure.image, structure.tags, structure.exif, structure.sharing, structure.license];

	if (!$(".sidebar").hasClass("active")) sidebar.toggle();

	return structure;
};

sidebar.createStructure.album = function (data) {

	if (data == null || data === '') return false;

	var editable = false;
	var structure = {};
	var _public = '';
	var hidden = '';
	var downloadable = '';
	var password = '';
	var license = '';

	// Enable editable when user logged in
	if (lychee.publicMode === false && lychee.upload) editable = true;

	// Set value for public
	switch (data.public) {

		case '0':
			_public = lychee.locale['ALBUM_SHR_NO'];
			break;
		case '1':
			_public = lychee.locale['ALBUM_SHR_YES'];
			break;
		default:
			_public = '-';
			break;

	}

	// Set value for hidden
	switch (data.visible) {

		case '0':
			hidden = lychee.locale['ALBUM_SHR_YES'];
			break;
		case '1':
			hidden = lychee.locale['ALBUM_SHR_NO'];
			break;
		default:
			hidden = '-';
			break;

	}

	// Set value for downloadable
	switch (data.downloadable) {

		case '0':
			downloadable = lychee.locale['ALBUM_SHR_NO'];
			break;
		case '1':
			downloadable = lychee.locale['ALBUM_SHR_YES'];
			break;
		default:
			downloadable = '-';
			break;

	}

	// Set value for password
	switch (data.password) {

		case '0':
			password = lychee.locale['ALBUM_SHR_NO'];
			break;
		case '1':
			password = lychee.locale['ALBUM_SHR_YES'];
			break;
		default:
			password = '-';
			break;

	}

	// Set license string
	switch (data.license) {
		case 'none':
			license = ''; // consistency
			break;
		case 'reserved':
			license = lychee.locale['ALBUM_RESERVED'];
			break;
		default:
			license = data.license;
			break;
	}

	structure.basics = {
		title: lychee.locale['ALBUM_BASICS'],
		type: sidebar.types.DEFAULT,
		rows: [{ title: lychee.locale['ALBUM_TITLE'], kind: 'title', value: data.title, editable: editable }, { title: lychee.locale['ALBUM_DESCRIPTION'], kind: 'description', value: data.description, editable: editable }]
	};

	videoCount = 0;
	$.each(data.photos, function () {
		if (this.type && this.type.indexOf('video') > -1) {
			videoCount++;
		}
	});
	structure.album = {
		title: lychee.locale['ALBUM_ALBUM'],
		type: sidebar.types.DEFAULT,
		rows: [{ title: lychee.locale['ALBUM_CREATED'], kind: 'created', value: data.sysdate }]
	};
	if (data.albums && data.albums.length > 0) {
		structure.album.rows.push({ title: lychee.locale['ALBUM_SUBALBUMS'],
			kind: 'subalbums', value: data.albums.length });
	}
	if (data.photos) {
		if (data.photos.length - videoCount > 0) {
			structure.album.rows.push({ title: lychee.locale['ALBUM_IMAGES'],
				kind: 'images',
				value: data.photos.length - videoCount });
		}
	}
	if (videoCount > 0) {
		structure.album.rows.push({ title: lychee.locale['ALBUM_VIDEOS'],
			kind: 'videos', value: videoCount });
	}

	structure.share = {
		title: lychee.locale['ALBUM_SHARING'],
		type: sidebar.types.DEFAULT,
		rows: [{ title: lychee.locale['ALBUM_PUBLIC'], kind: 'public', value: _public }, { title: lychee.locale['ALBUM_HIDDEN'], kind: 'hidden', value: hidden }, { title: lychee.locale['ALBUM_DOWNLOADABLE'], kind: 'downloadable', value: downloadable }, { title: lychee.locale['ALBUM_PASSWORD'], kind: 'password', value: password }]
	};

	if (data.owner != null) {
		structure.share.rows.push({ title: lychee.locale['ALBUM_OWNER'], kind: 'owner', value: data.owner });
	}

	structure.license = {
		title: lychee.locale['ALBUM_REUSE'],
		type: sidebar.types.DEFAULT,
		rows: [{ title: lychee.locale['ALBUM_LICENSE'], kind: 'license', value: license, editable: editable }]
	};

	// Construct all parts of the structure
	structure = [structure.basics, structure.album, structure.share, structure.license];

	if ($(".sidebar").hasClass("active")) sidebar.toggle();

	return structure;
};

sidebar.render = function (structure) {

	if (structure == null || structure === '' || structure === false) return false;

	var html = '';

	var renderDefault = function renderDefault(section) {

		var _html = '';

		_html += '\n\t\t\t\t <div class=\'sidebar__divider\'>\n\t\t\t\t\t <h1>' + section.title + '</h1>\n\t\t\t\t </div>\n\t\t\t\t <table>\n\t\t\t\t ';

		section.rows.forEach(function (row) {

			var value = row.value;

			// Set a default for the value
			if (value === '' || value == null) value = '-';

			// Wrap span-element around value for easier selecting on change
			value = lychee.html(_templateObject48, row.kind, value);

			// Add edit-icon to the value when editable
			if (row.editable === true) value += ' ' + build.editIcon('edit_' + row.kind);

			_html += lychee.html(_templateObject49, row.title, value);
		});

		_html += '\n\t\t\t\t </table>\n\t\t\t\t ';

		return _html;
	};

	var renderTags = function renderTags(section) {

		var _html = '';
		var editable = '';

		// Add edit-icon to the value when editable
		if (section.editable === true) editable = build.editIcon('edit_tags');

		_html += lychee.html(_templateObject50, section.title, section.title.toLowerCase(), section.value, editable);

		return _html;
	};

	structure.forEach(function (section) {

		if (section.type === sidebar.types.DEFAULT) html += renderDefault(section);else if (section.type === sidebar.types.TAGS) html += renderTags(section);
	});

	return html;
};

/**
 * @description Swipes and moves an object.
 */

swipe = {

	obj: null,
	tolerance: 150,
	offset: 0

};

swipe.start = function (obj, tolerance) {

	if (obj) swipe.obj = obj;
	if (tolerance) swipe.tolerance = tolerance;

	return true;
};

swipe.move = function (e) {

	if (swipe.obj === null) return false;

	swipe.offset = -1 * e.x;

	swipe.obj.css({
		WebkitTransform: 'translateX(' + swipe.offset + 'px)',
		MozTransform: 'translateX(' + swipe.offset + 'px)',
		transform: 'translateX(' + swipe.offset + 'px)'
	});
};

swipe.stop = function (e, left, right) {

	// Only execute once
	if (swipe.obj == null) return false;

	if (e.x <= -swipe.tolerance) {

		left(true);
	} else if (e.x >= swipe.tolerance) {

		right(true);
	} else {

		swipe.obj.css({
			WebkitTransform: 'translateX(0px)',
			MozTransform: 'translateX(0px)',
			transform: 'translateX(0px)'
		});
	}

	swipe.obj = null;
	swipe.offset = 0;
};
/**
 * @description Takes care of every action an album can handle and execute.
 */

upload = {};

upload.show = function (title, files, callback) {

	basicModal.show({
		body: build.uploadModal(title, files),
		buttons: {
			action: {
				title: lychee.locale['CLOSE'],
				class: 'hidden',
				fn: basicModal.close
			}
		},
		callback: callback
	});
};

upload.notify = function (title, text) {

	if (text == null || text === '') text = lychee.locale['UPLOAD_MANAGE_NEW_PHOTOS'];

	if (!window.webkitNotifications) return false;

	if (window.webkitNotifications.checkPermission() !== 0) window.webkitNotifications.requestPermission();

	if (window.webkitNotifications.checkPermission() === 0 && title) {
		var popup = window.webkitNotifications.createNotification('', title, text);
		popup.show();
	}
};

upload.start = {

	local: function local(files) {

		var albumID = album.getID();
		var error = false;
		var warning = false;

		var process = function process(files, file) {

			var formData = new FormData();
			var xhr = new XMLHttpRequest();
			var pre_progress = 0;
			var progress = 0;
			var next_file_started = false;

			var finish = function finish() {

				window.onbeforeunload = null;

				$('#upload_files').val('');

				if (error === false && warning === false) {

					// Success
					basicModal.close();
					upload.notify(lychee.locale['UPLOAD_COMPLETE']);
				} else if (error === false && warning === true) {

					// Warning
					$('.basicModal #basicModal__action.hidden').show();
					upload.notify(lychee.locale['UPLOAD_COMPLETE']);
				} else {

					// Error
					$('.basicModal #basicModal__action.hidden').show();
					upload.notify(lychee.locale['UPLOAD_COMPLETE'], lychee.locale['UPLOAD_COMPLETE_FAILED']);
				}

				albums.refresh();

				if (album.getID() === false) lychee.goto('0');else album.load(albumID);
			};

			formData.append('function', 'Photo::add');
			formData.append('albumID', albumID);
			formData.append(0, file);

			var api_url = api.get_url('Photo::add');

			xhr.open('POST', api_url);

			xhr.onload = function () {

				var data = null;
				var wait = false;
				var errorText = '';

				var isNumber = function isNumber(n) {
					return !isNaN(parseFloat(n)) && isFinite(n);
				};

				try {
					data = JSON.parse(xhr.responseText);
				} catch (e) {
					data = '';
				}

				file.ready = true;

				// Set status
				if (xhr.status === 200 && isNumber(data)) {

					// Success
					$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html(lychee.locale['UPLOAD_FINISHED']).addClass('success');
				} else {

					if (data.substr(0, 6) === 'Error:') {

						errorText = data.substr(6) + ' ' + lychee.locale['UPLOAD_ERROR_CONSOLE'];
						error = true;

						// Error Status
						$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html(lychee.locale['UPLOAD_FAILED']).addClass('error');

						// Throw error
						if (error === true) lychee.error(lychee.locale['UPLOAD_FAILED_ERROR'], xhr, data);
					} else if (data.substr(0, 8) === 'Warning:') {

						errorText = data.substr(8);
						warning = true;

						// Warning Status
						$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html(lychee.locale['UPLOAD_SKIPPED']).addClass('warning');

						// Throw error
						if (error === true) lychee.error(lychee.locale['UPLOAD_FAILED_WARNING'], xhr, data);
					} else {

						errorText = lychee.locale['UPLOAD_UNKNOWN'];
						error = true;

						// Error Status
						$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html(lychee.locale['UPLOAD_FAILED']).addClass('error');

						// Throw error
						if (error === true) lychee.error(lychee.locale['UPLOAD_ERROR_UNKNOWN'], xhr, data);
					}

					$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') p.notice').html(errorText).show();
				}

				// Check if there are file which are not finished
				for (var i = 0; i < files.length; i++) {

					if (files[i].ready === false) {
						wait = true;
						break;
					}
				}

				// Finish upload when all files are finished
				if (wait === false) finish();
			};

			xhr.upload.onprogress = function (e) {

				if (e.lengthComputable !== true) return false;

				// Calculate progress
				progress = e.loaded / e.total * 100 | 0;

				// Set progress when progress has changed
				if (progress > pre_progress) {
					$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html(progress + '%');
					pre_progress = progress;
				}

				if (progress >= 100 && next_file_started === false) {

					// Scroll to the uploading file
					var scrollPos = 0;
					if (file.num + 1 > 4) scrollPos = (file.num + 1 - 4) * 40;
					$('.basicModal .rows').scrollTop(scrollPos);

					// Set status to processing
					$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html(lychee.locale['UPLOAD_PROCESSING']);

					// Upload next file
					if (file.next != null) {
						process(files, file.next);
						next_file_started = true;
					}
				}
			};

			xhr.setRequestHeader('X-XSRF-TOKEN', csrf.getCookie('XSRF-TOKEN'));
			xhr.send(formData);
		};

		if (files.length <= 0) return false;
		if (albumID === false || visible.albums() === true) albumID = 0;

		for (var i = 0; i < files.length; i++) {

			files[i].num = i;
			files[i].ready = false;

			if (i < files.length - 1) files[i].next = files[i + 1];else files[i].next = null;
		}

		window.onbeforeunload = function () {
			return lychee.locale['UPLOAD_IN_PROGRESS'];
		};

		upload.show(lychee.locale['UPLOAD_UPLOADING'], files, function () {

			// Upload first file
			process(files, files[0]);
		});
	},

	url: function url() {
		var _url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		var albumID = album.getID();

		_url = typeof _url === 'string' ? _url : '';

		if (albumID === false) albumID = 0;

		var action = function action(data) {

			var files = [];

			if (data.link && data.link.length > 3) {

				basicModal.close();

				files[0] = {
					name: data.link
				};

				upload.show(lychee.locale['UPLOAD_IMPORTING_URL'], files, function () {

					$('.basicModal .rows .row .status').html(lychee.locale['UPLOAD_IMPORTING']);

					var params = {
						url: data.link,
						albumID: albumID
					};

					api.post('Import::url', params, function (data) {

						// Same code as in import.dropbox()

						if (data !== true) {

							$('.basicModal .rows .row p.notice').html(lychee.locale['UPLOAD_IMPORT_WARN_ERR']).show();

							$('.basicModal .rows .row .status').html(lychee.locale['UPLOAD_FINISHED']).addClass('warning');

							// Show close button
							$('.basicModal #basicModal__action.hidden').show();

							// Log error
							lychee.error(null, params, data);
						} else {

							basicModal.close();
						}

						upload.notify(lychee.locale['UPLOAD_IMPORT_COMPLETE']);

						albums.refresh();

						if (album.getID() === false) lychee.goto('0');else album.load(albumID);
					});
				});
			} else basicModal.error('link');
		};

		basicModal.show({
			body: lychee.html(_templateObject51) + lychee.locale['UPLOAD_IMPORT_INSTR'] + (' <input class=\'text\' name=\'link\' type=\'text\' placeholder=\'http://\' value=\'' + _url + '\'></p>'),
			buttons: {
				action: {
					title: lychee.locale['UPLOAD_IMPORT'],
					fn: action
				},
				cancel: {
					title: lychee.locale['CANCEL'],
					fn: basicModal.close
				}
			}
		});
	},

	server: function server() {

		var albumID = album.getID();
		if (albumID === false) albumID = 0;

		var action = function action(data) {

			var files = [];

			files[0] = {
				name: data.path
			};

			upload.show(lychee.locale['UPLOAD_IMPORT_SERVER'], files, function () {

				$('.basicModal .rows .row .status').html(lychee.locale['UPLOAD_IMPORTING']);

				var params = {
					albumID: albumID,
					path: data.path
				};

				api.post('Import::server', params, function (data) {

					albums.refresh();
					upload.notify(lychee.locale['UPLOAD_IMPORT_COMPLETE']);

					if (data === 'Notice: Import only contained albums!') {

						// No error, but the folder only contained albums

						// Go back to the album overview to show the imported albums
						if (visible.albums()) lychee.load();else lychee.goto();

						basicModal.close();

						return true;
					} else if (data === 'Warning: Folder empty or no readable files to process!') {

						// Error because the import could not start

						$('.basicModal .rows .row p.notice').html(lychee.locale['UPLOAD_IMPORT_SERVER_FOLD']).show();

						$('.basicModal .rows .row .status').html(lychee.locale['UPLOAD_FAILED']).addClass('error');

						// Log error
						lychee.error(lychee.locale['UPLOAD_IMPORT_SERVER_EMPT'], params, data);
					} else if (data !== true) {

						// Maybe an error, maybe just some skipped photos

						$('.basicModal .rows .row p.notice').html(lychee.locale['UPLOAD_IMPORT_WARN_ERR']).show();

						$('.basicModal .rows .row .status').html(lychee.locale['UPLOAD_FINISHED']).addClass('warning');

						// Log error
						lychee.error(null, params, data);
					} else {

						// No error, everything worked fine

						basicModal.close();
					}

					if (album.getID() === false) lychee.goto('0');else album.load(albumID);

					// Show close button
					$('.basicModal #basicModal__action.hidden').show();
				});
			});
		};

		basicModal.show({
			body: lychee.html(_templateObject51) + lychee.locale['UPLOAD_IMPORT_SERVER_INSTR'] + ' <input class=\'text\' name=\'path\' type=\'text\' maxlength=\'100\' placeholder=\'' + lychee.locale['UPLOAD_ABSOLUTE_PATH'] + ('\' value=\'' + lychee.location + 'uploads/import/\'></p>'),
			buttons: {
				action: {
					title: lychee.locale['UPLOAD_IMPORT'],
					fn: action
				},
				cancel: {
					title: lychee.locale['CANCEL'],
					fn: basicModal.close
				}
			}
		});
	},

	dropbox: function dropbox() {

		var albumID = album.getID();
		if (albumID === false) albumID = 0;

		var success = function success(files) {

			var links = '';

			for (var i = 0; i < files.length; i++) {

				links += files[i].link + ',';

				files[i] = {
					name: files[i].link
				};
			}

			// Remove last comma
			links = links.substr(0, links.length - 1);

			upload.show('Importing from Dropbox', files, function () {

				$('.basicModal .rows .row .status').html(lychee.locale['UPLOAD_IMPORTING']);

				var params = {
					url: links,
					albumID: albumID
				};

				api.post('Import::url', params, function (data) {

					// Same code as in import.url()

					if (data !== true) {

						$('.basicModal .rows .row p.notice').html(lychee.locale['UPLOAD_IMPORT_WARN_ERR']).show();

						$('.basicModal .rows .row .status').html(lychee.locale['UPLOAD_FINISHED']).addClass('warning');

						// Show close button
						$('.basicModal #basicModal__action.hidden').show();

						// Log error
						lychee.error(null, params, data);
					} else {

						basicModal.close();
					}

					upload.notify(lychee.locale['UPLOAD_IMPORT_COMPLETE']);

					albums.refresh();

					if (album.getID() === false) lychee.goto('0');else album.load(albumID);
				});
			});
		};

		lychee.loadDropbox(function () {
			Dropbox.choose({
				linkType: 'direct',
				multiselect: true,
				success: success
			});
		});
	}

};

users = {
	json: null
};

users.update = function (params) {

	if ($('#UserData' + params.id + ' .choice input[name="upload"]:checked').length === 1) {
		params.upload = '1';
	} else {
		params.upload = '0';
	}
	if ($('#UserData' + params.id + ' .choice input[name="lock"]:checked').length === 1) {
		params.lock = '1';
	} else {
		params.lock = '0';
	}

	api.post('User::Save', params, function (data) {
		if (data !== true) {
			loadingBar.show('error', data.description);
			lychee.error(null, params, data);
		} else {
			loadingBar.show('success', 'User updated!');
			users.list(); // reload user list
		}
	});
};

users.create = function (params) {

	if ($('#UserCreate .choice input[name="upload"]:checked').length === 1) {
		params.upload = '1';
	} else {
		params.upload = '0';
	}
	if ($('#UserCreate .choice input[name="lock"]:checked').length === 1) {
		params.lock = '1';
	} else {
		params.lock = '0';
	}

	api.post('User::Create', params, function (data) {
		if (data !== true) {
			loadingBar.show('error', data.description);
			lychee.error(null, params, data);
		} else {
			loadingBar.show('success', 'User created!');
			users.list(); // reload user list
		}
	});
};

users.delete = function (params) {

	api.post('User::Delete', params, function (data) {
		if (data !== true) {
			loadingBar.show('error', data.description);
			lychee.error(null, params, data);
		} else {
			loadingBar.show('success', 'User deleted!');
			users.list(); // reload user list
		}
	});
};

users.list = function () {
	api.post('User::List', {}, function (data) {
		users.json = data;
		view.users.init();
	});
};
/**
 * @description Responsible to reflect data changes to the UI.
 */

view = {};

view.albums = {

	init: function init() {

		multiselect.clearSelection();

		view.albums.title();
		view.albums.content.init();
	},

	title: function title() {

		if (lychee.landing_page_enable) {
			if (lychee.title !== 'Lychee v4') {
				lychee.setTitle(lychee.title, false);
			} else {
				lychee.setTitle(lychee.locale['ALBUMS'], false);
			}
		} else {
			lychee.setTitle(lychee.locale['ALBUMS'], false);
		}
	},

	content: {

		scrollPosition: 0,

		init: function init() {

			var smartData = '';
			var albumsData = '';
			var sharedData = '';

			// Smart Albums
			if (lychee.publicMode === false && albums.json.smartalbums != null) {

				albums.parse(albums.json.smartalbums.unsorted);
				albums.parse(albums.json.smartalbums.public);
				albums.parse(albums.json.smartalbums.starred);
				albums.parse(albums.json.smartalbums.recent);

				smartData = build.divider(lychee.locale['SMART_ALBUMS']);
				smartData += build.album(albums.json.smartalbums.unsorted);
				smartData += build.album(albums.json.smartalbums.public);
				smartData += build.album(albums.json.smartalbums.starred);
				smartData += build.album(albums.json.smartalbums.recent);
			}

			// Albums
			if (albums.json.albums && albums.json.albums.length !== 0) {

				$.each(albums.json.albums, function () {
					if (!this.parent_id || this.parent_id === 0) {
						albums.parse(this);
						albumsData += build.album(this);
					}
				});

				// Add divider
				if (lychee.publicMode === false) albumsData = build.divider(lychee.locale['ALBUMS']) + albumsData;
			}

			if (lychee.api_V2) {
				var current_owner = '';
				var i = 0;
				// Shared
				if (albums.json.shared_albums && albums.json.shared_albums.length !== 0) {

					for (i = 0; i < albums.json.shared_albums.length; ++i) {
						var alb = albums.json.shared_albums[i];
						if (!alb.parent_id || alb.parent_id === 0) {
							albums.parse(alb);
							if (current_owner !== alb.owner && lychee.publicMode === false) {
								sharedData += build.divider(alb.owner);
								current_owner = alb.owner;
							}
							sharedData += build.album(alb, true);
						}
					}
					// $.each(albums.json.shared_albums, function() {
					// 	if(!this.parent_id || this.parent_id === 0) {
					// 		albums.parse(this);
					// 		sharedData += build.album(this, true)
					// 	}
					// });
					//
					// // Add divider
					// if (lychee.publicMode===false) sharedData = build.divider(lychee.locale['SHARED_ALBUMS']) + sharedData
				}
			}

			if (smartData === '' && albumsData === '' && sharedData === '') {
				lychee.content.html('');
				$('body').append(build.no_content('eye'));
			} else {
				lychee.content.html(smartData + albumsData + sharedData);
			}

			// Restore scroll position
			if (view.albums.content.scrollPosition != null && view.albums.content.scrollPosition !== 0) {
				$(document).scrollTop(view.albums.content.scrollPosition);
			}
		},

		title: function title(albumID) {

			var title = albums.getByID(albumID).title;

			title = lychee.escapeHTML(title);

			$('.album[data-id="' + albumID + '"] .overlay h1').html(title).attr('title', title);
		},

		delete: function _delete(albumID) {

			$('.album[data-id="' + albumID + '"]').css('opacity', 0).animate({
				width: 0,
				marginLeft: 0
			}, 300, function () {
				$(this).remove();
				if (albums.json.albums.length <= 0) lychee.content.find('.divider:last-child').remove();
			});
		}

	}

};

view.album = {

	init: function init() {

		multiselect.clearSelection();

		album.parse();

		view.album.sidebar();
		view.album.title();
		view.album.public();
		view.album.content.init();

		album.json.init = 1;
	},

	title: function title() {

		if ((visible.album() || !album.json.init) && !visible.photo()) {

			switch (album.getID()) {
				case 'f':
					lychee.setTitle(lychee.locale['STARED'], false);
					break;
				case 's':
					lychee.setTitle(lychee.locale['PUBLIC'], false);
					break;
				case 'r':
					lychee.setTitle(lychee.locale['RECENT'], false);
					break;
				case '0':
					lychee.setTitle(lychee.locale['UNSORTED'], false);
					break;
				default:
					if (album.json.init) sidebar.changeAttr('title', album.json.title);
					lychee.setTitle(album.json.title, true);
					break;
			}
		}
	},

	content: {

		init: function init() {

			var photosData = '';
			var albumsData = '';
			var html = '';

			if (album.json.albums && album.json.albums !== false) {
				$.each(album.json.albums, function () {
					albums.parse(this);
					albumsData += build.album(this);
				});
			}
			if (album.json.photos && album.json.photos !== false) {

				// Build photos
				$.each(album.json.photos, function () {
					photosData += build.photo(this);
				});
			}

			if (photosData !== '') {
				if (lychee.layout === '1') {
					photosData = '<div class="justified-layout">' + photosData + '</div>';
				} else if (lychee.layout === '2') {
					photosData = '<div class="unjustified-layout">' + photosData + '</div>';
				}
			}

			if (albumsData !== '' && photosData !== '') {
				html = build.divider(lychee.locale['ALBUMS']);
			}
			html += albumsData;
			if (albumsData !== '' && photosData !== '') {
				html += build.divider(lychee.locale['PHOTOS']);
			}
			html += photosData;

			// Save and reset scroll position
			view.albums.content.scrollPosition = $(document).scrollTop();
			requestAnimationFrame(function () {
				return $(document).scrollTop(0);
			});

			// Add photos to view
			lychee.content.html(html);
			view.album.content.justify();
		},

		title: function title(photoID) {

			var title = album.getByID(photoID).title;

			title = lychee.escapeHTML(title);

			$('.photo[data-id="' + photoID + '"] .overlay h1').html(title).attr('title', title);
		},

		titleSub: function titleSub(albumID) {

			var title = album.getSubByID(albumID).title;

			title = lychee.escapeHTML(title);

			$('.album[data-id="' + albumID + '"] .overlay h1').html(title).attr('title', title);
		},

		star: function star(photoID) {

			var $badge = $('.photo[data-id="' + photoID + '"] .icn-star');

			if (album.getByID(photoID).star === '1') $badge.addClass('badge--star');else $badge.removeClass('badge--star');
		},

		public: function _public(photoID) {

			var $badge = $('.photo[data-id="' + photoID + '"] .icn-share');

			if (album.getByID(photoID).public === '1') $badge.addClass('badge--visible');else $badge.removeClass('badge--visible');
		},

		delete: function _delete(photoID) {
			var justify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


			if (album.json && album.json.num) {
				album.json.num--;
			}
			$('.photo[data-id="' + photoID + '"]').css('opacity', 0).animate({
				width: 0,
				marginLeft: 0
			}, 300, function () {
				$(this).remove();
				// Only when search is not active
				if (album.json) {
					if (album.json.num) {
						view.album.num();
					}
					if (album.json.photos.length <= 0) {
						lychee.content.find('.divider').remove();
					}
					if (justify) {
						view.album.content.justify();
					}
				}
			});
		},

		deleteSub: function deleteSub(albumID) {

			$('.album[data-id="' + albumID + '"]').css('opacity', 0).animate({
				width: 0,
				marginLeft: 0
			}, 300, function () {
				$(this).remove();
				if (album.json && album.json.albums.length <= 0) lychee.content.find('.divider').remove();
			});
		},

		justify: function justify() {
			if (!album.json.photos || album.json.photos === false) return;
			if (lychee.layout === '1') {
				var containerWidth = parseFloat($('.justified-layout').width(), 10);
				if (containerWidth == 0) {
					// Triggered on Reload in photo view.
					containerWidth = $(window).width() - parseFloat($('.justified-layout').css('margin-left'), 10) - parseFloat($('.justified-layout').css('margin-right'), 10);
				}
				var ratio = [];
				$.each(album.json.photos, function (i) {
					ratio[i] = this.height > 0 ? this.width / this.height : 1;
					if (this.type && this.type.indexOf('video') > -1) {
						// Video.  If there's no small and medium, we have
						// to fall back to the square thumb.
						if (this.small === '' && this.medium === '') {
							ratio[i] = 1;
						}
					}
				});
				var layoutGeometry = require('justified-layout')(ratio, {
					containerWidth: containerWidth,
					containerPadding: 0
				});
				if (lychee.admin) console.log(layoutGeometry);
				$('.justified-layout').css('height', layoutGeometry.containerHeight + 'px').css('height', layoutGeometry.containerHeight + 'px');
				$('.justified-layout > div').each(function (i) {
					$(this).css('top', layoutGeometry.boxes[i].top);
					$(this).css('width', layoutGeometry.boxes[i].width);
					$(this).css('height', layoutGeometry.boxes[i].height);
					$(this).css('left', layoutGeometry.boxes[i].left);

					var imgs = $(this).find(".thumbimg > img");
					if (imgs.length > 0 && imgs[0].getAttribute('data-srcset')) {
						imgs[0].setAttribute('sizes', layoutGeometry.boxes[i].width + 'px');
					}
				});
			} else if (lychee.layout === '2') {
				var _containerWidth = parseFloat($('.unjustified-layout').width(), 10);
				if (_containerWidth == 0) {
					// Triggered on Reload in photo view.
					_containerWidth = $(window).width() - parseFloat($('.unjustified-layout').css('margin-left'), 10) - parseFloat($('.unjustified-layout').css('margin-right'), 10);
				}
				$('.unjustified-layout > div').each(function (i) {
					var ratio = album.json.photos[i].height > 0 ? album.json.photos[i].width / album.json.photos[i].height : 1;
					if (album.json.photos[i].type && album.json.photos[i].type.indexOf('video') > -1) {
						// Video.  If there's no small and medium, we have
						// to fall back to the square thumb.
						if (album.json.photos[i].small === '' && album.json.photos[i].medium === '') {
							ratio = 1;
						}
					}

					var height = parseFloat($(this).css('max-height'), 10);
					var width = height * ratio;
					var margin = parseFloat($(this).css('margin-right'), 10);
					var imgs = $(this).find(".thumbimg > img");

					if (width > _containerWidth - margin) {
						width = _containerWidth - margin;
						height = width / ratio;
					}

					$(this).css('width', width + 'px');
					$(this).css('height', height + 'px');
					if (imgs.length > 0 && imgs[0].getAttribute('data-srcset')) {
						imgs[0].setAttribute('sizes', width + 'px');
					}
				});
			}
		}

	},

	description: function description() {

		sidebar.changeAttr('description', album.json.description);
	},

	license: function (_license) {
		function license() {
			return _license.apply(this, arguments);
		}

		license.toString = function () {
			return _license.toString();
		};

		return license;
	}(function () {

		switch (album.json.license) {
			case 'none':
				license = ''; // none is displayed as - thus is empty.
				break;
			case 'reserved':
				license = lychee.locale['ALBUM_RESERVED'];
				break;
			default:
				license = album.json.license;
				console.log('default');
				break;
		}

		sidebar.changeAttr('license', license);
	}),

	num: function num() {

		sidebar.changeAttr('images', album.json.num);
	},

	public: function _public() {

		if (album.json.public === '1') {

			$('#button_share_album').addClass('active').attr('title', lychee.locale['SHARE_ALBUM']);

			$('.photo .iconic-share').remove();

			if (album.json.init) sidebar.changeAttr('public', lychee.locale['ALBUM_SHR_YES']);
		} else {

			$('#button_share_album').removeClass('active').attr('title', lychee.locale['MAKE_PUBLIC']);

			if (album.json.init) sidebar.changeAttr('public', lychee.locale['ALBUM_SHR_NO']);
		}
	},

	hidden: function hidden() {

		if (album.json.visible === '1') sidebar.changeAttr('hidden', lychee.locale['ALBUM_SHR_NO']);else sidebar.changeAttr('hidden', lychee.locale['ALBUM_SHR_YES']);
	},

	downloadable: function downloadable() {

		if (album.json.downloadable === '1') sidebar.changeAttr('downloadable', lychee.locale['ALBUM_SHR_YES']);else sidebar.changeAttr('downloadable', lychee.locale['ALBUM_SHR_NO']);
	},

	password: function password() {

		if (album.json.password === '1') sidebar.changeAttr('password', lychee.locale['ALBUM_SHR_YES']);else sidebar.changeAttr('password', lychee.locale['ALBUM_SHR_NO']);
	},

	sidebar: function (_sidebar) {
		function sidebar() {
			return _sidebar.apply(this, arguments);
		}

		sidebar.toString = function () {
			return _sidebar.toString();
		};

		return sidebar;
	}(function () {

		if ((visible.album() || !album.json.init) && !visible.photo()) {

			var structure = sidebar.createStructure.album(album.json);
			var html = sidebar.render(structure);

			sidebar.dom('.sidebar__wrapper').html(html);
			sidebar.bind();
		}
	})

};

view.photo = {

	init: function init() {

		multiselect.clearSelection();

		photo.parse();

		view.photo.sidebar();
		view.photo.title();
		view.photo.star();
		view.photo.public();
		view.photo.photo();

		photo.json.init = 1;
	},

	show: function show() {

		// Change header
		lychee.content.addClass('view');
		header.setMode('photo');

		// Make body not scrollable
		$('body').css('overflow', 'hidden');

		// Fullscreen
		var timeout = null;
		$(document).bind('mousemove', function () {
			clearTimeout(timeout);
			header.show();
			timeout = setTimeout(header.hide, 2500);
		});

		lychee.animate(lychee.imageview, 'fadeIn');
	},

	hide: function hide() {

		header.show();

		lychee.content.removeClass('view');
		header.setMode('album');

		// Make body scrollable
		$('body').css('overflow', 'auto');

		// Disable Fullscreen
		$(document).unbind('mousemove');
		if ($('video').length) {
			$('video')[$('video').length - 1].pause();
		}

		// Hide Photo
		lychee.animate(lychee.imageview, 'fadeOut');
		setTimeout(function () {
			lychee.imageview.hide();
			view.album.sidebar();
		}, 300);
	},

	title: function title() {

		if (photo.json.init) sidebar.changeAttr('title', photo.json.title);
		lychee.setTitle(photo.json.title, true);
	},

	description: function description() {

		if (photo.json.init) sidebar.changeAttr('description', photo.json.description);
	},

	license: function license() {
		var license = void 0;

		// Process key to display correct string
		switch (album.json.license) {
			case 'none':
				license = ''; // none is displayed as - thus is empty (uniformity of the display).
				break;
			case 'reserved':
				license = lychee.locale['PHOTO_RESERVED'];
				break;
			default:
				license = photo.json.license;
				break;
		}

		// Update the sidebar if the photo is visible
		if (photo.json.init) sidebar.changeAttr('license', license);
	},

	star: function star() {

		if (photo.json.star === '1') {

			// Starred
			$('#button_star').addClass('active').attr('title', lychee.locale['UNSTAR_PHOTO']);
		} else {

			// Unstarred
			$('#button_star').removeClass('active').attr('title', lychee.locale['STAR_PHOTO']);
		}
	},

	public: function _public() {

		if (photo.json.public === '1' || photo.json.public === '2') {

			// Photo public
			$('#button_share').addClass('active').attr('title', lychee.locale['SHARE_PHOTO']);

			if (photo.json.init) sidebar.changeAttr('public', lychee.locale['PHOTO_SHR_YES']);
		} else {

			// Photo private
			$('#button_share').removeClass('active').attr('title', 'Make Public');

			if (photo.json.init) sidebar.changeAttr('public', 'No');
		}
	},

	tags: function tags() {

		sidebar.changeAttr('tags', build.tags(photo.json.tags), true);
		sidebar.bind();
	},

	photo: function (_photo) {
		function photo() {
			return _photo.apply(this, arguments);
		}

		photo.toString = function () {
			return _photo.toString();
		};

		return photo;
	}(function () {

		lychee.imageview.html(build.imageview(photo.json, visible.header()));
		view.photo.onresize();

		var $nextArrow = lychee.imageview.find('a#next');
		var $previousArrow = lychee.imageview.find('a#previous');
		var photoID = photo.getID();
		var hasNext = album.json && album.json.photos && album.getByID(photoID) && album.getByID(photoID).nextPhoto != null && album.getByID(photoID).nextPhoto !== '';
		var hasPrevious = album.json && album.json.photos && album.getByID(photoID) && album.getByID(photoID).previousPhoto != null && album.getByID(photoID).previousPhoto !== '';

		if (hasNext === false || lychee.viewMode === true) {

			$nextArrow.hide();
		} else {

			var nextPhotoID = album.getByID(photoID).nextPhoto;
			var nextPhoto = album.getByID(nextPhotoID);

			$nextArrow.css('background-image', lychee.html(_templateObject52, nextPhoto.thumbUrl));
		}

		if (hasPrevious === false || lychee.viewMode === true) {

			$previousArrow.hide();
		} else {

			var previousPhotoID = album.getByID(photoID).previousPhoto;
			var previousPhoto = album.getByID(previousPhotoID);

			$previousArrow.css('background-image', lychee.html(_templateObject52, previousPhoto.thumbUrl));
		}
	}),

	sidebar: function (_sidebar2) {
		function sidebar() {
			return _sidebar2.apply(this, arguments);
		}

		sidebar.toString = function () {
			return _sidebar2.toString();
		};

		return sidebar;
	}(function () {

		var structure = sidebar.createStructure.photo(photo.json);
		var html = sidebar.render(structure);

		sidebar.dom('.sidebar__wrapper').html(html);
		sidebar.bind();
	}),

	onresize: function onresize() {
		if (photo.json.medium === '' || !photo.json.medium2x || photo.json.medium2x === '') return;

		// Calculate the width of the image in the current window and
		// set 'sizes' to it.
		var imgWidth = parseInt(photo.json.medium_dim);
		var imgHeight = photo.json.medium_dim.substr(photo.json.medium_dim.lastIndexOf('x') + 1);
		var containerWidth = parseFloat($('#imageview').width(), 10);
		var containerHeight = parseFloat($('#imageview').height(), 10);

		// Image can be no larger than its natural size, but it can be
		// smaller depending on the size of the window.
		var width = imgWidth < containerWidth ? imgWidth : containerWidth;
		var height = width * imgHeight / imgWidth;
		if (height > containerHeight) {
			width = containerHeight * imgWidth / imgHeight;
		}

		$('img#image').attr('sizes', width + 'px');
	}

};

view.settings = {

	init: function init() {

		multiselect.clearSelection();

		view.settings.title();
		view.settings.content.init();
	},

	title: function title() {

		lychee.setTitle('Settings', false);
	},

	clearContent: function clearContent() {
		lychee.content.unbind('mousedown');
		lychee.content.html('<div class="settings_view"></div>');
	},

	content: {

		init: function init() {
			view.settings.clearContent();
			view.settings.content.setLogin();
			if (lychee.admin) {
				view.settings.content.setSorting();
				view.settings.content.setDropboxKey();
				view.settings.content.setLang();
				view.settings.content.setDefaultLicense();
				view.settings.content.setLayout();
				view.settings.content.setPublicSearch();
				view.settings.content.setOverlay();
				view.settings.content.setOverlayType();
				view.settings.content.setCSS();
				view.settings.content.moreButton();
			}
		},

		setLogin: function setLogin() {
			var msg = '\n\t\t\t<div class="setLogin">\n\t\t\t  <p>\n\t\t\t\t  ' + lychee.locale['PASSWORD_TITLE'] + '\n\t\t\t\t  <input name=\'oldUsername\' class=\'text\' type=\'text\' placeholder=\'' + lychee.locale['USERNAME_CURRENT'] + '\' value=\'\'>\n\t\t\t\t  <input name=\'oldPassword\' class=\'text\' type=\'password\' placeholder=\'' + lychee.locale['PASSWORD_CURRENT'] + '\' value=\'\'>\n\t\t\t  </p>\n\t\t\t  <p>\n\t\t\t\t  ' + lychee.locale['PASSWORD_TEXT'] + '\n\t\t\t\t  <input name=\'username\' class=\'text\' type=\'text\' placeholder=\'' + lychee.locale['LOGIN_USERNAME'] + '\' value=\'\'>\n\t\t\t\t  <input name=\'password\' class=\'text\' type=\'password\' placeholder=\'' + lychee.locale['LOGIN_PASSWORD'] + '\' value=\'\'>\n\t\t\t\t  <input name=\'confirm\' class=\'text\' type=\'password\' placeholder=\'' + lychee.locale['LOGIN_PASSWORD_CONFIRM'] + '\' value=\'\'>\n\t\t\t  </p>\n\t\t\t<div class="basicModal__buttons">\n\t\t\t\t<!--<a id="basicModal__cancel" class="basicModal__button ">Cancel</a>-->\n\t\t\t\t<a id="basicModal__action_password_change" class="basicModal__button ">' + lychee.locale['PASSWORD_CHANGE'] + '</a>\n\t\t\t</div>\n\t\t\t</div>';

			$(".settings_view").append(msg);

			settings.bind('#basicModal__action_password_change', '.setLogin', settings.changeLogin);
		},

		clearLogin: function clearLogin() {
			$('input[name=oldUsername], input[name=oldPassword], input[name=username], input[name=password], input[name=confirm]').val('');
		},

		setSorting: function setSorting() {

			var sortingPhotos = [];
			var sortingAlbums = [];

			var msg = '\n\t\t\t<div class="setSorting">\n\t\t\t  <p>' + lychee.locale['SORT_ALBUM_BY_1'] + '\n\t\t\t\t  <span class="select">\n\t\t\t\t\t  <select id="settings_albums_type" name="typeAlbums">\n\t\t\t\t\t\t  <option value=\'id\'>' + lychee.locale['SORT_ALBUM_SELECT_1'] + '</option>\n\t\t\t\t\t\t  <option value=\'title\'>' + lychee.locale['SORT_ALBUM_SELECT_2'] + '</option>\n\t\t\t\t\t\t  <option value=\'description\'>' + lychee.locale['SORT_ALBUM_SELECT_3'] + '</option>\n\t\t\t\t\t\t  <option value=\'public\'>' + lychee.locale['SORT_ALBUM_SELECT_4'] + '</option>\n\t\t\t\t\t\t  <option value=\'max_takestamp\'>' + lychee.locale['SORT_ALBUM_SELECT_5'] + '</option>\n\t\t\t\t\t\t  <option value=\'min_takestamp\'>' + lychee.locale['SORT_ALBUM_SELECT_6'] + '</option>\n\t\t\t\t\t  </select>\n\t\t\t\t  </span>\n\t\t\t\t  ' + lychee.locale['SORT_ALBUM_BY_2'] + '\n\t\t\t\t  <span class="select">\n\t\t\t\t\t  <select id="settings_albums_order" name="orderAlbums">\n\t\t\t\t\t\t  <option value=\'ASC\'>' + lychee.locale['SORT_ASCENDING'] + '</option>\n\t\t\t\t\t\t  <option value=\'DESC\'>' + lychee.locale['SORT_DESCENDING'] + '</option>\n\t\t\t\t\t  </select>\n\t\t\t\t  </span>\n\t\t\t\t  ' + lychee.locale['SORT_ALBUM_BY_3'] + '\n\t\t\t  </p>\n\t\t\t  <p>' + lychee.locale['SORT_PHOTO_BY_1'] + '\n\t\t\t\t  <span class="select">\n\t\t\t\t\t  <select id="settings_photos_type" name="typePhotos">\n\t\t\t\t\t\t  <option value=\'id\'>' + lychee.locale['SORT_PHOTO_SELECT_1'] + '</option>\n\t\t\t\t\t\t  <option value=\'takestamp\'>' + lychee.locale['SORT_PHOTO_SELECT_2'] + '</option>\n\t\t\t\t\t\t  <option value=\'title\'>' + lychee.locale['SORT_PHOTO_SELECT_3'] + '</option>\n\t\t\t\t\t\t  <option value=\'description\'>' + lychee.locale['SORT_PHOTO_SELECT_4'] + '</option>\n\t\t\t\t\t\t  <option value=\'public\'>' + lychee.locale['SORT_PHOTO_SELECT_5'] + '</option>\n\t\t\t\t\t\t  <option value=\'star\'>' + lychee.locale['SORT_PHOTO_SELECT_6'] + '</option>\n\t\t\t\t\t\t  <option value=\'type\'>' + lychee.locale['SORT_PHOTO_SELECT_7'] + '</option>\n\t\t\t\t\t  </select>\n\t\t\t\t  </span>\n\t\t\t\t  ' + lychee.locale['SORT_PHOTO_BY_2'] + '\n\t\t\t\t  <span class="select">\n\t\t\t\t\t  <select id="settings_photos_order" name="orderPhotos">\n\t\t\t\t\t\t  <option value=\'ASC\'>' + lychee.locale['SORT_ASCENDING'] + '</option>\n\t\t\t\t\t\t  <option value=\'DESC\'>' + lychee.locale['SORT_DESCENDING'] + '</option>\n\t\t\t\t\t  </select>\n\t\t\t\t  </span>\n\t\t\t\t  ' + lychee.locale['SORT_PHOTO_BY_3'] + '\n\t\t\t  </p>\n\t\t\t\t<div class="basicModal__buttons">\n\t\t\t\t\t<!--<a id="basicModal__cancel" class="basicModal__button ">Cancel</a>-->\n\t\t\t\t\t<a id="basicModal__action_sorting_change" class="basicModal__button ">' + lychee.locale['SORT_CHANGE'] + '</a>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t  ';

			$(".settings_view").append(msg);

			if (lychee.sortingAlbums !== '') {

				sortingAlbums = lychee.sortingAlbums.replace('ORDER BY ', '').split(' ');

				$('.setSorting select#settings_albums_type').val(sortingAlbums[0]);
				$('.setSorting select#settings_albums_order').val(sortingAlbums[1]);
			}

			if (lychee.sortingPhotos !== '') {

				sortingPhotos = lychee.sortingPhotos.replace('ORDER BY ', '').split(' ');

				$('.setSorting select#settings_photos_type').val(sortingPhotos[0]);
				$('.setSorting select#settings_photos_order').val(sortingPhotos[1]);
			}

			settings.bind('#basicModal__action_sorting_change', '.setSorting', settings.changeSorting);
		},

		setDropboxKey: function setDropboxKey() {
			var msg = '\n\t\t\t<div class="setDropBox">\n\t\t\t  <p>' + lychee.locale['DROPBOX_TEXT'] + '\n\t\t\t  <input class=\'text\' name=\'key\' type=\'text\' placeholder=\'Dropbox API Key\' value=\'' + lychee.dropboxKey + '\'>\n\t\t\t  </p>\n\t\t\t\t<div class="basicModal__buttons">\n\t\t\t\t\t<a id="basicModal__action_dropbox_change" class="basicModal__button">' + lychee.locale['DROPBOX_TITLE'] + '</a>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t  ';

			$(".settings_view").append(msg);
			settings.bind('#basicModal__action_dropbox_change', '.setDropBox', settings.changeDropboxKey);
		},

		setLang: function setLang() {
			var msg = '\n\t\t\t<div class="setLang">\n\t\t\t<p>' + lychee.locale['LANG_TEXT'] + '\n\t\t\t  <span class="select">\n\t\t\t\t  <select id="settings_photos_order" name="lang">';
			var i = 0;
			while (i < lychee.lang_available.length) {
				var lang_av = lychee.lang_available[i];
				msg += '<option ' + (lychee.lang === lang_av ? 'selected' : '') + '>' + lang_av + '</option>';
				i += 1;
			}
			msg += '\n\t\t\t\t  </select>\n\t\t\t  </span>\n\t\t\t</p>\n\t\t\t<div class="basicModal__buttons">\n\t\t\t\t<a id="basicModal__action_set_lang" class="basicModal__button">' + lychee.locale['LANG_TITLE'] + '</a>\n\t\t\t</div>\n\t\t\t</div>';

			$(".settings_view").append(msg);
			settings.bind('#basicModal__action_set_lang', '.setLang', settings.changeLang);
		},

		setDefaultLicense: function setDefaultLicense() {
			var msg = '\n\t\t\t<div class="setDefaultLicense">\n\t\t\t<p>' + lychee.locale['DEFAULT_LICENSE'] + '\n\t\t\t<span class="select" style="width:270px">\n\t\t\t\t<select name="license" id="license">\n\t\t\t\t\t<option value="none">' + lychee.locale['PHOTO_LICENSE_NONE'] + '</option>\n\t\t\t\t\t<option value="reserved">' + lychee.locale['PHOTO_RESERVED'] + '</option>\n\t\t\t\t\t<option value="CC0">CC0 - Public Domain</option>\n\t\t\t\t\t<option value="CC-BY">CC Attribution 4.0</option>\n\t\t\t\t\t<option value="CC-BY-ND">CC Attribution-NoDerivatives 4.0</option>\n\t\t\t\t\t<option value="CC-BY-SA">CC Attribution-ShareAlike 4.0</option>\n\t\t\t\t\t<option value="CC-BY-NC">CC Attribution-NonCommercial 4.0</option>\n\t\t\t\t\t<option value="CC-BY-NC-ND">CC Attribution-NonCommercial-NoDerivatives 4.0</option>\n\t\t\t\t\t<option value="CC-BY-NC-SA">CC Attribution-NonCommercial-ShareAlike 4.0</option>\n\t\t\t\t</select>\n\t\t\t</span>\n\t\t\t<br />\n\t\t\t<a href="https://creativecommons.org/choose/" target="_blank">' + lychee.locale['PHOTO_LICENSE_HELP'] + '</a>\n\t\t\t</p>\n\t\t\t<div class="basicModal__buttons">\n\t\t\t\t<a id="basicModal__action_set_license" class="basicModal__button">' + lychee.locale['SET_LICENSE'] + '</a>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t';
			$(".settings_view").append(msg);
			$('select#license').val(lychee.default_license === '' ? 'none' : lychee.default_license);
			settings.bind('#basicModal__action_set_license', '.setDefaultLicense', settings.setDefaultLicense);
		},

		setLayout: function setLayout() {
			var msg = '\n\t\t\t<div class="setLayout">\n\t\t\t<p>' + lychee.locale['LAYOUT_TYPE'] + '\n\t\t\t<span class="select" style="width:270px">\n\t\t\t\t<select name="layout" id="layout">\n\t\t\t\t\t<option value="0">' + lychee.locale['LAYOUT_SQUARES'] + '</option>\n\t\t\t\t\t<option value="1">' + lychee.locale['LAYOUT_JUSTIFIED'] + '</option>\n\t\t\t\t\t<option value="2">' + lychee.locale['LAYOUT_UNJUSTIFIED'] + '</option>\n\t\t\t\t</select>\n\t\t\t</span>\n\t\t\t</p>\n\t\t\t<div class="basicModal__buttons">\n\t\t\t\t<a id="basicModal__action_set_layout" class="basicModal__button">' + lychee.locale['SET_LAYOUT'] + '</a>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t';
			$(".settings_view").append(msg);
			$('select#layout').val(lychee.layout);
			settings.bind('#basicModal__action_set_layout', '.setLayout', settings.setLayout);
		},

		setPublicSearch: function setPublicSearch() {
			var msg = '\n\t\t\t<div class="setPublicSearch">\n\t\t\t<p>' + lychee.locale['PUBLIC_SEARCH_TEXT'] + '\n\t\t\t<label class="switch">\n\t\t\t  <input id="PublicSearch" type="checkbox">\n\t\t\t  <span class="slider round"></span>\n\t\t\t</label>\n\t\t\t</p>\n\t\t\t</div>\n\t\t\t';

			$(".settings_view").append(msg);
			if (lychee.public_search) $('#PublicSearch').click();

			settings.bind('#PublicSearch', '.setPublicSearch', settings.changePublicSearch);
		},

		setOverlay: function setOverlay() {
			var msg = '\n\t\t\t<div class="setOverlay">\n\t\t\t<p>' + lychee.locale['IMAGE_OVERLAY_TEXT'] + '\n\t\t\t<label class="switch">\n\t\t\t  <input id="ImageOverlay" type="checkbox">\n\t\t\t  <span class="slider round"></span>\n\t\t\t</label>\n\t\t\t</p>\n\t\t\t</div>\n\t\t\t';

			$(".settings_view").append(msg);
			if (lychee.image_overlay_default) $('#ImageOverlay').click();

			settings.bind('#ImageOverlay', '.setOverlay', settings.changeImageOverlay);
		},

		setOverlayType: function setOverlayType() {
			var msg = '\n\t\t\t<div class="setOverlayType">\n\t\t\t<p>' + lychee.locale['OVERLAY_TYPE'] + '\n\t\t\t<span class="select" style="width:270px">\n\t\t\t\t<select name="OverlayType" id="ImgOverlayType">\n\t\t\t\t\t<option value="exif">' + lychee.locale['OVERLAY_EXIF'] + '</option>\n\t\t\t\t\t<option value="desc">' + lychee.locale['OVERLAY_DESCRIPTION'] + '</option>\n\t\t\t\t\t<option value="takedate">' + lychee.locale['OVERLAY_DATE'] + '</option>\n\t\t\t\t</select>\n\t\t\t</span>\n\t\t\t<div class="basicModal__buttons">\n\t\t\t\t<a id="basicModal__action_set_overlay_type" class="basicModal__button">' + lychee.locale['SET_OVERLAY_TYPE'] + '</a>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t';

			$(".settings_view").append(msg);

			// Enable based on image_overlay setting
			if (!lychee.image_overlay) $('select#ImgOverlayType').attr('disabled', true);

			$('select#ImgOverlayType').val(!lychee.image_overlay_type_default ? 'exif' : lychee.image_overlay_type_default);
			settings.bind('#basicModal__action_set_overlay_type', '.setOverlayType', settings.setOverlayType);
		},

		setCSS: function setCSS() {
			var msg = '\n\t\t\t<div class="setCSS">\n\t\t\t<p>' + lychee.locale['CSS_TEXT'] + '</p>\n\t\t\t<textarea id="css"></textarea>\n\t\t\t<div class="basicModal__buttons">\n\t\t\t\t<a id="basicModal__action_set_css" class="basicModal__button">' + lychee.locale['CSS_TITLE'] + '</a>\n\t\t\t</div>\n\t\t\t</div>';

			$(".settings_view").append(msg);

			api.get('dist/user.css', function (data) {
				$("#css").html(data);
			});

			settings.bind('#basicModal__action_set_css', '.setCSS', settings.changeCSS);
		},

		moreButton: function moreButton() {
			var msg = lychee.html(_templateObject53, lychee.locale['MORE']);

			$(".settings_view").append(msg);

			$("#basicModal__action_more").on('click', view.full_settings.init);
		}

	}

};

view.full_settings = {

	init: function init() {

		multiselect.clearSelection();

		view.full_settings.title();
		view.full_settings.content.init();
	},

	title: function title() {

		lychee.setTitle('Full Settings', false);
	},

	clearContent: function clearContent() {
		lychee.content.unbind('mousedown');
		lychee.content.html('<div class="settings_view"></div>');
	},

	content: {

		init: function init() {
			view.full_settings.clearContent();

			api.post('Settings::getAll', {}, function (data) {

				var msg = lychee.html(_templateObject54, lychee.locale['SETTINGS_WARNING']);

				var prev = '';
				$.each(data, function () {

					if (this.cat && prev !== this.cat) {
						msg += lychee.html(_templateObject55, this.cat);
						prev = this.cat;
					}

					msg += lychee.html(_templateObject56, this.key, this.key, this.value);
				});

				msg += lychee.html(_templateObject57, lychee.locale['SAVE_RISK']);
				$(".settings_view").append(msg);

				settings.bind('#FullSettingsSave_button', '#fullSettings', settings.save);
			});
		}

	}

};

view.users = {
	init: function init() {

		multiselect.clearSelection();

		view.users.title();
		view.users.content.init();
	},

	title: function title() {

		lychee.setTitle('Users', false);
	},

	clearContent: function clearContent() {
		lychee.content.unbind('mousedown');
		lychee.content.html('<div class="users_view"></div>');
	},

	content: {

		init: function init() {

			view.users.clearContent();

			if (users.json.length === 0) {
				$(".users_view").append('<div class="users_view_line" style="margin-bottom: 50px;"><p style="text-align: center">User list is empty!</p></div>');
			}

			var html = '';

			html += '<div class="users_view_line">' + '<p>' + '<span class="text">username</span>' + '<span class="text">new password</span>' + '<span class="text_icon" title="Allow uploads">' + build.iconic('data-transfer-upload') + '</span>' + '<span class="text_icon" title="Restricted account">' + build.iconic('lock-locked') + '</span>' + '</p>' + '</div>';

			$(".users_view").append(html);

			$.each(users.json, function () {
				$(".users_view").append(build.user(this));
				// photosData += build.photo(this)
				settings.bind('#UserUpdate' + this.id, '#UserData' + this.id, users.update);
				settings.bind('#UserDelete' + this.id, '#UserData' + this.id, users.delete);
				if (this.upload === 1) {
					$('#UserData' + this.id + ' .choice input[name="upload"]').click();
				}
				if (this.lock === 1) {
					$('#UserData' + this.id + ' .choice input[name="lock"]').click();
				}
			});

			html = '<div class="users_view_line"';

			if (users.json.length === 0) {
				html += ' style="padding-top: 0px;"';
			}
			html += '>' + '<p id="UserCreate">' + '<input class="text" name="username" type="text" value="" placeholder="new username" /> ' + '<input class="text" name="password" type="text" placeholder="new password" /> ' + '<span class="choice" title="Allow uploads">' + '<label>' + '<input type="checkbox" name="upload" />' + '<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>' + '</label>' + '</span> ' + '<span class="choice" title="Restricted account">' + '<label>' + '<input type="checkbox" name="lock" />' + '<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>' + '</label>' + '</span>' + '</p> ' + '<a id="UserCreate_button"  class="basicModal__button basicModal__button_CREATE">Create</a>' + '</div>';
			$(".users_view").append(html);
			settings.bind('#UserCreate_button', '#UserCreate', users.create);
		}
	}
};

view.sharing = {
	init: function init() {

		multiselect.clearSelection();

		view.sharing.title();
		view.sharing.content.init();
	},

	title: function title() {

		lychee.setTitle('Sharing', false);
	},

	clearContent: function clearContent() {
		lychee.content.unbind('mousedown');
		lychee.content.html('<div class="sharing_view"></div>');
	},

	content: {

		init: function init() {

			view.sharing.clearContent();

			if (sharing.json.shared.length === 0) {
				$(".sharing_view").append('<div class="sharing_view_line" style="margin-bottom: 50px;"><p style="text-align: center">Sharing list is empty!</p></div>');
			}

			var html = '';

			html += '\n\t\t\t<div class="sharing_view_line"><p>Share</p></div>\n\t\t\t<div class="sharing_view_line">\n\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t<select name="from" id="albums_list" class="form-control select" size="13" multiple="multiple">';

			$.each(sharing.json.albums, function () {
				html += '<option value="' + this.id + '">' + this.title + '</option>';
			});

			html += '</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t<!--<button type="button" id="albums_list_undo" class="btn btn-primary btn-block">undo</button>-->\n\t\t\t\t\t<button type="button" id="albums_list_rightAll" class="btn btn-default btn-block blue">' + build.iconic('media-skip-forward') + '</button>\n\t\t\t\t\t<button type="button" id="albums_list_rightSelected" class="btn btn-default btn-block blue">' + build.iconic('chevron-right') + '</button>\n\t\t\t\t\t<button type="button" id="albums_list_leftSelected" class="btn btn-default btn-block grey">' + build.iconic('chevron-left') + '</button>\n\t\t\t\t\t<button type="button" id="albums_list_leftAll" class="btn btn-default btn-block grey">' + build.iconic('media-skip-backward') + '</button>\n\t\t\t\t\t<!--<button type="button" id="albums_list_redo" class="btn btn-warning btn-block">redo</button>-->\n\t\t\t\t</div>\n\n\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t<select name="to" id="albums_list_to" class="form-control select" size="13" multiple="multiple"></select>\n\t\t\t\t</div>\n\t\t\t</div>';

			html += '\n\t\t\t<div class="sharing_view_line"><p class="with">with</p></div>\n\t\t\t<div class="sharing_view_line">\n\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t<select name="from" id="user_list" class="form-control select" size="13" multiple="multiple">';

			$.each(sharing.json.users, function () {
				html += '<option value="' + this.id + '">' + this.username + '</option>';
			});

			html += '</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t<!--<button type="button" id="user_list_undo" class="btn btn-primary btn-block">undo</button>-->\n\t\t\t\t\t<button type="button" id="user_list_rightAll" class="btn btn-default btn-block blue">' + build.iconic('media-skip-forward') + '</button>\n\t\t\t\t\t<button type="button" id="user_list_rightSelected" class="btn btn-default btn-block blue">' + build.iconic('chevron-right') + '</button>\n\t\t\t\t\t<button type="button" id="user_list_leftSelected" class="btn btn-default btn-block grey">' + build.iconic('chevron-left') + '</button>\n\t\t\t\t\t<button type="button" id="user_list_leftAll" class="btn btn-default btn-block grey">' + build.iconic('media-skip-backward') + '</button>\n\t\t\t\t\t<!--<button type="button" id="user_list_redo" class="btn btn-warning btn-block">redo</button>-->\n\t\t\t\t</div>\n\n\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t<select name="to" id="user_list_to" class="form-control select" size="13" multiple="multiple"></select>\n\t\t\t\t</div>\n\t\t\t</div>';
			html += '<div class="sharing_view_line"><a id="Share_button"  class="basicModal__button">Share</a></div>';
			html += '<div class="sharing_view_line">';

			$.each(sharing.json.shared, function () {
				html += '<p><span class="text">' + this.title + '</span><span class="text">' + this.username + '</span><span class="choice">' + '<label>' + '<input type="checkbox" name="remove_id" value="' + this.id + '"/>' + '<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>' + '</label>' + '</span></p>' + '';
			});

			html += '</div>';
			if (sharing.json.shared.length !== 0) {
				html += '<div class="sharing_view_line"><a id="Remove_button"  class="basicModal__button">Remove</a></div>';
			}

			$(".sharing_view").append(html);

			$('#albums_list').multiselect();
			$('#user_list').multiselect();
			$("#Share_button").on('click', sharing.add).on('mouseenter', function () {
				$('#albums_list_to, #user_list_to').addClass('borderBlue');
			}).on('mouseleave', function () {
				$('#albums_list_to, #user_list_to').removeClass('borderBlue');
			});

			$('#Remove_button').on('click', sharing.delete);
		}
	}
};

view.logs = {
	init: function init() {

		multiselect.clearSelection();

		view.logs.title();
		view.logs.content.init();
	},

	title: function title() {

		lychee.setTitle('Logs', false);
	},

	clearContent: function clearContent() {
		lychee.content.unbind('mousedown');
		var html = '';
		if (lychee.api_V2) {
			html += lychee.html(_templateObject58, lychee.locale['CLEAN_LOGS']);
		}
		html += '<pre class="logs_diagnostics_view"></pre>';
		lychee.content.html(html);

		$("#Clean_Noise").on('click', function () {
			api.post_raw('Logs::clearNoise', {}, function () {
				view.logs.init();
			});
		});
	},

	content: {
		init: function init() {
			view.logs.clearContent();
			api.post_raw('Logs', {}, function (data) {
				$(".logs_diagnostics_view").html(data);
			});
		}
	}
};

view.diagnostics = {
	init: function init() {

		multiselect.clearSelection();

		view.diagnostics.title('Diagnostics');
		view.diagnostics.content.init();
	},

	title: function title() {

		lychee.setTitle('Diagnostics', false);
	},

	clearContent: function clearContent(update) {
		lychee.content.unbind('mousedown');
		var html = '';
		if (update === 1) {
			html += lychee.html(_templateObject59, lychee.locale['UPDATE_AVAILABLE']);
		}
		html += '<pre class="logs_diagnostics_view"></pre>';
		lychee.content.html(html);

		$("#Update_Lychee").on('click', function () {
			api.get('api/Update', function (data) {
				var data_json = void 0;
				try {
					data_json = JSON.parse(data);
				} catch (e) {
					data_json = "JSON error. Check the console logs.";
					console.log(data);
				}
				html = '<pre>';
				if (Array.isArray(data_json)) {
					for (var i = 0; i < data_json.length; i++) {
						html += '    ' + data_json[i] + '\n';
					}
				} else {
					html += '    ' + data_json;
				}
				html += '</pre>';
				$(html).prependTo(".logs_diagnostics_view");
			});
		});
	},

	content: {
		init: function init() {
			view.diagnostics.clearContent(false);

			if (lychee.api_V2) {
				api.post('Diagnostics', {}, function (data) {
					view.diagnostics.clearContent(data.update);
					var html = '';
					var i = void 0;
					html += '<pre>\n\n\n\n';
					html += '    Diagnostics\n' + '    -----------\n';
					for (i = 0; i < data.errors.length; i++) {
						html += '    ' + data.errors[i] + '\n';
					}
					html += '\n' + '    System Information\n' + '    ------------------\n';
					for (i = 0; i < data.infos.length; i++) {
						html += '    ' + data.infos[i] + '\n';
					}
					html += '\n' + '    Config Information\n' + '    ------------------\n';
					for (i = 0; i < data.configs.length; i++) {
						html += '    ' + data.configs[i] + '\n';
					}
					html += '</pre>';

					$(".logs_diagnostics_view").html(html);
				});
			} else {
				api.post_raw('Diagnostics', {}, function (data) {
					$(".logs_diagnostics_view").html(data);
				});
			}
		}
	}

};

/**
 * @description This module is used to check if elements are visible or not.
 */

visible = {};

visible.albums = function () {
	if (header.dom('.header__toolbar--public').hasClass('header__toolbar--visible')) return true;
	if (header.dom('.header__toolbar--albums').hasClass('header__toolbar--visible')) return true;
	return false;
};

visible.album = function () {
	if (header.dom('.header__toolbar--album').hasClass('header__toolbar--visible')) return true;
	return false;
};

visible.photo = function () {
	if ($('#imageview.fadeIn').length > 0) return true;
	return false;
};

visible.search = function () {
	if (search.hash != null) return true;
	return false;
};

visible.sidebar = function () {
	if (sidebar.dom().hasClass('active') === true) return true;
	return false;
};

visible.sidebarbutton = function () {
	if (visible.photo()) return true;
	if (visible.album() && $('#button_info_album:visible').length > 0) return true;
	return false;
};

visible.header = function () {
	if (header.dom().hasClass('header--hidden') === true) return false;
	return true;
};

visible.contextMenu = function () {
	return basicContext.visible();
};

visible.multiselect = function () {
	if ($('#multiselect').length > 0) return true;
	return false;
};

visible.leftMenu = function () {
	if (leftMenu.dom().hasClass('leftMenu__visible')) return true;
	return false;
};
(function ($) {
	var Swipe = function Swipe(el) {
		var self = this;

		this.el = $(el);
		this.pos = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
		this.startTime = null;

		el.on('touchstart', function (e) {
			self.touchStart(e);
		});
		el.on('touchmove', function (e) {
			self.touchMove(e);
		});
		el.on('touchend', function () {
			self.swipeEnd();
		});
		el.on('mousedown', function (e) {
			self.mouseDown(e);
		});
	};

	Swipe.prototype = {
		touchStart: function touchStart(e) {
			var touch = e.originalEvent.touches[0];

			this.swipeStart(e, touch.pageX, touch.pageY);
		},

		touchMove: function touchMove(e) {
			var touch = e.originalEvent.touches[0];

			this.swipeMove(e, touch.pageX, touch.pageY);
		},

		mouseDown: function mouseDown(e) {
			var self = this;

			this.swipeStart(e, e.pageX, e.pageY);

			this.el.on('mousemove', function (e) {
				self.mouseMove(e);
			});
			this.el.on('mouseup', function () {
				self.mouseUp();
			});
		},

		mouseMove: function mouseMove(e) {
			this.swipeMove(e, e.pageX, e.pageY);
		},

		mouseUp: function mouseUp(e) {
			this.swipeEnd(e);

			this.el.off('mousemove');
			this.el.off('mouseup');
		},

		swipeStart: function swipeStart(e, x, y) {
			this.pos.start.x = x;
			this.pos.start.y = y;
			this.pos.end.x = x;
			this.pos.end.y = y;

			this.startTime = new Date().getTime();

			this.trigger('swipeStart', e);
		},

		swipeMove: function swipeMove(e, x, y) {
			this.pos.end.x = x;
			this.pos.end.y = y;

			this.trigger('swipeMove', e);
		},

		swipeEnd: function swipeEnd(e) {
			this.trigger('swipeEnd', e);
		},

		trigger: function trigger(e, originalEvent) {
			var self = this;

			var event = $.Event(e),
			    x = self.pos.start.x - self.pos.end.x,
			    y = self.pos.end.y - self.pos.start.y,
			    radians = Math.atan2(y, x),
			    direction = 'up',
			    distance = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))),
			    angle = Math.round(radians * 180 / Math.PI),
			    speed = Math.round(distance / (new Date().getTime() - self.startTime) * 1000);

			if (angle < 0) {
				angle = 360 - Math.abs(angle);
			}

			if (angle <= 45 && angle >= 0 || angle <= 360 && angle >= 315) {
				direction = 'left';
			} else if (angle >= 135 && angle <= 225) {
				direction = 'right';
			} else if (angle > 45 && angle < 135) {
				direction = 'down';
			}

			event.originalEvent = originalEvent;

			event.swipe = { x: x, y: y, direction: direction, distance: distance, angle: angle, speed: speed };

			$(self.el).trigger(event);
		}
	};

	$.fn.swipe = function () {
		var swipe = new Swipe(this);

		return this;
	};
})(jQuery);