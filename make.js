#!/usr/bin/env node

/*
	Iterates every file in current folder
	Every markdown file becomes an HTML file
	markdown files can optionally start with a meta object (in HTML comments) containing a JSON object:

	<!--
	{
		
	}
	-->

	If not given, the defaults will be given by const meta_default below.
*/

const fs = require("fs"),
	path = require("path")

const JSON5 = require("json5")
const marked = require("marked")
const hljs   = require('highlight.js')
const template = require('es6-dynamic-template')

const meta_default = {
	author: "Graham Wakefield",
	template: "content/template.html",
	title: "",
	description: "Alice Lab for Computational Worldmaking, York University, Canada",
}

function generate(file) {
	let src = fs.readFileSync(path.format(file), "utf8");

	console.log("parsing", file.name)
	// lazy deep copy of meta defaults:
	let meta = JSON.parse(JSON.stringify(meta_default)) 
	meta.src = src;

	// update metadata from JSON header:
	let match = (/<!--\s*(\{[\S\s]+?\})\s*-->/gm).exec(src)
	if (match) {
		try {
			let header = JSON5.parse(match[1])
			Object.assign(meta, header);
			src = src.replace(/<!--\s*(\{[\S\s]+?\})\s*-->/gm, "")
		} catch (e) {
			//console.warn("unable to find/parse JSON header for", file.name)
		}
	}
	//  parse title from md:
	try {
		if (!meta.title) meta.title = (/\n#\s+(.+)/gm).exec(src)[1];
	} catch (e) {
		//console.warn("unable to find/parse title")
	}

	meta.src = meta.src
		// auto hr break at heading 1 titles:
		//.replace(/\n(#\s[^\n]+)/g, "\n---\n\n$1")
		// replace @image:path as background contain 
		.replace(/\n---image:([^\s]+)/g, `\n<img src="$1" />\n`)
		.replace(/\n---youtube:([^\s]+)/g, `<iframe width="720" height="540" src="https://youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>`)
		.replace(/\n---vimeo:([^\s]+)/g, `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/$1?loop=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`)
		// auto-embed codepens:
		.replace(/\n---codepen:https?:\/\/codepen.io\/+([^\/]+)\/pen\/([^\/\n]+)\/?/g, 
			`<p class="codepen" data-height="520" data-default-tab="js,result" data-user="$1" data-slug-hash="$2" data-preview="true"><span><a href="https://codepen.io/$1/pen/$2">Open pen.</a></span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>`)
	
	let toc = []
	let renderer = new marked.Renderer();
	let heading = renderer.heading.bind(renderer);
	renderer.heading = function(text, level, ...args) {
		const html = heading(text, level, ...args)
		const match = /id="(.+)"/gm.exec(html)
		if (match && match.length > 1) {
			const id = match[1]
			console.log(text, level, id)
			toc.push({
				level: level,
				text: text,
				id: id,
			})
		}
		return html
	}

	marked.setOptions({
		renderer: renderer,
		highlight: function(code, lang) {
			return hljs.highlight(hljs.getLanguage(lang) ? lang : 'plaintext', code).value;
		}
	});

	meta.body = marked(meta.src);
	meta.toc = toc.length > 1 ? marked(toc.map(item => `${"  ".repeat(item.level-1)}- [${item.text}](#${item.id})`).join("\n")) : "";
	console.log(meta.toc)

	let html = template(fs.readFileSync(meta.template, "utf8"), meta);

	const writename = `${file.name}.html`
	const writepath = path.join(__dirname, writename)
	fs.writeFileSync(writepath, html)
	return writename;
}


console.log("written:", 
	fs.readdirSync(__dirname, "utf8")
		.map(file=>path.parse(file))
		.filter(file=>file.ext==".md")
		.map(generate)
		.join("\n")
	)


