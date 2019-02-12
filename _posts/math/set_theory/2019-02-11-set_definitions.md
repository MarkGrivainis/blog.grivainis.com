---
layout: post
title:  "Set Theory Definitions"
date:   2019-02-11 00:05:00 +0000
categories: [math, set-theory] 
---


$$ A \cup B = \{x: x \in A \text{ or } x \in B\} $$

<canvas id="union" width="200" height="100" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>


<script src='/assets/js/plots/plotter.js'></script>

<script>
new Plot("union", {
	objects: [
		{
			'type': 'disk',
			'radius': 1,
			'fill': 'red',
			'x': 1,
			'y': 1
		}
	]
</script>
