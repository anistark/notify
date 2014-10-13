if(window.location.href.indexOf("BLR") > -1) {
	$('#f_content').after('<div id="created_div" style="background: none repeat scroll 0% 0% #3F3F3F; border-top: 0px none; background: none repeat scroll 0px 0px #FFF; border-color: #385DAB #CCC #CCC; border-top-color: #385DAB; border-right-color-value: rgb(204, 204, 204); border-bottom-color: #CCC; border-left-color-value: rgb(204, 204, 204);border-left-color-ltr-source: physical; border-left-color-rtl-source: physical; border-right-color-ltr-source: physical; border-right-color-rtl-source: physical; border-style: solid; border-top-style: solid; border-right-style-value: solid; border-bottom-style: solid; border-left-style-value: solid; border-left-style-ltr-source: physical; border-left-style-rtl-source: physical; border-right-style-ltr-source: physical; border-right-style-rtl-source: physical; border-width: 3px 1px 1px; border-top-width: 3px; border-right-width-value: 1px; border-bottom-width: 1px; border-left-width-value: 1px; border-left-width-ltr-source: physical; border-left-width-rtl-source: physical; border-right-width-ltr-source: physical; border-right-width-rtl-source: physical; box-shadow: 0px 0px 2px 2px #C4C4C4; margin: 10px auto; margin-top: 10px; margin-right-value: auto; margin-bottom: 70px; margin-left-value: auto; margin-left-ltr-source: physical; margin-left-rtl-source: physical; margin-right-ltr-source: physical; margin-right-rtl-source: physical; padding: 0px; padding-top: 10px; padding-right-value: 0px; padding-bottom: 10px; padding-left-value: 0px; padding-left-ltr-source: physical; padding-left-rtl-source: physical; padding-right-ltr-source: physical; padding-right-rtl-source: physical; text-align: center; position: fixed; bottom: 0px; width: 949px;"><span class="fphBanner_sectors">Cost of taxi troubles you? Book a cab now on the go </span><a id="bookbtn" class="btn btn_g" style="font-size: 15px;">Book now</a></div>');


	nosAdults = document.getElementById('noOfAdlts').value;
	nosChilds = document.getElementById('noOfChd').value;
	nosInfants = document.getElementById('noOfInfnt').value;
	nos= parseInt(nosInfants)+parseInt(nosChilds)+parseInt(nosAdults);
	cityfrom = document.getElementById('fromCity').value;
	cityto = document.getElementById('toCity').value;
	datefrom = document.getElementById('from').value;
	dateto = document.getElementById('to').value;

	rsdata = 'http://localhost/~Anirudha/notify/data/display.php?nos=' + nos + '&cityfrom=' + cityfrom + '&cityto=' + cityto + '&datefrom=' + datefrom + '&dateto=' + dateto;

	document.getElementById('bookbtn').href = rsdata;
}
