// DOM has loaded
$(function ()
{
  // Load new content into page
  function loadContent(url)
  {
    $("#content").load(url + " #container").hide().fadeIn("slow");
  }

  // Click handler
  $("nav a").on("click", function (e)
  {
    // Stop link loading new page
    e.preventDefault();

    // Get href attribute of link
    var href = this.href;

    // Store link in jQuery object
    var $this = $(this);

    // Remove current from links
    $("a").removeClass("current");

    // Update current Link
    $this.addClass("current");

    // Call function: loads content
    loadContent(href);

    // Update History
    history.pushState("", $this.text, href);
  });
   // handle back/foward buttons
   window.onpopstate = function()
   {
     // Get the file path
     var path = location.pathname;

     // Call function to load page
     loadContent(path);
     // Variable to store path of url in substring method using lastIndexOf method
     var page = path.substring(location.pathname.lastIndexOf("/") + 1);

     // Remove current from links
     $("a").removeClass("current");
     // update current
     $("[href='" + page + "']").addClass("current");
   };
});
