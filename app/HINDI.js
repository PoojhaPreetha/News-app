/*
 * JS for HINDI generated by Appery.io
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

function HINDI_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_2': 'HINDI_mobilebutton_2',
        'mobilebutton_3': 'HINDI_mobilebutton_3',
        'mobilebutton_4': 'HINDI_mobilebutton_4',
        'mobilebutton_5': 'HINDI_mobilebutton_5',
        'mobilebutton_6': 'HINDI_mobilebutton_6'
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
    Apperyio.CurrentScreen = 'HINDI';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var HINDI_onLoad = function() {
        HINDI_elementsExtraJS();
        HINDI_deviceEvents();
        HINDI_windowEvents();
        HINDI_elementsEvents();
    };
    // screen window events
    function HINDI_windowEvents() {
        $('#HINDI').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function HINDI_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function HINDI_elementsExtraJS() {
        // screen (HINDI) extra code
    };
    // screen elements handler
    function HINDI_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#HINDI_mobilecontainer [name="mobilebutton_2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('https://www.newsworldindia.in/livetv', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#HINDI_mobilecontainer [name="mobilebutton_2"]');
        $(document).off("click", '#HINDI_mobilecontainer [name="mobilebutton_3"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('http://ddnews.gov.in/', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#HINDI_mobilecontainer [name="mobilebutton_3"]');
        $(document).off("click", '#HINDI_mobilecontainer [name="mobilebutton_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('https://khabar.ndtv.com/videos/live/channel/ndtvindia', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#HINDI_mobilecontainer [name="mobilebutton_4"]');
        $(document).off("click", '#HINDI_mobilecontainer [name="mobilebutton_5"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('https://khabar.ndtv.com/videos/live/channel/ndtvindia', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#HINDI_mobilecontainer [name="mobilebutton_5"]');
        $(document).off("click", '#HINDI_mobilecontainer [name="mobilebutton_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.open('https://zeenews.india.com/hindi', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');
                }
            },
        }, '#HINDI_mobilecontainer [name="mobilebutton_6"]');
    };
    $(document).off("pagebeforeshow", "#HINDI").on("pagebeforeshow", "#HINDI", function(event, ui) {
        Apperyio.CurrentScreen = "HINDI";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    HINDI_onLoad();
};
$(document).off("pagecreate", "#HINDI").on("pagecreate", "#HINDI", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    HINDI_js();
});