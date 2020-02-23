import { compose, lifecycle } from "recompose";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
export default compose(
  lifecycle({
    async componentDidMount() {
      const { chartName, chartData } = this.props;

      let chart = am4core.create(`${chartName}`, am4charts.XYChart);
      chart.data = chartData;
      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      // categoryAxis.title.text = "Countries";
      categoryAxis.renderer.minGridDistance = 40;
      // categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      // categoryAxis.renderer.minHeight = 110;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;
      // valueAxis.title.text = "Litres sold (M)";

      let columnSeries = chart.series.push(new am4charts.ColumnSeries3D());
      columnSeries.name = "Sales";
      // columnSeries.sequencedInterpolation = true;
      columnSeries.dataFields.valueY = "litres";
      columnSeries.dataFields.categoryX = "country";
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
      lineSeries.name = "Units";
      lineSeries.stroke = am4core.color("#0278FC");
      lineSeries.strokeWidth = 3;
      lineSeries.dataFields.valueY = "units";
      lineSeries.dataFields.categoryX = "country";
      lineSeries.tooltipText = "{name}: [bold]{valueY}[/]";
      //create circle bullet
      let circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
      circleBullet.circle.fill = am4core.color("#fff");
      circleBullet.circle.strokeWidth = 2;

      chart.legend = new am4charts.Legend();
      //set cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineX.strokeOpacity = 0;
      chart.cursor.lineY.strokeOpacity = 0;
    }
  })
);
