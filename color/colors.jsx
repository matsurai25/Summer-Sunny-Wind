// eval(comp("_global").layer("exp").text.sourceText.value)
// randomColor(time,3)

function color16(rgb){
  c = 1/255;
  red =parseInt(rgb.substring(0, 2), 16);
  green =parseInt(rgb.substring(2, 4), 16)
  blue =parseInt(rgb.substring(4, 6), 16)
  return [c*red,c*green,c*blue,1];
}

function countColors(obj){
    var colorsCount = 0;
    for(var j in obj){
        colorsCount++;
    }
    return colorsCount
}

function getColorsKey(obj){
    var colorsKey = [];
    for(var j in obj){
        colorsKey.push(j)
    }
    return colorsKey
}

function randomColor(time,slowly){
    if(typeof(slowly) == "undefined") {
        slowly = 1;
    }
    var t = timeToFrames(time, fps = 1.0 / thisComp.frameDuration, isDuration = false)
    var keys = getColorsKey(colors);
    var size = countColors(colors);
    var num = Math.floor((t / slowly) % size);
    return colors[keys[num]]
}

var colors = {};
colors.blue = color16("205cde");
colors.darkblue = color16("103896");
colors.green = color16("1dbdcd");
colors.pink = color16("e22d6e");
colors.yellow = color16("FFE900");
colors.orange = color16("FFA541");
colors.gray = color16("363636");
