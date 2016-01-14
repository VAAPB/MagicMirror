<!DOCTYPE html>
<?php $gitHash = trim(`git rev-parse HEAD`) ?>
<html lang="en">
<head>
	<title>Magic Mirror</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
    <script type="text/javascript">
		var gitHash = '<?php echo $gitHash ?>';
	</script>
    <meta name="google" value="notranslate" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
</head>
<body>
    <div id="wrapper">
	   <div class="top left">
           <div class="date small dimmed"></div>
           <div class="time"></div>
           <div class="calendar xxsmall"></div>
        </div>
	   <div class="top right">
           <div class="windsun small dimmed"></div>
           <div class="temp"></div>
           <div class="forecast small dimmed"></div>
        </div>
	   <div class="center-ver center-hor">
           <div id="content"></div>
        </div>
	    <div class="lower-third center-hor">
            <div id="compliment" class="compliment light"></div>
        </div>
	   <div class="bottom center-hor">
           <div class="news medium"></div>
        </div>
        <div id="audio"></div>
</div>
    
<?php
$scripts = [
    'js/jquery.js',
    'js/jquery.feedToJSON.js',
    'js/ical_parser.js',
    'js/moment-with-locales.min.js',
    'js/voice/annyang.min.js',
    'js/voice/annyang.js',
    'js/voice/responsiveVoice.js',
    'js/voice/commands.js',
    'js/config.js',
    'js/rrule.js',
    'js/version/version.js',
    'js/calendar/calendar.js',
    'js/compliments/compliments.js',
    'js/weather/weather.js',
    'js/time/time.js',
    'js/news/news.js',
    'js/main.js'
];
foreach($scripts as $v) {
    echo '<script src="'.$v.'?nocache='.$gitHash.'"></script>'.PHP_EOL;
}
?>    

</body>
</html>
