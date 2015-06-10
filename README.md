# wrapper

easily create a VAST ad wrapper for a given url.

## motivation

run a simple script which outputs a VAST ad wrapper to stdout. copy the output
to a file or pipe to an upload for testing VAST ad wrappers.

## setup

- ensure `node` and `npm` are installed
- run `npm i` from this repository to install local dependencies

## settings

this script takes several settings, only one is required:

- `--vast_ad_tag_uri` [REQUIRED]: the URL of the vast ad creative

Optional settings, generally used by the initial ad server hosting the wrapper:

- `--error_uri`: a URL for error reporting (optional, defaults to nothing)
- `--ad_system_name`: a name for the ad system (optional, defaults to 'VAST Ad System')
- `--ad_system_version`: a version for the ad system (optional, defaults to `Date.now`)
- `--ad_id`: an id for the ad, (optional, defaults to a unique `uuid`)
- `--sequence`: the sequence of the ad, (optional, defaults to `1`)

## example

```bash
npm run wrapper \
  --vast_ad_tag_uri=http://example.com \
  --error_uri=http://error.com \
  --ad_id=99 \
  --sequence=4 \
  --ad_system_version=1.1 \
  --ad_system_name="Reach Frequency TV"
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<VAST version="3.0">
  <Ad id="99" sequence="4">
    <Wrapper>
      <AdSystem version="1.1">Reach Frequency TV</AdSystem>
      <VASTAdTagURI><![CDATA[http://example.com]]></VASTAdTagURI>
      <Error><![CDATA[http://error.com]]></Error>
      <Creatives/>
    </Wrapper>
  </Ad>
</VAST>
```

## tests

:pizza:
