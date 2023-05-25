    epichart.js documentation lol

epichart.js documentation

E-Z to use, super basic.

<script src="http://cdn.epitheus.com/epichart.js"></script>

* * *

.dough()

takes a 2 dimensional array with 0 being string name of category and 1 being the value associated with that category  

colors are generated at random, might add a better system later

labels require bootstrap though

        
        var dough\_data = \[\["Example Category 1", 35\], \["Example Category 2", 78\], \["Example Category 3", 137\]\];
        var dough = new epiChart("myCanvas", "name").dough(dough\_data);

* * *

.spark() small

* * *

Sparkline chart. Takes 1D array with just numerical values. This chart assumes  
that the x axis values are consistent values intervals, so the x axis is divided by  
the number of items in the array

  

        var line\_data = \[100, 200, 100, 300, 100, 700, 200, 600, 500, 400, 280, 150, 280, 280, 280\];
          var newSpark = new epiChart("myCanvas2", "chart name").spark("#666666", line\_data);
        
      

.spark() large

* * *

Same usage, just showing it at a larger resolution and different color

var dough\_data = \[\["Example Category 1", 35\], \["Example Category 2", 78\], \["Example Category 3", 137\]\]; var dough = new epiChart("myCanvas", "name").dough(dough\_data); var line\_data = \[100, 200, 100, 300, 100, 700, 200, 600, 500, 400, 280, 150, 280, 280, 280\]; var newSpark = new epiChart("myCanvas2", "chart name").spark("#666666", line\_data); var newSparkBig = new epiChart("myCanvas3", "chart name").spark("#9127e3", line\_data); //var line\_date = \[200,350,190,370,295,600,400\]; //const test = new epiChart("myCanvas","balls",test\_data).dough();