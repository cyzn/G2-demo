webpackJsonp([50,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(3);
	var G2 = __webpack_require__(1);
	var data = [{ name: '转速', value: 1000, length: 8 }];
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 384,
	  height: 384
	});
	chart.coord('gauge', {
	  startAngle: -1.25 * Math.PI,
	  endAngle: -0.25 * Math.PI
	});
	chart.source(data, {
	  'value': { type: 'linear', min: 0, max: 3000, tickCount: 8, nice: false },
	  'length': { type: 'linear', min: 0, max: 10 }
	});
	chart.legend('length', false);
	chart.axis('value', { subTick: 5 });
	chart.point().position('value').size('length').color('name');

	chart.guide().arc([0, 1], [500, 1], { // 低
	  stroke: '#71AEEA',
	  'stroke-width': 12,
	  'stroke-opacity': 0.7
	});

	chart.guide().arc([500, 1], [2500, 1], { // 中
	  stroke: '#F0D06F',
	  'stroke-width': 12,
	  'stroke-opacity': 0.7
	});

	chart.guide().arc([2500, 1], [3000, 1], { // 高
	  stroke: '#E47668',
	  'stroke-width': 12,
	  'stroke-opacity': 0.7
	});

		chart.render();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("G2",[],e):"object"==typeof exports?exports.G2=e():t.G2=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var n=e.slice(1),r=t[e[0]];return function(t,e,i){r.apply(this,[t,e,i].concat(n))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,n){"use strict";var r={};r.Chart=n(300),r.Util=n(1),r.Global=n(5),r.Stat=n(18),r.Stat.map=n(191),r.Stat.tree=n(217),r.Stat.treemap=n(220),n(215),r.Scale=n(79),r.Shape=n(98),r.Frame=n(2),r.Theme=n(46),r.Canvas=n(11),r.Coord=n(71),r.Base=n(27),r.ColorCalculate=n(60),r.Layout=n(184),r.Plugin={},t.exports=r},function(t,e,n){var r=n(263);t.exports=r},function(t,e,n){var r=n(31);n(76),n(167),n(166),t.exports=r},function(t,e,n){var r={Matrix3:n(197),Vector2:n(198),Vector3:n(199)};t.exports=r},function(t,e,n){var r=n(196);t.exports=r},function(t,e,n){"use strict";function r(t){t=t||0,t=100*t;var e=2;return t>0&&t<.01&&(e=(1/t+"").indexOf(".")+1),t.toFixed(e)+"%"}function i(t){for(var e in c)c.hasOwnProperty(e)&&delete c[e];var n;n=s.isObject(t)?t:s.indexOf(u,t)!==-1?o[t]:o["default"],s.mix(!0,c,a,n),c.setTheme=i}var a,s=n(1),o=n(325),u=["default","dark","cheery"],c={};a={animate:!0,percentFormat:r,widthRatio:{column:.5,rose:.9999999,multiplePie:1/1.3},scales:{"..x":{type:"linear",min:0,max:1,nice:!1},"..y":{type:"linear",min:0,max:1,nice:!1},"..level":{type:"linear",min:0,nice:!1},"..value":{type:"linear",min:0},"..count":{type:"linear",min:0,alias:"count"},"..percent":{type:"linear",min:0,max:1,alias:"percent",formatter:r},"..proportion":{type:"linear",min:0,max:1,alias:"proportion",formatter:r},"..density":{type:"linear",min:0,alias:"density"},"..long":{type:"linear",alias:"longitude",nice:!1},"..lant":{type:"linear",alias:"latitude",nice:!1},"..pieX":{type:"cat",values:["..pieX"],ticks:["..pieX"]}},connectNulls:!1,heatmapColors:"rgb(125,125,248)-rgb(0,0,255)-rgb(0,255,0)-yellow-rgb(255,0,0)",heatmap:{radius:50}},i("default"),t.exports=c},function(t,e,n){"use strict";var r=n(1);t.exports=r},function(t,e,n){"use strict";var r=n(89),i=n(58),a=n(57),s=n(56),o=n(3);n(1),o.Vector2;t.exports={line:function(t,e,n,i,a,s,o){var u=r.box(t,e,n,i,a);if(!this.box(u.minX,u.maxX,u.minY,u.maxY,s,o))return!1;var c=r.pointDistance(t,e,n,i,s,o);return!isNaN(c)&&c<=a/2},polyline:function(t,e,n,r){var i=this,a=t.length-1;if(a<1)return!1;for(var s=0;s<a;s++){var o=t[s][0],u=t[s][1],c=t[s+1][0],l=t[s+1][1];if(i.line(o,u,c,l,e,n,r))return!0}return!1},cubicline:function(t,e,n,r,i,s,o,u,c,l,h){return a.pointDistance(t,e,n,r,i,s,o,u,l,h)<=c/2},quadraticline:function(t,e,n,r,a,s,o,u,c){return i.pointDistance(t,e,n,r,a,s,u,c)<=o/2},arcline:function(t,e,n,r,i,a,o,u,c){return s.pointDistance(t,e,n,r,i,a,u,c)<=o/2},rect:function(t,e,n,r,i,a){return t<=i&&i<=t+n&&e<=a&&a<=e+r},circle:function(t,e,n,r,i){return Math.pow(r-t,2)+Math.pow(i-e,2)<=Math.pow(n,2)},box:function(t,e,n,r,i,a){return t<=i&&i<=e&&n<=a&&a<=r}}},function(t,e,n){"use strict";var r=n(6),i=n(86),a=n(3),s=n(7),o=a.Vector3,u=function(t){u.superclass.constructor.call(this,t)};u.ATTRS={fillOpacity:1,strokeOpacity:1},r.extend(u,i),r.augment(u,{isShape:!0,createPath:function(){},drawInner:function(){var t=this,e=t.get("context"),n=t.attr("lineWidth");t.createPath(),t.hasFill()&&e.fill(),t.hasStroke()&&n>0&&e.stroke()},isPointInPath:function(t,e){return!1},isHit:function(t,e){var n=this,r=n.get("canvas"),i=new o(t,e,1);n.invert(i,r);var a=n.getBBox();if(a&&s.box(a.minX,a.maxX,a.minY,a.maxY,i.x,i.y)){var u=n.__attrs.clip;if(!u)return n.isPointInPath(i.x,i.y);if(u.inside(t,e))return n.isPointInPath(i.x,i.y)}return!1},getBBox:function(){return this.get("box")}}),t.exports=u},function(t,e,n){"use strict";var r=n(1),i=n(177),a=n(148),s=n(147),o=n(143),u={radius:"r","font-size":"fontSize","stroke-width":"lineWidth","text-anchor":"textAlign","font-weight":"fontWeight","fill-opacity":"fillOpacity","stroke-opacity":"strokeOpacity","stroke-dasharray":"lineDash",horizontalAlign:"textAlign",verticalAlign:"textBaseline"};r.mix(r,{isPositiveNum:function(t){var e=/^[0-9]*[1-9][0-9]*$/;return e.test(t)},adapAttrs:function(t){r.each(t,function(e,n){var i=r.adapAttr(n,e);t[i.name]=i.value})},adapAttr:function(t,e){var n=u[t],r={name:t,value:e};return n&&("font-size"===t?e=parseInt(e,10):"text-anchor"===t&&(e="start"===e?"left":"middle"===e?"center":"right"),r.name=n,r.value=e),r},merge:function(t,e){if(e){if(!r.isObject(e))return e;var n={};return r.mix(n,t,e),n}return t},getRatio:function(){return window.devicePixelRatio?window.devicePixelRatio:2},mixXY:function(t,e){var n={x:e.get("x"),y:e.get("y")};t.x?t.x+=n.x:t.x=n.x,t.y?t.y+=n.y:t.y=n.y},getWidth:function(t){var e=r.getStyle(t,"width");return"auto"===e&&(e=t.offsetWidth),parseFloat(e)},getHeight:function(t){var e=r.getStyle(t,"height");return"auto"===e&&(e=t.offsetHeight),parseFloat(e)},getOuterHeight:function(t){var e=r.getHeight(t),n=parseFloat(r.getStyle(t,"borderTopWidth"))||0,i=parseFloat(r.getStyle(t,"paddingTop")),a=parseFloat(r.getStyle(t,"paddingBottom")),s=parseFloat(r.getStyle(t,"borderBottomWidth"))||0;return e+n+s+i+a},parsePathArray:function(t){return a.parsePathArray(t)},path2Absolute:function(t){return a.path2Absolute(t)},parsePathString:function(t){return a.parsePathString(t)},animPath:function(t,e,n,i,a,s){if(!r.vml&&(n=n||0,i=i||400,e)){var o,u=t.attr("path"),c=r.parsePathString(e),l=u.slice(n*-1);if(u.length>c.length)o=u.slice(0,c.length);else if(o=u.concat([]),n)for(var h=o.length;h<c.length;h++)o=o.concat(l);t.animate({path:c},i,a,s)}},animate:function(t,e,n,a,s){function u(){var e,h,x,m,y,_,S=+new Date,w=S-l,b={},M=t.get("canvas");c=w/n,c<=0?c=0:c>=1&&(c=1),c=o[a](c);for(_ in f)if(p[_]!==f[_])if("path"===_){x=r.parsePathString(f[_]),m=r.parsePathString(p[_]),b[_]=[];for(var A=0;A<x.length;A++){for(var C=x[A],k=m[A],T=[],P=0;P<C.length;P++)r.isNumeric(C[P])?(y=i.interpolation(C[P],k[P]),T.push(y(c))):T.push(C[P]);b[_].push(T)}}else y=i.interpolation(p[_],f[_]),b[_]=y(c);g&&(h=i.interpolation(v,g),e=h(c),t.setMatrix(e)),t.attr(b),M.draw(),r.requestAnimationFrame(function(){d===t.get("animCount")&&t.get("animable")&&t&&!t.get("destroyed")&&(c>=0&&c<1?u():c>=1&&s&&s())})}var c,l=+new Date,h=this.formatProps(e,t),f=h.attrs,g=h.M,p=this.getfromAttrs(f,t),v=t.getMatrix().clone(),d=t.get("animCount");a=a?a:"linear",setTimeout(function(){d===t.get("animCount")&&u()},6)},getfromAttrs:function(t,e){var n={};return r.each(t,function(t,r){n[r]=e.attr(r)}),n},formatProps:function(t,e){var n,r={M:null,attrs:{}};for(n in t)"transform"===n?r.M=s.transform(e.getMatrix(),t[n]):"matrix"===n?r.M=t[n]:r.attrs[n]=t[n];return r}}),r.MatrixUtil=s,t.exports=r},function(t,e,n){"use strict";var r=n(34),i=n(1),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,r),i.augment(s,{type:"summary",getStatDims:function(){var t=this,e=t.getDims(),n=e.length,r=[e[n-1]];return r},getGroupCondition:function(){var t,e=this,n=e.getDims(),r=n.length,a=[];return r>1&&(a=n.slice(0,r-1),t=[]),i.each(a,function(e){0!==e.indexOf("..")&&t.push(e)}),t},groupFrames:function(t){var e,n=this,r=n.getGroupCondition();return e=r?a.group(t,r):[t]},transformGroup:function(t,e){var n=this,r=[];return i.each(t,function(t){r.push(n.transform(t,e))}),r},execFrame:function(t){var e=this,n=e.getStatDims()[0],r=e.groupFrames(t),i=e.transformGroup(r,n),s=a.merge.apply(null,i);return s},transform:function(t){return t}}),t.exports=s},function(t,e,n){var r=n(129),i=n(12),a=n(28);r.G=a.G,r.Components=n(134),r.Group=i.GroupBase,r.Shape={},r.Shape.Marker=i.Marker,r.Util=n(9),r.Matrix=n(3),t.exports=r},function(t,e,n){t.exports={GMixin:n(144),GroupBase:n(70),GroupMixin:n(145),Marker:n(146)}},function(t,e){"use strict";var n={prefix:"g",backupContext:function(){return document.createElement("canvas").getContext("2d")}(),debug:!1,warn:function(t){}};t.exports=n},function(t,e,n){"use strict";var r=n(1),i=n(55),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{regressionType:"base",isRegression:!0,getRegressionString:function(){return""},execSmooth:function(t){return t}}),t.exports=a},function(t,e,n){"use strict";var r=n(80),i=n(20),a=n(1);a.mix(r.GeomShape,{getMarkerCfg:function(t,e){var n=this.getShape(t);return n.getMarkerCfg(e)},getActiveCfg:function(t,e){var n=this.getShape(t);return n.getActiveCfg(e)},getSelectedCfg:function(t,e){var n=this.getShape(t);return n.getActiveCfg(e)},drawShape:function(t,e,n){var r=this.getShape(t),i=r.drawShape(e,n);return i&&i.set("origin",e.origin),i}}),a.mix(r.ShapeBase,{setCoord:function(t){this._coord=t},parsePath:function(t,e){var n=this._coord;return t=a.parsePathString(t),t=n.isPolar&&e!==!1?i.convertPolarPath(t,n):i.convertNormalPath(t,n)},parsePoint:function(t){var e=this._coord;return e.convertPoint(t)},parsePoints:function(t){if(!t)return!1;var e=this._coord,n=[];return a.each(t,function(t){n.push(e.convertPoint(t))}),n}}),t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(27),a=n(11).Matrix,s=a.Matrix3,o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={easing:"easeInOutQuad",duration:1e3,callback:null,group:null,rect:null,before:null},r.extend(o,i),r.augment(o,{start:function(){return this.startAnimate(),this},startAnimate:function(){var t=this.getTarget(),e=this.get("group");this.set("originMatrix",e.getMatrix().clone()),this.set("rect",this.getAnimRect()),this.set("target",t),this.beforeAnimate(t),this.execAnimate(t)},beforeAnimate:function(t){var e=this.getInitMatrix(),n=this.getInitAttrs(),r=this.get("originMatrix");e=s.multiply(r,e),t.setMatrix(e),t.attr(n)},execAnimate:function(t){var e,n=this,i=n.get("before"),a=n.get("callback"),o=n.get("duration"),u=n.get("easing"),c=n.getEndAttrs(),l=n.get("originMatrix"),h=n.getEndMatrix();h=s.multiply(l,h),e=r.mix({},c,{matrix:h}),t.animate(e,o,u,function(){a&&a(),n.afterAnimate(t)}),i&&i()},afterAnimate:function(t){var e=this.get("group"),n=e.get("canvas");return e==t||(e.attr("clip",!1),void n.draw())},getTarget:function(){return this.get("group")},getInitMatrix:function(){return new s},getInitAttrs:function(){return{}},getEndMatrix:function(){return new s},getEndAttrs:function(){return{}},getAnimRect:function(){var t=this.get("rect"),e=this.get("group");return t||(t=e.getBBBox()),t},getCircleInfo:function(){var t=this.get("rect"),e=this.get("circle"),n=this.getRectCenter(t),r=Math.min(t.width,t.height)/2;return e||(e={center:n,r:r}),e},getRectCenter:function(t){return{x:t.x+t.width/2,y:t.y+t.height/2}},stop:function(){return this.stopAnimate(),this},stopAnimate:function(){var t=this.getTarget();t&&t.stopAnimate()}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=["min","max"],a=function(t){r.mix(this,t)};r.augment(a,{xScale:null,yScale:null,cfg:{},parsePoint:function(t,e){var n=this,a=n.xScale,s=n.yScale,o=e[0],u=e[1];return a&&(o=r.indexOf(i,o)!==-1?a.scale(a[o]):a.scale(o)),s&&(u=r.indexOf(i,u)!==-1?s.scale(s[u]):s.scale(u)),t.convert({x:o,y:u})},paint:function(){}}),t.exports=a},function(t,e,n){var r=n(34);r.summary=n(248),r.bin=n(224),r.smooth=n(238),r.density=n(228),r.region=n(231);var i=n(2);i.execStat=function(t,e){e.init();var n=e.exec([t]);return i.merge.apply(null,n)},t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(27),a=n(75),s=n(80),o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={type:null,container:null,attrs:null,shapeObj:null,styleCfg:{}},r.extend(o,i),r.augment(o,{_mapping:function(t){var e=this,n=t.toJSON(),i=e.get("attrs");return r.each(i,function(t){var i=t.names;r.each(n,function(n){var a=e._getAttrValues(t,n);r.each(a,function(t,e){var a=i[e];n[a]=r.isArray(t)&&1===t.length?t[0]:t})})}),new a(n)},_processShapePoints:function(t){var e,n,i=this,o=i.get("shapeType")||i.get("type"),u=s.getShape(o),c=[];return u._coord=i.getCoord(),r.each(t,function(t){var e=[];t.each(function(t){var n=i.getAttrValue("shape",t),r=i.getShapePointInfo(t),a=u.getShapePoints(n,r);t.points=a,e.push(t)}),e=new a(e),c.push(e)}),r.each(c,function(t,r){e=c[r+1],n=e?e.colArray("points")[0]:null,t.addCol("nextPoints",function(){return n})}),i.set("shapeObj",u),c},_getAttrValues:function(t,e){var n=t.scales,i=[];r.each(n,function(t){var n=t.dim;"identity"===t.type?i.push(t.value):i.push(e[n])});var a=t.mappingValues.apply(t,i);return a},draw:function(t){var e=this,n=[];return t=e.processFrames(t),t=e._processShapePoints(t),r.each(t,function(t){t=e.beforeMapping(t),t=e._mapping(t),t.rowCount()&&e.drawFrame(t),n.push(t)}),n},processFrames:function(t){return t},beforeMapping:function(t){return t},isInCircle:function(){return this.getCoord().isPolar},getShapePointInfo:function(t){var e=this.getXScale(),n=this.getYScale(),r=e?this._normalizeValues(t[e.dim],e):t.x?t.x:.1,i=n?this._normalizeValues(t[n.dim],n):t.y?t.y:.1;return{x:r,y:i,y0:n?n.scale(this.getYMinValue()):void 0,size:this.getSize(t)}},_normalizeValues:function(t,e){var n=[];return r.isArray(t)?r.each(t,function(t,r){n.push(e.scale(t))}):n=e.scale(t),n},getDefalutSize:function(){return.1},_getSize:function(t){var e,n=this.getCoord();return e=this.isInCircle()&&!n.isTransposed?(n.get("endAngle")-n.get("startAngle"))*n.get("radius"):this.getDimWidth("x"),t/e},getDimWidth:function(t){var e=this,n=e.getCoord(),r=n.convertPoint({x:0,y:0}),i=n.convertPoint({x:"x"===t?1:0,y:"x"===t?0:1}),a=0;return r&&i&&(a=Math.sqrt(Math.pow(i.x-r.x,2)+Math.pow(i.y-r.y,2))),a},getSize:function(t){var e=this.getAttrValue("size",t);return e=r.isNull(e)?this.getDefalutSize():this._getSize(e)},drawFrame:function(t){var e,n,i,a=this,s=t.toJSON(),o=a.get("container"),u=a.get("shapeObj");r.each(s,function(t){e=a.getDrawCfg(t),n=a.getDrawShape(t.shape),i=u.drawShape(n,e,o),a.afterDraw(i,t)})},afterDraw:function(t,e){},getDrawShape:function(t){return r.isArray(t)?t[0]:t},getDrawCfg:function(t){var e=this.get("styleCfg"),n=this.isInCircle(),r={points:t.points,nextPoints:t.nextPoints,color:t.color,isInCircle:n,style:e,size:t.size,shape:t.shape,opacity:t.opacity,x:t.x,y:t.y,origin:t};return n&&(r.center=this.getCoord().get("center")),r},getYMinValue:function(){var t,e=this.getYScale(),n=e.min;return t=n>=0?n:0},getAttrValue:function(t,e){var n=this.getAttr(t),r=null;return n&&(r=this._getAttrValues(n,e)[0]),r},getAttr:function(t){var e=this.get("attrs"),n=null;return r.each(e,function(e){e.type===t&&(n=e)}),n},getCoord:function(){return this.getAttr("position").coord},getXDim:function(){var t=this.getXScale();return t.dim},getYDim:function(){var t=this.getYScale();return t.dim},getXScale:function(){return this.getAttr("position").scales[0]},getYScale:function(){return this.getAttr("position").scales[1]}}),t.exports=o},function(t,e,n){"use strict";function r(t,e,n){if(!t.length)return"";var r="",i="";t.length<=2&&(n=!1);for(var a=0,s=t.length;a<s;a++){var o=t[a];i=0===a?n?"M{x} {y} R":"M{x} {y}":n?" {x} {y}":"L{x} {y}",r+=u.substitute(i,o)}return e&&(r+="Z"),r}function i(t,e){var n=t.getCenter(),r=Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2));return r}function a(t,e){for(var n=t.length,r=[t[0]],i=1;i<n;i+=2){var a=e.convertPoint({x:t[i],y:t[i+1]});r.push(a.x,a.y)}return r}function s(t,e,n){var r=n.getRadius(),a=n.get("inner")||0,s=a*r,o=n.isTransposed,u=n.get("startAngle"),c=n.get("endAngle"),l={x:t[1],y:t[2]},h={x:e[1],y:e[2]},f=[];s=s||0;var g=o?"y":"x",p=Math.abs(h[g]-l[g])*(c-u),v=h[g]>=l[g]?1:0,d=p>Math.PI?1:0,x=n.convertPoint(h),m=i(n,x);if(p===2*Math.PI){if(m>=.5){var y={x:(h.x+l.x)/2,y:(h.y+l.y)/2},_=n.convertPoint(y);f.push(["A",m,m,0,d,v,_.x,_.y]),f.push(["A",m,m,0,d,v,x.x,x.y])}}else f.push(["A",m,m,0,d,v,x.x,x.y]);return f}function o(t){u.each(t,function(e,n){var r=e;if("a"===r[0].toLowerCase()){var i=t[n-1],a=t[n+1];a&&"a"===a[0].toLowerCase()?i&&"l"===i[0].toLowerCase()&&(i[0]="M"):i&&"a"===i[0].toLowerCase()&&a&&"l"===a[0].toLowerCase()&&(a[0]="M")}})}var u=n(1),c=n(213),l={getLinePath:function(t,e,n){return r(t,e,n)},getSplinePath:function(t,e){var n=[],r=t[0],i=null;u.each(t,function(t){i&&i.x===t.x&&i.y===t.y||(n.push(t.x),n.push(t.y),i=t)});var a=[[0,0],[1,1]],s=c.catmullRom2bezier(n,e,a);return"M"+r.x+" "+r.y+u.parsePathArray(s)},getPointRadius:function(t,e){var n=i(t,e);return n},getPointAngle:function(t,e){var n=t.getCenter(),r=Math.atan2(e.y-n.y,e.x-n.x);return r},convertNormalPath:function(t,e){var n=[];return u.each(t,function(t){var r=t[0];switch(r.toLowerCase()){case"m":case"l":case"c":n.push(a(t,e));break;case"z":default:n.push(t)}}),n},convertPolarPath:function(t,e){var n=[];return u.each(t,function(r,i){var o=r[0];switch(o.toLowerCase()){case"m":case"c":n.push(a(r,e));break;case"l":var u=t[i-1],c=r,l=e.isTransposed,h=l?u[1]===c[1]:u[2]===c[2];h?n=n.concat(s(u,c,e)):n.push(a(r,e));break;case"z":default:n.push(r)}}),o(n),n}};t.exports=l},function(t,e,n){"use strict";var r=n(1),i=function(t){r.mix(this,t)};i.prototype={type:"base",names:null,scales:[],min:0,max:10,method:function(t){return t*(this.max-this.min)+this.min},callback:function(){var t,e,n,i=this,a=i.arr,s=i.scales,o=r.toArray(arguments),u=[];return r.each(s,function(s,c){t=o[c],n=s.scale(t),e=s.translate(t),"identity"===s.type?u.push(s.value):r.isArray(a)?u.push(i._getArrValue(a,s,n,e)):i.method?u.push(i.method(n)):u.push(null)}),u},getNames:function(){var t=this.scales,e=this.names,n=[];return r.each(t,function(t,r){n.push(e[r])}),n},getDims:function(){var t=this.scales,e=[];return r.each(t,function(t){e.push(t.dim)}),e},getScale:function(t){var e=this.scales,n=this.names,r=n.indexOf(t);return e[r]},mappingValues:function(){var t=this.scales,e=r.toArray(arguments),n=this.callback,i=e;if(n){for(var a=0;a<e.length;a++)e[a]=this.parseParam(e[a],t[a]);i=n.apply(this,e)}return this.names&&1===this.names.length&&(i=[i]),i},parseParam:function(t,e){var n=t;return e.isLinear||(n=e.scale(t),n=e.invert(n)),n},_getArrValue:function(t,e,n,r){var i=0;return e.isCategory?i=r:e.isLinear&&(i=parseInt(n*(t.length-1),10)),t[i%t.length]}},t.exports=i},function(t,e,n){"use strict";var r=n(1),i=n(237),a={getRegressionString:function(){return this.regressionStr},getRegression:function(){return{equation:[],string:""}},execSmooth:function(t,e){var n=this,a=n.getRegression(t),s=a.equation;this.regressionStr=a.string;var o=[];return r.each(e,function(t){var e=t,r=i.execFnction(n.regressionType,s,e);o.push([e,r])}),o}};t.exports=a},function(t,e,n){var r=n(13),i={Canvas:n(268),Group:n(87),Shape:n(8),Rect:n(283),Circle:n(272),Ellipse:n(274),Path:n(279),Text:n(284),Line:n(277),Image:n(276),Polygon:n(280),Polyline:n(281),Arc:n(271),Fan:n(275),Cubic:n(273),Quadratic:n(282),debug:function(t){r.debug=t}};t.exports=i},function(t,e,n){var r={};r.Base=n(19),r.Interval=n(287),r.Point=n(289),r.Line=n(288),r.Polygon=n(290),r.Schema=n(291),r.Path=n(92),r.Area=n(286),t.exports=r},function(t,e,n){t.exports=n(330)},function(t,e,n){"use strict";var r=n(1),i=n(2),a=0,s=function(t){r.mix(this,t)};r.augment(s,{xDim:null,yDim:null,adjustNames:["x","y"],groupDims:null,isAdjust:function(t){return r.inArray(this.adjustNames,t)},processAdjust:function(t){var e=this,n=i.merge.apply(null,t);return e.adjFrames=t,e.mergeFrame=n,t=e.adjustFrames(t,n),e.adjFrames=null,e.mergeFrame=null,t},_getDimValues:function(t){var e=this,n={},s=[];if(e.xDim&&e.isAdjust("x")&&s.push(e.xDim),e.yDim&&e.isAdjust("y")&&s.push(e.yDim),r.each(s,function(e){var r=i.values(t,e);r.sort(function(t,e){return t-e}),n[e]=r}),!e.yDim&&e.isAdjust("y")){var o="y",u=[a,1];n[o]=u}return n},adjustFrames:function(t,e){var n=this,a=[],s=n._getDimValues(e);return r.each(t,function(e,o){var u=e.toJSON();r.each(s,function(e,r){n.adjustDim(r,e,u,t.length,o)}),a.push(new i(u))}),a},adjustDim:function(t,e,n){return new i(n)},getAdjustRange:function(t,e,n){var i,a,s=this,o=r.indexOf(n,e),u=n.length;return!s.yDim&&s.isAdjust("y")?(i=0,a=1):u>1?(i=0===o?n[0]:n[o-1],a=o===u-1?n[u-1]:n[o+1],0!==o?i+=(e-i)/2:i-=(a-e)/2,o!==u-1?a-=(a-e)/2:a+=(e-n[u-2])/2):(i=0===e?0:e-.5,a=0===e?1:e+.5),{pre:i,next:a}},groupData:function(t,e){var n={};return r.each(t,function(t){var r=t[e];void 0===r&&(r=t[e]=a),n[r]||(n[r]=[]),n[r].push(t)}),n}}),t.exports=s},function(t,e,n){var r=n(125);t.exports=r},function(t,e,n){var r=n(126),i=n(64);r.G=n(23),r.Util=n(29),r.Group=i.GroupBase,t.exports=r},function(t,e,n){"use strict";var r=n(23),i=n(1),a=r.Shape.superclass.constructor,s=document.createElement("table"),o=document.createElement("tr"),u=/^\s*<(\w+|!)[^>]*>/,c={tr:document.createElement("tbody"),tbody:s,thead:s,tfoot:s,td:o,th:o,"*":document.createElement("div")};i.mix(i,{getBoundingClientRect:function(t){var e=t.getBoundingClientRect(),n=document.documentElement.clientTop,r=document.documentElement.clientLeft;return{top:e.top-n,bottom:e.bottom-n,left:e.left-r,right:e.right-r}},upperFirst:function(t){return t.replace(/(\w)/,function(t){return t.toUpperCase()})},getStyle:function(t,e){return window.getComputedStyle?window.getComputedStyle(t,null)[e]:t.currentStyle[e]},modiCSS:function(t,e){var n;for(n in e)t.style[n]=e[n];return t},getRatio:function(){return window.devicePixelRatio?window.devicePixelRatio:1},initClassCfgs:function(t){if(!t.__cfg&&t!==a){var e=t.superclass.constructor;e&&!e.__cfg&&i.initClassCfgs(e),t.__cfg={},i.mix(!0,t.__cfg,e.__cfg),i.mix(!0,t.__cfg,t.CFG)}},mixin:function(t,e){var n=t.CFG?"CFG":"ATTRS";if(t&&e){t._mixins=e,t[n]=t[n]||{};var r={};i.each(e,function(e){i.augment(t,e);var a=e[n];a&&i.mix(r,a)}),t[n]=i.mix(r,t[n])}},createDom:function(t){var e=u.test(t)&&RegExp.$1;e in c||(e="*");var n=c[e];return t=t.replace(/(^\s*)|(\s*$)/g,""),n.innerHTML=""+t,n.childNodes[0]}}),t.exports=i},function(t,e,n){"use strict";var r=n(1),i=function(t){r.mix(this,t)};r.augment(i,{xValue:null,yValue:null,region:null,frame:null}),t.exports=i},function(t,e,n){"use strict";var r=n(1),i=function(t,e){this.data=t,r.mix(this,e),this.initFrame()};i.prototype={isFrame:!0,initFrame:function(){var t=this,e=t.data,n=t.colNames(),i=t.arr;if(r.isArray(e[0])&&(i=t.arr=e),!i){i=[];for(var a=0;a<n.length;a++){for(var s=[],o=n[a],u=0;u<e.length;u++)s.push(e[u][o]);i.push(s)}t.arr=i}},contains:function(t){var e=this.colNames();return r.indexOf(e,t)!==-1},colNames:function(){var t=this,e=t.names;if(!e){var n=this.data,i=n[0];e=[],i&&r.each(i,function(t,n){e.push(n)}),t.names=e}return e},rowCount:function(){var t=this,e=t.arr;return e&&e.length?e[0].length:0},colCount:function(){var t=this,e=t.colNames();return e?e.length:0},colIndex:function(t){return r.indexOf(this.names,t)},colArray:function(t){var e=t;return r.isString(t)&&(e=this.colIndex(t)),this.arr[e]},colReplace:function(t,e){var n=this.arr,i=this.colNames();if(r.isString(t)){var a=t;t=r.indexOf(i,a)}return n[t]=e,this},each:function(t){for(var e=this,n=e.rowCount(),r=0;r<n;r++){var i=e._getObject(r);t(i,r)}return e},rowObject:function(t){return this._getObject(t)},_getObject:function(t,e){var n=this,r=n.arr,i={};e=e||n.colNames();for(var a=0;a<e.length;a++)i[e[a]]=r[a][t];return i},addCol:function(t,e){var n=this;if(r.isFunction(e)){var i=e;e=[],n.each(function(t,n){var r=i(t,n);e.push(r)})}n.names.push(t),n.arr.push(e)},toArray:function(){return this.arr},toJSON:function(){for(var t=this,e=t.rowCount(),n=[],r=0;r<e;r++)n.push(t._getObject(r));return n}},t.exports=i},function(t,e,n){"use strict";var r=n(18),i=n(1),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,r),i.augment(s,{type:"map",mapData:{},initDims:function(t){var e=t[0],n=t.slice(1);t=n.concat([e]),t.unshift("..lant"),t.unshift("..long"),this.dims=t},getStatDims:function(){var t=this.getDims(),e=t.filter(function(t){return t.indexOf("..")>-1});return e},execFrame:function(t){var e=this,n=e.getStatDims(),r=[];return t=t.toJSON(),i.each(t,function(t){r.push(e.addGeoInfo(t,n))}),new a(r)},addGeoInfo:function(t){return t}}),t.exports=s},function(t,e,n){"use strict";var r=n(44),i=n(1),a=n(36),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,r),i.augment(s,{type:"cat",tickCount:null,isCategory:!0,init:function(){var t=this,e=t.values,n=t.tickCount;if(i.each(e,function(t,n){e[n]=t.toString()}),!t.ticks){var r=e;if(n){var s=a.Category.caculate({maxCount:n,data:e});r=s.ticks}this.ticks=r}},getText:function(t){return this.values.indexOf(t)>-1?t=t:i.isNumber(t)&&(t=this.values[Math.round(t)]),s.superclass.getText.call(this,t)},translate:function(t){var e=this.values.indexOf(t);return e===-1&&i.isNumber(t)?e=t:e===-1&&(e=NaN),e},scale:function(t){var e,n=this.rangeMin(),r=this.rangeMax();return(i.isString(t)||this.values.indexOf(t)!==-1)&&(t=this.translate(t)),e=this.values.length>1?t/(this.values.length-1):t,n+e*(r-n)},invert:function(t){if(i.isString(t))return t;var e=this.rangeMin(),n=this.rangeMax();t<e&&(t=e),t>n&&(t=n);var r=(t-e)/(n-e),a=Math.round(r*(this.values.length-1))%this.values.length;return a=a||0,this.values[a]}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=function(t){r.mix(this,t)};r.augment(i,{isStat:!0,initDims:function(){},getDims:function(){return this.dims},getStatDims:function(){return this.getDims()},init:function(){var t=this,e=t.dims;if(r.isString(e)&&(e=e.split("*"),t.dims=e),e&&e.isStat){var n=e;n.init(),t.stat=n,e=n.dims,t.dims=e}e||(e=[],t.dims=e),t.initDims(e)},preExecute:function(){},exec:function(t){var e=this;e.preExecute(t);var n=[];return this.stat&&(t=this.stat.exec(t)),r.each(t,function(i){var a=e.execFrame(i,t);r.isArray(a)?n=n.concat(a):n.push(a)}),n},execFrame:function(t){return t}}),t.exports=i},function(t,e,n){function r(t,e,n,r){s(t,a(e,n,r))}function i(t,e,n){var r=n/Math.sin(c);return t.setLength(r/2),e.sub(t),e}function a(t,e,n){var r=new u(1,0).angleTo(t),i=r-c,a=r+c,s=6+3*n;return[{x:e.x-s*Math.cos(i),y:e.y-s*Math.sin(i)},e,{x:e.x-s*Math.cos(a),y:e.y-s*Math.sin(a)}]}function s(t,e){t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y),t.lineTo(e[2].x,e[2].y)}var o=n(3),u=(n(4),n(1),o.Vector2),c=Math.PI/6;t.exports={makeArrow:r,getEndPoint:i}},function(t,e,n){var r=n(124);t.exports=r},function(t,e,n){t.exports=n(149)},function(t,e,n){"use strict";var r=n(1),i=n(3),a=i.Matrix3,s=i.Vector3,o=function(t){this._attrs={},this._attrs.matrix=new a,r.mix(this._attrs,o.ATTRS,t),this.init()};r.augment(o,{isTransposed:!1,set:function(t,e){return this._attrs[t]=e,this},get:function(t){return this._attrs[t]},getDim:function(t){switch(t){case"x":return this.get("x");case"y":return this.get("y");case"z":return this.get("z");default:console.error("\u6ca1\u6709"+t+"\u4ee3\u8868\u7684\u7ef4\u5ea6!")}},init:function(){var t=this,e=t.get("start"),n=t.get("end"),r={x:(e.x+n.x)/2,y:(e.y+n.y)/2};t.set("center",r),t.set("width",Math.abs(n.x-e.x)),t.set("height",Math.abs(n.y-e.y))},getWidth:function(){return this.get("width")},getHeight:function(){return this.get("height")},convertDim:function(t,e){var n=this;return e=n.get(e),e.start+t*(e.end-e.start)},invertDim:function(t,e){var n=this;return e=n.get(e),(t-e.start)/(e.end-e.start)},rotate:function(t){var e=this,n=e.get("matrix"),r=e.get("center");return n.translate(-r.x,-r.y),n.rotate(t),n.translate(r.x,r.y),this},reflect:function(t){var e=this;switch(t){case"x":e._swapDim("x");break;case"y":e._swapDim("y");break;default:e._swapDim("y")}return this},_swapDim:function(t){var e=this,n=e.get(t);if(n){var r=n.start;n.start=n.end,n.end=r}},scale:function(t,e){var n=this,r=n.get("matrix"),i=n.get("center");return r.translate(-i.x,-i.y),r.scale(t,e),r.translate(i.x,i.y),this},translate:function(t,e){var n=this,r=n.get("matrix");return r.translate(t,e),this},transpose:function(){this.isTransposed=!this.isTransposed},convertPoint:function(t){return t},invertPoint:function(t){return t},convert:function(t){var e=this;t=this.convertPoint(t);var n=e.trans(t.x,t.y,1);return{x:n.x,y:n.y}},invert:function(t){var e=this,n=e.reverse(t.x,t.y,1);return this.invertPoint({x:n.x,y:n.y})},trans:function(t,e,n){n=n||0;var r=this,i=r.get("matrix"),a=new s(t,e,n);return a.applyMatrix(i),a},reverse:function(t,e,n){n=n||0;var r=this,i=r.get("matrix"),a=i.getInverse(),o=new s(t,e,n);return o.applyMatrix(a),o}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(38),a=n(3),s=n(4),o=a.Vector2,u=a.Matrix3,c=a.Vector3,l=function(t){var e={};r.mix(e,l.ATTRS,t),l.superclass.constructor.call(this,e),this._init()};l.ATTRS={startAngle:-Math.PI/2,endAngle:3*Math.PI/2,inner:.5},r.extend(l,i),r.augment(l,{type:"plus",isPolar:!0,_init:function(){var t,e,n=this,r=n.get("radius"),i=n.get("inner"),a=n.get("startAngle"),s=n.get("endAngle"),o=n.get("center"),u=n.getOneBox(),c=u.maxX-u.minX,l=u.maxY-u.minY,h=Math.abs(u.minX)/c,f=Math.abs(u.minY)/l,g=n.getWidth(),p=n.getHeight();p/l>g/c?(t=g/c,e={x:o.x-(.5-h)*g,y:o.y-(.5-f)*t*l}):(t=p/l,e={x:o.x-(.5-h)*t*c,y:o.y-(.5-f)*p}),r=r?r>0&&r<=1?t*r:r>0&&r<=t?r:t:t;var v={start:a,end:s},d={start:i*r,end:r};n.set("x",v),n.set("y",d),n.set("radius",r),n.set("circleCentre",e),n.set("center",e)},getCenter:function(){return this.get("circleCentre")},getOneBox:function(){for(var t=this,e=t.get("startAngle"),n=t.get("endAngle"),r=[0,Math.cos(e),Math.cos(n)],i=[0,Math.sin(e),Math.sin(n)],a=5*-Math.PI/2;a<3*Math.PI/2;a+=Math.PI/2)e<=a&&a<=n&&(r.push(Math.cos(a)),i.push(Math.sin(a)));return{minX:Math.min.apply(Math,r),maxX:Math.max.apply(Math,r),minY:Math.min.apply(Math,i),maxY:Math.max.apply(Math,i)}},getRadius:function(){return this.get("radius")},convertPoint:function(t){var e=this,n=e.getCenter(),r=e.isTransposed?t.y:t.x,i=e.isTransposed?t.x:t.y;return r=e.convertDim(r,"x"),i=e.convertDim(i,"y"),{x:n.x+Math.cos(r)*i,y:n.y+Math.sin(r)*i}},invertPoint:function(t){var e=this,n=e.getCenter(),r=new o(t.x-n.x,t.y-n.y),i=e.get("x"),a=new u;a.rotate(i.start);var l=new c(1,0,0);l.applyMatrix(a),l=new o(l.x,l.y);var h=l.angleTo(r,i.end<i.start);s.equal(h,2*Math.PI)&&(h=0);var f=r.length(),g=h/(i.end-i.start);g=i.end-i.start>0?g:-g;var p=e.invertDim(f,"y"),v={};return v.x=e.isTransposed?p:g,v.y=e.isTransposed?g:p,v}}),t.exports=l},function(t,e,n){var r=n(160);t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(2),a=function(t){r.mix(this,t)};r.augment(a,{dims:[],margin:0,defs:{},facetTitle:{titleOffset:25,colDimTitle:{title:{"font-size":16,"text-anchor":"middle",fill:"#444"}},colTitle:{title:{"font-size":14,"text-anchor":"middle",fill:"#444"}},rowTitle:{title:{"font-size":14,"text-anchor":"middle",rotate:90,fill:"#444"}},rowDimTitle:{title:{"font-size":16,"text-anchor":"middle",rotate:90,fill:"#444"}}},plotRange:null,getDimValues:function(t,e){var n=this,r=n.defs[t],a=[];return a=r&&r.values?r.values:i.values(e,t)},getFilter:function(t){var e=this.defs,n=function(n){var i=!0;return r.each(t,function(t){var a=t.dim,s=t.value,o=t.values,u=!0;!r.isNull(s)&&a&&(u=e[a]&&e[a].group?e[a].group(n)===r.indexOf(o,s):n[a]===s||n[a]===r.indexOf(o,s)),i=i&&u}),i};return n},drawTitles:function(t,e){var n=this,i=n.dims;r.each(t,function(t){n.drawFacetTitle("col",t,e)}),n.drawDimTitle("col",i[0],e)},generateFacets:function(){},drawFacetTitle:function(t,e,n){var i=this,a=i.facetTitle,s=a.titleOffset,o="row"===t?a.rowTitle:a.colTitle,u=e.region,c=u.start,l=u.end,h="row"===t?"y":"x",f="row"===t?"x":"y",g={};g[h]=(l[h]-c[h])/2+c[h],g[f]=l[f];var p="x"===h?-1:1,v=r.mix({text:e[h+"Value"]},o.title);v[h]=g[h],v[f]=g[f]+s*p,n.addShape("Text",{attrs:v})},drawDimTitle:function(t,e,n){if(!r.isNull(e)){var i=this,a=i.plotRange,s=i.defs,o="row"===t?"y":"x",u=i.facetTitle,c=u.titleOffset,l="x"===o?u.colDimTitle:u.rowDimTitle,h=s[e]&&s[e].alias||e,f={};f="x"===o?{y:a.tl.y+(c+40)*-1,x:(a.tr.x-a.tl.x)/2+a.tl.x}:{x:a.tr.x+(c+40),y:(a.br.y-a.tr.y)/2+a.tr.y},h=r.mix({text:h,x:f.x,y:f.y},l.title),n.addShape("Text",{attrs:h})}}}),t.exports=a},function(t,e,n){"use strict";function r(t,e){if(a.isNumeric(t)&&a.isNumeric(e))return s.number(t,e);if(a.isString(t)&&a.isString(e)){
	var n=new u(t),r=new u(e);if(n.getType()&&r.getType())return o.color(n,r)}}function i(t,e){if(a.isNumeric(t)&&a.isNumeric(e))return s.unNumber(t,e);if(a.isString(t)&&a.isString(e)){var n=new u(t),r=new u(e);if(n.getType()&&r.getType())return o.unColor(n,r)}}var a=n(1),s=n(182),o=n(179),u=n(37);t.exports={singular:r,unSingular:i}},function(t,e,n){"use strict";var r=n(44),i=n(1),a=n(36),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,r),i.augment(s,{type:"linear",isLinear:!0,min:null,max:null,nice:!1,tickCount:5,tickInterval:null,init:function(){var t=this;if(t.ticks){var e=t.ticks,n=t.translate(e[0]),r=t.translate(e[e.length-1]);(i.isNull(t.min)||t.min>n)&&(t.min=n),(i.isNull(t.max)||t.max<r)&&(t.max=r)}else t.min=t.translate(t.min),t.max=t.translate(t.max),t.initTicks()},calculateTicks:function(){var t=this,e=t.min,n=t.max,r=t.tickCount,i=t.tickInterval,s=a.caculate({min:e,max:n,minCount:r,maxCount:r,interval:i});return s.ticks},initTicks:function(){var t=this,e=t.calculateTicks();if(t.nice)t.ticks=e,t.min=e[0],t.max=e[e.length-1];else{var n=[];i.each(e,function(e){e>=t.min&&e<=t.max&&n.push(e)}),t.ticks=n}},scale:function(t){if(null===t||void 0===t)return NaN;var e=this.max,n=this.min;if(e===n)return 0;var r=(t-n)/(e-n),i=this.rangeMin(),a=this.rangeMax();return i+r*(a-i)},invert:function(t){var e=(t-this.rangeMin())/(this.rangeMax()-this.rangeMin());return this.min+e*(this.max-this.min)}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=function(t){r.mix(this,t),this.init()};r.augment(i,{formatter:null,range:[0,1],ticks:null,init:function(){},getTicks:function(){var t=this,e=t.ticks,n=[];return r.each(e,function(e){var i;i=r.isObject(e)?e:{text:t.getText(e),value:t.scale(e)},n.push(i)}),n},getText:function(t){var e=this.formatter;return t=e?e(t):t,!r.isNull(t)&&t.toString||(t=""),t.toString()},rangeMin:function(){return this.range[0]},rangeMax:function(){var t=this.range;return t[t.length-1]},invert:function(){},translate:function(t){return t},scale:function(){},clone:function(){var t=this,e=t.constructor,n={};return r.each(t,function(e,r){n[r]=t[r]}),new e(n)},change:function(t){return this.ticks=null,r.mix(this,t),this.init(),this}}),t.exports=i},function(t,e,n){"use strict";var r=n(1),i=n(34),a=n(2),s=function(t){s.superclass.constructor.call(this,t),this.colRange={},this.binWidth||(this.binWidth=.03)};r.extend(s,i),r.augment(s,{type:"bin",binWidth:.03,colRange:{},binDims:null,setRange:function(t,e){this.colRange[t]=e},getStatDims:function(){return this.getDims()},getBinDims:function(){var t=this.binDims||this.getDims(),e=[];return r.each(t,function(t){t.indexOf("..")===-1&&e.push(t)}),e},getBinWidth:function(){return this.binWidth||.03},getCenterValue:function(t,e,n){var r,i=this.getBinWidth(),a=(t-n)/(e-n);return 1===a&&(a-=i/4),r=(e-n)*(Math.floor(a/i)*i+i/2)+n},toBin:function(t){for(var e=this,n=e.getBinDims(),r=0;r<n.length;r++){var i=n[r],a=t[i],s=e.getDimRange(i);t[i]=e.getCenterValue(a,s.max,s.min)}},getDimRange:function(t){var e=this,n=e.cacheRange;return n[t]||{min:0,max:0}},preExecute:function(t){var e=this,n=a.merge.apply(null,t),i=e.getStatDims(),s=e.colRange,o={};r.each(i,function(t){if(s[t])o[t]=s[t];else{var e=a.range(n,t);o[t]={min:e[0],max:e[1]}}}),e.cacheRange=o},execFrame:function(t){var e=this,n=t.toJSON();return r.each(n,function(t){e.toBin(t)}),new a(n)},getRegion:function(){return[{x:0,y:0}]}}),t.exports=s},function(t,e){"use strict";var n="#4E7CCC",r='"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\u5fae\u8f6f\u96c5\u9ed1", SimSun, "sans-serif"',i={defaultColor:n,plotCfg:{margin:[20,80,60,80]},facetCfg:{type:"rect",margin:10,facetTitle:{titleOffset:16,colDimTitle:{title:{fontSize:14,textAlign:"center",fill:"#999"}},colTitle:{title:{fontSize:12,textAlign:"center",fill:"#999"}},rowTitle:{title:{fontSize:12,textAlign:"center",rotate:90,fill:"#999"}},rowDimTitle:{title:{fontSize:12,textAlign:"center",rotate:90,fill:"#999"}}}},binWidth:.03,fontFamily:r,colors:{"default":["#4E7CCC","#36B3C3","#4ECDA5","#94E08A","#E2F194","#EDCC72","#F8AB60","#F9815C","#EB4456","#C82B3D"],intervalStack:["#4E7CCC","#36B3C3","#4ECDA5","#94E08A","#E2F194","#EDCC72","#F8AB60","#F9815C","#EB4456","#C82B3D"]},shapes:{point:["hollowCircle","hollowSquare","hollowDiamond","hollowBowtie","hollowTriangle","hollowHexagon","cross","tick","plus","hyphen","line"],line:["line","dash","dot"],area:["area"]},hues:["red","yellow","green","blue","orange","purple","pink","brown","white","gray","black"],axis:{top:{position:"top",titleOffset:30,title:{fontSize:12,fill:"#999"},labels:{label:{fill:"#404040",fontSize:12}},tickLine:{lineWidth:1,stroke:"#ccc",value:5}},bottom:{position:"bottom",titleOffset:45,labelOffset:20,title:{fontSize:12,textAlign:"center",fill:"#999"},labels:{label:{fill:"#404040",fontSize:12}},line:{lineWidth:1,stroke:"#ccc"},tickLine:{lineWidth:1,stroke:"#ccc",value:5}},left:{position:"left",titleOffset:60,labelOffset:13,title:{fontSize:12,fill:"#999"},labels:{label:{fill:"#404040"}},line:{lineWidth:1,stroke:"#ccc"},tickLine:{lineWidth:1,stroke:"#ccc",value:5},grid:{line:{stroke:"#d9d9d9",lineWidth:1,lineDash:[2,2]}}},right:{position:"right",titleOffset:60,labelOffset:13,title:{fontSize:12,fill:"#999"},labels:{label:{fill:"#404040"}},line:{lineWidth:1,stroke:"#ccc"},tickLine:{lineWidth:1,stroke:"#ccc",value:5}},circle:{labelOffset:5,line:{lineWidth:1,stroke:"#ccc"},grid:{line:{stroke:"#d9d9d9",lineWidth:1,lineDash:[1,3]}},labels:{label:{fill:"#404040"}}},gauge:{grid:null,labelOffset:5,tickLine:{lineWidth:1,value:-20,stroke:"#ccc"},subTick:5,labels:{label:{fill:"#404040"}}},clock:{grid:null,labelOffset:5,tickLine:{lineWidth:1,value:-20,stroke:"#C0D0E0"},subTick:5,labels:{label:{fill:"#404040"}}},radius:{titleOffset:45,labels:{label:{fill:"#404040"}},line:{lineWidth:1,stroke:"#ccc"},grid:{line:{stroke:"#d9d9d9",lineWidth:1,lineDash:[2,2]},type:"circle"}}},labels:{offset:14,label:{fill:"#666",fontSize:12}},treemapLabels:{offset:10,label:{fill:"#fff",fontSize:14,textBaseline:"top",fontStyle:"bold"}},innerLabels:{label:{fill:"#fff",fontSize:12}},thetaLabels:{labelLine:{lineWidth:1},labelHeight:14,offset:30},legend:{right:{position:"right",back:null,spacingX:10,spacingY:12,markerAlign:"center",wordSpaceing:12},left:{position:"left",back:null,spacingX:10,spacingY:12,markerAlign:"center",wordSpaceing:12},top:{position:"top",title:null,back:null,spacingX:16,spacingY:10,markerAlign:"center",wordSpaceing:12},bottom:{position:"bottom",title:null,back:null,spacingX:16,spacingY:10,markerAlign:"center",wordSpaceing:12},size:{width:20,height:156}},tooltip:{crosshairs:!1,offset:15,crossLine:{stroke:"#666"},wordSpaceing:6,markerCfg:{symbol:"circle",radius:3}},activeShape:{point:{radius:5,fillOpacity:.7},hollowPoint:{lineWidth:2,radius:4},interval:{fillOpacity:.7},hollowInterval:{lineWidth:2},area:{fillOpacity:.85},hollowArea:{lineWidth:2},line:{lineWidth:2},polygon:{fillOpacity:.75}},shape:{point:{lineWidth:1,fill:n,radius:4},hollowPoint:{fill:"#fff",lineWidth:1,stroke:n,radius:3},interval:{lineWidth:0,fill:n,fillOpacity:.85},pie:{lineWidth:1,stroke:"#fff"},hollowInterval:{fill:"#fff",stroke:n,fillOpacity:0,lineWidth:1},area:{lineWidth:0,fill:n,fillOpacity:.6},polygon:{lineWidth:0,fill:n,fillOpacity:1},hollowPolygon:{fill:"#fff",stroke:n,fillOpacity:0,lineWidth:1},hollowArea:{fill:"#fff",stroke:n,fillOpacity:0,lineWidth:1},line:{stroke:n,lineWidth:1,fill:null}},guide:{text:{fill:"#666",fontSize:12},line:{stroke:n,lineDash:[0,2,2]},rect:{lineWidth:0,fill:n,fillOpacity:.1},tag:{line:{stroke:n,lineDash:[0,2,2]},text:{fill:"#666",fontSize:12,textAlign:"center"},rect:{lineWidth:0,fill:n,fillOpacity:.1}}},tooltipMarker:{fill:"#fff",symbol:"circle",lineWidth:2,stroke:n,radius:4}};t.exports=i},function(t,e,n){var r=n(1),i=n(12),a=n(66),s=i.GroupBase,o=a.ShowLabels,u="x-chart-axis",c=n(131),l=function(t){l.superclass.constructor.call(this,t)};l.CFG={zIndex:4,ticks:null,line:null,tickLine:null,subTick:null,grid:null,labels:{label:{},autoRotate:!0},title:{},_title:{textBaseline:"middle"},autoPaint:!0,labelOffset:10,titleOffset:20,animate:!1,formatter:null,firstTick:!0},r.mixin(l,[o]),r.extend(l,s),r.augment(l,{_initCfg:function(){this.deepSet("title")},_beforeRenderUI:function(){l.superclass._beforeRenderUI.call(this);var t=this.get("labelOffset");0===t&&this.set("labelOffset",.001)},_renderUI:function(){l.superclass._renderUI.call(this);var t=this.get("labels");t&&this.renderLabels(),this.get("autoPaint")&&this.paint(),this.get("title")&&this.renderTitle(),this.sort()},_parseTicks:function(t){t=t||[];for(var e=t.length,n=0;n<e;n++){var i=t[n];r.isObject(i)||(t[n]=this.parseTick(i,n,e))}return this.set("ticks",t),t},_addTickItem:function(t,e,n){var r=this.get("tickItems"),i={x1:e.x,y1:e.y},a=this.getTickEnd(e,n,t);i.x2=a.x,i.y2=a.y,r||(r=[],this.set("tickItems",r)),r.push(i)},_formatPoint:function(t){var e=this.get("formatter");return e&&(t=e.call(this,t)),t},_renderLines:function(){var t,e=this.get("line");if(e){t=this.getLinePath(),e=r.mix({path:t},e);var n=this.addShape("Path",{elCls:u+"-line",attrs:e});this.set("lineShape",n)}},_processTicks:function(){var t=this,e=t.get("labels"),n=t.get("subTick"),i=t.get("tickLine"),a=t.get("ticks");a=t._parseTicks(a),r.each(a,function(n,r){var a=t.getTickPoint(n.value,r);i&&t._addTickItem(r,a),e&&t.addLabel(t._formatPoint(n.text),a,r)}),n&&r.each(a,function(e,r){var s=r?e.value-a[r-1].value:e.value;s/=t.get("subTick");for(var o=1;o<n;o++){var u={text:"",value:r?a[r-1].value+o*s:o*s};if(i){var c=t.getTickPoint(u.value),l=parseInt(.6*i.value,10);t._addTickItem(o-1,c,l)}}})},_renderTicks:function(){var t=this,e=t.get("tickItems"),n=t.get("tickLine"),i="",a=r.mix({},n);if(e){r.each(e,function(t){var e=r.substitute("M{x1} {y1}L{x2} {y2}",t);i+=e}),delete a.value,a.path=i;var s=t.addShape("Path",{elCls:u+"-ticks",attrs:a});t.set("tickShape",s)}},_renderGrid:function(){var t=this.get("grid");if(t){r.isNull(t.animate)&&(t.animate=this.get("animate"));var e=this.addGroup(c,t);this.set("gridGroup",e)}},paint:function(){this._renderLines(),this._processTicks(),this._renderTicks(),this._renderGrid();var t=this.get("labels");t&&t.autoRotate&&this.autoRotateLabels()},parseTick:function(t,e,n){return{text:t,value:e/(n-1)}},getTextAnchor:function(t){var e,n=Math.abs(t.y/t.x);return e=n>=1?"center":t.x>0?"left":"right"},addLabel:function(t,e,n){var r,i=this.get("labelsGroup"),a={};if(i){var s=this.get("labelOffset")||10,o=this.getSideVector(s,e,n);e={x:e.x+o.x,y:e.y+o.y},a.text=t,a.x=e.x,a.y=e.y,a.textAlign=this.getTextAnchor(o),r=i.addLabel(a)}return r},getMaxLabelWidth:function(t){var e=t.get("children"),n=0;return r.each(e,function(t){var e=t.getBBBox(),r=e.width;n<r&&(n=r)}),n},remove:function(){l.superclass.remove.call(this);var t=this.get("gridGroup");t&&t.remove(),this.removeLabels()},autoRotateLabels:function(){},renderTitle:function(){},getLinePath:function(){},getTickPoint:function(){},getTickEnd:function(){},getSideVector:function(){}}),t.exports=l},function(t,e,n){"use strict";var r=n(9),i=n(12),a=i.GroupBase,s=function(t){s.superclass.constructor.call(this,t)};s.CFG={title:{},titleText:null,plotRange:null,_title:{text:" ",fill:"#333",textBaseline:"middle"},dx:0,dy:0,position:!0},r.extend(s,a),r.augment(s,{_initCfg:function(){s.superclass._initCfg.call(this),r.isNull(this.get("title"))&&this.set("titleText",null),this.deepSet("title")},_beforeRenderUI:function(){s.superclass._beforeRenderUI.call(this);var t=this.get("title");this.set("itemsGroup",this.addGroup()),this.set("titleShape",this.addShape("Text",{attrs:t}))},_renderUI:function(){s.superclass._renderUI.call(this),this._renderTitle()},_renderTitle:function(){var t=this.get("titleShape"),e=this.get("titleText");t.attr({x:0,text:e})},setPosition:function(t){t=t?t:this.get("position");var e=this.get("plotRange");if(e){var n=e.tl,r=e.br,i=this.get("dx"),a=this.get("dy"),s=this.getBBBox().width,o=0,u=0;switch(t){case"top":o=n.x,u=n.y;break;case"left":o=n.x,u=(n.y+r.y)/2;break;case"right":o=r.x-s,u=(n.y+r.y)/2;break;case"bottom":o=(n.x+r.x)/2-s/2,u=r.y}this.move(o+i,u+a),this.set("position",t)}},getCount:function(){return this.get("itemsGroup").get("children").length},getLeaveCount:function(){var t=this.get("itemsGroup"),e=t.get("children"),n=[];return n=r.filter(e,function(t){return t.get("checked")}),n.length},setItems:function(t){this.set("items",t),this.clearItems(),this._renderUI()},addItem:function(t){var e=this.get("items");e.push(t),this.clearItems(),this._renderUI()},clearItems:function(){var t=this.get("itemsGroup");t.clear()}}),t.exports=s},function(t,e,n){var r=n(139);t.exports=r},function(t,e,n){"use strict";function r(t,e){return t>e?e:t}function i(t,e){return t>e?t:e}function a(t,e){this.start=t,this.end=e,this.init()}var s=n(1);a.CFG={start:null,end:null,background:null},s.augment(a,{init:function(){var t=this,e=t.start,n=t.end,a=t.tl={};a.x=r(e.x,n.x),a.y=r(e.y,n.y);var s=t.tr={};s.x=i(e.x,n.x),s.y=r(e.y,n.y);var o=t.bl={};o.x=r(e.x,n.x),o.y=i(e.y,n.y);var u=t.br={};u.x=i(e.x,n.x),u.y=i(e.y,n.y);var c=t.cc={};c.x=(u.x-a.x)/2+a.x,c.y=(u.y-a.y)/2+a.y},reset:function(t,e){this.start=t,this.end=e,this.init()},isInRange:function(t,e){s.isObject(t)&&(e=t.y,t=t.x);var n=this,r=n.tl,i=n.br;return t>=r.x&&t<=i.x&&e>=r.y&&e<=i.y},isInVertical:function(t){s.isObject(t)&&(t=t.y);var e=this,n=e.tl,r=e.br;return t>=n.y&&t<=r.y},isInHorizontal:function(t){s.isObject(t)&&(t=t.x);var e=this,n=e.tl,r=e.br;return t>=n.x&&t<=r.x},getWidth:function(){var t=this.tl,e=this.br;return e.x-t.x},getHeight:function(){var t=this.tl,e=this.br;return e.y-t.y}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(39),a=function(t){t.inner=t.inner||0,a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{type:"polar"}),t.exports=a},function(t,e,n){var r=n(161);t.exports=r},function(t,e,n){"use strict";var r=n(1),i=Math.PI/180,a=180/Math.PI,s=function(t){r.mix(this,t)};r.augment(s,{basic:null,toRadians:function(t){return i*t},toDegrees:function(t){return t*a},project:function(t,e){return{x:t,y:e}},invert:function(t){return{x:t.x,y:t.y}}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(10),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{type:"region"}),t.exports=a},function(t,e,n){"use strict";var r=n(34),i=n(1),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,r),i.augment(s,{type:"smooth",bandWidth:.01,colRange:{},setRange:function(t,e){this.colRange[t]=e},getStatDims:function(){var t=this,e=t.getDims(),n=e.length,r=[e[n-1]];return r},execSmooth:function(t){return t},getXDim:function(){var t=this,e=t.getDims();if(e.length<2)throw"you must support the x,y dimension!!!";return e[0]},getYDim:function(){var t=this,e=t.getDims();if(e.length<2)throw"you must support the x,y dimension!!!";return e[1]},getZDim:function(){var t=this,e=t.getDims();if(e.length<3)throw"you must support the x,y,z dimension!!!";return e[2]},getData:function(t){var e=[],n=this.dims;return t.each(function(t){var r=[];i.each(n,function(e){r.push(t[e])}),e.push(r)}),e},getDimRange:function(t,e){var n=this,r=n.colRange[e];if(!r){var i=a.range(t,e);r={min:i[0],max:i[1]}}return r},gatStep:function(t,e){var n=this,r=n.getDimRange(t,e),i=r.min,a=r.max,s=n.bandWidth,o=(a-i)*s;return o},getInterArray:function(t,e){for(var n=this,r=n.gatStep(t,e),i=n.getDimRange(t,e),a=i.min,s=i.max,o=[],u=a;u<=s;u+=r)o.push(u);return o},execFrame:function(t){var e=this,n=e.getXDim(),r=e.getYDim();t=a.sort(t,n);var s=e.getData(t),o=e.getInterArray(t,n),u=e.execSmooth(s,o,t),c=t.rowObject(0),l=[];return i.each(u,function(t){var e=i.mix({},c);e[n]=t[0],e[r]=t[1],l.push(e)}),new a(l)}}),t.exports=s},function(t,e,n){"use strict";function r(t,e,n,r){return{x:Math.cos(r)*n+t,y:Math.sin(r)*n+e}}function i(t,e,n,r){if(r){if(t<e)var i=e-t,a=2*Math.PI-n+t;else if(t>n)var i=2*Math.PI-t+e,a=t-n}else var i=t-e,a=n-t;return i>a?n:e}function a(t,e,n,r){var a=0;return n-e>=2*Math.PI&&(a=2*Math.PI),e=l.mod(e,2*Math.PI),n=l.mod(n,2*Math.PI)+a,t=l.mod(t,2*Math.PI),r?e>=n?t>n&&t<e?t:i(t,n,e,!0):t<e||t>n?t:i(t,e,n):e<=n?e<t&&t<n?t:i(t,e,n,!0):t>e||t<n?t:i(t,n,e)}function s(t,e,n,r,i,s,o,u,l){var h=new c(o,u),f=new c(t,e),g=new c(1,0),p=c.sub(h,f),v=g.angleTo(p);v=a(v,r,i,s);var d=new c(n*Math.cos(v)+t,n*Math.sin(v)+e);l&&(l.x=d.x,l.y=d.y);var x=h.distanceTo(d);return x}function o(t,e,n,i,s,o){var u=0,c=Math.PI/2,l=Math.PI,f=3*Math.PI/2,g=[],p=a(u,i,s,o);p===u&&g.push(r(t,e,n,u)),p=a(c,i,s,o),p===c&&g.push(r(t,e,n,c)),p=a(l,i,s,o),p===l&&g.push(r(t,e,n,l)),p=a(f,i,s,o),p===f&&g.push(r(t,e,n,f)),g.push(r(t,e,n,i)),g.push(r(t,e,n,s));var v=1/0,d=-(1/0),x=1/0,m=-(1/0);return h.each(g,function(t){v>t.x&&(v=t.x),d<t.x&&(d=t.x),x>t.y&&(x=t.y),m<t.y&&(m=t.y)}),{minX:v,minY:x,maxX:d,maxY:m}}var u=n(3),c=u.Vector2,l=n(4),h=n(1);t.exports={nearAngle:a,projectPoint:function(t,e,n,r,i,a,o,u){var c={};return s(t,e,n,r,i,a,o,u,c),c},pointDistance:s,box:o}},function(t,e,n){"use strict";function r(t,e,n,r,i){var a=1-i;return a*a*(a*r+3*i*n)+i*i*(i*t+3*a*e)}function i(t,e,n,r,i){var a=1-i;return 3*(((e-t)*a+2*(n-e)*i)*a+(r-n)*i*i)}function a(t,e,n,i,a,s,o,c,l,h,f){for(var g,p=.005,v=1/0,d=1e-4,x=new u(l,h),m=0;m<1;m+=.05){var y=new u(r(t,n,a,o,m),r(e,i,s,c,m)),_=y.distanceToSquared(x);_<v&&(g=m,v=_)}for(var v=1/0,S=0;S<32&&!(p<d);S++){var w=g-p,b=g+p,y=new u(r(t,n,a,o,w),r(e,i,s,c,w)),_=y.distanceToSquared(x);if(w>=0&&_<v)g=w,v=_;else{var M=new u(r(t,n,a,o,b),r(e,i,s,c,b)),A=M.distanceToSquared(x);b<=1&&A<v?(g=b,v=A):p*=.5}}return f&&(f.x=r(t,n,a,o,g),f.y=r(e,i,s,c,g)),Math.sqrt(v)}function s(t,e,n,r){var i=3*t-9*e+9*n-3*r,a=6*e-12*n+6*r,s=3*n-3*r,o=[];if(c.equal(i,0)){if(!c.equal(a,0)){var u=-s/a;u>=0&&u<=1&&o.push(u)}}else{var l=a*a-4*i*s;if(c.equal(l,0))o.push(-a/(2*i));else if(l>0){var h=Math.sqrt(l),u=(-a+h)/(2*i),f=(-a-h)/(2*i);u>=0&&u<=1&&o.push(u),f>=0&&f<=1&&o.push(f)}}return o}var o=n(3),u=o.Vector2,c=n(4);t.exports={at:r,derivativeAt:i,projectPoint:function(t,e,n,r,i,s,o,u,c,l){var h={};return a(t,e,n,r,i,s,o,u,c,l,h),h},pointDistance:a,extrema:s}},function(t,e,n){"use strict";function r(t,e,n,r){var i=1-r;return i*(i*t+2*r*e)+r*r*n}function i(t,e,n,i,a,s,o,c,l){for(var h,f=.005,g=1/0,p=1e-4,v=new u(o,c),d=0;d<1;d+=.05){var x=new u(r(t,n,a,d),r(e,i,s,d)),m=x.distanceToSquared(v);m<g&&(h=d,g=m)}for(var g=1/0,y=0;y<32&&!(f<p);y++){var _=h-f,S=h+f,x=new u(r(t,n,a,_),r(e,i,s,_)),m=x.distanceToSquared(v);if(_>=0&&m<g)h=_,g=m;else{var w=new u(r(t,n,a,S),r(e,i,s,S)),b=w.distanceToSquared(v);S<=1&&b<g?(h=S,g=b):f*=.5}}return l&&(l.x=r(t,n,a,h),l.y=r(e,i,s,h)),Math.sqrt(g)}function a(t,e,n){var r=t+n-2*e;if(o.equal(r,0))return[.5];var i=(t-e)/r;return i<=1&&i>=0?[i]:[]}var s=n(3),o=n(4),u=s.Vector2;t.exports={at:r,projectPoint:function(t,e,n,r,a,s,o,u){var c={};return i(t,e,n,r,a,s,o,u,c),c},pointDistance:i,extrema:a}},function(t,e,n){"use strict";var r=n(1),i={splitPoints:function(t){var e=[],n=t.x,i=t.y;return i=r.isArray(i)?i:[i],r.each(i,function(t,i){var a={x:r.isArray(n)?n[i]:n,y:t};e.push(a)}),e}};t.exports=i},[332,100,61],function(t,e){"use strict";function n(){var t=document.createElement("i");return t.title="Web Colour Picker",t.style.display="none",document.body.appendChild(t),t}var r=/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;t.exports={toRGB:function(){var t;return document.body&&(t=n()),function(e){t||(t=n()),t.style.color=e;var i=document.defaultView.getComputedStyle(t,"").getPropertyValue("color"),a=r.exec(i);return a.shift(),this.arr2rgb(a)}}(),toHex:function(t){return t=Math.round(t),t=t.toString(16),1===t.length&&(t="0"+t),t},hsl2Rgb:function(t){var e=t[0],n=t[1],r=t[2],i={};if(0===n)i.r=i.g=i.b=r;else{var a=function(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t},s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;i.r=a(o,s,e+1/3),i.g=a(o,s,e),i.b=a(o,s,e-1/3)}return i.r=Math.min(Math.round(255*i.r),255),i.g=Math.min(Math.round(255*i.g),255),i.b=Math.min(Math.round(255*i.b),255),"#"+this.toHex(i.r)+this.toHex(i.g)+this.toHex(i.b)},rgb2hsl:function(t){var e,n,r,i=this.rgb2arr(t),a=i[0]/255,s=i[1]/255,o=i[2]/255,u=Math.min(a,s,o),c=Math.max(a,s,o),l=c-u;return c==u?e=0:a==c?e=(s-o)/l:s==c?e=2+(o-a)/l:o==c&&(e=4+(a-s)/l),e=Math.min(60*e,360),e<0&&(e+=360),r=(u+c)/2,n=c==u?0:r<=.5?l/(c+u):l/(2-c-u),[e/360,n,r]},arr2rgb:function(t){return"#"+this.toHex(t[0])+this.toHex(t[1])+this.toHex(t[2])},rgb2arr:function(t){var e=[];return e.push(parseInt(t.substr(1,2),16)),e.push(parseInt(t.substr(3,2),16)),e.push(parseInt(t.substr(5,2),16)),e}}},function(t,e,n){"use strict";var r=n(16),i=n(1),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{getEndAttrs:function(){var t=this.get("rect"),e={width:t.width,height:t.height};return e},getTarget:function(){var t=this.get("group"),e=t.getParent(),n=e.addShape("Rect");return t.attr("clip",n),n}}),t.exports=a},function(t,e,n){"use strict";var r=n(29),i=n(23),a=i.Group,s=function(t){s.superclass.constructor.call(this,t),this._beforeRenderUI(),this._renderUI(),this._bindUI()};s.CFG={},r.extend(s,a),r.augment(s,{_beforeRenderUI:function(){this._initCfg(),this._multiRatioCfg()},_renderUI:function(){},_multiRatioCfg:function(){},_initCfg:function(){},_bindUI:function(){}}),t.exports=s},function(t,e,n){t.exports={GMixin:n(127),GroupBase:n(63),GroupMixin:n(128)}},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t)}var i=n(47),a=n(9),s="x-chart-axis",o=n(3),u=o.Vector2,c=n(4);r.CFG={zIndex:4,x:null,y:null,elCls:s,line:{lineWidth:1,stroke:"#C0D0E0"},tickLine:{lineWidth:1,stroke:"#C0D0E0",value:5},isVertical:!1,start:null,end:null},a.extend(r,i),a.augment(r,{_beforeRenderUI:function(){r.superclass._beforeRenderUI.call(this)},_getAvgLabelLength:function(t){var e=t.get("children");return e[1].attr("x")-e[0].attr("x")},getSideVector:function(t){var e=this,n=e.get("factor"),r=e.get("isVertical"),i=e.get("start"),a=e.get("end"),s=e.getAxisVector(),o=s.normalize(),u=!1;(r&&i.y<a.y||!r&&i.x>a.x)&&(u=!0);var c=o.vertical(u);return c.multiplyScaler(t*n)},getAxisVector:function(){var t=this.get("start"),e=this.get("end");return new u(e.x-t.x,e.y-t.y)},getLinePath:function(){var t=this,e=t.get("start"),n=t.get("end"),r=[];return r.push(["M",e.x,e.y]),r.push(["L",n.x,n.y]),r},getTickEnd:function(t,e){var n,r=this,i=r.get("tickLine");return e=e?e:i.value,n=r.getSideVector(e),{x:t.x+n.x,y:t.y+n.y}},getTickPoint:function(t){var e=this,n=e.get("start"),r=e.get("end"),i=r.x-n.x,a=r.y-n.y;return{x:n.x+i*t,y:n.y+a*t}},renderTitle:function(){var t=this,e=t.get("title"),n=t.getTickPoint(.5),r=t.get("titleOffset"),i=t.get("labelsGroup");if(i){var o=t.getMaxLabelWidth(i),l=t.get("labelOffset")||10;o+l+20<r&&(r=o+l+20)}var h=a.mix({},e);if(e.text){var f=t.getSideVector(r),g={x:n.x+f.x,y:n.y+f.y},p=t.getAxisVector(),v=0;if(!c.equal(p.y,0)){var d=new u(1,0),x=new u(p.x,p.y);v=x.angleTo(d,!0)}h.rotate=v*(180/Math.PI),h.x=g.x,h.y=g.y,t.addShape("Text",{elCls:s+"-title",attrs:h})}},autoRotateLabels:function(){var t=this,e=t.get("labelsGroup"),n=t.get("title");if(e){var r,i,s=t.get("labelOffset")||10,o=s,u=t.get("titleOffset"),l=t.getAxisVector();if(c.equal(l.x,0)&&n.text)i=t.getMaxLabelWidth(e),i+s>u-o&&(r=Math.acos((u-o)/(i+s))*-1);else if(c.equal(l.y,0)&&e.getCount()>1){var h=Math.abs(t._getAvgLabelLength(e));i=t.getMaxLabelWidth(e),i>h&&(r=Math.atan2(1.5*s,h))}if(r){var f=t.get("factor");a.each(e.get("children"),function(t){t.rotateAtStart(180*r/Math.PI),c.equal(l.y,0)&&(f>0?t.attr("textAlign","left"):t.attr("textAlign","right"))})}}}}),t.exports=r},function(t,e,n){var r=n(67);r.ShowLabels=n(135),t.exports=r},function(t,e,n){"use strict";var r=n(12),i=r.GroupBase,a=n(1),s=function(t){s.superclass.constructor.call(this,t)};s.CFG={zIndex:6,items:null,label:null,_label:{fontSize:12,textBaseline:"middle"},renderer:null,custom:!1,animate:!1,html:'<div class="g-labels" style="position:absolute;top:0;left:0;"></div>',itemTpl:'<div class="g-label" style="position:absolute;">{text}</div>',duration:400},a.extend(s,i),a.augment(s,{_initCfg:function(){s.superclass._initCfg.call(this),this.deepSet("label")},_renderUI:function(){s.superclass._renderUI.call(this),this._drawLabels()},_drawLabels:function(){var t=this,e=t.get("items");a.each(e,function(e,n){t._addLabel(e,n)})},_addLabel:function(t,e){var n=this._getLabelCfg(t,e);return this._createText(n)},_getLabelCfg:function(t,e){var n=this.get("label")||{},r=this.get("renderer");if(!a.isObject(t)){var i=t;t={},t.text=i}r&&(t.text=r(t.text,t,e)),a.isNull(t.text)&&(t.text=""),t.text=t.text.toString();var s=a.mix({},t,n,{x:(t.x||0)+(n.x||0),y:(t.y||0)+(n.y||0)});return s},_createText:function(t){var e=this,n=e.get("custom"),r=e.get("customDiv");if(!n)return this.addShape("Text",{attrs:t});if(!r){var i=e.get("html"),s=e.get("canvas").get("el").parentNode;r=a.createDom(i),s.style.position="relative",s.appendChild(r),e.set("customDiv",r)}var o=e._createDom(t);r.appendChild(o),e._setCustomPosition(t,o)},_setCustomPosition:function(t,e){var n=t.textAlign||"left",r=t.y,i=t.x,s=a.getWidth(e),o=a.getHeight(e);r-=o/2,"middle"===n?i-=s/2:"end"===n&&(i-=s),e.style.top=parseInt(r,10)+"px",e.style.left=parseInt(i,10)+"px"},_createDom:function(t){var e=this,n=e.get("itemTpl"),r=a.substitute(n,t),i=a.createDom(r);return i},getLabels:function(){var t=this,e=t.get("customDiv");return e?a.toArray(e.childNodes):t.get("children")},addLabel:function(t){var e=this.get("items"),n=e.length;return e.push(t),this._addLabel(t,n)},changeLabel:function(t,e){var n,r,i=this,s=i.get("custom");if(n=a.indexOf(i.get("children"),t),r=i._getLabelCfg(e,n),t)if(s){var o=i._createDom(r);t.innerHTML=o.innerHTML,i._setCustomPosition(r,t)}else if(t.attr("text",r.text),t.attr("x")!==r.x||t.attr("y")!==r.y){var u=t.get("attrs").rotate;u&&t.rotateAtStart(-u),t.attr(r),u&&t.rotateAtStart(u)}},clear:function(){var t=this,e=t.get("customDiv");e&&(e.innerHTML=""),s.superclass.clear.call(t)},setItems:function(t){var e=this;e.clear(),e.set("items",t),e._drawLabels()}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(12),a=n(50),s=i.GroupBase,o=function(t){o.superclass.constructor.call(this,t)};o.CFG={type:"plotBack",margin:null,border:null,plotRange:null,background:null},r.extend(o,s),r.augment(o,{_beforeRenderUI:function(){this._calculateRange()},_renderUI:function(){this._renderBorder(),this._renderBackground()},_renderBorder:function(){var t,e=this,n=e.get("border"),i=e.get("canvas"),a=e.get("borderShape");if(n){var s=e.get("width")||i.get("width"),o=e.get("height")||i.get("height");a?a.attr({x:0,y:0,width:s,height:o}):(t=r.mix({x:0,y:0,width:s,height:o},n),a=this.addShape("Rect",{attrs:t}),this.set("borderShape",a))}},_renderBackground:function(){var t,e,n,i,a=this,s=a.get("background"),o=a.get("plotRange"),u=a.get("backShape");s&&(t=o.getWidth(),e=o.getHeight(),n=o.tl,i={x:n.x,y:n.y,width:t,height:e},u?u.attr(i):(s.image?(i.img=s.image,u=a.addShape("Image",{attrs:i})):(r.mix(i,s),u=a.addShape("Rect",{attrs:i})),a.set("backShape",u)))},_calculateRange:function(){var t,e,n=this,i=n.get("margin"),s=n.get("canvas"),o=n.get("width")||s.get("width"),u=n.get("height")||s.get("height"),c=n.get("plotRange"),l=0,h=0,f=0,g=0;r.isNumber(i)&&(l=h=f=g=i),r.isArray(i)&&(l=i[0],f=r.isNull(i[1])?i[0]:i[1],g=r.isNull(i[2])?i[0]:i[2],h=r.isNull(i[3])?f:i[3]),t={x:h,y:u-g},e={x:o-f,y:l},c?c.reset(t,e):(c=new a(t,e),n.set("plotRange",c))},repaint:function(){return this._calculateRange(),this._renderBorder(),this._renderBackground(),this}}),t.exports=o},function(t,e,n){var r=n(142);t.exports=r},function(t,e,n){"use strict";var r=n(9),i=n(28),a=i.G,s=a.Group,o=function(t){o.superclass.constructor.call(this,t),this._beforeRenderUI(),this._renderUI(),this._bindUI()};o.CFG={},r.extend(o,s),r.augment(o,{_beforeRenderUI:function(){this._initCfg()},_renderUI:function(){},_initCfg:function(){},_bindUI:function(){}}),t.exports=o},function(t,e,n){"use strict";var r=n(38),i=n(72),a=n(51),s=n(158),o=n(157),u=n(39),c=n(159),l=n(154),h=n(155),f=n(156);r.Cartesian=i,r.Rect=i,r.Polar=a,r.Theta=s,r.Rho=o,r.Plus=u,r.TriAngle=c,r.Clock=l,r.Gauge=h,r.Map=f,t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(38),a=function(t){var e={};r.mix(e,a.ATTRS,t),a.superclass.constructor.call(this,e),this._init()};a.ATTRS={start:{x:0,y:0},end:{x:0,y:0}},r.extend(a,i),r.augment(a,{type:"cartesian",isRect:!0,_init:function(){var t=this,e=t.get("start"),n=t.get("end"),r={start:e.x,end:n.x},i={start:e.y,end:n.y};t.set("x",r),t.set("y",i)},convertPoint:function(t){var e=this,n=e.isTransposed?t.y:t.x,r=e.isTransposed?t.x:t.y;return{x:this.convertDim(n,"x"),y:this.convertDim(r,"y")}},invertPoint:function(t){var e=this,n=this.invertDim(t.x,"x"),r=this.invertDim(t.y,"y"),i={};return i.x=e.isTransposed?r:n,i.y=e.isTransposed?n:r,i}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(74),a=n(2),s=n(30),o=function(t){o.superclass.constructor.call(this,t)};r.extend(o,i),r.augment(o,{dims:[],cols:5,rows:null,drawTitles:function(t,e){var n=this,i=n.dims;r.each(t,function(t){n.drawFacetTitle("col",t,e)}),n.drawDimTitle("col",i[0],e)},getRegion:function(t,e,n,r){var i=this,a=i.plotRange,s=i.margin,o=a.tl,u=a.br,c=(u.x-o.x)/e,l=(u.y-o.y)/t,h={x:o.x+c*n,y:o.y+l*(r+1)-s},f={x:h.x+c-s,y:h.y-l+s};return{start:h,end:f}},generateFacets:function(t){var e=this,n=e.dims,i=n[0];if(!i)throw new Error("Please specify for the field for facet!");var o=e.getDimValues(i,t),u=o.length,c=e.cols,l=parseInt((u+c-1)/c,10),h=[],f=0;return r.each(o,function(n,r){var g=parseInt(r/c,10),p=r%c,v=[{dim:i,value:n,values:o}],d=e.getFilter(v),x=a.filter(t,d),m=new s({type:e.type,count:u,xValue:n,xDim:i,yValue:n,yDim:i,colIndex:p,rowIndex:g,cols:c,rows:l,frame:x,region:e.getRegion(l,c,p,g),index:f++});h.push(m)}),h}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(2),a=n(41),s=n(30),o=function(t){o.superclass.constructor.call(this,t)};r.extend(o,a),r.augment(o,{dims:[],defs:{},type:"rect",plotRange:null,drawTitles:function(t,e){if(!(t.length<=1)){var n=this,i=t[0];r.each(t,function(t){t.cols>0&&t.rowIndex===t.rows-1&&n.drawFacetTitle("col",t,e),t.rows>0&&t.colIndex===t.cols-1&&n.drawFacetTitle("row",t,e)}),i&&(i.cols>1&&n.drawDimTitle("col",i.xDim,e),i.rows>1&&n.drawDimTitle("row",i.yDim,e))}},getRegion:function(t,e,n,r){var i=this,a=i.plotRange,s=1===t&&1===e?0:i.margin,o=a.bl,u=a.tr,c=(u.x-o.x)/e,l=(u.y-o.y)/t,h={x:o.x+c*n,y:o.y+l*r-s},f={x:h.x+c-s,y:h.y+l+s};return{start:h,end:f}},generateFacets:function(t){var e=this,n=e.dims,a=[],o=1,u=1,c=n[0],l=n[1],h=[""],f=[""];c&&(h=e.getDimValues(c,t),u=h.length),l&&(f=e.getDimValues(l,t),o=f.length);var g=0;return r.each(h,function(n,p){r.each(f,function(r,v){var d=[{dim:c,value:n,values:h},{dim:l,value:r,values:f}],x=e.getFilter(d),m=i.filter(t,x),y=new s({type:e.type,xValue:n,yValue:r,xDim:c,yDim:l,colIndex:p,rowIndex:v,cols:u,rows:o,frame:m,region:e.getRegion(o,u,p,v),index:g++});a.push(y)})}),a}}),t.exports=o},function(t,e,n){var r=n(31);n(76),t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(77),a=n(31);r.mix(a,{values:function(t,e){var n=[],r={},a=t.colArray(e);a=i.formatArray(a);for(var s=0,o=a.length;s<o;s++){var u=a[s];r[u]||void 0===u||(r[u]=!0,n.push(u))}return n},group:function(t,e){if(!e)return[t];var n=a.groupToMap(t,e),r=[];for(var i in n)n.hasOwnProperty(i)&&r.push(n[i]);return r},groupToMap:function(t,e){var n=t.colNames(),i={};if(!e)return{0:t};if(!r.isFunction(e)){var s=r.isArray(e)?e:e.replace(/\s+/g,"").split("*");e=function(t){for(var e="",n=0,r=s.length;n<r;n++)e+=t[s[n]].toString();return e}}t.each(function(t){var n=e(t);i[n]?i[n].push(t):i[n]=[t]});for(var o in i)i.hasOwnProperty(o)&&(i[o]=new a(i[o],{names:n.slice(0)}));return i},merge:function(){for(var t=r.toArray(arguments),e=t[0],n=e.colNames(),i=e.colCount(),s=[],o=0;o<i;o++){s[o]=[];for(var u=0;u<t.length;u++){var c=t[u].colArray(o);s[o]=s[o].concat(c)}}return new a(s,{names:n})},sort:function(t,e){var n=t.toJSON();return n.sort(function(t,n){return t[e]-n[e];
	}),new a(n,{names:t.colNames()})}}),t.exports=a},function(t,e,n){"use strict";var r=n(1);t.exports={filterNull:function(t){var e=[];return r.each(t,function(t){r.isNull(t)||e.push(t)}),e},mixIf:function(t,e,n){r.each(n,function(n){t[n]=e[n]})},formatArray:function(t){var e=[];return r.each(t,function(t){r.isArray(t)?e=e.concat(t):e.push(t)}),e}}},function(t,e){var n={uniform:function(t){return Math.abs(t)<1?.5:0},triangular:function(t){return Math.abs(t)<1?1-Math.abs(t):0},epanechnikov:function(t){return Math.abs(t)<1?.75*(1-t*t):0},quartic:function(t){return Math.abs(t)<1?.9375*Math.pow(1-t*t,2):0},triweight:function(t){return Math.abs(t)<1?35/32*Math.pow(1-t*t,3):0},tricube:function(t){return Math.abs(t)<1?70/81*Math.pow(1-Math.pow(Math.abs(t),3),3):0},gaussian:function(t){return Math.abs(t)<3?1/Math.sqrt(2*Math.PI)*Math.exp(-.5*t*t):0},cosine:function(t){return Math.abs(t)<1?Math.PI/4*Math.cos(Math.PI/2*t):0}};t.exports=n},function(t,e,n){var r=n(1),i=n(44);i.Linear=n(43),i.linear=function(t){return new i.Linear(t)},i.Cat=n(33),i.cat=function(t){return new i.Cat(t)},i.Pow=n(210),i.pow=function(t){return new i.Pow(t)},i.Log=n(208),i.log=function(t){return new i.Log(t)},i.Identity=n(207),i.I=function(t){return new i.Identity(t)},i.Time=n(212),i.time=function(t){return new i.Time(t)},i.NumberCat=n(209),i.numberCat=function(t){return new i.NumberCat(t)},i.TimeCat=n(211),i.timeCat=function(t){return new i.TimeCat(t)},i.Condition=n(205),i.condition=function(t){return new i.Condition(t)},i.Group=n(206),i.group=function(t){return new i.Group(t)},i.I_TYPE="identity",i.isCategory=function(t){if("cat"===t)return!0;var e=r.ucfirst(t);return!(!i[e]||!i[e].superclass||"cat"!==i[e].superclass.type)},t.exports=i},function(t,e,n){"use strict";var r=n(1),i={},a={defaultShapeType:null,getShape:function(t){var e=this,n=e[t]||e[e.defaultShapeType]||i.ShapeBase;return n._coord=e._coord,n},getShapePoints:function(t,e){var n=this.getShape(t);return n.getShapePoints(e)},drawShape:function(t,e,n){var r=this.getShape(t);return r.drawShape(e,n)}},s={_coord:null,drawShape:function(){},getShapePoints:function(){}};i.registGeom=function(t,e){var n=r.ucfirst(t),s=r.mix({},a,e);return i[n]=s,s.className=n,s},i.registShape=function(t,e,n){var a=r.ucfirst(t),s=i[a],o=s.getShape(),u=r.mix({},o,n);return s[e]=u,u},i.getShape=function(t){var e=this;return t=t||"point",t=r.ucfirst(t),e[t]||i.ShapeBase},i.GeomShape=a,i.ShapeBase=s,t.exports=i},function(t,e,n){"use strict";var r=n(1),i=n(18),a=n(2),s="..x",o="..y",u="_value",c="_level",l=function(t){l.superclass.constructor.call(this,t)};r.extend(l,i),r.augment(l,{type:"tree",levels:0,totalValue:0,initDims:function(t){t.unshift(o),t.unshift(s)},getValueField:function(){var t=this.getDims();return t[3]||u},getChildrenField:function(){var t=this.getDims();return t[2]},exec:function(t){var e=this,n=[],r=a.merge.apply(null,t);return n.push(e.execFrame(r)),n},_traverseNodes:function(t,e){var n,i=this;n=e?e[c]+1:0;var a=i.getChildrenField(),s=i.getValueField();r.each(t,function(t){t[c]=n,t.parent=e;var r=t[a];r?(i._traverseNodes(t[a],t),s===u&&(t[s]=i.getTotalValue(r))):(s===u&&(t[s]=1),n+1>i.levels&&(i.levels=n+1))})},getNodeValue:function(t){var e=this,n=e.getValueField();return t[n]},getNodeRange:function(t,e,n){var r,i=this,a=t[c],s=i.levels,o=e.indexOf(t),u=t.parent,l=0,h=1,f=0;if(u?(r=i.getNodeValue(u),h=n.end.x-n.start.x,f=n.start.x):r=i.getTotalValue(e),o>0){var g=e.slice(0,o);l=i.getTotalValue(g)}var p=i.getNodeValue(t),v={start:{x:l/r*h+f,y:a/s},end:{x:(l+p)/r*h+f,y:(a+1)/s}};return v},getTotalValue:function(t){var e=this,n=e.getValueField(),i=0;return r.each(t,function(t){i+=t[n]}),i},getStatObject:function(t,e){var n=r.mix({},t);return n[s]=(e.end.x+e.start.x)/2,n[o]=(e.end.y+e.start.y)/2,n},_extractData:function(t,e,n){var i=this,a=i.getChildrenField();r.each(t,function(r){var s=i.getNodeRange(r,t,n),o=i.getStatObject(r,s);e.push(o),r[a]&&i._extractData(r[a],e,s)})},execFrame:function(t){var e=this,n=t.toJSON(),r=[];e._traverseNodes(n),e._extractData(n,r,0);var t=new a(r);return t}}),t.exports=l},function(t,e,n){"use strict";var r=n(1),i=n(45),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,i),r.augment(s,{fractions:10,execFrame:function(t){var e=this,n=t.toJSON();r.each(n,function(t){e.toBin(t)});var i=new a(n);return e.execQuantile(i)},getSplitArray:function(){for(var t=this,e=t.fractions,n=[],r=1/e,i=0;i<=1;i+=r)n.push(i);return n},execQuantile:function(t){var e=this,n=[],i=e.getDims(),s=i[i.length-1],o=i.slice(0,i.length-1),u=a.group(t,o),c=e.getSplitArray();return r.each(u,function(t){var e=t.rowObject(0);e[s]=a.quantile(t,s,c),n.push(e)}),new a(n)}}),t.exports=s},function(t,e,n){"use strict";var r=n(34),i=n(1),a=n(2),s="..density",o=function(t){o.superclass.constructor.call(this,t)};i.extend(o,r),i.augment(o,{type:"density",bandWidth:.01,colRange:{},initDims:function(t){t.push(s)},execFrame:function(t){return t},getWindowWidth:function(t,e){var n=a.max(t,e),r=a.min(t,e),i=(n-r)*this.bandWidth;return i},getCoordinate:function(t,e,n){for(var r=this,i=r.getDimRange(t,e),a=i.max,s=i.min,o=[],u=s;u<=a;u+=n)o.push(u);return o},getDimRange:function(t,e){var n=this,r=n.colRange[e];if(!r){var i=a.range(t,e);r={min:i[0],max:i[1]}}return r},setRange:function(t,e){this.colRange[t]=e}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(2);t.exports={exec:function(t){var e=this;e.preExecute(t),this.stat&&(t=this.stat.exec(t));var n=[],a=i.merge.apply(null,t),s=e.getGroupCondition(),o=i.groupToMap(a,s);if(t.length>1)r.each(t,function(t){var r=e.execFrame(t,o);n.push(r)});else{var u=e.execFrame(t[0]);n.push(u)}return n},execFrame:function(t,e){var n=this,a=n.getGroupCondition(),s=i.groupToMap(t,a),o=[],u=n.getStatDims()[0];return r.each(s,function(r,i){var a=e?e[i]:t,s=n.transform(r,u,a);o.push(s)}),i.merge.apply(null,o)}}},function(t,e,n){"use strict";function r(t,e){t.sort(function(t,n){return t[e]-n[e]})}function i(t,e){var n=0;return a.each(t,function(t){n+=t[e]}),n}var a=n(1),s=function(t){return t},o=function(t){a.mix(this,t),this.rect=this.rect||{x:0,y:0,dx:1,dy:1},this.init()};a.augment(o,{nodes:null,rect:null,valueField:"value",childrenField:"children",init:function(){var t=this,e=t.nodes,n=t.rect,s=t.valueField;r(e,s),a.each(e,function(e){t._traverse(e)});var o=i(e,s);t.processNodes(e,n,o)},_traverse:function(t,e){var n=this;e=e||0,t.depth=e;var i=n.childrenField;t.parent||(t.parent=null);var s=t[i];a.isArray(s)&&(r(s,n.valueField),a.each(s,function(r){r.parent=t,n._traverse(r,e+1)}))},getNodes:function(){return this.nodes},changeNodes:function(t){return this.nodes=t,this.init(),this},processNodes:function(){},pad:function(t){var e={x:t.x,y:t.y,dx:t.dx,dy:t.dy};return e},position:function(t,e,n,r){var i,a=-1,o=t.length,u=n.x,c=n.y,l=e?s(t.area/e):0;if(e===n.dx){for((r||l>n.dy)&&(l=n.dy);++a<o;)i=t[a],i.x=u,i.y=c,i.dy=l,u+=i.dx=Math.min(n.x+n.dx-u,l?s(i.area/l):0);i.z=!0,i.dx+=n.x+n.dx-u,n.y+=l,n.dy-=l}else{for((r||l>n.dx)&&(l=n.dx);++a<o;)i=t[a],i.x=u,i.y=c,i.dx=l,c+=i.dy=Math.min(n.y+n.dy-c,l?s(i.area/l):0);i.z=!1,i.dy+=n.y+n.dy-c,n.x+=l,n.dx-=l}},scale:function(t,e){for(var n,r,i=-1,a=t.length,s=this.valueField;++i<a;)r=(n=t[i])[s]*(e<0?0:e),n.area=isNaN(r)||r<=0?0:r}}),t.exports=o},function(t,e,n){"use strict";function r(t){if(!t.__attrs&&t!==c){var e=t.superclass.constructor;e&&!e.__attrs&&r(e),t.__attrs={},i.mix(!0,t.__attrs,e.__attrs),i.mix(!0,t.__attrs,t.ATTRS)}}var i=n(6),a=n(13),s=n(264),o=n(270),u=n(269),c=function(t){this.__cfg={};var e=this.getDefaultCfg();i.mix(this.__cfg,c.CFG,e,t),this.__cfg.uuid=i.guid(a.prefix),r(this.constructor),this.initAttrs(this.__cfg.attrs),this.initTransform(),this.initEventDispatcher(),this.init()};c.CFG={id:null,zIndex:0,canvas:null,parent:null,capture:!0,context:null,visible:!0,destroyed:!1},i.augment(c,s,o,u,{init:function(){},getDefaultCfg:function(){return{}},set:function(t,e){var n=this,r="__set"+i.ucfirst(t);return n[r]&&(e=n[r](e)),n.__cfg[t]=e,this},get:function(t){return this.__cfg[t]},beforeDraw:function(){},draw:function(){var t=this,e=t.get("context"),n=t.__attrs.clip;t.beforeDraw(),t.get("visible")&&(e.save(),n&&(e.save(),n.resetTransform(),n.createPath(),e.restore(),e.clip()),t.resetAttrs(),t.resetTransform(),t.drawInner(),e.restore())},drawInner:function(){},show:function(){return this.set("visible",!0),this},hide:function(){return this.set("visible",!1),this},remove:function(t){var e=this;if(void 0===t&&(t=!0),e.get("parent")){var n=e.get("parent"),r=n.get("children");i.remove(r,e),e.set("parent",null)}return t&&e.destroy(),e},destroy:function(){var t=this,e=t.get("destroyed");if(!e)return t.__cfg={},t.__attrs=null,t.__listeners=null,t.__m=null,t.set("destroyed",!0),t},__setZIndex:function(t){var e=this;return this.__cfg.zIndex=t,i.notNull(e.get("parent"))&&e.get("parent").sort(),t},__setAttrs:function(t){var e=this;return e.attr(t),t},clone:function(){return i.clone(this)},getBBox:function(){return{minX:0,maxX:0,minY:0,maxY:0}}}),t.exports=c},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t),this.set("children",[])}var i=n(6),a=n(86),s=(n(7),n(3)),o=s.Vector3;i.extend(r,a),i.augment(r,{isGroup:!0,canFill:!0,canStroke:!0,remove:function(t,e){var n=this;if(arguments.length>=2)n.contain(t)&&t.remove(e);else{if(1===arguments.length){if(!i.isBoolean(t))return n.contain(t)&&t.remove(!0),n;e=t}0===arguments.length&&(e=!0),r.superclass.remove.call(n,e)}return n},add:function(t){var e=this,n=e.get("children");if(i.isArray(t))i.each(t,function(t){t.get("parent")&&t.get("parent").remove(t,!1),e.__setEvn(t)}),n.push.apply(n,t);else{var r=t;r.get("parent")&&r.get("parent").remove(r,!1),e.__setEvn(r),n.push(r)}return e},contain:function(t){for(var e=this,n=e.get("children"),r=0,i=n.length;r<i;r++)if(n[r]===t)return!0;return!1},__setEvn:function(t){var e=this;t.set("parent",e),t.set("context",e.get("context"));var n=t.__attrs.clip;n&&(n.set("parent",e),n.set("context",e.get("context"))),t.set("canvas",e.get("canvas")),i.each(t.get("children"),function(e){t.__setEvn(e)})},getBBox:function(){var t=this,e=1/0,n=-(1/0),r=1/0,a=-(1/0),s=t.get("children");return i.each(s,function(t){if(t.get("visible")){var i=t.getBBox("box");if(!i)return!0;var s=new o(i.minX,i.minY,1),u=new o(i.minX,i.maxY,1),c=new o(i.maxX,i.minY,1),l=new o(i.maxX,i.maxY,1);t.apply(s),t.apply(u),t.apply(c),t.apply(l);var h=Math.min(s.x,u.x,c.x,l.x),f=Math.max(s.x,u.x,c.x,l.x),g=Math.min(s.y,u.y,c.y,l.y),p=Math.max(s.y,u.y,c.y,l.y);h<e&&(e=h),f>n&&(n=f),g<r&&(r=g),p>a&&(a=p)}}),{minX:e,minY:r,maxX:n,maxY:a}},drawInner:function(){var t=this,e=t.get("children");return i.each(e,function(t){t.draw()}),t},getCount:function(){var t=this;return t.get("children").length},sort:function(){var t=this,e=t.get("children");return e.sort(function(t,e){return t.get("zIndex")-e.get("zIndex")}),t},find:function(t){var e=this;return e.findBy(function(e){return e.get("id")===t})},findBy:function(t){var e=this,n=e.get("children"),r=null;return i.each(n,function(e){if(t(e)?r=e:e.findBy&&(r=e.findBy(t)),r)return!1}),r},getShape:function(t,e){function n(){for(var n=s.length-1;n>=0;n--){var i=s[n];if(i.get("visible")&&i.get("capture")&&(i.isGroup?r=i.getShape(t,e):i.isHit(t,e)&&(r=i)),r)break}}var r,i=this,a=i.__attrs.clip,s=i.get("children");return a?a.inside(t,e)&&n():n(),r},clear:function(){for(var t=this,e=t.get("children");0!==e.length;)e[e.length-1].remove();return t},destroy:function(){var t=this;t.get("destroyed")||(t.clear(),r.superclass.destroy.call(t))}}),t.exports=r},function(t,e,n){"use strict";function r(t,e,n){var r=g.exec(t),i=c.mod(c.degreeToRad(parseFloat(r[1])),2*Math.PI),a=r[2],o=e.getBBox();if(0<=i&&i<.5*Math.PI)var u={x:o.minX,y:o.minY},l={x:o.maxX,y:o.maxY};else if(.5*Math.PI<=i&&i<Math.PI)var u={x:o.maxX,y:o.minY},l={x:o.minX,y:o.maxY};else if(Math.PI<=i&&i<1.5*Math.PI)var u={x:o.maxX,y:o.maxY},l={x:o.minX,y:o.minY};else var u={x:o.minX,y:o.maxY},l={x:o.maxX,y:o.minY};var h=Math.tan(i),f=h*h,p=(l.x-u.x+h*(l.y-u.y))/(f+1)+u.x,v=h*(l.x-u.x+h*(l.y-u.y))/(f+1)+u.y,d=e.get("context"),x=d.createLinearGradient(u.x,u.y,p,v);return s(a,x,n),x}function i(t,e,n){var r=p.exec(t),i=parseFloat(r[1]),a=parseFloat(r[2]),o=parseFloat(r[3]),u=r[4],c=e.getBBox(),l=e.get("context"),h=c.maxX-c.minX,f=c.maxY-c.minY,g=Math.sqrt(h*h+f*f)/2,v=l.createRadialGradient(c.minX+h*i,c.minY+f*a,o,c.minX+h/2,c.minY+f/2,g);return s(u,v,n),v}function a(t,e){var n=v.exec(t),r=n[1],i=n[2];switch(r){case"a":r="repeat";break;case"x":r="repeat-x";break;case"y":r="repeat-y";break;case"n":r="no-repeat";break;default:r="no-repeat"}var a=document.getElementById(i),s=e.get("context"),o=s.createPattern(a,r);return o}function s(t,e,n){var r=t.match(d);u.each(r,function(t){t=t.split(":");var r=o(t[1],n);e.addColorStop(t[0],r)})}function o(t,e){if(void 0===e)return t;t=new l(t),t.multiplyA(e);var n=t.getType();return"hsl"===n?t.getHSLStyle():"rgb"===n?t.getRGBStyle():void 0}var u=n(6),c=n(4),l=n(37),h=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,f=/[^\s\,]+/gi,g=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,p=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,v=/^p\s*([axyn])\s+(.*)/i,d=/[\d.]+:(#[^\s]+|[^\)]+\))/gi,x={parsePath:function(t){return t=t||[],u.isArray(t)?t:u.isString(t)?(t=t.match(h),u.each(t,function(e,n){if(e=e.match(f),e[0].length>1){var r=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=r}u.each(e,function(t,n){isNaN(t)||(e[n]=+t)}),t[n]=e}),t):void 0},parseStyle:function(t,e,n){if(u.isString(t))return g.test(t)?r(t,e,n):p.test(t)?i(t,e,n):v.test(t)?a(t,e):o(t,n)}};t.exports=x},function(t,e,n){"use strict";var r=n(3),i=r.Vector2;t.exports={at:function(t,e,n){return(e-t)*n+t},pointDistance:function(t,e,n,r,a,s){var o=new i(n-t,r-e);if(o.isZero())return NaN;var u=o.vertical();u.normalize();var c=new i(a-t,s-e);return Math.abs(c.dot(u))},box:function(t,e,n,r,i){var a=i/2,s=Math.min(t,n),o=Math.max(t,n),u=Math.min(e,r),c=Math.max(e,r);return{minX:s-a,minY:u-a,maxX:o+a,maxY:c+a}}}},function(t,e,n){"use strict";var r=n(1),i=n(75);t.exports={processFrames:function(t){var e=this,n=[];return r.each(t,function(t){n.push(e.sortFrame(t))}),n},sortFrame:function(t){var e=this.getXDim();return i.sort(t,e)}}},function(t,e,n){"use strict";var r=n(1);t.exports={splitData:function(t){if(!t.length)return[];var e,n=[],i=[],a=this.getYDim();return r.each(t,function(t){e=t._origin?t._origin[a]:t[a],r.isArray(e)&&r.isNull(e[0])||r.isNull(e)?(n.push(i),i=[]):i.push(t)}),n.push(i),n}}},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t)}var i=n(1),a=n(19),s=n(91);i.extend(r,a),i.mixin(r,[s]),r.ATTRS={type:"path",shapeType:"line"},i.augment(r,{drawFrame:function(t){var e,n,r,a=this,s=t.toJSON(),o=this.splitData(s),u=this.get("container"),c=this.get("shapeObj"),l=s[0],h=this.getDrawCfg(l),f=l.points.length;i.each(o,function(t){for(var i=0;i<f;i++){e=[];for(var s=0;s<t.length;s++)r=t[s],e.push(r.points[i]);if(0===e.length)return;h.points=e,n=a.getDrawShape(h.shape),c.drawShape(n,h,u)}})}}),t.exports=r},function(t,e,n){"use strict";var r=n(293),i=n(292),a=n(298),s=n(299),o=n(297),u=n(296),c=n(294),l={initEvent:function(t){var e=new c({chart:t});e.bindEvents(),t.set("eventAssist",e)},initScale:function(t){var e=new a;t.set("scaleAssist",e)},initCoord:function(t){var e=new r;t.set("coordAssist",e)},initAxis:function(t){var e=new i({chart:t});t.set("axisAssist",e)},initLegend:function(t){var e=new o({chart:t});t.set("legendAssist",e)},initTooltip:function(t){var e=new s({chart:t});t.set("tooltipAssist",e)},initGuide:function(t){var e=new u;t.set("guideAssist",e)}};t.exports=l},function(t,e,n){"use strict";var r=n(1),i=n(95),a=n(20),s=function o(t){o.superclass.constructor.call(this,t)};r.extend(s,i),r.augment(s,{getPointRauis:function(t,e){return a.getPointRadius(t,e)},getCirclePoint:function(t,e,n){var r=this,i=r.get("coord"),a=i.getCenter(),s=r._isEmitLabels(),o=r.getPointRauis(i,n);if(i.isTransposed&&o>e&&!s){var u=Math.asin(e/(2*o));t+=2*u}else o+=e;return{x:a.x+o*Math.cos(t),y:a.y+o*Math.sin(t),angle:t,r:o}},getArcPoint:function(t,e){var n,i=this;return e=e||0,n=r.isArray(t.x)||r.isArray(t.y)?{x:r.isArray(t.x)?t.x[e]:t.x,y:r.isArray(t.y)?t.y[e]:t.y}:t,i.transLabelPoint(n),n},getPointAngle:function(t){var e=this,n=e.get("coord");return a.getPointAngle(n,t)},getMiddlePoint:function(t){var e=this,n=e.get("coord"),i=t.length,a={x:0,y:0};return r.each(t,function(t){a.x+=t.x,a.y+=t.y}),a.x/=i,a.y/=i,a=n.convert(a)},_isToMiddle:function(t){return t.x.length>2},getLabelPoint:function(t,e,n){var r,i=this,a=t[n],s=1;i._isToMiddle(e)?r=i.getMiddlePoint(e.points):(1===t.length&&0===n?n=1:0===n&&(s=-1),r=i.getArcPoint(e,n));var o=i.getDefaultOffset();o*=s;var u=i.getPointAngle(r),c=i.getCirclePoint(u,o,r);return c.text=a,c.angle=u,c.color=e.color,c.rotate=i.getLabelRotate(u,o,e),c},_isEmitLabels:function(){var t=this.get("labels");return t.labelEmit},getLabelRotate:function(t){var e,n=this;return e=180*t/Math.PI,e+=90,n._isEmitLabels()&&(e-=90),e&&(e>90?e-=180:e<-90&&(e+=180)),e},getLabelAlign:function(t){var e,n=this,r=n.get("coord");if(n._isEmitLabels())e=t.angle<=Math.PI/2&&t.angle>-Math.PI/2?"left":"right";else if(r.isTransposed){var i=r.getCenter(),a=n.getDefaultOffset();e=Math.abs(t.x-i.x)<1?"center":t.angle>Math.PI||t.angle<=0?a>0?"left":"right":a>0?"right":"left"}else e="center";return e}}),t.exports=s},function(t,e,n){"use strict";function r(t){var e=0;return u.each(t,function(t){e+=t}),e/t.length}var i=n(11),a=i.Components,s=a.Labels,o=i.Group,u=n(1),c=n(5),l=["line","point","path"],h="_origin",f=function g(t){g.superclass.constructor.call(this,t)};f.CFG={labels:c.labels,labelsCfg:null,coord:null,geomType:null,zIndex:6},u.extend(f,o),u.mixin(f,[s.ShowLabels]),u.augment(f,{_renderUI:function(){f.superclass._renderUI.call(this),this.initLabelsCfg(),this.renderLabels()},_getLabelValue:function(t){var e,n=this,r=t[h],i=n.get("labelsCfg"),a=i.scales,s=i.callback;if(s){var o=[];u.each(a,function(t){o.push(r[t.dim])}),e=s.apply(null,o)}else{var c=a[0];if(e=r[c.dim],u.isArray(e)){var l=[];u.each(e,function(t){l.push(c.getText(t))}),e=l}else e=c.getText(e)}return e},initLabelsCfg:function(){var t=this,e=t.getDefaultLabelCfg(),n=t.get("labelsCfg");u.mix(!0,e,n.cfg),t.set("labels",e)},getDefaultLabelCfg:function(){var t=this,e=t.get("labelsCfg").cfg,n=t.get("geomType");return"polygon"===n||e&&e.offset<0&&u.indexOf(l,n)===-1?u.mix(!0,{},c.innerLabels):this.get("labels")},getLabelsItems:function(t){var e=this,n=[],r=e.get("labels");return u.each(t,function(t){var i=e._getLabelValue(t);u.isArray(i)||(i=[i]);var a=i.length;u.each(i,function(s,o){var c=e.getLabelPoint(i,t,o);if(c){c=u.mix({},t._origin,c);var l;l=r&&r.label&&r.label.textAlign?r.label.textAlign:e.getLabelAlign(c,o,a),c.textAlign=l,n.push(c)}})}),n},adjustItems:function(t){return t},drawLines:function(){},getLabelPoint:function(t,e,n){function i(e,n){return u.isArray(e)&&(e=1===t.length?e.length<=2?e[e.length-1]:r(e):e[n]),e}var a=this,s={x:i(e.x,n),y:i(e.y,n),text:t[n]},o=a.getLabelOffset(s,n,t.length);return a.transLabelPoint(s),s.x+=o.x,s.y+=o.y,s},transLabelPoint:function(t){var e=this,n=e.get("coord"),r=n.trans(t.x,t.y,1);t.x=r.x,t.y=r.y},getOffsetVector:function(){var t,e=this,n=e.get("labels"),r=n.offset||0,i=e.get("coord");return t=i.isTransposed?i.trans(r,0):i.trans(0,r)},getDefaultOffset:function(){var t=this,e=0,n=t.get("coord"),r=t.getOffsetVector();return e=n.isTransposed?r.x:r.y},getLabelOffset:function(t,e,n){var r=this,i=r.getDefaultOffset(),a=r.get("coord"),s=a.isTransposed,o=s?"x":"y",u=s?1:-1,c={x:0,y:0};return e>0||1===n?c[o]=i*u:c[o]=i*u*-1,c},getLabelAlign:function(t,e,n){var r=this,i="center",a=r.get("coord");if(a.isTransposed){var s=r.getDefaultOffset();i=s<0?"right":0===s?"center":"left",n>1&&0===e&&("right"===i?i="left":"left"===i&&(i="right"))}return i},showLabels:function(t){var e=this,n=e.getLabelsItems(t),r=e.get("labels");n=e.adjustItems(n),e.resetLabels(n),r.labelLine&&e.drawLines(n,r.labelLine)},destroy:function(){this.removeLabels(),f.superclass.destroy.call(this)}}),t.exports=f},function(t,e,n){"use strict";var r=n(24);r.Interval=n(310),r.Schema=n(311),r.Heatmap=n(309),r.Contour=n(307),r.Edge=n(308),t.exports=r},function(t,e,n){"use strict";var r=n(5),i={getDefalutSize:function(){var t=this.getCoord(),e=this.getXScale(),n=e.values.length,i=1/n,a=1;this.isInCircle()&&"schema"!==this.get("type")?t.isTransposed&&n>1&&(a=r.widthRatio.multiplePie):a=r.widthRatio.column,i*=a;var s=this.get("adjusts");if(s&&("Dodge"===s||s.indexOf("Dodge")!==-1)){var o=this.get("frames");i/=o.length}return i}};t.exports=i},function(t,e,n){"use strict";var r=n(15);n(318),n(319),n(320),n(321),n(316),n(322),n(317),t.exports=r},function(t,e){"use strict";function n(){var t=document.createElement("i");return t.title="Web Colour Picker",t.style.display="none",document.body.appendChild(t),t}var r=/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;t.exports={toRGB:function(){var t;return document.body&&(t=n()),function(e){t||(t=n()),t.style.color=e;var i=document.defaultView.getComputedStyle(t,"").getPropertyValue("color"),a=r.exec(i);return a.shift(),this.arr2rgb(a)}}(),toHex:function(t){return t=Math.round(t),t=t.toString(16),1===t.length&&(t="0"+t),t},hsl2Rgb:function(t){var e=t[0],n=t[1],r=t[2],i={};if(0===n)i.r=i.g=i.b=r;else{var a=function(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t},s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;i.r=a(o,s,e+1/3),i.g=a(o,s,e),i.b=a(o,s,e-1/3)}return i.r=Math.min(Math.round(255*i.r),255),i.g=Math.min(Math.round(255*i.g),255),i.b=Math.min(Math.round(255*i.b),255),"#"+this.toHex(i.r)+this.toHex(i.g)+this.toHex(i.b)},rgb2hsl:function(t){var e,n,r,i=this.rgb2arr(t),a=i[0]/255,s=i[1]/255,o=i[2]/255,u=Math.min(a,s,o),c=Math.max(a,s,o),l=c-u;return c==u?e=0:a==c?e=(s-o)/l:s==c?e=2+(o-a)/l:o==c&&(e=4+(a-s)/l),e=Math.min(60*e,360),e<0&&(e+=360),r=(u+c)/2,n=c==u?0:r<=.5?l/(c+u):l/(2-c-u),[e/360,n,r]},arr2rgb:function(t){return"#"+this.toHex(t[0])+this.toHex(t[1])+this.toHex(t[2])},rgb2arr:function(t){var e=[];return e.push(parseInt(t.substr(1,2),16)),e.push(parseInt(t.substr(3,2),16)),e.push(parseInt(t.substr(5,2),16)),e}}},function(t,e,n){"use strict";function r(t,e,n,r){var i=t[r]+(e[r]-t[r])*n;return i}var i=n(61),a=n(1),s={calColor:function(t,e,n){var a,s=t.length-1,o=Math.floor(s*e),u=s*e-o,c=t[o],l=o===s?c:t[o+1];return"hsl"===n?a=i.hsl2Rgb([r(c,l,u,0),r(c,l,u,1),r(c,l,u,2)]):(a={r:r(c,l,u,0),g:r(c,l,u,1),b:r(c,l,u,2)},a="#"+i.toHex(a.r)+i.toHex(a.g)+i.toHex(a.b)),a},lightness:function(t,e){e=e||0;var n=[[e,1,.9],[e,1,.5]];return s.calColor(n,t,"hsl")},red:function(t){return s.lightness(t,0)},blue:function(t){return s.lightness(t,.66)},green:function(t){return s.lightness(t,.33)},gradient:function(t){var e=[];return a.isString(t)&&(t=t.split("-")),a.each(t,function(t){t.indexOf("#")===-1&&(t=i.toRGB(t)),e.push(i.rgb2arr(t))}),function(t){return s.calColor(e,t)}},gradientHsl:function(t){var e=[];return a.isString(t)&&(t=t.split("-")),a.each(t,function(t){t.indexOf("#")===-1&&(t=i.toRGB(t)),e.push(i.rgb2hsl(t))}),function(t){return s.calColor(e,t,"hsl")}},saturation:function(t,e){e=e||0;var n=[[e,0,.5],[e,1,.5]];return s.calColor(n,t,"hsl")},hue:function(t){var e=[[0,1,.5],[1,1,.5]];return s.calColor(e,t,"hsl")},brightness:function(t){var e=[[255,255,255],[0,0,0]];return s.calColor(e,t)},heat:function(t){var e=[[255,255,255],[255,127.5,0],[0,0,0]];return s.calColor(e,t)},rainbow:function(t){var e=[[0,255,255],[0,0,255],[0,255,0],[255,0,0]];return s.calColor(e,t)},circular:function(t){var e=[[0,0,255],[0,255,0],[255,255,0],[255,0,0],[0,0,255]];return s.calColor(e,t)},bipolar:function(t){var e=[[0,255,0],[0,0,0],[255,0,0]];return s.calColor(e,t)}};t.exports=s},function(t,e,n){var r=n(102);r.Group=n(103),t.exports=r},function(t,e,n){"use strict";var r=n(1),i=function(){};i.ATTRS={actived:!1},r.augment(i,{isActived:function(){return this.get("actived")},setActived:function(){this.setActiveStatus(!0),this.set("actived",!0)},setActiveStatus:function(){},clearActived:function(){this.setActiveStatus(!1),this.set("actived",!1),this.clearActivedItem&&this.clearActivedItem()}}),t.exports=i},function(t,e,n){"use strict";var r=n(1),i=function(){};i.ATTRS={multipleActive:!1},r.augment(i,{isItemActived:function(t){return t.isActived()},getActiveItems:function(){return this.get("children")},setItemActived:function(t,e){e?t.setActived():t.clearActived()},onActived:function(t){this.fire("itemactived",{item:t}),this.fireUpGroup&&this.fireUpGroup("actived",t)},onUnActived:function(t){this.fire("itemunactived",{item:t}),this.fireUpGroup&&this.fireUpGroup("unactived",t)},setActivedItem:function(t){var e=this,n=e.get("multipleActive");n||e.clearActivedItem(),t&&!e.isItemActived(t)&&(e.setItemActived(t,!0),e.onActived(t))},getActived:function(){var t=this,e=t.getActiveItems(),n=null;return r.each(e,function(e){if(t.isItemActived(e))return n=e,!1}),n},getAllActived:function(){var t=this,e=t.getActiveItems(),n=[];return r.each(e,function(e){t.isItemActived(e)&&n.push(e)}),n},clearAllActived:function(){var t=this,e=t.getAllActived();return r.each(e,function(e){t.setItemActived(e,!1),t.onUnActived(e)}),this},clearActivedItem:function(t){var e=this;return t=t||e.getActived(),t&&(e.setItemActived(t,!1),e.onUnActived(t)),this}}),t.exports=i},function(t,e,n){var r=n(26);r.Dodge=n(105),r.Jitter=n(106),r.Stack=n(107),r.Symmetric=n(108),t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(26),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,i),r.augment(s,{marginRatio:.5,dodgeRatio:.5,_getDodgeDim:function(t){var e=this,n=null;return r.each(t,function(t){if(t!==e.xDim)return n=t,!1}),n},processAdjust:function(t){var e=this,n=a.merge.apply(null,t),r=e.groupDims,i=e._getDodgeDim(r);if(i&&(t=a.group(n,i)),e.adjFrames=t,e.mergeFrame=n,t=e.adjustFrames(t,n),i){var n=a.merge.apply(null,t);t=a.group(n,r)}return e.adjFrames=null,e.mergeFrame=null,t},getDistribution:function(t){var e=this,n=e.adjFrames,i={};return r.each(n,function(e,n){var s=a.values(e,t);s.length||s.push(0),r.each(s,function(t){i[t]||(i[t]=[]),i[t].push(n)})}),i},adjustDim:function(t,e,n,i,a){var s=this,o=s.getDistribution(t),u=s.groupData(n,t);r.each(u,function(n,i){i=parseFloat(i);var u;u=1===e.length?{pre:-1,next:1}:s.getAdjustRange(t,i,e),r.each(n,function(e){var n=e[t],i=o[n],c=r.indexOf(i,a);e[t]=s.getDodgeOffset(u,c,i.length)})})},getDodgeOffset:function(t,e,n){var r,i=this,a=t.pre,s=t.next,o=s-a,u=o*i.dodgeRatio/n,c=i.marginRatio*u;return r=.5*(o-n*u-(n-1)*c)+((e+1)*u+e*c)-.5*u-.5*o,(a+s)/2+r}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(26),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{getAdjustOffset:function(t,e){var n=Math.random(),r=e-t,i=.05*r;return t+i+.9*r*n},_adjustGroup:function(t,e,n,i){var a=this,s=a.getAdjustRange(e,n,i);r.each(t,function(t){t[e]=a.getAdjustOffset(s.pre,s.next)})},adjustDim:function(t,e,n){var i=this,a=i.groupData(n,t);r.each(a,function(n,r){r=parseFloat(r),i._adjustGroup(n,t,r,e)})}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(2),a=n(26),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,a),r.augment(s,{height:null,size:10,adjustNames:["y"],processOneDimStack:function(t){for(var e=this,n=e.xDim,r=e.yDim||"y",a=e.height,s={},o=[],u=0;u<t.length;u++){for(var c=t[u].toJSON(),l=0;l<c.length;l++){var h=c[l],f=h.size||e.size,g=2*f/a,p=h[n];s[p]||(s[p]=g/2),h[r]=s[p],s[p]+=g}o.push(new i(c))}return o},processAdjust:function(t){var e=this;return t=e.yDim?e.processStack(t):e.processOneDimStack(t)},processStack:function(t){for(var e=this,n=e.xDim,a=e.yDim,s=t.length,o=[],u={positive:{},negative:{}},c=[],l=0;l<s;l++){for(var h=t[l].toJSON(),f=0;f<h.length;f++){var g=h[f],p=g[n],v=g[a]||0,d=p.toString();v=r.isArray(v)?v[1]:v;var x=v>0?"positive":"negative";u[x][d]||(u[x][d]=0),g[a]=[u[x][d],v+u[x][d]],u[x][d]+=v}o.push(h)}return r.each(o,function(t){var e=new i(t);c.push(e)}),c}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(2),a=n(26),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,a),r.augment(s,{cacheMax:null,adjustNames:["y"],_getMax:function(t){var e=this,n=e.mergeFrame,r=i.max(n,t);return r},_getXValuesMax:function(){var t=this,e=t.yDim,n=t.xDim,i={},a=t.mergeFrame;return a.each(function(t){var a=t[n],s=t[e],o=r.isArray(s)?Math.max.apply(null,s):s;i[a]=i[a]||0,i[a]<o&&(i[a]=o)}),i},processAdjust:function(t){var e=this,n=i.merge.apply(null,t);return e.mergeFrame=n,t=e._processSymmetric(t),e.mergeFrame=null,t},_processSymmetric:function(t){var e,n=this,a=n.xDim,s=n.yDim,o=n._getMax(s),u=t[0].rowObject(0),c=[];return u&&r.isArray(u[s])&&(e=n._getXValuesMax()),r.each(t,function(t){var n=t.toJSON();r.each(n,function(t){var n,i=t[s];if(r.isArray(i)){var u=t[a],c=e[u];n=(o-c)/2;var l=[];r.each(i,function(t){l.push(n+t)}),t[s]=l}else n=(o-i)/2,t[s]=[n,i+n]}),c.push(new i(n))}),c}}),t.exports=s},function(t,e,n){var r=n(112);t.exports=r},function(t,e,n){"use strict";var r=n(16),i=n(1),a=function(t){a.superclass.constructor.call(this,t)};a.ATTRS={_circle:{center:{x:0,y:0},r:0,startAngle:-Math.PI/2,endAngle:1.5*Math.PI}},i.extend(a,r),i.augment(a,{getInitAttrs:function(){var t=this.get("_circle"),e=this.getCircleInfo(),n=e.center;e=i.mix(t,e);var r={x:n.x,y:n.y,rs:0,re:e.r+100,startAngle:e.startAngle/Math.PI*180,endAngle:e.startAngle/Math.PI*180};return r},getEndAttrs:function(){var t=this.get("_circle"),e=this.getCircleInfo();e=i.mix(t,e);var n={endAngle:e.endAngle/Math.PI*180};return n},getTarget:function(){var t=this.get("group"),e=t.getParent(),n=e.addShape("Fan");return t.attr("clip",n),n}}),t.exports=a},function(t,e,n){"use strict";var r=n(16),i=n(1),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{getInitAttrs:function(){var t=this.getCircleInfo(),e=t.center,n={x:e.x,y:e.y,r:0};return n},getEndAttrs:function(){var t=this.getCircleInfo(),e={r:t.r+150};return e},getTarget:function(){var t=this.get("group"),e=t.getParent(),n=e.addShape("Circle");return t.attr("clip",n),n}}),t.exports=a},function(t,e,n){"use strict";var r=n(16),i=n(110),a=n(111),s=n(116),o=n(115),u=n(114),c=n(113),l=n(117);r.angle=i,r.circle=a,r.waveh=s,r.scaleXY=o,r.scaleY=u,r.scaleX=c,r.waves=l,t.exports=r},function(t,e,n){"use strict";var r=n(16),i=n(1),a=n(11).Matrix,s=a.Matrix3,o=i.MatrixUtil,u=function(t){u.superclass.constructor.call(this,t)};i.extend(u,r),i.augment(u,{getInitMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,.01,1,e.x-t.width/2,t.y)},getAnimMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,1,1,e.x-t.width/2,t.y)}}),t.exports=u},function(t,e,n){"use strict";var r=n(16),i=n(1),a=n(11).Matrix,s=a.Matrix3,o=i.MatrixUtil,u=function(t){u.superclass.constructor.call(this,t)};i.extend(u,r),i.augment(u,{getInitMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,1,-.01,e.x,t.y+t.height)},getAnimMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,1,1,e.x,t.y+t.height)}}),t.exports=u},function(t,e,n){"use strict";var r=n(16),i=n(1),a=n(11).Matrix,s=a.Matrix3,o=i.MatrixUtil,u=function(t){u.superclass.constructor.call(this,t)};i.extend(u,r),i.augment(u,{getInitMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,.01,.01,e.x,e.y)},getAnimMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,1,1,e.x,e.y)}}),t.exports=u},function(t,e,n){"use strict";var r=n(62),i=n(1),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{getInitAttrs:function(){var t=this.get("rect"),e={x:t.x,y:t.y,width:t.width,height:0};return e}}),t.exports=a},function(t,e,n){"use strict";var r=n(62),i=n(1),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{getInitAttrs:function(){var t=this.get("rect"),e={
	x:t.x,y:t.y,width:0,height:t.height};return e}}),t.exports=a},function(t,e,n){var r=n(21);r.Position=n(121),r.Color=n(119),r.Size=n(123),r.Shape=n(122),r.Opacity=n(120),t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(60),a=n(21),s=function(t){s.superclass.constructor.call(this,t),this.initMethod()};r.extend(s,a),r.augment(s,{type:"color",names:["color"],arr:null,method:null,methodType:null,initMethod:function(){var t,e=this.methodType;t=e&&e.indexOf("-")!==-1?i.gradient(e):i[e],this.method=t}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(21),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{type:"opacity",names:["opacity"],min:.1,max:1,arr:null}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(21),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{type:"position",names:["x","y","z"],coord:null,parseParam:function(t,e){var n;return r.isArray(t)?(n=[],r.each(t,function(t){n.push(e.scale(t))})):n=e.scale(t),n},callback:function(t,e){var n,i,a,s=this.coord;if(t||0===t||(t=.1),e||0===e||(e=.1),r.isArray(e)&&r.isArray(t)){n=[],i=[];for(var o=0,u=0;o<t.length&&u<e.length;o++,u++)a=s.convertPoint({x:t[o],y:e[u]}),n.push(a.x),i.push(a.y)}else if(r.isArray(e))i=[],r.each(e,function(e){a=s.convertPoint({x:t,y:e}),n&&n!==a.x?(r.isArray(n)||(n=[n]),n.push(a.x)):n=a.x,i.push(a.y)});else if(r.isArray(t))n=[],r.each(t,function(t){a=s.convertPoint({x:t,y:e}),i&&i!==a.y?(r.isArray(i)||(i=[i]),i.push(a.y)):i=a.y,n.push(a.x)});else{var c=s.convertPoint({x:t,y:e});n=c.x,i=c.y}return[n,i]}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(21),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{type:"shape",names:["shape"],arr:null}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(21),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{type:"size",names:["size"],arr:null}),t.exports=a},function(t,e,n){"use strict";function r(t){return null===t||void 0===t}function i(t){var e=1;if(t<1e-6)return e;for(;t>10;)e=10*e,t/=10;for(;t<1;)e/=10,t=10*t;return e}function a(t,e,n){n=n||M;var r=n!==M,a=1;t<0&&(a=-1),t*=a;var o=i(t);return a*=o,t/=o,t=r?s(n,t):e&&a>0?b.snapFloor(n,t):b.snapCeiling(n,t),t*a}function s(t,e){for(var n=e,r=e,i=e,a=1;a<t.length;a++){var s=t[a];if(s>e){n=s;break}r=s}return i=Math.abs(r-e)<Math.abs(n-e)?r:n}function o(t,e,n){var r;return r=n?Math.ceil(t/e,10):Math.floor(t/e,10),r*e}function u(t){for(var e=t[0],n=t[0],r=t.length,i=1;i<r;i++){var a=t[i];e<a&&(e=a),n>a&&(n=a)}return{max:e,min:n}}function c(t,e){var n=[];return e?S.isArray(t[0])&&S.each(t[0],function(e,r){for(var i=e,a=1;a<t.length;a++)i+=t[a][r];n.push(i)}):S.each(t,function(t){S.isArray(t)?n=n.concat(t):n.push(t)}),n}function l(t,e,n){var r=c(t,n);return e&&(r=S.map(r,e)),u(r)}function h(t){return t=new Date(t),w.getDate(t).getTime()}function f(t){t=new Date(t);var e=w.getDate(t);return e<t&&(e=w.addDay(1,e)),e.getTime()}function g(t){return new Date(t).getFullYear()}function p(t){return new Date(t,0,1).getTime()}function v(t){return new Date(t).getMonth()}function d(t,e){var n=g(t),r=g(e),i=v(t),a=v(e);return 12*(r-n)+(a-i)%12}function x(t,e){return new Date(t,e,1).getTime()}function m(t,e){return Math.ceil((e-t)/L)}function y(t,e){return Math.ceil((e-t)/D)}function _(t,e){return Math.ceil((e-t)/6e4)}var S=n(1),w=n(40),b=n(4),M=[0,1,1.5,2,2.5,3,4,5,6,8,10],A=[0,1,2,4,5,10],C=[1,2,4,6,8,12],k=5,T=7,P={};P.caculate=function(t,e){var n,i=t.min,s=t.max,u=t.data,c=t.interval,h=[],f=t.minCount||k,g=t.maxCount||T,p=(f+g)/2,v=!1;e&&"percent"===e&&(i=0,s=100,c=25);var d;if((r(i)||r(s)||r(c))&&(d=l(u,null,v),r(s)&&(s=d.max+.05*(d.max-d.min)),r(i)&&(i=d.min),s===i&&(0===i?s=1:i>0?i=0:s=0,s-i<5&&(c=1)),r(c))){var x=(s-i)/p;c=a(x,!0,A),n=parseInt((s-i)/c,10),n>g&&(n=g),n<f&&(n=f),c=a((s-i)/n,!0,A),s=o(s,c,!0),i=o(i,c),n=Math.round((s-i)/c)}r(n)&&(s=o(s,c,!0),i=o(i,c),n=Math.round((s-i)/c)),i=S.fixedBase(i,c),r(i)||h.push(i);for(var m=1;m<=n;m++)h.push(S.fixedBase(c*m+i,c));return{min:i,max:S.fixedBase(s,c),interval:c,count:n,ticks:h,info:d}},P.Time={};var I=6e4,D=36e5,L=864e5;P.Time.caculate=function(t){var e,n=t.min,i=t.max,a=t.data,s=t.interval,o=[],u={};if((r(n)||r(i)||r(s))&&(u=l(a,function(t){return S.isDate(t)&&(t=t.getTime()),S.isString(t)&&(t=t.replace(/-/gi,"/"),t=new Date(t),t=t.getTime()),t}),r(i)&&(i=u.max),r(n)&&(n=u.min),i-n>L&&(n=h(n),i=f(i)),i===n&&(i=n+L),r(s))){var c,w,M=i-n,A=L,k=365*A;s=parseInt(M/(t.maxCount||8)),c=s/k;var T=g(n);if(c>.51){w=Math.ceil(c),s=w*k;for(var P=g(i),R=T;R<=P+w;R+=w)o.push(p(R));s=null}else if(c>.0834){for(var w=g(n),B=Math.floor(c/.0834),F=v(n),O=d(n,i),R=0;R<=O+B;R+=B)o.push(x(T,R+F));s=null}else if(s>.5*A){var G=new Date(n),w=G.getFullYear(),B=G.getMonth(n),N=G.getDate(),z=Math.ceil(s/A),j=m(n,i);s=z*A;for(var R=0;R<j+z;R+=z)o.push(new Date(w,B,N+R).getTime())}else if(s>D){var G=new Date(n),w=G.getFullYear(),B=G.getMonth(n),z=G.getDate(),X=G.getHours(),Y=b.snapTo(C,Math.ceil(s/D)),W=y(n,i);s=Y*D;for(var R=0;R<=W+Y;R+=Y)o.push(new Date(w,B,z,X+R).getTime())}else if(s>I){var V=_(n,i),E=Math.ceil(s/I);s=E*I;for(var R=0;R<=V+E;R+=E)o.push(n+R*I)}else{s<1e3&&(s=1e3),n=1e3*Math.floor(n/1e3);var q=Math.ceil((i-n)/1e3),H=Math.ceil(s/1e3);s=1e3*H;for(var R=0;R<q+H;R+=H)o.push(n+1e3*R)}}if(!o.length){n=1e3*Math.floor(n/1e3),i=1e3*Math.ceil(i/1e3);for(var e=(i-n)/s,R=0;R<=e;R++)o.push(S.fixedBase(s*R+n,s))}return{max:u.max||i,min:u.min||n,interval:s,ticks:o,count:o.length}},P.Category={},P.Category.caculate=function(t){var e={},n=[],r=t.maxCount||T,i=c(t.data);if(i.length<r)n=[].concat(i);else{var a=i.length,s=parseInt(a/(r-1),10),o=i.map(function(t,e){return e%s===0?i.slice(e,e+s):null}).filter(function(t){return t});n.push(i[0]);for(var u=1;u<o.length&&u<r-1;u++)n.push(o[u][0]);n.push(i[a-1])}return e.categories=i,e.ticks=n,e},t.exports=P},function(t,e,n){"use strict";function r(t){if(!t._attrs&&t!==i){var e=t.superclass.constructor;e&&!e._attrs&&r(e),t._attrs={},a.mix(!0,t._attrs,e._attrs),a.mix(!0,t._attrs,t.ATTRS)}}var i,a=n(1);i=function(t){r(this.constructor),this._attrs={},this.events={};var e=this.getDefaultCfg();a.mix(this._attrs,e,t)},a.augment(i,{getDefaultCfg:function(){var t=this,e=t.constructor,n=e._attrs,r=a.mix(!0,{},n);return r},set:function(t,e){var n="_onRender"+a.ucfirst(t);return this[n]&&this[n](e,this._attrs[t]),this._attrs[t]=e,this},get:function(t){return this._attrs[t]},on:function(t,e){var n=this,r=n.events,i=r[t];return i||(i=r[t]=[]),i.push(e),n},fire:function(t,e){var n=this,r=n.events,i=r[t];i&&a.each(i,function(t){t(e)})},off:function(t,e){var n=this,r=n.events,i=r[t];return t?(i&&a.remove(i,e),n):(n.events={},n)},destroy:function(){var t=this,e=t.destroyed;return e?t:(t._attrs={},t.events={},void(t.destroyed=!0))}}),t.exports=i},function(t,e,n){"use strict";var r=n(29),i=n(23),a=i.Shape.superclass.constructor,s=i.Canvas,o=n(64);r.mixin(a,[o.GMixin]),r.mixin(i.Group,[o.GroupMixin]);var u=function(t){u.superclass.constructor.call(this,t)};u.CFG={width:null,height:null,widthCanvas:null,heightCanvas:null,widthStyle:null,heightStyle:null,containerDOM:null,canvasDOM:null,pixelRatio:null},r.extend(u,s),r.augment(u,{init:function(){u.superclass.constructor.superclass.init.call(this),this._setGlobalParam(),this._setDOM(),this._setInitSize(),this._setCanvas(),this._scale()},_scale:function(){var t=this.get("pixelRatio");this.scale(t,t)},_setCanvas:function(){var t=this.get("canvasDOM");this.set("el",t),this.set("context",t.getContext("2d")),this.set("canvas",this),this.__events()},_setGlobalParam:function(){var t=this.get("pixelRatio");t||this.set("pixelRatio",r.getRatio())},_setDOM:function(){this._setContainer(),this._setLayer()},_setContainer:function(){var t=this.get("containerId"),e=this.get("containerDOM");e||(e=document.getElementById(t),this.set("containerDOM",e)),r.modiCSS(e,{position:"relative"})},_setLayer:function(){var t=this.get("containerDOM"),e=r.guid("canvas_");if(t){var n=r.createDom('<canvas id="'+e+'"></canvas>');t.appendChild(n),this.set("canvasDOM",n)}},_setInitSize:function(){this.get("widthStyle")?this.changeSizeByCss(this.get("widthStyle"),this.get("heightStyle")):this.get("width")&&this.changeSize(this.get("width"),this.get("height"))},_getPx:function(t,e){var n=this.get("canvasDOM");n.style[t]=e;var i=r.getBoundingClientRect(n);return"width"===t?i.right-i.left:"height"===t?i.bottom-i.top:void 0},_reSize:function(){var t=this.get("canvasDOM"),e=this.get("widthCanvas"),n=this.get("heightCanvas"),r=this.get("widthStyle"),i=this.get("heightStyle");t.style.width=r,t.style.height=i,t.setAttribute("width",e),t.setAttribute("height",n)},getWidth:function(){var t=this.get("pixelRatio"),e=this.get("width");return e*t},getHeight:function(){var t=this.get("pixelRatio"),e=this.get("height");return e*t},changeSizeByCss:function(t,e){var n=this.get("pixelRatio"),t=this._getPx("width",t),e=this._getPx("height",e),r=t*n,i=e*n;this.set("widthStyle",t),this.set("heightStyle",e),this.set("widthCanvas",r),this.set("heightCanvas",i),this.set("width",t),this.set("height",e),this._reSize()},changeSize:function(t,e){var n=this.get("pixelRatio"),r=t*n,i=e*n;this.set("widthCanvas",r),this.set("heightCanvas",i),this.set("widthStyle",t+"px"),this.set("heightStyle",e+"px"),this.set("width",t),this.set("height",e),this._reSize()}}),t.exports=u},function(t,e,n){var r=n(29),i=(n(23),function(){});r.augment(i,{getParent:function(){return this.get("parent")||this.get("father")},getDefaultCfg:function(){r.initClassCfgs(this.constructor);var t=r.mix(!0,{},this.constructor.__cfg);return t},getBBBox:function(){var t=this.getBBox();return t?(t.x=t.minX,t.y=t.minY,t.width=t.maxX-t.minX,t.height=t.maxY-t.minY,t.centerX=t.x+t.width/2,t.centerY=t.y+t.height/2):t={x:0,y:0,centerX:0,centerY:0,width:0,height:0},t},move:function(t,e){var n=this,r=n.get("x")||0,i=n.get("y")||0;n.translate(t-r,e-i),n.set("x",t),n.set("y",e)}}),t.exports=i},function(t,e,n){var r=n(29),i=n(23),a=n(63),s=function(){};r.augment(s,{addShape:function(t,e){var n,a=this.get("canvas");return e=r.mix({},e),e?(e.type=t,e.canvas=a,e.father=this,t=r.upperFirst(t),n=new i[t](e)):n=new i[t],this.add(n),n},addGroup:function(t,e){var n,i=this.get("canvas");if(e=r.mix({},e),r.isFunction(t))e?(e.canvas=i,e.father=this,n=new t(e)):n=new t({canvas:i,father:this}),this.add(n);else if(r.isObject(t))t.canvas=i,n=new a(t),this.add(n);else{if(void 0!==t)return!1;n=new a,this.add(n)}return n},findByCFG:function(t,e){var n=this.get("children"),i=[];return r.each(n,function(n,r){n.get(t)===e&&i.push(n)}),i}}),t.exports=s},function(t,e,n){"use strict";var r=n(9),i=n(28),a=n(12),s=n(200),o=i.G,u=o.Shape.superclass.constructor;new s(o),r.mixin(u,[a.GMixin]),r.mixin(o.Group,[a.GroupMixin]),o.Marker=a.Marker;var c=function(t){c.superclass.constructor.call(this,t)};c.CFG={},r.extend(c,i),t.exports=c},function(t,e,n){"use strict";var r=n(1),i=n(47),a=n(3),s=n(4),o=a.Vector2,u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,i),u.CFG={type:"circle",tickInterval:null,startAngle:-Math.PI/2,endAngle:3*Math.PI/2,grid:{line:{lineWidth:1,stroke:"#C0D0E0"}},labelOffset:5},r.augment(u,{_beforeRenderUI:function(){var t=this;u.superclass._beforeRenderUI.call(t)},parseTick:function(t,e,n){return{text:t,value:e/n}},_getCirclePoint:function(t,e){var n=this,r=n.get("center");return e=e||n.get("radius"),{x:r.x+Math.cos(t)*e,y:r.y+Math.sin(t)*e}},getTickPoint:function(t){var e=this,n=e.get("startAngle"),r=e.get("endAngle"),i=n+(r-n)*t;return e._getCirclePoint(i)},getSideVector:function(t,e){var n=this,r=n.get("center"),i=new o(e.x-r.x,e.y-r.y);return t&&i.setLength(t),i},getSidePoint:function(t,e){var n=this,r=n.getSideVector(e,t);return{x:t.x+r.x,y:t.y+r.y}},getTickEnd:function(t,e){var n=this,r=n.get("tickLine");return e=e?e:r.value,n.getSidePoint(t,e)},getTextAnchor:function(t){var e;return s.equal(t.x,0)?e="center":t.x>0?e="left":t.x<0&&(e="right"),e},getLinePath:function(){var t=this,e=t.get("center"),n=e.x,r=e.y,i=t.get("radius"),a=i,s=t.get("startAngle"),o=t.get("endAngle"),u=t.get("inner"),c=[];if(Math.abs(o-s)===2*Math.PI)c=[["M",n,r],["m",0,-a],["a",i,a,0,1,1,0,2*a],["a",i,a,0,1,1,0,-2*a],["z"]];else{var l=t._getCirclePoint(s),h=t._getCirclePoint(o),f=Math.abs(o-s)>Math.PI?1:0,g=s>o?0:1;if(u){var p=t.getSideVector(u*i,l),v=t.getSideVector(u*i,h),d={x:p.x+n,y:p.y+r},x={x:v.x+n,y:v.y+r};c=[["M",d.x,d.y],["L",l.x,l.y],["A",i,a,0,f,g,h.x,h.y],["L",x.x,x.y],["A",i*u,a*u,0,f,Math.abs(g-1),d.x,d.y]]}else c=[["M",n,r],["L",l.x,l.y],["A",i,a,0,f,g,h.x,h.y],["L",n,r]]}return c},addLabel:function(t,e){var n=this,r=n.get("labelOffset");e=n.getSidePoint(e,r),u.superclass.addLabel.call(n,t,e)},autoRotateLabels:function(){var t=this,e=t.get("ticks"),n=t.get("labelsGroup");if(n&&e.length>12){var i=t.get("radius"),a=t.get("startAngle"),s=t.get("endAngle"),o=s-a,u=o/(e.length-1),c=Math.sin(u/2)*i*2,l=t.getMaxLabelWidth(n);r.each(n.get("children"),function(t,n){var r=e[n],i=r.value*o+a,s=i%(2*Math.PI);l<c?(s<=0&&(i+=Math.PI),s>Math.PI&&(i-=Math.PI),i-=Math.PI/2,t.attr("textAlign","center")):s>Math.PI/2?i-=Math.PI:s<Math.PI/2*-1&&(i+=Math.PI),t.rotateAtStart(180*i/Math.PI)})}}}),t.exports=u},function(t,e,n){"use strict";function r(t,e,n){var r=e.get(t);return r||(r=n,e.set(t,r)),r}function i(t,e){var n="",r=u.mix({},e);return u.each(t,function(t){u.each(t,function(t,e){var r=0===e?"M{x} {y} ":"L{x} {y} ",i=u.substitute(r,t);n+=i})}),r.path=n,r}function a(t){a.superclass.constructor.call(this,t)}var s=n(12),o=s.GroupBase,u=n(1),c="x-chart-grid";u.extend(a,o),a.CFG={zIndex:1,elCls:c,type:"line",line:null,minorLine:null,minorCount:0,renderer:null,items:null,odd:null,even:null,animate:!1,matrix:null,duration:1e3},u.augment(a,{_renderUI:function(){var t=this;a.superclass._renderUI.call(t),t._drawLines()},_drawLines:function(){var t=this,e=t.get("line"),n=t.get("items");n&&(t._precessItems(n),t._drawGridLines(n,e,c+"-line"),t.get("minorCount")&&t.drawMinorLines())},_precessItems:function(t){var e,n=this,r=n.get("minorCount"),i=n.get("renderer");u.each(t,function(t,a){i?i.call(n,t,a):r&&e&&n._addMonorItem(t,e),e&&(n.get("odd")||n.get("even"))&&n._drawOddEven(t,e,a),e=t})},change:function(t){var e=this;return e.set("items",t),e._clearPre(),e._precessItems(t),e._changeGridLines(t,c+"-line"),e._changeMinorLinses(),this},_clearPre:function(){var t,e=this;e.get("minorCount")&&e.set("minorItems",[]),t=e.findAllBy(function(t){var e=t.get("elCls");return e!==c+"-line"&&e!==c+"-minor"}),u.each(t,function(t){t.remove()})},_isVertical:function(t){return t.x1===t.x2},_drawGridLines:function(t,e,n){var r=this,i=r._linesToPath(t,e),a=r.addShape("Path",{elCls:n,attrs:i});r.set("gridLine"+n,a)},_changeGridLines:function(t,e){var n=this,r=n.get("animate"),i=n.get("gridLine"+e);if(i){var a=n._linesToPath(t,{});r?u.animPath(i,a.path,2):a?i.attr("path",a.path):i.remove()}else if(t&&t.length){var s;s=e===c+"-line"?n.get("line"):n.get("minorLine"),n._drawGridLines(t,s,e)}},_linesToPath:function(t,e){var n,r=this,a=[],s=r.get("type");return"line"===s?0!==t.length&&i(t,e):(n=u.mix({},e),u.each(t,function(t){a=a.concat(r._getMultiplePath(t,s))}),n.path=a,n)},_getMultiplePath:function(t,e){var n=t,r=[];return"polygon"===e?u.each(n,function(t,e){0===e?r.push(["M",t.x,t.y]):r.push(["L",t.x,t.y])}):u.each(n,function(t,e){var n=t.radius;0===e?r.push(["M",t.x,t.y]):r.push(["A",n,n,0,0,t.flag,t.x,t.y])}),r},_drawOddEven:function(t,e,n){var r,i,a=this,s=a.get("odd"),o=a.get("even");n%2===0?o&&(i=a._getBackItem(e,t,o),r="even"):s&&(i=a._getBackItem(e,t,s),r="odd"),i&&a.addShape("Path",{elCls:c+"-"+r,attrs:i})},_getBackItem:function(t,e,n){var r=u.substitute("M {x1} {y1} L{x2} {y2}",t);return r+=u.substitute("L{x2} {y2} L{x1} {y1}Z",e),n=u.mix({},n,{path:r})},_getMinorItem:function(t,e,n,r){var i=this,a=i._isVertical(t,e),s=a?"x":"y",o=a?"y":"x",u=e[s+"1"]-t[s+"1"],c=u/(r+1),l={};return l[s+"1"]=l[s+"2"]=(n+1)*c+t[s+"1"],l[o+"1"]=t[o+"1"],l[o+"2"]=t[o+"2"],l},_addMonorItem:function(t,e){var n=this,i=r("minorItems",n,[]),a=n.get("minorCount");if(a)for(var s=0;s<a;s++){var o=n._getMinorItem(e,t,s,a);i.push(o)}},drawMinorLines:function(){var t=this,e=t.get("minorLine"),n=t.get("minorItems");t._drawGridLines(n,e,c+"-minor")},_changeMinorLinses:function(){var t=this,e=t.get("minorItems");t._changeGridLines(e,c+"-minor")}}),t.exports=a},function(t,e,n){var r=n(65);r.Abstract=n(47),r.Circle=n(130),r.MultLine=n(133),t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(65),a=n(3),s=a.Vector2,o=function(t){o.superclass.constructor.call(this,t)};o.CFG={type:"multLine"},r.extend(o,i),r.augment(o,{_beforeRenderUI:function(){var t=this;o.superclass._beforeRenderUI.call(t)},getLinePath:function(){var t=this,e=t.get("tickPoints"),n=t.get("start"),i=t.get("end"),a=[];return a.push(["M",n.x,n.y]),r.each(e,function(t){a.push(["L",t.x,t.y])}),a.push(["L",i.x,i.y]),a},getTickPoint:function(t,e){var n=this.get("tickPoints");return n[e]},getTickEnd:function(t,e,n){var r,i=this,a=i.get("tickLine");return e=e?e:a.value,r=i.getSideVector(e,t,n),{x:t.x+r.x,y:t.y+r.y}},getSideVector:function(t,e,n){var r,i=this;if(0===n)r=i.get("start");else{var a=i.get("tickPoints");r=a[n-1]}var o=new s(e.x-r.x,e.y-r.y),u=o.normalize(),c=u.vertical(!1);return c.multiplyScaler(t)}}),t.exports=o},function(t,e,n){"use strict";t.exports={Axis:n(132),PlotBack:n(68),PlotRange:n(50),Plot:{Back:n(68),Range:n(50)},Labels:n(66),Tooltip:n(140),Li:n(49),Ul:n(69),Legend:n(138)}},function(t,e,n){"use strict";function r(t){t.remove()}var i=n(9),a=n(67),s=function(){};s.ATTRS={labels:null},i.augment(s,{renderLabels:function(){var t,e=this,n=e.get("labels");n&&(n.items||(n.items=[]),i.isNull(n.animate)&&(n.animate=e.get("animate")),t=e.addGroup(a,n),e.set("labelsGroup",t))},resetLabels:function(t){var e=this,n=e.get("labels");if(n){var a=e.get("labelsGroup"),s=a.getLabels(),o=s.length;t=t||n.items,i.each(t,function(t,n){if(n<o){var r=s[n];a.changeLabel(r,t)}else e.addLabel(t.text,t)});for(var u=o-1;u>=t.length;u--)r(s[u])}},addLabel:function(t,e){var n,r=this,i=r.get("labelsGroup"),a={};return i&&(a.text=t,a.x=e.x,a.y=e.y,a.point=e,a.textAlign=e.textAlign,e.rotate&&(a.rotate=e.rotate),n=i.addLabel(a)),n},removeLabels:function(){var t=this,e=t.get("labelsGroup");e&&e.remove(),t.set("labelsGroup",null)}}),t.exports=s},function(t,e,n){"use strict";function r(t,e){var n=null;return i.each(t,function(t){if(t.name===e.get("value"))return n=t,!1}),n}var i=n(9),a=n(49),s=n(52),o=n(48),u=function(t){u.superclass.constructor.call(this,t)};u.CFG={type:"category-legend",items:null,spacingX:5,spacingY:10,wordSpaceing:2,itemsGroup:null,layout:"horizontal",leaveChecked:!0,backPadding:[0,0,0,0],checkable:!0,itemsbeginX:0,itemsbeginY:0,unChecked:"#CCC",word:{fill:"#3c3c3c"},back:null,itemWrap:!1,maxLength:100,_back:{}},i.extend(u,o),i.augment(u,{_initCfg:function(){u.superclass._initCfg.call(this),this.deepSet("back")},_beforeRenderUI:function(){u.superclass._beforeRenderUI.call(this);var t=this.get("col"),e=this.get("items").length;this.set("_row",Math.ceil(e/t))},_renderUI:function(){u.superclass._renderUI.call(this),this._renderTitle(),this._renderItems(),this._wrapItems(),this._renderBack(),this.setPosition()},_wrapItems:function(){var t=this.get("itemWrap"),e=this.get("layout"),n=this.get("maxLength");t&&n>0&&("horizontal"===e?this._warpHorizontal():"vertical"===e&&this._warpVertical())},_warpVertical:function(){var t,e,n,r,a=this.get("itemsGroup"),s=this.get("titleShape"),o=a.get("children"),u=this.get("maxLength"),c=this.get("spacingX"),l=this.get("spacingY"),h=s.getBBBox().height+l,f=1,g=h,p=0,v=0,d=0;a.getBBBox().height>u&&i.each(o,function(i){r=i.getBBBox(),e=r.width+c,n=r.height+l,p=v,v=e>v?e:v,t=g,g+=n,g>u?(d+=p,g=n+h,f++,v=0,p=0,i.move(d,h)):i.move(d,t)})},_warpHorizontal:function(){var t,e,n,r=this.get("itemsGroup"),a=r.get("children"),s=this.get("maxLength"),o=this.get("spacingX"),u=this.get("spacingY"),c=1,l=0,h=0;r.getBBBox().width>s&&i.each(a,function(r){n=r.getBBBox(),t=n.width+o,e=n.height+u,h=l,l+=t,l>s?(l=t,c++,r.move(0,c*e)):r.move(h,c*e)})},_bindUI:function(){this._bindOverOut(),this._bindClick()},_bindClick:function(){var t=this.get("checkable");t&&this.on("click",i.wrapBehavior(this,"_onClick"))},_bindOverOut:function(){this.on("mouseenter",i.wrapBehavior(this,"_onMouseenter")),this.on("mouseleave",i.wrapBehavior(this,"_onMouseleave"))},_onClick:function(t){var e,n,i,a,o=this.get("leaveChecked"),u=this._getLi(t.currentTarget),c=this.get("items");if(u){var l=r(c,u);if(a=u.get("checked"),e=new s("itemclick",t),e.item=l,this.trigger(e),o&&a&&1===this.getLeaveCount())return;a?(i=new s("itemunchecked",t),i.item=l,this.trigger(i)):(n=new s("itemchecked",t),n.item=l,this.trigger(n))}},_onMouseenter:function(t){var e=new s("itemover",t),n=t.currentTarget,r=this._getLi(t.currentTarget),a=n.getCanvasNode();r&&(e.item=r,this.trigger(e),i.modiCSS(a,{cursor:"pointer"}))},_onMouseleave:function(t){var e=new s("itemout",t),n=this.getCanvasNode(),r=this._getLi(t.currentTarget);r&&(e.item=r,this.trigger(e),i.modiCSS(n,{cursor:"default"}))},_renderBack:function(){var t=this.get("itemsGroup"),e=this.get("backPadding"),n=this.get("back");t.renderBack(e,n)},_renderItems:function(){var t=this,e=t.get("items");i.each(e,function(e,n){t._addItem(e,n)})},_addItem:function(t){var e=this.get("itemsGroup"),n=this._getNextX(),r=this._getNextY(),i=this.get("unChecked"),s={words:[{text:t.name}]};t.symbol?s.marker={symbol:t.symbol,fill:t.checked?t.color:i}:t.marker&&(t.checked||(t.marker.fill=i,t.marker.stroke=i),s.marker=t.marker),e.addGroup(a,{value:t.name,"class":"legend-item",word:t.word,checked:t.checked,x:n,y:r,items:s})},_getNextX:function(){var t=this.get("layout"),e=this.get("spacingX"),n=this.get("itemsGroup"),r=n.get("children"),a=0;return"horizontal"===t&&i.each(r,function(t){a+=t.getBBBox().width+e}),a},_getNextY:function(){var t=this.get("spacingY"),e=this.get("layout"),n=this.get("itemsGroup"),r=this.get("titleShape"),a=n.get("children"),s=r.getBBBox().height+t;return"vertical"===e&&i.each(a,function(e){s+=e.getBBBox().height+t}),s},_getLi:function(t){var e=t.getParent();return"li"===e.get("type")&&e}}),t.exports=u},function(t,e,n){"use strict";var r=n(9),i=n(48),a=n(37),s=function(t){s.superclass.constructor.call(this,t)};s.CFG={type:"continuous-legend",items:null,layout:"vertical",width:200,height:60,attrType:null,nameGroup:null,titleOffset:30,nameOffset:10,word:{},title:{text:" "},color:"#4E7CCC",_word:{fill:"#333",textAlign:"center",textBaseline:"middle"}},r.extend(s,i),r.augment(s,{_initCfg:function(){s.superclass._initCfg.call(this),this.deepSet("word")},_beforeRenderUI:function(){s.superclass._beforeRenderUI.call(this);var t=this.addGroup();this.set("nameGroup",t)},_renderUI:function(){s.superclass._renderUI.call(this);var t=this.get("attrType");this._calStartPoint(),"color"===t?this._renderGradient():"size"===t&&this._renderTriangle()},_calStartPoint:function(){var t=this.get("titleShape"),e=t.getBBBox(),n=this.get("titleOffset"),r={x:0,y:e.height+n};this.set("startPoint",r)},_renderTriangle:function(){var t=this.get("items"),e=this.get("layout");this._renderName(t,e),this._renderTriangleShape(t,e)},_renderGradient:function(){var t=this.get("items"),e=this.get("layout");this._renderName(t,e),this._renderGradientShape(t,e)},_renderTriangleShape:function(t,e){var n=this.get("itemsGroup"),r=this.get("width"),i=this.get("height"),a=this.get("startPoint"),s=this.get("color");"vertical"===e?n.addShape("Polygon",{attrs:{points:[[a.x,a.y],[a.x+r,a.y],[a.x,a.y+i]],fill:s}}):n.addShape("Polygon",{attrs:{points:[[a.x,a.y+i],[a.x+r,a.y],[a.x+r,a.y+i]],fill:s}})},_renderGradientShape:function(t,e){var n,i=this.get("itemsGroup"),s=this.get("width"),o=this.get("height"),u="",c=this.get("startPoint");"vertical"===e?(u+="l (90) ",r.each(t,function(t){n=new a(t.color).getRGBStyle(),u+=1-t.value+":"+n+" "})):(u+="l (0) ",r.each(t,function(t){n=new a(t.color).getRGBStyle(),u+=t.value+":"+n+" "})),i.addShape("Rect",{attrs:{x:c.x,y:c.y,width:s,height:o,fill:u}})},setLayout:function(t){this.set("layout",t),this.clear(),this._renderUI()},_renderName:function(t,e){var n=this.get("nameGroup"),i=r.mix({},this.get("word")),a=this.get("nameOffset"),s=this.get("width"),o=this.get("height"),u=this.get("startPoint");r.each(t,function(c,l){0!==l&&l!==t.length-1||("vertical"===e?(a=0===l?a:-a,i=r.mix(i,{x:u.x+s/2,y:u.y+o*(1-c.value)+a,text:c.name}),n.addShape("Text",{attrs:i})):(a=1===l?a:-a,i=r.mix(i,{x:u.x+s*c.value+a,y:u.y+o/2,text:c.name}),n.addShape("Text",{attrs:i})))})},clear:function(){var t=this.get("itemsGroup"),e=this.get("nameGroup");t.clear(),e.clear()}}),t.exports=s},function(t,e,n){var r=n(48);r.Category=n(136),r.Continuous=n(137),t.exports=r},function(t,e,n){"use strict";var r=n(9),i=n(12),a=i.GroupBase,s=function(t){s.superclass.constructor.call(this,t)};s.CFG={type:"li",items:null,itemsGroup:null,word:null,marker:null,wordSpaceing:null,_marker:{fill:"red",lineWidth:4,r:2.5},_wordSpaceing:6,_word:{fill:"#fff",textBaseline:"middle"}},r.extend(s,a),r.augment(s,{_initCfg:function(){this.deepSet("word"),this.deepSet("marker"),this.deepSet("wordSpaceing"),this.deepSet("markerAlign")},_renderUI:function(){s.superclass._renderUI.call(this),this._renderItems()},_renderItems:function(){var t,e=this,n=e.getBBBox(),i=n.width,a=e.get("word"),s=e.get("wordSpaceing"),o=e.get("items"),u=e.get("marker"),c=e.get("markerAlign");o.marker&&(t=r.mix({},u,o.marker,{x:"center"===c?0:o.marker.radius,y:0}),r.mixXY(t,e),t.symbol&&e.addShape("Marker",{type:"marker",attrs:t})),r.each(o.words,function(o){n=e.getBBBox(),i=Math.abs(n.width)===1/0?0:n.width,t=r.mix({},a,o,{x:"center"===c?s:0===i?0:i+s,y:0}),r.mixXY(t,e),e.addShape("Text",{attrs:t})})}}),t.exports=s},function(t,e,n){var r=n(141);t.exports=r},function(t,e,n){"use strict";function r(t,e){return t.getElementsByClassName(e)[0]}var i=n(9),a=n(3),s=n(12),o=n(69),u=s.GroupBase,c="ac-title",l="ac-list",h=function(t){h.superclass.constructor.call(this,t)};h.CFG={zIndex:10,x:0,y:0,itemName:"tootip",items:[],ulItems:[],ul:{fill:"#fff",textAlign:"left"},title:{},name:{},value:{},crossLine:{stroke:"#999",lineWidth:1},markerCfg:null,titleText:void 0,wordSpaceing:6,padding:[10,10,10,10],crosshairs:!1,titleShape:null,ulGroup:null,crossShapeX:null,crossShapeY:null,backShape:null,plotRange:null,shared:!1,offset:10,animate:!0,duration:50,visible:!1,valueSplit:"",valueSuffix:"",custom:!1,customDiv:null,customFollow:!0,timeStamp:0,html:'<div class="ac-tooltip" style="position:absolute;visibility: hidden;"><h4 class="'+c+'"></h4><ul class="'+l+'"></ul></div>',itemTpl:'<li><span style="color:{color}">{name}</span> : {value}</li>'},i.extend(h,u),i.augment(h,{_beforeRenderUI:function(){o.superclass._beforeRenderUI.call(this);var t=this.get("ul"),e=this.get("custom"),n=this.get("crossLine"),r=this.addGroup({attrs:n}),i=this.addGroup(o,{zIndex:10,attrs:t});this.set("ulItems",[]),this.set("crossGroup",r),this.set("ulGroup",i),e&&this._setCustomDiv()},_renderUI:function(){o.superclass._renderUI.call(this);var t=this.get("custom");t?this._renderCustom():this._renderUl(),this._renderCrossLine()},_renderUl:function(){var t,e,n,r,a=this,s=[],o=a.get("ulGroup"),u=a.get("items"),c=a.get("title"),l=a.get("titleText"),h=a.get("name"),f=a.get("value"),g=a.get("valueSplit"),p=a.get("valueSuffix"),v=a.get("markerCfg");c&&s.push({words:[{text:l}],attrs:c}),i.each(u,function(t){var e=i.mix({},h,{text:t.name?t.name+":":""}),n=i.mix({},f,{text:t.value+g+p});t.marker===!0&&(t.marker="circle");var r=t.marker?{symbol:t.marker,fill:t.color}:{};s.push({color:t.color,words:[e,n],marker:i.mix(r,v)})}),o.setItems(s),r=o.get("backShape"),c&&(e=o.get("itemsGroup").getFirst(),n=e.getFirst(),a.set("titleShape",n)),t=o.get("itemsGroup").getFilterChild(e),a.set("backShape",r),a.set("ulItems",s),a.set("textGroup",t)},_renderCrossLine:function(){var t=this.get("crosshairs"),e=this.get("canvas"),n=this.get("plotRange");if(this.clearCrossGroup(),t)switch(t.type){case"x":this._renderCrossLineX(e,n);break;case"y":this._renderCrossLineY(e,n);break;case"cross":this._renderCrossLineX(e,n),this._renderCrossLineY(e,n);break;default:this._renderCrossLineY(e,n)}},_renderCrossLineY:function(t,e){var n,r,a=this.get("crosshairs");e?(n=e.bl.y,r=e.tl.y):(n=t.get("height"),r=0);var s=i.mix({x1:0,y1:n,x2:0,y2:r},this.get("crossLine"));"dash"===a.shape&&(s=i.mix(s,{lineDash:"6 3"}));var o=this._getCrossShape(s);this.set("crossShapeY",o)},_renderCrossLineX:function(t,e){var n,r,a,s,o=this.get("crosshairs");e?(n=e.bl.x,r=e.br.x):(n=t.get("width"),r=0),a=i.mix({x1:n,y1:0,x2:r,y2:0},this.get("crossLine")),"dash"===o.shape&&(a=i.mix(a,{lineDash:"6 3"})),s=this._getCrossShape(a),this.set("crossShapeX",s)},_getCrossShape:function(t){var e=this.get("crossGroup"),n=e.addShape("Line",{attrs:t});return n},clearCrossGroup:function(){var t=this.get("crossGroup");this.set("crossShapeX",void 0),this.set("crossShapeY",void 0),t.clear()},setCross:function(t){var e={};e.type=t,this.set("crosshairs",{type:t}),this._renderCrossLine()},setContent:function(t,e){var n=this._isContentChange(t,e);if(!n){var r=this.get("custom"),i=+new Date;this.set("items",e),this.set("titleText",t),this.set("timeStamp",i),r?this._renderCustom():this._renderUl()}return this},_isContentChange:function(t,e){var n=this.get("titleText"),r=this.get("items");return t===n&&r.length===e.length&&e[0].value===r[0].value},getTitle:function(){return this.get("titleShape")},setPosition:function(t,e){var n=this.get("canvas"),r=this.get("customDiv"),i=this.get("plotRange"),s=this.get("offset"),o=this.get("crossShapeX"),u=this.get("crossShapeY"),c=this.get("ulGroup"),l=c.getBBBox(),h=this.get("animate"),f=new a.Matrix3,g=!0,p=t,v=e;r&&this.get("customFollow")?t+=s:(t=t-l.width-s,e-=l.height),i&&(i.isInRange(t,e)||(i.isInVertical(e)||(e=i.tl.y),i.isInHorizontal(t)||(t=Math.max(i.tl.x,p)+s,g=!1))),this.get("x")===t&&this.get("y")===e||(u&&(g?u.move(p,0):u.move(t-s,0)),o&&o.move(0,v),f.translate(t,e),h&&this.get("visible")?c.animate({matrix:f},this.get("duration")):(c.setMatrix(f),this.get("visible")||this.show(),n.draw()),this.moveCustom(t,e,g))},_setCustomDiv:function(){var t,e,n=this,r=n.get("html"),a=n.get("canvas").get("el").parentNode;/^\#/.test(r)?(e=r.replace("#",""),t=document.getElementById(e)):t=i.createDom(r),n.set("customDiv",t),n.get("customFollow")&&(a.appendChild(t),a.style.position="relative")},_renderCustom:function(){var t=this,e=t.get("title"),n=t.get("titleText"),a=t.get("customDiv"),s=r(a,c),o=r(a,l),u=t.get("items");t._clearCustom(),s&&e&&(s.innerHTML=n),o&&(t.set("titleText",n),i.each(u,function(e,n){t.addCustomItem(e,n)}))},_clearCustom:function(){var t=this.get("customDiv"),e=r(t,c),n=r(t,l);e&&(e.innerHTML=""),n&&(n.innerHTML="")},addCustomItem:function(t){var e,n,a=this.get("customDiv"),s=r(a,l),o=this.get("itemTpl");e=i.substitute(o,t),n=i.createDom(e),s.appendChild(n)},moveCustom:function(t,e){var n=this,r=n.get("customDiv");r&&n.get("customFollow")&&(t=t,e=e,e-=i.getOuterHeight(r)/2,r.style.left=t+"px",r.style.top=e+"px")},show:function(){var t=this.get("crossShapeX"),e=this.get("crossShapeY"),n=this.get("customDiv"),r=this.get("hideHandler");r&&clearTimeout(r),h.superclass.show.call(this),n&&this.get("customFollow")&&(n.style.visibility="visible"),t&&t.show(),e&&e.show()},hide:function(){var t=this,e=t.get("customDiv"),n=t.get("crossShapeX"),r=t.get("crossShapeY"),i=t.get("canvas"),a=setTimeout(function(){e&&t.get("customFollow")&&(e.style.visibility="hidden"),t.set("hideHandler",null),t.get("destroyed")||(h.superclass.hide.call(t),i.draw())},t.get("duration"));t.set("hideHandler",a),n&&n.hide(),r&&r.hide()},remove:function(){var t=this,e=t.get("crossShapeX"),n=t.get("crossShapeY"),r=t.get("customDiv");e&&e.remove(),n&&n.remove(),h.superclass.remove.call(this),r&&r.parentNode.removeChild(r)}}),t.exports=h},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t)}var i=n(1),a=n(12),s=n(49),o=a.GroupBase;
	r.CFG={items:null,itemsGroup:null,backShape:null,back:{radius:6,fill:"#000",fillOpacity:.7},padding:null,lineHeight:null,_padding:[10,10,10,10],_lineHeight:20},i.extend(r,o),i.augment(r,{_initCfg:function(){this.deepSet("lineHeight"),this.deepSet("padding"),this.deepSet("marker")},_beforeRenderUI:function(){r.superclass._beforeRenderUI.call(this);var t=this;t.set("itemsGroup",this.addGroup())},_renderUI:function(){r.superclass._renderUI.call(this);var t=this;t.get("items")&&(t._renderItems(),t._renderBack())},_renderBack:function(){var t=this.get("padding"),e=this.get("back"),n=this.get("itemsGroup"),r=n.renderBack(t,e);this.set("backShape",r)},_renderItems:function(){var t=this,e=t.get("items");i.each(e,function(e,n){t._addItem(e,n)})},_addItem:function(t,e){var n=this,r=n.get("itemsGroup"),i=n.get("lineHeight"),a=n.get("padding"),o=e*i+a[0]+8;r.addGroup(s,{x:a[3],y:o,items:t})},setItems:function(t){var e=this;e.clearItems(),e.set("items",t),e._renderItems(),e._renderBack()},clearItems:function(){var t=this,e=t.get("itemsGroup");e&&e.clear()}}),t.exports=r},function(t,e){"use strict";var n={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),r<Math.abs(1)?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),-(r*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)))},easeOutElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),r<Math.abs(1)?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),r*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:2===(t/=.5)?1:(n||(n=1*(.3*1.5)),r<Math.abs(1)?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),t<1?-.5*(r*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)):r*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-n.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*n.easeInBounce(2*t):.5*n.easeOutBounce(2*t-1)+.5}};t.exports=n},function(t,e,n){"use strict";var r=n(9),i=n(52),a=function(){};r.augment(a,{fire:function(t,e){var n=new i(t);r.each(e,function(t,e){n[e]=t}),this.trigger(n)},getCenter:function(){var t=this.getBBBox();return{x:t.minX+t.width/2,y:t.minY+t.height/2}},getWidth:function(){return this.getBBBox().width},getHeight:function(){return this.getBBBox().height},init:function(){this.set("animable",!0),this.set("animCount",0),this.transformByAttr()},deepSet:function(t){var e=this.get("_"+t),n=this.deepGet(t);this.set(t,r.merge(e,n))},deepGet:function(t){for(var e=this.get(t),n=this.getParent();n;){if(e)return e;e=n.get(t),n=n.getParent()}},getCanvasNode:function(){var t=this.get("canvas");return t.get("el")},transformByAttr:function(){var t=this.get("attrs");return t&&t.rotate&&this.rotateAtStart(t.rotate),this},rotateAtStart:function(t){var e=this.attr("x"),n=this.attr("y");this.transform([["t",-e,-n],["r",t],["t",e,n]])},move:function(t,e){var n=this,r=n.get("x")||0,i=n.get("y")||0;n.translate(t-r,e-i),n.set("x",t),n.set("y",e)},animate:function(t,e,n,i){this.addAnimCount(),r.animate(this,t,e,n,i)},stopAnimate:function(){this.set("animable",!1)},addAnimCount:function(){var t=this.get("animCount");t<1e4?this.set("animCount",++t):this.set("animCount",0)},attr:function(t,e){var n=this;if(0===arguments.length)return n.__attrs;if(r.isObject(t))return r.adapAttrs(t),r.each(t,function(t,e){n._setAttr(e,t)}),n.__afterSetAttrAll&&n.__afterSetAttrAll(t),n;if(2===arguments.length){if(n._setAttr(t,e)!==!1){var i=r.adapAttr(t,e);t=i.name,e=i.value;var a="__afterSetAttr"+r.ucfirst(t);n[a]&&n[a](e)}return n}return n._getAttr(t)}}),t.exports=a},function(t,e,n){var r=n(9),i=n(28),a=n(70),s=i.G,o=function(){};r.augment(o,{findAllBy:function(t){var e=this,n=e.get("children"),i=[],a=[];return r.each(n,function(e){if(t(e)&&i.push(e),e.findBy){a=e.findAllBy(t);for(var n=0;n<a.length;n++)i.push(a[n])}}),0!==i.length&&i},isChild:function(t){var e=this.get("canvas"),n=e.get("children");return n.indexOf(t)!==-1},getFilterChild:function(t){var e=this.get("children"),n=[];return r.each(e,function(e){t!==e&&n.push(e)}),n},getChildAt:function(t){var e=this.get("children");return e[t]},getFirst:function(){var t=this.get("children");return t[0]},getLast:function(){var t=this.get("children");return t[t.length-1]},addShape:function(t,e){var n,i,a=this.get("canvas");return e=r.mix({},e),e?(e.type=t,t=r.upperFirst(t),e.attrs&&(i=e.attrs,"Text"===t&&(i.fontFamily=i.fontFamily?i.fontFamily:a.get("fontFamily"))),e.canvas=a,e.father=this,n=new s[t](e)):n=new s[t],this.add(n),n},addGroup:function(t,e){var n,i=this.get("canvas");if(e=r.mix({},e),r.isFunction(t))e?(e.canvas=i,e.father=this,n=new t(e)):n=new t({canvas:i,father:this}),this.add(n);else if(r.isObject(t))t.canvas=i,n=new a(t),this.add(n);else{if(void 0!==t)return!1;n=new a,this.add(n)}return n},renderBack:function(t,e){var n=this.get("backShape"),i=this.getBBBox(),a=this.getParent();return r.mix(e,{x:i.minX-t[3],y:i.minY-t[0],width:i.width+t[1]+t[3],height:i.height+t[0]+t[2]}),n?n.attr(e):n=a.addShape("Rect",{zIndex:-1,attrs:e}),this.set("backShape",n),a.sort(),n},findByType:function(t){var e,n=this.get("children");return r.each(n,function(n){n.get("type")===t&&(e=n)}),e}}),t.exports=o},function(t,e,n){"use strict";var r=n(28),i=n(9),a=r.G,s=function(t){s.superclass.constructor.call(this,t)};s.Symbols={circle:function(t,e,n){return[["M",t,e-n],["a",n,n,0,1,1,0,2*n],["a",n,n,0,1,1,0,-2*n],["z"]]},square:function(t,e,n){return[["M",t-n,e-n],["L",t+n,e-n],["L",t+n,e+n],["L",t-n,e+n],["z"]]},diamond:function(t,e,n){return[["M",t-n,e],["L",t,e-n],["L",t+n,e],["L",t,e+n],["z"]]},triangle:function(t,e,n){var r=n/.966,i=n;return[["M",t,e-n],["L",t+r,e+i],["L",t-r,e+i],["z"]]},"triangle-down":function(t,e,n){var r=n/.966,i=n;return[["M",t,e+n],["L",t+r,e-i],["L",t-r,e-i],["z"]]}},s.ATTRS={path:null,lineWidth:1},i.extend(s,a.Path),i.augment(s,{getDefaultAttrs:function(){s.superclass.getDefaultAttrs.call(this);var t,e,n=this.get("attrs"),r=n.x,a=n.y,o=n.radius?n.radius:n.r;return e=i.isFunction(n.symbol)?n.symbol:s.Symbols[n.symbol],e&&(t={path:e(r,a,o)}),i.mix(s.ATTRS,t)}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i={transform:function(t,e){return t=t.clone(),r.each(e,function(e){switch(e[0]){case"t":t.translate(e[1],e[2]);break;case"s":t.scale(e[1],e[2]);break;case"r":t.rotate(e[1]);break;case"m":t.multiply(e[1]);break;default:return!1}}),t},isMatrix3:function(t){return"matrix3"===t.type},scale:function(t,e,n,r,i){return t=t.clone(),t.translate(-1*r,-1*i),t.scale(e,n),t.translate(r,i),t},rotate:function(t,e,n,r){return t=t.clone(),e=parseFloat(e)/180*Math.PI,t.translate(-1*n,-1*r),t.rotate(e),t.translate(n,r),t}};t.exports=i},function(t,e,n){"use strict";function r(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var a=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4===r?a[3]={x:+t[0],y:+t[1]}:i-2===r&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[i-2],y:+t[i-1]}:i-4===r?a[3]=a[2]:r||(a[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return n}var i=n(1),a="concat",s=String.prototype.toUpperCase,o=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,u=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,c={path2Absolute:function(t){if(i.isArray(t)&&i.isArray(t&&t[0])||(t=c.parsePathString(t)),!t||!t.length)return[["M",0,0]];var e=[],n=0,o=0,u=0,l=0,h=0;"M"===t[0][0]&&(n=+t[0][1],o=+t[0][2],u=n,l=o,h++,e[0]=["M",n,o]);for(var f,g,p=3===t.length&&"M"===t[0][0]&&"R"===t[1][0].toUpperCase()&&"Z"===t[2][0].toUpperCase(),v=h,d=t.length;v<d;v++){e.push(f=[]),g=t[v];var x,m,y;if(g[0]!==s.call(g[0]))switch(f[0]=s.call(g[0]),f[0]){case"A":f[1]=g[1],f[2]=g[2],f[3]=g[3],f[4]=g[4],f[5]=g[5],f[6]=+(g[6]+n),f[7]=+(g[7]+o);break;case"V":f[1]=+g[1]+o;break;case"H":f[1]=+g[1]+n;break;case"R":for(x=[n,o][a](g.slice(1)),m=2,y=x.length;m<y;m++)x[m]=+x[m]+n,x[++m]=+x[m]+o;e.pop(),e=e[a](r(x,p));break;case"M":for(u=+g[1]+n,l=+g[2]+o,m=1,y=g.length;m<y;m++)f[m]=+g[m]+(m%2?n:o);break;default:for(m=1,y=g.length;m<y;m++)f[m]=+g[m]+(m%2?n:o)}else if("R"===g[0])x=[n,o][a](g.slice(1)),e.pop(),e=e[a](r(x,p)),f=["R"][a](g.slice(-2));else for(var _=0,S=g.length;_<S;_++)f[_]=g[_];switch(f[0]){case"Z":n=u,o=l;break;case"H":n=f[1];break;case"V":o=f[1];break;case"M":u=f[f.length-2],l=f[f.length-1],n=f[f.length-2],o=f[f.length-1];break;default:n=f[f.length-2],o=f[f.length-1]}}return e},parsePathString:function(t){if(!t)return null;var e={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return i.isArray(t)&&i.isArray(t[0])&&(n=t.slice(0)),!n.length&&i.isString(t)&&t.replace(u,function(t,r,i){var s=[],u=r.toLowerCase();if(i.replace(o,function(t,e){e&&s.push(+e)}),"m"===u&&s.length>2&&(n.push([r][a](s.splice(0,2))),u="l",r="m"===r?"l":"L"),"r"===u)n.push([r][a](s));else for(;s.length>=e[u]&&(n.push([r][a](s.splice(0,e[u]))),e[u]););}),n},parsePathArray:function(t){if(i.isArray(t)){var e=i.map(t,function(t){var e=t.join(" ");return e.replace(/([a-z,A-Z])\s+/,"$1")});return e.join(" ")}return t}};t.exports=c},function(t,e,n){"use strict";function r(t){this.space={},i.isString(t)?this.setStyle(t):t instanceof r&&this.copy(t)}var i=n(1),a=(n(4),n(151)),s=n(152),o=n(150),u={hex:/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/,space:/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)$/,rgbNum:/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/,rgbaNum:/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/,rgbPre:/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/,rgbaPre:/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/,hsl:/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/,hsla:/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/};i.augment(r,{getType:function(){return this.space.type},toRGB:function(){var t=this.space;if("rgb"!==t.type){var e=t.toRGB();this.setRGB(e.r,e.g,e.b,e.a)}},toHSL:function(){var t=this.space;if("hsl"!==t.type){var e=t.toHSL();this.setHSL(e.h,e.s,e.l,e.a)}},getR:function(){return this.toRGB(),this.space.r},getG:function(){return this.toRGB(),this.space.g},getB:function(){return this.toRGB(),this.space.b},getH:function(){return this.toHSL(),this.space.h},getS:function(){return this.toHSL(),this.space.s},getL:function(){return this.toHSL(),this.space.l},getA:function(){return this.space.a},multiplyA:function(t){return void 0===t?this:(void 0===this.space.a&&(this.space.a=1),this.space.a*=t,this)},getRGBStyle:function(){return this.toRGB(),this.space.getStyle()},getRGBPreStyle:function(){return this.toRGB(),this.space.getPreStyle()},getHSLStyle:function(){return this.toHSL(),this.space.getStyle()},getHex:function(){return this.toRGB(),this.space.getHex()},setRGB:function(t,e,n,r){return this.space=new s,this.space.setRGB(t,e,n,r),this},setHSL:function(t,e,n,r){return this.space=new a,this.space.setHSL(t,e,n,r),this},setHex:function(t){return this.space=new s,t=Math.floor(t),this.space.r=(t>>16&255)/255,this.space.g=(t>>8&255)/255,this.space.b=(255&t)/255,this},setStyle:function(t){var e;if(e=u.hex.exec(t)){var n=e[1],r=n.length;if(3===r)return this.setRGB(parseInt(n.charAt(0)+n.charAt(0),16)/255,parseInt(n.charAt(1)+n.charAt(1),16)/255,parseInt(n.charAt(2)+n.charAt(2),16)/255),this;if(6===r)return this.setRGB(parseInt(n.charAt(0)+n.charAt(1),16)/255,parseInt(n.charAt(2)+n.charAt(3),16)/255,parseInt(n.charAt(4)+n.charAt(5),16)/255),this}else if(e=u.space.exec(t)){var i,a=e[1],s=e[2];switch(a){case"rgb":if(i=u.rgbNum.exec(s))return this.setRGB(parseInt(i[1],10)/255,parseInt(i[2],10)/255,parseInt(i[3],10)/255),this;if(i=u.rgbPre.exec(s))return this.setRGB(parseInt(i[1],10)/100,parseInt(i[2],10)/100,parseInt(i[3],10)/100),this;break;case"rgba":if(i=u.rgbaNum.exec(s))return this.setRGB(parseInt(i[1],10)/255,parseInt(i[2],10)/255,parseInt(i[3],10)/255,parseFloat(i[4])),this;if(i=u.rgbaPre.exec(s))return this.setRGB(parseInt(i[1],10)/100,parseInt(i[2],10)/100,parseInt(i[3],10)/100,parseFloat(i[4])),this;break;case"hsl":if(i=u.hsl.exec(s))return this.setHSL(parseInt(i[1],10)/360,parseInt(i[2],10)/100,parseInt(i[3],10)/100),this;break;case"hsla":if(i=u.hsla.exec(s))return this.setHSL(parseInt(i[1],10)/360,parseInt(i[2],10)/100,parseInt(i[3],10)/100,parseFloat(i[4])),this}}else t=t.toLowerCase(),void 0!==o[t]?this.setHex(o[t]):this.setHex(o.black)},copy:function(t){this.space=t.space.clone()},clone:function(){return new r(this)}}),t.exports=r},function(t,e){t.exports={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}},function(t,e,n){"use strict";var r=n(1),i=n(4),a=function(){this.h=0,this.s=0,this.l=0};r.augment(a,{type:"hsl",setHSL:function(t,e,n,r){this.h=i.mod(t,1),this.s=i.clamp(e,0,1),this.l=i.clamp(n,0,1),void 0!==r?this.a=i.clamp(r,0,1):this.a=void 0},toRGB:function(){function t(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}return function(){var e=this,n=e.h,r=e.s,i=e.l;if(0===r)return{r:i,g:i,b:i,a:e.a};var a=i<=.5?i*(1+r):i+r-i*r,s=2*i-a;return{r:t(s,a,n+1/3),g:t(s,a,n),b:t(s,a,n-1/3),a:e.a}}}(),clone:function(){var t=new a;return t.h=this.h,t.s=this.s,t.l=this.l,t.a=this.a,t},copy:function(t){return this.h=t.h,this.s=t.s,this.l=t.l,this.a=t.a,this},getStyle:function(){var t=this;return void 0===t.a?"hsl("+Math.round(360*t.h)+", "+Math.round(100*t.s)+"%, "+Math.round(100*t.l)+"%)":"hsla("+Math.round(360*t.h)+", "+Math.round(100*t.s)+"%, "+Math.round(100*t.l)+"%, "+t.a+")"}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(4),a=function(){this.r=0,this.g=0,this.b=0,this.type="rgb"};r.augment(a,{type:"rgb",setRGB:function(t,e,n,r){this.r=i.clamp(t,0,1),this.g=i.clamp(e,0,1),this.b=i.clamp(n,0,1),void 0!==r?this.a=i.clamp(r,0,1):this.a=void 0},toHSL:function(){var t,e,n=this.r,r=this.g,i=this.b,a=Math.max(n,r,i),s=Math.min(n,r,i),o=(s+a)/2;if(s===a)t=0,e=0;else{var u=a-s;switch(e=o<=.5?u/(a+s):u/(2-a-s),a){case n:t=(r-i)/u+(r<i?6:0);break;case r:t=(i-n)/u+2;break;case i:t=(n-r)/u+4}t/=6}return{h:t,s:e,l:o,a:this.a}},getHex:function(){var t=255*this.r<<16^255*this.g<<8^255*this.b<<0;return"#"+("000000"+t.toString(16)).slice(-6)},getStyle:function(){return void 0===this.a?"rgb("+Math.round(255*this.r).toString()+", "+Math.round(255*this.g).toString()+", "+Math.round(255*this.b).toString()+")":"rgba("+Math.round(255*this.r).toString()+", "+Math.round(255*this.g).toString()+", "+Math.round(255*this.b).toString()+", "+this.a+")"},getPreStyle:function(){return void 0===this.a?"rgb("+Math.round(100*this.r).toString()+"%, "+Math.round(100*this.g).toString()+"%, "+Math.round(100*this.b).toString()+"%)":"rgba("+Math.round(100*this.r).toString()+"%, "+Math.round(100*this.g).toString()+"%, "+Math.round(100*this.b).toString()+"%, "+this.a+")"},clone:function(){var t=new a;return t.r=this.r,t.g=this.g,t.b=this.b,t.a=this.a,t},copy:function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}}),t.exports=a},function(t,e){"use strict";function n(t){w=t.length,w&&(b=t[0].length),w>1&&b>1&&(m=t[0][0][0],_=t[0][0][1],y=t[1][0][0]-t[0][0][0],S=t[0][1][1]-t[0][0][1])}function r(t,e){var n=i(!0,t,e),r=i(!1,t,e);return[n,r]}function i(t,e,n){var r=w,i=b,s=[];t?i--:r--;for(var o=0;o<r;o++){s[o]=[];for(var u=0;u<i;u++){s[o][u]={};var c,l;if(c=e[o][u][2],l=t?e[o][u+1][2]:e[o+1][u][2],a(c,l))s[o][u].rate=-2,s[o][u].have_iso_point=!1;else{var h=a(n,c),f=a(n,l),g=(n-c)*(n-l);if(h||f){h?c+=M:l+=M;var p=s[o][u].rate=(n-c)/(l-c);p>0&&p<1?s[o][u].have_iso_point=!0:s[o][u].have_iso_point=!1}else g>0?(s[o][u].rate=-2,s[o][u].have_iso_point=!1):g<0&&(s[o][u].rate=(n-c)/(l-c),s[o][u].have_iso_point=!0)}}}return s}function a(t,e){return Math.abs(t-e)<1e-9}function s(t,e,n,r){var i=0,a=0,s=c(),u=c();for(i=0;i<w-1;i++)e[i][0].have_iso_point&&(s=c(i,-1,!1),u=c(i,0,!1),o(s,u,n,r,t,e));for(a=0;a<b-1;a++)t[w-1][a].have_iso_point&&(s=c(w,a,!0),u=c(w-1,a,!0),o(s,u,n,r,t,e));for(i=0;i<w-1;i++)e[i][b-1].have_iso_point&&(s=c(i,b,!1),u=c(i,b-1,!1),o(s,u,n,r,t,e));for(a=0;a<b-1;a++)t[0][a].have_iso_point&&(s=c(-1,a,!0),u=c(0,a,!0),o(s,u,n,r,t,e))}function o(t,e,n,r,i,a){var s=!1,o={value:n,path:[]};for(h(e,i,a),o.path.push(u(e,i,a));!s&&f(e,t,i,a,o);)s=!e.row&&e.isHorizon||!e.col&&!e.isHorizon||e.row==w-1||e.col==b-1;r.push(o)}function u(t,e,n){var r=t.row,i=t.col,a=t.isHorizon,s=m+r*y,o=_+i*S;return a?o+=e[r][i].rate*S:s+=n[r][i].rate*y,[s,o]}function c(t,e,n){return{row:t||0,col:e||0,isHorizon:n||0,clone:l}}function l(t){this.row=t.row,this.col=t.col,this.isHorizon=t.isHorizon}function h(t,e,n){var r=t.row,i=t.col,a=t.isHorizon;return a?e[r][i].have_iso_point=!1:n[r][i].have_iso_point=!1,t}function f(t,e,n,r,i){var a=c(),s=c(),o=c();g(a,s,o,t,e);for(var l=[a,s,o],f=[],d={},x=!1,m=0;m<3;m++)f[m]=p(n,r,l[m]);if(f[0]&&f[1]&&f[2])d=v(t,l[0],n,r)<v(t,l[1],n,r)?h(l[0],n,r):h(l[1],n,r),x=!0;else for(var m=0;m<3;m++)if(f[m]){d=h(l[m],n,r),x=!0;break}return x&&(i.path.push(u(d,n,r)),e.clone(t),t.clone(d)),x}function g(t,e,n,r,i){return r.row>i.row?(t.clone(r),t.isHorizon=!1,e.clone(t),e.col+=1,n.clone(r),void(n.row+=1)):r.col>i.col?(e.clone(r),e.isHorizon=!0,t.clone(e),t.row+=1,n.clone(r),void(n.col+=1)):r.isHorizon?(e.clone(r),e.row-=1,e.isHorizon=!1,t.clone(e),t.col+=1,n.clone(r),void(n.row-=1)):(t.clone(r),t.col-=1,t.isHorizon=!0,e.clone(t),e.row+=1,n.clone(r),void(n.col-=1))}function p(t,e,n){var r=n.row,i=n.col,a=n.isHorizon;return a?t[r][i].have_iso_point:e[r][i].have_iso_point}function v(t,e,n,r){var i=u(t,n,r),a=u(e,n,r),s=i.x-a.x,o=i.y-a.y;return Math.sqrt(s*s+o*o)}function d(t,e,n,r){var i,a,s=c(),o=c();for(a=0;a<b-1;a++)for(i=0;i<w-1;i++)e[i][a].have_iso_point&&(s=c(i,0,!1),o=c(i,a,!1),x(s,o,t,e,n,r))}function x(t,e,n,r,i,a){var s=e.row,o=e.col,c=!1,l={value:i,path:[]};for(l.path.push(u(e,n,r));!c&&f(e,t,n,r,l);)c=e.row==s&&e.col==o&&!e.isHorizon;a.push(l)}var m,y,_,S,w=0,b=0,M=.001,A=function(t,e){var i,a=[],o=[],u=[];n(t);for(var c=0;c<e.length;c++){i=e[c];var l=r(t,i);a=l[0],o=l[1],s(a,o,i,u),d(a,o,i,u)}return u};t.exports=A},function(t,e,n){"use strict";var r=n(1),i=n(51),a=function(t){t.inner=t.inner||0,a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{type:"clock"}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(51),a=function(t){t.inner=t.inner||0,a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{type:"gauge"}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(72),a=n(187),s=function(t){var e={};r.mix(e,s.ATTRS,t),s.superclass.constructor.call(this,e);var n=this.get("projection"),i=this.get("basic"),o=a[n];this.set("project",new o({basic:i}))};s.ATTRS={projection:"mercator"},r.extend(s,i),r.augment(s,{type:"map",_getOriginRange:function(){var t=this,e=t.get("originMin")[0],n=t.get("originMin")[1],r=t.get("originMax")[0],i=t.get("originMax")[1],a={x:r-e,y:i-n};return{xMin:e,yMin:n,range:a}},_getProjectRange:function(){var t=this,e=t.get("min")?t.get("min"):t.get("originMin"),n=t.get("max")?t.get("max"):t.get("originMax"),r=e[0],i=e[1],a=n[0],s=n[1],o={x:a-r,y:s-i};return{xMin:r,yMin:i,range:o}},_invert:function(t,e){var n;"origin"===e?n=this._getOriginRange():"project"===e&&(n=this._getProjectRange());var r=n.xMin,i=n.yMin,a=n.range;return t.x=r+t.x*a.x,t.y=i+t.y*a.y,t},_scale:function(t,e){var n;"origin"===e?n=this._getOriginRange():"project"===e&&(n=this._getProjectRange());var r=n.xMin,i=n.yMin,a=n.range;return t.x=(t.x-r)/a.x,t.y=(t.y-i)/a.y,t},convertPoint:function(t){var e=this,n=e.isTransposed?t.y:t.x,r=e.isTransposed?t.x:t.y,i=e.get("project"),a=e._invert({x:n,y:r},"origin");return a=i.project(a.x,a.y),a=e._scale(a,"project"),{x:this.convertDim(a.x,"x"),y:this.convertDim(a.y,"y")}},invertPoint:function(t){var e=this,n=this.invertDim(t.x,"x"),r=this.invertDim(t.y,"y"),i={};i.x=e.isTransposed?r:n,i.y=e.isTransposed?n:r;var a=e.get("project");return i=e._invert(i,"project"),i=a.invert(i),i=e._scale(i,"origin")}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(39),a=n(3),s=a.Vector2,o=function(t){t.inner=t.inner||0,o.superclass.constructor.call(this,t);var e=this.get("x");this.set("x",this.get("y")),this.set("y",e)};r.extend(o,i),r.augment(o,{type:"rho",convertPoint:function(t){var e=this,n=e.getCenter(),r=e.get("y").start,i=e.convertDim(t.x,"x");return{x:n.x+Math.cos(r)*i,y:n.y+Math.sin(r)*i}},invertPoint:function(t){var e=this,n=e.getCenter(),r=new s(t.x-n.x,t.y-n.y),i=r.length();return{x:e.invertDim(i,"x")}}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(39),a=n(3),s=n(4),o=a.Vector2,u=a.Matrix3,c=a.Vector3,l=function(t){t.inner=t.inner||0,l.superclass.constructor.call(this,t)};r.extend(l,i),r.augment(l,{type:"theta",convertPoint:function(t){var e=this,n=e.getCenter(),r=e.convertDim(t.x,"x"),i=e.get("y").end;return{x:n.x+Math.cos(r)*i,y:n.y+Math.sin(r)*i}},invertPoint:function(t){var e=this,n=e.getCenter(),r=new o(t.x-n.x,t.y-n.y),i=e.get("x"),a=new u;a.rotate(i.start);var l=new c(1,0,0);l.applyMatrix(a),l=new o(l.x,l.y);var h=l.angleTo(r,i.end<i.start);s.equal(h,2*Math.PI)&&(h=0);var f=h/(i.end-i.start);return f=i.end-i.start>0?f:-f,{x:f}}}),t.exports=l},function(t,e,n){"use strict";function r(t){var e={};i.mix(e,r.ATTRS,t),r.superclass.constructor.call(this,e),this._init()}var i=n(1),a=n(38);r.ATTRS={start:{x:0,y:0},end:{x:0,y:0},top:.5},i.extend(r,a),i.augment(r,{type:"triAngle",triAngle:!0,_init:function(){return this.setTopfactor(),this},setTopfactor:function(){var t=this,e=t.get("start"),n=t.get("end"),r={x:n.x,y:e.y},i={x:e.x+(n.x-e.x)*t.get("top"),y:n.y};t.getXStart=function(t){return e.x+(i.x-e.x)/(i.y-e.y)*(t-e.y)},t.getXEnd=function(t){return r.x+(i.x-r.x)/(i.y-r.y)*(t-r.y)}},set:function(t,e){return this._attrs[t]=e,"top"===t&&this.setTopfactor(),this},convertPoint:function(t){var e=this,n=e.get("start"),r=e.get("end"),i=t.y,a=t.x;isNaN(i)&&(i=0),i=n.y+(r.y-n.y)*i;var s=e.getXStart(i),o=e.getXEnd(i);return a=s+(o-s)*a,{x:a,y:i}},invertPoint:function(t){var e=this,n=e.get("start"),r=e.get("end"),i=e.getXStart(t.y),a=e.getXEnd(t.y),s=(t.x-i)/(i-a);return{x:-s,y:-(t.y-n.y)/(r.y-n.y)}}}),t.exports=r},function(t,e){"use strict";function n(t){return t instanceof Date?t:new Date(t)}function r(t,e,n){var r=new Date(n);switch(isNaN(r)&&(r=new Date),e=parseInt(e,10),t){case"s":r=new Date(r.getTime()+1e3*e);break;case"n":r=new Date(r.getTime()+6e4*e);break;case"h":r=new Date(r.getTime()+36e5*e);break;case"d":r=new Date(r.getTime()+864e5*e);break;case"w":r=new Date(r.getTime()+6048e5*e);break;case"m":r=new Date(r.getFullYear(),r.getMonth()+e,r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds());break;case"y":r=new Date(r.getFullYear()+e,r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds())}return r}var i=/^(?:(?!0000)[0-9]{4}([-\/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-\/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,a=function(){var t=/w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,e=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g,r=function(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t},i={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUTCDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",localShortDate:"yy\u5e74mm\u6708dd\u65e5",localShortDateTime:"yy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",localLongDate:"yyyy\u5e74mm\u6708dd\u65e5",localLongDateTime:"yyyy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",localFullDate:"yyyy\u5e74mm\u6708dd\u65e5 w",localFullDateTime:"yyyy\u5e74mm\u6708dd\u65e5 w hh:MM:ss TT"},a={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]};return function(s,o,u){if(1!==arguments.length||"[object String]"!==Object.prototype.toString.call(s)||/\d/.test(s)||(o=s,s=void 0),s=s?new Date(s):new Date,isNaN(s))throw SyntaxError("invalid date");o=String(i[o]||o||i["default"]),"UTC:"===o.slice(0,4)&&(o=o.slice(4),u=!0);var c=u?"getUTC":"get",l=s[c+"Date"](),h=s[c+"Day"](),f=s[c+"Month"](),g=s[c+"FullYear"](),p=s[c+"Hours"](),v=s[c+"Minutes"](),d=s[c+"Seconds"](),x=s[c+"Milliseconds"](),m=u?0:s.getTimezoneOffset(),y={d:l,dd:r(l,void 0),ddd:a.dayNames[h],dddd:a.dayNames[h+7],w:a.dayNames[h+14],m:f+1,mm:r(f+1,void 0),mmm:a.monthNames[f],mmmm:a.monthNames[f+12],yy:String(g).slice(2),yyyy:g,h:p%12||12,hh:r(p%12||12,void 0),H:p,HH:r(p,void 0),M:v,MM:r(v,void 0),s:d,ss:r(d,void 0),l:r(x,3),L:r(x>99?Math.round(x/10):x,void 0),t:p<12?"a":"p",tt:p<12?"am":"pm",T:p<12?"A":"P",TT:p<12?"AM":"PM",Z:u?"UTC":(String(s).match(e)||[""]).pop().replace(n,""),o:(m>0?"-":"+")+r(100*Math.floor(Math.abs(m)/60)+Math.abs(m)%60,4),S:["th","st","nd","rd"][l%10>3?0:(l%100-l%10!==10)*l%10]};return o.replace(t,function(t){return t in y?y[t]:t.slice(1,t.length-1)})}}(),s={add:function(t,e,n){return r(t,e,n)},addHour:function(t,e){return r("h",t,e)},addMinute:function(t,e){return r("n",t,e)},addSecond:function(t,e){return r("s",t,e)},addDay:function(t,e){return r("d",t,e)},addWeek:function(t,e){return r("w",t,e)},addMonths:function(t,e){return r("m",t,e)},addYear:function(t,e){return r("y",t,e)},isDateEquals:function(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()},isEquals:function(t,e){return t===e||!(!t||!e)&&(!(!t.getTime||!e.getTime)&&t.getTime()===e.getTime())},isDateString:function(t){return i.test(t)},format:function(t,e,n){return a(t,e,n)},parse:function(t){return"string"==typeof t&&(t=t.replace(/-/g,"/")),n(t)},today:function(){var t=new Date;return new Date(t.getFullYear(),t.getMonth(),t.getDate())},getDate:function(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}};t.exports=s},function(t,e,n){"use strict";var r=n(1),i=function(t,e,n,r){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=r,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e};r.augment(i,{preventDefault:function(){this.defaultPrevented=this.cancelable&&!0},stopPropagation:function(){this.propagationStopped=!0},remove:function(){this.remove=!0},clone:function(){return r.clone(this)},toString:function(){return"[Event (type="+this.type+")]"}}),t.exports=i},function(t,e,n){var r=n(41);r.Facet=n(30),
	r.Rect=n(74),r.List=n(73),r.Circle=n(163),r.Tree=n(165),r.Mirror=n(164),t.exports=r},function(t,e,n){"use strict";function r(t,e,n){return{x:t.x+e*Math.cos(n),y:t.y+e*Math.sin(n)}}var i=n(1),a=n(41),s=n(2),o=n(30),u=function(t){u.superclass.constructor.call(this,t)};i.extend(u,a),i.augment(u,{getRegion:function(t,e){var n=this,i=n.plotRange,a=Math.min(i.getWidth(),i.getHeight())/2,s=2*Math.PI/t,o=-1*Math.PI/2+s*e,u=a/(1+1/Math.sin(s/2)),c=n.getCenter(),l=r(c,a-u,o);return n.getFacetRegion(l,u)},getFacetRegion:function(t,e){var n=3*Math.PI/4,i=Math.PI*-1*1/4;return{start:r(t,e,n),end:r(t,e,i)}},getCenter:function(){var t=this,e=t.plotRange,n=e.tl,r=e.getWidth(),i=e.getHeight(),a={x:n.x+r/2,y:n.y+i/2};return a},generateFacets:function(t){var e=this,n=e.dims,r=n[0];if(!r)throw new Error("Please specify for the field for facet!");var a=e.getDimValues(r,t),u=a.length,c=[],l=0;return i.each(a,function(n,i){var h=[{dim:r,value:n,values:a}],f=e.getFilter(h),g=s.filter(t,f),p=new o({type:e.type,xValue:n,xDim:r,colIndex:i,cols:u,rows:1,rowIndex:0,frame:g,region:e.getRegion(u,i),index:l++});c.push(p)}),c}}),t.exports=u},function(t,e,n){"use strict";var r=n(1),i=n(73),a=function(t){a.superclass.constructor.call(this,t),this._init()};r.extend(a,i),r.augment(a,{type:"mirror",transpose:!1,drawTitles:function(t,e){var n=this,i=n.dims,a=n.transpose?"col":"row";r.each(t,function(t){n.drawFacetTitle(a,t,e)}),n.drawDimTitle(a,i[0],e)},_init:function(){var t=this,e=t.dims,n=e[0];if(!n)throw new Error("Please specify for the field for facet!");t.transpose?(t.cols=2,t.rows=1):(t.cols=1,t.rows=2)},getRegion:function(t,e,n,r){var i,a,s=this,o=s.plotRange,u=s.margin,c=o.tl,l=o.br;e>1?(i=(l.x-c.x-u)/e,a=l.y-c.y):(i=l.x-c.x,a=(l.y-c.y-u)/t);var h={x:c.x+i*n+n*u,y:c.y+a*(r+1)+u*r},f={x:h.x+i,y:h.y-a};return{start:h,end:f}}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(41),a=n(2),s=n(30),o=function(t){o.superclass.constructor.call(this,t)};r.extend(o,i),r.augment(o,{rootTitle:"",line:{stroke:"red"},smooth:!1,generateFacets:function(t){var e=this,n=e.dims;if(!n.length)throw new Error("Please specify for the fields for facet!");var r=[],i=e.getRootFacet(t);return r.push(i),i.children=e.getChildFacets(t,1,r),e.setRegion(r),r},getRows:function(){return this.dims.length+1},drawTitles:function(t,e){var n=this;n.drawLines(t,e),r.each(t,function(t){n.drawFacetTitle("col",t,e)})},drawLines:function(t,e){var n=this,i=e.addGroup();r.each(t,function(t){if(!n.isLeaf(t)){var e=t.children;n._addFacetLines(t,e,i)}})},_addFacetLines:function(t,e,n){var i=this,a=t.region,s={x:a.start.x+(a.end.x-a.start.x)/2,y:a.start.y};r.each(e,function(t){var e=t.region,r={x:e.start.x+(e.end.x-e.start.x)/2,y:e.end.y},a={x:s.x,y:s.y+(r.y-s.y)/2},o={x:r.x,y:a.y};i._drawLine([s,a,o,r],n)})},_getPath:function(t){var e=this,n="",i=e.smooth;if(i){var a=[];a.push(["M",t[0].x,t[0].y]),a.push(["C",t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),n=a.join(" ")}else r.each(t,function(t,e){var i=0===e?"M {x} {y}":"L {x} {y}";n+=r.substitute(i,t)});return n},_drawLine:function(t,e){var n=this,i=n._getPath(t),a=n.line;e.addShape("Path",{attrs:r.mix({path:i},a)})},getRootFacet:function(t){var e=this,n=new s({type:e.type,rows:e.getRows(),rowIndex:0,colIndex:0,xValue:e.rootTitle,frame:t,index:0});return n},getChildFacets:function(t,e,n){var i=this,o=[],u=i.dims,c=u.length;if(c<e)return[];var l=u[e-1],h=i.getDimValues(l,t);return r.each(h,function(r,u){var c=[{dim:l,value:r,values:h}],f=i.getFilter(c),g=a.filter(t,f);if(g.rowCount()){var p=new s({type:i.type,xValue:r,xDim:l,colIndex:u,rows:i.getRows(),rowIndex:e,frame:g,children:i.getChildFacets(g,e+1,n),index:n.length});o.push(p),n.push(p)}}),o},getFacetsByLevel:function(t,e){var n=[];return r.each(t,function(t){t.rowIndex===e&&n.push(t)}),n},getRegion:function(t,e,n,r){var i=this,a=i.plotRange,s=i.margin,o=a.bl,u=a.tr,c=(u.x-o.x)/e,l=(u.y-o.y)/t,h={x:o.x+c*n+s,y:o.y+l*r-s},f={x:h.x+c-s,y:h.y+2*l/3+s};return{start:h,end:f}},getRegionIndex:function(t){var e=t[0],n=t[t.length-1];return(n.colIndex-e.colIndex)/2+e.colIndex},setRegion:function(t){var e=this;e.forceColIndex(t),r.each(t,function(t){t.region=e.getRegion(t.rows,t.cols,t.colIndex,t.rows-t.rowIndex-1)})},isLeaf:function(t){return!t.children||!t.children.length},forceColIndex:function(t){var e=this,n=[],i=0;r.each(t,function(t){e.isLeaf(t)&&(n.push(t),t.colIndex=i,i++)}),r.each(n,function(t){t.cols=n.length});for(var a=e.dims.length,s=a-1;s>=0;s--)for(var o=e.getFacetsByLevel(t,s),u=0;u<o.length;u++){var c=o[u];e.isLeaf(c)||(c.originColIndex=c.colIndex,c.colIndex=e.getRegionIndex(c.children),c.cols=n.length)}}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(31);r.augment(i,{row:function(t){var e=this,n=e.colNames(),r=[];return r.push(e._getObject(t,n)),new i(r,{names:n.slice(0)})},addRow:function(t){var e=this,n=e.colNames(),i=e.arr;r.each(n,function(e,n){i[n].push(t[e])})},rows:function(t){var e=this,n=e.colNames(),r=e.data,a=[];if(r)for(var s=0;s<t.length;s++)a.push(e._getObject(s,n));return new i(a,{names:n.slice(0)})},_getColArray:function(t,e,n){var i=this,a=i.arr,s=i.colNames(),o=[],u=i.rowCount(),c=r.map(t,function(t){return r.indexOf(s,t)});e=e||0,n=r.isNull(n)?u:n;for(var l=0;l<c.length;l++){var h=a[c[l]]||[],f=h.slice(e,n);o.push(f)}return o},col:function(t){var e,n=this,a=n.colNames();r.isString(t)?(e=t,t=r.indexOf(a,e)):e=a[t];var s=n._getColArray([e]);return new i(s,{names:[e]})},cols:function(t){for(var e=this,n=0;n<t.length;n++){var a=t[n];r.isNumber(a)&&(t[n]=e.names[a])}var s=e._getColArray(t);return new i(s,{names:t})},cell:function(t,e){var n=this,i=n.colNames(),a=n.arr;return r.isString(e)&&(e=r.indexOf(i,e)),a[e]?a[e][t]:void 0},sub:function(t,e,n,a){var s,o=this,u=o.colNames();return t=t||0,e?e+=1:e=void 0,u=u.slice(t,e),r.isNull(n)||(a?a+=1:a=o.rowCount-1),s=o._getColArray(u,n,a),new i(s,{names:u})},toString:function(){var t=this,e=[],n=t.arr,r=t.colNames(),i=t.rowCount();e.push(r.join("\t"));for(var a=0;a<i;a++){for(var s=[],o=0;o<n.length;o++)s.push(n[o][a]);e.push(s.join("\t"))}return e.join("\n")},s:function(){return this.toString()}}),t.exports=i},function(t,e,n){"use strict";var r=n(1),i=n(77),a=n(31),s=n(331);r.mix(a,{mean:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.mean(n)},geometric_mean:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.geometric_mean(n)},median:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.median(n)},max:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.max(n)},min:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.min(n)},mode:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.mode(n)},range:function(t,e){var n=a.max(t,e),r=a.min(t,e);return[r,n]},sum:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.sum(n)},quantile:function(t,e,n){var r=t.colArray(e);return r=i.formatArray(r),r=i.filterNull(r),s.quantile(r,n)},variance:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.variance(n)},sample_variance:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.sample_variance(n)},standard_deviation:function(t,e){var n=t.colArray(e);return n=i.formatArray(n),n=i.filterNull(n),s.standard_deviation(n)},sd:function(t,e){return a.standard_deviation(t,e)},se:function(t,e){var n=t.colArray(e);n=i.formatArray(n),n=i.filterNull(n);var r=s.sample_variance(n);return Math.sqrt(r)/Math.sqrt(n.length)},sortBy:function(t,e){var n=t.toJSON();return n.sort(e),new a(n,{names:t.colNames()})},filter:function(t,e){var n=[];return e?(t.each(function(t,r){e(t,r)&&n.push(t)}),new a(n)):t},cumulative:function(t,e){var n=t.colArray(e);n=i.filterNull(n);var a=[],s=0;return r.each(n,function(t){s+=t,a.push(s)}),a},complement:function(t,e){var n=t.colNames().slice(0);return r.each(e,function(t){r.remove(n,t)}),t.cols(n)},forceMerge:function(){var t=r.toArray(arguments),e=[],n=[];return r.each(t,function(t){var n=t.colNames();r.each(n,function(t){r.indexOf(e,t)===-1&&e.push(t)})}),r.each(t,function(t){var e=t.toJSON();n=n.concat(e)}),new a(n,{names:e})},combin:function(){var t=r.toArray(arguments),e=[],n=[];return r.each(t,function(t){e=e.concat(t.colNames()),n=n.concat(t.toArray())}),new a(n,{names:e})},combinColumns:function(t,e,n,s,o){if(s=s||"type",r.isString(o)&&(o=[o]),!o){o=[];var u=t.colNames();r.each(u,function(t){r.indexOf(e,t)===-1&&o.push(t)})}var c=[];return t.each(function(t){r.each(e,function(e){var r={};r[n]=t[e],r[s]=e,i.mixIf(r,t,o),c.push(r)})}),new a(c)},combinArray:function(){var t,e=r.toArray(arguments);t=r.isString(e[0])?e.shift():"type";var n=[];return r.each(e,function(e,i){r.each(e,function(e){e[t]=i}),n=n.concat(e)}),new a(n)}}),a.Array={repeat:function(t,e){for(var n=[],r=0;r<e;r++)n.push(t);return n}},t.exports=a},function(t,e){var n=function(t,e,n){var r,i,a,s,o=!0;for(r=0;r<n-1;r++){if(0==t[r][r]){o=!1;break}for(i=r+1;i<n;i++)for(s=-t[i][r]/t[r][r],e[i]=e[i]+s*e[r],a=r;a<n;a++)t[i][a]=t[i][a]+s*t[r][a]}for(r=0;r<n;r++)if(0==t[r][r]){o=!1;break}return o},r=function(t,e){var r=[],i=t,a=e,s=a.length,o=n(i,a,s);if(o){r[s-1]=a[s-1]/i[s-1][s-1];for(var u=s-2;u>=0;u--){r[u]=a[u];for(var c=u+1;c<s;c++)r[u]=r[u]-i[u][c]*r[c];r[u]=r[u]/i[u][u]}}else r=!1;return r};t.exports=r},function(t,e,n){var r=n(17);r.Image=n(171),r.Text=n(175),r.Line=n(172),r.Tag=n(174),r.Rect=n(173),r.Arc=n(170),t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(17),a=n(3),s=a.Vector2,o=function(t){o.superclass.constructor.call(this,t)};r.extend(o,i),r.augment(o,{start:[],end:[],cfg:{stroke:"#000"},getCfg:function(t){var e,n,r,i=this,a=i.parsePoint(t,i.start),o=i.parsePoint(t,i.end),u=t.invertPoint(a),c=t.invertPoint(o),l={x:(c.x+u.x)/2,y:u.y},h=t.convertPoint(l),f=t.getCenter(),g=new s(1,0),p=new s.sub(a,f).length(),v=new s.sub(o,a);return v=v.vertical(),v.setLength(p),v.add(h),e=new s.sub(a,v),n=new s.sub(o,v),r={x:v.x,y:v.y,startAngle:e.angleTo(g,!0)/Math.PI*180,endAngle:n.angleTo(g,!0)/Math.PI*180,r:p}},paint:function(t,e){var n=r.mix({},this.cfg,this.getCfg(t));e.addShape("Arc",{attrs:n})}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(17),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{start:[],end:null,src:"",paint:function(t,e){var n=this,i=n.parsePoint(t,n.start),a=n.cfg;if(a.img=a.src,a=r.mix({src:n.src},a,i),n.end){var s=n.parsePoint(t,n.end);a.x=i.x,a.y=s.y,a.width=s.x-i.x,a.height=i.y-s.y}else a.y=a.y-a.height;e.addShape("Image",{attrs:a})}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(17),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{from:[],to:[],cfg:{stroke:"#000",lineWidth:1},paint:function(t,e){var n=this,i=n.parsePoint(t,n.from),a=n.parsePoint(t,n.to),s=n.cfg,o=r.substitute("M {x} {y}",i)+r.substitute("L {x} {y}",a);s=r.mix({path:o},s),e.addShape("Path",{attrs:s})}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(17),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{start:[],end:[],cfg:{stroke:"#000"},getPath:function(t){var e=this,n=e.parsePoint(t,e.start),r=e.parsePoint(t,e.end),i=[];return i.push(["M",n.x,n.y]),i.push(["L",r.x,n.y]),i.push(["L",r.x,r.y]),i.push(["L",n.x,r.y]),i.push(["z"]),i},paint:function(t,e){var n=this,i=n.cfg,a=n.getPath(t);i=r.mix({path:a},i),e.addShape("Path",{attrs:i})}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(17),a=10,s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,i),r.augment(s,{from:[],to:[],text:"",cfg:{line:{stroke:"#000",lineWidth:1},text:{fill:"#000"},rect:{stroke:"#000",lineWidth:1,fill:"#fff"}},paint:function(t,e){var n=this,r=n.parsePoint(t,n.from),i=n.parsePoint(t,n.to),a=e.addGroup();n.drawLine(r,i,a),n.drawText(i,a)},drawLine:function(t,e,n){var i=this,a=r.substitute("M {x} {y}",t)+r.substitute("L {x} {y}",e),s=r.mix({path:a},i.cfg.line);n.addShape("Path",{attrs:s})},drawText:function(t,e){var n=this,i=r.mix({text:n.text},n.cfg.text,t),s=e.addShape("Text",{zIndex:1,attrs:i}),o=s.getBBBox(),u=r.mix({x:o.minX-a,y:o.minY-a,width:o.width+2*a,height:o.height+2*a},n.cfg.rect);e.addShape("rect",{attrs:u}),e.sort()}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(17),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{position:[],text:"",cfg:{fill:"#000",textAlign:"center"},paint:function(t,e){var n=this,i=n.position,a=n.parsePoint(t,i),s=n.cfg;s=r.mix({text:n.text},s,a),e.addShape("Text",{attrs:s})}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(328),a=function(t){r.mix(this,t)};r.augment(a,{get:function(t){return this[t]},set:function(t,e){this[t]=e},width:500,height:500,x:0,y:0,min:null,max:null,formatter:function(t){return t},radius:60,blur:0,colors:["rgb(0,0,255)","rgb(0,0,255)","rgb(0,255,0)","yellow","rgb(255,0,0)"],_mkcircle:function(t,e,n,r){var i=this.blur,a=this.radius,s=r.createRadialGradient(t,e,a*i,t,e,a);s.addColorStop(0,"rgba(0, 0, 0, 1)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),r.globalAlpha=n,r.fillStyle=s},_colorise:function(t){for(var e=this.width,n=this.height,r=t.getImageData(this.x,this.y,e,n),a=r.data,s=a.length,o=this.colors,u=i.gradient(o),c=3;c<s;c+=4){var l=a[c];if(l){var h=i.Util.rgb2arr(u(l/256));a[c-3]=h[0],a[c-2]=h[1],a[c-1]=h[2],a[c]=l}}return r},getData:function(t){for(var e=[],n=t.length-1;n>=0;n--)e.push(t[n][2]);var i=r.isNull(this.max)?Math.max.apply(null,e):this.max,a=r.isNull(this.min)?Math.min.apply(null,e):this.min;if(i===a)return!1;var s=document.createElement("canvas"),o=s.getContext("2d");s.width=this.width+this.x,s.height=this.height+this.y;for(var u=this.formatter,n=t.length-1;n>=0;n--){var c=(u(t[n][2])-u(a))/(u(i)-u(a));this._mkcircle(t[n][0],t[n][1],c,o),o.fillRect(0,0,this.width+this.x,this.height+this.y)}return this._colorise(o)}}),t.exports=a},function(t,e,n){var r=n(180);t.exports={interpolation:r.interpolation,unInterpolation:r.unInterpolation}},function(t,e,n){"use strict";function r(t,e){for(var n=[],r=Math.min(t.length,e.length),i=0;i<r;i++)n[i]=a.singular(t[i],e[i]);return function(t){for(var e=[],i=0;i<r;i++)e[i]=n[i](t);return e}}function i(t,e){for(var n=[],r=Math.min(t.length,e.length),i=0;i<r;i++)n[i]=a.unSingular(t[i],e[i]);return function(t){for(var e=Math.min(n.length,t.length),r=0,i=0,a=0;a<e;a++)r+=n[a](t[a]),i++;return 0===i?0:r/i}}var a=n(42);t.exports={array:r,unArray:i}},function(t,e,n){"use strict";function r(t,e){switch(e.getType()){case"rgb":return a(t,e);case"hsl":return o(t,e)}}function i(t,e){switch(e.getType()){case"rgb":return s(t,e);case"hsl":return u(t,e)}}function a(t,e){var n=t.getR(),r=t.getG(),i=t.getB(),a=t.getA(),s=e.getR()-n,o=e.getG()-r,u=e.getB()-i,l=e.getA();return void 0===a&&void 0===l||(a=a||1,l=(void 0===l?1:l)-a),function(t){var e=new c;return e.setRGB(n+s*t,r+o*t,i+u*t,void 0!==a&&void 0!==l?a+l*t:void 0),e.getRGBStyle()}}function s(t,e){var n=t.getR(),r=t.getG(),i=t.getB(),a=t.getA(),s=e.getR()-n,o=e.getG()-r,u=e.getB()-i,l=e.getA();return void 0===a&&void 0===l||(a=a||1,l=(void 0===l?1:l)-a),function(t){if(t=new c(t),!t.getType())return 0;var e=t.getR(),h=t.getG(),f=t.getB(),g=t.getA();g=g||1;var p=0,v=0;return 0!==s&&(p+=(e-n)/s,v++),0!==o&&(p+=(h-r)/o,v++),0!==u&&(p+=(f-i)/u,v++),0!==l&&l&&(p+=(g-a)/l,v++),0===v?0:p/v}}function o(t,e){var n=t.getH(),r=t.getS(),i=t.getL(),a=t.getA(),s=e.getH()-n,o=e.getS()-r,u=e.getL()-i,l=e.getA();return void 0===a&&void 0===l||(a=a||1,l=(void 0===l?1:l)-a),function(t){var e=new c;return e.setHSL(n+s*t,r+o*t,i+u*t,void 0!==a&&void 0!==l?a+l*t:void 0),e.getHSLStyle()}}function u(t,e){var n=t.getH(),r=t.getS(),i=t.getL(),a=t.getA(),s=e.getH()-n,o=e.getS()-r,u=e.getL()-i,l=e.getA();return void 0===a&&void 0===l||(a=a||1,l=(void 0===l?1:l)-a),function(t){if(t=new c(t),!t.getType())return 0;var e=t.getH(),h=t.getS(),f=t.getL(),g=t.getA();g=g||1;var p=0,v=0;return 0!==s&&(p+=(e-n)/s,v++),0!==o&&(p+=(h-r)/o,v++),0!==u&&(p+=(f-i)/u,v++),0!==l&&l&&(p+=(g-a)/l,v++),0===v?0:p/v}}var c=n(37);t.exports={color:r,unColor:i}},function(t,e,n){"use strict";function r(t,e){return t instanceof h&&e instanceof h?c.matrix(t,e):a.isArray(t)&&a.isArray(e)?s.array(t,e):a.isObject(t)&&a.isObject(e)?o.object(t,e):u.singular(t,e)}function i(t,e){return t instanceof h&&e instanceof h?c.unMatrix(t,e):a.isArray(t)&&a.isArray(e)?s.unArray(t,e):a.isObject(t)&&a.isObject(e)?o.unObject(t,e):u.unSingular(t,e)}var a=n(1),s=n(178),o=n(183),u=n(42),c=n(181),l=n(3),h=l.Matrix3;t.exports={interpolation:r,unInterpolation:i}},function(t,e,n){"use strict";function r(t,e){for(var n=[],r=t.elements,i=e.elements,s=0;s<u;s++)n[s]=a.singular(r[s],i[s]);return function(t){for(var e=new o,r=e.elements,i=0;i<u;i++)r[i]=n[i](t);return e}}function i(t,e){for(var n=[],r=t.elements,i=e.elements,s=0;s<u;s++)n[s]=a.unSingular(r[s],i[s]);return function(t){for(var e=t.elements,r=0,i=0,a=0;a<u;a++){var s=n[a](e[a]);0!==s&&(r+=s,i++)}return r/i}}var a=n(42),s=n(3),o=s.Matrix3,u=9;t.exports={matrix:r,unMatrix:i}},function(t,e){"use strict";function n(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function r(t,e){return e-=t,function(n){return 0===e?0:(n-t)/e}}t.exports={number:n,unNumber:r}},function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)r in e&&(n[r]=a.singular(t[r],e[r]));return function(t){var e={};for(var r in n)e[r]=n[r](t);return e}}function i(t,e){var n={};for(var r in t)r in e&&(n[r]=a.unSingular(t[r],e[r]));return function(t){var e=0,r=0;for(var i in n)i in t&&(e+=n[i](t[i]),r++);return 0===r?0:e/r}}var a=n(42);t.exports={object:r,unObject:i}},function(t,e,n){var r={};r.Tree=n(186),t.exports=r},function(t,e,n){"use strict";var r=n(1),i=function(t){r.mix(this,t)};r.augment(i,{parent:null,level:0,children:null,x:0,y:0}),t.exports=i},function(t,e,n){"use strict";function r(t){return(t-1)/2+1}var i=n(1),a="level",s=n(185),o=function(t){i.mix(this,t),this._init()};i.augment(o,{nodes:null,childrenField:"children",width:1,height:1,_levels:1,_preX:{},dx:0,dy:0,_totalLeafCount:0,_init:function(){var t=this,e=t.nodes.slice(0);t._traverseNodes(e);var n=t._levels;if(t._preX={},!t.dx){var r=t._getAlignCount(e);t._totalLeafCount=r,t.dx=t.width/r}t.dy||(t.dy=t.height/n),t.nodes=e},_traverseNodes:function(t,e){var n,r,s=this;e?(n=e[a]+1,r=e.id):(n=0,r="");var o=s.childrenField;i.each(t,function(t,i){t[a]=n,t.parent=e,t.id||(t.id=r?r+"-"+i:i.toString());var u=t[o];u&&u.length?s._traverseNodes(t[o],t):n+1>s._levels&&(s._levels=n+1)})},_getAlignCount:function(t){var e=this,n=0,a=0,s=0,o=e.childrenField;return i.each(t,function(t){var i=t[o];if(i&&i.length){a-=r(s),n+=Math.abs(a);var u=e._getAlignCount(i);if(u>1){var c=r(u);a>0?(a-=c,n+=Math.abs(a)):n+=c,a=0}else a+=1;s=u}else a+=1}),s>1&&(a-=r(s)),n+=Math.abs(a)},_layoutNodes:function(t,e){var n=this,r=n.childrenField;i.each(t,function(t){var i=t[r],o=t[a],u=n.dx,c=n.dy;if(t.y=o*c,i&&i.length){n._layoutNodes(i,e);var l=i[0],h=i[i.length-1];t.x=(l.x+h.x)/2,n._preX[o+1]+=.3*u}else{var f=n._preX[o]||0,g=t.parent,p=n._preX[o-1]||0;if(g){var v=g[r].length;p-=(v-.5)*u/2}f=Math.max(f,p),t.x=f+u}n._preX[o]=t.x,e.push(new s(t))})},_getEdges:function(t,e){var n=this,r=[],a=n.childrenField;return i.each(t,function(t){if(e){var i={source:e.id,target:t.id};r.push(i)}t[a]&&(r=r.concat(n._getEdges(t[a],t)))}),r},getNodes:function(){var t=this,e=t.nodes,n=[];return t._layoutNodes(e,n),n},getEdges:function(){var t=this,e=t.nodes;return t._getEdges(e)}}),t.exports=o},function(t,e,n){var r;r={albers:n(188),mercator:n(189),orthographic:n(190)},t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(53),a=function(t){a.superclass.constructor.call(this,t),this._init()};r.extend(a,i),r.augment(a,{"\u03bb0":0,"\u03c60":0,"\u03c61":0,"\u03c62":0,basic:[0,0,0,60],_init:function(){this.\u03bb0=this.toRadians(this.basic[0]),this.\u03c60=this.toRadians(this.basic[1]),this.\u03c61=this.toRadians(this.basic[2]),this.\u03c62=this.toRadians(this.basic[3])},project:function(t,e){var n=this.\u03bb0,r=(this.\u03c60,this.\u03c61),i=this.\u03c62,a=.5*(Math.sin(r)+Math.sin(i)),s=Math.cos(r),o=s*s+2*a*Math.sin(r),u=Math.sqrt(o-2*a*Math.sin(n))/a,c=a*(this.toRadians(t)-n),l=Math.sqrt(o-2*a*Math.sin(this.toRadians(e)))/a;return{x:this.toDegrees(l*Math.sin(c)),y:this.toDegrees(u-l*Math.cos(c))}},invert:function(t){var e=this.\u03bb0,n=(this.\u03c60,this.\u03c61),r=this.\u03c62,i=this.toRadians(t.x),a=this.toRadians(t.y),s=.5*(Math.sin(n)+Math.sin(r)),o=Math.cos(n),u=o*o+2*s*Math.sin(n),c=Math.sqrt(u-2*s*Math.sin(e))/s,l=Math.atan(i/(c-a)),h=Math.sqrt(i*i+Math.pow(c-a,2));return{x:this.toDegrees(e+l/s),y:this.toDegrees(Math.asin((u-h*h*s*s)/(2*s)))}}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(53),a=function(t){a.superclass.constructor.call(this,t),this._init()};r.extend(a,i),r.augment(a,{"\u03bb0":0,_init:function(){this.\u03bb0=this.toRadians(this.\u03bb0)},project:function(t,e){return t=this.toRadians(t),e=this.toRadians(e),{x:this.toDegrees(t-this.\u03bb0),y:this.toDegrees(Math.log(Math.tan(Math.PI/4+e/2)))}},invert:function(t){var e=this.toRadians(t.x),n=this.toRadians(t.y);return{x:this.toDegrees(e+this.\u03bb0),y:this.toDegrees(2*Math.atan(Math.exp(n))-Math.PI/2)}}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(53),a=function(t){a.superclass.constructor.call(this,t),this._init()};r.extend(a,i),r.augment(a,{"\u03bb0":110,"\u03c61":25,_init:function(){this.\u03bb0=this.toRadians(this.\u03bb0),this.\u03c61=this.toRadians(this.\u03c61)},project:function(t,e){t=this.toRadians(t),e=this.toRadians(e);var n=Math.cos(e)*Math.sin(t-this.\u03bb0),r=Math.cos(\u03c61)*Math.sin(e)-Math.sin(\u03c61)*Math.cos(e)*Math.cos(t-\u03bb0);return{x:this.toDegrees(n),y:this.toDegrees(r)}},invert:function(t){var e=this.toRadians(t.x),n=this.toRadians(t.y),r=Math.sqrt(e*e+n*n),i=Math.asin(r),a=this.\u03bb0+Math.atan(e*Math.sin(i)/(r*Math.cos(this.\u03c61)*Math.cos(i)-n*Math.sin(this.\u03c611)*Math.sin(i))),s=Math.asin(Math.cos(i)*Math.sin(this.\u03c61)+n*Math.sin(i)*Math.cos(this.\u03c61)/r);return{x:this.toDegrees(a),y:this.toDegrees(s)}}}),t.exports=a},function(t,e,n){"use strict";var r=(n(2),n(32),{region:n(195),center:n(192),name:n(194),location:n(193)});t.exports=r},function(t,e,n){"use strict";function r(t){return Math.min.apply(null,t)}function i(t){return Math.max.apply(null,t)}var a=n(1),s=n(32),o=function(t,e){return new s({dims:t,mapData:e,addGeoInfo:function(t,e){var n=this,r=n.getDims(),i=r[r.length-1],s=t[i],o=n.mapData.features,u=e[0],c=e[1];return t[u]=[],t[c]=[],o&&a.each(o,function(e){var r=e.properties?e.properties.name:"";if(r===s){var i=e.properties.cp;if(!i){var a=e.geometry,o=a.coordinates,l=n._getBBox(o);i=[l[0]+(l[2]-l[0])/2,l[1]+(l[3]-l[1])/2]}return t[u]=i[0],t[c]=i[1],!1}}),t},_getBBox:function(t){var e=this,n=[],s=[],o=e._getPoints(t);return a.each(o,function(t){n.push(t[0]),s.push(t[1])}),[r(n),r(s),i(n),i(s)]},_getPoints:function(t){var e=this,n=[];return a.isArray(t[0])?a.each(t,function(t){var r=e._getPoints(t);n=n.concat(r)}):n.push(t),n}})};t.exports=o},function(t,e,n){"use strict";var r=n(32),i=function(t){return new r({dims:t,initDims:function(t){var e=t.slice(0,2),n=t.slice(2);t=n.concat(e),t.unshift("..lant"),t.unshift("..long"),this.dims=t},addGeoInfo:function(t,e){var n=this,r=e[0],i=e[1],a=n.getDims(),s=a.length;return t[r]=t[a[s-2]],t[i]=t[a[s-1]],t}})};t.exports=i},function(t,e,n){"use strict";var r=n(1),i=n(32),a=function(t,e){return new i({dims:t,mapData:e,initDims:function(t){t.push("..name")},addGeoInfo:function(t,e){var n=this,i=n.getDims(),a=i[0],s=i[1],o=[t[a],t[s]],u=!1,c=n.mapData.features;return t[e]="",c&&r.each(c,function(i){var a=i.geometry.coordinates;if("Polygon"===i.geometry.type?r.each(a,function(t){if(u=n._isInside(o,t))return!1}):"MultiPolygon"===i.geometry.type&&r.each(a,function(t){return!u&&void r.each(t,function(t){if(u=n._isInside(o,t))return!1})}),u){var s=i.properties?i.properties.name:"";return t[e]=n.names?n.names.indexOf(s):s,!1}}),t},_isInside:function(t,e){for(var n=t[0],r=t[1],i=!1,a=0,s=e.length-1;a<e.length;s=a++){var o=e[a][0],u=e[a][1],c=e[s][0],l=e[s][1],h=u>r!=l>r&&n<(c-o)*(r-u)/(l-u)+o;h&&(i=!i)}return i}})};t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(32),a=function(t,e){return new i({dims:t,mapData:e,addGeoInfo:function(t,e){var n=this,i=n.getDims(),a=i[i.length-1],s=t[a],o=n.mapData,u=o.features,c=e[0],l=e[1];return t[c]=[],t[l]=[],u&&r.each(u,function(e){var r=e.properties?e.properties.name:"";if(r===s){var i=e.geometry,a=i.coordinates;return"Polygon"===i.type?a.forEach(function(e){n._getCoordinates(e,t[c],t[l])}):"MultiPolygon"===i.type?a.forEach(function(e){e.forEach(function(e){n._getCoordinates(e,t[c],t[l])})}):"MultiLineString"===i.type&&a.forEach(function(e){n._getCoordinates(e,t[c],t[l],"line")}),!1}}),t},_getCoordinates:function(t,e,n,i){return r.each(t,function(t){e.push(t[0]),n.push(t[1])}),i&&"line"===i&&(e.push(t[0][0]),n.push(t[0][1])),!1}})};t.exports=a},function(t,e){"use strict";function n(t,e){var n=t.length;if(0===n)return NaN;var r=t[0];if(e<t[0])return NaN;if(e>=t[n-1])return t[n-1];for(var i=1;i<t.length&&!(e<t[i]);i++)r=t[i];return r}function r(t,e){var n=t.length;if(0===n)return NaN;var r,i=t[0];if(e>t[n-1])return NaN;if(e<t[0])return t[0];for(var a=1;a<t.length;a++){if(e<=t[a]){r=t[a];break}i=t[a]}return r}var i={PRECISION:1e-5,equal:function(t,e){return Math.abs(t-e)<i.PRECISION},clamp:function(t,e,n){return t<e?e:t>n?n:t},snapTo:function(t,e){var i=n(t,e),a=r(t,e);if(isNaN(i)||isNaN(a)){if(t[0]>=e)return t[0];var s=t[t.length-1];if(s<=e)return s}return Math.abs(e-i)<Math.abs(a-e)?i:a},snapFloor:function(t,e){return n(t,e)},snapCeiling:function(t,e){return r(t,e)},degreeToRad:function(t){return Math.PI/180*t},radToDegree:function(t){return 180/Math.PI*t},mod:function(t,e){return(t%e+e)%e}};t.exports=i},function(t,e,n){"use strict";function r(){"undefined"!=typeof Float32Array?this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]):this.elements=[1,0,0,0,1,0,0,0,1]}var i=n(1),a=n(4);r.multiply=function(t,e){var n=t.elements,i=e.elements,a=new r;return a.set(n[0]*i[0]+n[3]*i[1]+n[6]*i[2],n[0]*i[3]+n[3]*i[4]+n[6]*i[5],n[0]*i[6]+n[3]*i[7]+n[6]*i[8],n[1]*i[0]+n[4]*i[1]+n[7]*i[2],n[1]*i[3]+n[4]*i[4]+n[7]*i[5],n[1]*i[6]+n[4]*i[7]+n[7]*i[8],n[2]*i[0]+n[5]*i[1]+n[8]*i[2],n[2]*i[3]+n[5]*i[4]+n[8]*i[5],n[2]*i[6]+n[5]*i[7]+n[8]*i[8])},r.equal=function(t,e){for(var n=t.elements,r=e.elements,i=!0,s=0,o=n.length;s<o;s++)if(!a.equal(n[s],r[s])){i=!1;break}return i},i.augment(r,{type:"matrix3",set:function(t,e,n,r,i,a,s,o,u){var c=this.elements;return c[0]=t,c[3]=e,c[6]=n,c[1]=r,c[4]=i,c[7]=a,c[2]=s,c[5]=o,c[8]=u,this},get:function(t,e){return t--,e--,this.elements[3*e+t]},identity:function(){return this.set(1,0,0,0,1,0,0,0,1)},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this},det:function(){var t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],s=t[5],o=t[6],u=t[7],c=t[8];return e*a*c-e*s*u-n*i*c+n*s*o+r*i*u-r*a*o},inverse:function(t){return this.copy(this.getInverse(t))},getInverse:function(t){var e=this.det();if(0===e){if(t)throw"matrix exception: get inverse matrix with 0 det";return console.warn("matrix cannot inverse"),new r}var n=this.elements,i=(n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8],new r);return i.set(n[4]*n[8]-n[7]*n[5],-(n[3]*n[8]-n[6]*n[5]),n[3]*n[7]-n[6]*n[4],-(n[1]*n[8]-n[7]*n[2]),n[0]*n[8]-n[6]*n[2],-(n[0]*n[7]-n[6]*n[1]),n[1]*n[5]-n[4]*n[2],-(n[0]*n[5]-n[3]*n[2]),n[0]*n[4]-n[3]*n[1]),i.multiplyScalar(1/e),i},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},multiply:function(t){return this.copy(r.multiply(this,t))},translate:function(t,e){var n=new r;return n.set(1,0,t,0,1,e,0,0,1),this.copy(r.multiply(n,this))},rotate:function(t){var e=new r;return e.set(Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1),this.copy(r.multiply(e,this))},scale:function(t,e){var n=new r;return n.set(t,0,0,0,e,0,0,0,1),this.copy(r.multiply(n,this))},equal:function(t){return r.equal(this,t)},copy:function(t){for(var e=t.elements,n=this.elements,r=0,i=e.length;r<i;r++)n[r]=e[r];return this},clone:function(){for(var t=new r,e=t.elements,n=this.elements,i=0,a=n.length;i<a;i++)e[i]=n[i];return t},to2DObject:function(){var t=this.elements;return{a:t[0],b:t[1],c:t[3],d:t[4],e:t[6],f:t[7]}},from2DObject:function(t){var e=this.elements;return e[0]=t.a,e[1]=t.b,e[3]=t.c,e[4]=t.d,e[6]=t.e,e[7]=t.f,this}}),t.exports=r},function(t,e,n){"use strict";function r(t,e){if(1===arguments.length){var n=t;t=n[0],e=n[1]}this.x=t||0,this.y=e||0}var i=n(1),a=n(4);r.add=function(t,e){return new r(t.x+e.x,t.y+e.y)},r.sub=function(t,e){return new r(t.x-e.x,t.y-e.y)},r.lerp=function(t,e,n){return new r(t.x+(e.x-t.x)*n,t.y+(e.y-t.y)*n)},r.angle=function(t,e){var n=t.dot(e)/(t.length()*e.length());return Math.acos(a.clamp(n,-1,1))},r.direction=function(t,e){return t.x*e.y-e.x*t.y},i.augment(r,{type:"vector2",set:function(t,e){return this.x=t,this.y=e,this},setComponent:function(t,e){switch(t){case 0:return this.x=e,this;case 1:return this.y=e,this;default:throw new Error("the index out of range:"+t)}},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("the index out of range:"+t)}},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t){return this.copy(r.add(this,t))},sub:function(t){return this.copy(r.sub(this,t))},subBy:function(t){return this.copy(r.sub(t,this))},multiplyScaler:function(t){return this.x*=t,this.y*=t,this},divideScaler:function(t){if(0!==t){var e=1/t;this.x*=e,this.y*=e}else this.x=0,this.y=0;return this},min:function(t){return this.x>t.x&&(this.x=t.x),this.y>t.y&&(this.y=t.y),this},max:function(t){return this.x<t.x&&(this.x=t.x),this.y<t.y&&(this.y=t.y),this},clamp:function(t,e){return this.x<t.x?this.x=t.x:this.x>e.x&&(this.x=e.x),this.y<t.y?this.y=t.y:this.y>e.y&&(this.y=e.y),this},clampScale:function(){var t,e;return function(n,i){return void 0===t&&(t=new r,e=new r),t.set(n,n),e.set(i,i),this.clamp(t,e)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScaler(this.length())},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y;return e*e+n*n},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},angleTo:function(t,e){var n=this.angle(t),i=r.direction(this,t)>=0;return e?i?2*Math.PI-n:n:i?n:2*Math.PI-n},vertical:function(t){return t?new r(this.y,(-this.x)):new r((-this.y),this.x)},angle:function(t){return r.angle(this,t)},setLength:function(t){var e=this.length();return 0!==e&&t!==e&&this.multiplyScaler(t/e),this},isZero:function(){return 0===this.x&&0===this.y},lerp:function(t,e){return this.copy(r.lerp(this,t,e))},equal:function(t){return a.equal(this.x,t.x)&&a.equal(this.y,t.y)},clone:function(){return new r(this.x,this.y)}}),t.exports=r},function(t,e,n){"use strict";function r(t,e,n){if(1===arguments.length)if(i.isArray(t)){var r=t;t=r[0],e=r[1],n=r[2]}else if("vector2"===t.type){var a=t;t=a.x,e=a.y,n=1}this.x=t||0,this.y=e||0,this.z=n||0}var i=n(1),a=n(4);r.add=function(t,e){return new r(t.x+e.x,t.y+e.y,t.z+e.z)},r.sub=function(t,e){return new r(t.x-e.x,t.y-e.y,t.z-e.z)},r.lerp=function(t,e,n){return new r(t.x+(e.x-t.x)*n,t.y+(e.y-t.y)*n,t.z+(e.z-t.z)*n)},
	r.cross=function(t,e){var n=t.x,i=t.y,a=t.z,s=e.x,o=e.y,u=e.z;return new r(i*u-a*o,a*s-n*u,n*o-i*s)},r.angle=function(t,e){var n=t.dot(e)/(t.length()*e.length());return Math.acos(a.clamp(n,-1,1))},i.augment(r,{type:"vector3",set:function(t,e,n){return this.x=t,this.y=e,this.z=n,this},setComponent:function(t,e){switch(t){case 0:return this.x=e,this;case 1:return this.y=e,this;case 2:return this.z=e,this;default:throw new Error("index is out of range:"+t)}},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range:"+t)}},add:function(t){return this.copy(r.add(this,t))},sub:function(t){return this.copy(r.sub(this,t))},subBy:function(t){return this.copy(r.sub(t,this))},multiplyScaler:function(t){return this.x*=t,this.y*=t,this.z*=t,this},divideScaler:function(t){if(0!==t){var e=1/t;this.x*=e,this.y*=e,this.z*=e}else this.x=0,this.y=0,this.z=0;return this},min:function(t){return this.x>t.x&&(this.x=t.x),this.y>t.y&&(this.y=t.y),this.z>t.z&&(this.z=t.z),this},max:function(t){return this.x<t.x&&(this.x=t.x),this.y<t.y&&(this.y=t.y),this.z<t.z&&(this.z=t.z),this},clamp:function(t,e){return this.x<t.x?this.x=t.x:this.x>e.x&&(this.x=e.x),this.y<t.y?this.y=t.y:this.y>e.y&&(this.y=e.y),this.z<t.z?this.z=t.z:this.z>e.z&&(this.z=e.z),this},clampScale:function(){var t,e;return function(n,i){return void 0===t&&(t=new r,e=new r),t.set(n,n,n),e.set(i,i,i),this.clamp(t,e)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScaler(this.length())},setLength:function(t){var e=this.length();return 0!==e&&t!==e&&this.multiplyScaler(t/e),this},lerp:function(t,e){return this.copy(r.lerp(this,t,e))},cross:function(t){return this.copy(r.cross(this,t))},angle:function(t){return r.angle(this,t)},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},applyMatrix:function(t){var e=t.elements,n=e[0]*this.x+e[3]*this.y+e[6]*this.z,r=e[1]*this.x+e[4]*this.y+e[7]*this.z,i=e[2]*this.x+e[5]*this.y+e[8]*this.z;return this.x=n,this.y=r,this.z=i,this},copy:function(t){return this.x=t.x,this.y=t.y,this.z=void 0!==t.z?t.z:1,this},equal:function(t){return a.equal(this.x,t.x)&&a.equal(this.y,t.y)&&a.equal(this.z,t.z)},clone:function(){return new r(this.x,this.y,this.z)}}),t.exports=r},function(t,e,n){var r=n(202);if(window.G){new r(window.G)}else t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(52),a=function(t){this.canvas=t,this.el=t.get("el"),this.current=null,this.pre=null};r.augment(a,{tryTrigger:function(t,e){t.__listeners&&t.trigger(e)},getCurrent:function(t){var e=this.canvas,n=e.getPointByClient(t.clientX,t.clientY);this.point=n,this.pre=this.current,this.current=e.getShape(n.x,n.y)},mousemove:function(t){this.getCurrent(t);var e=this.point,n=this.canvas;if(n.has("canvas-mousemove")){var r=new i("canvas-mousemove",t,(!0),(!0));r.x=e.x,r.y=e.y,r.clientX=t.clientX,r.clientY=t.clientY,r.currentTarget=n,this.tryTrigger(n,r)}if(this.pre&&this.pre!==this.current){var a=new i("mouseleave",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.pre,a.target=this.pre,this.tryTrigger(this.pre,a)}if(this.current){var s=new i("mousemove",t,(!0),(!0));if(s.x=e.x,s.y=e.y,s.clientX=t.clientX,s.clientY=t.clientY,s.currentTarget=this.current,s.target=this.current,this.tryTrigger(this.current,s),this.pre!==this.current){var o=new i("mouseenter",t,(!0),(!0));o.x=e.x,o.y=e.y,o.clientX=t.clientX,o.clientY=t.clientY,o.currentTarget=this.current,o.target=this.current,this.tryTrigger(this.current,o)}}},mousedown:function(t){var e=this.point,n=this.canvas;if(n.has("canvas-mousedown")){var r=new i("canvas-mousedown",t,(!0),(!0));r.x=e.x,r.y=e.y,r.clientX=t.clientX,r.clientY=t.clientY,r.currentTarget=n,this.tryTrigger(n,r)}if(this.current){var a=new i("mousedown",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.current,a.target=this.current,this.tryTrigger(this.current,a)}},mouseup:function(t){var e=this.point,n=this.canvas;if(n.has("canvas-mouseup")){var r=new i("canvas-mouseup",t,(!0),(!0));r.x=e.x,r.y=e.y,r.clientX=t.clientX,r.clientY=t.clientY,r.currentTarget=n,this.tryTrigger(n,r)}if(this.current){var a=new i("mouseup",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.current,a.target=this.current,this.tryTrigger(this.current,a)}},click:function(t){this.getCurrent(t);var e=this.point,n=this.canvas;if(n.has("canvas-click")){var r=new i("canvas-click",t,(!0),(!0));r.x=e.x,r.y=e.y,r.clientX=t.clientX,r.clientY=t.clientY,r.currentTarget=n,this.tryTrigger(n,r)}if(this.current){var a=new i("click",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.current,a.target=this.current,this.tryTrigger(this.current,a)}},dblclick:function(t){var e=this.point,n=this.canvas;if(n.has("canvas-dblclick")){var r=new i("canvas-dblclick",t,(!0),(!0));r.x=e.x,r.y=e.y,r.clientX=t.clientX,r.clientY=t.clientY,r.currentTarget=n,this.tryTrigger(n,r)}if(this.current){var a=new i("dblclick",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.current,a.target=this.current,this.tryTrigger(this.current,a)}},mouseout:function(t){var e=this.point,n=this.canvas,r=new i("canvas-mouseleave",t,(!0),(!0));r.x=e.x,r.y=e.y,r.currentTarget=n,this.tryTrigger(n,r)},mouseover:function(t){var e=(this.point,this.canvas),n=new i("canvas-mouseenter",t,(!0),(!0));n.currentTarget=e,this.tryTrigger(e,n)}}),t.exports=a},function(t,e,n){"use strict";function r(t){this.name="mouseEvent",this.type="event",r.superclass.constructor.call(this,t)}var i=n(1),a=n(201),s=n(203);i.extend(r,s),i.augment(r,{__events:function(){var t=this,e=t.get("el"),n=new a(this);e.addEventListener("mouseout",function(t){n.mouseout(t)},!1),e.addEventListener("mouseover",function(t){n.mouseover(t)},!1),e.addEventListener("mousemove",function(t){n.mousemove(t)},!1),e.addEventListener("mousedown",function(t){n.mousedown(t)},!1),e.addEventListener("mouseup",function(t){n.mouseup(t)},!1),e.addEventListener("click",function(t){n.click(t)},!1),e.addEventListener("dblclick",function(t){n.dblclick(t)},!1)}}),t.exports=r},function(t,e,n){var r=n(204);t.exports=r},function(t,e,n){"use strict";function r(t){this.register(t)}var i=n(1);i.augment(r,{register:function(t){var e=this;if(t.plugins||(t.plugins={}),!t.plugins[e.name])switch(t.plugins[e.name]=e,e.type){case"event":e.__registerEvent(t)}},__registerEvent:function(t){var e=this;if(e.__events){var n=t.Canvas.prototype.__events;i.augment(t.Canvas,{__events:function(){n&&n.call(this),e.__events.call(this)}})}}}),t.exports=r},function(t,e,n){"use strict";var r=n(33),i=n(1),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"condition",condition:null}),t.exports=a},function(t,e,n){"use strict";var r=n(33),i=n(1),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"group",group:null}),t.exports=a},function(t,e,n){"use strict";var r=n(44),i=n(1),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"identity",value:null,getText:function(){return this.value.toString()},scale:function(){return 1},invert:function(){return this.value}}),t.exports=a},function(t,e,n){"use strict";function r(t,e){return 1===t?1:Math.log(e)/Math.log(t)}var i=n(1),a=n(43),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,a),i.augment(s,{type:"log",base:2,tickCount:10,calculateTicks:function(){var t,e=this,n=e.base,i=r(n,e.max);t=e.min>0?Math.floor(r(n,e.min)):i-1;for(var a=i-t,s=e.tickCount,o=Math.ceil(a/s),u=[],c=t;c<i+o;c+=o)u.push(Math.pow(n,c));return u},getScalePercent:function(t){var e=this.max,n=this.min;if(e===n)return 0;var i=this.base,a=(r(i,t)-r(i,n))/(r(i,e)-r(i,n));return a},scale:function(t){var e=this.getScalePercent(t),n=this.rangeMin(),r=this.rangeMax();return n+e*(r-n)},invert:function(t){var e=(t-this.rangeMin())/(this.rangeMax()-this.rangeMin()),n=this.base,i=r(n,this.max),a=r(n,this.min),s=e*(i-a)+a;return Math.pow(n,s)}}),t.exports=s},function(t,e,n){"use strict";var r=n(33),i=n(1),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"numberCat",init:function(){var t=this.values;t.sort(function(t,e){return t-e}),i.each(t,function(e,n){t[n]=e.toString()}),this.ticks=t}}),t.exports=a},function(t,e,n){"use strict";function r(t,e){var n=Math.E,r=Math.pow(n,Math.log(e)/t);return r}var i=n(1),a=n(43),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,a),i.augment(s,{type:"pow",exponent:2,tickCount:12,calculateTicks:function(){var t,e=this,n=e.exponent,i=Math.ceil(r(n,e.max));if(t=e.min>=0?Math.round(r(n,e.min)):0,t>i){var a=i;i=t,t=a}for(var s=i-t,o=e.tickCount,u=Math.ceil(s/o),c=[],l=t;l<i+u;l+=u)c.push(Math.pow(l,n));return c},getScalePercent:function(t){var e=this.max,n=this.min;if(e===n)return 0;var i=this.exponent,a=(r(i,t)-r(i,n))/(r(i,e)-r(i,n));return a},scale:function(t){var e=this.getScalePercent(t),n=this.rangeMin(),r=this.rangeMax();return n+e*(r-n)},invert:function(t){var e=(t-this.rangeMin())/(this.rangeMax()-this.rangeMin()),n=this.exponent,i=r(n,this.max),a=r(n,this.min),s=e*(i-a)+a;return Math.pow(s,n)}}),t.exports=s},function(t,e,n){"use strict";var r=n(33),i=n(1),a=n(40),s=n(36),o=function(t){o.superclass.constructor.call(this,t)};i.extend(o,r),i.augment(o,{type:"timeCat",mask:"yyyy-mm-dd HH:MM:ss",tickCount:5,init:function(){var t=this,e=this.values;e.sort(function(e,n){return e=t._toTimeStamp(e),n=t._toTimeStamp(n),e-n}),i.each(e,function(n,r){e[r]=t._toTimeStamp(n)}),this.ticks=this.calculateTicks(!0)},calculateTicks:function(t){var e=this,n=e.tickCount,r=s.Category.caculate({maxCount:n,data:e.values}),o=r.ticks;return t&&i.each(o,function(t,n){o[n]=a.format(t,e.mask)}),o},translate:function(t){t=this._toTimeStamp(t);var e=this.values.indexOf(t);return e===-1&&(e=i.isNumber(t)&&t<this.values.length?t:NaN),e},scale:function(t){var e,n=this.rangeMin(),r=this.rangeMax(),i=this.translate(t);return e=this.values.length>1&&i>-1?i/(this.values.length-1):0,n+e*(r-n)},getText:function(t){var e="",n=this.translate(t);n>-1&&(e=this.values[n]);var r=this.formatter;return e=parseInt(e,10),e=r?r(e):a.format(e,this.mask)},getTicks:function(){var t=this,e=this.calculateTicks(!1),n=[];return i.each(e,function(e){var r;r=i.isObject(e)?e:{text:t.getText(e),value:t.scale(e)},n.push(r)}),n},_toTimeStamp:function(t){return i.isString(t)&&(t=t.replace(/-/gi,"/").replace("T"," ").replace("Z",""),t=new Date(t).getTime()),i.isDate(t)&&(t=t.getTime()),t}}),t.exports=o},function(t,e,n){"use strict";var r=n(43),i=n(1),a=n(36),s=n(40),o=function(t){o.superclass.constructor.call(this,t)};i.extend(o,r),i.augment(o,{type:"time",mask:"yyyy-mm-dd",init:function(){var t=this,e=this.values;if(e){var n=[];i.each(e,function(e){n.push(t._toTimeStamp(e))}),this.min=Math.min.apply(null,n),this.max=Math.max.apply(null,n)}o.superclass.init.call(this)},calculateTicks:function(){var t=this,e=t.min,n=t.max,r=t.tickCount,i=t.tickInterval,s=a.Time.caculate({min:e,max:n,minCount:r,maxCount:r,interval:i});return s.ticks},getText:function(t){var e=this.formatter;return t=this.translate(t),t=e?e(t):s.format(t,this.mask)},scale:function(t){return i.isString(t)&&(t=this.translate(t)),o.superclass.scale.call(this,t)},translate:function(t){return i.isString(t)&&(t=t.replace(/-/gi,"/").replace("T"," ").replace("Z",""),t=new Date(t).getTime()),i.isDate(t)&&(t=t.getTime()),t},_toTimeStamp:function(t){return i.isString(t)&&(t=t.replace(/-/gi,"/").replace("T"," ").replace("Z",""),t=new Date(t).getTime()),i.isDate(t)&&(t=t.getTime()),t}}),t.exports=o},function(t,e,n){var r=n(214);t.exports=r},function(t,e,n){function r(t,e,n,r){var i,o,c,l,h=[],f=!!r;if(f){c=new u(1/0,1/0),l=new u((-(1/0)),(-(1/0)));for(var g=0,p=t.length;g<p;g++){var v=a(t[g]);c.min(v),l.max(v)}c.min(a(r[0])),l.max(a(r[1]))}for(var g=0,d=t.length;g<d;g++){var v=a(t[g]);if(n)i=a(t[g?g-1:d-1]),o=a(t[(g+1)%d]);else{if(0===g||g===d-1){h.push([v.x,v.y]);continue}i=a(t[g-1]),o=a(t[g+1])}var x=u.sub(o,i);s(x,e);var m=v.distanceTo(i),y=v.distanceTo(o),_=m+y;0!==_&&(m/=_,y/=_);var S=s(x.clone(),-m),w=s(x.clone(),y),b=u.add(v,S),M=u.add(v,w);f&&(b.max(c),b.min(l),M.max(c),M.min(l)),h.push([b.x,b.y]),h.push([M.x,M.y])}return n&&h.push(h.shift()),h}function i(t,e,n){for(var i=!!e,a=[],s=0,o=t.length;s<o;s+=2)a.push([t[s],t[s+1]]);for(var u,c,l,h=r(a,.4,i,n),f=a.length,g=[],s=0;s<f-1;s++)u=h[2*s],c=h[2*s+1],l=a[s+1],g.push(["C",u[0],u[1],c[0],c[1],l[0],l[1]]);return i&&(u=h[f],c=h[f+1],l=a[0],g.push(["C",u[0],u[1],c[0],c[1],l[0],l[1]])),g}function a(t){return new u(t[0],t[1])}function s(t,e){return t.x*=e,t.y*=e,t}var o=n(3),u=o.Vector2;t.exports={catmullRom2bezier:i}},function(t,e,n){var r=n(18),i=n(216);r.link=function(t,e){return new i({dims:t,nodes:e})},t.exports=i},function(t,e,n){var r=n(1),i=n(18),a=n(2),s="..x",o="..y",u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,i),r.augment(u,{type:"link",nodes:null,getFromField:function(){var t=this.getDims();return t[2]},getToField:function(){var t=this.getDims();return t[3]},initDims:function(t){t.unshift(o),t.unshift(s)},execFrame:function(t){var e=this,n=e.getFromField(),r=e.getToField(),i=[];return t.each(function(t){var a=t[n],u=t[r],c=e.findObj(a),l=e.findObj(u);t[s]=[c.x,l.x],t[o]=[c.y,l.y],i.push(t)}),new a(i)},findObj:function(t){var e=this,n=e.nodes,i=null;return r.each(n,function(e){if(e.id===t)return i=e,!1}),i}}),t.exports=u},function(t,e,n){"use strict";var r=n(18),i={dot:n(218),rect:n(219)};r.tree=i,t.exports=i},function(t,e,n){"use strict";var r=n(81),i=function(t){return new r({dims:t})};t.exports=i},function(t,e,n){"use strict";var r=n(1),i=n(81),a="..x",s="..y",o=function(t){return new i({dims:t,getStatObject:function(t,e){var n=r.mix({},t);return n[a]=[e.start.x,e.start.x,e.end.x,e.end.x],n[s]=[e.start.y,e.end.y,e.end.y,e.start.y],n}})};t.exports=o},function(t,e,n){"use strict";function r(t,e,n){return e=e||1,new i({dims:t,ratio:e,mode:n})}var i=n(221),a=function(t,e){return r(t,e,"squarify")};a.squarify=function(t,e){return r(t,e,"squarify")},a.sliceDice=function(t,e){return r(t,e,"slice-dice")},t.exports=a},function(t,e,n){"use strict";function r(t){return 1-t}var i=n(1),a=n(18),s=n(259),o=n(2),u="..x",c="..y",l="_value",h=function(t){h.superclass.constructor.call(this,t)};i.extend(h,a),i.augment(h,{type:"treemap",mode:"squarify",ratio:1,getValueField:function(){var t=this.getDims();return t[3]||l},getChildrenField:function(){var t=this.getDims();return t[2]},initDims:function(t){t.unshift(c),t.unshift(u)},_copyObject:function(t){var e=i.mix({},t);return e},_extractData:function(t,e){for(var n=this,a=t.length-1;a>=0;a--){var s=t[a],o=n._copyObject(s);o[u]=[],o[c]=[],o[u].push(s.x),o[c].push(r(s.y+s.dy)),o[u].push(s.x),o[c].push(r(s.y)),o[u].push(s.x+s.dx),o[c].push(r(s.y)),o[u].push(s.x+s.dx),o[c].push(r(s.y+s.dy)),e.push(o);var l=n.getChildrenField();i.isArray(s[l])&&n._extractData(s[l],e)}},exec:function(t){var e=this,n=[],r=o.merge.apply(null,t);return n.push(e.execFrame(r)),n},execFrame:function(t){var e=this,n=t.toJSON(),r=(e.getDims(),new s.Squarify({nodes:n,mode:e.mode,childrenField:e.getChildrenField(),valueField:e.getValueField(),ratio:e.ratio})),i=r.getNodes(),n=[];e._extractData(i,n);var t=new o(n);return t}}),t.exports=h},function(t,e,n){"use strict";var r=n(45),i=function(t,e){return new r({dims:t,binWidth:e})};t.exports=i},function(t,e,n){"use strict";function r(t,e,n){var r=[];return s.each(t,function(t){r.push(t*e*n/2)}),r}function i(t,e){var n=[];return s.each(t,function(t){n.push(t*e/2)}),n}var a=n(45),s=n(1),o=function(t,e,n){return new a({ratio:n||.5,dims:t,binWidth:e||.03,_getDimVaues:function(t,e,n){var r=this,i=r.getDimRange(e),a=i.max-i.min,o=[];return s.each(n,function(e){o.push(t+a*e)}),o},toBin:function(t){var e=this,n=e.getBinDims();if(n<2)throw"the bin.rect method only support 2 dimenssion!";var a=n[0],s=n[1],o=e.binWidth,u=e.ratio,c=e._center([t[a],t[s]]),l=r([-.5,-1.5,-.5,.5,1.5,.5],o,u),h=i([-1,0,1,1,0,-1],o);t[a]=e._getDimVaues(c[0],a,l),t[s]=e._getDimVaues(c[1],s,h)},_center:function(t){var e,n,r,i=this,a=i.binWidth,s=i.getBinDims(),o=s[0],u=i.getDimRange(o),c=a*(u.max-u.min)/2,l=s[1],h=i.getDimRange(l),f=a*(h.max-h.min)/2,g=i.ratio;return n=[t[0]/(c*g),t[1]/f],r=i._centerForBasis(n),e=[r[0]*c,r[1]*f]},_chkOdd:function(t){var e=parseInt(t);return e?!!(e%2):"0"},_aroundX:function(t){var e,n,r,i=this;return t=t<1?1:t,i._chkOdd(t)?n=r=parseInt(t)+.5:t%2===0?n=r=parseInt(t)-.5:(n=parseInt(t)-.5,r=n+2),e=[n,r]},_aroundY:function(t){var e,n,r;return t=t<1?1:t,n=parseInt(t),r=n+1,e=[n,r]},_shortPoint:function(t,e,n){var r,i,a=this,s=(t[1]-.5)%4;1===s?a._chkOdd(e[1])?(r=[t[0],e[0]],i=[t[1],e[1]]):(r=[t[1],e[0]],i=[t[0],e[1]]):a._chkOdd(e[0])?(r=[t[0],e[0]],i=[t[1],e[1]]):(r=[t[1],e[0]],i=[t[0],e[1]]);var o=Math.abs(n[0]-r[0])+Math.abs(n[1]-r[1]),u=Math.abs(n[0]-i[0])+Math.abs(n[1]-i[1]);return o===u?r[0]<i[0]?r:i:o<u?r:i},_centerForBasis:function(t){var e,n,r,i,a=this,s=a._aroundX(t[0]),o=a.ratio;return s[0]===s[1]?(r=s[0],r>2&&a._chkOdd(r/2)?(t[1]=t[1]<1?1:t[1],i=a._chkOdd(parseInt(t[1]))?parseInt(t[1])+1:parseInt(t[1])):(t[1]=t[1]<1?1:t[1],i=a._chkOdd(parseInt(t[1]))?parseInt(t[1]):parseInt(t[1])-1),e=[r,i]):(t[1]=t[1]<1?1:t[1],n=a._aroundY(t[1]),e=a._shortPoint(s,n,t)),e[0]=e[0]*o,e}})};t.exports=o},function(t,e,n){var r={dot:n(222),rect:n(227),hex:n(223),quantile:n(225)};t.exports=r},function(t,e,n){var r=n(82);r.letter=n(226),t.exports=r},function(t,e,n){"use strict";var r=n(82),i=function(t,e){return new r({dims:t,binWidth:e,fractions:4})};t.exports=i},function(t,e,n){"use strict";var r=n(45),i=function(t,e){return new r({dims:t,binWidth:e,toBin:function(t){var e=this,n=e.getBinDims();if(n.length<1)throw"the bin.rect method support for minimum one dimension!";if(1===n.length){var r=n[0];t[r]=e._getValueRange(r,t[r])}else{var i=n[0],a=n[1],s=e._getValueRange(i,t[i]),o=e._getValueRange(a,t[a]);t[i]=[s[0],s[0],s[1],s[1]],t[a]=[o[0],o[1],o[1],o[0]]}},_getValueRange:function(t,e){var n=this,r=n.binWidth,i=n.getDimRange(t),a=i.max-i.min,s=n.getCenterValue(e,i.max,i.min);return[s-a*r*1/2,s+a*r*1/2]}})};t.exports=i},function(t,e,n){"use strict";function r(t,e,n){return e=e||.01,new i({dims:t,bandWidth:e,kernelType:n})}var i=n(229),a=n(230),s={};s.kernel={},s.kernel.uniform=function(t,e){return r(t,e,"uniform")},s.kernel.triangular=function(t,e){return r(t,e,"triangular")},s.kernel.epanechnikov=function(t,e){return r(t,e,"epanechnikov")},s.kernel.quartic=function(t,e){return r(t,e,"quartic")},s.kernel.triweight=function(t,e){return r(t,e,"triweight")},s.kernel.tricube=function(t,e){return r(t,e,"tricube")},s.kernel.gaussian=function(t,e){return r(t,e,"gaussian")},s.kernel.cosine=function(t,e){return r(t,e,"cosine")},s.normal=function(t,e){return e=e||.01,new a({dims:t,bandWidth:e})},t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(2),a=n(78),s=n(83),o="..density",u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,s),r.augment(u,{kernelType:"",execFrame:function(t){var e=this,n=e.kernelType;if(!n)return t;var r=a[n],s=e.getDims(),o=[];return 2===s.length?o=e._getOneDimDensity(t,r,s):3===s.length&&(o=e._getTwoDimDensity(t,r,s)),new i(o)},_getOneDimDensity:function(t,e,n){for(var i=n[n.length-2],a=t.colArray(i),s=this.getWindowWidth(t,i),u=this.getCoordinate(t,i,s),c=u.length,l=a.length,h=t.rowObject(0),f=[],g=0;g<c;g++){for(var p=0,v=u[g],d=0;d<l;d++)p+=e((v-a[d])/s);var x=1/(l*s)*p,m=r.mix({},h);m[i]=v,m[o]=x,f[g]=m}return f},_getTwoDimDensity:function(t,e,n){for(var i=n[n.length-3],a=n[n.length-2],s=this.getWindowWidth(t,i),u=this.getWindowWidth(t,a),c=this.getCoordinate(t,i,s),l=c.length,h=this.getCoordinate(t,a,u),f=h.length,g=t.rowCount(),p=t.rowObject(0),v=[],d=0;d<l;d++)for(var x=0;x<f;x++){for(var m=0,y=c[d],_=h[x],S=0;S<g;S++)m+=e((y-t.data[S][i])/s)*e((_-t.data[S][a])/u);var w=1/(g*s*u)*m,b=r.mix({},p);b[i]=y,b[a]=_,b[o]=w,v.push(b)}return v}}),t.exports=u},function(t,e,n){"use strict";var r=n(1),i=n(2),a=n(83),s="..density",o=function(t){o.superclass.constructor.call(this,t)};r.extend(o,a),r.augment(o,{execFrame:function(t){for(var e=this,n=t.rowObject(0),a=e.getDims(),o=a[a.length-2],u=this.getWindowWidth(t,o),c=this.getCoordinate(t,o,u),l=c.length,h=i.mean(t,o),f=i.standard_deviation(t,o),g=[],p=0;p<l;p++){var v=c[p],d=e.getNormal(v,h,f),x=r.mix({},n);x[o]=v,x[s]=d,g.push(x)}return new i(g)},getNormal:function(t,e,n){var r=1/(Math.sqrt(2*Math.PI)*n)*Math.exp(-(t-e)*(t-e)/(2*n*n));return r}}),t.exports=o},function(t,e,n){var r={spread:{range:n(232),sd:n(233),se:n(234)},confi:{}};t.exports=r},function(t,e,n){"use strict";var r=n(54),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=i.range(t,e),new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(54),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0),r=i.mean(t,e),a=i.sd(t,e);return n[e]=[r-a,r+a],new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(54),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0),r=i.mean(t,e),a=i.se(t,e);return n[e]=[r-a,r+a],new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(14),a=n(25),s=n(22),o=function(t){return new i(r.mix({},s,{dims:t,regressionType:"cubic",getRegression:function(t){return a("polynomial",t,3)}}))};t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(14),a=n(25),s=n(22),o=n(2),u=function(t){return new i(r.mix({},s,{dims:t,regressionType:"exp",preExecute:function(t){var e=this.getYDim();r.each(t,function(t){var n=o.min(t,e);if(n<0)throw"the field "+e+" has value less than 0,you can't use this regression!"})},getRegression:function(t){return a("exponential",t)}}))};t.exports=u},function(t,e,n){"use strict";function r(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];n+=i*Math.pow(e,r)}return n}var i=n(1),a=["linear","cubic","quadratic"],s={execFnction:function(t,e,n){var r;return r=i.indexOf(a,t)>=0?s.poly(e,n):s[t]?s[t](e[0],e[1],n):n},linear:function(t,e,n){var i=[e,t];return r(i,n)},poly:function(t,e){return r(t,e)},log:function(t,e,n){return t+e*Math.log(n)},pow:function(t,e,n){return t*Math.pow(n,e)},exp:function(t,e,n){return t*Math.pow(Math.E,e*n)}};t.exports=s},function(t,e,n){"use strict";function r(t,e,n){return e=e||.01,new a({dims:t,bandWidth:e,kernelType:n})}var i=n(55);i.mean=n(242),i.median=n(243),i.linear=n(239),i.quadratic=n(245),i.cubic=n(235),i.log=n(241),i.pow=n(244),i.exp=n(236);var a=n(240);i.loess={},i.loess.uniform=function(t,e){return r(t,e,"uniform")},i.loess.triangular=function(t,e){return r(t,e,"triangular")},i.loess.epanechnikov=function(t,e){return r(t,e,"epanechnikov")},i.loess.quartic=function(t,e){return r(t,e,"quartic")},i.loess.triweight=function(t,e){return r(t,e,"triweight")},i.loess.tricube=function(t,e){return r(t,e,"tricube")},i.loess.gaussian=function(t,e){return r(t,e,"gaussian")},i.loess.cosine=function(t,e){return r(t,e,"cosine")},t.exports=i},function(t,e,n){"use strict";var r=n(1),i=n(14),a=n(25),s=n(22),o=function(t){return new i(r.mix({},s,{dims:t,regressionType:"linear",getRegression:function(t){return a("polynomial",t,1)}}))};t.exports=o},function(t,e,n){"use strict";var r=n(55),i=n(1),a=n(78),s=n(2),o=n(168),u=function(t){u.superclass.constructor.call(this,t)};i.extend(u,r),i.augment(u,{kernelType:"",k:10,execFrame:function(t){var e=this,n=e.getDims(),r=[];if(2===n.length){var a=e.getXDim(),o=e.getYDim(),u=e.getData(t),c=e.getInterArray(t,a),l=e.execSmooth(u,c),h=t.rowObject(0);i.each(l,function(t){var e=i.mix({},h);e[a]=t[0],e[o]=t[1],r.push(e)})}else{var a=e.getXDim(),o=e.getYDim(),f=e.getZDim(),u=e.getData(t),c=[];c[0]=e.getInterArray(t,a),c[1]=e.getInterArray(t,o);var l=e.execSmoothThreeDim(u,c),h=t.rowObject(0);i.each(l,function(t){var e=i.mix({},h);e[a]=t[0],e[o]=t[1],e[f]=t[2],r.push(e)})}return new s(r)},execSmooth:function(t,e){for(var n=this,r=e.length,i=t.length,s=n.kernelType,o=a[s],u=[],c=[],l=e[1]-e[0],h=0;h<r;h++){for(var f,g,p,v,d=0,x=0,m=0,y=0,_=0,S=e[h],w=n.getWindowWidth([S],t,[l])[0],b=0;b<i;b++)g=t[b][0],p=t[b][1],f=o((S-g)/w),0!==f&&(d+=f,x+=f*g,m+=f*g*g,y+=f*p,_+=f*g*p);d*m-x*x!==0&&(c[1]=(x*y-d*_)/(x*x-d*m),c[0]=y/d-x/d*c[1],v=c[0]+c[1]*S,u.push([S,v]))}return u},execSmoothThreeDim:function(t,e){for(var n=this,r=e[0].length,i=e[1].length,s=t.length,u=n.kernelType,c=a[u],l=[],h=[],f=e[0][1]-e[0][0],g=e[1][1]-e[1][0],p=0;p<r;p++)for(var v=0;v<i;v++){for(var d,x,m,y,_,S=0,w=0,b=0,M=0,A=0,C=0,k=0,T=0,P=0,I=e[0][p],D=e[1][v],L=n.getWindowWidth([I,D],t,[f,g]),R=L[0],B=L[1],F=0;F<s;F++)x=t[F][0],m=t[F][1],y=t[F][2],d=c((I-x)/R)*c((D-m)/B),0!==d&&(S+=d,w+=d*x,b+=d*m,M+=d*x*m,A+=d*x*x,C+=d*m*m,k+=d*y,T+=d*x*y,P+=d*m*y);var O=[[S,w,b],[w,A,M],[b,M,C]],G=[k,T,P];h=o(O,G),h&&(_=h[0]+h[1]*I+h[2]*D,l.push([I,D,_]))}return l},getWindowWidth:function(t,e,n){var r=this,i=r.k,a=e.length,s=[],o=e[0].length-1,u=0;a<=i&&(i=a),e.sort(function(e,r){for(var i=0,a=0,s=0;s<o;s++)i+=(e[s]-t[s])*(e[s]-t[s])/(n[s]*n[s]),a+=(r[s]-t[s])*(r[s]-t[s])/(n[s]*n[s]);return i-a});for(var c=0;c<o;c++){for(;e[i-1][c]===e[0][c];)i++;var l=1.1*Math.abs(e[i-1][c]-t[c])/n[c];u+=l*l}u=Math.sqrt(u);for(var c=0;c<o;c++)s[c]=u*n[c];return s}}),t.exports=u},function(t,e,n){"use strict";var r=n(1),i=n(14),a=n(25),s=n(22),o=function(t){return new i(r.mix({},s,{dims:t,regressionType:"log",getRegression:function(t){return a("logarithmic",t)}}))};t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(2),a=n(14),s=function(t){return new a({dims:t,getRegressionString:function(){return"y = "+this.curMean},execSmooth:function(t,e,n){var a=this,s=a.getYDim(),o=i.mean(n,s);a.curMean=o;var u=[];return r.each(e,function(t){u.push([t,o])}),u}})};t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(2),a=n(14),s=function(t){return new a({dims:t,getRegressionString:function(){return"y = "+this.curMedian},execSmooth:function(t,e,n){var a=this,s=a.getYDim(),o=i.median(n,s);a.curMedian=o;var u=[];return r.each(e,function(t){u.push([t,o])}),u}})};t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(14),a=n(25),s=n(22),o=n(2),u=function(t){return new i(r.mix({},s,{dims:t,regressionType:"pow",preExecute:function(t){var e=this.getYDim();r.each(t,function(t){var n=o.min(t,e);if(n<0)throw"the field "+e+" has value less than 0,you can't use this regression!"})},getRegression:function(t){return a("power",t)}}))};t.exports=u},function(t,e,n){"use strict";var r=n(1),i=n(14),a=n(25),s=n(22),o=function(t){return new i(r.mix({},s,{regressionType:"quadratic",dims:t,getRegression:function(t){return a("polynomial",t,2)}}))};t.exports=o},function(t,e,n){"use strict";var r=n(10),i=n(2),a=function(t){return new r({dims:t,initDims:function(t){t.push("..count")},transform:function(t,e){var n=t.rowObject(0);return n[e]=t.rowCount(),new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(10),i=n(2),a=n(1),s=function(t){return new r({dims:t,getStatDims:function(){var t=this.stat;if(t)return t.getStatDims();var e=this.getDims(),n=e.length,r=[e[n-1]];return r},execFrame:function(t){var e=this.getStatDims(),n=e[e.length-1],r=this.getDims()[0];r&&r!==n&&(t=i.sort(t,r));var s=this.stat,o=[];if(s&&"density"===s.type){var u=s.getWindowWidth(t,r),c=t.colArray(n),l=0;a.each(c,function(t){l+=t*u,o.push(l)})}else o=i.cumulative(t,n);return t.colReplace(n,o),t}})};t.exports=s},function(t,e,n){var r={count:n(246),max:n(249),min:n(252),mean:n(250),median:n(251),proportion:n(255),range:n(256),percent:n(254),sd:n(257),mode:n(253),sum:n(258),cumulative:n(247)};t.exports=r},function(t,e,n){"use strict";var r=n(10),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=i.max(t,e),new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(10),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=i.mean(t,e),new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(10),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=i.median(t,e),new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(10),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=i.min(t,e),new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(10),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=i.mode(t,e),new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(10),a=n(2),s=n(84),o="..percent",u=function(t){return new i(r.mix({dims:t,initDims:function(t){var e=t[t.length-1];t.splice(t.length-1,0,o),this.percetDim=e},getStatDims:function(){return[o]},transform:function(t,e,n){e=this.percetDim;var r=a.sum(t,e),i=a.sum(n,e),s=t.rowObject(0);return s["..percent"]=r/i,s[e]=r,new a([s])}},s))};t.exports=u},function(t,e,n){"use strict";var r=n(1),i=n(10),a=n(2),s=n(84),o=function(t){return new i(r.mix({dims:t,initDims:function(t){t.push("..proportion")},transform:function(t,e,n){var r=t.rowCount()/n.rowCount(),i=t.rowObject(0);return i[e]=r,new a([i])}},s))};t.exports=o},function(t,e,n){"use strict";var r=n(10),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=i.max(t,e)-i.min(t,e),new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(10),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=i.standard_deviation(t,e),new i([n])}})};t.exports=a},function(t,e,n){"use strict";var r=n(10),i=n(2),a=function(t){return new r({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=i.sum(t,e),new i([n])}})};t.exports=a},function(t,e,n){var r=n(85);r.Squarify=n(260),t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n(85),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{mode:"squarify",ratio:.5*(1+Math.sqrt(5)),processNodes:function(t,e,n){var i=this;if(r.isArray(t)&&t.length){var a,s,o,u=[],c=t[0],l=i.mode,h=i.valueField,f=i.childrenField,g=t.slice(),p=1/0,v="slice"===l?e.dx:"dice"===l?e.dy:"slice-dice"===l?c.depth%2?e.dy:e.dx:Math.min(e.dx,e.dy);for(i.scale(g,e.dx*e.dy/n),u.area=0;(o=g.length)>0;)u.push(a=g[o-1]),u.area+=a.area,"squarify"!==l||(s=i.worst(u,v))<=p?(g.pop(),p=s):(u.area-=u.pop().area,i.position(u,v,e,!1),v=Math.min(e.dx,e.dy),u.length=u.area=0,p=1/0);u.length&&(i.position(u,v,e,!0),u.length=u.area=0),t.forEach(function(t){i.processNodes(t[f],i.pad(t),t[h])})}},worst:function(t,e){for(var n,r=this,i=t.area,a=0,s=1/0,o=-1,u=t.length;++o<u;)(n=t[o].area)&&(n<s&&(s=n),n>a&&(a=n));return i*=i,e*=e,i?Math.max(e*a*r.ratio/i,i/(e*s*r.ratio)):1/0}}),t.exports=a},function(t,e,n){var r=n(262);t.exports=r},function(t,e){"use strict";function n(t,e,r){r=r||0;for(var i in e)if(e.hasOwnProperty(i)){var o=e[i];null!==o&&s.isObject(o)?(s.isObject(t[i])||(t[i]={}),r<a?n(t[i],e[i]):t[i]=e[i]):s.isArray(o)?(t[i]=[],t[i]=t[i].concat(o)):void 0!==o&&(t[i]=e[i])}}var r=Object.prototype,i=r.toString,a=5,s={
	substitute:function(t,e){return t&&e?t.replace(/\\?\{([^{}]+)\}/g,function(t,n){return"\\"===t.charAt(0)?t.slice(1):void 0===e[n]?"":e[n]}):t},ucfirst:function(t){return t+="",t.charAt(0).toUpperCase()+t.substring(1)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},isBoolean:function(t){return"boolean"==typeof t},isFunction:function(t){return"function"==typeof t},isArray:"isArray"in Array?Array.isArray:function(t){return"[object Array]"===i.call(t)},isDate:function(t){return"[object Date]"===i.call(t)},isNull:function(t){return void 0===t||null===t},notNull:function(t){return!s.isNull(t)},isBlank:function(t){if(s.isArray(t))return 0===t.length;if(s.isObject(t)){var e=0;return s.each(t,function(t,n){e++}),0===e}return!1},isObject:"[object Object]"===i.call(null)?function(t){return null!==t&&void 0!==t&&"[object Object]"===i.call(t)&&void 0===t.ownerDocument}:function(t){return"[object Object]"===i.call(t)},extend:function(t,e,n,r){s.isFunction(e)||(n=e,e=t,t=function(){});var i=Object.create?function(t,e){return Object.create(t,{constructor:{value:e}})}:function(t,e){function n(){}n.prototype=t;var r=new n;return r.constructor=e,r},a=i(e.prototype,t);return t.prototype=s.mix(a,t.prototype),t.superclass=i(e.prototype,e),s.mix(a,n),s.mix(t,r),t},augment:function(t){for(var e=s.toArray(arguments),n=1;n<e.length;n++){var r=e[n];s.isFunction(r)&&(r=r.prototype),s.mix(t.prototype,r)}},toArray:function(t){return t&&t.length?Array.prototype.slice.call(t):[]},mix:function(){var t=s.toArray(arguments),e=t[0];if(e===!0){e=t[1];for(var r=2;r<t.length;r++){var i=t[r];n(e,i)}}else for(var r=1;r<t.length;r++){var i=t[r];for(var a in i)i.hasOwnProperty(a)&&"constructor"!==a&&(e[a]=i[a])}return e},each:function(t,e){if(t)if(s.isObject(t)){for(var n in t)if(t.hasOwnProperty(n)){var r=e(t[n],n);if(r===!1)break}}else if(t.length)for(var i=0;i<t.length;i++){var r=e(t[i],i);if(r===!1)break}},requestAnimationFrame:function(t){var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16)};return e(t)},cancelAnimationFrame:function(t){var e=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||function(t){return clearTimeout(t)};return e(t)}};t.exports=s},function(t,e,n){"use strict";function r(t,e){var n=e.toString(),r=n.indexOf(".");if(r===-1)return Math.round(t);var i=n.substr(r+1).length;return parseFloat(t.toFixed(i))}var i=Object.prototype,a=(i.toString,n(261));a.mix(a,{mixin:function(t,e){if(t&&e){t._mixins=e,t.ATTRS=t.ATTRS||{};var n={};a.each(e,function(e){a.augment(t,e);var r=e.ATTRS;r&&a.mix(n,r)}),t.ATTRS=a.mix(n,t.ATTRS)}},map:function(t,e){var n=[];return a.each(t,function(t,r){n.push(e(t,r))}),n},filter:function(t,e){var n=[];return a.each(t,function(t,r){e(t,r)&&n.push(t)}),n},guid:function(){var t={};return function(e){return e=e||"g",t[e]?t[e]+=1:t[e]=1,e+t[e]}}(),inArray:function(t,e){return a.indexOf(t,e)!==-1},indexOf:function(t,e){var n=Array.prototype.indexOf;if(n)return n.call(t,e);for(var r=-1,i=0;i<t.length;i++)if(t[i]===e){r=i;break}return r},remove:function(t,e){var n=a.indexOf(t,e);n!==-1&&t.splice(n,1)},empty:function(t){if(!(t instanceof Array))for(var e=t.length-1;e>=0;e--)delete t[e];t.length=0},equalsArray:function(t,e){if(t===e)return!0;if(!t||!e)return!1;if(t.length!==e.length)return!1;for(var n=!0,r=0;r<t.length;r++)if(t[r]!==e[r]){n=!1;break}return n},wrapBehavior:function(t,e){return t["_wrap_"+e]=function(n){t[e](n)}},getWrapBehavior:function(t,e){return t["_wrap_"+e]},fixedBase:function(t,e){return r(t,e)},length:function(t){if(a.isArray(t))return t.length;if(a.isObject(t)){var e=0;return a.each(t,function(){e++}),e}return 0},clone:function(t){if("object"!=typeof t||null===t)return t;if(a.isArray(t))for(var e=[],n=0,r=t.length;n<r;n++)"object"==typeof t[n]&&null!=t[n]?e[n]=a.clone(t[n]):e[n]=t[n];else{var e={};for(var n in t)"object"==typeof t[n]&&null!=t[n]?e[n]=a.clone(t[n]):e[n]=t[n]}return e}}),t.exports=a},function(t,e,n){"use strict";var r=n(6),i=n(266),a=n(267),s=n(88),o=(n(13),n(265)),u=n(3),c=u.Vector3,l=function(t){};r.augment(l,{canFill:!1,canStroke:!1,initAttrs:function(t){return this.__attrs={},this.attr(r.mix({},this.getDefaultAttrs(),t)),this},getDefaultAttrs:function(){var t=this,e=t.constructor,n=e.__attrs;return r.mix(!0,{},n)},attr:function(t,e){var n=this;if(0===arguments.length)return n.__attrs;if(r.isObject(t))return r.each(t,function(t,e){n._setAttr(e,t)}),n.__afterSetAttrAll&&n.__afterSetAttrAll(t),n;if(2===arguments.length){if(n._setAttr(t,e)!==!1){var i="__afterSetAttr"+r.ucfirst(t);n[i]&&n[i](e)}return n}return n._getAttr(t)},resetAttrs:function(){var t=this,e=t,n=t.get("context"),o=e.__attrs;e.isGroup?r.each(o,function(t,a){i[a]&&("fillStyle"===a&&(t=s.parseStyle(t,e,o.fillOpacity)),"strokeStyle"===a&&(t=s.parseStyle(t,e,o.strokeOpacity)),"lineDash"===a&&n.setLineDash?r.isArray(t)?n.setLineDash(t):r.isString(t)&&n.setLineDash(t.split(" ")):n[a]=t)}):r.each(o,function(t,i){a[i]&&("fillStyle"===i&&(t=s.parseStyle(t,e,o.fillOpacity)),"strokeStyle"===i&&(t=s.parseStyle(t,e,o.strokeOpacity)),"lineDash"===i&&n.setLineDash?r.isArray(t)?n.setLineDash(t):r.isString(t)&&n.setLineDash(t.split(" ")):n[i]=t)})},_getAttr:function(t){var e=this,n=e.__attrs[t],i="__getAttr"+r.ucfirst(t);return e[i]&&(n=e[i](n)),n},_setAttr:function(t,e){var n=this,i="__setAttr"+r.ucfirst(t);return n[i]&&(e=n[i](e,n.__attrs[t])),e!==n.__attrs[t]&&(n.__attrs[t]=e,n)},__setAttrFill:function(t){var e=this;if(e.canFill)return e.__attrs.fillStyle=t,t},hasFill:function(){if(this.canFill)for(var t=this;t;){if(t.__attrs.fill)return t.__attrs.fill;t=t.get("parent")}},__setAttrStroke:function(t){var e=this;if(e.canStroke)return this.__attrs.strokeStyle=t,t},hasStroke:function(){if(this.canStroke)for(var t=this;t;){if(t.__attrs.stroke)return t.__attrs.stroke;t=t.get("parent")}},__setAttrOpacity:function(t){return this.__attrs.globalAlpha=t,t},__getAttrOpacity:function(){return this.__attrs.globalAlpha},__setAttrLineWidth:function(t,e){return t>=0?t:e||1},__setAttrClip:function(t){var e=this;if(t&&t.type in o)return null===t.get("canvas")&&(t=r.clone(t)),t.set("parent",e.get("parent")),t.set("context",e.get("context")),t.inside=function(n,r){var i=new c(n,r,1);return t.invert(i,e.get("canvas")),t.__isPointInFill(i.x,i.y)},t}}),t.exports=l},function(t,e){"use strict";t.exports={circle:1,ellipse:1,fan:1,polygon:1,rect:1,path:1}},function(t,e){"use strict";t.exports={fillStyle:1,strokeStyle:1,globalAlpha:1,shadowBlur:1,shadowColor:1,shadowOffsetX:1,shadowOffsetY:1,lineDash:1}},function(t,e){"use strict";t.exports={fillStyle:1,font:1,globalAlpha:1,lineCap:1,lineWidth:1,lineJoin:1,miterLimit:1,shadowBlur:1,shadowColor:1,shadowOffsetX:1,shadowOffsetY:1,strokeStyle:1,textAlign:1,textBaseline:1,lineDash:1}},function(t,e,n){var r=n(6),i=n(87),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{init:function(){a.superclass.init.call(this);var t=this,e=t.get("canvasId"),n=document.getElementById(e);t.set("el",n),t.set("context",n.getContext("2d")),t.set("canvas",t),t.__events()},__events:function(){},getPointByClient:function(t,e){var n=this,r=n.get("el"),i=r.getBoundingClientRect(),a=i.right-i.left,s=i.bottom-i.top;return{x:(t-i.left)*(r.width/a),y:(e-i.top)*(r.height/s)}},getClientByPoint:function(t,e){var n=this,r=n.get("el"),i=r.getBoundingClientRect(),a=i.right-i.left,s=i.bottom-i.top;return{clientX:t/(r.width/a)+i.left,clientY:e/(r.height/s)+i.top}},beforeDraw:function(){var t=this,e=t.get("context"),n=t.get("el");e.clearRect(0,0,n.width,n.height)}}),t.exports=a},function(t,e,n){"use strict";var r=n(6),i=function(){};r.augment(i,{initEventDispatcher:function(){this.__listeners={}},on:function(t,e){var n=this.__listeners;return r.isNull(n[t])&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e),this},off:function(t,e){var n=this.__listeners;return 0===arguments.length?(this.__listeners={},this):1===arguments.length&&r.isString(t)?(n[t]=[],this):2===arguments.length&&r.isString(t)&&r.isFunction(e)?(r.remove(n[t],e),this):void 0},has:function(t,e){var n=this.__listeners;return 0===arguments.length&&!r.isBlank(n)||(!(1!==arguments.length||!n[t]||r.isBlank(n[t]))||!(2!==arguments.length||!n[t]||n[t].indexOf(e)===-1))},trigger:function(t){var e=this,n=e.__listeners,i=n[t.type];if(t.target=e,r.notNull(i)&&r.each(i,function(n){n.call(e,t)}),t.bubbles){var a=e.get("parent");a&&!t.propagationStopped&&a.trigger(t)}return e}}),t.exports=i},function(t,e,n){"use strict";var r=n(6),i=n(3),a=i.Matrix3,s=(i.Vector3,n(4)),o=function(){};r.augment(o,{initTransform:function(){this.__m=new a},translate:function(t,e){return this.__m.translate(t,e),this},rotate:function(t){return this.__m.rotate(s.degreeToRad(t)),this},scale:function(t,e){return this.__m.scale(t,e),this},transform:function(t){var e=this;return r.each(t,function(t){switch(t[0]){case"t":e.translate(t[1],t[2]);break;case"s":e.scale(t[1],t[2]);break;case"r":e.rotate(t[1]);break;case"m":e.__m=a.multiply(t[1],e.__m)}}),this},setTransform:function(t){return this.__m.identity(),this.transform(t)},getMatrix:function(){return this.__m},setMatrix:function(t){return this.__m=t,this},apply:function(t,e){var n=this;e=e||n;for(var i=n,s=[];i!==e;)s.unshift(i),i=i.get("parent");s.unshift(i);var o=new a;return r.each(s,function(t){o.multiply(t.__m)}),t.applyMatrix(o),this},invert:function(t,e){var n=this;e=e||n;for(var i=n,s=[];i!==e;)s.unshift(i),i=i.get("parent");s.unshift(i);var o=new a;r.each(s,function(t){o.multiply(t.__m)});var u=o.getInverse();return t.applyMatrix(u),this},resetTransform:function(){var t=this,e=t.get("context"),n=t.__m.to2DObject();e.transform(n.a,n.b,n.c,n.d,n.e,n.f)}}),t.exports=o},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=n(56),o=n(4),u=n(35),c=n(3),l=c.Vector2,h=n(13),f=function(t){f.superclass.constructor.call(this,t)};f.ATTRS={x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,arrow:!1},r.extend(f,i),r.augment(f,{canStroke:!0,type:"arc",__setAttrR:function(t,e){return t>=0?t:(h.warn("r \u5fc5\u987b\u5927\u4e8e0"),e)},__setAttrClockwise:function(t,e){return r.isBoolean(t)?t:(h.warn("clockwise \u5fc5\u987b\u662fboolean\u503c"),e)},__setAttrStartAngle:function(t){return o.degreeToRad(t)},__getAttrStartAngle:function(t){return o.radToDegree(t)},__setAttrEndAngle:function(t){return o.degreeToRad(t)},__getAttrEndAngle:function(t){return o.radToDegree(t)},__afterSetAttrX:function(){this.__calculateBox()},__afterSetAttrY:function(){this.__calculateBox()},__afterSetAttrR:function(){this.__calculateBox()},__afterSetAttrStartAngle:function(){this.__calculateBox()},__afterSetAttrEndAngle:function(){this.__calculateBox()},__afterSetAttrClockwise:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.x,r=e.y,i=e.r,a=e.startAngle,o=e.endAngle,u=e.clockwise,c=e.lineWidth,l=s.box(n,r,i,a,o,u),h=c/2;l.minX-=h,l.minY-=h,l.maxX+=h,l.maxY+=h,this.set("box",l)},isPointInPath:function(t,e){var n=this,r=n.__attrs,i=r.x,s=r.y,o=r.r,u=r.startAngle,c=r.endAngle,l=r.clockwise,h=r.lineWidth;return!!n.hasStroke()&&a.arcline(i,s,o,u,c,l,h,t,e)},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,r=n.x,i=n.y,a=n.r,s=n.startAngle,o=n.endAngle,c=n.clockwise,h=n.lineWidth,f=n.arrow;if(e.beginPath(),e.arc(r,i,a,s,o,c),f){var g={x:r+a*Math.cos(o),y:i+a*Math.sin(o)},p=new l(-a*Math.sin(o),a*Math.cos(o));c&&p.multiplyScaler(-1),u.makeArrow(e,p,g,h)}}}),t.exports=f},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=n(13),o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={x:0,y:0,r:0,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"circle",__setAttrR:function(t,e){return t>=0?t:(s.warn("r \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"),e)},__afterSetAttrX:function(){this.__calculateBox()},__afterSetAttrY:function(){this.__calculateBox()},__afterSetAttrR:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.x,r=e.y,i=e.r,a=e.lineWidth,s=a/2+i;this.set("box",{minX:n-s,minY:r-s,maxX:n+s,maxY:r+s})},isPointInPath:function(t,e){var n=this,r=n.hasFill(),i=n.hasStroke();return r&&i?n.__isPointInFill(t,e)||n.__isPointInStroke(t,e):r?n.__isPointInFill(t,e):!!i&&n.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this,r=n.__attrs,i=r.x,s=r.y,o=r.r;return a.circle(i,s,o,t,e)},__isPointInStroke:function(t,e){var n=this,r=n.__attrs,i=r.x,s=r.y,o=r.r,u=r.lineWidth;return a.arcline(i,s,o,0,2*Math.PI,!1,u,t,e)},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,r=n.x,i=n.y,a=n.r;e.beginPath(),e.arc(r,i,a,0,2*Math.PI,!1),e.closePath()}}),t.exports=o},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=(n(4),n(35)),o=n(57),u=n(3),c=u.Vector2,l=function(t){l.superclass.constructor.call(this,t)};l.ATTRS={p1:null,p2:null,p3:null,p4:null,lineWidth:1,arrow:!1},r.extend(l,i),r.augment(l,{canStroke:!0,type:"cubic",__afterSetAttrP1:function(){this.__calculateBox()},__afterSetAttrP2:function(){this.__calculateBox()},__afterSetAttrP3:function(){this.__calculateBox()},__afterSetAttrP4:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.p1,i=e.p2,a=e.p3,s=e.p4;if(!(r.isNull(n)||r.isNull(i)||r.isNull(a)||r.isNull(s))){for(var u=e.lineWidth/2,c=o.extrema(n[0],i[0],a[0],s[0]),l=0,h=c.length;l<h;l++)c[l]=o.at(n[0],i[0],a[0],s[0],c[l]);for(var f=o.extrema(n[1],i[1],a[1],s[1]),l=0,h=f.length;l<h;l++)f[l]=o.at(n[1],i[1],a[1],s[1],f[l]);c.push(n[0],s[0]),f.push(n[1],s[1]),t.set("box",{minX:Math.min.apply(Math,c)-u,maxX:Math.max.apply(Math,c)+u,minY:Math.min.apply(Math,f)-u,maxY:Math.max.apply(Math,f)+u})}},isPointInPath:function(t,e){var n=this,r=n.__attrs,i=r.p1,s=r.p2,o=r.p3,u=r.p4,c=r.lineWidth;return a.cubicline(i[0],i[1],s[0],s[1],o[0],o[1],u[0],u[1],c,t,e)},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,i=n.p1,a=n.p2,o=n.p3,u=n.p4,l=n.lineWidth,h=n.arrow;if(!(r.isNull(i)||r.isNull(a)||r.isNull(o)||r.isNull(u))&&(e.beginPath(),e.moveTo(i[0],i[1]),e.bezierCurveTo(a[0],a[1],o[0],o[1],u[0],u[1]),h)){var f=new c(u[0]-o[0],u[1]-o[1]);s.makeArrow(e,f,{x:u[0],y:u[1]},l)}},getPoint:function(t){var e=this.__attrs;return{x:o.at(e.p4[0],e.p3[0],e.p2[0],e.p1[0],t),y:o.at(e.p4[1],e.p3[1],e.p2[1],e.p1[1],t)}}}),t.exports=l},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=n(3),o=s.Matrix3,u=s.Vector3,c=n(13),l=function(t){l.superclass.constructor.call(this,t)};l.ATTRS={x:0,y:0,rx:1,ry:1,lineWidth:1},r.extend(l,i),r.augment(l,{canFill:!0,canStroke:!0,type:"ellipse",__setAttrRx:function(t,e){return t>0?t:(c.warn("rx \u5927\u4e8e\u7b49\u4e8e0"),e)},__setAttrRy:function(t,e){return t>0?t:(c.warn("ry \u5927\u4e8e\u7b49\u4e8e0"),e)},__afterSetAttrX:function(){this.__calculateBox()},__afterSetAttrY:function(){this.__calculateBox()},__afterSetAttrRx:function(){this.__calculateBox()},__afterSetAttrRy:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.x,r=e.y,i=e.rx,a=e.ry,s=e.lineWidth,o=i+s/2,u=a+s/2;this.set("box",{minX:n-o,minY:r-u,maxX:n+o,maxY:r+u})},isPointInPath:function(t,e){var n=this,r=n.hasFill(),i=n.hasStroke();return r&&i?n.__isPointInFill(t,e)||n.__isPointInStroke(t,e):r?n.__isPointInFill(t,e):!!i&&n.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this,r=n.__attrs,i=r.x,s=r.y,c=r.rx,l=r.ry,h=c>l?c:l,f=c>l?1:c/l,g=c>l?l/c:1,p=new u(t,e,1),v=new o;v.scale(f,g),v.translate(i,s);var d=v.getInverse();return p.applyMatrix(d),a.circle(0,0,h,p.x,p.y)},__isPointInStroke:function(t,e){var n=this,r=n.__attrs,i=r.x,s=r.y,c=r.rx,l=r.ry,h=r.lineWidth,f=c>l?c:l,g=c>l?1:c/l,p=c>l?l/c:1,v=new u(t,e,1),d=new o;d.scale(g,p),d.translate(i,s);var x=d.getInverse();return v.applyMatrix(x),a.arcline(0,0,f,0,2*Math.PI,!1,h,v.x,v.y)},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,r=n.x,i=n.y,a=n.rx,s=n.ry,u=a>s?a:s,c=a>s?1:a/s,l=a>s?s/a:1,h=new o;h.scale(c,l),h.translate(r,i);var f=h.to2DObject();e.beginPath(),e.save(),e.transform(f.a,f.b,f.c,f.d,f.e,f.f),e.arc(0,0,u,0,2*Math.PI),e.restore(),e.closePath()}}),t.exports=l},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=n(4),o=n(56),u=n(3),c=u.Vector2,l=n(13),h=function(t){h.superclass.constructor.call(this,t)};h.ATTRS={x:0,y:0,rs:0,re:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1},r.extend(h,i),r.augment(h,{canFill:!0,canStroke:!0,type:"fan",__setAttrRs:function(t,e){return t>=0?t:(l.warn("rs \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"),e)},__setAttrRe:function(t,e){return t>=0?t:(l.warn("re \u5fc5\u987b\u5927\u4e8e\u7b49\u4f600"),e)},__setAttrClockwise:function(t,e){return r.isBoolean(t)?t:(l.warn("clockwise \u5fc5\u987b\u4e3aboolean\u503c"),e)},__setAttrStartAngle:function(t){return s.degreeToRad(t)},__getAttrStartAngle:function(t){return s.radToDegree(t)},__setAttrEndAngle:function(t){return s.degreeToRad(t)},__getAttrEndAngle:function(t){return s.radToDegree(t)},__afterSetAttrX:function(){this.__calculateBox()},__afterSetAttrY:function(){this.__calculateBox()},__afterSetAttrRs:function(){this.__calculateBox()},__afterSetAttrRe:function(){this.__calculateBox()},__afterSetAttrStartAngle:function(){this.__calculateBox()},__afterSetAttrEndAngle:function(){this.__calculateBox()},__afterSetAttrClockwise:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.x,r=e.y,i=e.rs,a=e.re,s=e.startAngle,u=e.endAngle,c=e.clockwise,l=e.lineWidth,h=o.box(n,r,i,s,u,c),f=o.box(n,r,a,s,u,c),g=Math.min(h.minX,f.minX),p=Math.min(h.minY,f.minY),v=Math.max(h.maxX,f.maxX),d=Math.max(h.maxY,f.maxY),x=l/2;this.set("box",{minX:g-x,minY:p-x,maxX:v+x,maxY:d+x})},isPointInPath:function(t,e){var n=this,r=n.hasFill(),i=n.hasStroke();return r&&i?n.__isPointInFill(t,e)||n.__isPointInStroke(t,e):r?n.__isPointInFill(t,e):!!i&&n.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this,r=n.__attrs,i=r.x,a=r.y,u=r.rs,l=r.re,h=r.startAngle,f=r.endAngle,g=r.clockwise,p=new c(1,0),v=new c(t-i,e-a),d=p.angleTo(v),x=o.nearAngle(d,h,f,g);if(s.equal(d,x)){var m=v.lengthSq();if(u*u<=m&&m<=l*l)return!0}return!1},__isPointInStroke:function(t,e){var n=this,r=n.__attrs,i=r.x,s=r.y,o=r.rs,u=r.re,c=r.startAngle,l=r.endAngle,h=r.clockwise,f=r.lineWidth,g={x:Math.cos(c)*o+i,y:Math.sin(c)*o+s},p={x:Math.cos(c)*u+i,y:Math.sin(c)*u+s},v={x:Math.cos(l)*o+i,y:Math.sin(l)*o+s},d={x:Math.cos(l)*u+i,y:Math.sin(l)*u+s};return!!a.line(g.x,g.y,p.x,p.y,f,t,e)||(!!a.line(v.x,v.y,d.x,d.y,f,t,e)||(!!a.arcline(i,s,o,c,l,h,f,t,e)||!!a.arcline(i,s,u,c,l,h,f,t,e)))},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,r=n.x,i=n.y,a=n.rs,s=n.re,o=n.startAngle,u=n.endAngle,c=n.clockwise,l={x:Math.cos(o)*a+r,y:Math.sin(o)*a+i},h={x:Math.cos(o)*s+r,y:Math.sin(o)*s+i},f={x:Math.cos(u)*a+r,y:Math.sin(u)*a+i};({x:Math.cos(u)*s+r,y:Math.sin(u)*s+i});e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(h.x,h.y),e.arc(r,i,s,o,u,c),e.lineTo(f.x,f.y),e.arc(r,i,a,u,o,!c),e.closePath()}}),t.exports=h},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=n(13),o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={x:0,y:0,img:void 0,width:0,height:0,sx:null,sy:null,swidth:null,sheight:null},r.extend(o,i),r.augment(o,{type:"image",getDefaultAttrs:function(){return o.ATTRS},__setAttrWidth:function(t,e){return t>=0?t:(s.warn("width \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"),e)},__setAttrHeight:function(t,e){return t>=0?t:(s.warn("height \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"),e)},__afterSetAttrX:function(){this.__calculateBox()},__afterSetAttrY:function(){this.__calculateBox()},__afterSetAttrWidth:function(){this.__calculateBox()},__afterSetAttrHeight:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.x,r=e.y,i=e.width,a=e.height;this.set("box",{minX:n,minY:r,maxX:n+i,maxY:r+a})},isPointInPath:function(t,e){var n=this,r=n.__attrs;if(n.get("toDraw")||!r.img)return!1;var i=r.x,s=r.y,o=r.width,u=r.height;return a.rect(i,s,o,u,t,e)},__setLoading:function(t){var e=this,n=e.get("canvas");return t===!1&&e.get("toDraw")===!0&&(e.__cfg.loading=!1,n.draw()),t},__setAttrImg:function(t){var e=this,n=e.__attrs;e.get("context");if(!r.isString(t))return t instanceof Image?(n.width||e.attr("width",t.width),n.height||e.attr("height",t.height),t):t instanceof HTMLElement&&r.isString(t.nodeName)&&"CANVAS"===t.nodeName.toUpperCase()?(n.width||e.attr("width",Number(t.getAttribute("width"))),n.height||e.attr("height",Number(t.getAttribute("height"))),t):t instanceof ImageData?(n.width||e.attr("width",t.width),n.height||e.attr("height",t.height),t):void 0;var i=new Image;i.onload=function(){return!e.get("destroyed")&&(e.attr("imgSrc",t),e.attr("img",i),void e.set("loading",!1))},i.src=t,e.set("loading",!0)},drawInner:function(){var t=this;return t.get("loading")?void t.set("toDraw",!0):void t.__drawImage()},__drawImage:function(){var t=this,e=t.get("context"),n=t.__attrs,i=n.x,a=n.y,s=n.img,o=n.width,u=n.height,c=n.sx,l=n.sy,h=n.swidth,f=n.sheight;return t.set("toDraw",!1),s instanceof Image||s instanceof HTMLElement&&r.isString(s.nodeName)&&"CANVAS"===s.nodeName.toUpperCase()?r.isNull(c)||r.isNull(l)||r.isNull(h)||r.isNull(f)?void e.drawImage(s,i,a,o,u):r.notNull(c)&&r.notNull(l)&&r.notNull(h)&&r.notNull(f)?void e.drawImage(s,c,l,h,f,i,a,o,u):void 0:s instanceof ImageData?void e.putImageData(s,i,a,c||0,l||0,h||o,f||u):void 0}}),t.exports=o},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=n(3),o=s.Vector2,u=n(35),c=n(89),l=function(t){l.superclass.constructor.call(this,t)};l.ATTRS={x1:0,y1:0,x2:0,y2:0,lineWidth:1,arrow:!1},r.extend(l,i),r.augment(l,{canStroke:!0,type:"line",__afterSetAttrX1:function(){this.__calculateBox()},__afterSetAttrY1:function(){this.__calculateBox()},__afterSetAttrX2:function(){this.__calculateBox()},__afterSetAttrY2:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.x1,r=e.y1,i=e.x2,a=e.y2,s=e.lineWidth;this.set("box",c.box(n,r,i,a,s))},isPointInPath:function(t,e){var n=this,r=n.__attrs,i=r.x1,s=r.y1,o=r.x2,u=r.y2,c=r.lineWidth;return!!n.hasStroke()&&a.line(i,s,o,u,c,t,e)},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,r=n.x1,i=n.y1,a=n.x2,s=n.y2,c=n.arrow,l=n.lineWidth;if(e.beginPath(),e.moveTo(r,i),c){var h=new o(a-r,s-i),f=u.getEndPoint(h,new o(a,s),l);e.lineTo(f.x,f.y),u.makeArrow(e,h,f,l)}else e.lineTo(a,s)},getPoint:function(t){var e=this.__attrs;return{x:c.at(e.x1,e.x2,t),y:c.at(e.y1,e.y2,t)}}}),t.exports=l},function(t,e,n){"use strict";function r(t,e,n,r,i){return e*Math.cos(t)*Math.cos(i)-n*Math.sin(t)*Math.sin(i)+r}function i(t,e,n,r,i){return e*Math.sin(t)*Math.cos(i)+n*Math.cos(t)*Math.sin(i)+r}function a(t,e,n){return Math.atan(-n/e*Math.tan(t))}function s(t,e,n){return Math.atan(n/(e*Math.tan(t)))}var o=n(3);o.Vector2,n(4);t.exports={xAt:r,yAt:i,xExtrema:a,yExtrema:s}},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(285),s=n(88),o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={path:null,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"path",__afterSetAttrPath:function(t){var e=this;if(r.isNull(t))return e.set("segments",null),void e.set("box",void 0);var n,i=s.parsePath(t),o=[];!r.isArray(i)||0===i.length||"M"!==i[0][0]&&"m"!==i[0][0]||(r.each(i,function(t){n=new a(t,n),o.push(n)}),e.set("segments",o),e.__calculateBox())},__afterSetAttrLineWidth:function(t){var e=this;e.get("segments");e.__calculateBox()},__afterSetAttrAll:function(t){var e=this;t.path?e.__afterSetAttrPath(t.path):e.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.lineWidth,i=t.get("segments");if(i){var a=1/0,s=-(1/0),o=1/0,u=-(1/0);r.each(i,function(t,e){t.getBBox(n);var r=t.box;r&&(r.minX<a&&(a=r.minX),r.maxX>s&&(s=r.maxX),r.minY<o&&(o=r.minY),r.maxY>u&&(u=r.maxY))}),this.set("box",{minX:a,minY:o,maxX:s,maxY:u})}},isPointInPath:function(t,e){var n=this,r=n.hasFill(),i=n.hasStroke();return r&&i?n.__isPointInFill(t,e)||n.__isPointInStroke(t,e):r?n.__isPointInFill(t,e):!!i&&n.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this,r=n.get("context");if(r)return n.createPath(),r.isPointInPath(t,e)},__isPointInStroke:function(t,e){for(var n=this,r=n.get("segments"),i=n.__attrs,a=i.lineWidth,s=0,o=r.length;s<o;s++)if(r[s].isInside(t,e,a))return!0;return!1},createPath:function(){var t=this,e=t.get("context"),n=t.get("segments");e.beginPath();for(var r=0,i=n.length;r<i;r++)n[r].draw(e)}}),t.exports=o},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=function(t){s.superclass.constructor.call(this,t)};s.ATTRS={points:null,lineWidth:1},r.extend(s,i),r.augment(s,{canFill:!0,canStroke:!0,type:"polygon",__afterSetAttrPoints:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.points,i=e.lineWidth;if(n&&0!==n.length){var a=1/0,s=1/0,o=-(1/0),u=-(1/0);r.each(n,function(t){var e=t[0],n=t[1];e<a&&(a=e),e>o&&(o=e),n<s&&(s=n),n>u&&(u=n)});var c=i/2;t.set("box",{minX:a-c,minY:s-c,maxX:o+c,maxY:u+c})}},isPointInPath:function(t,e){var n=this,r=n.hasFill(),i=n.hasStroke();return r&&i?n.__isPointInFill(t,e)||n.__isPointInStroke(t,e):r?n.__isPointInFill(t,e):!!i&&n.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this,r=n.get("context");return n.createPath(),r.isPointInPath(t,e)},__isPointInStroke:function(t,e){var n=this,r=n.__attrs,i=r.points;if(i.length<2)return!1;var s=r.lineWidth,o=i.slice(0);return i.length>=3&&o.push(i[0]),a.polyline(o,s,t,e)},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,i=n.points;i.length<2||(e.beginPath(),r.each(i,function(t,n){0===n?e.moveTo(t[0],t[1]):e.lineTo(t[0],t[1])}),e.closePath())}}),t.exports=s},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=n(3),o=s.Vector2,u=n(35),c=function(t){c.superclass.constructor.call(this,t)};c.ATTRS={points:null,lineWidth:1,arrow:!1},r.extend(c,i),r.augment(c,{canStroke:!0,type:"polyline",__afterSetAttrPoints:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.lineWidth,i=e.points;if(i&&0!==i.length){var a=1/0,s=1/0,o=-(1/0),u=-(1/0);r.each(i,function(t){var e=t[0],n=t[1];e<a&&(a=e),e>o&&(o=e),n<s&&(s=n),n>u&&(u=n)});var c=n/2;this.set("box",{minX:a-c,minY:s-c,maxX:o+c,maxY:u+c})}},isPointInPath:function(t,e){var n=this,r=n.__attrs;if(n.hasStroke()){var i=r.points;if(i.length<2)return!1;var s=r.lineWidth;return a.polyline(i,s,t,e)}return!1},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,r=n.points,i=n.arrow,a=n.lineWidth;if(!(r.length<2)){e.beginPath(),e.moveTo(r[0][0],r[0][1]);for(var s=1,c=r.length-1;s<c;s++)e.lineTo(r[s][0],r[s][1]);if(i){var l=new o(r[c][0]-r[c-1][0],r[c][1]-r[c-1][1]),h=u.getEndPoint(l,new o(r[c][0],r[c][1]),a);e.lineTo(h.x,h.y),u.makeArrow(e,l,h,a)}else e.lineTo(r[c][0],r[c][1])}}}),t.exports=c},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=(n(4),n(35)),o=n(58),u=n(3),c=u.Vector2,l=function(t){l.superclass.constructor.call(this,t)};l.ATTRS={p1:null,p2:null,p3:null,lineWidth:1,arrow:!1},r.extend(l,i),r.augment(l,{canStroke:!0,type:"quadratic",__afterSetAttrP1:function(){this.__calculateBox()},__afterSetAttrP2:function(){this.__calculateBox()},__afterSetAttrP3:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.p1,i=e.p2,a=e.p3;if(!(r.isNull(n)||r.isNull(i)||r.isNull(a))){for(var s=e.lineWidth/2,u=o.extrema(n[0],i[0],a[0]),c=0,l=u.length;c<l;c++)u[c]=o.at(n[0],i[0],a[0],u[c]);u.push(n[0],a[0]);for(var h=o.extrema(n[1],i[1],a[1]),c=0,l=h.length;c<l;c++)h[c]=o.at(n[1],i[1],a[1],h[c]);h.push(n[1],a[1]),t.set("box",{minX:Math.min.apply(Math,u)-s,maxX:Math.max.apply(Math,u)+s,minY:Math.min.apply(Math,h)-s,maxY:Math.max.apply(Math,h)+s})}},isPointInPath:function(t,e){var n=this,r=n.__attrs,i=r.p1,s=r.p2,o=r.p3,u=r.lineWidth;return a.quadraticline(i[0],i[1],s[0],s[1],o[0],o[1],u,t,e)},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,i=n.p1,a=n.p2,o=n.p3,u=n.lineWidth,l=n.arrow;if(!(r.isNull(i)||r.isNull(a)||r.isNull(o))&&(e.beginPath(),e.moveTo(i[0],i[1]),e.quadraticCurveTo(a[0],a[1],o[0],o[1]),l)){var h=new c(o[0]-a[0],o[1]-a[1]);s.makeArrow(e,h,{x:o[0],y:o[1]},u)}},getPoint:function(t){var e=this.__attrs;return{x:o.at(e.p1[0],e.p2[0],e.p3[0],t),y:o.at(e.p1[1],e.p2[1],e.p3[1],t)}}}),t.exports=l},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=n(13),o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={x:0,y:0,width:0,height:0,radius:0,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"rect",__setAttrWidth:function(t,e){return t>=0?t:(s.warn("width \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"),e)},__setAttrHeight:function(t,e){return t>=0?t:(s.warn("height \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"),e)},__setAttrRadius:function(t,e){return t>=0?t:(s.warn("radius \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"),e)},__afterSetAttrX:function(){this.__calculateBox()},__afterSetAttrY:function(){this.__calculateBox()},__afterSetAttrWidth:function(){this.__calculateBox()},__afterSetAttrHeight:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(){this.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.x,r=e.y,i=e.width,a=e.height,s=e.lineWidth,o=s/2;this.set("box",{minX:n-o,minY:r-o,maxX:n+i+o,maxY:r+a+o})},isPointInPath:function(t,e){var n=this,r=n.hasFill(),i=n.hasStroke();return r&&i?n.__isPointInFill(t,e)||n.__isPointInStroke(t,e):r?n.__isPointInFill(t,e):!!i&&n.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this,r=n.__attrs,i=(r.x,r.y,r.width,r.height,r.radius,n.get("context"));return!!i&&(n.createPath(),i.isPointInPath(t,e))},__isPointInStroke:function(t,e){var n=this,r=n.__attrs,i=r.x,s=r.y,o=r.width,u=r.height,c=r.radius,l=r.lineWidth;if(0===c){var h=l/2;return a.line(i-h,s,i+o+h,s,l,t,e)||a.line(i+o,s-h,i+o,s+u+h,l,t,e)||a.line(i+o+h,s+u,i-h,s+u,l,t,e)||a.line(i,s+u+h,i,s-h,l,t,e)}return a.line(i+c,s,i+o-c,s,l,t,e)||a.line(i+o,s+c,i+o,s+u-c,l,t,e)||a.line(i+o-c,s+u,i+c,s+u,l,t,e)||a.line(i,s+u-c,i,s+c,l,t,e)||a.arcline(i+o-c,s+c,c,1.5*Math.PI,2*Math.PI,!1,l,t,e)||a.arcline(i+o-c,s+u-c,c,0,.5*Math.PI,!1,l,t,e)||a.arcline(i+c,s+u-c,c,.5*Math.PI,Math.PI,!1,l,t,e)||a.arcline(i+c,s+c,c,Math.PI,1.5*Math.PI,!1,l,t,e)},createPath:function(){var t=this,e=t.get("context"),n=t.__attrs,r=n.x,i=n.y,a=n.width,s=n.height,o=n.radius;e.beginPath(),0===o?(e.moveTo(r,i),e.lineTo(r+a,i),e.lineTo(r+a,i+s),e.lineTo(r,i+s),e.lineTo(r,i)):(e.moveTo(r+o,i),e.lineTo(r+a-o,i),e.arc(r+a-o,i+o,o,-Math.PI/2,0,!1),e.lineTo(r+a,i+s-o),e.arc(r+a-o,i+s-o,o,0,Math.PI/2,!1),e.lineTo(r+o,i+s),e.arc(r+o,i+s-o,o,Math.PI/2,Math.PI,!1),e.lineTo(r,i+o),e.arc(r+o,i+o,o,Math.PI,3*Math.PI/2,!1)),e.closePath()}}),t.exports=o},function(t,e,n){"use strict";var r=n(6),i=n(8),a=n(7),s=n(13),o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom",
	lineWidth:1};var u={start:1,right:1,left:1,end:1,center:1},c={top:1,middle:1,bottom:1},l={normal:1,italic:1,oblique:1},h={normal:1,"small-caps":1},f={normal:1,bold:1,bolder:1,lighter:1,100:1,200:1,300:1,400:1,500:1,600:1,700:1,800:1,900:1};r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"text",__setAttrTextAlign:function(t,e){return t in u?t:e},__setAttrTextBaseline:function(t,e){return t in c?t:e},__setAttrFontSize:function(t,e){return t>=12?t:e},__setAttrFontStyle:function(t,e){return t in l?t:e},__setAttrFontVariant:function(t,e){return t in h?t:e},__setAttrFontWeight:function(t,e){return t in f?t:e},__assembleFont:function(){var t=this,e=t.attr("fontSize"),n=t.attr("fontFamily"),r=t.attr("fontWeight"),i=t.attr("fontStyle"),a=t.attr("fontVariant");t.attr("font",[i,a,r,e+"px",n].join(" "))},__afterSetAttrFontSize:function(t){var e=this;e.attr({height:t}),e.__assembleFont()},__afterSetAttrFontFamily:function(){this.__assembleFont()},__afterSetAttrFontWeight:function(){this.__assembleFont()},__afterSetAttrFontStyle:function(){this.__assembleFont()},__afterSetAttrFontVariant:function(){this.__assembleFont()},__afterSetAttrFont:function(){this.attr("width",this.measureText())},__afterSetAttrText:function(){this.attr("width",this.measureText())},__afterSetAttrTextAlign:function(){this.__calculateBox()},__afterSetAttrTextBaseline:function(){this.__calculateBox()},__afterSetAttrX:function(){this.__calculateBox()},__afterSetAttrY:function(){this.__calculateBox()},__afterSetAttrWidth:function(){this.__calculateBox()},__afterSetAttrLineWidth:function(){this.__calculateBox()},__afterSetAttrAll:function(t){var e=this;"fontSize"in t&&e.attr("height",t.fontSize),("fontSize"in t||"fontWeight"in t||"fontStyle"in t||"fontVariant"in t||"fontFamily"in t)&&e.__assembleFont(),"text"in t&&e.__afterSetAttrText(t.text),e.__calculateBox()},__calculateBox:function(){var t=this,e=t.__attrs,n=e.x,r=e.y,i=e.width;if(i){var a=e.height,s=e.textAlign,o=e.textBaseline,u=e.lineWidth,c={x:n,y:r-a};s&&("end"===s||"right"===s?c.x-=i:"center"===s&&(c.x-=i/2)),o&&("top"===o?c.y+=a:"middle"===o&&(c.y+=a/2)),this.set("startPoint",c);var l=u/2;this.set("box",{minX:c.x-l,minY:c.y-l,maxX:c.x+i+l,maxY:c.y+a+l})}},isPointInPath:function(t,e){var n=this,r=n.getBBox();if(n.hasFill()||n.hasStroke())return a.box(r.minX,r.maxX,r.minY,r.maxY,t,e)},drawInner:function(){var t=this,e=t.get("context"),n=t.__attrs,i=n.text,a=n.x,s=n.y;r.isNull(i)||(e.beginPath(),t.hasFill()&&e.fillText(i,a,s),t.hasStroke()&&e.strokeText(i,a,s))},measureText:function(){var t=this,e=t.__attrs,n=e.text,i=e.font;if(!r.isNull(n)){var a=s.backupContext;a.save(),a.font=i;var o=a.measureText(n).width;return a.restore(),o}}}),t.exports=o},function(t,e,n){"use strict";function r(t,e){this.preSegment=e,this.init(t,e)}function i(t,e,n){return{x:n.x+t,y:n.y+e}}function a(t,e){return{x:e.x+(e.x-t.x),y:e.y+(e.y-t.y)}}function s(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function o(t,e){return(t[0]*e[0]+t[1]*e[1])/(s(t)*s(e))}function u(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(o(t,e))}function c(t,e,n,r,i,a,s){var c=h.mod(h.degreeToRad(s),2*Math.PI),l=t.x,f=t.y,g=e.x,p=e.y,v=Math.cos(c)*(l-g)/2+Math.sin(c)*(f-p)/2,d=-1*Math.sin(c)*(l-g)/2+Math.cos(c)*(f-p)/2,x=v*v/(i*i)+d*d/(a*a);x>1&&(i*=Math.sqrt(x),a*=Math.sqrt(x));var m=Math.sqrt((i*i*(a*a)-i*i*(d*d)-a*a*(v*v))/(i*i*(d*d)+a*a*(v*v)));n===r&&(m*=-1),isNaN(m)&&(m=0);var y=m*i*d/a,_=m*-a*v/i,S=(l+g)/2+Math.cos(c)*y-Math.sin(c)*_,w=(f+p)/2+Math.sin(c)*y+Math.cos(c)*_,b=u([1,0],[(v-y)/i,(d-_)/a]),M=[(v-y)/i,(d-_)/a],A=[(-1*v-y)/i,(-1*d-_)/a],C=u(M,A);return o(M,A)<=-1&&(C=Math.PI),o(M,A)>=1&&(C=0),0===r&&C>0&&(C-=2*Math.PI),1===r&&C<0&&(C+=2*Math.PI),[t,S,w,i,a,b,C,c,r]}var l=n(6),h=n(4),f=n(3),g=n(7),p=n(57),v=n(58),d=n(278),x=f.Vector3,m=f.Matrix3;l.augment(r,{init:function(t,e){var n=t[0];e=e||{endPoint:{x:0,y:0}};var r=/[a-z]/.test(n),s=n.toUpperCase(),o=t;switch(s){case"M":if(r)var u=i(o[1],o[2],e.endPoint);else var u={x:o[1],y:o[2]};this.command="M",this.params=[e.endPoint,u],this.subStart=u,this.endPoint=u;break;case"L":if(r)var u=i(o[1],o[2],e.endPoint);else var u={x:o[1],y:o[2]};this.command="L",this.params=[e.endPoint,u],this.subStart=e.subStart,this.endPoint=u;break;case"H":if(r)var u=i(o[1],0,e.endPoint);else var u={x:o[1],y:e.endPoint.y};this.command="L",this.params=[e.endPoint,u],this.subStart=e.subStart,this.endPoint=u;break;case"V":if(r)var u=i(0,o[1],e.endPoint);else var u={x:e.endPoint.x,y:o[1]};this.command="L",this.params=[e.endPoint,u],this.subStart=e.subStart,this.endPoint=u;break;case"Q":if(r)var l=i(o[1],o[2],e.endPoint),h=i(o[3],o[4],e.endPoint);else var l={x:o[1],y:o[2]},h={x:o[3],y:o[4]};this.command="Q",this.params=[e.endPoint,l,h],this.subStart=e.subStart,this.endPoint=h;break;case"T":if(r)var h=i(o[1],o[2],e.endPoint);else var h={x:o[1],y:o[2]};if("Q"===e.command){var l=a(e.params[1],e.endPoint);this.command="Q",this.params=[e.endPoint,l,h],this.subStart=e.subStart,this.endPoint=h}else this.command="TL",this.params=[e.endPoint,h],this.subStart=e.subStart,this.endPoint=h;break;case"C":if(r)var l=i(o[1],o[2],e.endPoint),h=i(o[3],o[4],e.endPoint),f=i(o[5],o[6],e.endPoint);else var l={x:o[1],y:o[2]},h={x:o[3],y:o[4]},f={x:o[5],y:o[6]};this.command="C",this.params=[e.endPoint,l,h,f],this.subStart=e.subStart,this.endPoint=f;break;case"S":if(r)var h=i(o[1],o[2],e.endPoint),f=i(o[3],o[4],e.endPoint);else var h={x:o[1],y:o[2]},f={x:o[3],y:o[4]};if("C"===e.command){var l=a(e.params[2],e.endPoint);this.command="C",this.params=[e.endPoint,l,h,f],this.subStart=e.subStart,this.endPoint=f}else this.command="SQ",this.params=[e.endPoint,h,f],this.subStart=e.subStart,this.endPoint=f;break;case"A":var g=o[1],p=o[2],v=o[3],d=o[4],x=o[5];if(r)var u=i(o[6],o[7],e.endPoint);else var u={x:o[6],y:o[7]};this.command="A",this.params=c(e.endPoint,u,d,x,g,p,v),this.subStart=e.subStart,this.endPoint=u;break;case"Z":this.command="Z",this.params=[e.endPoint,e.subStart],this.subStart=e.subStart,this.endPoint=e.subStart}},isInside:function(t,e,n){var r=this,i=r.command,a=r.params,s=r.box;if(s&&!g.box(s.minX,s.maxX,s.minY,s.maxY,t,e))return!1;switch(i){case"M":return!1;case"TL":case"L":case"Z":return g.line(a[0].x,a[0].y,a[1].x,a[1].y,n,t,e);case"SQ":case"Q":return g.quadraticline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,n,t,e);case"C":return g.cubicline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,a[3].x,a[3].y,n,t,e);case"A":var o=a,u=o[1],c=o[2],l=o[3],h=o[4],f=o[5],p=o[6],v=o[7],d=o[8],y=l>h?l:h,_=l>h?1:l/h,S=l>h?h/l:1,o=new x(t,e,1),w=new m;return w.translate(-u,-c),w.rotate(-v),w.scale(1/_,1/S),o.applyMatrix(w),g.arcline(0,0,y,f,f+p,1-d,n,o.x,o.y)}return!1},draw:function(t){var e=this.command,n=this.params;switch(e){case"M":t.moveTo(n[1].x,n[1].y);break;case"TL":case"L":t.lineTo(n[1].x,n[1].y);break;case"SQ":case"Q":var r=n[1],i=n[2];t.quadraticCurveTo(r.x,r.y,i.x,i.y);break;case"C":var r=n[1],i=n[2],a=n[3];t.bezierCurveTo(r.x,r.y,i.x,i.y,a.x,a.y);break;case"A":var s=n,o=s[1],u=s[2],c=s[3],l=s[4],h=s[5],f=s[6],g=s[7],p=s[8],v=c>l?c:l,d=c>l?1:c/l,x=c>l?l/c:1;t.translate(o,u),t.rotate(g),t.scale(d,x),t.arc(0,0,v,h,h+f,1-p),t.scale(1/d,1/x),t.rotate(-g),t.translate(-o,-u);break;case"Z":t.closePath()}},getBBox:function(t){var e=t/2,n=this.params;switch(this.command){case"M":case"Z":break;case"TL":case"L":this.box={minX:Math.min(n[0].x,n[1].x)-e,maxX:Math.max(n[0].x,n[1].x)+e,minY:Math.min(n[0].y,n[1].y)-e,maxY:Math.max(n[0].y,n[1].y)+e};break;case"SQ":case"Q":for(var r=v.extrema(n[0].x,n[1].x,n[2].x),i=0,a=r.length;i<a;i++)r[i]=v.at(n[0].x,n[1].x,n[2].x,r[i]);r.push(n[0].x,n[2].x);for(var s=v.extrema(n[0].y,n[1].y,n[2].y),i=0,a=s.length;i<a;i++)s[i]=v.at(n[0].y,n[1].y,n[2].y,s);s.push(n[0].y,n[2].y),this.box={minX:Math.min.apply(Math,r)-e,maxX:Math.max.apply(Math,r)+e,minY:Math.min.apply(Math,s)-e,maxY:Math.max.apply(Math,s)+e};break;case"C":for(var r=p.extrema(n[0].x,n[1].x,n[2].x,n[3].x),i=0,a=r.length;i<a;i++)r[i]=p.at(n[0].x,n[1].x,n[2].x,n[3].x,r[i]);for(var s=p.extrema(n[0].y,n[1].y,n[2].y,n[3].y),i=0,a=s.length;i<a;i++)s[i]=p.at(n[0].y,n[1].y,n[2].y,n[3].y,s[i]);r.push(n[0].x,n[3].x),s.push(n[0].y,n[3].y),this.box={minX:Math.min.apply(Math,r)-e,maxX:Math.max.apply(Math,r)+e,minY:Math.min.apply(Math,s)-e,maxY:Math.max.apply(Math,s)+e};break;case"A":for(var o=n,u=o[1],c=o[2],l=o[3],h=o[4],f=o[5],g=o[6],x=o[7],m=o[8],y=f,_=f+g,S=d.xExtrema(x,l,h),w=1/0,b=-(1/0),M=[y,_],i=2*-Math.PI;i<=2*Math.PI;i+=Math.PI){var A=S+i;1===m?y<A&&A<_&&M.push(A):_<A&&A<y&&M.push(A)}for(var i=0,a=M.length;i<a;i++){var C=d.xAt(x,l,h,u,M[i]);C<w&&(w=C),C>b&&(b=C)}for(var k=d.yExtrema(x,l,h),T=1/0,P=-(1/0),I=[y,_],i=2*-Math.PI;i<=2*Math.PI;i+=Math.PI){var D=k+i;1===m?y<D&&D<_&&I.push(D):_<D&&D<y&&I.push(D)}for(var i=0,a=I.length;i<a;i++){var L=d.yAt(x,l,h,c,I[i]);L<T&&(T=L),L>P&&(P=L)}this.box={minX:w-e,maxX:b+e,minY:T-e,maxY:P+e}}}}),t.exports=r},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t)}var i=n(1),a=n(19),s=n(90),o=n(91);i.extend(r,a),i.mixin(r,[o,s]),r.ATTRS={type:"area"},i.augment(r,{drawFrame:function(t){var e,n,r,a=this,s=t.toJSON(),o=this.splitData(s),u=this.get("container"),c=this.get("shapeObj"),l=s[0],h=this.getDrawCfg(l);i.each(o,function(t){n=[];for(var i=0;i<t.length;i++)r=t[i],n.push(r.points);0!==n.length&&(h.points=n,e=a.getDrawShape(h.shape),c.drawShape(e,h,u))})}}),t.exports=r},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t)}var i=n(1),a=n(19);r.ATTRS={type:"interval"},i.extend(r,a),i.mixin(r),i.augment(r,{getDrawCfg:function(t){var e=this,n=r.superclass.getDrawCfg.call(e,t),i=e.getCoord();if(i.isPolar){if(i.isTransposed){var a=n.points;n.points=[a[0],a[3],a[2],a[1]]}n.z=!0,n.center=i.get("center")}return n}}),t.exports=r},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t)}var i=n(1),a=n(92),s=n(90);i.extend(r,a),i.mixin(r,[s]),r.ATTRS={type:"line"},t.exports=r},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t)}var i=n(1),a=n(19);i.extend(r,a),r.ATTRS={type:"point"},t.exports=r},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t)}var i=n(1),a=n(19);i.extend(r,a),r.ATTRS={type:"polygon"},i.augment(r,{getShapePointInfo:function(t){var e,n=a.prototype.getShapePointInfo.call(this,t),r=this,s=n.x,o=n.y;if(!i.isArray(s)||!i.isArray(o)){var u=r.getXScale(),c=r.getYScale(),l=.5/u.ticks.length,h=.5/c.ticks.length;u.isCategory&&c.isCategory?(s=[s-l,s-l,s+l,s+l],o=[o-h,o+h,o+h,o-h]):i.isArray(s)?(e=s,s=[e[0],e[0],e[1],e[1]],o=[o-h/2,o+h/2,o+h/2,o-h/2]):i.isArray(o)&&(e=o,o=[e[0],e[1],e[1],e[0]],s=[s-l/2,s-l/2,s+l/2,s+l/2])}var n=i.mix({},t,{x:s,y:o});return n}}),t.exports=r},function(t,e,n){"use strict";function r(t){r.superclass.constructor.call(this,t)}var i=n(1),a=n(19);i.extend(r,a),r.ATTRS={type:"schema"},t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.slice(0),n=e[0],r=e[e.length-1];return 0!==n.value&&e.unshift({value:0}),1!==r.value&&e.push({value:1}),e}var i=n(1),a=n(11),s=a.Components.Axis,o=n(3),u=o.Vector2,c=n(5),l=["..x","..y","..long","..lant","..pieX"],h=function(t){this.axisCfg={},i.mix(this,t)};i.augment(h,{axisCfg:null,enable:!0,container:null,chart:null,_isHide:function(t){var e=this.axisCfg;return!(!i.inArray(l,t)||!i.isNull(e[t]))||e&&e[t]===!1},_getMiddleValue:function(t,e,n){var r=e.length;if(n===r-1)return null;var i=e[n+1].value;return(t+i)/2},_getLineRange:function(t,e,n,r){var i,a,s,o=e.dim,u=this.axisCfg,c="";return u[o]&&u[o].position&&(c=u[o].position),"x"===n?(i={x:0,y:"top"===c?1:0},a={x:1,y:"top"===c?1:0},s=!1):(r?(i={x:"right"===c?0:1,y:0},a={x:"right"===c?0:1,y:1}):(i={x:"right"===c?1:0,y:0},a={x:"right"===c?1:0,y:1}),s=!0),i=t.convert(i),a=t.convert(a),{start:i,end:a,isVertical:s}},_getLineCfg:function(t,e,n,r){var i,a=this._getLineRange(t,e,n,r),s=a.isVertical,o=a.start,u=a.end,c=t.get("center");return t.isTransposed&&(s=!s),i=s&&o.x>c.x||!s&&o.y>c.y?1:-1,{isVertical:s,factor:i,start:o,end:u}},_getCircleCfg:function(t){var e,n={},r=t.get("x"),i=t.get("y"),a=i.start>i.end;e=t.isTransposed?{x:a?0:1,y:0}:{x:0,y:a?0:1},e=t.convert(e);var s,o=t.get("circleCentre"),c=new u(e.x-o.x,e.y-o.y),l=new u(1,0);s=e.y>o.y?u.angle(c,l):u.angle(c,l)*-1;var h=s+(r.end-r.start);return n.startAngle=s,n.endAngle=h,n.center=o,n.radius=Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2)),n.inner=t.get("inner")||0,n},_getRadiusCfg:function(t){var e,n,r=t.get("x").start,i=r<0?-1:1;return t.isTransposed?(e={x:0,y:0},n={x:1,y:0}):(e={x:0,y:0},n={x:0,y:1}),{factor:i,start:t.convert(e),end:t.convert(n)}},_getMultiLineCfg:function(t,e,n){var r=e.getTicks(),a=[],s=this._getLineRange(t,e,n),o=s.isVertical;return i.each(r,function(e){var n=t.convert({x:o?0:e.value,y:o?e.value:0});a.push(n)}),{start:s.start,end:s.end,tickPoints:a}},_getAxisPosition:function(t,e,n){var r=t.type,i="";return t.isRect?(this.facet&&"mirror"===this.facet.type?"x"===e&&(i="bottom"):"x"===e&&(i="bottom"),"y"===e&&(i=n?"right":"left")):i="clock"===r?"clock":"gauge"===r?"gauge":"x"===e?t.isTransposed?"radius":"circle":t.isTransposed?"circle":"radius",i},_getAxisDefaultCfg:function(t,e,n,r){var a={},s=this,o=s.facet,u=s.axisCfg,l=t.getHeight(),h=t.type;if("cartesian"!==h||i.isNull(o)||o&&1===o.rows&&1===o.cols)"cartesian"===h&&(a.title={text:e.alias||e.dim});else{var f=o.rows,g=o.cols,p=o.rowIndex,v=o.colIndex,d=o.type;a.title={text:e.alias||e.dim},"tree"===d?("y"===n&&0!==o.originColIndex&&0!==v||"x"===n&&o.children)&&(a.labels=null,a.title=null):"circle"===d?(a.labels=null,a.title=null):("mirror"!==d&&"y"===n&&(0!==v&&"left"===r||v!==g-1&&"right"===r)&&(a.labels=null,a.title=null),"rect"===d?"x"===n&&0!==p&&(a.labels=null,a.title=null):"list"===d?"x"===n&&p!==f-1&&g*p+v+1+g<=o.count&&(a.labels=null,a.title=null):"mirror"===d&&"x"===n&&(1===f&&1===v||2===f&&0===p)&&(a.labels=null,a.title=null)),"y"===n&&a.title&&p!==Math.floor(f/2)&&(a.title=null),"x"===n&&a.title&&v!==Math.floor(g/2)&&(a.title=null)}if(a=i.mix(!0,{},c.axis[r],a,u[e.dim]),a.ticks=e.getTicks(),t.isPolar&&!e.isCategory&&"x"===n&&("clock"===t.type?a.ticks[0].text="":"gauge"!==t.type&&a.ticks.pop()),"y"===n){var x=a.ticks,m=x.length,y=16;if(l/m<y){var _=[],S=Math.floor(l/y)+1,w=Math.floor(m/S);w<1&&(w=1),_.push(x[0]);for(var b=w;b<=m-2;b+=w)_.push(x[b]);_.push(x[m-1]),a.ticks=_}}return a.coord=t,a.labels&&i.isNull(a.labels.autoRotate)&&(a.labels.autoRotate=!0),a},_getAxisCfg:function(t,e,n,a,s){var o=this,u={},c=o._getAxisPosition(t,a,s);if(u=o._getAxisDefaultCfg(t,e,a,c),u.grid&&n){var l=[],h=r(n.getTicks()),f=u.ticks;i.each(f,function(e,n){var r=[],s=e.value;if("middle"===u.gridAlign&&(s=o._getMiddleValue(s,f,n)),s){var c=t.get("x"),g=t.get("y");i.each(h,function(e){var n="x"===a?s:e.value,i="x"===a?e.value:s,o=t.convert({x:n,y:i});if(t.isPolar){var u=t.get("circleCentre");g.start>g.end&&(i=1-i),o.flag=c.start>c.end?0:1,o.radius=Math.sqrt(Math.pow(o.x-u.x,2)+Math.pow(o.y-u.y,2))}r.push(o)}),l.push(r)}}),u.grid.items=l}return u},_drawAxis:function(t,e,n,r,a,o){var u,c,l=this.container;t.isRect?"map"===t.type&&"x"===r?(u=s.MultLine,c=this._getMultiLineCfg(t,e,r)):(u=s,c=this._getLineCfg(t,e,r,o)):"x"===r?(u=s.Circle,c=this._getCircleCfg(t)):(u=s,c=this._getRadiusCfg(t));var h=this._getAxisCfg(t,e,n,r,o);return h=i.mix(!0,{},h,c),"y"===r&&a&&"circle"===a.get("type")&&(h.circle=a),l.addGroup(u,h)},createAxis:function(t,e,n){var r=this;if(r.enable){var a=t.get("coord"),s=a.type;if(this.facet=t.get("facet"),"theta"!==s&&("polar"!==s||!a.isTransposed)){var o;e&&!r._isHide(e.dim)&&(o=r._drawAxis(a,e,n[0],"x")),n&&n.length&&i.each(n,function(t,n){r._isHide(t.dim)||r._drawAxis(a,t,e,"y",o,n)})}}}}),t.exports=h},function(t,e,n){"use strict";var r=n(1),i=n(71),a=function(t){r.mix(this,t),this.resetActions()};r.augment(a,{type:"rect",coordCfg:{},actions:[],_execActions:function(t){var e=this.actions;r.each(e,function(e){var n=e[0];t[n](e[1],e[2])})},hasAction:function(t){var e=this.actions,n=!1;return r.each(e,function(e){if(t===e[0])return n=!0,!1}),n},createCoord:function(t,e){var n,a,s=this,o=s.type||"rect",u=r.mix({start:t,end:e},s.coordCfg);return"theta"===o?(n=i.Polar,s.hasAction("transpose")||s.transpose(),a=new n(u),a.type=o):(n=i[r.ucfirst(o)]||i.Rect,a=new n(u)),s._execActions(a),a},rotate:function(t){var e=this.actions;return t=t*Math.PI/180,e.push(["rotate",t]),this},reflect:function(t){var e=this.actions;return e.push(["reflect",t]),this},scale:function(t,e){var n=this.actions;return n.push(["scale",t,e]),this},transpose:function(){var t=this.actions;return t.push(["transpose"]),this},resetActions:function(){return this.actions=[],this}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=r.getRatio(),a=function(t){r.mix(this,t)};r.augment(a,{chart:null,_getCanvas:function(){var t=this.chart;return t.get("frontCanvas")},_getPointInfo:function(t){var e=this.chart,n={x:t.x/i,y:t.y/i},r=e.getViewsByPoint(n);return n.views=r,n},_getEventObj:function(t,e,n){return{x:e.x,y:e.y,target:t.target,toElement:t.event.toElement,views:n}},bindEvents:function(){var t=this,e=t._getCanvas();e.on("canvas-mousemove",r.wrapBehavior(t,"onMove")),e.on("canvas-mouseleave",r.wrapBehavior(t,"onOut")),e.on("canvas-click",r.wrapBehavior(t,"onClick"))},onOut:function(t){var e=this,n=e.chart,r=e._getPointInfo(t);n.fire("plotleave",e._getEventObj(t,r,e.curViews))},onMove:function(t){var e=this,n=e.chart,r=e._getPointInfo(t),i=e.curViews||[];0===i.length&&r.views.length&&n.fire("plotenter",e._getEventObj(t,r,r.views)),i.length&&0===r.views.length&&n.fire("plotleave",e._getEventObj(t,r,i)),r.views.length&&n.fire("plotmove",e._getEventObj(t,r,r.views)),e.curViews=r.views},onClick:function(t){var e=this,n=e.chart,r=e._getPointInfo(t),i=r.views;if(i&&i.length){for(var a=e._getEventObj(t,r,i),s=null,o=i.length-1;o>=0;o--){for(var u,c=i[o],l=c.get("geoms"),h=l.length-1;h>=0&&(u=l[h],!(s=u.getSingleShape(r)));h--);if(s){u&&s&&u.allowSelected()&&(s.get("selected")?u.setSelected(null,c):u.setSelected(s.get("origin"),c)),a.geom=u;break}}s&&(a.shape=s,a.data=s.get("origin")),n.fire("plotclick",a)}},clearEvents:function(){var t=this,e=t._getCanvas();e.off("canvas-mousemove",r.getWrapBehavior(t,"onMove")),e.off("canvas-mouseleave",r.getWrapBehavior(t,"onClick"))}}),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(162),a=n(5),s=function(t){r.mix(this,t)};r.augment(s,{plotContainer:null,facetCfg:{},_getFacetClass:function(t){return t=r.ucfirst(t),i[t]},createFacets:function(t){var e=this.facetCfg;e=r.mix({},a.facetCfg,e),e.facetTitle=r.mix({},a.facetCfg.facetTitle,e.facetTitle);var n=this._getFacetClass(e.type),i=new n(e),s=i.generateFacets(t),o=this.plotContainer,u=o.addGroup();return i.drawTitles(s,u),s}}),t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(169),a=n(5),s=["text","tag"],o=function(t){r.mix(this,t),this.guides=[]};r.augment(o,{guides:null,xScale:null,yScale:null,backPlot:null,frontPlot:null,_addGuide:function(t){this.guides.push(t)},_getDefault:function(){return{xScale:this.xScale,yScale:this.yScale}},setScale:function(t,e){var n=this.guides;this.xScale=t,this.yScale=e,r.each(n,function(n){n.xScale=t,n.yScale=e})},line:function(t,e,n){var s={type:"line",from:t,to:e,cfg:r.mix({},a.guide.line,n)};r.mix(s,this._getDefault());var o=new i.Line(s);return this._addGuide(o),this},text:function(t,e,n){var s={type:"text",position:t,text:e,cfg:r.mix({},a.guide.text,n)};r.mix(s,this._getDefault());var o=new i.Text(s);return this._addGuide(o),this},image:function(t,e,n){var a={type:"image",start:t};r.isArray(e)&&(a.end=e),r.isObject(e)&&(n=e),n&&(a.cfg=n),r.mix(a,this._getDefault());var s=new i.Image(a);return this._addGuide(s),this},rect:function(t,e,n){var s={type:"rect",start:t,end:e,cfg:r.mix({},a.guide.rect,n)};r.mix(s,this._getDefault());var o=new i.Rect(s);return this._addGuide(o),this},arc:function(t,e,n){var s={type:"arc",start:t,end:e,cfg:r.mix({},a.guide.arc,n)};r.mix(s,this._getDefault());var o=new i.Arc(s);return this._addGuide(o),this},tag:function(t,e,n,s){var o={type:"tag",from:t,to:e,text:n,cfg:r.mix({},a.guide.tag,s)};r.mix(o,this._getDefault());var u=new i.Tag(o);return this._addGuide(u),this},paint:function(t,e,n){var i=this.guides;e=e||this.backPlot,n=n||this.frontPlot,r.each(i,function(i){r.inArray(s,i.type)?i.paint(t,n):i.paint(t,e)})},clear:function(){return this.guides=[],this}}),t.exports=o},function(t,e,n){"use strict";function r(t){for(var e=!0,n=t[0],r=n.attrValue,i=1;i<t.length;i++)if(t[i].attrValue!==r){e=!1;break}return e}function i(t,e){var n=[];return u.each(t,function(t){t[v].endsWith(e)&&n.push(t)}),n}function a(t,e){return t+"\uff08"+e+"\uff09"}function s(t){return t.dim||t.alias}function o(t,e,n){n&&u.each(t,function(t){t.checked=n.indexOf(t.value)!==-1})}var u=n(1),c=n(11),l=c.Components.Legend,h=n(5),f=n(98),g=16,p=16,v="value",d=function(t){u.mix(this,t),this.legendCfg={},this.reset();var e=this.chart;this.container=e.get("frontCanvas"),this.plotRange=e.get("plotRange")};u.augment(d,{plotRange:null,container:null,chart:null,enable:!0,position:"right",legendCfg:{},_isFiltered:function(t,e,n){if(!t.isCategory)return!0;var r=!1;return n=t.invert(n),u.each(e,function(e){if(r=r||t.getText(e)===t.getText(n))return!1}),r},_getFilterVals:function(t){var e=this.chart,n=e.get("filters");return n[t]},_getLayoutType:function(t){return"right"===t||"left"===t?"vertical":"horizontal"},_bindEvent:function(t,e){var n=this,r=n.chart,i=[],a=t.get("items");u.each(a,function(t){i.push(t[v])}),t.on("itemchecked",function(t){var i=t.item.value,a=n._getFilterVals(e);a.push(i),r.repaint()}),t.on("itemunchecked",function(t){var a=t.item.value,s=n._getFilterVals(e);s||(s=i.slice(0)),u.remove(s,a),r.filter(e,s),r.repaint()})},_getRegion:function(t){var e=0,n=0;return u.each(t,function(t){var r=t.getBBBox();e<r.width&&(e=r.width),n+=r.width}),{maxWidth:e,totalWidth:n}},_alignLegend:function(t,e,n,r){var i=this,a=i.container,s=a.get("canvas"),o=s.get("width"),u=s.get("height"),c=i.plotRange,l=0,h=0,f=t.get("dx")||0,v=t.get("dy")||0,d=t.getBBBox();if("left"===r||"right"===r){var x=n.maxWidth;c?(u=c.br.y,l="left"===r?g:c.br.x+g):l="left"===r?g:o-x+g,h=u-d.height,e&&(h=e.get("y")-d.height-p)}else{var m=0;c&&(m=c.bl.x+(c.getWidth()-n.totalWidth)/2),l=m,h="top"===r?g:u-d.height-g,e&&(l=e.get("x")+e.getBBBox().width+p)}t.move(l+f,h+v)},addMixedLegend:function(t){var e=this;if(!e.enable)return null;var n=e.container,r=e.position,i=e.legendCfg,a=e.legends;a[r]=a[r]||[];var s=f.getShape("point");u.each(t,function(t){t.type=null,t.marker=s.getMarkerCfg("circle",t),t.checked=!0});var o=n.addGroup(l,u.mix({},{checkable:!1,layout:e._getLayoutType(r),items:t,word:{fill:"#333"}},h.legend[r],i));return a[r].push(o),o},addLegend:function(t,e,n,c){var l=this;if(l.enable){var f=l.legendCfg,g=t.dim;if(!f||f[g]!==!1){var p=f.position||l.position,d=u.mix({titleText:s(t),attrType:e.type});f[g]&&f[g].position&&(p=f[g].position),d=u.mix(d,h.legend[p],f,f[g]);var x,m,y=e.scales,_=[];if(1===y.length||t.isLinear)_=l._getLegendItems(t,e,n,c),m=t.dim,d.checkable=t.isCategory,x=l._addLegend(t,d,_,p);else{var S=y[1],w=t.getTicks(),b=[];if(m=t.dim+"*"+S.dim,d.titleText&&(d.titleText=a(s(S),s(t))),S.isLinear&&(d.checkable=!1),u.each(w,function(i){var a=t.invert(i.value),s=l._getCategoryItems(S,e,n,c,a);if(r(s)){var o=s[0];o[v]=a,o.name=t.getText(a),o.attrValue=a,_.push(o)}else b=b.concat(s)}),b.length){var M=S.getTicks();u.each(M,function(t){var e=S.invert(t.value),n=i(b,e);if(n.length===w.length&&r(n)){var a=n[0];a[v]="*"+e,a.name=S.getText(e),a.attrValue=e,_.push(a)}else _=_.concat(n)})}o(_,m,c),x=l._addLegend(t,d,_,p)}x.get("checkable")&&l._bindEvent(x,m)}}},_getLegendItems:function(t,e,n,r,i){var a=this;return t.isLinear?a._getContinuousItems(t,e,i):a._getCategoryItems(t,e,n,r,i)},_getContinuousItems:function(t,e,n){var r,i,a=this,s=[],o=t.getTicks();return u.each(o,function(o){var u=o.value,c=t.invert(u),l=a._mappingValues(c,e,n);s.push({name:o.text,color:l,value:u}),0===u&&(r=!0),1===u&&(i=!0)}),r||s.push({name:t.getText(t.invert(0)),color:a._mappingValues(t.invert(0),e,n),value:0}),i||s.push({name:t.getText(t.invert(1)),color:a._mappingValues(t.invert(1),e,n),value:1}),s},_getCategoryItems:function(t,e,n,r,i){var s,o,c=this,l=t.getTicks(),h=[],g="point",p="circle";return u.each(l,function(l){var v=l.text;o=v;var d=l.value,x=t.invert(d),m={isInCircle:n.isInCircle()},y=c._mappingValues(x,e,i);"color"===e.type?m.color=y:"shape"===e.type?(g=n.get("shapeType")||n.get("type"),p=y):"size"===e.type&&(s=y);var _=f.getShape(g),S=_.getMarkerCfg(p,m);u.isNull(s)||(S.radius=s);var w=!0;u.isNull(i)?w=!r||c._isFiltered(t,r,d):(x=i+"*"+x,o=a(o,i)),h.push({name:o,checked:w,type:null,marker:S,attrValue:y,value:x})}),h},_mappingValues:function(t,e,n){var r;if(u.isNull(n))r=e.mappingValues(t).join("");else{var i=[n,t];r=e.mappingValues.apply(e,i).join("")}return r},_addLegend:function(t,e,n,r){var i,a,s=this,o=s._getLayoutType(r);if(t.isLinear)a=l.Continuous,i=u.mix({layout:o},h.legend.size,e);else{a=l.Category;var c=s.plotRange,f="right"===r||"left"===r?c.bl.y-c.tr.y:c.tr.x-c.bl.x;i=u.mix({maxLength:f,layout:o,items:n,word:{fill:"#333"}},e)}i.items=n;var g=s.container,p=s.legends,v=g.addGroup(a,i);return p[r]=p[r]||[],p[r].push(v),v},alignLegends:function(){var t=this,e=t.legends;return u.each(e,function(e,n){var r=t._getRegion(e);u.each(e,function(i,a){var s=e[a-1];t._alignLegend(i,s,r,n)})}),this},reset:function(){var t=this,e=t.legends;u.each(e,function(t){u.each(t,function(t){t.remove()})}),this.legends={}}}),t.exports=d},function(t,e,n){"use strict";var r=n(1),i=n(79),a=n(40),s=n(2),o=n(5),u={LINEAR:"linear",CAT:"cat",TIME:"time"},c=function(t){r.mix(this,t),this.defs=this.defs||{}};r.augment(c,{defs:null,_addNewCol:function(t,e,n){var i=this,a=e.dims,s=[];r.each(a,function(t){var e=i._getDefaultType(t,n);if(0===s.length)s.push(e);else if(!r.inArray(s,e))throw new Error('Sorry, the values that are involved in "+" must be of the same type.')}),e.type=s[0];var o=[];r.each(a,function(t){o.push(n.colArray(t))});for(var u=[],c=0;c<o[0].length;c++){u[c]=[];for(var l=0;l<a.length;l++)u[c].push(o[l][c])}n.addCol(t,u)},_getDefs:function(){var t=this.defs;return r.mix(!0,{},o.scales,t)},_getScaleCfg:function(t,e,n){var r={dim:e};if(n.contains(e)){var a=s.values(n,e);r.values=a,i.isCategory(t)||"time"===t||(r.min=s.min(n,e),r.max=s.max(n,e),r.nice=!0),"time"===t&&(r.nice=!1)}return r},_getDefaultType:function(t,e){var n=u.LINEAR,i=s.values(e,t),o=i[0];return r.isArray(o)&&(o=o[0]),a.isDateString(o)?n=u.TIME:r.isString(o)&&(n=u.CAT),n},_syncScales:function(t,e){t.isCategory?t.change({values:e.values,ticks:e.ticks}):"identity"!==t.type&&t.change({min:e.min,max:e.max,ticks:e.ticks,values:e.values})},createDefaultScale:function(t,e){var n=this._getDefaultType(t,e),r=this._getScaleCfg(n,t,e);return i[n](r)},createScale:function(t,e){var n,a=this,s=a._getDefs();if(r.isNumber(t))n=i.I({value:t,dim:t.toString()});else if(s[t]||r.indexOf(e.colNames(),t)!==-1)if(s[t]){var o=s[t];o.dims&&!e.contains(t)&&a._addNewCol(t,o,e);var u=o.type||a._getDefaultType(t,e),c=a._getScaleCfg(u,t,e);r.mix(c,o),n=i[u](c)}else n=a.createDefaultScale(t,e);else n=i.I({value:t,dim:t});return n},sortScales:function(t,e,n){var i=this;return n?(t=s.sortBy(t,n),void r.each(e,function(e,n){var r=e.type;if("identity"!==r&&t.contains(n)){var a=i.createScale(n,t);e.values=a.values}})):null},trainScales:function(t,e){var n=this;r.each(e,function(e){var r=e.type,i=e.dim;if("identity"!==r&&t.contains(i)){var a=n.createScale(i,t);n._syncScales(e,a)}})},resetScales:function(t,e){var n=this;r.each(e,function(e,r){var i=n.createScale(r,t);n._syncScales(e,i)})},_getFilterFunction:function(t,e){var n,i=t.dim;return n=t.isCategory?function(n){var a=!1;return r.each(e,function(e){var r=n[i];if(a=a||t.getText(e)===t.getText(r))return!1}),a}:function(t){var n=t[i];return r.inArray(e,n)}},_getMultpleFilterFunction:function(t,e){var n=function(n){var i=!1;return r.each(e,function(e){var a=e.split("*"),s=!0;if(r.each(a,function(e,r){if(e){var i=t[r],a=n[i.dim];s=s&&i.getText(e)===i.getText(a)}}),i=i||s)return!1}),i};return n},filterData:function(t,e,n){var i=this,a=[];r.each(e,function(t,e){var r;if(e.indexOf("*")!==-1){var s=e.split("*"),o=s.map(function(t){return n[t]});t&&o.length&&(r=i._getMultpleFilterFunction(o,t),a.push(r))}else{var u=n[e];t&&u&&(r=i._getFilterFunction(u,t),a.push(r))}});var o=t;return a.length&&(o=s.filter(t,function(t){var e=!0;return r.each(a,function(n){e=e&&n(t)}),e})),o},processCatScale:function(t,e){var n=this,i=n._getDefs();return r.each(e,function(e,n){var a=e.type;if(e.isCategory&&"timeCat"!==a&&t.contains(n)){var s=i[n];if(s&&!s.hasOwnProperty("values")||!s){var o=t.colArray(n);r.each(o,function(t,e){o[e]=t.toString()}),t.colReplace(n,o)}}}),t}}),t.exports=c},function(t,e,n){"use strict";function r(t,e){var n=-1;return a.each(t,function(t,r){if(t.title===e.title&&t.name===e.name&&t.value===e.value&&t.color===e.color)return n=r,!1}),n}function i(t){var e=[];return a.each(t,function(t){var n=r(e,t);n===-1?e.push(t):e[n]=t}),e}var a=n(1),s=n(5),o=n(11),u=o.Components,c=u.Tooltip,l=["line","area","path","areaStack"],h=["line","area"],f=function(t){a.mix(this,t)};a.augment(f,{enable:!0,cfg:null,tooltip:null,markerGroup:null,chart:null,timeStamp:0,get:function(t){return this[t]},set:function(t,e){this[t]=e},_setTooltipCrosshairs:function(){var t=this,e=a.mix({},s.tooltip),n=t.get("chart"),r=n.getAllGeoms(),i=[];return a.each(r,function(t){var e=t.get("type");a.indexOf(i,e)===-1&&i.push(e)}),r.length&&"cartesian"===r[0].get("coord").type&&1===i.length&&a.indexOf(h,i[0])>-1&&a.mix(e,{crosshairs:!0}),e},_showMarkers:function(t,e){var n=this,r=n.get("markerGroup");r.setMatrix(e.get("matrix").clone()),r.clear(),a.each(t,function(t){var e=t.point,n=a.mix({},r.get("marker"),{x:a.isArray(e.x)?e.x[e.x.length-1]:e.x,y:a.isArray(e.y)?e.y[e.y.length-1]:e.y,stroke:t.color});r.addShape("Marker",{attrs:n})}),r.show()},_getCanvas:function(){return this.chart.get("frontCanvas")},_setTooltip:function(t,e,n){var r=this,s=r.get("tooltip"),o=r.get("prePoint");if(!o||o.x!==e.x||o.y!==e.y){n=i(n),r.set("prePoint",e);var u=r.chart,c=a.isArray(e.x)?e.x[e.x.length-1]:e.x,l=a.isArray(e.y)?e.y[e.y.length-1]:e.y;s.get("visible")||u.fire("tooltipshow",{x:c,y:l,tooltip:s}),u.fire("tooltipchange",{tooltip:s,x:c,y:l,items:n}),s.setContent(t,n),s.setPosition(c,l)}},_clearActive:function(){var t=this,e=t.get("chart"),n=e.getAllGeoms();a.each(n,function(t){t.clearShapeActived()})},_bindEvent:function(){var t=this,e=t.chart;e.on("plotmove",a.wrapBehavior(t,"onMouseMove")),e.on("plotleave",a.wrapBehavior(t,"onMouseOut"))},_offEvent:function(){var t=this,e=t.chart;e.off("plotmove",a.getWrapBehavior(t,"onMouseMove")),e.off("plotleave",a.getWrapBehavior(t,"onMouseOut"))},renderTooltip:function(){var t=this;if(!t.get("tooltip")){var e=t.get("chart"),n=t.get("cfg"),r=t._setTooltipCrosshairs();n=a.mix({plotRange:e.get("plotRange"),visible:!1,capture:!1},r,n);var i=t._getCanvas();if(!t.get("markerGroup")){var o=i.addGroup({zIndex:11,capture:!1,marker:s.tooltipMarker});t.set("markerGroup",o)}var u=i.addGroup(c,n);i.sort(),t.set("tooltip",u),t._bindEvent()}},showTooltip:function(t,e){var n=this;if((!e||e.length)&&t){var r=n.get("cfg"),i=r&&r.map,s=[],o=[];if(a.each(e,function(e){if(!e.get("tooltipEnable"))return!0;var r=e.get("geoms"),u=e.get("coord");a.each(r,function(e){var n=e.get("frames");if(e.isShareTooltip()){var r=[];a.each(n,function(n){var u=e.findPoint(t,n);if(u){r.push(u);var c=e.getTipItems(u,i);o=o.concat(c);var h=e.get("type");a.indexOf(l,h)!==-1&&(s=s.concat(c))}}),r.length&&e.setActiveByPoint(r[0])}else{var u=e.getSingleShape(t,n);u&&(o=e.getTipItems(u.get("origin"),i),e.setShapesActive([u]))}}),s.length&&n._showMarkers(s,u)}),o.length){var u=o[0];if(s.length){t=u.point;var c=a.isArray(t.x)?t.x[t.x.length-1]:t.x,h=a.isArray(t.y)?t.y[t.y.length-1]:t.y,f=e[0].get("coord");t=f.trans(c,h,1)}var g=u.title||u.name;n._setTooltip(g,t,o)}}},
	hideTooltip:function(){var t=this,e=t.get("tooltip"),n=t.chart,r=t.get("markerGroup"),i=t._getCanvas();t.set("prePoint",null),e.hide(),r.hide(),t._clearActive(),n.fire("tooltiphide",{tooltip:e}),i.draw()},onMouseMove:function(t){var e=this.get("timeStamp"),n=+new Date;if(this.enable&&t.views&&t.views.length){var r=this,i={x:t.x,y:t.y};n-e>16&&(r.showTooltip(i,t.views),this.set("timeStamp",n))}},onMouseOut:function(t){var e=this,n=e.get("tooltip"),r=e._getCanvas();n.get("visible")&&(t&&t.target!==r||e.hideTooltip())},clear:function(){var t=this,e=t.get("tooltip"),n=t.get("markerGroup");e&&e.remove(),n&&n.remove(),t.set("tooltip",null),t.set("markerGroup",null),t.set("prePoint",null),t._offEvent()}}),t.exports=f},function(t,e,n){"use strict";function r(t,e,n){var r=(t-e)/(n-e);return r>=0&&r<=1}function i(t,e){var n=!1;if(t){var i=t.type;if("theta"===i){var a=t.get("start"),s=t.get("end");n=r(e.x,a.x,s.x)&&r(e.y,a.y,s.y)}else{var o=t.invert(e);n=o.x>=0&&o.y>=0&&o.x<=1&&o.y<=1}}return n}var a=n(1),s=n(327),o=n(326),u=n(93),c=n(295),l=function h(t){t=o.initContainer(t),h.superclass.constructor.call(this,t),this.init()};l.ATTRS={id:null,width:null,height:null,plotCfg:null,facetCfg:null,forceFit:!1,views:[]},a.extend(l,s),a.augment(l,{init:function(){var t=this.get("plotRange");this.set("region",{start:t.start,end:t.end}),this.set("views",[]),this.set("facetCfg",a.mix({},this.get("facetCfg"))),this.get("forceFit")&&window.addEventListener("resize",a.wrapBehavior(this,"_initForceFitEvent")),u.initEvent(this),u.initLegend(this),u.initTooltip(this)},_initForceFitEvent:function(){var t=setTimeout(a.wrapBehavior(this,"forceFit"),200);clearTimeout(this.get("resizeTimer")),this.set("resizeTimer",t)},_getYScale:function(){var t=this.getAllGeoms(),e=[];return a.each(t,function(t){var n=t.getYScale();n&&a.indexOf(e,n)===-1&&e.push(n)}),e},_renderLegends:function(){var t=this.get("legendAssist"),e=this.getAllGeoms(),n=this.get("filters"),r=this._getYScale(),i=[];if(a.each(e,function(e){var r=e.getLegendAttr();a.each(r,function(r){var s=r.type,o=r.getScale(s);if("identity"!==o.type&&a.indexOf(i,o)===-1){i.push(o);var u,c=r.scales,l=1===c.length?o.dim:o.dim+"*"+c[1].dim;n&&n[l]&&(u=n[l]),t.addLegend(o,r,e,u)}})}),!i.length&&r.length>1){var s=[];a.each(r,function(t){a.each(e,function(e){if(e.getYScale()===t){var n={name:t.alias||t.dim,color:e.getDefaultValue("color")};return s.push(n),!1}})}),t.addMixedLegend(s)}t.alignLegends()},_renderTooltip:function(){var t=this.get("tooltipAssist");t.renderTooltip()},_creatFacets:function(){var t=this.get("data");t=this._filterData(t);var e=this.get("scaleAssist"),n=this.get("facetCfg");if(n.defs=e.defs,n.plotRange=this.get("plotRange"),!this.get("plotContainer")){var r=this.get("canvas"),i=r.addGroup();this.set("plotContainer",i)}var a=new c({plotContainer:this.get("plotContainer"),facetCfg:n});return a.createFacets(t)},_createFacetViews:function(t){var e=new s({index:t.index,data:t.frame,region:t.region});return e.set("backCanvas",this.get("backCanvas")),e.set("frontCanvas",this.get("frontCanvas")),e.set("canvas",this.get("canvas")),e.set("animate",this.get("animate")),e.set("axisAssist",this.get("axisAssist")),e.set("guideAssist",this.get("guideAssist")),e.set("coordAssist",this.get("coordAssist")),e.set("filters",this.get("filters")),e.set("layers",this.get("layers")),e.set("facet",t),e},legend:function(t,e){var n=this.get("legendAssist"),r=n.legendCfg;return n.enable=!0,a.isBoolean(t)?n.enable=t:a.isObject(t)?(r=t,n.position=r.position?r.position:"right"):r[t]=e,n.legendCfg=r,this},tooltip:function(t,e){var n=this.get("tooltipAssist");return a.isObject(t)&&(e=t,t=!0),n.enable=t,n.cfg=e,this},facet:function(t,e){var n=this.get("facetCfg");return n.dims=a.isString(t)?[t]:t,a.mix(n,e),this},animate:function(t){return this.set("animate",t),this},render:function(){var t=this,e=t.get("views"),n=t.get("facetCfg");if(t.set("painting",!0),n.dims&&n.dims.length>0){e=[];var r=t._creatFacets();a.each(r,function(n){e.push(t._createFacetViews(n))}),t.set("views",e),t.set("coord",t._createCoord())}else l.superclass.render.call(t);return e.length&&a.each(e,function(t){t.render()}),t._renderLegends(),t._renderTooltip(),t.set("painting",!1),t.get("backCanvas").draw(),t.get("canvas").draw(),t.get("frontCanvas").draw(),t},changeSize:function(t,e){var n=this,r=n.get("backCanvas"),i=n.get("canvas"),s=n.get("frontCanvas");r.changeSize(t,e),i.changeSize(t,e),s.changeSize(t,e),n.set("width",t),n.set("height",e);var o=n.get("backPlotBg");o.repaint();var u=o.get("plotRange");n.set("region",{start:u.start,end:u.end});var c=n.get("views");return a.each(c,function(t){var e=n._getRegion(t);t.set("region",e)}),n.repaint(),n},repaint:function(){var t=this.get("animate");t!==!1&&this.animate(!1),this.get("legendAssist").reset(),this.get("tooltipAssist").clear(),l.superclass._clearInner.call(this);var e=this.get("views");return a.each(e,function(t){t._clearInner()}),this.render(),t!==!1&&this.animate(t),this},clear:function(){var t=this.get("views");return a.each(t,function(t){t.clear()}),this.set("views",[]),this.get("legendAssist").reset(),this.get("tooltipAssist").clear(),l.superclass.clear.call(this),this.get("frontCanvas").clear(),this.get("frontCanvas").draw(),this.set("plotContainer",null),this.set("backPlot",null),this.set("frontPlot",null),this},destroy:function(){if(!this.destroyed){var t=this.get("container");this.fire("destroy"),this.clear(),this.get("backCanvas").destroy(),this.get("canvas").destroy(),this.get("frontCanvas").destroy(),this._attrs={},this.events={},this.destroyed=!0,t.parentNode.removeChild(t),window.removeEventListener("resize",a.getWrapBehavior(this,"_initForceFitEvent"))}},getAllGeoms:function(){var t=[];t=t.concat(this.getGeoms());var e=this.get("views");return a.each(e,function(e){t=t.concat(e.getGeoms())}),t},showTooltip:function(t){var e=this,n=e.getViewsByPoint(t);if(n.length){var r=e.get("tooltipAssist");r.showTooltip(t,n)}return e},hideTooltip:function(){var t=this.get("tooltipAssist");t.hideTooltip()},getTooltipItems:function(t){var e=this,n=e.getViewsByPoint(t),r=[];return a.each(n,function(n){var i=n.getGeoms(),s=e.get("tooltipAssist"),o=s.cfg&&s.cfg.map;a.each(i,function(e){var n=e.get("frames"),i=[];a.each(n,function(n){var r=e.findPoint(t,n);if(r){var a=e.getTipItems(r,o);i=i.concat(a)}}),r=r.concat(i)})}),r},getViewsByPoint:function(t){var e=[],n=this.get("views");return i(this.get("coord"),t)&&e.push(this),a.each(n,function(n){i(n.get("coord"),t)&&e.push(n)}),e},getViews:function(){return this.get("views")},createView:function(t){var e=new s(t);e.get("region")||e.set("region",this._getRegion(e)),e.set("backCanvas",this.get("backCanvas")),e.set("frontCanvas",this.get("frontCanvas")),e.set("canvas",this.get("canvas")),e.set("animate",this.get("animate")),e.set("parent",this);var n=this.get("views");return n.push(e),this.set("views",n),e},removeView:function(t){for(var e=[],n=this.get("views"),r=null,i=0;i<n.length;i++)r=n[i],r!==t?e.push(r):r.clear();this.set("views",e),this.repaint()},getView:function(t){return this.get("views")[t]},_getRegion:function(t){var e=this.get("plotRange"),n=t.get("start"),r=t.get("end"),i=e.tl,a=e.br,s={x:n.x*(a.x-i.x)+i.x,y:r.y*(a.y-i.y)+i.y},o={x:r.x*(a.x-i.x)+i.x,y:n.y*(a.y-i.y)+i.y};return{start:s,end:o}},forceFit:function(){var t=this.get("container"),e=a.getWidth(t),n=this.get("height");e!==this.get("width")&&this.changeSize(e,n)}}),t.exports=l},function(t,e,n){"use strict";var r=n(1),i=n(118),a=n(304),s=n(5),o=function(t){r.mix(this,t),this._init()};r.augment(o,{type:"point",adjusts:null,chart:null,attrs:null,styleCfg:null,labelCfg:null,scales:null,tooltipDims:null,_init:function(){this.attrs=[],this.scales={},this.stats=[];var t=this.adjusts;t&&(r.each(t,function(e,n){t[n]=r.ucfirst(e)}),this.adjusts=t)},_createScale:function(t){var e=this.scales,n=this.chart;return e[t]||(e[t]=n.createScale(t)),e[t]},_addStat:function(t){this.stats.push(t)},_addAttr:function(t,e){var n=this.attrs;t=r.ucfirst(t);var a=i[t],s=new a(e);n.push(s)},_getDefaultShapes:function(){var t=this.type,e=/[A-Z].*$/;return t=t.replace(e),s.shapes[t]},_getDefaultColors:function(){var t,e=this.adjusts;return t=e&&1===e.length?this.type+e[0]:this.type,s.colors[t]||s.colors["default"]},_parseDims:function(t,e){var n,i=this,a=i.chart;if(t.isStat&&(n=t,n.init(),t=n.getDims(),i._addStat(n)),r.isString(t)&&t.indexOf("+")!==-1){var s=[],o=a.get("scaleAssist"),u=t.replace(/\s+/g,"").split("*");r.each(u,function(t){var e=t.replace(/\(|\)|\s+/g,"").split("+"),n=e.join("+");s.push(n),e.length>1&&(o.defs[n]=r.mix({},o.defs[n],{dims:e}))}),t=s}else r.isString(t)&&t.indexOf("*")!==-1?t=t.replace(/\s+/g,"").split("*"):(r.isNumber(t)||r.isString(t))&&(t=[t]);var c=a.get("coordAssist");"position"===e&&"theta"===c.type&&"interval"===i.type&&"Stack"===i.adjusts[0]&&t.unshift("..pieX"),"position"===e&&1===t.length&&(r.inArray(i.adjusts,"Jitter")||r.inArray(i.adjusts,"Stack"))&&t.push("..y");var l=[];return r.each(t,function(t){var e=i._createScale(t);l.push(e)}),{dims:t,stat:n,scales:l}},createGeom:function(){var t=this.type;return t=r.ucfirst(t),new a({type:this.type,chart:this.chart,attrs:this.attrs,stats:this.stats,scales:this.scales,styleCfg:this.styleCfg,labelCfg:this.labelCfg,tooltipDims:this.tooltipDims,adjusts:this.adjusts})},position:function(t){var e=this._parseDims(t,"position");return this._addAttr("position",{scales:e.scales,stat:e.stat}),this},color:function(t,e){var n=this._parseDims(t),i={scales:n.scales,stat:n.stat};return"heatmap"!==this.type||e||(e=s.heatmapColors),r.isFunction(e)?i.callback=e:r.isArray(e)?i.arr=e:e?i.methodType=e:i.arr=this._getDefaultColors(),this._addAttr("color",i),this},shape:function(t,e){var n=this._parseDims(t),i={scales:n.scales,stat:n.stat};return r.isFunction(e)?i.callback=e:i.arr=e||this._getDefaultShapes(),this._addAttr("shape",i),this},opacity:function(t,e){var n=this._parseDims(t),i={scales:n.scales,stat:n.stat};return r.isFunction(e)&&(i.callback=e),this._addAttr("opacity",i),this},size:function(t,e,n){var i=this._parseDims(t),a={scales:i.scales,stat:i.stat,min:r.isNull(n)?1:n};return r.isFunction(e)?a.callback=e:a.max=e||10,this._addAttr("size",a),this},label:function(t,e,n){var i=this._parseDims(t);r.isObject(e)&&(n=e,e=null);var a={scales:i.scales,cfg:n,stat:i.stat,callback:e};return this.labelCfg=a,this},tooltip:function(t){var e=this._parseDims(t);return this.tooltipDims=e.dims,this},style:function(t){return this.styleCfg=t,this}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(11),a=n(101),s=function o(t){o.superclass.constructor.call(this,t)};s.ATTRS={gemo:null},r.extend(s,i.Group),r.mixin(s,[a.Group]),r.augment(s,{isItemActived:function(t){return t.get("actived")},setItemActived:function(t,e){e?t.set("actived",!0):t.set("actived",!1)}}),t.exports=s},function(t,e,n){"use strict";var r=n(109),i=n(1),a={};a.getDefault=function(t){var e=t.geom,n=t.fn,a=e.get("coord"),s=r,o=e.get("type"),u=e.get("adjusts")||"";switch(o+=u,a.type){case"cartesian":switch(o){case"interval":case"intervalStack":case"intervalDodge":s=a.isTransposed?r.scaleX:r.scaleY;break;case"intervalSymmetric":s=r.scaleX;break;default:s=r.waves}break;case"polar":switch(o){case"area":case"areaStack":case"interval":case"intervalStack":case"intervalDodge":s=r.scaleXY;break;default:s=r.angle}break;case"theta":s=r.angle;break;case"plus":s=r.scaleXY}var c=a.get("start"),l=a.get("end"),h=l.x-c.x,f=c.y-l.y,g={group:e.get("group"),rect:{x:c.x,y:l.y,width:h,height:f},before:n};return a.isPolar&&i.mix(g,{circle:{center:a.getCenter(),startAngle:a.get("startAngle"),endAngle:a.get("endAngle"),r:Math.max(h,f)/2}}),new s(g)},t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(27),a=n(303),s=n(305),o=n(312),u=n(314),c=n(315),l=n(313),h=n(302),f=n(96),g=n(5),p=["size","shape","color"],v=function d(t){d.superclass.constructor.call(this,t),this._init()};v.ATTRS={type:"point",chart:null,attrs:null,stats:null,scales:null,styleCfg:null,labelCfg:null,animate:g.animate},r.extend(v,i),r.mixin(v,[l,c,o,u]),r.augment(v,{_init:function(){var t=this.get("type"),e=this.get("chart"),n=e.get("plotContainer");n||(n=e.get("canvas").addGroup());var i=n.addGroup({zIndex:10});this.set("container",i),r.inArray(["interval","point","schema"],t)&&this.set("animate",!0)},_addLabels:function(t){var e=this,n=e.get("type"),i=e.get("coord"),a=s.getLabelsClass(i.type,n),o=e.get("container"),u=o.addGroup(a,{labelsCfg:e.get("labelCfg"),coord:i,geom:e,geomType:n}),c=[];r.each(t,function(t){c=c.concat(t.toJSON())}),u.showLabels(c)},_draw:function(t){var e=this.get("group"),n=this.get("type");n=r.ucfirst(n);var i=new f[n]({container:e,attrs:this.get("attrs"),styleCfg:this.get("styleCfg"),adjusts:this.get("adjusts"),frames:t}),a=i.draw(t);return this.set("geomShape",i.get("shapeObj")),this.set("shapeType",i.get("shapeType")),a},paint:function(t,e,n){function i(){var r=s._draw(e);n&&n(t,r),s.get("labelCfg")&&s._addLabels(r)}var s=this;if("map"===t.type){var o=s.get("scales"),u=o["..long"],c=o["..lant"];t.set("originMin",[u.min,c.min]),t.set("originMax",[u.max,c.max]),s.set("coord",t)}var l=s.getAttr("position");l.coord=t;var f=s.get("container"),g=f.addGroup(h,{geom:s,coord:t,multipleActive:s.isShareTooltip(),capture:!1});g.setMatrix(t.get("matrix").clone()),s.set("group",g);var p=s.get("chart"),v=p.get("animate");if(v=r.isNull(v)?s.get("animate"):v){var d=a.getDefault({geom:s,fn:function(){i()}});d.start()}else i();return s},getDefaultValue:function(t){var e=this,n=e.get(t),r=e.getAttr(t);if(r){var i=r.getScale(t);"identity"===i.type&&(n=i.value)}return n},getLegendAttr:function(){var t=this,e=t.get("attrs"),n=[];return r.each(e,function(t){r.indexOf(p,t.type)!==-1&&n.push(t)}),n},getScales:function(){return this.get("scales")},destroy:function(){var t=this.get("group");t.get("destroyed")||(t.clear(),t.remove()),this._attrs={},this.events={}},getXDistance:function(){var t,e=this,n=e.getXScale();return t=n.isCategory?1:(n.max-n.min)/n.values.length},getAttr:function(t){var e=this.get("attrs"),n=null;return r.each(e,function(e){e.type===t&&(n=e)}),n},getXDim:function(){var t=this.getXScale();return t.dim},getYDim:function(){var t=this.getYScale();return t?t.dim:"y"},getXScale:function(){return this.getAttr("position").scales[0]},getYScale:function(){return this.getAttr("position").scales[1]},isInCircle:function(){return this.get("coord").isPolar}}),t.exports=v},function(t,e,n){"use strict";var r=n(95),i=n(94),a=n(306),s={getLabelsClass:function(t){var e=r;return"polar"===t||"plus"===t?e=i:"theta"===t&&(e=a),e}};t.exports=s},function(t,e,n){"use strict";function r(t){return l.equal(t,-Math.PI/2)||l.equal(t,Math.PI/2)||l.equal(t,3*Math.PI/2)}function i(t,e,n){return{x:t.x+n*Math.cos(e),y:t.y+n*Math.sin(e)}}function a(t,e,n,r,i,a){var s=Math.acos((r-e)/r),o=a?n-Math.PI+s:n-s;t.orignAngle=t.angle,t.angle=o,t.orignX=t.x,t.orignY=t.y,t.x=i.x+(r+2.5)*Math.cos(t.angle),t.y=i.y+(r+2.5)*Math.sin(t.angle),l.equal(o,-Math.PI/2)?t.x+=g:l.equal(o,3*Math.PI/2)?t.x-=g:l.equal(o,Math.PI/2)&&(o>=t.orignAngle?t.x+=g:t.x-=g)}function s(t,e,n,r,i,s){var o=parseInt(2*e/s,10),u=t.y+e,c=t.y-e;o<n.length&&n.splice(o,n.length-o);for(var l,h,f,g=0,p=n.length,v=0,d=0;d<p;d++){var x=n[d],m=x.y;h=p-d,l=i>0?(u-m)/h:(m-c)/h,d>0&&(v=i>0?(m-c)/d:(u-m)/d);var y;if(y=i>0?h<p?m-n[d-1].y:m-c:h<p-1?n[d-1].y-m:u-m,g=d,l<s){0!==g&&(g=d+1);break}(v>0&&v<s||y>0&&y<s)&&(f=d)}if(f)for(var _=0;_<=f;_++){var S=_*s;a(n[_],S,r,e,t,!0)}var w=i<0&&g<=p-1||i>0&&g<p-1;if(p>1&&w){var b=0===g?0:g-1,M=n[b],A=M.y,C=i>0?u:c;if(h=p-b-1,l=Math.abs(C-A)/h,h>1||l<=s){l<s&&(l=s);for(var k=p-1;k>=b;k--){var T=(p-1-k)*l;a(n[k],T,r,e,t,!1)}}for(var P=i>0?c:u,I=!1,D=b-1;D>0;D--){var L=n[D];if(!I&&Math.abs(P-L.y)/(D+1)<s&&(I=!0),I){var R=Math.abs(n[D+1].y-C)+s;a(n[D],R,r,e,t)}}}}var o=n(1),u=n(94),c=n(20),l=n(4),h=n(5),f=5,g=1,p=function v(t){v.superclass.constructor.call(this,t)};p.CFG={labels:h.thetaLabels},o.extend(p,u),o.augment(p,{adjustItems:function(t){var e=this,n=e.getDefaultOffset();return n>0&&(t=e._adjustItems(t,n)),t},_adjustItems:function(t){var e=this,n=e.getDefaultOffset(),r=[],i=e.get("coord"),a=i.getCenter(),u=i.getRadius(),c=u+n,l=i.get("startAngle"),h=e.get("labels").labelHeight,f=[],g=[];if(o.each(t,function(t){t.x>a.x?f.push(t):r.push(t)}),r.length){var p=l>=-Math.PI/2?3*Math.PI/2:-Math.PI/2;s(a,c,r,p,-1,h)}return f.length&&s(a,c,f,Math.PI/2,1,h),g=g.concat(f,r)},drawLines:function(t,e){var n=this,r=n.getDefaultOffset();r>0&&o.each(t,function(t){n.lineToLabel(t,e)})},lineToLabel:function(t,e){var n,a=this,s=a.get("coord"),u=s.getRadius(),c=a.getDefaultOffset(),h=a.get("labels"),g=t.orignAngle||t.angle,p=s.getCenter(),v=i(p,g,u+f/2),d=h.labelHeight,x=a.get("lineGroup"),m=[],y=r(t.angle),_=1;y&&(c-=d/2,l.equal(t.angle,Math.PI/2)&&(_=-1)),m.push(["M",v.x,v.y]),n=i(p,g,u+c/2);var S=y?t.y+d/2*_:t.y;m.push(["R",n.x,n.y,t.x,S]),m=o.path2Absolute(m),x||(x=a.addGroup({elCls:"x-line-group"}),a.set("lineGroup",x)),x.addShape("path",{attrs:o.mix({path:m,fill:null,stroke:t.color},e)})},getLabelRotate:function(t,e){var n;return e<0&&(n=180*t/Math.PI,n>90&&(n-=180),n<-90&&(n+=180)),n},getLabelAlign:function(t){var e,n=this,r=n.get("coord"),i=r.getCenter();e=t.x===i.x?"center":t.x>i.x?"left":"right";var a=n.getDefaultOffset();return a<=0&&(e="right"===e?"left":"right"),e},getArcPoint:function(t){return t},getPointAngle:function(t){var e,n,r=this,i=r.get("coord");e={x:t.x[0],y:t.y[0]},n={x:t.x[1],y:t.y[1]};var a=c.getPointAngle(i,e),s=c.getPointAngle(i,n);a>=s&&(s+=2*Math.PI);var o=a+(s-a)/2;return o},getCirclePoint:function(t,e){var n=this,r=n.get("coord"),i=r.getCenter(),a=r.getRadius()+e;return{x:i.x+a*Math.cos(t),y:i.y+a*Math.sin(t),angle:t,r:a}}}),t.exports=p},function(t,e,n){"use strict";var r=n(1),i=n(153),a=n(2),s=n(24),o=function u(t){u.superclass.constructor.call(this,t)};o.ATTRS={type:"contour"},r.extend(o,s.Path),r.augment(o,{_beql:function(t,e){return Math.abs(t-e)<1e-6},_getZScale:function(){return this.getAttr("position").getScale("z")},_getData:function(t){var e=this,n=[],i=e.getAttr("position"),s=i.getDims(),o=s[0],u=s[1],c=s[2],l=a.values(t,o),h=a.values(t,u),f=0,g=0,p=null;return r.each(l,function(t){p&&e._beql(p,t)||f++,p=t}),p=null,r.each(h,function(t){p&&e._beql(p,t)||g++,p=t}),t.each(function(t,e){var r=Math.floor(e/g),i=Math.floor(e%g),a=[t[o],t[u],t[c]];Array.isArray(n[r])||(n[r]=[]),n[r][i]=a}),n},processFrames:function(t){var e=this,n=e.getXDim(),s=e.getYDim(),o=e._getZScale(),u=o.dim,c=a.merge.apply(null,t),l=c.rowObject(0),h=e._getData(c),f=o.ticks,g=i(h,f),p=[];return r.each(g,function(t){var e=t.path,i=t.value,o=[];r.each(e,function(t){var e=r.mix({},l);e[n]=t[0],e[s]=t[1],e[u]=i,o.push(e)}),p.push(new a(o))}),p}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(24),a=function s(t){s.superclass.constructor.call(this,t)};a.ATTRS={type:"edge"},r.extend(a,i.Base),t.exports=a},function(t,e,n){"use strict";var r=n(1),i=n(176),a=n(24),s=n(5),o=function u(t){u.superclass.constructor.call(this,t)};o.ATTRS={type:"heatmap"},r.extend(o,a.Base),r.augment(o,{_getHeatmapData:function(t){var e=this,n=[],r=e.getAttr("color"),i=r.getDims(),a=i[0];return t.each(function(t){var e=[t.x,t.y,t[a]];n.push(e)}),n},_getImageRegion:function(){var t=this,e=t.getCoord(),n=e.get("start"),r=e.get("end"),i={x:n.x,y:r.y,width:r.x-n.x,height:n.y-r.y};return i},_getColorScale:function(){return this.getAttr("color").getScale("color")},_getRadius:function(){var t=this,e=t.getAttr("position"),n=t.getCoord(),r=e.stat,i=null;if(r){var a=r.bandWidth;i=Math.min(n.getWidth(),n.getHeight())*a}return 2*i},drawFrame:function(t){if(t.rowCount()){var e=this,n=e.get("container"),a=e._getHeatmapData(t),o=e._getImageRegion(),u=e._getColorScale(),c=t.rowObject(0).size,l=e.getAttr("color"),h=r.mix({min:u.min,max:u.max,formatter:function(t){return u.scale(t)}},s.heatmap,o);h.colors=[l.mappingValues(u.invert(0)).join(""),l.mappingValues(u.invert(.25)).join(""),l.mappingValues(u.invert(.5)).join(""),l.mappingValues(u.invert(.75)).join(""),l.mappingValues(u.invert(1)).join("")];var f=c?parseInt(c,10):e._getRadius();f&&(h.radius=f);var g=new i(h),p=g.getData(a),v=document.createElement("canvas"),d=v.getContext("2d");v.width=o.width,v.height=o.height,d.putImageData(p,0,0);var x=n.addShape("Image",{attrs:o});x.attr("img",v)}}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(24),a=n(97),s="_origin",o=function u(t){u.superclass.constructor.call(this,t)};o.ATTRS={adjusts:null,frames:null},r.extend(o,i.Interval),r.mixin(o,[a]),r.augment(o,{processFrames:function(t){var e=this.getCoord(),n=e.type;if("theta"===n||"polar"===n&&e.isTransposed&&"Stack"===this.adjusts){var i=[],a=this.getYDim();return r.each(t,function(t){var e=t.colArray(s);e[0][a]>0&&i.push(t)}),i}return t}}),t.exports=o},function(t,e,n){"use strict";var r=n(1),i=n(24),a=n(97),s=function o(t){o.superclass.constructor.call(this,t)};s.ATTRS={adjusts:null,frames:null},r.extend(s,i.Schema),r.mixin(s,[a]),t.exports=s},function(t,e,n){"use strict";function r(t,e){if(!t)return!0;if(t.length!==e.length)return!0;var n=!1;return a.each(e,function(e,r){if(e!==t[r])return n=!0,!1}),n}function i(t,e){for(var n=t.x,r=t.y,i=n[0],a=r[0],s=n[0],o=r[0],u=0;u<n.length;u++){var c=n[u],l=r[u];c<=i&&(i=c),c>=s&&(s=c),l<=a&&(a=l),l>=o&&(o=l)}var h=e.x>=i&&e.x<=s&&e.y>=a&&e.y<=o;return h}var a=n(1),s=n(2),o=Math.abs,u=function(){};u.ATTRS={localRefresh:!1,allowActiveShape:!0,snapAll:!0,snapDistance:10},a.augment(u,{isAllowActiveShape:function(){var t=this.get("type");return"contour"!==t&&"path"!==t&&this.get("allowActiveShape")},isSnapAll:function(){var t=this.get("type");return"interval"!==t&&"schema"!==t&&this.get("snapAll")},setActiveByPoint:function(t){var e=this,n=e.get("coord"),i=null;if(!e.isAllowActiveShape())return[];if(e.isShareTooltip())i=e._getSharedShapes(t,n);else{i=[];var a=e.getSingleShape(t);a&&i.push(a)}var s=e.get("preShapes");return r(s,i)&&e.setShapesActive(i),e.set("preShapes",i),i},_getSharedShapes:function(t){var e=this,n=e.get("group"),r=[];if(n){var i=e.getXDim(),s=n.get("children");a.each(s,function(e){var n=e.get("origin");n&&n._origin[i]===t._origin[i]&&r.push(e)})}return r},getSingleShape:function(t){var e=this,n=null;if("contour"===e.get("type")){var r=s.forceMerge.apply(null,e.get("frames")),i=e.findPoint(t,r);return n={origin:i,get:function(t){return this[t]}}}var o=e.get("group"),u=e.get("coord"),c=o.get("canvas"),l=c.get("pixelRatio");if(o){var h=o.get("children"),f=[];h.length>30?a.each(h,function(n){var r=n.get("origin");r&&e.isSnapPoint(t,r,u)&&f.push(n)}):f=h;for(var g=f.length-1;g>=0;g--){var p=f[g];if(p.get("origin")&&p.isHit(t.x*l,t.y*l)){n=p;break}}}return n},_isSnapPointOfPolygon:function(t,e,n){var r,s=this,u=s.get("snapDistance"),c=s.getXScale(),l=s.getYScale(),h=n.invert(t);if(a.isArray(e.x)&&a.isArray(e.y))r=i(e,t);else{var f=n.trans(e.x,e.y,1),g=!1,p=!1;g=c.isCategory?c.translate(c.invert(h.x))===e[c.dim]:o(f.x-t.x)<u,p=l&&l.isCategory?l.translate(l.invert(h.y))===e[l.dim]:o(f.y-t.y)<u,r=g&&p}return r},isSnapPoint:function(t,e,n){var r=this,i=this.get("snapDistance"),a=!1;if("polygon"===r.get("type"))a=r._isSnapPointOfPolygon(t,e,n);else if(this.isSnapAll()){var s=n.trans(e.x,e.y,1);a=o(s.x-t.x)<i&&o(s.y-t.y)<i}else{var u=n.invert(t),c=r.getXScale(),l=c.dim,h=c.translate(c.invert(u.x));i=r.getXDistance(),a=o(h-e[l])<i}return a},setShapesActive:function(t){var e=this;if(e.isAllowActiveShape()){var n=e.get("coord"),r=e.get("activeGroup"),i=e.get("chart"),s=i.get("frontCanvas");r?r.clear():(r=s.addGroup(),e.set("activeGroup",r)),r.setMatrix(n.get("matrix").clone()),a.each(t,function(t){e._activeShape(t,r)}),e.set("activeShapes",t),s.sort()}},_activeShape:function(t,e){var n=this,r=t.get("type"),i=t.get("origin"),s=i.shape||n.getDefaultValue("shape"),o=n.get("geomShape"),u=o.getActiveCfg(s,i),c=a.mix({},t.__attrs,u,{fill:"white",fillOpacity:.15}),l=e.addShape(r,{attrs:c});l.setMatrix(t.getMatrix()),l.set("origin",i)},clearShapeActived:function(){var t=this,e=t.get("activeGroup");e&&e.clear(),t.set("activeShapes",null)}}),t.exports=u},function(t,e,n){"use strict";function r(t){return t.binWidth||t.bandWidth}var i=n(1),a=n(2),s=n(104),o=["size","shape","color"],u="_origin",c=["Dodge","Jitter","Stack","Symmetric"],l=function(){};l.ATTRS={adjusts:null},i.augment(l,{_getScale:function(t){var e=this,n=e.get("scales"),r=null;return i.each(n,function(e){if(e.dim===t)return r=e,!1}),r},_getGroupScales:function(){var t=this,e=[];return i.each(o,function(n){var r=t.getAttr(n);if(r){var a=r.scales;i.each(a,function(t){t.isCategory&&i.indexOf(e,t)===-1&&e.push(t)})}}),e},_saveOriginData:function(t){return i.each(t,function(t){var e=t.toJSON();t.addCol(u,e)}),t},_setStatRange:function(t){var e=this,n=t.getDims(),r=[];i.each(n,function(n){var i=e._getScale(n);i.isCategory||"identity"===i.type||(isNaN(i.min)||isNaN(i.max)||t.setRange(n,{min:i.min,max:i.max}),"bin"===t.type&&r.push(n))}),r.length&&(t.binDims=r)},_getBinStat:function(t){var e=null;if(r(t))e=t;else if(t.stat){for(var n=t.stat;n&&!r(n);)n=n.stat;n&&r(n)&&(e=n)}return e},_execStat:function(t,e){var n=this,r=n._getBinStat(t);return r&&n._setStatRange(r),(t.isRegression||t.setRange)&&n._setStatRange(t),t.exec(e)},_execStats:function(t){var e=this,n=t;if(i.isNull(t)||t&&0===t.length)return n;var r=e.get("attrs"),s=e.getAttr("position"),o=s.stat,u=[];i.each(r,function(t){"position"!==t.type&&t.stat&&u.push(t.stat)}),o&&(n=e._execStat(o,n));var c=e.get("labelCfg");if(c&&c.stat&&(n=e._execStat(c.stat,n)),u.length){var l=[],h=s.getDims();i.each(n,function(t){l=l.concat(a.group(t,h))}),n=l,i.each(u,function(t){n=e._execStat(t,n)}),n=[a.merge.apply(this,n)]}return n},_getGroupDims:function(){var t=[],e=this._getGroupScales();return i.each(e,function(e){t.push(e.dim)}),t},_groupFrames:function(t){var e=this._getGroupDims();return a.group(t,e)},_filterNullValue:function(t){var e=this.getXDim();return a.filter(t,function(t){return i.isArray(t[e])||!i.isNull(t[e])})},_createFrame:function(t){var e=this,n=e.get("scales"),r=[],s=[];i.each(n,function(e){var n=e.dim;r.push(n);var i;if(t.contains(n))i=t.colArray(n);else{var o=e.value||0;i=a.Array.repeat(o,t.rowCount())}s.push(i)});var o=new a(s,{names:r});return o},processData:function(t){var e=this._createFrame(t);return e=this._filterNullValue(e),t=this._groupFrames(e),t=this._execStats(t),t=this._saveOriginData(t)},numbericFrames:function(t){var e=this,n=e.get("scales");return i.each(t,function(t){i.each(n,function(e){var n=e.dim;if(e.isCategory||"time"===e.type){var r=t.colArray(n);i.each(r,function(t,n){r[n]=e.translate(t)}),t.colReplace(n,r)}})}),t},_paddingNullValue:function(t){var e=this,n=e.getXDim(),r=e.getYDim(),s=a.merge.apply(null,t),o=a.values(s,n);i.each(t,function(t){if(t.rowCount()<o.length){var e={},a=t.rowObject(0),s=t.colArray(n);i.each(s,function(t){e[t]=!0});var u=!0;i.each(o,function(s){if(e[s])u=!0;else if(u===!0){var o=i.mix({},a);o[n]=s,o[r]=null;var c={};c[n]=s,o[r]=null,o._origin=c,t.addRow(o),u=!1}})}})},processAdjust:function(t){var e=this,n=e.get("adjusts");return i.isNull(n)||i.each(n,function(n){if(!i.inArray(c,n))throw new Error(i.ucfirst(n)+" is not supported, please use "+c.toString());var r={},a=e.getYScale(),o=e.getXScale();if("Dodge"===n){var u=[];if(o.isCategory)u.push("x");else{if(a)throw new Error("dodge is not support linear attribute, please use category attribute!");u.push("y")}var l=e._getGroupDims();r={xDim:e.getXDim(),yDim:a?a.dim:null,adjustNames:u,groupDims:l},e.isInCircle()&&(r.dodgeRatio=1,r.marginRatio=0)}else if("Stack"===n){var h=e.getDefaultValue("size")||3;if(r={xDim:e.getXDim(),size:h},"area"===e.get("type")&&e._paddingNullValue(t),a&&"..y"!==a.dim)r.yDim=e.getYDim();else{var f=e.get("coord");r.height=f.getHeight()}}else r={xDim:e.getXDim(),yDim:e.getYDim()};var g=new s[n](r);"Stack"===n&&a&&"..y"===a.dim?(g.yDim="..y",t=g.processOneDimStack(t)):t=g.processAdjust(t)}),t}}),t.exports=l},function(t,e,n){"use strict";var r=n(1),i=r.MatrixUtil,a=function(){};a.ATTRS={allowSelected:!1},r.augment(a,{allowSelected:function s(){var t=this.get("type"),e=this.get("coord"),n=e&&e.type,s=this.get("allowSelected");return"interval"===t&&"theta"===n&&(s=!0),s},getSelectShapes:function(){var t=this,e=t.get("container"),n=[],i=e.get("children");return r.each(i,function(t){var e=t.get("children");r.each(e,function(t){t.get("origin")&&n.push(t)})}),n},getData:function(){var t=this,e=t.getSelectShapes(),n=[];return r.each(e,function(t){var e=t.get("origin");e&&n.push(e)}),n},getShapeByObj:function(t,e){var n=null;return t&&r.each(e,function(e){if(e.get("origin")===t)return n=e,!1}),n},getSelectedShape:function(t){var e=this;t=t||e.getSelectShapes();var n=null;return r.each(t,function(t){if(t.get("selected"))return n=t,!1}),n},setShapeSelected:function(t,e){var n=this;t.set("selected",e),n.setSelectedStatus(t,e)},setSelectedStatus:function(t,e){var n=this,i=n.get("activeGroup"),a={};if(e){var s=t.get("origin"),o=n.get("geomShape"),u=s.shape||n.getDefaultValue("shape"),c={geom:n,coord:t.get("parent").get("coord"),point:s},l=o.getSelectedCfg(u,c);t.get("originSelectCfg")?a=t.get("originSelectCfg"):(r.each(l,function(e,n){if("transform"===n||"matrix"===n)a.matrix=t.getMatrix().clone();else{var r=t.attr(n);r!==e&&(a[n]=r)}}),t.set("originSelectCfg",a)),l=this.parseCfg(a.matrix,l),t.animate(l,300)}else a=t.get("originSelectCfg"),t.animate(a,300);n.clearShapeActived(),i&&i.get("canvas").draw()},parseCfg:function(t,e){return e.transform&&(e.matrix=i.transform(t,e.transform),delete e.transform),e},setSelected:function(t){var e=this,n=e.get("chart"),r=e.getSelectShapes(),i=e.getSelectedShape(r),a=e.getShapeByObj(t,r);i!==a&&(i&&(e.setShapeSelected(i,!1),n.fire("itemunselected",{shape:i,data:i.get("origin"),view:e,geom:e})),a&&(e.setShapeSelected(a,!0),n.fire("itemselected",{shape:a,data:t,view:e,geom:e})),n.fire("itemselectedchange",{shape:a,data:t,view:e,geom:e,preShape:i,preData:i?i.get("origin"):null}))},getSelected:function(){var t=this,e=t.getSelectedShape(null),n=null;return e&&(n=e.get("origin")),n},clearSelected:function(){this.setSelected(null)}}),t.exports=a},function(t,e,n){"use strict";function r(t){return t.alias||t.dim}var i=n(1),a=n(5),s="_origin",o=function(){};o.ATTRS={tooltipMap:{},tooltipDims:null,shareTooltip:!0},i.augment(o,{_snapEqual:function(t,e,n){var r;return t=n.translate(t),e=n.translate(e),r=n.isCategory?t===e:Math.abs(t-e)<=.001},_getScaleValueByPoint:function(t){var e=0,n=this.get("coord"),r=this.getXScale(),i=n.invert(t),a=i.x;return this.isInCircle()&&a>(1+r.rangeMax())/2&&(a=r.rangeMin()),e=r.invert(a),r.isCategory&&(e=r.translate(e)),e},_getTipMapScale:function(t){var e=this.get("tooltipMap"),n=e&&e[t];return this._getScale(n)},_getTipValueScale:function(){var t=this._getTipMapScale("value");if(!t){var e=this.getLegendAttr();i.each(e,function(e){var n=e.getScale(e.type);if(n.isLinear)return t=n,!1})}var n=this.getXScale(),r=this.getYScale();return!t&&r&&"..y"===r.dim?n:t||r||n},_getTipTitleScale:function(){var t=this,e=t._getTipMapScale("title");if(!e){var n,r=t.getAttr("position"),a=r.getDims();i.each(a,function(t){if(t.indexOf("..")===-1)return n=t,!1}),e=t._getScale(n)}return e},findPoint:function(t,e){var n=this,r=null,a=e.toJSON(),o=n.getXScale(),u=o.dim,c=n.get("type");if("heatmap"===c||"contour"===c||"point"===c){var l,h=n.get("coord"),f=h.invert(t),g=n.getYScale(),p=g.dim,v=o.invert(f.x),d=g.invert(f.y),x={};i.each(a,function(t){var e=(t._origin[u]-v)*(t._origin[u]-v)+(t._origin[p]-d)*(t._origin[p]-d);(!l||e<l)&&(l=e,x=t)}),r=x}else{var m=a[0],y=a[a.length-1];if(!m)return r;var _=n._getScaleValueByPoint(t),S=m[s][u],w=y[s][u];if(i.isArray(S))i.each(a,function(t){var e=t[s];if(o.translate(e[u][0])<=_&&o.translate(e[u][1])>=_)return r=t,!1});else{if(i.isNumber(_)&&(_>o.translate(w)||_<o.translate(S)))return null;var b;i.each(a,function(t,e){var c=t[s];return n._snapEqual(c[u],_,o)?(r=t,!1):void(i.isNumber(_)&&o.translate(c[u])<=_&&(y=t,
	b=a[e+1]))}),y&&b&&Math.abs(o.translate(y[s][u])-_)>Math.abs(o.translate(b[s][u])-_)&&(y=b)}var M=n.getXDistance();!r&&Math.abs(o.translate(y[s][u])-_)<M/2&&(r=y)}return r},getTipTitle:function(t){var e,n="",r=this.get("tooltipMap"),i=r.title;if(i){if(e=this._getScale(i),!e)return i}else e=this._getTipTitleScale();if(e){var a=t[e.dim];n=e.getText(a)}else if("heatmap"===this.get("type")){var s=this.getXScale(),o=this.getYScale(),u=s.getText(t[s.dim]),c=o.getText(t[o.dim]);n="( "+u+", "+c+" )"}return n},getTipValue:function(t){var e,n=this,r=n._getTipValueScale(),a=r.dim;if(e=t[a],i.isArray(e)){var s=[];i.each(e,function(t){s.push(r.getText(t))}),e=s.join("-")}else e=r.getText(e);return e},getTipName:function(t){var e,n,a=this.get("tooltipMap"),s=a.name;if(s&&(n=this._getScale(s),!n))return s;var o=this._getGroupScales();if(!n&&o.length&&i.each(o,function(t){return n=t,!1}),n){var u=n.dim;e=n.getText(t[u])}else{var c=this._getTipValueScale();e=r(c)}return e},getTipItems:function(t,e){function n(e,n){i.isNull(n)||""===n||g.push({title:h,point:t,name:e||h,value:n,color:t.color||a.defaultColor,marker:!0})}var o=this,u=t[s];e&&o.set("tooltipMap",e);var c,l,h=o.getTipTitle(u),f=o.get("tooltipDims"),g=[];return f?i.each(f,function(t){var e=o._getScale(t);c=r(e),l=e.getText(u[t]),n(c,l)}):(l=o.getTipValue(u),c=o.getTipName(u),n(c,l)),g},isShareTooltip:function(){var t=this.get("shareTooltip"),e=this.get("type");if("interval"===e){var n=this.get("coord"),r=n.type;("theta"===r||"polar"===r&&n.isTransposed)&&(t=!1)}else this.getYScale()&&!i.inArray(["contour","point","polygon"],e)||(t=!1);return t}}),t.exports=o},function(t,e,n){"use strict";function r(t){var e=g.shape.hollowArea,n=l.mix(!0,{},e,{stroke:t.color,lineWidth:t.size,strokeOpacity:t.opacity},t.style);return n}function i(t){var e=g.shape.area,n=l.mix(!0,{},e,{fill:t.color,stroke:t.color,lineWidth:t.size,fillOpacity:t.opacity},t.style);return n}function a(t,e){var n="",r=[],i=[],a=[],s=t.isInCircle;return l.each(t.points,function(t){i.push(t[0]),a.push(t[1])}),a=a.reverse(),r.push(i,a),l.each(r,function(t,r){var i="";if(i=e?f.getSplinePath(t,!1):f.getLinePath(t,!1),s){var a=t[0];i+=l.substitute("L {x} {y}",a)}else r>0&&(i=i.replace("M","L"));n+=i}),n+="z"}function s(t,e,n){return[["M",t-n,e+n],["L",t-n,e-n],["L",t,e],["L",t+n,e-n],["L",t+n,e+n],["z"]]}function o(t,e,n){return l.path2Absolute([["M",t-n,e+n],["L",t-n,e],["R",t-n/2,e-n/2,t,e,t+n/2,e+n/2,t+n,e],["L",t+n,e+n],["z"]])}function u(t,e,n){var a=n?r(t):i(t);return l.mix({symbol:e?o:s},a)}function c(t){return t&&t.indexOf("line")!==-1?g.activeShape.hollowArea:g.activeShape.area}var l=n(1),h=n(15),f=n(20),g=n(5),p=[2,1],v=h.registGeom("area",{defaultShapeType:"area",getActiveCfg:function(t){return c(t)}});h.registShape("area","area",{getShapePoints:function(t){var e=[],n=t.x,r=t.y,i=t.y0;return r=l.isArray(r)?r:[i,r],l.each(r,function(t){e.push({x:n,y:t})}),e},drawShape:function(t,e){var n=i(t),r=a(t,!1);return r=this.parsePath(r,!1),e.addShape("path",{attrs:l.mix(n,{path:r})})},getMarkerCfg:function(t){return u(t,!1,!1)}}),h.registShape("area","smooth",{drawShape:function(t,e){var n=i(t),r=a(t,!0);return r=this.parsePath(r,!1),e.addShape("path",{attrs:l.mix(n,{path:r})})},getMarkerCfg:function(t){return u(t,!0,!1)}}),h.registShape("area","line",{drawShape:function(t,e){var n=r(t),i=a(t,!1);return i=this.parsePath(i,!1),e.addShape("path",{attrs:l.mix(n,{path:i})})},getMarkerCfg:function(t){return u(t,!1,!0)}}),h.registShape("area","dotLine",{drawShape:function(t,e){var n=r(t),i=a(t,!1);return n.lineDash=p,i=this.parsePath(i),e.addShape("path",{attrs:l.mix(n,{path:i})})},getMarkerCfg:function(t){var e=u(t,!1,!0);return e.lineDash=p,e}}),h.registShape("area","smoothLine",{drawShape:function(t,e){var n=r(t),i=a(t,!0);return i=this.parsePath(i,!1),e.addShape("path",{attrs:l.mix(n,{path:i})})},getMarkerCfg:function(t){return u(t,!0,!0)}}),h.registShape("area","dotSmoothLine",{drawShape:function(t,e){var n=r(t),i=a(t,!0);return n.lineDash=p,i=this.parsePath(i,!1),e.addShape("path",{attrs:l.mix(n,{path:i})})},getMarkerCfg:function(t){var e=u(t,!0,!0);return e.lineDash=p,e}}),v.spline=v.smooth,t.exports=v},function(t,e,n){"use strict";function r(t){var e=c.shape.line,n=s.mix(!0,{},e,{stroke:t.color,lineWidth:t.size,strokeOpacity:t.opacity,opacity:t.opacity},t.style);return n}function i(t,e){var n=[];n.push({x:t.x,y:.5*t.y+1*e.y/2}),n.push({y:.5*t.y+1*e.y/2,x:e.x}),n.push(e);var r=[["M",t.x,t.y]],i=["C"];return s.each(n,function(t){i.push(t.x,t.y)}),r.push(i),r}function a(t,e){var n=[];n.push({y:t.y*(1-h)+e.y*h,x:t.x}),n.push({y:t.y*(1-h)+e.y*h,x:e.x}),n.push(e);var r=[["M",t.x,t.y]];return s.each(n,function(t){r.push(["L",t.x,t.y])}),r}var s=n(1),o=n(15),u=n(59),c=n(5),l=n(20),h=1/3,f=o.registGeom("edge",{defaultShapeType:"line",getShapePoints:function(t,e){return u.splitPoints(e)},getActiveCfg:function(){return{strokeOpacity:.7}}});o.registShape("edge","line",{drawShape:function(t,e){var n=this.parsePoints(t.points),i=r(t),a=l.getLinePath(n),o=e.addShape("path",{attrs:s.mix(i,{path:a})});return o}}),o.registShape("edge","vhv",{drawShape:function(t,e){var n=t.points,i=r(t),o=a(n[0],n[1]);o=this.parsePath(o);var u=e.addShape("path",{attrs:s.mix(i,{path:o})});return u}}),o.registShape("edge","smooth",{drawShape:function(t,e){var n=t.points,a=r(t),o=i(n[0],n[1]);o=this.parsePath(o);var u=e.addShape("path",{attrs:s.mix(a,{path:o})});return u}}),t.exports=f},function(t,e,n){"use strict";function r(t,e){var n=t.x,r=t.y,i=t.y0,a=t.size,s=i,o=r;p.isArray(r)&&(o=r[1],s=r[0]);var u,c;p.isArray(n)?(u=n[0],c=n[1]):(u=n-a/2,c=n+a/2);var l=[];return l.push({x:u,y:s},{x:u,y:o}),e?l.push({x:c,y:(o+s)/2}):l.push({x:c,y:o},{x:c,y:s}),l}function i(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];if(r){var i=0===n?"M":"L";e.push([i,r.x,r.y])}}var a=t[0];return e.push(["L",a.x,a.y]),e.push(["z"]),e}function a(t){var e=t.x,n=t.y,r=t.y0,i=[];return p.isArray(n)?p.each(n,function(t,n){i.push({x:p.isArray(e)?e[n]:e,y:t})}):i.push({x:e,y:n},{x:e,y:r}),i}function s(t){var e=t.x,n=p.isArray(t.y)?t.y[1]:t.y,r=p.isArray(t.y)?t.y[0]:t.y0,i=t.size,a=[];return a.push({x:e-i/2,y:n},{x:e+i/2,y:n},{x:e,y:n},{x:e,y:r},{x:e-i/2,y:r},{x:e+i/2,y:r}),a}function o(t){var e=[];return e.push(["M",t[0].x,t[0].y],["L",t[1].x,t[1].y],["M",t[2].x,t[2].y],["L",t[3].x,t[3].y],["M",t[4].x,t[4].y],["L",t[5].x,t[5].y]),e}function u(t){var e=x.shape.interval,n=p.mix(!0,{},e,{fill:t.color,stroke:t.color,fillOpacity:t.opacity},t.style);return n}function c(t){var e=x.shape.hollowInterval,n=p.mix(!0,{},e,{stroke:t.color,strokeOpacity:t.opacity},t.style);return n}function l(t,e){var n=[],r=t.points,i=t.nextPoints;return p.isNull(i)?e?n.push(["M",r[0].x,r[0].y],["L",r[1].x,r[1].y],["L",r[2].x,r[2].y],["L",r[3].x,r[3].y],["Z"]):n.push(["M",r[0].x,r[0].y],["L",r[1].x,r[1].y],["L",r[2].x,r[2].y],["Z"]):n.push(["M",r[0].x,r[0].y],["L",r[1].x,r[1].y],["L",i[1].x,i[1].y],["L",i[0].x,i[0].y],["Z"]),n}function h(t){return t&&"rect"!==t?x.activeShape.hollowInterval:x.activeShape.interval}function f(t,e){var n,r,i,a,s=e.getRadius(),o=e.get("inner"),u=s*o;return!p.isArray(t.x)&&p.isArray(t.y)&&(t.x=[t.x,t.x]),p.isArray(t.x)?(i={x:t.x[0],y:t.y[0]},a={x:t.x[1],y:t.y[1]},n=d.getPointAngle(e,i),r=d.getPointAngle(e,a),r<=n&&(r+=2*Math.PI)):(a=t,n=e.get("startAngle"),r=d.getPointAngle(e,a)),{r:s,ir:u,startAngle:n,endAngle:r}}function g(t,e){var n=e.coord,r=e.point,i=7.5;if(n&&"theta"===n.type){var a=f(r,n),s=(a.endAngle-a.startAngle)/2+a.startAngle,o=i*Math.cos(s),u=i*Math.sin(s);e={transform:[["t",o,u]]}}return e}var p=n(1),v=n(15),d=n(20),x=n(5),m=v.registGeom("interval",{defaultShapeType:"rect",getActiveCfg:function(t){return h(t)},getSelectedCfg:function(t,e){return g(t,e)}});v.registShape("interval","rect",{getShapePoints:function(t){return r(t)},drawShape:function(t,e){var n=u(t),r=i(t.points);return r=this.parsePath(r),e.addShape("path",{attrs:p.mix(n,{path:r})})},getMarkerCfg:function(t){var e=u(t),n=t.isInCircle,r=n?"circle":"square";return p.mix({symbol:r},e)}}),v.registShape("interval","hollowRect",{getShapePoints:function(t){return r(t)},drawShape:function(t,e){var n=c(t),r=i(t.points);return r=this.parsePath(r),e.addShape("path",{attrs:p.mix(n,{path:r})})},getMarkerCfg:function(t){var e=c(t),n=t.isInCircle,r=n?"circle":"square";return p.mix({symbol:r},e)}}),v.registShape("interval","line",{getShapePoints:function(t){return a(t)},drawShape:function(t,e){var n=c(t);n.lineWidth=t.size||1;var r=i(t.points);return r=this.parsePath(r),e.addShape("path",{attrs:p.mix(n,{path:r})})},getMarkerCfg:function(t){var e=c(t);return p.mix({symbol:"line"},e)}}),v.registShape("interval","tick",{getShapePoints:function(t){return s(t)},drawShape:function(t,e){var n=c(t),r=o(t.points);return r=this.parsePath(r),e.addShape("path",{attrs:p.mix(n,{path:r})})},getMarkerCfg:function(t){var e=c(t);return p.mix({symbol:"tick"},e)}}),v.registShape("interval","funnel",{getShapePoints:function(t){return t.size=2*t.size,r(t)},drawShape:function(t,e){var n=u(t),r=l(t,!0);return r=this.parsePath(r),e.addShape("path",{attrs:p.mix(n,{path:r})})},getMarkerCfg:function(t){var e=u(t);return p.mix({symbol:"square"},e)}}),v.registShape("interval","pyramid",{getShapePoints:function(t){return t.size=2*t.size,r(t,!0)},drawShape:function(t,e){var n=u(t),r=l(t,!1);return r=this.parsePath(r),e.addShape("path",{attrs:p.mix(n,{path:r})})},getMarkerCfg:function(t){var e=u(t);return p.mix({symbol:"square"},e)}}),t.exports=m},function(t,e,n){"use strict";function r(t){var e=d.shape.line,n=f.mix(!0,{},e,{stroke:t.color,lineWidth:t.size,strokeOpacity:t.opacity,opacity:t.opacity},t.style);return n}function i(t,e){var n="",r=t.points,i=t.isInCircle;return n+=e?g.getSplinePath(r,i):g.getLinePath(r,i),f.path2Absolute(n)}function a(t,e){var n=[];return f.each(t,function(r,i){var a=t[i+1];n.push(r),a&&(n=n.concat(e(r,a)))}),n}function s(t){var e="";return f.each(t,function(t,n){var r=0===n?"M {x} {y}":"L {x} {y}";e+=f.substitute(r,t)}),e}function o(t,e){var n=a(t.points,e);return s(n)}function u(t,e,n){return[["M",t-n,e],["L",t+n,e]]}function c(t,e,n){return f.path2Absolute([["M",t-n,e],["R",t-n/2,e-n/2,t,e,t+n/2,e+n/2,t+n,e]])}function l(t,e){return f.mix({symbol:e?c:u},r(t))}function h(t,e){return f.mix({symbol:e},r(t))}var f=n(1),g=n(20),p=n(59),v=n(15),d=n(5),x=[2,1],m=[10,5],y=v.registGeom("line",{defaultShapeType:"line",getMarkerCfg:function(t,e){var n=y[t]||y.line;return n.getMarkerCfg(e)},getActiveCfg:function(){return d.activeShape.line}});v.registShape("line","line",{getShapePoints:function(t){return p.splitPoints(t)},drawShape:function(t,e){var n=r(t),a=i(t,!1);return a=this.parsePath(a,!1),e.addShape("path",{attrs:f.mix(n,{path:a})})},getMarkerCfg:function(t){return l(t)}}),v.registShape("line","dot",{drawShape:function(t,e){var n=r(t),a=i(t,!1);return a=this.parsePath(a,!1),e.addShape("path",{attrs:f.mix(n,{path:a,lineDash:x})})},getMarkerCfg:function(t){var e=l(t,!1);return e.lineDash=x,e}}),v.registShape("line","fill",{drawShape:function(t,e){var n=r(t),a=i(t,!1);return a=this.parsePath(a,!1),a.push(["z"]),e.addShape("path",{attrs:f.mix(n,{path:a,fill:n.stroke})})},getMarkerCfg:function(t){var e=l(t,!1);return e.fill=e.stroke,e}}),v.registShape("line","dash",{drawShape:function(t,e){var n=r(t),a=i(t,!1);return a=this.parsePath(a,!1),e.addShape("path",{attrs:f.mix(n,{path:a,lineDash:m})})},getMarkerCfg:function(t){var e=l(t,!1);return e.lineDash=m,e}}),v.registShape("line","smooth",{drawShape:function(t,e){var n=r(t),a=i(t,!0);return a=this.parsePath(a,!1),e.addShape("path",{attrs:f.mix(n,{path:a})})},getMarkerCfg:function(t){return l(t,!0)}}),v.registShape("line","dotSmooth",{drawShape:function(t,e){var n=r(t),a=i(t,!0);return a=this.parsePath(a,!1),e.addShape("path",{attrs:f.mix(n,{path:a,lineDash:x})})},getMarkerCfg:function(t){var e=l(t,!0);return e.lineDash=x,e}}),v.registShape("line","hv",{drawShape:function(t,e){var n=r(t),i=o(t,function(t,e){var n=[];return n.push({x:e.x,y:t.y}),n});return i=this.parsePath(i,!1),e.addShape("path",{attrs:f.mix(n,{path:i})})},getMarkerCfg:function(t){return h(t,function(t,e,n){return[["M",t-n,e-n],["L",t,e-n],["L",t,e],["L",t+n,e]]})}}),v.registShape("line","vh",{drawShape:function(t,e){var n=r(t),i=o(t,function(t,e){var n=[];return n.push({x:t.x,y:e.y}),n});return i=this.parsePath(i,!1),e.addShape("path",{attrs:f.mix(n,{path:i})})},getMarkerCfg:function(t){return h(t,function(t,e,n){return[["M",t-n,e],["L",t,e],["L",t,e-n],["L",t+n,e-n]]})}}),v.registShape("line","hvh",{drawShape:function(t,e){var n=r(t),i=o(t,function(t,e){var n=[],r=(e.x-t.x)/2+t.x;return n.push({x:r,y:t.y}),n.push({x:r,y:e.y}),n});return i=this.parsePath(i,!1),e.addShape("path",{attrs:f.mix(n,{path:i})})},getMarkerCfg:function(t){return h(t,function(t,e,n){return[["M",t-3*n/2,e],["L",t-n/2,e],["L",t-n/2,e-n/2],["L",t+n/2,e-n/2],["L",t+n/2,e],["L",t+3*n/2,e]]})}}),v.registShape("line","vhv",{drawShape:function(t,e){var n=r(t),i=o(t,function(t,e){var n=[],r=(e.y-t.y)/2+t.y;return n.push({x:t.x,y:r}),n.push({x:e.x,y:r}),n});return i=this.parsePath(i,!1),e.addShape("path",{attrs:f.mix(n,{path:i})})},getMarkerCfg:function(t){return h(t,function(t,e,n){return[["M",t-n,e],["L",t-n,e-n/2],["L",t,e-n/2],["L",t,e-n],["L",t,e+n/2],["L",t+n,e+n/2]]})}}),y.spline=y.smooth,t.exports=y},function(t,e,n){"use strict";function r(t){var e=c.shape.point,n=s.mix(!0,{},e,{fill:t.color,fillOpacity:t.opacity,radius:t.size},t.style);return n}function i(t){var e=c.shape.hollowPoint,n=s.mix(!0,{},e,{stroke:t.color,strokeOpacity:t.opacity,radius:t.size},t.style);return n}function a(t){return!t||0!==t.indexOf("hollow")&&s.indexOf(f,t)===-1?c.activeShape.point:c.activeShape.hollowPoint}var s=n(1),o=n(59),u=n(11),c=n(5),l=n(15),h=["circle","square","bowtie","diamond","hexagon","triangle","triangle-down"],f=["cross","tick","plus","hyphen","line","pointerLine","pointerArrow"],g=Math.sqrt(3);s.mix(u.Shape.Marker.Symbols,{hexagon:function(t,e,n){var r=n/2*g;return[["M",t,e-n],["L",t+r,e-n/2],["L",t+r,e+n/2],["L",t,e+n],["L",t-r,e+n/2],["L",t-r,e-n/2],["z"]]},bowtie:function(t,e,n){return[["M",t-n,e-n],["L",t+n,e+n],["L",t+n,e-n],["L",t-n,e+n],["z"]]},cross:function(t,e,n){return[["M",t-n,e-n],["L",t+n,e+n],["M",t+n,e-n],["L",t-n,e+n]]},tick:function(t,e,n){return[["M",t-n/2,e-n],["L",t+n/2,e-n],["M",t,e-n],["L",t,e+n],["M",t-n/2,e+n],["L",t+n/2,e+n]]},plus:function(t,e,n){return[["M",t-n,e],["L",t+n,e],["M",t,e-n],["L",t,e+n]]},hyphen:function(t,e,n){return[["M",t-n,e],["L",t+n,e]]},line:function(t,e,n){return[["M",t,e-n],["L",t,e+n]]}});var p=l.registGeom("point",{defaultShapeType:"hollowCircle",getActiveCfg:function(t,e){var n=a(t);return e&&e.size&&delete n.radius,n},getShapePoints:function(t,e){return o.splitPoints(e)}});s.each(h,function(t){l.registShape("point",t,{drawShape:function(e,n){e.points=this.parsePoints(e.points);var i=r(e);return n.addShape("Marker",{attrs:s.mix(i,{x:e.points[0].x,y:e.points[0].y,symbol:t})})},getMarkerCfg:function(e){var n=r(e);return n.symbol=t,n}}),l.registShape("point","hollow"+s.ucfirst(t),{drawShape:function(e,n){e.points=this.parsePoints(e.points);var r=i(e);return n.addShape("Marker",{attrs:s.mix(r,{x:e.points[0].x,y:e.points[0].y,symbol:t})})},getMarkerCfg:function(e){var n=i(e);return n.symbol=t,n}})}),s.each(f,function(t){l.registShape("point",t,{drawShape:function(e,n){e.points=this.parsePoints(e.points);var r=i(e);return n.addShape("Marker",{attrs:s.mix(r,{x:e.points[0].x,y:e.points[0].y,symbol:t})})},getMarkerCfg:function(e){var n=i(e);return n.symbol=t,n}})}),t.exports=p},function(t,e,n){"use strict";function r(){return u.activeShape.polygon}function i(t){var e=u.shape.polygon,n=s.mix(!0,{},e,{stroke:t.color,fill:t.color,fillOpacity:t.opacity},t.style);return n}function a(t){var e="",n=[t[0].x,t[0].y],r=0,i=t[0];return s.each(t,function(a,o){var u=0===o?"M {x} {y} ":"L {x} {y} ";if(e+=s.substitute(u,a),r!==o&&o<t.length-1&&s.equalsArray(n,[a.x,a.y])){var c=t[o+1];e+="z"+s.substitute("M {x} {y}",c),i=c,r=o+1,n=[c.x,c.y]}}),e+=s.substitute("L {x} {y}",i),e+="z",s.path2Absolute(e)}var s=n(1),o=n(15),u=n(5),c=o.registGeom("polygon",{defaultShapeType:"polygon",getMarkerCfg:function(){return{symbol:"rect"}},getActiveCfg:function(t){return r(t)}});o.registShape("polygon","polygon",{getShapePoints:function(t){var e=[];return s.each(t.x,function(n,r){var i=t.y[r];e.push({x:n,y:i})}),e},drawShape:function(t,e){var n=i(t),r=a(t.points);return r=this.parsePath(r),e.addShape("path",{attrs:s.mix(n,{path:r})})}}),o.registShape("polygon","hollow",{drawShape:function(t,e){var n=i(t),r=a(t.points);return r=this.parsePath(r),e.addShape("path",{attrs:s.mix(n,{path:r})})}}),t.exports=c},function(t,e,n){"use strict";function r(t){f.isArray(t)||(t=[t]);var e=t[0],n=t[t.length-1],r=t.length>1?t[1]:e,i=t.length>3?t[3]:n,a=t.length>2?t[2]:r;return{min:e,max:n,min1:r,max1:i,median:a}}function i(t,e){f.each(t,function(t){e.push({x:t[0],y:t[1]})})}function a(t){var e=p.shape.line,n=f.mix(!0,{},e,{stroke:t.color,fill:"#fff",fillOpacity:0,strokeOpacity:t.opacity});return n}function s(t,e,n){var a,s,o=[];return f.isArray(e)?(s=r(e),a=[[t-n/2,s.max],[t+n/2,s.max],[t,s.max],[t,s.max1],[t-n/2,s.min1],[t-n/2,s.max1],[t+n/2,s.max1],[t+n/2,s.min1],[t,s.min1],[t,s.min],[t-n/2,s.min],[t+n/2,s.min],[t-n/2,s.median],[t+n/2,s.median]]):(e=e||.5,s=r(t),a=[[s.min,e-n/2],[s.min,e+n/2],[s.min,e],[s.min1,e],[s.min1,e-n/2],[s.min1,e+n/2],[s.max1,e+n/2],[s.max1,e-n/2],[s.max1,e],[s.max,e],[s.max,e-n/2],[s.max,e+n/2],[s.median,e-n/2],[s.median,e+n/2]]),i(a,o),o}function o(t){f.isArray(t)||(t=[t]);var e=t.sort(function(t,e){return t<e?1:-1}),n=e.length;if(n<4)for(var r=e[n-1],i=0;i<4-n;i++)e.push(r);return e}function u(t,e,n){var r=o(e),i=[{x:t,y:r[0]},{x:t,y:r[1]},{x:t-n/2,y:r[2]},{x:t-n/2,y:r[1]},{x:t+n/2,y:r[1]},{x:t+n/2,y:r[2]},{x:t,y:r[2]},{x:t,y:r[3]}];return i}function c(t){var e=[["M",t[0].x,t[0].y],["L",t[1].x,t[1].y],["M",t[2].x,t[2].y],["L",t[3].x,t[3].y],["M",t[4].x,t[4].y],["L",t[5].x,t[5].y],["L",t[6].x,t[6].y],["L",t[7].x,t[7].y],["L",t[4].x,t[4].y],["Z"],["M",t[8].x,t[8].y],["L",t[9].x,t[9].y],["M",t[10].x,t[10].y],["L",t[11].x,t[11].y],["M",t[12].x,t[12].y],["L",t[13].x,t[13].y]];return e}function l(t){var e=[["M",t[0].x,t[0].y],["L",t[1].x,t[1].y],["M",t[2].x,t[2].y],["L",t[3].x,t[3].y],["L",t[4].x,t[4].y],["L",t[5].x,t[5].y],["Z"],["M",t[6].x,t[6].y],["L",t[7].x,t[7].y]];return e}function h(t,e){return f.mix({symbol:e},a(t))}var f=n(1),g=n(15),p=n(5),v=g.registGeom("schema",{defaultShapeType:"",getActiveCfg:function(){return p.activeShape.line}});g.registShape("schema","box",{getShapePoints:function(t){return s(t.x,t.y,t.size)},drawShape:function(t,e){var n=a(t),r=c(t.points);return r=this.parsePath(r),e.addShape("path",{attrs:f.mix(n,{path:r})})},getMarkerCfg:function(t){return h(t,function(t,e,n){var r=[e-n,e-n/2,e,e+n/2,e+n],i=s(t,r,2*n);return c(i)})}}),g.registShape("schema","candle",{getShapePoints:function(t){return u(t.x,t.y,t.size)},drawShape:function(t,e){var n=a(t),r=l(t.points);return r=this.parsePath(r),e.addShape("path",{attrs:f.mix(n,{path:r,fill:t.color,fillOpacity:t.opacity,lineWidth:1})})},getMarkerCfg:function(t){var e=h(t,function(t,e,n){e=[e+1.5*n,e+n/2,e-n/2,e-1.5*n];var r=u(t,e,n);return l(r)});return e.fill=t.color,e.fillOpacity=t.opacity,e}}),t.exports=v},function(t,e,n){"use strict";var r=n(1),i=n(46),a="#62a4e8",s=r.mix(!0,{},i,{defaultColor:a,colors:{"default":["#61A5E8","#7ECF51","#EECB5F","#E4925D","#E16757","#9570E5","#605FF0"],intervalStack:["#61A5E8","#7ECF51","#EECB5F","#E4925D","#E16757","#9570E5","#605FF0","#605ff0","#85ca36","#1c9925","#0d8b5f","#0f9cd3","#2f7e9b","#2f677d","#9b7fed","#7453d6","#3b1d98","#27abb1","#017377","#015f63","#b86868","#5669b7","#e5aab4","#60b65f","#98d2b2","#c9c8bc","#45c3dc","#e17979","#5baa5a","#eaccc2","#ffaa74"]},shape:{point:{fill:a},hollowPoint:{stroke:a},interval:{fill:a},hollowInterval:{stroke:a},area:{fill:a},polygon:{fill:a},hollowPolygon:{stroke:a},hollowArea:{stroke:a},line:{stroke:a}},guide:{line:{stroke:a},rect:{fill:a},tag:{line:{stroke:a},rect:{fill:a}}},tooltipMarker:{stroke:a}});t.exports=s},function(t,e,n){"use strict";var r=n(1),i=n(46),a=r.mix(!0,{},i,{plotCfg:{margin:[20,80,60,80],border:{fill:"#18242E"}},axis:{top:{labels:{label:{fill:"#D5D4D4"}},tickLine:{stroke:"#46525F"}},bottom:{labels:{label:{fill:"#999"}},line:{stroke:"#46525F"},tickLine:{stroke:"#46525F"}},left:{labels:{label:{fill:"#999"}},line:{stroke:"#46525F"},tickLine:{stroke:"#46525F"},grid:{line:{stroke:"#46525F"}}},right:{labels:{label:{fill:"#999"}},line:{stroke:"#46525F"},tickLine:{stroke:"#46525F"}},circle:{line:{stroke:"#46525F"},grid:{line:{stroke:"#46525F"}},labels:{label:{fill:"#999"}}},gauge:{tickLine:{stroke:"#46525F"},labels:{label:{fill:"#999"}}},clock:{tickLine:{stroke:"#46525F"},subTick:5,labels:{label:{fill:"#999"}}},radius:{labels:{label:{fill:"#999"}},line:{stroke:"#46525F"},grid:{line:{stroke:"#46525F"}}}},legend:{right:{word:{fill:"#999"},title:{fill:"#999"}},left:{word:{fill:"#999"},title:{fill:"#999"}},top:{word:{fill:"#999"}},bottom:{word:{fill:"#999"}}},guide:{text:{fill:"#999"},tag:{text:{fill:"#999"}}}});t.exports=a},function(t,e,n){"use strict";var r={"default":n(46),dark:n(324),cheery:n(323)};t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.get("el");e.style.position="absolute",e.style.top=0,e.style.left=0}function i(t,e){var n=new c(t);return e&&r(n),n.set("fontFamily",f.fontFamily),n}function a(t){var e=t.id,n=document.getElementById(e),r=t.container;if(!n&&!r)throw new Error("please specify the canvas container Id !");if(n&&r)throw new Error('please specify the "container" or "id" property !');if(!r){var i=u.guid("g-chart");r=u.createDom("<div></div>"),r.id=i,n.appendChild(r)}return r}function s(t){var e=t.container,n=u.getWidth(e);return t.width=n,t}function o(t){var e=t.width,n=t.height,r=t.container,a={width:e,height:n,containerDOM:r,capture:!1},s=i(a,!1),o=i(a,!0),u=i(a,!0);return t.backCanvas=s,t.canvas=o,t.frontCanvas=u,t}var u=n(1),c=n(11),l=c.Components,h=l.Plot,f=n(5),g={initContainer:function(t){var e=u.mix({},f.plotCfg,t.plotCfg),n=a(t);t.plotCfg=e,t.container=n,t.forceFit&&(t=s(t)),t=o(t);var r=t.backCanvas,i=r.addGroup(h.Back,e);return t.backPlotBg=i,t.plotRange=i.get("plotRange"),t}};t.exports=g},function(t,e,n){"use strict";function r(t){var e=["polar","plus","theta"];return o.inArray(e,t.type)}function i(t){var e=t.coordCfg;return!(e&&!o.isNull(e.startAngle)&&!o.isNull(e.endAngle)&&e.endAngle-e.startAngle<2*Math.PI)}function a(t,e){var n=!!t[e];return n||o.each(t,function(t,r){var i=r.split("*");if(i.indexOf(e)!==-1)return n=!0,!1}),n}function s(t,e){return function(n){var r=this,i=[];e&&(i=i.concat(e)),n&&(i=i.concat(n));var a=new g({chart:r,type:t,adjusts:i});return r._addLayer(a),a}}var o=n(1),u=n(27),c=n(2),l=n(5),h=n(93),f=n(96),g=n(301),p=function x(t){x.superclass.constructor.call(this,t),this._init()};p.ATTRS={start:null,end:null,tooltipEnable:!0,index:0,data:null,layers:[],geoms:[],filters:{},scales:{}},o.extend(p,u),o.augment(p,{_init:function(){var t=this.get("data");this._initData(t),h.initScale(this),h.initCoord(this),h.initAxis(this),h.initGuide(this),this.get("start")||this.set("start",{x:0,y:0}),this.get("end")||this.set("end",{x:1,y:1}),this.set("geoms",[]),this.set("layers",[]),this.set("scales",{}),this.set("axisCfg",{}),this.set("filters",{})},_initData:function(t){t&&(t instanceof c||(t=new c(t)),this.set("data",t))},_addLayer:function(t){this.get("layers").push(t)},_trainScales:function(t,e){var n=this.get("scales"),r=[];o.each(n,function(t){e(t)&&r.push(t)});var i=this.get("scaleAssist");i.trainScales(t,r)},_trainLinearScales:function(t){this._trainScales(t,function(t){return t.isLinear})},_trainCatScales:function(t){var e=this,n=e.get("filters");e._trainScales(t,function(t){return t.isCategory&&!a(n,t.dim)})},_processScales:function(){var t=this,e=t.get("coordAssist"),n=t.getXScale(),a=t.getYScales(),s=[];n&&s.push(n),s=s.concat(a);var u=r(e)&&i(e);o.each(s,function(t){if(t.isCategory){var n,r=t.values.length;if(1===r)n=[.5,1];else{var i=1,a=0;u?e.hasAction("transpose")?(i=l.widthRatio.multiplePie,a=1/r*i,n=[a/2,1-a/2]):n=[0,1-1/r]:(i=l.widthRatio.column,a=1/r*i,n=[a,1-a])}t.range=n}})},_createCoord:function(){var t=this.get("coordAssist"),e=this.get("region"),n=e.start,r=e.end,i=t.createCoord(n,r);if(this.get("facet")){var a=this.get("facet");"mirror"===a.type&&(1===a.rows?(i.transpose(),0===a.colIndex&&i.scale(-1,1)):1===a.rowIndex&&i.scale(1,-1))}return this.set("coord",i),i},_createGeoms:function(){var t=this.get("layers"),e=this.get("coord"),n=[];return o.each(t,function(t){var r=t.createGeom();r.set("coord",e),n.push(r)}),this.set("geoms",n),n},_renderAxis:function(){var t=this.get("axisAssist");t.container=this.get("backPlot");var e=this.getXScale(),n=this.getYScales();t.createAxis(this,e,n)},_renderGuide:function(){var t=this.get("guideAssist");if(t.guides.length){if(!this.get("frontPlot")){var e=this.get("frontCanvas"),n=e.addGroup();this.set("frontPlot",n)}t.backPlot=this.get("backPlot"),t.frontPlot=this.get("frontPlot");var r=this.get("coord"),i=this.getXScale(),a=this.getYScales()[0];t.setScale(i,a),t.paint(r)}},_initPlot:function(){if(!this.get("plotContainer")){var t=this.get("canvas"),e=t.addGroup();this.set("plotContainer",e)}if(!this.get("backPlot")){var n=this.get("backCanvas"),r=n.addGroup();this.set("backPlot",r)}},_clearInner:function(){var t=this.get("geoms");return t.length&&o.each(t,function(t){t.destroy()}),this.set("geoms",[]),this.get("plotContainer")&&this.get("plotContainer").clear(),this.get("backPlot")&&this.get("backPlot").clear(),this.get("frontPlot")&&this.get("frontPlot").clear(),this},_filterData:function(t){var e=this.get("scaleAssist"),n=this.get("scales"),r=this.get("filters");return e.filterData(t,r,n)},source:function(t,e){if(e){var n=this.get("scaleAssist");n.defs=e}return this._initData(t),this},coord:function(t,e){var n=this.get("coordAssist");return n.type=t,n.coordCfg=e,n.resetActions(),n},axis:function(t,e){var n=this.get("axisAssist");if(t===!1)n.enable=!1;else{var r=n.axisCfg;n.enable=!0,r[t]=e}return this},guide:function(){return this.get("guideAssist")},filter:function(t,e){var n=this.get("filters");return n[t]=e,this.set("filters",n),this},col:function(t,e){var n=this.get("scaleAssist"),r=n.defs;return r[t]=e,this},render:function(){var t=this;t._initPlot();var e=t.get("scaleAssist"),n=t.get("data"),r=t.get("scales");n=e.processCatScale(n,r),n=t._filterData(n);var i=this._createCoord(),a=this._createGeoms(),s=[];o.each(a,function(t){var e=t.processData(n);t.set("frames",e),s=s.concat(e)});var u=c.forceMerge.apply(null,s);t._trainCatScales(u),t._processScales(),s=[],o.each(a,function(t){var e=t.get("frames");e=t.numbericFrames(e),e=t.processAdjust(e),t.set("frames",e),s=s.concat(e)});var l=c.forceMerge.apply(null,s);t._trainLinearScales(l),t.fire("beforepaint",{chart:t}),o.each(a,function(t){t.paint(i,t.get("frames"),function(e,n){if(t.isShareTooltip()){var r=[],i=t.getXScale().dim;o.each(n,function(t){r.push(c.sort(t,i))}),t.set("frames",r)}})}),t._renderGuide();var h=t.getXScale();h&&t._renderAxis(),t.fire("afterpaint"),t.get("plotContainer").sort();var f=t.get("parent");f&&!f.get("painting")&&(t.get("backCanvas").draw(),t.get("canvas").draw())},tooltip:function(t){this.set("tooltipEnable",t)},changeData:function(t){var e=this.get("scales"),n=this.get("scaleAssist");return this._initData(t),t=this.get("data"),n.resetScales(t,e),this.repaint(),this},clear:function(){return this.get("guideAssist").clear(),this.set("layers",[]),this.set("scales",{}),this.set("filters",{}),this._clearInner(),this.get("backCanvas").draw(),this.get("canvas").draw(),this.get("frontCanvas").draw(),this},repaint:function(){return this._clearInner(),this.render(),this},getActiveShape:function(){var t=this,e=t.get("geoms"),n=null;return o.each(e,function(t){var e=t.get("activeShapes");if(e&&e.length)return n=e[0],!1}),n},getSnapRecords:function(t){var e=this,n=e.get("geoms"),r=[];return o.each(n,function(e){var n,i=e.get("frames");if("point"===e.get("type")){var a=c.merge.apply(null,i);n=e.findPoint(t,a),n&&r.push(n)}else o.each(i,function(i){n=e.findPoint(t,i),n&&r.push(n)})}),r},getPosition:function(t){var e,n,r,i=this,a=i.get("coord"),s=i.getXScale();s&&(r=s.dim,e=s.scale(t[r]));var u=this.get("scales");return o.each(u,function(e){if(e&&e.dim!==r&&t[e.dim]){var i=e.dim;return void(n=e.scale(t[i]))}}),a.convert({x:e,y:n})},getXScale:function(){var t=this.get("geoms"),e=null;return t.length&&(e=t[0].getXScale()),e},getYScales:function(){var t=this.get("geoms"),e=[];return o.each(t,function(t){var n=t.getYScale();n&&o.indexOf(e,n)===-1&&e.push(n)}),e},getGeoms:function(){return this.get("geoms")},getScale:function(t){var e=this.get("scales");return e[t]},createScale:function(t,e){e=e||this.get("data");var n=this.get("scaleAssist"),r=this.get("scales");return r[t]||(r[t]=n.createScale(t,e)),r[t]}});for(var v in f)f.hasOwnProperty(v)&&(v=v.toLowerCase(),p.prototype[v]=s(v));var d=["pointStack","pointJitter","pointDodge","intervalStack","intervalDodge","intervalSymmetric","areaStack","schemaDodge"];o.each(d,function(t){var e=t.replace(/([a-z](?=[A-Z]))/g,"$1 "),n=e.split(" "),r=n[0],i=o.ucfirst(n[1]);"pointDodge"===t&&(i=["Dodge","Stack"]),p.prototype[t]=s(r,i)}),t.exports=p},[332,329,99],function(t,e,n){"use strict";function r(t,e,n,r){var i=t[r]+(e[r]-t[r])*n;return i}var i=n(99),a=n(1);t.exports={calColor:function(t,e,n){var a,s=t.length-1,o=Math.floor(s*e),u=s*e-o,c=t[o],l=o===s?c:t[o+1];return"hsl"===n?a=i.hsl2Rgb([r(c,l,u,0),r(c,l,u,1),r(c,l,u,2)]):(a={r:r(c,l,u,0),g:r(c,l,u,1),b:r(c,l,u,2)},a="#"+i.toHex(a.r)+i.toHex(a.g)+i.toHex(a.b)),a},lightness:function(t,e){e=e||0;var n=[[e,1,.9],[e,1,.5]];return this.calColor(n,t,"hsl")},red:function(t){return this.lightness(t,0)},blue:function(t){return this.lightness(t,.66)},green:function(t){return this.lightness(t,.33)},gradient:function(t){var e=this,n=[];return a.isString(t)&&(t=t.split("-")),a.each(t,function(t){t.indexOf("#")===-1&&(t=i.toRGB(t)),n.push(i.rgb2arr(t))}),function(t){return e.calColor(n,t)}},gradientHsl:function(t){var e=this,n=[];return a.isString(t)&&(t=t.split("-")),a.each(t,function(t){t.indexOf("#")===-1&&(t=i.toRGB(t)),n.push(i.rgb2hsl(t))}),function(t){return e.calColor(n,t,"hsl")}},saturation:function(t,e){e=e||0;var n=[[e,0,.5],[e,1,.5]];return this.calColor(n,t,"hsl")},hue:function(t){var e=[[0,1,.5],[1,1,.5]];return this.calColor(e,t,"hsl")},brightness:function(t){var e=[[255,255,255],[0,0,0]];return this.calColor(e,t)},heat:function(t){var e=[[255,255,255],[255,127.5,0],[0,0,0]];return this.calColor(e,t)},rainbow:function(t){var e=[[0,255,255],[0,0,255],[0,255,0],[255,0,0]];return this.calColor(e,t)},circular:function(t){var e=[[0,0,255],[0,255,0],[255,255,0],[255,0,0],[0,0,255]];return this.calColor(e,t)},bipolar:function(t){var e=[[0,255,0],[0,0,0],[255,0,0]];return this.calColor(e,t)}}},function(t,e){/**
		* @license
		*
		* Regression.JS - Regression functions for javascript
		* http://tom-alexander.github.com/regression-js/
		*
		* copyright(c) 2013 Tom Alexander
		* Licensed under the MIT license.
		*
		**/
	"use strict";var n=function(t,e){var n=0,r=0,i=0,a=0,s=0,o=t.length-1,u=new Array(e);for(n=0;n<o;n++){for(a=n,r=n+1;r<o;r++)Math.abs(t[n][r])>Math.abs(t[n][a])&&(a=r);for(i=n;i<o+1;i++)s=t[i][n],t[i][n]=t[i][a],t[i][a]=s;for(r=n+1;r<o;r++)for(i=o;i>=n;i--)t[i][r]-=t[i][n]*t[n][r]/t[n][n]}for(r=o-1;r>=0;r--){for(s=0,i=r+1;i<o;i++)s+=t[i][r]*u[i];u[r]=(t[o][r]-s)/t[r][r]}return u},r={linear:function(t){for(var e=[0,0,0,0,0],n=0,r=[];n<t.length;n++)null!=t[n][1]&&(e[0]+=t[n][0],e[1]+=t[n][1],e[2]+=t[n][0]*t[n][0],e[3]+=t[n][0]*t[n][1],e[4]+=t[n][1]*t[n][1]);for(var i=(n*e[3]-e[0]*e[1])/(n*e[2]-e[0]*e[0]),a=e[1]/n-i*e[0]/n,s=0,o=t.length;s<o;s++){var u=[t[s][0],t[s][0]*i+a];r.push(u)}var c="y = "+Math.round(100*i)/100+"x + "+Math.round(100*a)/100;return{equation:[i,a],points:r,string:c}},linearThroughOrigin:function(t){for(var e=[0,0],n=0,r=[];n<t.length;n++)null!=t[n][1]&&(e[0]+=t[n][0]*t[n][0],e[1]+=t[n][0]*t[n][1]);for(var i=e[1]/e[0],a=0,s=t.length;a<s;a++){var o=[t[a][0],t[a][0]*i];r.push(o)}var u="y = "+Math.round(100*i)/100+"x";return{equation:[i],points:r,string:u}},exponential:function(t){var e=[0,0,0,0,0,0],n=0,r=[];for(u=t.length;n<u;n++)null!=t[n][1]&&(e[0]+=t[n][0],e[1]+=t[n][1],e[2]+=t[n][0]*t[n][0]*t[n][1],e[3]+=t[n][1]*Math.log(t[n][1]),e[4]+=t[n][0]*t[n][1]*Math.log(t[n][1]),e[5]+=t[n][0]*t[n][1]);for(var i=e[1]*e[2]-e[5]*e[5],a=Math.pow(Math.E,(e[2]*e[3]-e[5]*e[4])/i),s=(e[1]*e[4]-e[5]*e[3])/i,o=0,u=t.length;o<u;o++){var c=[t[o][0],a*Math.pow(Math.E,s*t[o][0])];r.push(c)}var l="y = "+Math.round(100*a)/100+"e^("+Math.round(100*s)/100+"x)";return{equation:[a,s],points:r,string:l}},logarithmic:function(t){var e=[0,0,0,0],n=0,r=[];for(o=t.length;n<o;n++)null!=t[n][1]&&(e[0]+=Math.log(t[n][0]),e[1]+=t[n][1]*Math.log(t[n][0]),e[2]+=t[n][1],e[3]+=Math.pow(Math.log(t[n][0]),2));for(var i=(n*e[1]-e[2]*e[0])/(n*e[3]-e[0]*e[0]),a=(e[2]-i*e[0])/n,s=0,o=t.length;s<o;s++){var u=[t[s][0],a+i*Math.log(t[s][0])];r.push(u)}var c="y = "+Math.round(100*a)/100+" + "+Math.round(100*i)/100+" ln(x)";return{equation:[a,i],points:r,string:c}},power:function(t){var e=[0,0,0,0],n=0,r=[];for(o=t.length;n<o;n++)null!=t[n][1]&&(e[0]+=Math.log(t[n][0]),e[1]+=Math.log(t[n][1])*Math.log(t[n][0]),e[2]+=Math.log(t[n][1]),e[3]+=Math.pow(Math.log(t[n][0]),2));for(var i=(n*e[1]-e[2]*e[0])/(n*e[3]-e[0]*e[0]),a=Math.pow(Math.E,(e[2]-i*e[0])/n),s=0,o=t.length;s<o;s++){var u=[t[s][0],a*Math.pow(t[s][0],i)];r.push(u)}var c="y = "+Math.round(100*a)/100+"x^"+Math.round(100*i)/100;return{equation:[a,i],points:r,string:c}},polynomial:function(t,e){"undefined"==typeof e&&(e=2);for(var r=[],i=[],a=[],s=0,o=0,u=0,c=e+1;u<c;u++){for(var l=0,h=t.length;l<h;l++)null!=t[l][1]&&(s+=Math.pow(t[l][0],u)*t[l][1]);r.push(s),s=0;for(var f=[],g=0;g<c;g++){for(var l=0,h=t.length;l<h;l++)null!=t[l][1]&&(o+=Math.pow(t[l][0],u+g));f.push(o),o=0}i.push(f)}i.push(r);for(var p=n(i,c),u=0,h=t.length;u<h;u++){for(var v=0,d=0;d<p.length;d++)v+=p[d]*Math.pow(t[u][0],d);a.push([t[u][0],v])}for(var x="y = ",u=p.length-1;u>=0;u--)x+=u>1?Math.round(p[u]*Math.pow(10,u))/Math.pow(10,u)+"x^"+u+" + ":1==u?Math.round(100*p[u])/100+"x + ":Math.round(100*p[u])/100;return{equation:p,points:a,string:x}},lastvalue:function(t){for(var e=[],n=null,r=0;r<t.length;r++)t[r][1]?(n=t[r][1],e.push([t[r][0],t[r][1]])):e.push([t[r][0],n]);return{equation:[n],points:e,string:""+n}}},i=function(t,e,n){if("string"==typeof t)return r[t](e,n)};t.exports=i},function(t,e,n){!function(){function e(){var t={},e=[];return t.data=function(n){return arguments.length?(e=n.slice(),t):e},t.mb=function(){var t,n,r=e.length;if(1===r)t=0,n=e[0][1];else{for(var i,a,s,o=0,u=0,c=0,l=0,h=0;h<r;h++)i=e[h],a=i[0],s=i[1],o+=a,u+=s,c+=a*a,l+=a*s;t=(r*l-o*u)/(r*c-o*o),n=u/r-t*o/r}return{m:t,b:n}},t.m=function(){return t.mb().m},t.b=function(){return t.mb().b},t.line=function(){var e=t.mb(),n=e.m,r=e.b;return function(t){return r+n*t}},t}function n(t,e){if(t.length<2)return 1;for(var n,r=0,i=0;i<t.length;i++)r+=t[i][1];n=r/t.length;for(var a=0,s=0;s<t.length;s++)a+=Math.pow(n-t[s][1],2);for(var o=0,u=0;u<t.length;u++)o+=Math.pow(t[u][1]-e(t[u][0]),2);return 1-o/a}function r(){var t={},e=0,n={};return t.train=function(t,r){n[r]||(n[r]={});for(var i in t){var a=t[i];void 0===n[r][i]&&(n[r][i]={}),void 0===n[r][i][a]&&(n[r][i][a]=0),n[r][i][t[i]]++}e++},t.score=function(t){var r,i={};for(var a in t){var s=t[a];for(r in n)void 0===i[r]&&(i[r]={}),n[r][a]?i[r][a+"_"+s]=(n[r][a][s]||0)/e:i[r][a+"_"+s]=0}var o={};for(r in i)for(var u in i[r])void 0===o[r]&&(o[r]=0),o[r]+=i[r][u];return o},t}function i(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return e}function a(t){return 0===t.length?null:i(t)/t.length}function s(t){if(0===t.length)return null;for(var e=1,n=0;n<t.length;n++){if(t[n]<=0)return null;e*=t[n]}return Math.pow(e,1/t.length)}function o(t){if(0===t.length)return null;for(var e=0,n=0;n<t.length;n++){if(t[n]<=0)return null;e+=1/t[n]}return t.length/e}function u(t){if(0===t.length)return null;for(var e=0,n=0;n<t.length;n++)e+=Math.pow(t[n],2);return Math.sqrt(e/t.length)}function c(t){for(var e,n=0;n<t.length;n++)(t[n]<e||void 0===e)&&(e=t[n]);return e}function l(t){for(var e,n=0;n<t.length;n++)(t[n]>e||void 0===e)&&(e=t[n]);return e}function h(t){if(0===t.length)return null;for(var e=a(t),n=[],r=0;r<t.length;r++)n.push(Math.pow(t[r]-e,2));return a(n)}function f(t){return 0===t.length?null:Math.sqrt(h(t))}function g(t,e){for(var n=a(t),r=0,i=0;i<t.length;i++)r+=Math.pow(t[i]-n,e);return r}function p(t){if(t.length<=1)return null;var e=g(t,2);return e/(t.length-1)}function v(t){return t.length<=1?null:Math.sqrt(p(t))}function d(t,e){if(t.length<=1||t.length!=e.length)return null;for(var n=a(t),r=a(e),i=0,s=0;s<t.length;s++)i+=(t[s]-n)*(e[s]-r);return i/(t.length-1)}function x(t,e){var n=d(t,e),r=v(t),i=v(e);return null===n||null===r||null===i?null:n/r/i}function m(t){if(0===t.length)return null;var e=t.slice().sort(function(t,e){return t-e});if(e.length%2===1)return e[(e.length-1)/2];var n=e[e.length/2-1],r=e[e.length/2];return(n+r)/2}function y(t){if(0===t.length)return null;if(1===t.length)return t[0];for(var e,n=t.slice().sort(function(t,e){return t-e}),r=n[0],i=0,a=1,s=1;s<n.length+1;s++)n[s]!==r?(a>i&&(i=a,e=r),a=1,r=n[s]):a++;return e}function _(t,e){var n=a(t),r=f(t),i=Math.sqrt(t.length);return(n-e)/(r/i)}function S(t,e,n){var r=t.length,i=e.length;if(!r||!i)return null;n||(n=0);var s=a(t),o=a(e),u=((r-1)*p(t)+(i-1)*p(e))/(r+i-2);return(s-o-n)/Math.sqrt(u*(1/r+1/i))}function w(t,e){var n=[];if(e<=0)return null;for(var r=0;r<t.length;r+=e)n.push(t.slice(r,r+e));return n}function b(t,e){e=e||Math.random;for(var n,r,i=t.length;i>0;)r=Math.floor(e()*i--),n=t[i],t[i]=t[r],t[r]=n;return t}function M(t,e){return t=t.slice(),b(t.slice(),e)}function A(t,e,n){var r=M(t,n);return r.slice(0,e)}function C(t,e){if(0===t.length)return null;var n=t.slice().sort(function(t,e){return t-e});if(e.length){for(var r=[],i=0;i<e.length;i++)r[i]=k(n,e[i]);return r}return k(n,e)}function k(t,e){var n=t.length*e;return e<0||e>1?null:1===e?t[t.length-1]:0===e?t[0]:n%1!==0?t[Math.ceil(n)-1]:t.length%2===0?(t[n-1]+t[n])/2:t[n]}function T(t){return 0===t.length?null:C(t,.75)-C(t,.25)}function P(t){if(!t||0===t.length)return null;for(var e=m(t),n=[],r=0;r<t.length;r++)n.push(Math.abs(t[r]-e));return m(n)}function I(t,e){var n,r,i=[],a=[],s=0;for(n=0;n<t.length+1;n++){var o=[],u=[];for(r=0;r<e+1;r++)o.push(0),u.push(0);i.push(o),a.push(u)}for(n=1;n<e+1;n++)for(i[1][n]=1,a[1][n]=0,r=2;r<t.length+1;r++)a[r][n]=1/0;for(var c=2;c<t.length+1;c++){for(var l=0,h=0,f=0,g=0,p=1;p<c+1;p++){var v=c-p+1,d=t[v-1];if(f++,l+=d,h+=d*d,s=h-l*l/f,g=v-1,0!==g)for(r=2;r<e+1;r++)a[c][r]>=s+a[g][r-1]&&(i[c][r]=v,a[c][r]=s+a[g][r-1])}i[c][1]=1,a[c][1]=s}return{lower_class_limits:i,variance_combinations:a}}function D(t,e,n){var r=t.length-1,i=[],a=n;for(i[n]=t[t.length-1],i[0]=t[0];a>1;)i[a-1]=t[e[r][a]-2],r=e[r][a]-1,a--;return i}function L(t,e){if(e>t.length)return null;t=t.slice().sort(function(t,e){return t-e});var n=I(t,e),r=n.lower_class_limits;return D(t,r,e)}function R(t){if(t.length<3)return null;var e=t.length,n=Math.pow(v(t),3),r=g(t,3);return e*r/((e-1)*(e-2)*n)}function B(t){var e=Math.abs(t),n=Math.floor(10*e),r=10*(Math.floor(100*e)/10-Math.floor(100*e/10)),i=Math.min(10*n+r,W.length-1);return t>=0?W[i]:+(1-W[i]).toFixed(4)}function F(t,e,n){return(t-e)/n}function O(t){if(t<0)return null;for(var e=1,n=2;n<=t;n++)e*=n;return e}function G(t){return t<0||t>1?null:N(1,t)}function N(t,e){function n(t,e,n){return O(e)/(O(t)*O(e-t))*(Math.pow(n,t)*Math.pow(1-n,e-t))}if(e<0||e>1||t<=0||t%1!==0)return null;var r=0,i=0,a={};do a[r]=n(r,t,e),i+=a[r],r++;while(i<1-V);return a}function z(t){function e(t,e){return Math.pow(Math.E,-e)*Math.pow(e,t)/O(t)}if(t<=0)return null;var n=0,r=0,i={};do i[n]=e(n,t),r+=i[n],n++;while(r<1-V);return i}function j(t,e,n){for(var r,i,s=a(t),o=0,u=1,c=e(s),l=[],h=[],f=0;f<t.length;f++)void 0===l[t[f]]&&(l[t[f]]=0),l[t[f]]++;for(f=0;f<l.length;f++)void 0===l[f]&&(l[f]=0);for(i in c)i in l&&(h[i]=c[i]*t.length);for(i=h.length-1;i>=0;i--)h[i]<3&&(h[i-1]+=h[i],h.pop(),l[i-1]+=l[i],l.pop());for(i=0;i<l.length;i++)o+=Math.pow(l[i]-h[i],2)/h[i];return r=l.length-u-1,E[r][n]<o}function X(t){function e(t){return function(){var e=Array.prototype.slice.apply(arguments);return e.unshift(this),Y[t].apply(Y,e)}}var n=!(!Object.defineProperty||!Object.defineProperties);if(!n)throw new Error("without defineProperty, simple-statistics cannot be mixed in");var r,i=["median","standard_deviation","sum","sample_skewness","mean","min","max","quantile","geometric_mean","harmonic_mean","root_mean_square"];r=t?t.slice():Array.prototype;for(var a=0;a<i.length;a++)Object.defineProperty(r,i[a],{value:e(i[a]),configurable:!0,enumerable:!1,writable:!0});return r}var Y={};t.exports=Y;var W=[.5,.504,.508,.512,.516,.5199,.5239,.5279,.5319,.5359,.5398,.5438,.5478,.5517,.5557,.5596,.5636,.5675,.5714,.5753,.5793,.5832,.5871,.591,.5948,.5987,.6026,.6064,.6103,.6141,.6179,.6217,.6255,.6293,.6331,.6368,.6406,.6443,.648,.6517,.6554,.6591,.6628,.6664,.67,.6736,.6772,.6808,.6844,.6879,.6915,.695,.6985,.7019,.7054,.7088,.7123,.7157,.719,.7224,.7257,.7291,.7324,.7357,.7389,.7422,.7454,.7486,.7517,.7549,.758,.7611,.7642,.7673,.7704,.7734,.7764,.7794,.7823,.7852,.7881,.791,.7939,.7967,.7995,.8023,.8051,.8078,.8106,.8133,.8159,.8186,.8212,.8238,.8264,.8289,.8315,.834,.8365,.8389,.8413,.8438,.8461,.8485,.8508,.8531,.8554,.8577,.8599,.8621,.8643,.8665,.8686,.8708,.8729,.8749,.877,.879,.881,.883,.8849,.8869,.8888,.8907,.8925,.8944,.8962,.898,.8997,.9015,.9032,.9049,.9066,.9082,.9099,.9115,.9131,.9147,.9162,.9177,.9192,.9207,.9222,.9236,.9251,.9265,.9279,.9292,.9306,.9319,.9332,.9345,.9357,.937,.9382,.9394,.9406,.9418,.9429,.9441,.9452,.9463,.9474,.9484,.9495,.9505,.9515,.9525,.9535,.9545,.9554,.9564,.9573,.9582,.9591,.9599,.9608,.9616,.9625,.9633,.9641,.9649,.9656,.9664,.9671,.9678,.9686,.9693,.9699,.9706,.9713,.9719,.9726,.9732,.9738,.9744,.975,.9756,.9761,.9767,.9772,.9778,.9783,.9788,.9793,.9798,.9803,.9808,.9812,.9817,.9821,.9826,.983,.9834,.9838,.9842,.9846,.985,.9854,.9857,.9861,.9864,.9868,.9871,.9875,.9878,.9881,.9884,.9887,.989,.9893,.9896,.9898,.9901,.9904,.9906,.9909,.9911,.9913,.9916,.9918,.992,.9922,.9925,.9927,.9929,.9931,.9932,.9934,.9936,.9938,.994,.9941,.9943,.9945,.9946,.9948,.9949,.9951,.9952,.9953,.9955,.9956,.9957,.9959,.996,.9961,.9962,.9963,.9964,.9965,.9966,.9967,.9968,.9969,.997,.9971,.9972,.9973,.9974,.9974,.9975,.9976,.9977,.9977,.9978,.9979,.9979,.998,.9981,.9981,.9982,.9982,.9983,.9984,.9984,.9985,.9985,.9986,.9986,.9987,.9987,.9987,.9988,.9988,.9989,.9989,.9989,.999,.999],V=1e-4,E={1:{.995:0,.99:0,.975:0,.95:0,.9:.02,.5:.45,.1:2.71,.05:3.84,.025:5.02,.01:6.63,.005:7.88},2:{.995:.01,.99:.02,.975:.05,.95:.1,.9:.21,.5:1.39,.1:4.61,.05:5.99,.025:7.38,.01:9.21,.005:10.6},3:{.995:.07,.99:.11,.975:.22,.95:.35,.9:.58,.5:2.37,.1:6.25,.05:7.81,.025:9.35,.01:11.34,.005:12.84},4:{.995:.21,.99:.3,.975:.48,.95:.71,.9:1.06,.5:3.36,.1:7.78,.05:9.49,.025:11.14,.01:13.28,.005:14.86},5:{.995:.41,.99:.55,.975:.83,.95:1.15,.9:1.61,.5:4.35,.1:9.24,.05:11.07,.025:12.83,.01:15.09,.005:16.75},6:{.995:.68,.99:.87,.975:1.24,.95:1.64,.9:2.2,.5:5.35,.1:10.65,.05:12.59,.025:14.45,.01:16.81,.005:18.55},7:{.995:.99,.99:1.25,.975:1.69,.95:2.17,.9:2.83,.5:6.35,.1:12.02,.05:14.07,.025:16.01,.01:18.48,.005:20.28},8:{.995:1.34,.99:1.65,.975:2.18,.95:2.73,.9:3.49,.5:7.34,.1:13.36,.05:15.51,.025:17.53,.01:20.09,.005:21.96},9:{.995:1.73,.99:2.09,.975:2.7,.95:3.33,.9:4.17,.5:8.34,.1:14.68,.05:16.92,.025:19.02,.01:21.67,.005:23.59},10:{.995:2.16,.99:2.56,.975:3.25,.95:3.94,.9:4.87,.5:9.34,.1:15.99,.05:18.31,.025:20.48,.01:23.21,.005:25.19},11:{.995:2.6,.99:3.05,.975:3.82,.95:4.57,.9:5.58,.5:10.34,.1:17.28,.05:19.68,.025:21.92,.01:24.72,.005:26.76},12:{.995:3.07,.99:3.57,.975:4.4,.95:5.23,.9:6.3,.5:11.34,.1:18.55,.05:21.03,.025:23.34,.01:26.22,.005:28.3},13:{.995:3.57,.99:4.11,.975:5.01,.95:5.89,.9:7.04,.5:12.34,.1:19.81,.05:22.36,.025:24.74,.01:27.69,.005:29.82},14:{.995:4.07,.99:4.66,.975:5.63,.95:6.57,.9:7.79,.5:13.34,.1:21.06,.05:23.68,.025:26.12,.01:29.14,.005:31.32},15:{.995:4.6,.99:5.23,.975:6.27,.95:7.26,.9:8.55,.5:14.34,.1:22.31,.05:25,.025:27.49,.01:30.58,.005:32.8},16:{.995:5.14,.99:5.81,.975:6.91,.95:7.96,.9:9.31,.5:15.34,.1:23.54,.05:26.3,.025:28.85,.01:32,.005:34.27},17:{.995:5.7,.99:6.41,.975:7.56,.95:8.67,.9:10.09,.5:16.34,.1:24.77,.05:27.59,.025:30.19,.01:33.41,.005:35.72},18:{.995:6.26,.99:7.01,.975:8.23,.95:9.39,.9:10.87,.5:17.34,.1:25.99,.05:28.87,.025:31.53,.01:34.81,.005:37.16},19:{.995:6.84,.99:7.63,.975:8.91,.95:10.12,.9:11.65,.5:18.34,.1:27.2,.05:30.14,.025:32.85,.01:36.19,.005:38.58},20:{.995:7.43,.99:8.26,.975:9.59,.95:10.85,.9:12.44,.5:19.34,.1:28.41,.05:31.41,.025:34.17,.01:37.57,.005:40},21:{.995:8.03,.99:8.9,.975:10.28,.95:11.59,.9:13.24,.5:20.34,.1:29.62,.05:32.67,.025:35.48,.01:38.93,.005:41.4},22:{.995:8.64,.99:9.54,.975:10.98,.95:12.34,.9:14.04,.5:21.34,.1:30.81,.05:33.92,.025:36.78,.01:40.29,.005:42.8},23:{.995:9.26,.99:10.2,.975:11.69,.95:13.09,.9:14.85,.5:22.34,.1:32.01,.05:35.17,.025:38.08,.01:41.64,.005:44.18},24:{.995:9.89,.99:10.86,.975:12.4,.95:13.85,.9:15.66,.5:23.34,.1:33.2,.05:36.42,.025:39.36,.01:42.98,.005:45.56},25:{.995:10.52,.99:11.52,.975:13.12,.95:14.61,.9:16.47,.5:24.34,.1:34.28,.05:37.65,.025:40.65,.01:44.31,.005:46.93},26:{.995:11.16,.99:12.2,.975:13.84,.95:15.38,.9:17.29,.5:25.34,.1:35.56,.05:38.89,.025:41.92,.01:45.64,.005:48.29},27:{.995:11.81,.99:12.88,.975:14.57,.95:16.15,.9:18.11,.5:26.34,.1:36.74,.05:40.11,.025:43.19,.01:46.96,.005:49.65},28:{.995:12.46,.99:13.57,.975:15.31,.95:16.93,.9:18.94,.5:27.34,.1:37.92,.05:41.34,.025:44.46,.01:48.28,.005:50.99},29:{.995:13.12,.99:14.26,.975:16.05,.95:17.71,.9:19.77,.5:28.34,.1:39.09,.05:42.56,.025:45.72,.01:49.59,.005:52.34},30:{.995:13.79,.99:14.95,.975:16.79,.95:18.49,.9:20.6,.5:29.34,.1:40.26,.05:43.77,.025:46.98,.01:50.89,.005:53.67},40:{.995:20.71,.99:22.16,.975:24.43,.95:26.51,.9:29.05,.5:39.34,.1:51.81,.05:55.76,.025:59.34,.01:63.69,.005:66.77},50:{.995:27.99,.99:29.71,.975:32.36,.95:34.76,.9:37.69,.5:49.33,.1:63.17,.05:67.5,.025:71.42,.01:76.15,.005:79.49},60:{.995:35.53,.99:37.48,.975:40.48,.95:43.19,.9:46.46,.5:59.33,.1:74.4,.05:79.08,.025:83.3,.01:88.38,.005:91.95},70:{.995:43.28,.99:45.44,.975:48.76,.95:51.74,.9:55.33,.5:69.33,.1:85.53,.05:90.53,.025:95.02,.01:100.42,.005:104.22},80:{.995:51.17,.99:53.54,.975:57.15,.95:60.39,.9:64.28,.5:79.33,.1:96.58,.05:101.88,.025:106.63,.01:112.33,.005:116.32},90:{.995:59.2,.99:61.75,.975:65.65,.95:69.13,.9:73.29,.5:89.33,.1:107.57,.05:113.14,.025:118.14,.01:124.12,.005:128.3},100:{.995:67.33,.99:70.06,.975:74.22,.95:77.93,.9:82.36,.5:99.33,.1:118.5,.05:124.34,.025:129.56,.01:135.81,.005:140.17}};Y.linear_regression=e,Y.standard_deviation=f,Y.r_squared=n,Y.median=m,Y.mean=a,Y.mode=y,Y.min=c,Y.max=l,Y.sum=i,Y.quantile=C,Y.quantile_sorted=k,Y.iqr=T,Y.mad=P,Y.chunk=w,Y.shuffle=M,Y.shuffle_in_place=b,Y.sample=A,Y.sample_covariance=d,Y.sample_correlation=x,Y.sample_variance=p,Y.sample_standard_deviation=v,Y.sample_skewness=R,Y.geometric_mean=s,Y.harmonic_mean=o,Y.root_mean_square=u,Y.variance=h,Y.t_test=_,Y.t_test_two_sample=S,Y.jenksMatrices=I,Y.jenksBreaks=D,Y.jenks=L,Y.bayesian=r,Y.epsilon=V,Y.factorial=O,Y.bernoulli_distribution=G,Y.binomial_distribution=N,Y.poisson_distribution=z,Y.chi_squared_goodness_of_fit=j,Y.z_score=F,Y.cumulative_std_normal_probability=B,Y.standard_normal_table=W,Y.average=a,Y.interquartile_range=T,Y.mixin=X,Y.median_absolute_deviation=P,Y.rms=u}(this)},function(t,e,n,r,i){var a=n(r);a.Util=n(i),t.exports=a}]))});

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		version = "2.1.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},

		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];
		nodeType = context.nodeType;

		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		if ( !seed && documentIsHTML ) {

			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;

			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var matched = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};


	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];

			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );

				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}

			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}

			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];

			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			if ( key === undefined ) {
				this.cache[ unlock ] = {};

			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );

					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}

			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};

	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;



	support.focusinBubbles = "onfocusin" in window;


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );

					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],

			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			_default: [ 0, "", "" ]
		};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			data_user.set( dest, udataCur );
		}
	}

	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;

			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];

					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[ i ], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}

			return window.getComputedStyle( elem, null );
		};



	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );

			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild( container );
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );

					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

					docElem.removeChild( container );
					div.removeChild( marginDiv );

					return ret;
				}
			});
		}
	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;

				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();


	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});




	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = window.location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function( options ) {
		var callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");

					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};




	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


/***/ }
]);