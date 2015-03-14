# Introduction #

Google buzz is heavily integrated into Gmail. Hopefully, there is an open API, so that you can integrate buzz on any html page, like on a wordpress blog, a static site, etc.

# Details #

  * Display
    * the public stream of the specified account (yours, for instance)
    * the public buzzes

# How to use #
## Installation ##
In the `header` block of your html page, add
```
<link rel="stylesheet" href="http://regis.googlecode.com/files/buzz.css" type="text/css" /> 
```

Somewher in your page, where your want Google Buzz to be displayed, add:
```
<div id="buzz"/>
```

Add in the bottom of your page (usually just before the `</body>` tag)
```
    <script type="text/javascript" src="http://regis.googlecode.com/files/jquery-1.4.4.min.js" ></script> 
    <script type="text/javascript" src="http://regis.googlecode.com/files/buzz-1.0.min.js" ></script> 
    <script type="text/javascript"> 
	$(document).ready(function(){
		$('div#buzz').googleBuzz();
	});    
    </script> 
```

## Parameters ##
Once this is working, you can pass some parameters to the plugin.
For instance, to display the feed of user [Google Buzz Team](http://www.google.com/profiles/googlebuzz#buzz), pass parameter 'userId' as follow:
```
// the rest is left untouched
$('div#buzz').googleBuzz( {userId: "googlebuzz"}
);
```

## Customize ##
You can easily customize the CSS.
  * buzz-error is used to display error messages
  * buzz-post is used to display a buzz post