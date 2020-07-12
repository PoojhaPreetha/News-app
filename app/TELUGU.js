/*
 * JS for TELUGU generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '4755af2a-9649-4082-8a4e-5a002094efea';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "SELECT",
    "location": "SELECT.html"
}, {
    "name": "MAPS",
    "location": "MAPS.html"
}, {
    "name": "LANGUAGESELECTION",
    "location": "LANGUAGESELECTION.html"
}, {
    "name": "TELUGU",
    "location": "TELUGU.html"
}, {
    "name": "HINDI",
    "location": "HINDI.html"
}, {
    "name": "ENGLISH",
    "location": "ENGLISH.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "TAMIL",
    "location": "TAMIL.html"
}];

function TELUGU_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_2': 'TELUGU_mobilebutton_2',
        'mobilebutton_3': 'TELUGU_mobilebutton_3',
        'mobilebutton_4': 'TELUGU_mobilebutton_4',
        'mobilebutton_5': 'TELUGU_mobilebutton_5',
        'mobilebutton_6': 'TELUGU_mobilebutton_6'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'TELUGU';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var TELUGU_onLoad = function() {
        TELUGU_elementsExtraJS();
        TELUGU_deviceEvents();
        TELUGU_windowEvents();
        TELUGU_elementsEvents();
    };
    // screen window events
    function TELUGU_windowEvents() {
        $('#TELUGU').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function TELUGU_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function TELUGU_elementsExtraJS() {
        // screen (TELUGU) extra code
    };
    // screen elements handler
    function TELUGU_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#TELUGU_mobilecontainer [name="mobilebutton_2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('https://www.tvhub.in/watch/99-telugu-tv-live.html', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#TELUGU_mobilecontainer [name="mobilebutton_2"]');
        $(document).off("click", '#TELUGU_mobilecontainer [name="mobilebutton_3"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('http://www.sunnetwork.in/tv-channel-details.aspx?Channelid=35&channelname=GEMINI%20NEWS&LanguageID=2&Type=2', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#TELUGU_mobilecontainer [name="mobilebutton_3"]');
        $(document).off("click", '#TELUGU_mobilecontainer [name="mobilebutton_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('https://en.wikipedia.org/wiki/Studio_N', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#TELUGU_mobilecontainer [name="mobilebutton_4"]');
        $(document).off("click", '#TELUGU_mobilecontainer [name="mobilebutton_5"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('https://www.yupptv.com/channels/t-news/live', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#TELUGU_mobilecontainer [name="mobilebutton_5"]');
        $(document).off("click", '#TELUGU_mobilecontainer [name="mobilebutton_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('https://wwitv.com/tv_channels/b6646-V6-News-TV.htm', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#TELUGU_mobilecontainer [name="mobilebutton_6"]');
    };
    $(document).off("pagebeforeshow", "#TELUGU").on("pagebeforeshow", "#TELUGU", function(event, ui) {
        Apperyio.CurrentScreen = "TELUGU";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    TELUGU_onLoad();
};
$(document).off("pagecreate", "#TELUGU").on("pagecreate", "#TELUGU", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    TELUGU_js();
});