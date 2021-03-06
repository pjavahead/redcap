/**
 * @brief Set of functions that convert google flash-based graphs to images
 *
 * @file googleGraphUtilties.js
 * $Revision: 91 $
 * $Date:: 2012-03-03 16:47:53 #$: Date of last commit
 * $URL: https://srcvault.icts.uiowa.edu/repos/REDCap/REDCap/trunk/scatter/js/googleGraphUtilities.js $
 * 
 * @author Riccardo Govoni
 * @see http://www.battlehorse.net/page/topics/charts/save_google_charts_as_image.html
 */


/**
 * @brief Used by functions saveAsImg and toImage
 * 
 * @param  charContainer Name of the <div> containing the graph
 * @retval imgData      The PNG image file data
 */
function getImgData(chartContainer) {
  var chartArea = chartContainer.getElementsByTagName('iframe')[0].
    contentDocument.getElementById('chartArea');
  var svg = chartArea.innerHTML;
  var doc = chartContainer.ownerDocument;
  var canvas = doc.createElement('canvas');
  canvas.setAttribute('width', chartArea.offsetWidth);
  canvas.setAttribute('height', chartArea.offsetHeight);
  
  
  canvas.setAttribute(
      'style',
      'position: absolute; ' +
      'top: ' + (-chartArea.offsetHeight * 2) + 'px;' +
      'left: ' + (-chartArea.offsetWidth * 2) + 'px;');
  doc.body.appendChild(canvas);
  canvg(canvas, svg);
  var imgData = canvas.toDataURL("image/png");
  canvas.parentNode.removeChild(canvas);
  return imgData;
}


/**
 * @brief Saves a google graph as a PNG download
 * 
 * @param  charContainer Name of the <div> containing the graph
 */
function saveAsImg(chartContainer) {
  var imgData = getImgData(chartContainer);
  
  // Replacing the mime-type will force the browser to trigger a download
  // rather than displaying the image in the browser window.
  window.location = imgData.replace("image/png", "image/octet-stream");
}


/**
 * @brief Display google graph as an image inside a <div>
 * 
 * @param  charContainer Name of the <div> containing the original graph
 * @param  imgContainer  Name of the <div> containing the destination graph
 */
function toImg(chartContainer, imgContainer) { 
  var doc = chartContainer.ownerDocument;
  var img = doc.createElement('img');
  img.src = getImgData(chartContainer);
  
  while (imgContainer.firstChild) {
    imgContainer.removeChild(imgContainer.firstChild);
  }
  imgContainer.appendChild(img);
}
