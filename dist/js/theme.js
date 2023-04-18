function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


(function () {
  'use strict';

  /**
   * Add shadow effect to fixed to top navigation bar
  */

  var stickyNavbar = function () {
    var navbar = document.querySelector('.navbar.fixed-top');
    if (navbar == null) return;
    var navbarClass = navbar.classList,
      scrollOffset = 20;
    var navbarStuck = function navbarStuck(e) {
      if (e.currentTarget.pageYOffset > scrollOffset) {
        navbar.classList.add('navbar-stuck');
      } else {
        navbar.classList.remove('navbar-stuck');
      }
    };

    // On load
    window.addEventListener('load', function (e) {
      navbarStuck(e);
    });

    // On scroll
    window.addEventListener('scroll', function (e) {
      navbarStuck(e);
    });
  }();

  /**
   * Anchor smooth scrolling
   * @requires https://github.com/cferdinandi/smooth-scroll/
  */

  var smoothScroll = function () {
    var selector = '[data-scroll]',
      fixedHeader = '[data-scroll-header]',
      scroll = new SmoothScroll(selector, {
        speed: 800,
        speedAsDuration: true,
        offset: function offset(anchor, toggle) {
          return toggle.dataset.scrollOffset || 40;
        },
        header: fixedHeader,
        updateURL: false
      });
  }();

  /**
   * Animate scroll to top button in/off view
  */

  var scrollTopButton = function () {
    var element = document.querySelector('.btn-scroll-top'),
      scrollOffset = 600;
    if (element == null) return;
    var offsetFromTop = parseInt(scrollOffset, 10);
    window.addEventListener('scroll', function (e) {
      if (e.currentTarget.pageYOffset > offsetFromTop) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  }();


  /**
   * Force dropdown to work as select box
  */

  var dropdownSelect = function () {
    var dropdownSelectList = document.querySelectorAll('[data-bs-toggle="select"]');
    var _loop3 = function _loop3(i) {
      var dropdownItems = dropdownSelectList[i].querySelectorAll('.dropdown-item'),
        dropdownToggleLabel = dropdownSelectList[i].querySelector('.dropdown-toggle-label'),
        hiddenInput = dropdownSelectList[i].querySelector('input[type="hidden"]');
      for (var n = 0; n < dropdownItems.length; n++) {
        dropdownItems[n].addEventListener('click', function (e) {
          e.preventDefault();
          var dropdownLabel = this.querySelector('.dropdown-item-label').innerText;
          dropdownToggleLabel.innerText = dropdownLabel;
          if (hiddenInput !== null) {
            hiddenInput.value = dropdownLabel;
          }
        });
      }
    };
    for (var i = 0; i < dropdownSelectList.length; i++) {
      _loop3(i);
    }
  }();

  /**
   * Chart JS Green & Blue Charts
  */

  const greenChart = document.getElementById("chartGreen").getContext('2d');
  const myGreenChart = new Chart(greenChart, {
    type: 'line',
    data: {
      labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      datasets: [{
        label: 'Last week',
        backgroundColor: 'rgba(232, 255, 243, 1)',
        borderColor: 'rgb(106, 219, 165)',
        data: [3000, 4000, 2000, 5000, 8000, 9000, 2000],
      }]
    },

    options: {
      legend: {
          display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false,
          }
        }]
      }
    },
  });

  const blueChart = document.getElementById("chartBlue").getContext('2d');
  const myBlueChart = new Chart(blueChart, {
    type: 'line',
    data: {
      labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      datasets: [{
        label: 'Last week',
        backgroundColor: 'rgba(180, 218, 250, 1)',
        borderColor: 'rgb(22, 161, 244)',
        data: [3000, 7000, 4000, 8000, 5000, 9000, 7000],
      }]
    },

    options: {
      legend: {
          display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false,
          }
        }]
      }
    },
  });

  /**
   * AMCharts
  */

  // PieChart

  // Create root and chart
  var root = am5.Root.new("chartdiv3");

  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  var chart = root.container.children.push( 
    am5percent.PieChart.new(root, {
      layout: root.horizontalLayout
    }) 
  );

  // Define data
  var data = [{
    browser: "Chrome",
    sessions: 160000
  }, {
    browser: "Safari",
    sessions: 120000
  }, {
    browser: "Mozilla",
    sessions: 70000
  }];

  // Create series
  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
      name: "Series",
      valueField: "sessions",
      categoryField: "browser"
    })
  );
  series.data.setAll(data);
  series.labels.template.set("forceHidden", true);
  series.ticks.template.set("forceHidden", true);

  // Add legend
//   var legend = chart.children.push(am5.Legend.new(root, {
//     centerY: am5.percent(50),
//     y: am5.percent(50),
//     layout: root.verticalLayout
//   }));

//   legend.markerRectangles.template.setAll({
//     cornerRadiusTL: 10,
//     cornerRadiusTR: 10,
//     cornerRadiusBL: 10,
//     cornerRadiusBR: 10
//   });

// legend.data.setAll(series.dataItems);


  // Map Chart

  // Create root and chart
  var root = am5.Root.new("chartdiv4"); 

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  var chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      projection: am5map.geoNaturalEarth1()
    })
  );

  // Create polygon series
  var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"]
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    templateField: "polygonSettings"
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(0x677935)
  });

  polygonSeries.data.setAll([{
    id: "US",
    polygonSettings: {
      fill: am5.color(0xFF3C38)
    }
  }, {
    id: "CA",
    polygonSettings: {
      fill: am5.color(0xA23E48)
    }
  }, {
    id: "MX",
    polygonSettings: {
      fill: am5.color(0xFF8C42)
    }
  }])

})();