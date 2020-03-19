import { compose, lifecycle } from "recompose";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as R from "ramda";

am4core.useTheme(am4themes_animated);

export default compose(
  lifecycle({
    async componentDidMount() {
      const { chartName, chartData } = this.props;
      if (!R.isEmpty(chartData)) {
        let chart = am4core.create(`${chartName}`, am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar(); //add scroll bar
        chart.data = chartData;
        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "receiveDate";
        // categoryAxis.title.text = "Countries";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30; //spacing each of categoryAxis
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;

        //create Series
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;

        // valueAxis.title.text = "Litres sold (M)";
        let columnSeries = chart.series.push(new am4charts.ColumnSeries3D());
        columnSeries.sequencedInterpolation = true;
        columnSeries.name = "จำนวนผู้รับยา";

        // columnSeries.sequencedInterpolation = true;
        columnSeries.dataFields.valueY = "totalReceive";
        columnSeries.dataFields.categoryX = "receiveDate";
        columnSeries.tooltipText = "{name}: [bold] {valueY}[/]";
        columnSeries.columns.template.strokeWidth = 0;
        columnSeries.tooltip.pointerOrientation = "vertical";
        columnSeries.columns.template.column.fillOpacity = 0.8;
        let hoverState = columnSeries.columns.template.column.states.create(
          "hover"
        );
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;
        columnSeries.columns.template.adapter.add("fill", (fill, target) => {
          return chart.colors.getIndex(target.dataItem.index);
        });
        let lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.name = "ผู้อื่นรับยา";
        lineSeries.stroke = am4core.color("#FF509D");
        lineSeries.strokeWidth = 3;
        lineSeries.dataFields.valueY = "totalAgentReceive";
        lineSeries.dataFields.categoryX = "receiveDate";
        lineSeries.tooltipText = "{name}: [bold]{valueY}[/]";
        //create circle bullet
        let circleBullet = lineSeries.bullets.push(
          new am4charts.CircleBullet()
        );
        circleBullet.circle.fill = am4core.color("#fff");
        circleBullet.circle.strokeWidth = 2;

        let lineSeries2 = chart.series.push(new am4charts.LineSeries());
        lineSeries2.name = "รับยาด้วยตนเอง";
        lineSeries2.stroke = am4core.color("#FF9300");
        lineSeries2.strokeWidth = 3;
        lineSeries2.dataFields.valueY = "totalBySelfReceive";
        lineSeries2.dataFields.categoryX = "receiveDate";
        lineSeries2.tooltipText = "{name}: [bold]{valueY}[/]";
        //create circle bullet
        let circleBullet2 = lineSeries2.bullets.push(
          new am4charts.CircleBullet()
        );
        circleBullet2.circle.fill = am4core.color("#fff");
        circleBullet2.circle.strokeWidth = 2;

        chart.legend = new am4charts.Legend();
        //set cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineX.strokeOpacity = 0;
        chart.cursor.lineY.strokeOpacity = 0;
      }
    }
  })
);
