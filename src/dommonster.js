/*
 * DOM MONSTER
 * Copyright (c) 2009-2011 Amy Hoy & Thomas Fuchs
 * This code is licensed under the terms of the MIT LICENSE
 * http://mir.aculo.us/dom-monster
 */
 if(!('JR' in window)) JR = { Version: '1.2' };

 JR._lines = { info:[], tip:[], warn:[] };
 JR._firebug = ('console' in window && 'firebug' in console);

 JR.reset = " margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align: baseline;color:inherit;line-height:inherit;";

 JR.close = function(){
   var results = document.getElementById('jr_results_tips');
   results.parentNode.removeChild(results);
 };

 JR.flush = function(string){
   var results = document.getElementById('jr_results_tips'),
     html = '<div style="'+JR.reset+';margin-left:230px;padding-top:4px">';
   function flushArray(array){
     for(var i=0;i<array.length;i++)
       html += '<div style="'+JR.reset+'margin:0 0 4px 0;padding:4px 0px 0px 0px;font-size:11px">' + array[i] + '</div>';
   }
   var prognosis = document.getElementById("jr_results_prognosis"),
     container = document.getElementById("jr_results_prognosis_container"),
     warnings = JR._lines.warn.length;
   if(warnings>0) {
     if(warnings>2) {
       container.style.cssText += ';color:#A02523';
       prognosis.innerHTML = 'whoa, potentially huge issues';
       document.getElementById('jr_results_warnings').innerHTML = JR._lines.warn.length + ' warnings indicate app ill-health';
     } else {
       container.style.cssText += ';color:#E8871D';
       prognosis.innerHTML = 'room for improvement';
       document.getElementById('jr_results_warnings').innerHTML = JR._lines.warn.length + ' warning' + (warnings==1?'':'s');
     }
     document.getElementById('jr_results_warnings_container').style.cssText += ';display:inline';
   } else {
     container.style.cssText += ';color:#40a40F';
     prognosis.innerHTML = 'yay! you\'re doing a great job!';
     document.getElementById('jr_results_warnings_container').style.cssText += ';display:none';
   }

   flushArray(JR._lines.warn);
   flushArray(JR._lines.tip);
   flushArray(JR._lines.info);
   html += '</div>';
   results.innerHTML += html;

   document.getElementById('jr_stats').innerHTML = JR.statsHTML;
 };

 JR.log = function(string, hint, type){
   type = type || 'tip';
   hint = hint || '';
   var color = { info: '888', tip:'88f', warn:'efb000' }[type];
   JR._lines[type].push(
     '<div style="'+JR.reset+'text-transform:uppercase;font-size:10px;border:1px solid #'+color+';width:32px;color:#'+color+';-webkit-border-radius:5px;padding:1px;float:left;text-align:center;margin:-2px 4px 0px 0px">'+type+'</div> '+
     '<strong>'+string+'</strong> '+hint);
 };
 JR.tip =  function(string, hint){ JR.log(string,hint,'tip'); };
 JR.info = function(string, hint){ JR.log(string,hint,'info'); };
 JR.warn = function(string, hint){ JR.log(string,hint,'warn'); };

 JR.time = function(scope){
   JR.time.scope = JR.time.scope || {};
   if(JR.time.scope[scope]) {
     var duration = (new Date()).getTime()-JR.time.scope[scope];
     JR.time.scope[scope] = null;
     return duration/1000;
   } else {
     JR.time.scope[scope] = (new Date()).getTime();
     return null;
   }
 };

 JR.benchmark = function(method, times, scope){
   var i = times || 1000;
   JR.time(scope||'benchmark');
   while(i--) method();
   return JR.time(scope||'benchmark')/times;
 };

  JR.scriptTagsTips = function() {
    var nodes = document.getElementsByTagName('script'),
    head = document.head || document.getElementsByTagName('head')[0],
    count = 0,
    headcount = 0,
    i = nodes.length,
    sources = [];

    while (i--) {
      if (nodes[i].src && nodes[i].src !== '') {
        if (nodes[i].src.indexOf('dommonster.js') === -1 && nodes[i].src.indexOf('google-analytics.com/ga.js') === -1) {
          if (nodes[i].parentNode === head) {
            headcount = headcount + 1;
            sources.push(nodes[i].src);
          }
          count = count + 1;
        }
      } else {
        if (nodes[i].parentNode === head) {
          headcount = headcount + 1;
        }
        count = count + 1;
      }
    }

    if (count > 1) {
      JR[count < 6 ? 'tip' : 'warn'](count + ' &lt;script&gt; tags found on page.', 'Try to reduce the number of script tags by combining (and minifying) them.');
    }

    if (headcount) {
      JR.tip('<abbr style="cursor:help;border-bottom:1px #000 dotted;" title="' + sources.join(' \n') + '">'+ headcount + ' &lt;script&gt; tags in HEAD.</abbr>', 'If possible, move those &lt;script&gt; tags to the end of the document for better loading performance.');
    }
 };


 JR.frameworkTips = function(){
   // Version number on http://prototypejs.org/download
   if('Prototype' in window && Prototype.Version < '1.7')
     JR.tip("You are using the Prototype JavaScript framework v"+Prototype.Version+".","There's a newer version available, which potentially includes performance updates.");

   // Version number on http://script.aculo.us/downloads
   if('Scriptaculous' in window && Scriptaculous.Version < '1.9.0')
     JR.tip("You are using script.aculo.us v"+Scriptaculous.Version+".","There's a newer version available, which potentially includes performance updates.");

   // Version number on http://jquery.com/
   if(typeof jQuery == 'function' && jQuery.prototype.jquery < '1.4.4')
     JR.tip("You are using the jQuery JavaScript framework v"+jQuery.prototype.jquery+".","There's a newer version available, which potentially includes performance updates.");

   // Version number on http://download.dojotoolkit.org/
   if(typeof dojo == 'object' && dojo.version.toString() < '1.5.0' && !(dojo.version.toString().match(/dev/)))
     JR.tip("You are using the dojo JavaScript toolkit v"+dojo.version.toString()+".","There's a newer version available, which potentially includes performance updates.");

   // Version number on http://developer.yahoo.com/yui/
   if(typeof YAHOO == 'object' && typeof YAHOO.evn == 'object' && YAHOO.env.getVersion('yahoo').version < '2.8.2')
     JR.tip("You are using the Yahoo! User Interface Library v"+YAHOO.env.getVersion('yahoo').version+".","There's a newer version available, which potentially includes performance updates.");

   // Version number on http://mootools.net/download
   if(typeof MooTools == 'object' && (!MooTools.version || MooTools.version < '1.3'))
     JR.tip("You are using the MooTools JavaScript tools v"+MooTools.version+".","There's a newer version available, which potentially includes performance updates.");
 };

 JR.iFrameTips = function(){
   var nodes = document.getElementsByTagName('iframe');
   if(nodes.length>0 && nodes.length<4)
     JR.tip('Reduce the number of &lt;iframe&gt; tags.','There are '+nodes.length+' iframe elements on the page.');
   if(nodes.length>=4)
     JR.warn('Reduce the number of &lt;iframe&gt; tags','There are '+nodes.length+' iframe elements on the page.');
 };

 JR.cssTips = function(){
   function linkTagTips(){
   var nodes = [], links = document.getElementsByTagName('link'), i = links.length;
   if(i==0) return;
   while(i--) if((links[i].rel||'').toLowerCase()=='stylesheet') nodes.push(links[i]);
   if(nodes.length>1 && nodes.length<8)
     JR.tip('Reduce the number of &lt;link rel="stylesheet"&gt; tags.','There are '+nodes.length+' external stylesheets loaded on the page.');
   if(nodes.length>=8)
     JR.warn('Reduce the number of &lt;link rel="stylesheet"&gt; tags','There are '+nodes.length+' external stylesheets loaded on the page.');
   }
   function styleAttributeTips(){
     var nodes = document.getElementsByTagName('*'), i = nodes.length, styleNodes = 0;
     while(i--) if(nodes[i].style.cssText.length > 0) styleNodes++;
     if(styleNodes>0)
       JR.tip('Reduce the number of tags that use the style attribute, replacing it with external CSS definitions.',styleNodes+' nodes use the style attribute.');
   }
   linkTagTips();
   styleAttributeTips();
 };

  JR.flashTips = function() {
    var nodes = [],
    obj = document.getElementsByTagName('embed'),
    i = obj.length;

    if (i) {
      while (i--) {
        if ((obj[i].type || '').toLowerCase() == 'application/x-shockwave-flash') nodes.push(obj[i]);
      }
    }

    obj = document.getElementsByTagName('object');
    i = obj.length;
    if (i) {
      while (i--) {
        if ((obj[i].classid || '').toLowerCase() == 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' || (obj[i].type || '').toLowerCase() == 'application/x-shockwave-flash') nodes.push(obj[i]);
      }
    }

    if (nodes.length == 1) {
      JR.tip('Consider alternatives to using Flash.', 'There is 1 Flash object embedded. Replacing this with browser-native implementations (SVG, VML, Canvas) could lead to better loading times, especially if the Flash plugin is loaded first.');
    } else if (nodes.length) {
      JR.tip('Consider alternatives to using Flash.', 'There are ' + nodes.length + ' Flash objects embedded. Replacing these with browser-native implementations (SVG, VML, Canvas) could lead to better loading times, especially if the Flash plugin is loaded first.');
    }
  };

 JR.getStyle = function(element, style) {
   style = style == 'float' ? 'cssFloat' : style;
   var value = element.style[style];
   if (!value || value == 'auto') {
     var css = document.defaultView.getComputedStyle(element, null);
     value = css ? css[style] : null;
   }
   if (style == 'opacity') return value ? parseFloat(value) : 1.0;
   return value == 'auto' ? null : value;
 },

 JR.opacityTips = function(){
   var nodes = document.getElementsByTagName('*'), op = [], i = nodes.length;
   while(i--){
     var opacity = JR.getStyle(nodes[i],'opacity') || 1;
     if(opacity<1) {
       nodes[i].style.cssText += ';border:1px dashed #00f';
       op.push(nodes[i]);
       if(JR._firebug) console.info('Transparent node', nodes[i]);
     }
   }
   if(op.length>0 && op.length < 10)
     JR.tip('Some nodes use transparency.','To improve rendering performance, try not to use the CSS opacity property (found '+op.length+' nodes, marked with a dashed blue border).');
   if(op.length >= 10)
     JR.warn('Lots of nodes use transparency.','To improve rendering performance, try not to use the CSS opacity property (found '+op.length+' nodes, marked with a dashed blue border).');
 };

 JR.nodesTips = function(){
   function level(value,mid,high){
     return value<mid?'low':value<high?'mid':'high';
   }
   var nodes = document.getElementsByTagName('*'), i = nodes.length, nodecount = 0,
     empty = 0, deprecated = 0, whitespace = 0, textnodes = 0, comments = 0, deprecatedTags = {};
   while(i--) {
     var tag = nodes[i].tagName.toLowerCase();
     if (nodes[i].childNodes.length==0 && !(tag=='link' || tag=='br' || tag=='script' || tag=='meta' || tag=='img' ||
           tag=='a' || tag=='input' || tag=='hr' || tag=='param' || tag=='iframe' ||
           tag=='area' || tag=='base') && !((nodes[i].id||'') == '_firebugConsole')) {
       if(JR._firebug) console.warn('Empty node', nodes[i]);
       empty++;
     }

     if (tag=='font' || tag=='center' || tag=='s' || tag=='strike' || tag=='u' || tag=='dir' || tag=='applet'){
       if(JR._firebug) console.warn('Deprecated node', nodes[i]);
       if(!deprecatedTags[tag]) deprecatedTags[tag] = true;
       deprecated++;
     }
   }
   function findWhitespaceTextnodes(element){
     if(element.childNodes.length>0)
       for(var i=0;i<element.childNodes.length;i++)
         findWhitespaceTextnodes(element.childNodes[i]);
     nodecount++;
     if(element.nodeType==8)
       comments++;
     if(element.nodeType==3 && /^\s+$/.test(element.nodeValue)){
       // if(JR._firebug) console.warn('Whitespace-only text node', element);
       whitespace++;
     }
     if(element.nodeType==3)
       textnodes++;
   }
   findWhitespaceTextnodes(document);

   JR.stats(nodecount, 'nodes', level(nodecount,1500,3000));
   JR.stats(textnodes, 'text nodes', level(textnodes,750,1500));

   if(empty) JR.tip('There are '+empty+' empty nodes.','Removing them might improve performance.');
   if(deprecated) {
     var tags = [];
     for(tag in deprecatedTags) tags.push(tag.toUpperCase());
     JR.tip('There are '+deprecated+' nodes which use a deprecated tag name ('+tags.join(', ')+').','Try updating this content to HTML4.');
   }
   if(whitespace)
     JR.tip(((whitespace/nodecount)*100).toFixed(1)+'% of nodes are whitespace-only text nodes.','Reducing the amount of whitespace, like line breaks and tab stops, can help improve the loading and DOM API performance of the page.');
   if(comments)
     JR.tip('There are '+comments+' HTML comments.','Removing the comments can help improve the loading and DOM API performance of the page.');
 };

 JR.statsHTML = '';
 JR.stats = function(value, stat, type){
   var color = { low: '80E41F', mid: 'E8871D', high: 'A02523' };
   JR.statsHTML +=
     '<div style="'+JR.reset+'margin:0;margin-left:5px;padding:0;margin-bottom:4px;height:auto"><div style="'+JR.reset+';float:left;width:13px;height:13px;margin-right:2px;background:#'+color[type||'low']+'"> </div>'+
     '<strong>'+value+'</strong> '+stat+
     '</div>'
 };

 JR.performanceTips = function(){
   function level(value,mid,high){
     return value<mid?'low':value<high?'mid':'high';
   }
   function parentNodes(node){
     var counter = 0;
     if(node.parentNode)
       while(node = node.parentNode){ counter++ };
     return counter;
   }
   var nodes = document.getElementsByTagName('*'), nodeStats = [], i = nodes.length, average = 0, very = false;
   while(i--) {
     average += parentNodes(nodes[i]);
     if(parentNodes(nodes[i])>15){
       very = true;
       nodes[i].style.cssText += ';border:1px dashed #f00';
     }
   }
   average = average/nodes.length;
   var domsize = document.body.innerHTML.length;
   JR.stats(nodes.length, 'elements', level(nodes.length,750,1500));

   JR.nodesTips();
   JR.stats(average.toFixed(1), 'average nesting depth', level(average,8,15));
   JR.stats((domsize/1024).toFixed(1)+'k', 'serialized DOM size', level(domsize,100*1024,250*1024));

   if(domsize>(100*1024) && domsize<(250*1024))
     JR.tip('Your serialized DOM size is a little high.','Performance might improve if you reduce the amount of HTML.');
   if(domsize>=(250*1024))
     JR.warn('DOM size is higher than 250k.','Performance might improve if you reduce the amount of HTML.');

   var bodycount = JR.benchmark(function(){
     document.body.appendChild(document.createTextNode(' '));
     var x = document.body.innerHTML;
   }, 10);
   JR.stats(bodycount.toFixed(3)+'s', 'serialization time', level(bodycount,0.05,0.1));
   if(bodycount>0.1)
     JR.warn('Average DOM serialization speed is '+bodycount.toFixed(3)+'s.','Try to reduce the complexity of the DOM structure.');

   if(nodes.length>1500)
     JR.warn('Element count seems excessively high.','Performance might improve if you reduce the number of nodes.');
   if(average>8 && average<=15)
     JR.tip('Nesting depth is a little high.','Reducing it might increase performance.');
   if(very)
     JR.warn('Nesting depth is very high.','Some of the nodes are nested more than 15 levels deep (these are marked with a dashed red border).');

   JR.frameworkTips();
   JR.scriptTagsTips();
   JR.iFrameTips();
   JR.cssTips();
   JR.opacityTips();
   JR.flashTips();

   if(JR._lines.tip.length == 0 && JR._lines.warn.length == 0)
     JR.tip('No tips! Congratulations! It seems your site is up to speed!');
 };

 (function(){
   var IE = !!(window.attachEvent && navigator.userAgent.indexOf('Opera') === -1);
   if(IE) JR.getStyle = function(element, style) {
     style = (style == 'float' || style == 'cssFloat') ? 'styleFloat' : style;
     var value = element.style[style];
     if (!value && element.currentStyle) value = element.currentStyle[style];

     if (style == 'opacity') {
       if (value = (element.style.filter || '').match(/alpha\(opacity=(.*)\)/))
         if (value[1]) return parseFloat(value[1]) / 100;
       return 1.0;
     }
     return value;
   };
   var old = document.getElementById('jr_results_tips');
   if(old) old.parentNode.removeChild(old);
   setTimeout(function(){
     if(JR._firebug)
       JR.info('Check the Firebug console for detailed information on some of the tips.');
     try{
       JR.performanceTips();
     }catch(e){
       JR.info('Error '+e+' while analyzing page. Please let DOM Monster know about this problem!');
     };
     var body = document.getElementsByTagName('body')[0], node = document.createElement('div');
     node.id = 'jr_results';
     body.appendChild(node);

     node.style.cssText =
       JR.reset+'text-align:left;z-index:1000000;letter-spacing:0;position:fixed;bottom:0;'+
       'color:#444;font:12px/13px \'Helvetica Neue\', Verdana, Arial, sans serif;'+
       'width:80%;left:10%';
     node.innerHTML =
       '<div id="jr_results_tips" style="'+JR.reset+'max-height:400px;margin:10px;padding:5px;overflow:auto;background:#fff;border:2px solid #b42328;-moz-border-radius:9px;-webkit-border-radius:9px;-webkit-box-shadow: 0px 2px 40px rgba(0,0,0,0.5);">' +
         '<div style="'+JR.reset+'height:23px;font-size:16px;font-weight:normal;margin-top:0px;margin-bottom:5px;color:#444">'+
           '<div style="'+JR.reset+'float:left;padding:5px 0px 3px 5px" id="jr_results_prognosis_container">'+
             '<span id="jr_results_prognosis" style="'+JR.reset+'"></span> '+
             '<span style="'+JR.reset+'font-size:12px;font-weight:normal" id="jr_results_warnings_container"><span id="jr_results_warnings" style="'+JR.reset+'"></span></span>'+
           '</div>'+
           '<div style="'+JR.reset+'cursor:pointer;float:right;padding:5px 10px 3px 10px;height:15px;background:#b42328;-webkit-border-radius:5px;color:#fff;text-shadow:0px 1px 3px rgba(0,0,0,0.5)" onclick="location.href=\'http://jsrocks.com/\'">'+
             'dom monster <span style="'+JR.reset+'font-size:10px">v'+JR.Version+'</span>'+
           '</div>'+
           '<div style="'+JR.reset+'color:#888;float:right;padding:7px 10px 0px 10px;font-size:10px;text-decoration:underline;cursor:pointer" onclick="JR.close()">'+
             'close'+
           '</div>'+
         '</div>'+
         '<div style="'+JR.reset+'float:left;width:220px;padding:4px;margin-top:2px" id="jr_stats">'+
         '</div>'+
       '</div>';
     JR.flush();
   },10);
 })();
