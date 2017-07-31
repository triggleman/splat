$(document).ready(function() {
  console.log('js connected!');

  var divCell = $(".col");
  var player = 1;

  divCell.on('click', function() {
    console.log('div was clicked');

    if ($(this).hasClass === ('red') || $(this).hasClass === ('yellow')) {} else {
      //if player = 1, add class to that div, then flips to the other player to make a new div of "o"
      if (player === 1) {
        // console.log(this)
        $(this).addClass('red');
        var splat = $('<div class="splatRed"></div>');
        $('.red').append(splat);
        player = 2;
      } else {
        // console.log(this)
        $(this).addClass('yellow');
        var splat = $('<div class="splatYellow"></div>')
        $('.yellow').append(splat);
        player = 1;
      }
    };

    var checkifWon = function(sym) {
      if ($('.sq1').hasClass(sym) && $('.sq2').hasClass(sym) && $('.sq3').hasClass(sym) && $('.sq4').hasClass(sym)) {
        return true;
      } else if ($('.sq2').hasClass(sym) && $('.sq3').hasClass(sym) && $('.sq4').hasClass(sym) && $('.sq5').hasClass(sym)) {
        return true;
      } else if ($('.sq3').hasClass(sym) && $('.sq4').hasClass(sym) && $('.sq5').hasClass(sym) && $('.sq6').hasClass(sym)) {
        return true;
				//row1
				//////////////////
      } else if ($('.sq7').hasClass(sym) && $('.sq8').hasClass(sym) && $('.sq9').hasClass(sym) && $('.sq10').hasClass(sym)) {
        return true;
      } else if ($('.sq8').hasClass(sym) && $('.sq9').hasClass(sym) && $('.sq10').hasClass(sym) && $('.sq11').hasClass(sym)) {
        return true;
      } else if ($('.sq9').hasClass(sym) && $('.sq10').hasClass(sym) && $('.sq11').hasClass(sym) && $('.sq12').hasClass(sym)) {
        return true;
				//row2
				///////////////////
      } else if ($('.sq13').hasClass(sym) && $('.sq14').hasClass(sym) && $('sq15').hasClass(sym) && $('.sq16').hasClass(sym)) {
        return true;
      } else if ($('.sq14').hasClass(sym) && $('.sq15').hasClass(sym) && $('.sq16').hasClass(sym) && $('.sq17').hasClass(sym)) {
        return true;
      } else if ($('.sq15').hasClass(sym) && $('.sq16').hasClass(sym) && $('.sq17').hasClass(sym) && $('.sq18').hasClass(sym)) {
        return true;
				//row3
				////////////////////
      } else if ($('.sq19').hasClass(sym) && $('.sq20').hasClass(sym) && $('.sq21').hasClass(sym) && $('.sq22').hasClass(sym)) {
        return true;
      } else if ($('.sq20').hasClass(sym) && $('.sq21').hasClass(sym) && $('.sq22').hasClass(sym) && $('.sq23').hasClass(sym)) {
        return true;
      } else if ($('.sq21').hasClass(sym) && $('.sq22').hasClass(sym) && $('.sq23').hasClass(sym) && $('.sq24').hasClass(sym)) {
        return true;
				//row4
				////////////////
      } else if ($('.sq25').hasClass(sym) && $('.sq26').hasClass(sym) && $('.sq27').hasClass(sym) && $('.sq28').hasClass(sym)) {
        return true;
      } else if ($('.sq26').hasClass(sym) && $('.sq27').hasClass(sym) && $('.sq28').hasClass(sym) && $('.sq29').hasClass(sym)) {
        return true;
      } else if ($('.sq27').hasClass(sym) && $('.sq28').hasClass(sym) && $('.sq29').hasClass(sym) && $('.sq30').hasClass(sym)) {
        return true;
				//row5
				//////////////////
      } else if ($('.sq31').hasClass(sym) && $('.sq32').hasClass(sym) && $('.sq33').hasClass(sym) && $('.sq34').hasClass(sym)) {
        return true;
      } else if ($('.sq32').hasClass(sym) && $('.sq33').hasClass(sym) && $('.sq34').hasClass(sym) && $('.sq35').hasClass(sym)) {
        return true;
      } else if ($('.sq33').hasClass(sym) && $('.sq34').hasClass(sym) && $('.sq35').hasClass(sym) && $('.sq36').hasClass(sym)) {
        return true;
				//row6
				////////////////////
      } else if ($('.sq37').hasClass(sym) && $('.sq38').hasClass(sym) && $('.sq39').hasClass(sym) && $('.sq40').hasClass(sym)) {
        return true;
      } else if ($('.sq38').hasClass(sym) && $('.sq39').hasClass(sym) && $('sq40').hasClass(sym) && $('.sq41').hasClass(sym)) {
        return true;
      } else if ($('.sq39').hasClass(sym) && $('.sq40').hasClass(sym) && $('.sq41').hasClass(sym) && $('.sq42').hasClass(sym)) {
        return true;
				//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				//col1
      } else if ($('.sq1').hasClass(sym) && $('.sq7').hasClass(sym) && $('.sq13').hasClass(sym) && $('.sq19').hasClass(sym)) {
        return true;
      } else if ($('.sq7').hasClass(sym) && $('.sq13').hasClass(sym) && $('.sq19').hasClass(sym) && $('.sq25').hasClass(sym)) {
        return true;
      } else if ($('.sq13').hasClass(sym) && $('.sq19').hasClass(sym) && $('.sq25').hasClass(sym) && $('.sq31').hasClass(sym)) {
        return true;
      } else if ($('.sq19').hasClass(sym) && $('.sq25').hasClass(sym) && $('.sq31').hasClass(sym) && $('.sq37').hasClass(sym)) {
        return true;
				//////////////////
				//col2
      } else if ($('.sq2').hasClass(sym) && $('.sq8').hasClass(sym) && $('.sq14').hasClass(sym) && $('.sq20').hasClass(sym)) {
        return true;
      } else if ($('.sq8').hasClass(sym) && $('.sq14').hasClass(sym) && $('.sq20').hasClass(sym) && $('.sq26').hasClass(sym)) {
        return true;
			} else if ($('.sq14').hasClass(sym) && $('.sq20').hasClass(sym) && $('.sq26').hasClass(sym) && $('.sq32').hasClass(sym)) {
        return true;
      } else if ($('.sq20').hasClass(sym) && $('.sq26').hasClass(sym) && $('.sq32').hasClass(sym) && $('.sq38').hasClass(sym)) {
        return true;
				////////////////////
				//col3
      } else if ($('.sq3').hasClass(sym) && $('.sq9').hasClass(sym) && $('.sq15').hasClass(sym) && $('.sq21').hasClass(sym)) {
        return true;
      } else if ($('.sq9').hasClass(sym) && $('.sq15').hasClass(sym) && $('.sq21').hasClass(sym) && $('.sq27').hasClass(sym)) {
        return true;
      } else if ($('.sq15').hasClass(sym) && $('.sq21').hasClass(sym) && $('.sq27').hasClass(sym) && $('.sq33').hasClass(sym)) {
        return true;
      } else if ($('.sq21').hasClass(sym) && $('.sq27').hasClass(sym) && $('.sq33').hasClass(sym) && $('.sq39').hasClass(sym)) {
        return true;
				////////////////////
				//col4
			} else if ($('.sq4').hasClass(sym) && $('.sq10').hasClass(sym) && $('.sq16').hasClass(sym) && $('.sq22').hasClass(sym)) {
				return true;
			} else if ($('.sq10').hasClass(sym) && $('.sq16').hasClass(sym) && $('.sq22').hasClass(sym) && $('.sq28').hasClass(sym)) {
				return true;
			} else if ($('.sq16').hasClass(sym) && $('.sq22').hasClass(sym) && $('.sq28').hasClass(sym) && $('.sq34').hasClass(sym)) {
				return true;
			} else if ($('.sq22').hasClass(sym) && $('.sq28').hasClass(sym) && $('.sq34').hasClass(sym) && $('.sq40').hasClass(sym)) {
				return true;
				//////////////////////
				//col5
			} else if ($('.sq5').hasClass(sym) && $('.sq11').hasClass(sym) && $('.sq17').hasClass(sym) && $('.sq23').hasClass(sym)) {
				return true;
			} else if ($('.sq11').hasClass(sym) && $('.sq17').hasClass(sym) && $('.sq23').hasClass(sym) && $('.sq29').hasClass(sym)) {
				return true;
			} else if ($('.sq17').hasClass(sym) && $('.sq23').hasClass(sym) && $('.sq29').hasClass(sym) && $('.sq35').hasClass(sym)) {
				return true;
			} else if ($('.sq23').hasClass(sym) && $('.sq29').hasClass(sym) && $('.sq34').hasClass(sym) && $('.sq41').hasClass(sym)) {
				return true;
				///////////////////////
				//col6
			} else if ($('.sq6').hasClass(sym) && $('.sq12').hasClass(sym) && $('.sq18').hasClass(sym) && $('.sq24').hasClass(sym)) {
				return true;
			} else if ($('.sq12').hasClass(sym) && $('.sq18').hasClass(sym) && $('.sq24').hasClass(sym) && $('.sq30').hasClass(sym)) {
				return true;
			} else if ($('.sq17').hasClass(sym) && $('.sq24').hasClass(sym) && $('.sq30').hasClass(sym) && $('.sq36').hasClass(sym)) {
				return true;
			} else if ($('.sq24').hasClass(sym) && $('.sq30').hasClass(sym) && $('.sq35').hasClass(sym) && $('.sq42').hasClass(sym)) {
				return true;
				/////////////////////////////////////////////////////////////////////////
			} else if ($('.sq19').hasClass(sym) && $('.sq14').hasClass(sym) && $('.sq9').hasClass(sym) && $('.sq4').hasClass(sym)) {
				return true;
				/////////
			} else if ($('.sq25').hasClass(sym) && $('.sq20').hasClass(sym) && $('.sq15').hasClass(sym) && $('.sq10').hasClass(sym)) {
				return true;
			} else if ($('.sq20').hasClass(sym) && $('.sq15').hasClass(sym) && $('.sq10').hasClass(sym) && $('.sq5').hasClass(sym)) {
				return true;
				/////////
			} else if ($('.sq31').hasClass(sym) && $('.sq26').hasClass(sym) && $('.sq21').hasClass(sym) && $('.sq16').hasClass(sym)) {
				return true;
			} else if ($('.sq26').hasClass(sym) && $('.sq21').hasClass(sym) && $('.sq16').hasClass(sym) && $('.sq11').hasClass(sym)) {
				return true;
			} else if ($('.sq21').hasClass(sym) && $('.sq16').hasClass(sym) && $('.sq11').hasClass(sym) && $('.sq6').hasClass(sym)) {
				return true;
				///////////
			} else if ($('.sq38').hasClass(sym) && $('.sq33').hasClass(sym) && $('.sq28').hasClass(sym) && $('.sq23').hasClass(sym)) {
				return true;
			} else if ($('.sq33').hasClass(sym) && $('.sq28').hasClass(sym) && $('.sq23').hasClass(sym) && $('.sq18').hasClass(sym)) {
				return true;
				////////////
			} else if ($('.sq39').hasClass(sym) && $('.sq34').hasClass(sym) && $('.sq29').hasClass(sym) && $('.sq24').hasClass(sym)) {
				return true;
				////////////
			} else if ($('.sq24').hasClass(sym) && $('.sq17').hasClass(sym) && $('.sq10').hasClass(sym) && $('.sq3').hasClass(sym)) {
				return true;
				////////
			} else if ($('.sq30').hasClass(sym) && $('.sq23').hasClass(sym) && $('.sq16').hasClass(sym) && $('.sq9').hasClass(sym)) {
				return true;
			} else if ($('.sq23').hasClass(sym) && $('.sq16').hasClass(sym) && $('.sq9').hasClass(sym) && $('.sq2').hasClass(sym)) {
				return true;
				//////////////
			} else if ($('.sq36').hasClass(sym) && $('.sq29').hasClass(sym) && $('.sq22').hasClass(sym) && $('.sq15').hasClass(sym)) {
				return true;
			} else if ($('.sq29').hasClass(sym) && $('.sq22').hasClass(sym) && $('.sq15').hasClass(sym) && $('.sq8').hasClass(sym)) {
				return true;
			} else if ($('.sq22').hasClass(sym) && $('.sq15').hasClass(sym) && $('.sq8').hasClass(sym) && $('.sq1').hasClass(sym)) {
				return true;
				/////////////////
			} else if ($('.sq42').hasClass(sym) && $('.sq35').hasClass(sym) && $('.sq28').hasClass(sym) && $('.sq21').hasClass(sym)) {
				return true;
			} else if ($('.sq35').hasClass(sym) && $('.sq28').hasClass(sym) && $('.sq21').hasClass(sym) && $('.sq14').hasClass(sym)) {
				return true;
			} else if ($('.sq28').hasClass(sym) && $('.sq21').hasClass(sym) && $('.sq14').hasClass(sym) && $('.sq7').hasClass(sym)) {
				return true;
				//////////////
			} else if ($('.sq41').hasClass(sym) && $('.sq34').hasClass(sym) && $('.sq27').hasClass(sym) && $('.sq20').hasClass(sym)) {
				return true;
			} else if ($('.sq34').hasClass(sym) && $('.sq27').hasClass(sym) && $('.sq20').hasClass(sym) && $('.sq13').hasClass(sym)) {
				return true;
				/////////////
			} else if ($('.sq40').hasClass(sym) && $('.sq33').hasClass(sym) && $('.sq26').hasClass(sym) && $('.sq19').hasClass(sym)) {
				return true;
        return false;
      }
    }

    var won = function() {
      if (checkifWon('red') === true) {
        alert("Player 1 has won!!")
      } else if (checkifWon('yellow') === true) {
        alert("Player 2 has won!!");
      }
    };
    won();

  })

});
