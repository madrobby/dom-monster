/*
 * DOM MONSTER
 * Copyright (c) 2009-2011 Amy Hoy & Thomas Fuchs
 * This code is licensed under the terms of the MIT LICENSE
 * http://mir.aculo.us/dom-monster
 */

(function(){
  if(!('JR' in window)) window.JR = { Version: '1.2.1' };
  var JR = window.JR;
  
  function $(id){ return document.getElementById(id); }
  
  JR.language = 'es';
  
  JR._i18n = {
	es : {
		close : 'cerrar',					
		tip1:'Se han encontrado {0} etiquetas <script> en la página.',
		tip2:'Trate de reducir el número de etiquetas de script.',
		tip3: '<span style="cursor:help" title="{0}"> encontrados {1} etiquetas <script> en el HEAD. </ span>',
		tip4: 'Para una mejor percepción de rendimiento de carga de etiquetas de secuencia de comandos de movimiento al final del documento.',
		tip5 : 'Esta utilizando el framework Prototype JavaScript v{0}',
		tip6 : "Hay una nueva versión disponible, lo que potencialmente incluye actualizaciones de rendimiento.",
		tip7: "Esta utilizando script.aculo.us v{0}.",
		tip8: "Hay una nueva versión disponible, lo que potencialmente incluye actualizaciones de rendimiento.",
		tip9: "Esta utilizando el framework jQuery v{0}.",
		tip10: "Hay una nueva versión disponible, lo que potencialmente incluye actualizaciones de rendimiento.",
		tip11: "Esta utilizando dojo JavaScript toolkit v{0}.",
		tip12: "Hay una nueva versión disponible, lo que potencialmente incluye actualizaciones de rendimiento.",
		tip13: "Esta utilizando Yahoo! User Interface Library v{0}.",
		tip14: "Hay una nueva versión disponible, lo que potencialmente incluye actualizaciones de rendimiento.",
		tip15: "Esta utilizando MooTools JavaScript tools v{0}.",
		tip16: "Hay una nueva versión disponible, lo que potencialmente incluye actualizaciones de rendimiento.",
		tip17: 'Reducir el numero de etiquetas iframe.',
		tip18: 'Hay {0} elementos iframe en la página.',
		tip19: 'Reducir el número de etiquetas &lt;link rel="stylesheet"&gt;.',
		tip20: 'Hay {0} hojas de estilo externas cargadas en la página.',
		tip21: 'Reducir el número de etiquetas que utilizan el atributo de estilo, su sustitución por las definiciones CSS externos.',
		tip22: '{0} nodos utilizan el atributo de estilo.',
		tip23: 'Considerar alternativas al uso de Flash.', 
		tip24: 'Hay {0} Flash objeto incrustado. Sustitución de esto con las implementaciones de navegador nativo (SVG, VML, Canvas) podría conducir a mejores tiempos de carga, especialmente si el plugin de Flash se carga primero.',
		tip25: 'Algunos nodos utilizan la transparencia.',
		tip26: 'Para mejorar el rendimiento de la representación, trate de no usar la propiedad CSS opacity (que se encuentra {0} nodos, marcados con un borde punteado azul).',
		tip27: 'Hay {0} nodos vacio.',
		tip28: "Extracción de ellos podría mejorar el rendimiento.",	
		tip29: "Hay {0} nodos que utilizan un nombre de etiqueta en desuso ('{1}').",
		tip30: 'Intente actualizar este contenido a HTML4.',
		tip31: '{0}% de los nodos son nodos de texto de sólo espacios en blanco.',
		tip32: 'Reducir la cantidad de espacio en blanco, como saltos de línea y las tabulaciones, puede ayudar a mejorar la carga y el rendimiento de la API DOM de la página.',
		tip33: 'Hay {0} comentarios HTML.',
		tip34: 'Eliminacion de las observaciones pueden ayudar a mejorar la carga y el rendimiento de la API DOM de la página.',
		tip35: 'El tamaño de su serializado DOM es un poco alto.',
		tip36: 'Profundidad de anidamiento es un poco alto.',
		tip37: 'La reduccion se podría aumentar el rendimiento.',
		tip38: 'No hay consejos! ¡Enhorabuena! Parece que su sitio está al día!',
		tip39: 'DOM tamaño es superior a 250k.',
		tip40: 'El rendimiento puede mejorar si se reduce la cantidad de HTML.',
		tip41: 'Velocidad media de serialización DOM es {0}s.',
		tip42: 'Trate de reducir la complejidad de la estructura del DOM.',
		tip43: 'Contar con elementos parece excesivamente alto.',
		tip44: 'Performance might improve if you reduce the number of nodes.',
		tip45: 'El rendimiento puede mejorar si se reduce el número de nodos.',
		tip46: 'Algunos de los nodos se anidan más de 15 niveles de profundidad (estos son marcados con un borde rojo discontinuo).',
		tip47: 'Compruebe la consola de Firebug para obtener información detallada sobre algunos de los consejos.',
		tip48: 'Error {0}, mientras se realizaba el análisis de la página. Por favor, deje a DOM Monster saber acerca de este problema!',
		tip49: 'nodos',
		tip50: 'nodos de texto',
		tip51: 'elementos',
		tip52: 'promedio de profundidad de anidamiento',
		tip53: 'tiempo de serializacion',
		tip54: 'serializado tamaño DOM',
		tip55: 'El rendimiento puede mejorar si se reduce la cantidad de HTML.'	,
		tip56: 'whoa, potencialmente grandes problemas',
		tip57:  'margen de mejora',
		tip58: 'yay! estas haciendo un gran trabajo!'	
	},
	us : {
		close : 'close',					
		tip1:'Found {0} &lt;script&gt; tags on page.',
		tip2:'Try to reduce the number of script tags.',
		tip3: '<span style="cursor:help" title="{0}">Found {1} &lt;script&gt; tags in HEAD.</span>',
		tip4: 'For better perceived loading performance move script tags to end of document.',
		tip5 : 'You are using the Prototype JavaScript framework v{0}',
		tip6 : "There's a newer version available, which potentially includes performance updates.",
		tip7: "You are using script.aculo.us v{0}.",
		tip8: "There's a newer version available, which potentially includes performance updates.",
		tip9: "You are using the jQuery JavaScript framework v{0}.",
		tip10: "There's a newer version available, which potentially includes performance updates.",
		tip11: "You are using the dojo JavaScript toolkit v{0}.",
		tip12: "There's a newer version available, which potentially includes performance updates.",
		tip13: "You are using the Yahoo! User Interface Library v{0}.",
		tip14: "There's a newer version available, which potentially includes performance updates.",
		tip15: "You are using the MooTools JavaScript tools v{0}.",
		tip16: "There's a newer version available, which potentially includes performance updates.",
		tip17: 'Reduce the number of &lt;iframe&gt; tags.',
		tip18: 'There are {0} iframe elements on the page.',
		tip19: 'Reduce the number of &lt;link rel="stylesheet"&gt; tags.',
		tip20: 'There are {0} external stylesheets loaded on the page.',
		tip21: 'Reduce the number of tags that use the style attribute, replacing it with external CSS definitions.',
		tip22: '{0} nodes use the style attribute.',
		tip23: 'Consider alternatives to using Flash.', 
		tip24: 'There is {0} Flash object embedded. Replacing this with browser-native implementations (SVG, VML, Canvas) could lead to better loading times, especially if the Flash plugin is loaded first.',
		tip25: 'Some nodes use transparency.',
		tip26: 'To improve rendering performance, try not to use the CSS opacity property (found {0} nodes, marked with a dashed blue border).',
		tip27: 'There are {0} empty nodes.',
		tip28: "Removing them might improve performance.",	
		tip29: "There are {0} nodes which use a deprecated tag name ('{1}').",
		tip30: 'Try updating this content to HTML4.',
		tip31: '{0}% of nodes are whitespace-only text nodes.',
		tip32: 'Reducing the amount of whitespace, like line breaks and tab stops, can help improve the loading and DOM API performance of the page.',
		tip33: 'There are {0} HTML comments.',
		tip34: 'Removing the comments can help improve the loading and DOM API performance of the page.',
		tip35: 'Your serialized DOM size is a little high.',
		tip36: 'Nesting depth is a little high.',
		tip37: 'Reducing it might increase performance.',
		tip38: 'No tips! Congratulations! It seems your site is up to speed!',
		tip39: 'DOM size is higher than 250k.',
		tip40: 'Performance might improve if you reduce the amount of HTML.',
		tip41: 'Average DOM serialization speed is {0}s.',
		tip42: 'Try to reduce the complexity of the DOM structure.',
		tip43: 'Element count seems excessively high.',
		tip44: 'Performance might improve if you reduce the number of nodes.',
		tip45: 'Nesting depth is very high.',
		tip46: 'Some of the nodes are nested more than 15 levels deep (these are marked with a dashed red border).',
		tip47: 'Check the Firebug console for detailed information on some of the tips.',
		tip48: 'Error {0} while analyzing page. Please let DOM Monster know about this problem!',
		tip49: 'nodes',
		tip50: 'text nodes',
		tip51: 'elements',
		tip52: 'average nesting depth',
		tip53: 'serialization time',
		tip54: 'serialized DOM size',
		tip55: 'Performance might improve if you reduce the amount of HTML.',
		tip56: 'whoa, potentially huge issues',
		tip57:  'room for improvement',
		tip58: 'yay! you\'re doing a great job!'
	}
  };
  
  JR._lines = { info:[], tip:[], warn:[] };
  JR._firebug = ('console' in window && 'firebug' in console);
  
  JR.reset = " margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align: baseline;color:inherit;line-height:inherit;";
  
  JR.close = function(){
    var results = $('jr_results_tips');
    results.parentNode.removeChild(results);
  };
  
  JR._i18n.code = function(code){
    var c = JR._i18n[JR.language][code];
	if(arguments.length>1){	 
	   var i2 = 0;
	   for (var i = 1; i < arguments.length; i++)
       {      
		i2 = i - 1;
		c = c.replace('{'+i2+'}',arguments[i]);	   
       }	   
	}	
    return c;    
  };
  JR.changeLanguage = function(){
    JR.language = 'es';
    //Ideas???
  };
  
  JR.flush = function(string){
    var results = $('jr_results_tips'),
      html = '<div style="'+JR.reset+';margin-left:230px;padding-top:4px">';
    function flushArray(array){
      for(var i=0;i<array.length;i++)
        html += '<div style="'+JR.reset+'margin:0 0 4px 0;padding:4px 0px 0px 0px;font-size:11px">' + array[i] + '</div>';
    }
    var prognosis = $("jr_results_prognosis"),
      container = $("jr_results_prognosis_container"),
      warnings = JR._lines.warn.length;
    if(warnings>0) {
      if(warnings>2) {
        container.style.cssText += ';color:#A02523';
        prognosis.innerHTML = JR._i18n.code('tip56'); 
        $('jr_results_warnings').innerHTML = JR._lines.warn.length + ' warnings indicate app ill-health';
      } else {
        container.style.cssText += ';color:#E8871D';
        prognosis.innerHTML = JR._i18n.code('tip57');
        $('jr_results_warnings').innerHTML = JR._lines.warn.length + ' warning' + (warnings==1?'':'s');
      }
      $('jr_results_warnings_container').style.cssText += ';display:inline';
    } else {
      container.style.cssText += ';color:#40a40F';
      prognosis.innerHTML = JR._i18n.code('tip58'); 
      $('jr_results_warnings_container').style.cssText += ';display:none';
    }
  
    flushArray(JR._lines.warn);
    flushArray(JR._lines.tip);
    flushArray(JR._lines.info);
    html += '</div>';
    results.innerHTML += html;
  
    $('jr_stats').innerHTML = JR.statsHTML;
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
  
  JR.scriptTagsTips = function(){
    var nodes = document.getElementsByTagName('script'),
      head = document.head || document.getElementsByTagName('head')[0];
  
    var count = 0, headcount = 0, i = nodes.length, sources = [];
    while(i--){
      if(nodes[i].src && nodes[i].src !== ''){
        if(nodes[i].src.indexOf('dommonster.js') === -1 && 
           nodes[i].src.indexOf('google-analytics.com/ga.js') === -1 &&
           nodes[i].src.indexOf('getclicky.com/in.php') === -1){
          if(nodes[i].parentNode === head){
             headcount = headcount + 1;
             sources.push(nodes[i].src);
          }
          count = count + 1;
        }
      }else{
        if(nodes[i].parentNode === head){
          headcount = headcount + 1;
        }
        count = count + 1;
      }
    }
  
    if(count>2 && count<6)
      JR.tip(JR._i18n.code('tip1',count),JR._i18n.code('tip2'));
    if(nodes.length>=6)
      JR.warn(JR._i18n.code('tip1',count),JR._i18n.code('tip2'));	 
    if(headcount>0)
      JR.tip(JR._i18n.code('tip3',sources.join('\n'),headcount),JR._i18n.code('tip4'));	  	  
  };
  
  JR.frameworkTips = function(){
    // Version number on http://prototypejs.org/download
    if('Prototype' in window && Prototype.Version < '1.7')
      JR.tip(JR._i18n.code('tip5',Prototype.Version),JR._i18n.code('tip6'));
    // Version number on http://script.aculo.us/downloads
    if('Scriptaculous' in window && Scriptaculous.Version < '1.9.0')
      JR.tip(JR._i18n.code('tip7',Scriptaculous.Version),JR._i18n.code('tip8'));	  
    // Version number on http://jquery.com/
    if(typeof jQuery == 'function' && jQuery.prototype.jquery < '1.4.4')
	  JR.tip(JR._i18n.code('tip9',jQuery.prototype.jquery),JR._i18n.code('tip10'));      
    // Version number on http://download.dojotoolkit.org/
    if(typeof dojo == 'object' && dojo.version.toString() < '1.5.0' && !(dojo.version.toString().match(/dev/)))
	  JR.tip(JR._i18n.code('tip11',dojo.version.toString()),JR._i18n.code('tip12'));      
    // Version number on http://developer.yahoo.com/yui/
    if(typeof YAHOO == 'object' && typeof YAHOO.evn == 'object' && YAHOO.env.getVersion('yahoo').version < '2.8.2')
      JR.tip(JR._i18n.code('tip13',YAHOO.env.getVersion('yahoo').version),JR._i18n.code('tip14'));	    
    // Version number on http://mootools.net/download
    if(typeof MooTools == 'object' && (!MooTools.version || MooTools.version < '1.3'))
	  JR.tip(JR._i18n.code('tip15',MooTools.version),JR._i18n.code('tip16'));
  };
  
  JR.iFrameTips = function(){
    var nodes = document.getElementsByTagName('iframe');
    if(nodes.length>0 && nodes.length<4)
	  JR.tip(JR._i18n.code('tip17'),JR._i18n.code('tip18',nodes.length));      
    if(nodes.length>=4)
	  JR.warn(JR._i18n.code('tip17'),JR._i18n.code('tip18',nodes.length));      
  };
  
  JR.cssTips = function(){
    function linkTagTips(){
    var nodes = [], links = document.getElementsByTagName('link'), i = links.length;
    if(i==0) return;
    while(i--) if((links[i].rel||'').toLowerCase()=='stylesheet') nodes.push(links[i]);
    if(nodes.length>1 && nodes.length<8)
	  JR.tip(JR._i18n.code('tip19'),JR._i18n.code('tip20',nodes.length));
    if(nodes.length>=8)
	  JR.warn(JR._i18n.code('tip19'),JR._i18n.code('tip20',nodes.length));
    }
    function styleAttributeTips(){
      var nodes = document.getElementsByTagName('*'), i = nodes.length, styleNodes = 0;
      while(i--) if(nodes[i].style.cssText.length > 0) styleNodes++;
      if(styleNodes>0)
        JR.tip(JR._i18n.code('tip21'),JR._i18n.code('tip22',styleNodes));
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
	   JR.tip(JR._i18n.code('tip23'),JR._i18n.code('tip24',"1"));       
     } else if (nodes.length) {
	   JR.tip(JR._i18n.code('tip23'),JR._i18n.code('tip24',nodes.length));       
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
	  JR.tip(JR._i18n.code('tip25'),JR._i18n.code('tip26',op.length));      
    if(op.length >= 10)
	  JR.warn(JR._i18n.code('tip25'),JR._i18n.code('tip26',op.length));      
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
  
    JR.stats(nodecount, JR._i18n.code('tip49'), level(nodecount,1500,3000));
    JR.stats(textnodes, JR._i18n.code('tip50'), level(textnodes,750,1500));
  
    if(empty) JR.tip(JR._i18n.code('tip27',empty),JR._i18n.code('tip28'));      
    if(deprecated) {
      var tags = [];
      for(tag in deprecatedTags) tags.push(tag.toUpperCase());
	  JR.tip(JR._i18n.code('tip29',deprecated,tags.join(', ')),JR._i18n.code('tip30'));       
    }
    if(whitespace)
      JR.tip(JR._i18n.code('tip31',((whitespace/nodecount)*100).toFixed(1)),JR._i18n.code('tip32'));	  
    if(comments)
	  JR.tip(JR._i18n.code('tip33',comments),JR._i18n.code('tip34'));      
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
    JR.stats(nodes.length, JR._i18n.code('tip51'),level(nodes.length,750,1500));
  
    JR.nodesTips();
    JR.stats(average.toFixed(1), JR._i18n.code('tip52'),level(average,8,15));
    JR.stats((domsize/1024).toFixed(1)+'k',JR._i18n.code('tip54'), level(domsize,100*1024,250*1024));
  
    if(domsize>(100*1024) && domsize<(250*1024))      
 	JR.tip(JR._i18n.code('tip35'),JR._i18n.code('tip55'));  
    if(domsize>=(250*1024))
      JR.warn(JR._i18n.code('tip39'),JR._i18n.code('tip40'));  
      
  
    var bodycount = JR.benchmark(function(){
      document.body.appendChild(document.createTextNode(' '));
      var x = document.body.innerHTML;
    }, 10);
    JR.stats(bodycount.toFixed(3)+'s',JR._i18n.code('tip53'),level(bodycount,0.05,0.1));
    if(bodycount>0.1)
      JR.warn(JR._i18n.code('tip41',bodycount.toFixed(3)),JR._i18n.code('tip42'));
  
    if(nodes.length>1500)
      JR.warn(JR._i18n.code('tip43'),JR._i18n.code('tip44'));
    if(average>8 && average<=15)
 	JR.tip(JR._i18n.code('tip36'),JR._i18n.code('tip37'));
    if(very)
      JR.warn(JR._i18n.code('tip45'),JR._i18n.code('tip46'));
  
    JR.frameworkTips();
    JR.scriptTagsTips();
    JR.iFrameTips();
    JR.cssTips();
    JR.opacityTips();
    JR.flashTips();
  
    if(JR._lines.tip.length == 0 && JR._lines.warn.length == 0)
      JR.tip(JR._i18n.code('tip38'));
  };
  
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
 
  var old = $('jr_results_tips');
  if(old) old.parentNode.removeChild(old);
  setTimeout(function(){
    if(JR._firebug)
      JR.info(JR._i18n.code('tip47'));
    try {
      JR.performanceTips();
    } catch(e) {
      JR.info(JR._i18n.code('tip48',e));
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
          '<div style="'+JR.reset+'cursor:pointer;float:right;padding:5px 10px 3px 10px;height:15px;background:#b42328;-webkit-border-radius:5px;color:#fff;text-shadow:0px 1px 3px rgba(0,0,0,0.5)" onclick="location.href=\'http://mir.aculo.us/dom-monster/\'">'+
            'dom monster <span style="'+JR.reset+'font-size:10px">v'+JR.Version+'</span>'+
          '</div>'+
          '<div style="'+JR.reset+'color:#888;float:right;padding:7px 10px 0px 10px;font-size:10px;text-decoration:underline;cursor:pointer" onclick="JR.close()">'+
           JR._i18n.code('close') +
          '</div>'+
        '</div>'+
        '<div style="'+JR.reset+'float:left;width:220px;padding:4px;margin-top:2px" id="jr_stats">'+
        '</div>'+
      '</div>';
    JR.flush();
  },10);
 })();
