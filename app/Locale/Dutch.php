<?php

namespace App\Locale;


final class Dutch implements LangInterface
{
    static public function code()
    {
        return 'nl';
    }

	static public function get_locale()
	{
		$locale = array(
			'USERNAME'		=> 'gebruikersnaam',
			'PASSWORD'		=> 'wachtwoord',
			'ENTER'			=> 'Enter',
			'CANCEL'		=> 'Annuleer',
			'SIGN_IN'		=> 'Log in',
			'CLOSE'			=> 'Sluit',
			'SETTINGS'      => 'Settings',
			'SEARCH'        => 'Search ...',
			'MORE'          => 'More',
			'ABOUT'        	=> 'About',

			'USERS'				=> 'Users',
			'SHARING'			=> 'Sharing',
			'CHANGE_LOGIN'		=> 'Verander Login',
			'CHANGE_SORTING'	=> 'Verander Sortering',
			'SET_DROPBOX'		=> 'Set Dropbox',
			'ABOUT_LYCHEE'		=> 'Over Lychee',
			'DIAGNOSTICS'		=> 'Diagnostics',
			'LOGS'				=> 'Laat logs zien',
			'SIGN_OUT'			=> 'Log uit',
			'UPDATE_AVAILABLE'	=> 'Update beschikbaar!',
			'DEFAULT_LICENSE'	=> 'Default license for new uploads:',
			'SET_LICENSE'		=> 'Set License',
			'SET_OVERLAY_TYPE'	=> 'Set Overlay',

			'SMART_ALBUMS'		=> 'Slimme albums',
			'SHARED_ALBUMS'		=> 'Shared albums',
			'ALBUMS'			=> 'Albums',
			'PHOTOS'			=> 'Pictures',

			'RENAME'			=> 'Hernoem',
			'RENAME_ALL'		=> 'Geselecteerde Hernoem',
			'MERGE'				=> 'Voeg samen',
			'MERGE_ALL'			=> 'Geselecteerd samenvoegen',
			'MAKE_PUBLIC'		=> 'Maak Publiek',
			'SHARE_ALBUM'		=> 'Deel Album',
			'SHARE_PHOTO'		=> 'Deel Photo',
			'DOWNLOAD_ALBUM'	=> 'Download Album',
			'ABOUT_ALBUM'		=> 'Over Album',
			'DELETE_ALBUM'		=> 'Verwijder Album',
			'MOVE_ALBUM'		=> 'Move Album',
			'FULLSCREEN_ENTER'	=> 'Enter Fullscreen',
			'FULLSCREEN_EXIT'	=> 'Exit Fullscreen',

			'DELETE_ALBUM_QUESTION'			=> 'Verwijder Album en Foto\'s',
			'KEEP_ALBUM'					=> 'Behoud Album',
			'DELETE_ALBUM_CONFIRMATION_1'	=> 'Weet je zeker dat je dit album en alle foto\'s die het',
			'DELETE_ALBUM_CONFIRMATION_2'	=> 'bevat wilt verwijderen? Deze actie kan niet ongedaan gemaakt worden!',

			'DELETE_ALBUMS_QUESTION'		=> 'Verwijder Albums en Foto\'s',
			'KEEP_ALBUMS'					=> 'Behoud Albums',
			'DELETE_ALBUMS_CONFIRMATION_1'	=> 'Weet je zeker dat je deze albums en alle foto\'s die ze',
			'DELETE_ALBUMS_CONFIRMATION_2'	=> 'bevatten wilt verwijderen? Deze actie kan niet ongedaan gemaakt worden!',

			'DELETE_UNSORTED_CONFIRM'		=> 'Weet je zeker dat je alle foto\'s van \'Ongesoorteerd\' wilt verwijdren?<br>Deze actie kan niet ongedaan gemaakt worden!',
			'CLEAR_UNSORTED'				=> 'Wis Ongesoorteerd',
			'KEEP_UNSORTED'					=> 'Behoud Ongesoorteerd',

			'EDIT_SHARING'				=> 'Bewerk delen',
			'MAKE_PRIVATE'				=> 'Maak privé',

			'CLOSE_ALBUM'				=> 'Sluit Album',
			'CLOSE_PHOTO'				=> 'Sluit Foto',

			'ADD'						=> 'Voeg toe',
			'MOVE'						=> 'Verplaats',
			'MOVE_ALL'					=> 'Verplaatsen Geselecteerd',
			'DUPLICATE'					=> 'Dupliceer',
			'DUPLICATE_ALL'				=> 'Duplicaat Geselecteerd',
			'COPY_TO'						=> 'Copy to...',
			'COPY_ALL_TO'					=> 'Kopiëren geselecteerd om....',
			'DELETE'					=> 'Verwijder',
			'DELETE_ALL'				=> 'Geselecteerde verwijderen',
			'DOWNLOAD'					=> 'Download',
			'UPLOAD_PHOTO'				=> 'Upload Foto',
			'IMPORT_LINK'				=> 'Importeer van Link',
			'IMPORT_DROPBOX'			=> 'Importeer van Dropbox',
			'IMPORT_SERVER'				=> 'Importeer van Server',
			'NEW_ALBUM'					=> 'Nieuw Album',

			'TITLE_NEW_ALBUM'			=> 'Voer een titel voor het album in:',
			'UNTITLED'					=> 'Ongetiteld',
			'UNSORTED'					=> 'Ongesoorteerd',
			'STARRED'					=> 'Met ster',
			'RECENT'					=> 'Recentelijk',
			'PUBLIC'					=> 'Publiekelijk',
			'NUM_PHOTOS'				=> 'Foto\'s',

			'CREATE_ALBUM'				=> 'Maak Album',

			'STAR_PHOTO'				=> 'Markeer met ster',
			'STAR'						=> 'Ster',
			'STAR_ALL'					=> 'Markeer geselecteerd als favorieten',
			'TAGS'						=> 'Tags',
			'TAGS_ALL'					=> 'Geselecteerde tags',
			'UNSTAR_PHOTO'				=> 'Verwijder ster markeering',

			'FULL_PHOTO'				=> 'Volledige Foto',
			'ABOUT_PHOTO'				=> 'Over Foto',
			'DIRECT_LINK'				=> 'Directe Link',

			'ALBUM_ABOUT'				=> 'Over',
			'ALBUM_BASICS'				=> 'Basics',
			'ALBUM_TITLE'				=> 'Titel',
			'ALBUM_NEW_TITLE'			=> 'Geef dit album een nieuwe titel:',
			'ALBUMS_NEW_TITLE_1'		=> 'Geef alle geselecteerde',
			'ALBUMS_NEW_TITLE_2'		=> 'albums een nieuwe titel:',
			'ALBUM_SET_TITLE'			=> 'Sla Titel op',
			'ALBUM_DESCRIPTION'			=> 'Onderwerk',
			'ALBUM_NEW_DESCRIPTION'		=> 'Geef een nieuwe omschrijving in:',
			'ALBUM_SET_DESCRIPTION'		=> 'Sla Omschrijving op',
			'ALBUM_ALBUM'				=> 'Album',
			'ALBUM_CREATED'				=> 'Aangemaakt',
			'ALBUM_IMAGES'				=> 'Afbeeldingen',
			'ALBUM_VIDEOS'				=> 'Videos',
			'ALBUM_SUBALBUMS'			=> 'Subalbums',
			'ALBUM_SHARING'				=> 'Deel',
			'ALBUM_SHR_YES'				=> 'Ja',
			'ALBUM_SHR_NO'				=> 'Nee',
			'ALBUM_PUBLIC'				=> 'Publiekelijk',
			'ALBUM_HIDDEN'				=> 'Verborgen',
			'ALBUM_HIDDEN_EXPL'			=> 'Alleen mensen met een link kunnen dit album bekjiken.',
			'ALBUM_DOWNLOADABLE'		=> 'Downloadbaar',
			'ALBUM_DOWNLOADABLE_EXPL'	=> 'Bezoekers van jouw Lychee kunnen dit album downloaden.',
			'ALBUM_PASSWORD'			=> 'Wachtwoord',
			'ALBUM_PASSWORD_PROT'		=> 'Met wachtwoord beschermt',
			'ALBUM_PASSWORD_PROT_EXPL'	=> 'Album alleen beschikbaar met een geldig wachtwoord.',
			'ALBUM_PASSWORD_REQUIRED'	=> 'Dit album is met een wachtwoord beschermt, voer het wachtwoord in:',
			'ALBUM_MERGE_1'				=> 'Weet je zeker dat je dit album wilt samenvoegen',
			'ALBUM_MERGE_2'				=> 'met het album',
			'ALBUMS_MERGE'				=> 'Weet je zeker dat je alle albums wilt samenvoegen naar',
			'MERGE_ALBUM'				=> 'Voeg albums samen',
			'DONT_MERGE'				=> "Voeg niet samen",
			'ALBUM_MOVE_1'				=> 'Are you sure you want to move the album',
			'ALBUM_MOVE_2'				=> 'into the album',
			'ALBUMS_MOVE'				=> 'Are you sure you want to move all selected albums into the album',
			'MOVE_ALBUMS'				=> "Move Albums",
			'NOT_MOVE_ALBUMS'			=> "Don't Move",
			'ROOT'						=> "Albums",
			'ALBUM_REUSE'				=> "Reuse",
			'ALBUM_LICENSE'				=> 'License',
			'ALBUM_SET_LICENSE'			=> 'Set License',
			'ALBUM_LICENSE_HELP'		=> 'Need help choosing?',
			'ALBUM_LICENSE_NONE'		=> 'None',
			'ALBUM_RESERVED'			=> 'All Rights Reserved',

			'PHOTO_ABOUT'				=> 'Over',
			'PHOTO_BASICS'				=> 'Basics',
			'PHOTO_TITLE'				=> 'Titel',
			'PHOTO_NEW_TITLE'			=> 'Geef deze foto een nieuwe titel:',
			'PHOTO_SET_TITLE'			=> 'Sla Titel op',
			'PHOTO_UPLOADED'			=> 'Geupload',
			'PHOTO_DESCRIPTION'			=> 'Omschrijving',
			'PHOTO_NEW_DESCRIPTION'		=> 'Geef deze foto een nieuwe omschrijving:',
			'PHOTO_SET_DESCRIPTION'		=> 'Sla omschrijving op',
			'PHOTO_NEW_LICENSE'			=> 'Add a License',
			'PHOTO_SET_LICENSE'			=> 'Set License',
			'PHOTO_LICENSE'				=> 'License',
			'PHOTO_REUSE'				=> 'Reuse',
			'PHOTO_LICENSE_NONE'		=> 'None',
			'PHOTO_RESERVED'			=> 'All Rights Reserved',
			'PHOTO_IMAGE'				=> 'Afbeelding',
			'PHOTO_VIDEO'				=> 'Video',
			'PHOTO_SIZE'				=> 'Grootte',
			'PHOTO_FORMAT'				=> 'Formaat',
			'PHOTO_RESOLUTION'			=> 'Resolutie',
			'PHOTO_DURATION'			=> 'Duration',
			'PHOTO_FPS'				    => 'Frame rate',
			'PHOTO_TAGS'				=> 'Tags',
			'PHOTO_NOTAGS'				=> 'Geen Tags',
			'PHOTO_NEW_TAGS'			=> 'Voer je tags voor deze foto in, meerdere tags kunnen worden gescheiden door komma\'s:',
			'PHOTO_NEW_TAGS_1'			=> 'Voer je tags in voor alle',
			'PHOTO_NEW_TAGS_2'			=> 'geselecteerde foto\'s, meerdere tags kunnen worden gescheiden door komma\'s:',
			'PHOTO_SET_TAGS'			=> 'Sla Tags op',
			'PHOTO_CAMERA'				=> 'Camera',
			'PHOTO_CAPTURED'			=> 'Gefotografeerd',
			'PHOTO_MAKE'				=> 'Fabricant',
			'PHOTO_TYPE'				=> 'Type/Model',
			'PHOTO_SHUTTER'				=> 'Sluitertijd',
			'PHOTO_APERTURE'			=> 'Diafragma',
			'PHOTO_FOCAL'				=> 'Brandpuntafstand',
			'PHOTO_ISO'					=> 'ISO',
			'PHOTO_SHARING'				=> 'Deling',
			'PHOTO_SHR_PLUBLIC'			=> 'Publiekelijk',
			'PHOTO_SHR_ALB'				=> 'Ja (Album)',
			'PHOTO_SHR_PHT'				=> 'Ja (Foto)',
			'PHOTO_SHR_NO'				=> 'Nee',
			'PHOTO_DELETE'				=> 'Verwijder Foto',
			'PHOTO_KEEP'				=> 'Behoud Foto',
			'PHOTO_DELETE_1'			=> 'Weet je zeker dat je deze foto\'s wilt verwijderen?',
			'PHOTO_DELETE_2'			=> 'Deze actie kan niet ongedaan gemaakt worden!',
			'PHOTO_DELETE_ALL_1'		=> 'Weet je zeker dat je alle geslecteerd foto\'s wilt verwijderen?',
			'PHOTO_DELETE_ALL_2'		=> 'Deze actie kan niet ongedaan gemaakt worden!',
			'PHOTOS_NEW_TITLE_1'		=> 'Voer een titel in voor alle',
			'PHOTOS_NEW_TITLE_2'		=> 'geselecteerde foto\'s:',
			'PHOTO_MAKE_PRIVATE_ALBUM'	=> 'Deze foto bevind zich in een gedeeld album. Om de zichtbaarheid van deze foto te wijzigen pas je de zichtbaarheid van het album aan.',
			'PHOTO_SHOW_ALBUM'			=> 'Geef album weer',

			'LOADING'					=> 'Laden',
			'ERROR'						=> 'Error',
			'ERROR_TEXT'				=> 'Whoops, er is iets misgegaan. Herlaad de pagina en probeer het opnieuw!',
			'ERROR_DB_1'				=> 'Kan geen verbinding opzetten met de database. Controleer je host, gebruikersnaam en wachtwoord. Controleer ook of toegang vanaf je huidige locatie is toegestaan.',
			'ERROR_DB_2'				=> 'Kan geen database aanmaken. Unable to create the database. Controleer je host, gebruikersnaam en wachtwoord. Controleer of de gebruiker de database kan bewerken.',
			'ERROR_CONFIG_FILE'			=> "Kan configuatie niet opslaan. Toegant tot <b>'data/'</b> geweigerd. Geef iedereen lees, schijf en uitvoer permissie op <b>'data/'</b> en <b>'uploads/'</b>. Kijk naar de readme voor meer informatie.",
			'ERROR_UNKNOWN'				=> 'Er is iets onverwachts gebeurd. Probeer het opnieuw of controleer je installatie en server. Kijk naar de readme voor meer informatie.',
			'ERROR_LOGIN'				=> 'Kan login niet opslaan. Probeer het opnieuw met een andere gebruikersnaam en/of wachtwoord!',
			'SUCCESS'					=> 'OK',
			'RETRY'						=> 'Probeer opnieuw',

			'SETTINGS_SUCCESS_LOGIN'		=> 'Login Info updated.',
			'SETTINGS_SUCCESS_SORT'			=> 'Sorting order updated.',
			'SETTINGS_SUCCESS_DROPBOX'		=> 'Dropbox Key updated.',
			'SETTINGS_SUCCESS_LANG'			=> 'Language updated',
			'SETTINGS_SUCCESS_LAYOUT'		=> 'Layout updated',
			'SETTINGS_SUCCESS_IMAGE_OVERLAY'=> 'EXIF Overlay setting updated',
			'SETTINGS_SUCCESS_PUBLIC_SEARCH'=> 'Publieke zoekactie bijgewerkt',
			'SETTINGS_SUCCESS_LICENSE'		=> 'Default license updated',

			'DB_INFO_TITLE'				=> 'Voer je database connectie gegevens hieronder in:',
			'DB_INFO_HOST'				=> 'Database Host (optioneel)',
			'DB_INFO_USER'				=> 'Database Gebruikersnaam',
			'DB_INFO_PASSWORD'			=> 'Database Wachtwoord',
			'DB_INFO_TEXT'				=> 'Lychee maakt z\n eigen database. Indien gewenst kan je ook een bestaande database naam invoeren:',
			'DB_NAME'					=> 'Database Naam (optioneel)',
			'DB_PREFIX'					=> 'Tabel voorvoegsel (optioneel)',
			'DB_CONNECT'				=> 'Verbin',

			'LOGIN_TITLE'				=> 'Voer een gebruikersnaam en wachtwoord in voor je installatie:',
			'LOGIN_USERNAME'			=> 'Nieuw Gebruikersnaam',
			'LOGIN_PASSWORD'			=> 'Nieuw Wachtwoord',
			'LOGIN_PASSWORD_CONFIRM'	=> 'Confirm Password',
			'LOGIN_CREATE'				=> 'Maak Login',

			'PASSWORD_TITLE'			=> 'Voer je huidige wachtwoord in:',
			'USERNAME_CURRENT'			=> 'Current Username',
			'PASSWORD_CURRENT'			=> 'Huidig Wachtwoord',
			'PASSWORD_TEXT'				=> 'Je gebruikersnaam en wachtwoord worden verandert naar:',
			'PASSWORD_CHANGE'			=> 'Verander Login',

			'EDIT_SHARING_TITLE'		=> 'Bewerk delen',
			'EDIT_SHARING_TEXT'			=> 'De deelinstellingen van dit album worden alsvolgt ingesteld:',
			'SHARE_ALBUM_TEXT'			=> 'Dit album wordt gedeeld met de volgende instellingen:',

			'SORT_ALBUM_BY_1'			=> 'Sorteer albums op',
			'SORT_ALBUM_BY_2'			=> 'in een',
			'SORT_ALBUM_BY_3'			=> 'volgorde.',

			'SORT_ALBUM_SELECT_1'		=> 'Aangemaakt op',
			'SORT_ALBUM_SELECT_2'		=> 'Titel',
			'SORT_ALBUM_SELECT_3'		=> 'Omschrijving',
			'SORT_ALBUM_SELECT_4'		=> 'Publiekelijk',
			'SORT_ALBUM_SELECT_5'		=> 'Nieuwste foto datum',
			'SORT_ALBUM_SELECT_6'		=> 'Oudste foto datum',

			'SORT_PHOTO_BY_1'			=> 'Sorteer albums op',
			'SORT_PHOTO_BY_2'			=> 'in een',
			'SORT_PHOTO_BY_3'			=> 'volgorde.',

			'SORT_PHOTO_SELECT_1'		=> 'Upload Tijd',
			'SORT_PHOTO_SELECT_2'		=> 'Aangemaakt op',
			'SORT_PHOTO_SELECT_3'		=> 'Titel',
			'SORT_PHOTO_SELECT_4'		=> 'Omschrijving',
			'SORT_PHOTO_SELECT_5'		=> 'Publiekelijk',
			'SORT_PHOTO_SELECT_6'		=> 'Ster',
			'SORT_PHOTO_SELECT_7'		=> 'Foto formaat',

			'SORT_ASCENDING'			=> 'Oplopende',
			'SORT_DESCENDING'			=> 'Aflopende',
			'SORT_CHANGE'				=> 'Change Sorting',

			'DROPBOX_TITLE'				=> 'Stel Dropbox sleutel in',
			'DROPBOX_TEXT'				=> "Om foto\'s vanuit Dropbox te kunnen importeren moet je een geldige drop-ins app sleutel hebben van <a href='https://www.dropbox.com/developers/apps/create'>hun website</a>. Genereer een sleutel en voer die in:",

			'LANG_TEXT'					=> 'Change Lychee language for:',
			'LANG_TITLE'				=> 'Change Language',
			'IMAGE_OVERLAY_TEXT'		=> 'Display data overlay by default:',
			'PUBLIC_SEARCH_TEXT'		=> 'Openbare zoekactie toegestaan:',
			'OVERLAY_TYPE'				=> 'Data to use in image overlay:',
			'OVERLAY_EXIF'				=> 'Photo EXIF data',
			'OVERLAY_DESCRIPTION'		=> 'Photo description',
			'OVERLAY_DATE'				=> 'Photo date taken',
			'LAYOUT_TYPE'				=> 'Layout of photos:',
			'LAYOUT_SQUARES'			=> 'Square thumbnails',
			'LAYOUT_JUSTIFIED'			=> 'With aspect, justified',
			'LAYOUT_UNJUSTIFIED'			=> 'With aspect, unjustified',
			'SET_LAYOUT'				=> 'Change layout',

			'VIEW_NO_RESULT'			=> 'Geen resultaten',
			'VIEW_NO_PUBLIC_ALBUMS'		=> 'Geen publieke albums',
			'VIEW_NO_CONFIGURATION'		=> 'Geen configutatie',
			'VIEW_PHOTO_NOT_FOUND'		=> 'Foto niet gevonden',

			'NO_TAGS'					=> 'Geen tags',

			'UPLOAD_MANAGE_NEW_PHOTOS'	=> 'Je kan je nieuwe foto(\'s) nu beheren.',
			'UPLOAD_COMPLETE'			=> 'Upload voltooid',
			'UPLOAD_COMPLETE_FAILED'	=> 'Fout bij het uploaden van een of meerdere foto\'s.',
			'UPLOAD_IMPORTING'			=> 'Importeren',
			'UPLOAD_IMPORTING_URL'		=> 'Importeren van URL',
			'UPLOAD_UPLOADING'			=> 'Uploaden',
			'UPLOAD_FINISHED'			=> 'Afgerond',
			'UPLOAD_PROCESSING'			=> 'Verwerken',
			'UPLOAD_FAILED'				=> 'Mislukt',
			'UPLOAD_FAILED_ERROR'		=> 'Upload mislukt. Server gaf een error!',
			'UPLOAD_FAILED_WARNING'		=> 'Upload mislukt. Server gaf een waarschuwing!',
			'UPLOAD_SKIPPED'			=> 'Overgeslagen',
			'UPLOAD_ERROR_CONSOLE'		=> 'Kijk naar je browsers console voor meer informatie.',
			'UPLOAD_UNKNOWN'			=> 'Server gaf een onbekende terugkoppeling, kijk naar je browsers console voor meer informatie.',
			'UPLOAD_ERROR_UNKNOWN'		=> 'Upload mislukt. Server gaf een onbekende error!',
			'UPLOAD_IN_PROGRESS'		=> 'Lychee is aan het uploaden!',
			'UPLOAD_IMPORT_WARN_ERR'	=> 'De import is voltooid maar gaf waarschuwingen of errors terug. Kijk naar de logs (instellingen -> Show Log) for further details.',
			'UPLOAD_IMPORT_COMPLETE'	=> 'Import complete',
			'UPLOAD_IMPORT_INSTR'		=> 'Please enter the direct link to a photo to import it:',
			'UPLOAD_IMPORT'				=> 'Import',
			'UPLOAD_IMPORT_SERVER'		=> 'Importing from server',
			'UPLOAD_IMPORT_SERVER_FOLD'	=> 'Folder empty or no readable files to process. Please take a look at the log (Settings -> Laat logs zien) voor meer informatie.',
			'UPLOAD_IMPORT_SERVER_INSTR'=> 'Deze actie importeert alle foto\'s, folders en sub-folders vanuit de volgende folder. De <b>orginele bestanden worden verwijderd</b> na de import indien mogelijk.',
			'UPLOAD_ABSOLUTE_PATH'		=> 'Absoluut pad naar de folder',
			'UPLOAD_IMPORT_SERVER_EMPT'	=> 'Kan de import niet starten, folder is leeg!',

			'ABOUT_SUBTITLE'			=> 'Self-hosted photo-management done right',
			'ABOUT_DESCRIPTION'			=> 'is a free photo-management tool, which runs on your server or web-space. Installing is a matter of seconds. Upload, manage and share photos like from a native application. Lychee comes with everything you need and all your photos are stored securely.',
			'FOOTER_COPYRIGHT'			=> 'Alle afbeeldingen op deze website zijn onderworpen aan het auteursrecht van',

			'HEADER_HOSTEDWITH'			=> 'Gehost met Lychee',
			'HEADER_SEARCH_PLACEHOLDER'	=> 'zoeken …'
		);

		return $locale;
	}
}