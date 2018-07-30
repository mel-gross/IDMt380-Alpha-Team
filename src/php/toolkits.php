<section class="toolkits hide" id="toolkits">

	<div id="toolBar">
		<?php echo "<span id='bucketTool' ";  include '../icon/paint-bucket.svg'; echo "</span>"; ?>
		<?php echo "<span id='eraserTool' "; include '../icon/eraser.svg'; echo "</span>"; ?>
		<?php echo "<span id='markerTool' "; include '../icon/highlighter.svg'; echo "</span>"; ?>
	</div>

	<div id="swatches">
		<div class="swatch"></div>
		<div class="swatch "></div>
		<div class="swatch "></div>
		<div class="swatch " id="activeSwatch"></div>
	</div>

		
 	<p>Scale: </p><input id="changeScale" type="range" min="5" max="40" value="10" onchange="checkVal()">
	<div class="colorPicker" id="colorPicker">
		<div id="pickerButton"></div>
	</div>



</section>
