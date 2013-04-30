(function($){
  $.fn.itemlist = function(options){
		var defaults = {
			
		}
		
		var allopts = $.extend(defaults,options);
		
		var wrapper = document.createElement('div');
		var itemslist = document.createElement('div');
		var alphabetcontainer = document.createElement('div');
		$(wrapper).append(itemslist).append(alphabetcontainer).addClass("ui-items-wrapper");
		this.append(wrapper);
		var firstChar = "";
     	var chararray = [];
     	console.log(allopts);
	    for(var i=0;i< allopts.arrayname.length;i++){
		
			firstChar = allopts.arrayname[i].charAt(0).toLowerCase();
			
			
			if($.inArray(firstChar,chararray) != -1){
				$("#"+firstChar).next().append('<div class="itemname"><span class="itname">'+allopts.arrayname[i]+'</span></div>');
			}else{
				chararray.push(firstChar);
			
				$(alphabetcontainer).append('<div class="indexLetter">'+ firstChar.toUpperCase() +'</div>').addClass("alphabetscontainer");
			 	$(itemslist).append('<div class="namesWrapper '+ firstChar +'"><div id="'+ firstChar +'" class="letter">'+ firstChar.toUpperCase() +'</div><div class="names"><div class="itemname"><span class="itname">'+allopts.arrayname[i]+'</span></div></div></div>').addClass("listcontainer").css("float","left");
			}
		
		
	   }

		
		
		return this;
		
		
		
	}
	
	
	
})( jQuery );
