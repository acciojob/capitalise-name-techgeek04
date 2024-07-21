const inputElement = document.getElementById('fname');
inputElement.addEventListener('blur', function() {
	
    this.value = this.value.toUpperCase();
});
