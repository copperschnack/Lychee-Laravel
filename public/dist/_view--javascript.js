"use strict";

var _templateObject = _taggedTemplateLiteral(["<svg class='iconic ", "'><use xlink:href='#", "' /></svg>"], ["<svg class='iconic ", "'><use xlink:href='#", "' /></svg>"]),
    _templateObject2 = _taggedTemplateLiteral(["<div class='divider'><h1>", "</h1></div>"], ["<div class='divider'><h1>", "</h1></div>"]),
    _templateObject3 = _taggedTemplateLiteral(["<div id='", "' class='edit'>", "</div>"], ["<div id='", "' class='edit'>", "</div>"]),
    _templateObject4 = _taggedTemplateLiteral(["<div id='multiselect' style='top: ", "px; left: ", "px;'></div>"], ["<div id='multiselect' style='top: ", "px; left: ", "px;'></div>"]),
    _templateObject5 = _taggedTemplateLiteral(["\n\t\t\t<div class='album ", "' data-id='", "'>\n\t\t\t\t  ", "\n\t\t\t\t  ", "\n\t\t\t\t  ", "\n\t\t\t\t<div class='overlay'>\n\t\t\t\t\t<h1 title='$", "'>$", "</h1>\n\t\t\t\t\t<a>$", "</a>\n\t\t\t\t</div>\n\t\t\t"], ["\n\t\t\t<div class='album ", "' data-id='", "'>\n\t\t\t\t  ", "\n\t\t\t\t  ", "\n\t\t\t\t  ", "\n\t\t\t\t<div class='overlay'>\n\t\t\t\t\t<h1 title='$", "'>$", "</h1>\n\t\t\t\t\t<a>$", "</a>\n\t\t\t\t</div>\n\t\t\t"]),
    _templateObject6 = _taggedTemplateLiteral(["\n\t\t\t\t<div class='badges'>\n\t\t\t\t\t<a class='badge ", " icn-star'>", "</a>\n\t\t\t\t\t<a class='badge ", " ", " icn-share'>", "</a>\n\t\t\t\t\t<a class='badge ", "'>", "</a>\n\t\t\t\t\t<a class='badge ", "'>", "</a>\n\t\t\t\t\t<a class='badge ", "'>", "</a>\n\t\t\t\t</div>\n\t\t\t\t"], ["\n\t\t\t\t<div class='badges'>\n\t\t\t\t\t<a class='badge ", " icn-star'>", "</a>\n\t\t\t\t\t<a class='badge ", " ", " icn-share'>", "</a>\n\t\t\t\t\t<a class='badge ", "'>", "</a>\n\t\t\t\t\t<a class='badge ", "'>", "</a>\n\t\t\t\t\t<a class='badge ", "'>", "</a>\n\t\t\t\t</div>\n\t\t\t\t"]),
    _templateObject7 = _taggedTemplateLiteral(["\n\t\t\t\t<div class='subalbum_badge'>\n\t\t\t\t\t<a class='badge badge--folder'>", "</a>\n\t\t\t\t</div>"], ["\n\t\t\t\t<div class='subalbum_badge'>\n\t\t\t\t\t<a class='badge badge--folder'>", "</a>\n\t\t\t\t</div>"]),
    _templateObject8 = _taggedTemplateLiteral(["\n\t\t\t<div class='photo' data-album-id='", "' data-id='", "'>\n\t\t\t\t", "\n\t\t\t\t<div class='overlay'>\n\t\t\t\t\t<h1 title='$", "'>$", "</h1>\n\t\t\t"], ["\n\t\t\t<div class='photo' data-album-id='", "' data-id='", "'>\n\t\t\t\t", "\n\t\t\t\t<div class='overlay'>\n\t\t\t\t\t<h1 title='$", "'>$", "</h1>\n\t\t\t"]),
    _templateObject9 = _taggedTemplateLiteral(["<a><span title='Camera Date'>", "</span>", "</a>"], ["<a><span title='Camera Date'>", "</span>", "</a>"]),
    _templateObject10 = _taggedTemplateLiteral(["<a>", "</a>"], ["<a>", "</a>"]),
    _templateObject11 = _taggedTemplateLiteral(["\n\t\t\t\t<div class='badges'>\n\t\t\t\t\t<a class='badge ", " icn-star'>", "</a>\n\t\t\t\t\t<a class='badge ", " icn-share'>", "</a>\n\t\t\t\t</div>\n\t\t\t\t"], ["\n\t\t\t\t<div class='badges'>\n\t\t\t\t\t<a class='badge ", " icn-star'>", "</a>\n\t\t\t\t\t<a class='badge ", " icn-share'>", "</a>\n\t\t\t\t</div>\n\t\t\t\t"]),
    _templateObject12 = _taggedTemplateLiteral(["\n\t\t\t\t\t<div id=\"image_overlay\">\n\t\t\t\t\t\t<h1>$", "</h1>\n\t\t\t\t\t\t<p>$", "</p>\n\t\t\t\t\t</div>\n\t\t\t\t"], ["\n\t\t\t\t\t<div id=\"image_overlay\">\n\t\t\t\t\t\t<h1>$", "</h1>\n\t\t\t\t\t\t<p>$", "</p>\n\t\t\t\t\t</div>\n\t\t\t\t"]),
    _templateObject13 = _taggedTemplateLiteral(["\n\t\t\t<div id=\"image_overlay\">\n\t\t\t\t<h1>$", "</h1>\n\t\t\t\t<p>", "</p>\n\t\t\t</div>\n\t\t"], ["\n\t\t\t<div id=\"image_overlay\">\n\t\t\t\t<h1>$", "</h1>\n\t\t\t\t<p>", "</p>\n\t\t\t</div>\n\t\t"]),
    _templateObject14 = _taggedTemplateLiteral(["\n\t\t\t<div id=\"image_overlay\"><h1>$", "</h1>\n\t\t\t<p>", " at ", ", ", " ", "<br>\n\t\t\t", " ", "</p>\n\t\t\t</div>\n\t\t"], ["\n\t\t\t<div id=\"image_overlay\"><h1>$", "</h1>\n\t\t\t<p>", " at ", ", ", " ", "<br>\n\t\t\t", " ", "</p>\n\t\t\t</div>\n\t\t"]),
    _templateObject15 = _taggedTemplateLiteral(["<video width=\"auto\" height=\"auto\" id='image' controls class='", "' autoplay><source src='", "'>Your browser does not support the video tag.</video>"], ["<video width=\"auto\" height=\"auto\" id='image' controls class='", "' autoplay><source src='", "'>Your browser does not support the video tag.</video>"]),
    _templateObject16 = _taggedTemplateLiteral(["", ""], ["", ""]),
    _templateObject17 = _taggedTemplateLiteral(["<div class='no_content fadeIn'>", ""], ["<div class='no_content fadeIn'>", ""]),
    _templateObject18 = _taggedTemplateLiteral(["<p>", "</p>"], ["<p>", "</p>"]),
    _templateObject19 = _taggedTemplateLiteral(["\n\t\t\t<h1>$", "</h1>\n\t\t\t<div class='rows'>\n\t\t\t"], ["\n\t\t\t<h1>$", "</h1>\n\t\t\t<div class='rows'>\n\t\t\t"]),
    _templateObject20 = _taggedTemplateLiteral(["\n\t\t\t\t<div class='row'>\n\t\t\t\t\t<a class='name'>", "</a>\n\t\t\t\t\t<a class='status'></a>\n\t\t\t\t\t<p class='notice'></p>\n\t\t\t\t</div>\n\t\t\t\t"], ["\n\t\t\t\t<div class='row'>\n\t\t\t\t\t<a class='name'>", "</a>\n\t\t\t\t\t<a class='status'></a>\n\t\t\t\t\t<p class='notice'></p>\n\t\t\t\t</div>\n\t\t\t\t"]),
    _templateObject21 = _taggedTemplateLiteral(["<a class='tag'>$", "<span data-index='", "'>", "</span></a>"], ["<a class='tag'>$", "<span data-index='", "'>", "</span></a>"]),
    _templateObject22 = _taggedTemplateLiteral(["<div class='empty'>", "</div>"], ["<div class='empty'>", "</div>"]),
    _templateObject23 = _taggedTemplateLiteral(["<div class=\"users_view_line\">\n\t\t\t<p id=\"UserData", "\">\n\t\t\t<input name=\"id\" type=\"hidden\" value=\"", "\" />\n\t\t\t<input class=\"text\" name=\"username\" type=\"text\" value=\"$", "\" placeholder=\"username\" />\n\t\t\t<input class=\"text\" name=\"password\" type=\"text\" placeholder=\"new password\" />\n\t\t\t<span class=\"choice\" title=\"Allow uploads\">\n\t\t\t<label>\n\t\t\t<input type=\"checkbox\" name=\"upload\" />\n\t\t\t<span class=\"checkbox\"><svg class=\"iconic \"><use xlink:href=\"#check\"></use></svg></span>\n\t\t\t</label>\n\t\t\t</span>\n\t\t\t<span class=\"choice\" title=\"Restricted account\">\n\t\t\t<label>\n\t\t\t<input type=\"checkbox\" name=\"lock\" />\n\t\t\t<span class=\"checkbox\"><svg class=\"iconic \"><use xlink:href=\"#check\"></use></svg></span>\n\t\t\t</label>\n\t\t\t</span>\n\t\t\t</p>\n\t\t\t<a id=\"UserUpdate", "\"  class=\"basicModal__button basicModal__button_OK\">Save</a>\n\t\t\t<a id=\"UserDelete", "\"  class=\"basicModal__button basicModal__button_DEL\">Delete</a>\n\t\t</div>\n\t\t"], ["<div class=\"users_view_line\">\n\t\t\t<p id=\"UserData", "\">\n\t\t\t<input name=\"id\" type=\"hidden\" value=\"", "\" />\n\t\t\t<input class=\"text\" name=\"username\" type=\"text\" value=\"$", "\" placeholder=\"username\" />\n\t\t\t<input class=\"text\" name=\"password\" type=\"text\" placeholder=\"new password\" />\n\t\t\t<span class=\"choice\" title=\"Allow uploads\">\n\t\t\t<label>\n\t\t\t<input type=\"checkbox\" name=\"upload\" />\n\t\t\t<span class=\"checkbox\"><svg class=\"iconic \"><use xlink:href=\"#check\"></use></svg></span>\n\t\t\t</label>\n\t\t\t</span>\n\t\t\t<span class=\"choice\" title=\"Restricted account\">\n\t\t\t<label>\n\t\t\t<input type=\"checkbox\" name=\"lock\" />\n\t\t\t<span class=\"checkbox\"><svg class=\"iconic \"><use xlink:href=\"#check\"></use></svg></span>\n\t\t\t</label>\n\t\t\t</span>\n\t\t\t</p>\n\t\t\t<a id=\"UserUpdate", "\"  class=\"basicModal__button basicModal__button_OK\">Save</a>\n\t\t\t<a id=\"UserDelete", "\"  class=\"basicModal__button basicModal__button_DEL\">Delete</a>\n\t\t</div>\n\t\t"]),
    _templateObject24 = _taggedTemplateLiteral(["$", "", ""], ["$", "", ""]),
    _templateObject25 = _taggedTemplateLiteral(["<span class='attr_", "'>$", "</span>"], ["<span class='attr_", "'>$", "</span>"]),
    _templateObject26 = _taggedTemplateLiteral(["\n\t\t\t\t\t <tr>\n\t\t\t\t\t\t <td>", "</td>\n\t\t\t\t\t\t <td>", "</td>\n\t\t\t\t\t </tr>\n\t\t\t\t\t "], ["\n\t\t\t\t\t <tr>\n\t\t\t\t\t\t <td>", "</td>\n\t\t\t\t\t\t <td>", "</td>\n\t\t\t\t\t </tr>\n\t\t\t\t\t "]),
    _templateObject27 = _taggedTemplateLiteral(["\n\t\t\t\t <div class='sidebar__divider'>\n\t\t\t\t\t <h1>", "</h1>\n\t\t\t\t </div>\n\t\t\t\t <div id='tags'>\n\t\t\t\t\t <div class='attr_", "'>", "</div>\n\t\t\t\t\t ", "\n\t\t\t\t </div>\n\t\t\t\t "], ["\n\t\t\t\t <div class='sidebar__divider'>\n\t\t\t\t\t <h1>", "</h1>\n\t\t\t\t </div>\n\t\t\t\t <div id='tags'>\n\t\t\t\t\t <div class='attr_", "'>", "</div>\n\t\t\t\t\t ", "\n\t\t\t\t </div>\n\t\t\t\t "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function gup(b) {

	b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

	var a = "[\\?&]" + b + "=([^&#]*)";
	var d = new RegExp(a);
	var c = d.exec(window.location.href);

	if (c === null) return '';else return c[1];
}
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

/**
 * @description Used to view single photos with view.php
 */

// Sub-implementation of lychee -------------------------------------------------------------- //

var lychee = {};

lychee.content = $('.content');

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

lychee.getEventName = function () {

	var touchendSupport = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && 'ontouchend' in document.documentElement;
	return touchendSupport === true ? 'touchend' : 'click';
};

// Sub-implementation of photo -------------------------------------------------------------- //

var photo = {
	json: null
};

photo.share = function (photoID, service) {

	var url = location.toString();

	switch (service) {
		case 'twitter':
			window.open("https://twitter.com/share?url=" + encodeURI(url));
			break;
		case 'facebook':
			window.open("http://www.facebook.com/sharer.php?u=" + encodeURI(url));
			break;
		case 'mail':
			location.href = "mailto:?subject=&body=" + encodeURI(url);
			break;
	}
};

photo.getDirectLink = function () {

	return $('#imageview img').attr('src').replace(/"/g, '').replace(/url\(|\)$/ig, '');
};

photo.update_display_overlay = function () {
	lychee.image_overlay = !lychee.image_overlay;
	if (!lychee.image_overlay) {
		$('#image_overlay').remove();
	} else {
		$('#imageview').append(build.overlay_image(photo.json));
	}
};

photo.show = function () {

	$('#imageview').removeClass('full');
	header.dom().removeClass('header--hidden');

	return true;
};

photo.hide = function () {

	if (visible.photo() && !visible.sidebar() && !visible.contextMenu()) {

		$('#imageview').addClass('full');
		header.dom().addClass('header--hidden');

		return true;
	}

	return false;
};

photo.onresize = function () {
	// Copy of view.photo.onresize
	if (photo.json.medium === '' || !photo.json.medium2x || photo.json.medium2x === '') return;

	var imgWidth = parseInt(photo.json.medium_dim);
	var imgHeight = photo.json.medium_dim.substr(photo.json.medium_dim.lastIndexOf('x') + 1);
	var containerWidth = parseFloat($('#imageview').width(), 10);
	var containerHeight = parseFloat($('#imageview').height(), 10);

	var width = imgWidth < containerWidth ? imgWidth : containerWidth;
	var height = width * imgHeight / imgWidth;
	if (height > containerHeight) {
		width = containerHeight * imgWidth / imgHeight;
	}

	$('img#image').attr('sizes', width + 'px');
};

// Sub-implementation of contextMenu -------------------------------------------------------------- //

var contextMenu = {};

contextMenu.sharePhoto = function (photoID, e) {

	var iconClass = 'ionicons';

	var items = [{ title: build.iconic('twitter', iconClass) + 'Twitter', fn: function fn() {
			return photo.share(photoID, 'twitter');
		} }, { title: build.iconic('facebook', iconClass) + 'Facebook', fn: function fn() {
			return photo.share(photoID, 'facebook');
		} }, { title: build.iconic('envelope-closed') + 'Mail', fn: function fn() {
			return photo.share(photoID, 'mail');
		} }, { title: build.iconic('link-intact') + 'Direct Link', fn: function fn() {
			return window.open(photo.getDirectLink(), '_newtab');
		} }];

	basicContext.show(items, e.originalEvent);
};

// Main -------------------------------------------------------------- //

var loadingBar = {
	show: function show() {},
	hide: function hide() {}
};

var imageview = $('#imageview');

$(document).ready(function () {

	// set CSRF protection (Laravel)
	csrf.bind();

	// Image View
	imageview.on('click', 'img', photo.update_display_overlay);

	$(window).on('resize', photo.onresize);

	// Save ID of photo
	var photoID = gup('p');

	// Set API error handler
	api.onError = error;

	// Share
	header.dom('#button_share').on('click', function (e) {
		contextMenu.sharePhoto(photoID, e);
	});

	// Infobox
	header.dom('#button_info').on('click', sidebar.toggle);

	// Load photo
	loadPhotoInfo(photoID);
});

var loadPhotoInfo = function loadPhotoInfo(photoID) {

	var params = {
		photoID: photoID,
		albumID: '0',
		password: ''
	};

	api.post('Photo::get', params, function (data) {

		if (data === 'Warning: Photo private!' || data === 'Warning: Wrong password!') {

			$('body').append(build.no_content('question-mark')).removeClass('view');
			header.dom().remove();
			return false;
		}

		photo.json = data;

		// Set title
		if (!data.title) data.title = 'Untitled';
		document.title = 'Lychee - ' + data.title;
		header.dom('.header__title').html(lychee.escapeHTML(data.title));

		// Render HTML
		imageview.html(build.imageview(data, true));
		imageview.find('.arrow_wrapper').remove();
		imageview.addClass('fadeIn').show();
		photo.onresize();

		// Render Sidebar
		var structure = sidebar.createStructure.photo(data);
		var html = sidebar.render(structure);

		// Fullscreen
		var timeout = null;

		$(document).bind('mousemove', function () {
			clearTimeout(timeout);
			photo.show();
			timeout = setTimeout(photo.hide, 2500);
		});
		timeout = setTimeout(photo.hide, 2500);

		sidebar.dom('.sidebar__wrapper').html(html);
		sidebar.bind();
	});
};

var error = function error(errorThrown, params, data) {

	console.error({
		description: errorThrown,
		params: params,
		response: data
	});

	loadingBar.show('error', errorThrown);
};

/**
 * @description This module is used to generate HTML-Code.
 */

build = {};

build.iconic = function (icon) {
	var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


	var html = '';

	html += lychee.html(_templateObject, classes, icon);

	return html;
};

build.divider = function (title) {

	var html = '';

	html += lychee.html(_templateObject2, title);

	return html;
};

build.editIcon = function (id) {

	var html = '';

	html += lychee.html(_templateObject3, id, build.iconic('pencil'));

	return html;
};

build.multiselect = function (top, left) {

	return lychee.html(_templateObject4, top, left);
};

build.getAlbumThumb = function (data, i) {
	var isVideo = data.types[i] && data.types[i].indexOf('video') > -1;
	var thumb = data.thumbs[i];

	if (thumb === 'uploads/thumb/' && isVideo) {
		return "<span class=\"thumbimg\"><img src='dist/play-icon.png' alt='Photo thumbnail' data-overlay='false' draggable='false'></span>";
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

	return "<span class=\"thumbimg" + (isVideo ? ' video' : '') + "\"><img class='lazyload' src='dist/placeholder.png' data-src='" + thumb + "' " + (thumb2x !== '' ? 'data-srcset=\'' + thumb2x + ' 2x\'' : '') + " alt='Photo thumbnail' data-overlay='false' draggable='false'></span>";
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

	html += lychee.html(_templateObject5, disabled ? "disabled" : "", data.id, build.getAlbumThumb(data, 2), build.getAlbumThumb(data, 1), build.getAlbumThumb(data, 0), data.title, data.title, date_stamp);

	if (lychee.publicMode === false) {

		html += lychee.html(_templateObject6, data.star === '1' ? 'badge--star' : '', build.iconic('star'), data.public === '1' ? 'badge--visible' : '', data.hidden === '1' ? 'badge--not--hidden' : 'badge--hidden', build.iconic('eye'), data.unsorted === '1' ? 'badge--visible' : '', build.iconic('list'), data.recent === '1' ? 'badge--visible badge--list' : '', build.iconic('clock'), data.password === '1' ? 'badge--visible' : '', build.iconic('lock-locked'));
	}

	if (data.albums && data.albums.length > 0) {
		html += lychee.html(_templateObject7, build.iconic('layers'));
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
		thumbnail = "<span class=\"thumbimg\"><img src='dist/play-icon.png' alt='Photo thumbnail' data-overlay='false' draggable='false'></span>";
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
			thumb2x = "data-srcset='" + thumb2x + " 2x'";
		}

		thumbnail = "<span class=\"thumbimg" + (isVideo ? ' video' : '') + "\">";
		thumbnail += "<img class='lazyload' src='dist/placeholder.png' data-src='" + data.thumbUrl + "' " + thumb2x + " alt='Photo thumbnail' data-overlay='false' draggable='false'>";
		thumbnail += "</span>";
	} else {

		if (data.small !== '') {
			if (data.hasOwnProperty('small2x') && data.small2x !== '') {
				thumb2x = "data-srcset='" + data.small + " " + parseInt(data.small_dim, 10) + "w, " + data.small2x + " " + parseInt(data.small2x_dim, 10) + "w'";
			}

			thumbnail = "<span class=\"thumbimg" + (isVideo ? ' video' : '') + "\">";
			thumbnail += "<img class='lazyload' src='dist/placeholder.png' data-src='" + data.small + "' " + thumb2x + " alt='Photo thumbnail' data-overlay='false' draggable='false'>";
			thumbnail += "</span>";
		} else if (data.medium !== '') {
			if (data.hasOwnProperty('medium2x') && data.medium2x !== '') {
				thumb2x = "data-srcset='" + data.medium + " " + parseInt(data.medium_dim, 10) + "w, " + data.medium2x + " " + parseInt(data.medium2x_dim, 10) + "w'";
			}

			thumbnail = "<span class=\"thumbimg" + (isVideo ? ' video' : '') + "\">";
			thumbnail += "<img class='lazyload' src='dist/placeholder.png' data-src='" + data.medium + "' " + thumb2x + " alt='Photo thumbnail' data-overlay='false' draggable='false'>";
			thumbnail += "</span>";
		} else if (!isVideo) {
			// Fallback for images with no small or medium.
			thumbnail = "<span class=\"thumbimg\">";
			thumbnail += "<img class='lazyload' src='dist/placeholder.png' data-src='" + data.url + "' alt='Photo thumbnail' data-overlay='false' draggable='false'>";
			thumbnail += "</span>";
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
				thumb2x = "data-srcset='" + data.thumbUrl + " 200w, " + thumb2x + " 400w'";
			}

			thumbnail = "<span class=\"thumbimg video\">";
			thumbnail += "<img class='lazyload' src='dist/placeholder.png' data-src='" + data.thumbUrl + "' " + thumb2x + " alt='Photo thumbnail' data-overlay='false' draggable='false'>";
			thumbnail += "</span>";
		}
	}

	html += lychee.html(_templateObject8, data.album, data.id, thumbnail, data.title, data.title);

	if (data.cameraDate === '1') html += lychee.html(_templateObject9, build.iconic('camera-slr'), data.takedate);else html += lychee.html(_templateObject10, data.sysdate);

	html += "</div>";

	if (lychee.publicMode === false) {

		html += lychee.html(_templateObject11, data.star === '1' ? 'badge--star' : '', build.iconic('star'), data.public === '1' && album.json.public !== '1' ? 'badge--visible' : '', build.iconic('eye'));
	}

	html += "</div>";

	return html;
};

build.overlay_image = function (data) {
	var exifHash = data.make + data.model + data.shutter + data.aperture + data.focal + data.iso;

	// Get the stored setting for the overlay_image
	var type = lychee.image_overlay_type;
	var html = "";

	if (type && type === 'desc' && data.description !== '') {
		html = lychee.html(_templateObject12, data.title, data.description);
	} else if (type && type === 'takedate' && data.takedate !== '') {
		html = lychee.html(_templateObject13, data.title, data.takedate);
	}
	// fall back to exif data if there is no description
	else if (exifHash !== '') {

			html += lychee.html(_templateObject14, data.title, data.shutter.replace('s', 'sec'), data.aperture.replace('f/', '&fnof; / '), lychee.locale['PHOTO_ISO'], data.iso, data.focal, data.lens && data.lens !== '' ? '(' + data.lens + ')' : '');
		}

	return html;
};

build.imageview = function (data, visibleControls) {

	var html = '';

	if (data.type.indexOf('video') > -1) {
		html += lychee.html(_templateObject15, visibleControls === true ? '' : 'full', data.url);
	} else {
		var img = '';

		if (data.medium !== '') {
			var medium = '';

			if (data.hasOwnProperty('medium2x') && data.medium2x !== '') {
				medium = "srcset='" + data.medium + " " + parseInt(data.medium_dim, 10) + "w, " + data.medium2x + " " + parseInt(data.medium2x_dim, 10) + "w'";
			}
			img = "<img id='image' class='" + (visibleControls === true ? '' : 'full') + "' src='" + data.medium + "' " + medium + "  draggable='false' alt='medium'>";
		} else {
			img = "<img id='image' class='" + (visibleControls === true ? '' : 'full') + "' src='" + data.url + "' draggable='false' alt='big'>";
		}
		html += lychee.html(_templateObject16, img);

		if (lychee.image_overlay) html += build.overlay_image(data);
	}

	html += "\n\t\t\t<div class='arrow_wrapper arrow_wrapper--previous'><a id='previous'>" + build.iconic('caret-left') + "</a></div>\n\t\t\t<div class='arrow_wrapper arrow_wrapper--next'><a id='next'>" + build.iconic('caret-right') + "</a></div>\n\t\t\t";

	return html;
};

build.no_content = function (typ) {

	var html = '';

	html += lychee.html(_templateObject17, build.iconic(typ));

	switch (typ) {
		case 'magnifying-glass':
			html += lychee.html(_templateObject18, lychee.locale['VIEW_NO_RESULT']);
			break;
		case 'eye':
			html += lychee.html(_templateObject18, lychee.locale['VIEW_NO_PUBLIC_ALBUMS']);
			break;
		case 'cog':
			html += lychee.html(_templateObject18, lychee.locale['VIEW_NO_CONFIGURATION']);
			break;
		case 'question-mark':
			html += lychee.html(_templateObject18, lychee.locale['VIEW_PHOTO_NOT_FOUND']);
			break;
	}

	html += "</div>";

	return html;
};

build.uploadModal = function (title, files) {

	var html = '';

	html += lychee.html(_templateObject19, title);

	var i = 0;

	while (i < files.length) {

		var file = files[i];

		if (file.name.length > 40) file.name = file.name.substr(0, 17) + '...' + file.name.substr(file.name.length - 20, 20);

		html += lychee.html(_templateObject20, file.name);

		i++;
	}

	html += "</div>";

	return html;
};

build.tags = function (tags) {

	var html = '';

	if (tags !== '') {

		tags = tags.split(',');

		tags.forEach(function (tag, index) {
			html += lychee.html(_templateObject21, tag, index, build.iconic('x'));
		});
	} else {

		html = lychee.html(_templateObject22, lychee.locale['NO_TAGS']);
	}

	return html;
};

build.user = function (user) {
	var html = lychee.html(_templateObject23, user.id, user.id, user.username, user.id, user.id);

	return html;
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
	var html = lychee.html(_templateObject24, title, build.iconic('caret-bottom'));

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

	// Only create tags section when user logged in
	if (lychee.publicMode === false && lychee.upload) {

		structure.tags = {
			title: lychee.locale['PHOTO_TAGS'],
			type: sidebar.types.TAGS,
			value: build.tags(data.tags),
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

		_html += "\n\t\t\t\t <div class='sidebar__divider'>\n\t\t\t\t\t <h1>" + section.title + "</h1>\n\t\t\t\t </div>\n\t\t\t\t <table>\n\t\t\t\t ";

		section.rows.forEach(function (row) {

			var value = row.value;

			// Set a default for the value
			if (value === '' || value == null) value = '-';

			// Wrap span-element around value for easier selecting on change
			value = lychee.html(_templateObject25, row.kind, value);

			// Add edit-icon to the value when editable
			if (row.editable === true) value += ' ' + build.editIcon('edit_' + row.kind);

			_html += lychee.html(_templateObject26, row.title, value);
		});

		_html += "\n\t\t\t\t </table>\n\t\t\t\t ";

		return _html;
	};

	var renderTags = function renderTags(section) {

		var _html = '';
		var editable = '';

		// Add edit-icon to the value when editable
		if (section.editable === true) editable = build.editIcon('edit_tags');

		_html += lychee.html(_templateObject27, section.title, section.title.toLowerCase(), section.value, editable);

		return _html;
	};

	structure.forEach(function (section) {

		if (section.type === sidebar.types.DEFAULT) html += renderDefault(section);else if (section.type === sidebar.types.TAGS) html += renderTags(section);
	});

	return html;
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