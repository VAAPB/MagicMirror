var speech = {
    lang: config.speech.lang || 'en-US',
    masterCommand: config.speech.masterCommand || '',
    masterCommandDelay: config.speech.masterCommandDelay || 10000,
    enableQuickMasterCommand: config.speech.enableQuickMasterCommand || true,
    commands: config.speech.commands || null,
    intervalStartId: null
};

speech.home = function () {
    "use strict";
    $("#content").fadeOut('5000');
	$("#content").empty();
	compliments.init();
};

speech.sleep = function () {
    "use strict";
    if ($("#wrapper").is(":visible")) {
        speech.home();
        responsiveVoice.speak("going to sleep");
    } else { responsiveVoice.speak("Hello again!"); }
    $("#wrapper").toggle("slow");
};

speech.help = function () {
    "use strict";
    $("#compliment").hide().fadeOut('slow');
    $("#content").empty();
    responsiveVoice.speak("Here is a list of commands");
	$("#content").load("content/help.html").fadeIn('5000');
};

speech.listenSubCommands = function (commands) {
    "use strict";
    if (!this.masterCommandListenning) {
        var commandsNames = $.map(commands, function (value, key) {
            return key;
        });
        var stopListenning = function () {
            $('#speech').hide();
            this.masterCommandListenning = false;
            annyang.removeCommands(commandsNames);
        }.bind(this);

        $('#speech').show();
        this.masterCommandListenning = true;
        annyang.addCommands(commands);

        // stop listenning if a sub-command match
        annyang.addCallback('resultMatch', function (txt, cmd) {
            if (cmd !== speech.masterCommand) {
                stopListenning();
            }
        });

        // stop listenning after masterCommandDelay
        setTimeout(function () {
            stopListenning();
        }, this.masterCommandDelay);
    }
};

speech.init = function () {
    "use strict";
    if (annyang && speech.commands !== null) {
        annyang.debug(); // console debug
        annyang.setLanguage(speech.lang);

        if (speech.masterCommand !== false) {
            // add master command
            annyang.addCommands({
                [speech.masterCommand]: function() {
                    speech.listenSubCommands(speech.commands);
                }
            });
            // add quick master commands
            if(speech.enableQuickMasterCommand) {
                var qCommands = {};
                $.each(speech.commands, function(name, fn){
                    qCommands[speech.masterCommand+' '+name] = fn;
                });
                annyang.addCommands(qCommands);
            }
        } else {
            annyang.addCommands(speech.commands);
        }

        annyang.start({autoRestart: true});
    }
}
