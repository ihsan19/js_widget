(function() {

  // Localize jQuery variable
  var jQuery;

  /******** Load jQuery if not present *********/
  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
      "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          scriptLoadHandler();
        }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  } else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
  }

  /******** Called once jQuery has loaded ******/
  function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main();
  }

  /******** Our main function ********/
  function main() {
    jQuery(document).ready(function($) {
      show_contact_form();
      toggle_hide();
      toggle_show();
      
    });    
  }
  
  function show_contact_form(){

    var html_data = '<form method="post" onsubmit="testing()" id="new_contact" class="new_contact" action="/contacts/create" data-remote="true" accept-charset="UTF-8"><div style="margin:0;padding:0;display:inline"><input type="hidden" value="✓" name="utf8"><input type="hidden" value="On8R+kB48THslWxAykf7CJrz3ux0roQ7t23BpDNAWYI=" name="authenticity_token"></div>'
    html_data += '<script>'
    html_data += 'function testing() {'
    html_data += '$("#contact").hide();'
    //    html_data += '$("#contact_name").val("");'
    //    html_data += '$("#contact_email").val("");'
    html_data += '$("#slide-toggle").show();'
    //          $('#view_item').html(data);
    html_data += 'return false;'
    html_data += '}'
    html_data += '</script>'
    html_data += '<div id="hide-toggle" style="cursor:pointer; float:right">X</div>'
    html_data += '<div class="field">'
    html_data += '<input type="text" size="15" placeholder="Your Name..." name="contact[name]" id="contact_name">'
    html_data += '</div>'
    html_data += '<div class="field">'
    html_data += '<input type="text" size="15" placeholder="Your Email Address..." name="contact[email]" id="contact_email">'
    html_data += '</div>'
    html_data += '<div class="field">'
    html_data += '<textarea rows="5" placeholder="Your Question..." name="contact[message]" id="contact_message" cols="25"></textarea>'
    html_data += '</div>'
    html_data += '<div class="actions">'
    html_data += '<input type="submit" value="Contact Us" name="commit" id="submit_form_btn">'
    html_data += '</div>'
    html_data += '</form>'
    $(html_data).appendTo("#contact")
  }


  function toggle_hide(){
    $("#slide-toggle").click(function(){
      $("#contact").show();
      $("#contact").animate({
        bottom: "0px"
      }, "slow")
      $("#slide-toggle").hide()
    })
  }

  function toggle_show(){
    $("#hide-toggle").click(function(){     
      $("#contact").animate({
        bottom: "-255px"
      }, "slow")
      $("#contact").hide();
      $("#slide-toggle").show()

    })
  }
  

})(); // We call our anonymous function immediately