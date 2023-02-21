// Website starts with Life page active while the other two pages are hidden //
document.getElementById('WorkContent').style.display = 'none';
	document.getElementById('StyleContent').style.display = 'none';
	document.getElementById('Life').className = 'highlight';

	function hidePanels(){     // Hides panels that are not the active one //
		document.getElementById('WorkContent').style.display = 'none';
		document.getElementById('StyleContent').style.display = 'none';
		document.getElementById('LifeContent').style.display = 'none';
		document.getElementById('Work').className = 'accordionPanelTab';
		document.getElementById('Style').className = 'accordionPanelTab';
		document.getElementById('Life').className = 'accordionPanelTab';
	}
	function showWork(){ // Highlights the Work panel when it is active //
		hidePanels();
		document.getElementById('WorkContent').style.display = 'block';
		document.getElementById('Work').className = 'highlight';
	}
	function showStyle(){ // Highlights the Style panel when it is active //
		hidePanels();
		document.getElementById('StyleContent').style.display = 'block';
		document.getElementById('Style').className = 'highlight';
	}
	function showLife(){ // Highlights the Life panel when it is active //
		hidePanels();
		document.getElementById('LifeContent').style.display = 'block';
		document.getElementById('Life').className = 'highlight';
	}