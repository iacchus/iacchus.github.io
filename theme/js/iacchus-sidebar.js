/*iacchusSidebarHtml = `
<div id="iacchus-sidebar" class="iacchus-sidebar-closed">
  <div id="iacchus-sidebar-button">
    <span id="iacchus-sidebar-label">Comments</span>
  </div>
  <div id="iacchus-sidebar-content">
    <h1 id="iacchus-sidebar-post-title">
      Comments on "Post"
    </h1>
    <div id="disqus_thread"></div>
  </div>
</div>
`.trim()*/

/*iacchusSidebarHtml = `
<div id="iacchus-sidebar" class="iacchus-sidebar-closed">
  <div id="iacchus-sidebar-button">
    <span id="iacchus-sidebar-label">Comments</span>
  </div>
  <div id="iacchus-sidebar-content">
    <h1 id="iacchus-sidebar-post-title">
      Comments on "Post"
    </h1>
    <script>
    var idcomments_acct = 'fe704d43ba2a55e49fa00267d76703ef';
    var idcomments_post_id;
    var idcomments_post_url;
    </script>
    <script type="text/javascript" src="https://www.intensedebate.com/js/genericLinkWrapperV2.js"></script>
  </div>
</div>
`.trim()*/
$(document).ready(function(){
  //$('body').append(iacchusSidebarHtml);
  $("#iacchus-sidebar-button").click(function(){
    $("#iacchus-sidebar").toggleClass('iacchus-sidebar-closed');
  })
});
