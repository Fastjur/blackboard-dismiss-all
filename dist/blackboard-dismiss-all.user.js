// ==UserScript==
// @name         BlackBoard dismiss all button
// @namespace    https://www.liquidpineapple.net
// @version      1.0.0
// @description  A userscript that adds a dismiss all button to the BlackBoard Updates section
// @author       grappigegovert
// @author       Jurriaan Den Toonder<jurriaan.toonder@liquidpineapple.net>
// @match        https://blackboard.tudelft.nl/webapps/streamViewer*streamName=alerts*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
"use strict";window.setTimeout(function(){function e(e){for(var t=stream.streamViewers.alerts,s=t.streamEntries.length-1;s>=0;s--){var n=t.streamEntries[s];if(NautilusViewService.removeRecipient(n.itemSpecificData.actorId),n.entryDiv){var r=n.entryDiv.parentNode;r&&(r.removeChild(n.entryDiv),n.entryDiv=null)}}t.streamEntries.splice(0,t.streamEntries.length),page.ContextMenu.closeAllContextMenus()}document.getElementById("stream_currentFilterText_alerts").outerHTML='<div class="current_filter" id="stream_currentFilterText_alerts"><span>All</span><span class="stream_item" style="border: none; padding: 0;"><span class="stream_context"><span class="inlineContextMenu" style="margin-left: 5px;"><a id="dismissall" class="browse" role="button" href="#" title="Dismiss all">Dismiss all</a></span></span></span></div>',document.getElementById("dismissall").addEventListener("click",e,!1)},1e3);