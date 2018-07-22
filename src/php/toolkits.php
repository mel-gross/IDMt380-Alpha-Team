
<div id="fills" class="menu">
	<div id="toolBar">
		<?php echo "<span id='bucketTool' ";  include 'icon/paint-bucket.svg'; echo "</span>"; ?>
		<?php echo "<span id='eraserTool' "; include 'icon/eraser.svg'; echo "</span>"; ?>
		<?php echo "<span id='markerTool' "; include 'icon/highlighter.svg'; echo "</span>"; ?>
	</div>
	<div id="colorPicker">
		<div id="pickerButton"></div>
		BRUSH WIDTH: <input id="brushWidth" type="range" min="10" max="200" value="100" onchange="checkVal()">
	</div>
<!-- 	<div id="swatches">
		<div class="swatch" id="activeSwatch"></div>
		<div class="swatch "></div>
		<div class="swatch "></div>
		<div class="swatch "></div>
		<div class="swatch "></div>
	</div>

 -->
</div>

