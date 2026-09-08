var root = am5.Root.new("chartdiv");

root.setThemes([am5themes_Animated.new(root)]);

var chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    endAngle: 270,
    layout: root.verticalLayout,
    innerRadius: am5.percent(80),
  })
);

var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
    endAngle: 270,
  })
);

series.set(
  "colors",
  am5.ColorSet.new(root, {
    colors: [
      am5.color(0x14467b),
      am5.color(0x2490eb),
      am5.color(0xffd704),
      am5.color(0xf28f6b),
      am5.color(0xa95a52),
      am5.color(0xe35b5d),
      am5.color(0xffa446),
    ],
  })
);

var gradient = am5.RadialGradient.new(root, {
  stops: [{ color: am5.color(0x000000) }, { color: am5.color(0x000000) }, {}],
});

series.slices.template.setAll({
  fillGradient: gradient,
  strokeWidth: 2,
  stroke: am5.color(0xffffff),
  cornerRadius: 10,
  shadowOpacity: 0.1,
  shadowOffsetX: 2,
  shadowOffsetY: 2,
  shadowColor: am5.color(0x000000),
  fillPattern: am5.GrainPattern.new(root, {
    maxOpacity: 0.2,
    density: 0.5,
    colors: [am5.color(0x000000)],
  }),
});

series.slices.template.states.create("hover", {
  shadowOpacity: 1,
  shadowBlur: 10,
});

series.ticks.template.setAll({
  strokeOpacity: 0.4,
  strokeDasharray: [2, 2],
});

series.states.create("hidden", {
  endAngle: -90,
});

series.data.setAll([
  {
    category: "الإسعافات الأولية",
    value: 500,
  },
  {
    category: "التبرع بالأدوية",
    value: 300,
  },
  {
    category: "التبرع بالدم",
    value: 200,
  },
]);

var legend = chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.percent(50),
    x: am5.percent(50),
    marginTop: 15,
    marginBottom: 15,
  })
);
legend.markerRectangles.template.adapters.add("fillGradient", function () {
  return undefined;
});
legend.data.setAll(series.dataItems);

series.appear(1000, 100);
