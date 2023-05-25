/*
    Micah Wagner 2020
    epitheus.com
    cdn.epitheus.com/epichart.js
    documentation:
    cdn.epitheus.com/epichart_doc.html
*/

class epiChart {
    constructor (target, chart_name){
        this.target = target;
        this.chart_name = chart_name;
        //this.data_source = data_source;
    }

    spark(colour, data_source){
        var c = document.getElementById(this.target);
        var ctx = c.getContext("2d");
        var width = document.getElementById(this.target).offsetWidth;
        var height = document.getElementById(this.target).offsetHeight;
        

        function ratio(in_question, set, viewport){
            var largest = 0;
            for(var i = 0; i < set.length; i++){
                if(set[i] > largest){
                    largest = set[i];
                }
            }
            var formula = viewport / largest;
            var value = in_question * formula;
            return value;
        }

        function plotLineGraph(source){
            var width_interval = width / source.length;
            var x_loc = 0;
            var y_loc = height - ratio(source[0], source, height);

            for(var i = 1; i < source.length; i++){
                ctx.beginPath();
                ctx.moveTo(x_loc, y_loc);
                ctx.lineTo(x_loc + width_interval, height - ratio(source[i], source, height));
                ctx.lineWidth = 3;
                ctx.strokeStyle = colour;
                ctx.stroke();
                x_loc += width_interval;
                y_loc = height - ratio(source[i], source, height);
            }
        }
        plotLineGraph(data_source);
    }

    dough(data_source){
        var c = document.getElementById(this.target);
        var ctx = c.getContext("2d");
        var width = (document.getElementById(this.target).offsetWidth) / 2;
        var height = (document.getElementById(this.target).offsetHeight) / 2;
        var total = 0;
        var cat_percents = [];
        var colors = [];
        var rad_vals = [];

        function getTotal(source){
            for(var i = 0; i < source.length; i++){
                total += source[i][1];
            }
        }
        function deg2rad(degrees){
            return Math.PI * degrees/180;
        }

        function makeColor(){
            var string_bin = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
            var color = "#";
            for(var i = 0; i < 6; i++){
                color += string_bin[Math.floor(Math.random() * string_bin.length)];
            }
            return color;
        }

        function getPercents(source){
            var one_deg = total / 360;
            console.log("one deg - " + one_deg);
            var percent_vals_in_degrees = [];
            for(var i = 0; i < source.length; i++){
                var percent = (source[i][1] / one_deg);
                percent_vals_in_degrees.push(percent);
            }
            return percent_vals_in_degrees;
        }
        
        function fixPercents(source){
            for(var i = 0; i < source.length; i++){
                rad_vals.push(deg2rad(source[i]));
            }
        }
        
        function findRadius(elemW, elemH){
            if(elemW >= elemH){
                return elemW / 2;
            }else{
                return elemH / 2;
            }
        }
        
        getTotal(data_source);
        fixPercents(getPercents(data_source));

        function plotDough(source, orig_source){
            var spot = 0;
            for(var i = 0; i < source.length; i++){
                var color = makeColor();
                colors.push(color);
                ctx.beginPath();
                ctx.arc(width, height, findRadius(width,height), spot, spot + source[i]);
                console.log(source[i])
                spot += source[i];
                ctx.strokeStyle = color;
                ctx.lineWidth = 40;
                ctx.stroke();
                if(i == source.length - 1){
                    
                    c.insertAdjacentHTML('beforebegin', `<small><span class="badge shadow-sm m-1" style="background-color: ${colors[i]}">${orig_source[i][0]}</span></small><br />`);
                }else{
                    c.insertAdjacentHTML('beforebegin', `<small><span class="badge shadow-sm m-1" style="background-color: ${colors[i]}">${orig_source[i][0]}</span></small>`);
                }
            }    
        }
        plotDough(rad_vals, data_source);
    }
}