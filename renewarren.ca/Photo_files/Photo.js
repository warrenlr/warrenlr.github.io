// Created by iWeb 3.0.4 local-build-20180203

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Photo_files/PhotoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Photo_files','shapeimage_4','0');IMpreload('Photo_files','shapeimage_4','1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
