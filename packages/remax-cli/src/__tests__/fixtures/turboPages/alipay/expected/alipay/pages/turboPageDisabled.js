'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var index$2 = require('../index-chunk2.js');

var NativeComponent = index$1.createNativeComponent('native-component-0');
var RenameView = index$2.View;
var Deep = {
  Object: {
    View: index$2.View
  }
};
var DDD = index$1.createHostComponent('ddd');

function ReactComp(_ref) {
  var children = _ref.children;
  return React.createElement(React.Fragment, null, React.createElement(index$2.View, null, React.createElement(index$2.Text, null, "react component"), React.createElement(React.Fragment, null, React.createElement(index$2.Text, null, "Text inside Fragment")), React.createElement(index$2.View, null, "View inside Expression"), React.Children.map(children, function (child, index) {
    return React.cloneElement(child, {
      id: 'reactComp' + index
    });
  })));
}

function _ref2() {
  var _React$useState = React.useState(1),
      _React$useState2 = index$1._slicedToArray(_React$useState, 1),
      count = _React$useState2[0];

  var props = {
    id: 'spreadId'
  };

  var _React$useState3 = React.useState(true),
      _React$useState4 = index$1._slicedToArray(_React$useState3, 1),
      show = _React$useState4[0];

  var _React$useState5 = React.useState(true),
      _React$useState6 = index$1._slicedToArray(_React$useState5, 1),
      showPlainText = _React$useState6[0];

  var plainText = 'plain-text-leaf';
  return React.createElement(React.Fragment, null, 'expression entry', React.createElement(React.Fragment, null, React.createElement(index$2.Text, null, "Fragment Text 1"), React.createElement(index$2.Text, null, "Fragment Text 2"), React.createElement(React.Fragment, null, React.createElement(index$2.Text, null, "Fragment Text 3"), React.createElement(index$2.Text, null, "Fragment Text 4"))), React.createElement(React.Fragment, null, "Fragment"), React.createElement(React.Fragment, null, "React.Fragment"), React.createElement(DDD, null), React.createElement(index$2.Text, null, "Remax.Text"), React.createElement(NativeComponent, null), React.createElement(ReactComp, null, React.createElement(index$2.View, null, "React Component First Child")), React.createElement(index$2.View, {
    className: "className"
  }, "Count: ", count), React.createElement(index$2.View, {
    id: count,
    className: 'class'
  }, "view"), React.createElement(index$2.View, null, "custom view"), React.createElement('view', {
    id: 'view'
  }, [React.createElement(index$2.View, {
    key: "1"
  }, "create element children 1"), React.createElement('view', {
    key: '2'
  })]), [1, 2, 3].map(function (item) {
    return React.createElement(index$2.View, {
      key: item
    }, "array map: ", item);
  }), React.createElement(index$2.View, props, "Spread Attributes View"), React.createElement(index$2.Text, null, "long long long long long long long long long long long long text long long long long long long long long long long long long text"), React.createElement(index$2.RemaxWindow, null), 'Literal Expression', React.createElement(Deep.Object.View, null, "Deep Object View"), React.createElement(RenameView, null, "Rename View"), show && React.createElement(index$2.View, null, "Conditional View"), React.createElement(index$2.Text, {
    leaf: true
  }, showPlainText && plainText), React.createElement(index$2.View, {
    "ns:attr": "1"
  }));
}

var turboPageDisabled = Page(index$1.createPageConfig(_ref2));

exports.default = turboPageDisabled;
