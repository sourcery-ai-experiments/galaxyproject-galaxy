<<<<<<< HEAD
define(["utils/utils","mvc/tools","mvc/upload/upload-view","mvc/ui/ui-misc","mvc/history/options-menu","mvc/history/history-panel-edit-current","mvc/tools/tools-form"],function(a,b,c,d,e,f,g){var h=Backbone.View.extend({initialize:function(b){this.options=a.merge(b,{}),this.setElement(this._template());var c=this;this.$("#galaxy_main").on("load",function(){var a=this.contentWindow&&this.contentWindow.location;a&&a.host&&($(this).show(),c.$("#center-panel").empty().hide(),Galaxy.trigger("galaxy_main:load",{fullpath:a.pathname+a.search+a.hash,pathname:a.pathname,search:a.search,hash:a.hash}))});var d=$.extend({},Galaxy.params);"upload1"!==d.tool_id&&(d.tool_id||d.job_id)?(d.tool_id&&(d.id=d.tool_id),this.display(new g.View(d).$el)):this.$("#galaxy_main").prop("src",Galaxy.root+(d.workflow_id&&"workflow/run?id="+d.workflow_id||d.m_c&&d.m_c+"/"+d.m_a||"root/welcome"))},display:function(a){this.$("#galaxy_main").hide(),this.$("#center-panel").empty().scrollTop(0).append(a).show()},_template:function(){return'<div style="position: absolute; width: 100%; height: 100%"><iframe name="galaxy_main" id="galaxy_main" frameborder="0" style="position: absolute; width: 100%; height: 100%;"/><div id="center-panel" style="position: absolute; width: 100%; height: 100%; padding: 10px; overflow: auto;"/></div>'}}),i=Backbone.View.extend({initialize:function(d){if(this.options=a.merge(d,{}),this.setElement(this._template()),Galaxy.user.id||!Galaxy.config.require_login){var e=new b.ToolSearch({spinner_url:d.spinner_url,search_url:d.search_url,hidden:!1}),f=new b.ToolCollection(d.toolbox),g=new b.ToolPanel({tool_search:e,tools:f,layout:d.toolbox_in_panel});tool_panel_view=new b.ToolPanelView({model:g}),Galaxy.toolPanel=g,g.get("layout").size()>0&&(tool_panel_view.render(),this.$(".toolMenu").show()),this.$el.prepend(tool_panel_view.$el),this.$("#internal-workflows").append(this._templateTool({title:"All workflows",href:"workflow/list_for_run"}));for(var h in d.stored_workflow_menu_entries){var i=d.stored_workflow_menu_entries[h];this.$("#internal-workflows").append(this._templateTool({title:i.stored_workflow.name,href:"workflow/run?id="+i.encoded_stored_workflow_id}))}this.$("a[minsizehint]").click(function(){parent.handle_minwidth_hint&&parent.handle_minwidth_hint($(this).attr("minsizehint"))}),Galaxy.upload=new c(d),this.components={header:{title:"Tools",buttons:[Galaxy.upload]}}}},_templateTool:function(a){return'<div class="toolTitle"><a href="'+Galaxy.root+a.href+'" target="galaxy_main">'+a.title+"</a></div>"},_template:function(){return'<div class="toolMenuContainer"><div class="toolMenu" style="display: none"><div id="search-no-results" style="display: none; padding-top: 5px"><em><strong>Search did not match any tools.</strong></em></div></div><div class="toolSectionPad"/><div class="toolSectionPad"/><div class="toolSectionTitle" id="title_XXinternalXXworkflow"><span>Workflows</span></div><div id="internal-workflows" class="toolSectionBody"><div class="toolSectionBg"/></div></div>'}}),j=Backbone.View.extend({initialize:function(b){this.options=a.merge(b,{}),this.setElement(this._template());var c=[],g=new d.ButtonLink({id:"history-refresh-button",title:"Refresh history",cls:"panel-header-button",icon:"fa fa-refresh",onclick:function(){top.Galaxy&&top.Galaxy.currHistoryPanel&&top.Galaxy.currHistoryPanel.loadCurrentHistory()}});c.push(g);var h=new d.ButtonLink({id:"history-options-button",title:"History options",cls:"panel-header-button",target:"galaxy_main",icon:"fa fa-cog",href:Galaxy.root+"root/history_options"});if(c.push(h),!Galaxy.user.isAnonymous()){var i=new d.ButtonLink({id:"history-view-multi-button",title:"View all histories",cls:"panel-header-button",icon:"fa fa-columns",href:Galaxy.root+"history/view_multiple"});c.push(i)}this.components={header:{title:"History",cls:"history-panel-header",buttons:c},body:{cls:"unified-panel-body-background"}},Galaxy.historyOptionsMenu=e(h.$el,{anonymous:Galaxy.user.isAnonymous(),purgeAllowed:Galaxy.config.allow_user_dataset_purge,root:Galaxy.root}),Galaxy.currHistoryPanel=new f.CurrentHistoryPanel({el:this.$el,purgeAllowed:Galaxy.config.allow_user_dataset_purge,linkTarget:"galaxy_main",$scrollContainer:function(){return this.$el.parent()}}),Galaxy.currHistoryPanel.connectToQuotaMeter(Galaxy.quotaMeter),Galaxy.currHistoryPanel.listenToGalaxy(Galaxy),Galaxy.currHistoryPanel.loadCurrentHistory()},_template:function(){return'<div id="current-history-panel" class="history-panel"/>'}});return{left:i,center:h,right:j}});
=======
define(["utils/utils","mvc/tools","mvc/upload/upload-view","mvc/ui/ui-misc","mvc/history/options-menu","mvc/history/history-panel-edit-current","mvc/tools/tools-form"],function(a,b,c,d,e,f,g){var h=Backbone.View.extend({initialize:function(b){this.options=a.merge(b,{}),this.setElement(this._template());var c=this;this.$("#galaxy_main").on("load",function(){var a=this.contentWindow&&this.contentWindow.location;a&&a.host&&($(this).show(),c.$("#center-panel").empty().hide(),Galaxy.trigger("galaxy_main:load",{fullpath:a.pathname+a.search+a.hash,pathname:a.pathname,search:a.search,hash:a.hash}))});var d=$.extend({},Galaxy.params);"upload1"!==d.tool_id&&(d.tool_id||d.job_id)?(d.tool_id&&(d.id=d.tool_id),this.display(new g.View(d).$el)):this.$("#galaxy_main").prop("src",Galaxy.root+(d.workflow_id&&"workflow/run?id="+d.workflow_id||d.m_c&&d.m_c+"/"+d.m_a||Galaxy.config.require_login&&!Galaxy.user.id&&"user/login"||"root/welcome"))},display:function(a){this.prev&&this.prev.remove(),this.prev=a,this.$("#galaxy_main").hide(),this.$("#center-panel").scrollTop(0).append(a.$el).show()},_template:function(){return'<div style="position: absolute; width: 100%; height: 100%"><iframe name="galaxy_main" id="galaxy_main" frameborder="0" style="position: absolute; width: 100%; height: 100%;"/><div id="center-panel" style="position: absolute; width: 100%; height: 100%; padding: 10px; overflow: auto;"/></div>'}}),i=Backbone.View.extend({initialize:function(d){if(this.options=a.merge(d,{}),this.setElement(this._template()),Galaxy.user.id||!Galaxy.config.require_login){var e=new b.ToolSearch({spinner_url:d.spinner_url,search_url:d.search_url,hidden:!1}),f=new b.ToolCollection(d.toolbox),g=new b.ToolPanel({tool_search:e,tools:f,layout:d.toolbox_in_panel});tool_panel_view=new b.ToolPanelView({model:g}),Galaxy.toolPanel=g,g.get("layout").size()>0&&(tool_panel_view.render(),this.$(".toolMenu").show()),this.$el.prepend(tool_panel_view.$el),this.$("#internal-workflows").append(this._templateTool({title:"All workflows",href:"workflow/list_for_run"}));for(var h in d.stored_workflow_menu_entries){var i=d.stored_workflow_menu_entries[h];this.$("#internal-workflows").append(this._templateTool({title:i.stored_workflow.name,href:"workflow/run?id="+i.encoded_stored_workflow_id}))}this.$("a[minsizehint]").click(function(){parent.handle_minwidth_hint&&parent.handle_minwidth_hint($(this).attr("minsizehint"))}),Galaxy.upload=new c(d),this.components={header:{title:"Tools",buttons:[Galaxy.upload]}}}},_templateTool:function(a){return'<div class="toolTitle"><a href="'+Galaxy.root+a.href+'" target="galaxy_main">'+a.title+"</a></div>"},_template:function(){return'<div class="toolMenuContainer"><div class="toolMenu" style="display: none"><div id="search-no-results" style="display: none; padding-top: 5px"><em><strong>Search did not match any tools.</strong></em></div></div><div class="toolSectionPad"/><div class="toolSectionPad"/><div class="toolSectionTitle" id="title_XXinternalXXworkflow"><span>Workflows</span></div><div id="internal-workflows" class="toolSectionBody"><div class="toolSectionBg"/></div></div>'}}),j=Backbone.View.extend({initialize:function(b){this.options=a.merge(b,{}),this.setElement(this._template());var c=[],g=new d.ButtonLink({id:"history-refresh-button",title:"Refresh history",cls:"panel-header-button",icon:"fa fa-refresh",onclick:function(){top.Galaxy&&top.Galaxy.currHistoryPanel&&top.Galaxy.currHistoryPanel.loadCurrentHistory()}});c.push(g);var h=new d.ButtonLink({id:"history-options-button",title:"History options",cls:"panel-header-button",target:"galaxy_main",icon:"fa fa-cog",href:Galaxy.root+"root/history_options"});if(c.push(h),!Galaxy.user.isAnonymous()){var i=new d.ButtonLink({id:"history-view-multi-button",title:"View all histories",cls:"panel-header-button",icon:"fa fa-columns",href:Galaxy.root+"history/view_multiple"});c.push(i)}this.components={header:{title:"History",cls:"history-panel-header",buttons:c},body:{cls:"unified-panel-body-background"}},Galaxy.historyOptionsMenu=e(h.$el,{anonymous:Galaxy.user.isAnonymous(),purgeAllowed:Galaxy.config.allow_user_dataset_purge,root:Galaxy.root}),Galaxy.currHistoryPanel=new f.CurrentHistoryPanel({el:this.$el,purgeAllowed:Galaxy.config.allow_user_dataset_purge,linkTarget:"galaxy_main",$scrollContainer:function(){return this.$el.parent()}}),Galaxy.currHistoryPanel.connectToQuotaMeter(Galaxy.quotaMeter),Galaxy.currHistoryPanel.listenToGalaxy(Galaxy),Galaxy.currHistoryPanel.loadCurrentHistory()},_template:function(){return'<div id="current-history-panel" class="history-panel"/>'}});return{left:i,center:h,right:j}});
>>>>>>> f7d8bf7dbcf49c17273084c425e0a31e0ae3f7d8
//# sourceMappingURL=../../../maps/mvc/app/app-analysis.js.map