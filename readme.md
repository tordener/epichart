
# epichart.js documentation

## E-Z to use, super basic. Will have more chart types and parameters in the future
- Changing the size of the chart is done by changing the height/width of the parent canvas element


# Doughnut

```javascript
epiChart('target_div', 'chart_name').dough('doughnut_data')
```


- takes a 2 dimensional array with 0 being string name of category, and 1 being the value associated with that category  

- colors are generated at random, might add a better system later

- labels require bootstrap though
# Example Usage

```javascript
var dough_data = [["Example Category 1", 35], ["Example Category 2", 78], ["Example Category 3", 137]];
var dough = new epiChart("myCanvas", "name").dough(dough_data);
```

![dough](https://github.com/tordener/epichart/assets/5913474/08bb5924-4bb5-49bb-8952-465418dd372e)
        


# Line Chart (sparkline)
```javascript
epiChart('target_div', 'chart_name').spark('color_hex_code', 'chart_data')
```


* * *

- Takes 1D array with just numerical values.
- This chart assumes that the x axis values are a consistent set interval, so the x axis is divided by the number of items in the array

```javascript
var line_data = [100, 200, 100, 300, 100, 700, 200, 600, 500, 400, 280, 150, 280, 280, 280];
var newSpark = new epiChart("myCanvas2", "chart name").spark("#666666", line_data);
```

![spark](https://github.com/tordener/epichart/assets/5913474/eb3b7f83-957a-4cfa-94ea-b51e72cb1458)
