import{_ as t,c as e,o as a,V as o}from"./chunks/framework.81857c86.js";const b=JSON.parse('{"title":"h1 Heading 😎","description":"","frontmatter":{},"headers":[],"relativePath":"docs/demo.md","filePath":"docs/demo.md","lastUpdated":1666707027000}'),i={name:"docs/demo.md"},r=o(`<h1 id="h1-heading" tabindex="-1">h1 Heading 😎 <a class="header-anchor" href="#h1-heading" aria-label="Permalink to &quot;h1 Heading 8-)&quot;">​</a></h1><h2 id="h2-heading" tabindex="-1">h2 Heading <a class="header-anchor" href="#h2-heading" aria-label="Permalink to &quot;h2 Heading&quot;">​</a></h2><h3 id="h3-heading" tabindex="-1">h3 Heading <a class="header-anchor" href="#h3-heading" aria-label="Permalink to &quot;h3 Heading&quot;">​</a></h3><h4 id="h4-heading" tabindex="-1">h4 Heading <a class="header-anchor" href="#h4-heading" aria-label="Permalink to &quot;h4 Heading&quot;">​</a></h4><h5 id="h5-heading" tabindex="-1">h5 Heading <a class="header-anchor" href="#h5-heading" aria-label="Permalink to &quot;h5 Heading&quot;">​</a></h5><h6 id="h6-heading" tabindex="-1">h6 Heading <a class="header-anchor" href="#h6-heading" aria-label="Permalink to &quot;h6 Heading&quot;">​</a></h6><h2 id="horizontal-rules" tabindex="-1">Horizontal Rules <a class="header-anchor" href="#horizontal-rules" aria-label="Permalink to &quot;Horizontal Rules&quot;">​</a></h2><hr><hr><hr><h2 id="typographic-replacements" tabindex="-1">Typographic replacements <a class="header-anchor" href="#typographic-replacements" aria-label="Permalink to &quot;Typographic replacements&quot;">​</a></h2><p>Enable typographer option to see result.</p><p>(c) (C) (r) (R) (tm) (TM) (p) (P) +-</p><p>test.. test... test..... test?..... test!....</p><p>!!!!!! ???? ,, -- ---</p><p>&quot;Smartypants, double quotes&quot; and &#39;single quotes&#39;</p><h2 id="emphasis" tabindex="-1">Emphasis <a class="header-anchor" href="#emphasis" aria-label="Permalink to &quot;Emphasis&quot;">​</a></h2><p><strong>This is bold text</strong></p><p><strong>This is bold text</strong></p><p><em>This is italic text</em></p><p><em>This is italic text</em></p><p><s>Strikethrough</s></p><h2 id="blockquotes" tabindex="-1">Blockquotes <a class="header-anchor" href="#blockquotes" aria-label="Permalink to &quot;Blockquotes&quot;">​</a></h2><blockquote><p>Blockquotes can also be nested...</p><blockquote><p>...by using additional greater-than signs right next to each other...</p><blockquote><p>...or with spaces between arrows.</p></blockquote></blockquote></blockquote><h2 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists" aria-label="Permalink to &quot;Lists&quot;">​</a></h2><p>Unordered</p><ul><li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li><li>Sub-lists are made by indenting 2 spaces: <ul><li>Marker character change forces new list start: <ul><li>Ac tristique libero volutpat at</li></ul><ul><li>Facilisis in pretium nisl aliquet</li></ul><ul><li>Nulla volutpat aliquam velit</li></ul></li></ul></li><li>Very easy!</li></ul><p>Ordered</p><ol><li><p>Lorem ipsum dolor sit amet</p></li><li><p>Consectetur adipiscing elit</p></li><li><p>Integer molestie lorem at massa</p></li><li><p>You can use sequential numbers...</p></li><li><p>...or keep all the numbers as <code>1.</code></p></li></ol><p>Start numbering with offset:</p><ol start="57"><li>foo</li><li>bar</li></ol><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><p>Inline <code>code</code></p><p>Indented code</p><pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code
</code></pre><p>Block code &quot;fences&quot;</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Sample text here...</span></span></code></pre></div><p>Syntax highlighting</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">bar</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bar</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h2><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td>path to data files to supply the data that will be passed into templates.</td></tr><tr><td>engine</td><td>engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td>ext</td><td>extension to be used for dest files.</td></tr></tbody></table><p>Right aligned columns</p><table><thead><tr><th style="text-align:right;">Option</th><th style="text-align:right;">Description</th></tr></thead><tbody><tr><td style="text-align:right;">data</td><td style="text-align:right;">path to data files to supply the data that will be passed into templates.</td></tr><tr><td style="text-align:right;">engine</td><td style="text-align:right;">engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td style="text-align:right;">ext</td><td style="text-align:right;">extension to be used for dest files.</td></tr></tbody></table><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><p><a href="http://dev.nodeca.com" target="_blank" rel="noreferrer">link text</a></p><p><a href="http://nodeca.github.io/pica/demo/" title="title text!" target="_blank" rel="noreferrer">link with title</a></p><p>Autoconverted link <a href="https://github.com/nodeca/pica" target="_blank" rel="noreferrer">https://github.com/nodeca/pica</a> (enable linkify to see)</p><h2 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h2><p><img src="https://octodex.github.com/images/minion.png" alt="Minion"><img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat"></p><p>Like links, Images also have a footnote style syntax</p><p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat"></p><p>With a reference later in the document defining the URL location:</p><h2 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;Plugins&quot;">​</a></h2><p>The killer feature of <code>markdown-it</code> is very effective support of <a href="https://www.npmjs.org/browse/keyword/markdown-it-plugin" target="_blank" rel="noreferrer">syntax plugins</a>.</p><h3 id="emojies" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-emoji" target="_blank" rel="noreferrer">Emojies</a> <a class="header-anchor" href="#emojies" aria-label="Permalink to &quot;[Emojies](https://github.com/markdown-it/markdown-it-emoji)&quot;">​</a></h3><blockquote><p>Classic markup: 😉 :crush: 😢 :tear: 😆 😋</p><p>Shortcuts (emoticons): 😃 😦 😎 😉</p></blockquote><p>see <a href="https://github.com/markdown-it/markdown-it-emoji#change-output" target="_blank" rel="noreferrer">how to change output</a> with twemoji.</p><h3 id="subscript-superscript" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-sub" target="_blank" rel="noreferrer">Subscript</a> / <a href="https://github.com/markdown-it/markdown-it-sup" target="_blank" rel="noreferrer">Superscript</a> <a class="header-anchor" href="#subscript-superscript" aria-label="Permalink to &quot;[Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)&quot;">​</a></h3><ul><li>19^th^</li><li>H~2~O</li></ul><h3 id="ins" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-ins" target="_blank" rel="noreferrer">&lt;ins&gt;</a> <a class="header-anchor" href="#ins" aria-label="Permalink to &quot;[\\&lt;ins&gt;](https://github.com/markdown-it/markdown-it-ins)&quot;">​</a></h3><p>++Inserted text++</p><h3 id="mark" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-mark" target="_blank" rel="noreferrer">&lt;mark&gt;</a> <a class="header-anchor" href="#mark" aria-label="Permalink to &quot;[\\&lt;mark&gt;](https://github.com/markdown-it/markdown-it-mark)&quot;">​</a></h3><p>==Marked text==</p><h3 id="footnotes" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-footnote" target="_blank" rel="noreferrer">Footnotes</a> <a class="header-anchor" href="#footnotes" aria-label="Permalink to &quot;[Footnotes](https://github.com/markdown-it/markdown-it-footnote)&quot;">​</a></h3><p>Footnote 1 link[^first].</p><p>Footnote 2 link[^second].</p><p>Inline footnote^[Text of inline footnote] definition.</p><p>Duplicated footnote reference[^second].</p><p>[^first]: Footnote <strong>can have markup</strong></p><pre><code>and multiple paragraphs.
</code></pre><p>[^second]: Footnote text.</p><h3 id="definition-lists" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-deflist" target="_blank" rel="noreferrer">Definition lists</a> <a class="header-anchor" href="#definition-lists" aria-label="Permalink to &quot;[Definition lists](https://github.com/markdown-it/markdown-it-deflist)&quot;">​</a></h3><p>Term 1</p><p>: Definition 1 with lazy continuation.</p><p>Term 2 with <em>inline markup</em></p><p>: Definition 2</p><pre><code>    { some code, part of Definition 2 }

Third paragraph of definition 2.
</code></pre><p><em>Compact style:</em></p><p>Term 1 ~ Definition 1</p><p>Term 2 ~ Definition 2a ~ Definition 2b</p><h3 id="abbreviations" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-abbr" target="_blank" rel="noreferrer">Abbreviations</a> <a class="header-anchor" href="#abbreviations" aria-label="Permalink to &quot;[Abbreviations](https://github.com/markdown-it/markdown-it-abbr)&quot;">​</a></h3><p>This is HTML abbreviation example.</p><p>It converts &quot;HTML&quot;, but keep intact partial entries like &quot;xxxHTMLyyy&quot; and so on.</p><p>*[HTML]: Hyper Text Markup Language</p><h3 id="custom-containers" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-container" target="_blank" rel="noreferrer">Custom containers</a> <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;[Custom containers](https://github.com/markdown-it/markdown-it-container)&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><em>here be dragons</em></p></div>`,86),n=[r];function s(l,p,h,d,c,m){return a(),e("div",null,n)}const g=t(i,[["render",s]]);export{b as __pageData,g as default};
