var VAST = require('vast-xml')
  , uuid = require('node-uuid')
;

var vast = new VAST();
vast.attachAd({ 
    structure : 'wrapper'
  , AdSystem : { 
        name: process.env.npm_config_ad_system_name || 'VAST Ad System'
      , version: process.env.npm_config_ad_system_version || Date.now()
  }
  , id: process.env.npm_config_ad_id || uuid()
  , sequence : process.env.npm_config_sequence || 1
  , Error: process.env.npm_config_error_uri
  , VASTAdTagURI : process.env.npm_config_vast_ad_tag_uri
});
console.log(vast.xml({ pretty: true, newline: '\n' }));
