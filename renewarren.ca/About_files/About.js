// Created by iWeb 3.0.4 local-build-20160901

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('About_files/AboutMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();IMpreload('About_files','shapeimage_6','0');IMpreload('About_files','shapeimage_6','1');IMpreload('About_files','shapeimage_6','2');IMpreload('About_files','shapeimage_8','0');IMpreload('About_files','shapeimage_8','1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
