import $ from 'jquery';

// seems that plugin-json needs explicitly importing
// so that it gets inlined into our output bundle
import plugin from 'json';

// loads the external resource bundled, mapped to the wild-carded 'i18n' map config
var loadData = function(locale) {
    const path = 'i18n/'+locale+'.json!github:systemjs/plugin-json@0.1.0';
    System.import(path).then(function(data) {
        $('body').find('#message').html(data.message);
    });
}

$('body').find('#en').click(() => {
    loadData('en-us');
});

$('body').find('#fr').click(() => {
    loadData('fr-fr');
});

loadData('en-us');
