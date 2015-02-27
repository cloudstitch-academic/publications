/*
 * Treesheet
 * ---------
 * 
 * This file enables your Cloudstitch app to be injected into 
 * a page as a widget. To do so, simply include cloudstitch.js 
 * in the web page HEAD: 
 * 
 *   <script src="http://cloudstitch.io/release/cloudstitch.js"></script>
 * 
 * And then invoke the widget like this:
 *
 *   <div widget="academic/publications"></div>
 *
 */

@html academic-publications //apps.cloudstitch.io/academic/publications/index.html;
@css relative(publications.css);
@js relative(publications.js);
@gsheet sheet http://cloudstitch.io/academic/publications/datasource/Pubs;
body|*[widget="academic/publications"] :graft academic-publications|#pub-widget;