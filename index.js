var options = {
	series: [{
		data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
	}],
	chart: {
		type: 'bar',
		height: 380,
		animations: { // アニメーション設定
			enabled: true,
		}
	},
	plotOptions: {
		bar: {
			barHeight: '80%', // グラフの太さ
			distributed: true, // 色分けするか
			horizontal: true, // 横にするか
			dataLabels: {
				position: 'bottom' // グラフ上のラベルをどこに揃えるか
			},
		}
	},
	colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
		'#f48024', '#69d2e7'
	],
	dataLabels: {
		enabled: true, // ラベルを表示するかどうか
		textAnchor: 'start', // ラベルの位置
		style: {
			colors: ['#fff'] // ラベルの文字色
		},
		formatter: function (val, opt) { // 表示するデータを加工する
			return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
		},
		offsetX: 0, // ラベルの開始位置を操作する
		dropShadow: { // 文字に影をつけて見やすくする
			enabled: true
		}
	},
	stroke: { // グラフの枠
		width: 1,
		colors: ['#fff']
	},
	xaxis: {
		categories: [
			'South Korea',
			'Canada',
			'United Kingdom',
			'Netherlands',
			'Italy',
			'France',
			'Japan',
			'United States',
			'China',
			'India'
		],
	},
	yaxis: { // グラフの左側
		labels: {
			show: false
		}
	},
	title: {
			text: 'Custom DataLabels',
			align: 'center',
			floating: true
	},
	subtitle: {
		text: 'Category Names as DataLabels inside bars',
		align: 'center',
	},
	tooltip: { // グラフにホバーした際に出すツールチップ
		theme: 'dark',
		x: {
			show: true
		},
		y: {
			title: {
				formatter: function () {
					return ''
				}
			}
		}
	},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


