<section class="toolkits hide" id="toolkits">

	<div id="toolBar" class="toolBar">
		<!-- <input id="groupMode" type="checkbox">Group Colors -->

		<!-- <input id="changeScale" type="range" min="5" max="50" value="10" onchange="checkVal()"> -->
	 	<div class="icon" id="zoomOut" onclick="scaleVal(0.9)"><img src="icon/zoomOut.png" alt=""></div>
	 	<div class="icon" id="zoomIn" onclick="scaleVal(1.1)"><img src="icon/zoomIn.png" alt=""></div>
		 <div class="icon undoBtn" onclick="undo()"><img src="icon/undo.png" alt=""></div>
		 <form action="" method="post" id="save-work-form">
		<button id="save-btn" class="temp" >Save Work</button>
		<input type="text"  name="save-work" class="temp" id="save-work" value="">
		</form>

		

		<div class="icon" id="palettes">
			<div class="palette">
				<p>#FFFFFF</p>
				<p>#720066</p>
				<p>#ffba40</p>
				<p>#86fff7</p>
			</div>
			<div class="palette">
				<p>#F3E9DC</p>
				<p>#C08552</p>
				<p>#5B1300</p>
				<p>#E55700</p>
			</div>
			<div class="palette">
				<p>#7CFFCB</p>
				<p>#00D8D8</p>
				<p>#092D3A</p>
				<p>#CEFFF4</p>
			</div>
			<div class="palette">
				<p>#FF1180</p>
				<p>#FF5BEE</p>
				<p>#AC00C6</p>
				<p>#7F00FF</p>
			</div>
			<div class="palette">
				<p>#F15025</p>
				<p>#52E552</p>
				<p>#FFDC00</p>
				<p>#2085EA</p>
			</div>
			<div class="palette">
				<p>#FFE500</p>
				<p>#1E4413</p>
				<p>#13C425</p>
				<p>#A2EA62</p>
			</div>
		</div>
	</div>

	<div id="swatches">
		<div class="swatch"></div>
		<div class="swatch "></div>
		<div class="swatch "></div>
		<div class="swatch " id="activeSwatch"></div>
		<div class="icon" id="seeColors" onclick="showRainbow()"><img src="icon/seeColors.png" alt=""></div>
	</div>

		
	<div class="colorPicker" id="colorPicker">
		<div id="pickerButton"></div>
	</div>



</section>
