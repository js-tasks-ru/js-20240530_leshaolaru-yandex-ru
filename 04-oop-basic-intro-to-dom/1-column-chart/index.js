export default class ColumnChart {
  element;
  chartHeight = 50;
  constructor({data = [],
    label = "",
    value = 0,
    link = "",
    formatHeading = a => a} = {}) {
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.formatHeading = formatHeading;

    this.element = this.createElement(this.data);
  }

  createElement(data) {
    const element = document.createElement("div");
    const clazz = data.length === 0 ? "column-chart column-chart_loading" : "column-chart";
    element.innerHTML = this.createTemplate(clazz);

    return element.firstChild;
  }

  createTemplate(clazz) {
    return `<div class="${clazz}" style="--chart-height: 50">
      <div class="column-chart__title">
        ${this.label}
        <a href="/sales" class="column-chart__link">View all</a>
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>
        <div data-element="body" class="column-chart__chart">
          ${this.getColumnProps(this.data)
                .map(obj => `<div style="--value: ${obj.value}" data-tooltip="${obj.percent}"></div>`)
                .join("\n")}
        </div>
      </div>
    </div>`;
  }

  destroy() {

  }

  update(data) {
    this.data = data;
  }

  remove() {
    this.element.remove();
  }

  getColumnProps(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;

    return data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });
  }

}
