document.getElementById("tiktok-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the TikTok video link from the form
    var tiktokLink = document.getElementById("tiktok-link").value;

  
    // Send an AJAX request to the server-side script
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/download");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.responseType = "arraybuffer";
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Create a Blob from the video file
        var blob = new Blob([xhr.response], { type: "video/mp4" });
  
        // Create a URL for the video file
        var url = URL.createObjectURL(blob);
  
        // Create a link to the video file
        var a = document.createElement("a");
        a.style = "display: none";
        a.href = url;
        a.download = "tiktok.mp4";
  
        // Add the link to the page
        document.body.appendChild(a);
  
        // Click the link to initiate the download
        a.click();
  
        // Remove the link from the page
        document.body.removeChild(a);
  
        // Display a message indicating that the download was successful
        document.getElementById("download-status").innerHTML = "Download successful!";
      } else {
        // Display a message indicating that the download failed
        document.getElementById("download-status").innerHTML = "Download failed. Please try again.";
      }
    };
    xhr.send("tiktokLink=" + tiktokLink);
  });
  


  