(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{AXTI:function(e,t,n){"use strict";n.r(t),n.d(t,"Underline",(function(){return s})),n.d(t,"default",(function(){return s}));var r=n("jgtz");const s=r.Mark.create({name:"underline",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"u"},{style:"text-decoration",consuming:!1,getAttrs:e=>!!e.includes("underline")&&{}}],renderHTML({HTMLAttributes:e}){return["u",Object(r.mergeAttributes)(this.options.HTMLAttributes,e),0]},addCommands(){return{setUnderline:()=>({commands:e})=>e.setMark(this.name),toggleUnderline:()=>({commands:e})=>e.toggleMark(this.name),unsetUnderline:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-u":()=>this.editor.commands.toggleUnderline()}}})}}]);