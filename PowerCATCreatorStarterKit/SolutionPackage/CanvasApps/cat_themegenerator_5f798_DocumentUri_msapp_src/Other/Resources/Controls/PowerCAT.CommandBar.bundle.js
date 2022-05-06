/*! For license information please see bundle.js.LICENSE.txt */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{CommandBar:()=>O});const r=React,o=FluentUIReactv8290;var i,n="data-is-focusable",s="data-focuszone-id",a="tabindex",l="data-no-vertical-wrap",u="data-no-horizontal-wrap",c=999999999,h=-999999999,m={},d=new Set,p=["text","number","password","email","tel","url","search"],f=!1;class _ extends r.Component{constructor(e){super(e),this._root=r.createRef(),this._mergedRef=(0,o.createMergedRef)(),this._onFocus=e=>{if(!this._portalContainsElement(e.target)){var t,{onActiveElementChanged:r,doNotAllowFocusEventToPropagate:i,stopFocusPropagation:n,onFocusNotification:s,onFocus:a,shouldFocusInnerElementWhenReceivedFocus:l,defaultTabbableElement:u}=this.props,c=this._isImmediateDescendantOfZone(e.target);if(c)t=e.target;else for(var h=e.target;h&&h!==this._root.current;){if((0,o.isElementTabbable)(h)&&this._isImmediateDescendantOfZone(h)){t=h;break}h=(0,o.getParent)(h,f)}if(l&&e.target===this._root.current){var m=u&&"function"==typeof u&&u(this._root.current);m&&(0,o.isElementTabbable)(m)?(t=m,m.focus()):(this.focus(!0),this._activeElement&&(t=null))}var d=!this._activeElement;t&&t!==this._activeElement&&((c||d)&&this._setFocusAlignment(t,!0,!0),this._activeElement=t,d&&this._updateTabIndexes()),r&&r(this._activeElement,e),(n||i)&&e.stopPropagation(),a?a(e):s&&s()}},this._onBlur=()=>{this._setParkedFocus(!1)},this._onMouseDown=e=>{if(!this._portalContainsElement(e.target)){var{disabled:t}=this.props;if(!t){for(var r=e.target,i=[];r&&r!==this._root.current;)i.push(r),r=(0,o.getParent)(r,f);for(;i.length&&((r=i.pop())&&(0,o.isElementTabbable)(r)&&this._setActiveElement(r,!0),!(0,o.isElementFocusZone)(r)););}}},this._onKeyDown=(e,t)=>{if(!this._portalContainsElement(e.target)){var{direction:r,disabled:i,isInnerZoneKeystroke:n,pagingSupportDisabled:s,shouldEnterInnerZone:a}=this.props;if(!(i||(this.props.onKeyDown&&this.props.onKeyDown(e),e.isDefaultPrevented()||this._getDocument().activeElement===this._root.current&&this._isInnerZone))){if((a&&a(e)||n&&n(e))&&this._isImmediateDescendantOfZone(e.target)){var l=this._getFirstInnerZone();if(l){if(!l.focus(!0))return}else{if(!(0,o.isElementFocusSubZone)(e.target))return;if(!this.focusElement((0,o.getNextElement)(e.target,e.target.firstChild,!0)))return}}else{if(e.altKey)return;switch(e.which){case o.KeyCodes.space:if(this._tryInvokeClickForFocusable(e.target))break;return;case o.KeyCodes.left:if(r!==o.FocusZoneDirection.vertical&&(this._preventDefaultWhenHandled(e),this._moveFocusLeft(t)))break;return;case o.KeyCodes.right:if(r!==o.FocusZoneDirection.vertical&&(this._preventDefaultWhenHandled(e),this._moveFocusRight(t)))break;return;case o.KeyCodes.up:if(r!==o.FocusZoneDirection.horizontal&&(this._preventDefaultWhenHandled(e),this._moveFocusUp()))break;return;case o.KeyCodes.down:if(r!==o.FocusZoneDirection.horizontal&&(this._preventDefaultWhenHandled(e),this._moveFocusDown()))break;return;case o.KeyCodes.pageDown:if(!s&&this._moveFocusPaging(!0))break;return;case o.KeyCodes.pageUp:if(!s&&this._moveFocusPaging(!1))break;return;case o.KeyCodes.tab:if(this.props.allowTabKey||this.props.handleTabKey===o.FocusZoneTabbableElements.all||this.props.handleTabKey===o.FocusZoneTabbableElements.inputOnly&&this._isElementInput(e.target)){var c=!1;if(this._processingTabKey=!0,c=r!==o.FocusZoneDirection.vertical&&this._shouldWrapFocus(this._activeElement,u)?((0,o.getRTL)(t)?!e.shiftKey:e.shiftKey)?this._moveFocusLeft(t):this._moveFocusRight(t):e.shiftKey?this._moveFocusUp():this._moveFocusDown(),this._processingTabKey=!1,c)break;this.props.shouldResetActiveElementWhenTabFromZone&&(this._activeElement=null)}return;case o.KeyCodes.home:if(this._isContentEditableElement(e.target)||this._isElementInput(e.target)&&!this._shouldInputLoseFocus(e.target,!1))return!1;var h=this._root.current&&this._root.current.firstChild;if(this._root.current&&h&&this.focusElement((0,o.getNextElement)(this._root.current,h,!0)))break;return;case o.KeyCodes.end:if(this._isContentEditableElement(e.target)||this._isElementInput(e.target)&&!this._shouldInputLoseFocus(e.target,!0))return!1;var m=this._root.current&&this._root.current.lastChild;if(this._root.current&&this.focusElement((0,o.getPreviousElement)(this._root.current,m,!0,!0,!0)))break;return;case o.KeyCodes.enter:if(this._tryInvokeClickForFocusable(e.target))break;return;default:return}}e.preventDefault(),e.stopPropagation()}}},this._getHorizontalDistanceFromCenter=(e,t,r)=>{var o=this._focusAlignment.left||this._focusAlignment.x||0,i=Math.floor(r.top),n=Math.floor(t.bottom),s=Math.floor(r.bottom),a=Math.floor(t.top);return e&&i>n||!e&&s<a?o>=r.left&&o<=r.left+r.width?0:Math.abs(r.left+r.width/2-o):this._shouldWrapFocus(this._activeElement,l)?c:h},(0,o.initializeComponentRef)(this),this._id=(0,o.getId)("FocusZone"),this._focusAlignment={left:0,top:0},this._processingTabKey=!1}static getOuterZones(){return d.size}static _onKeyDownCapture(e){e.which===o.KeyCodes.tab&&d.forEach((e=>e._updateTabIndexes()))}componentDidMount(){var{current:e}=this._root;if(m[this._id]=this,e){this._windowElement=(0,o.getWindow)(e);for(var t=(0,o.getParent)(e,f);t&&t!==this._getDocument().body&&1===t.nodeType;){if((0,o.isElementFocusZone)(t)){this._isInnerZone=!0;break}t=(0,o.getParent)(t,f)}this._isInnerZone||(d.add(this),this._windowElement&&1===d.size&&this._windowElement.addEventListener("keydown",_._onKeyDownCapture,!0)),this._root.current&&this._root.current.addEventListener("blur",this._onBlur,!0),this._updateTabIndexes(),this.props.defaultTabbableElement&&"string"==typeof this.props.defaultTabbableElement?this._activeElement=this._getDocument().querySelector(this.props.defaultTabbableElement):this.props.defaultActiveElement&&(this._activeElement=this._getDocument().querySelector(this.props.defaultActiveElement)),this.props.shouldFocusOnMount&&this.focus()}}componentDidUpdate(){var{current:e}=this._root,t=this._getDocument();if(t&&this._lastIndexPath&&(t.activeElement===t.body||null===t.activeElement||!this.props.preventFocusRestoration&&t.activeElement===e)){var r=(0,o.getFocusableByIndexPath)(e,this._lastIndexPath);r?(this._setActiveElement(r,!0),r.focus(),this._setParkedFocus(!1)):this._setParkedFocus(!0)}}componentWillUnmount(){delete m[this._id],this._isInnerZone||(d.delete(this),this._windowElement&&0===d.size&&this._windowElement.removeEventListener("keydown",_._onKeyDownCapture,!0)),this._root.current&&this._root.current.removeEventListener("blur",this._onBlur,!0),this._activeElement=null,this._defaultFocusElement=null}render(){var{as:e,elementType:t,rootProps:n,ariaDescribedBy:s,ariaLabelledBy:a,className:l}=this.props,u=(0,o.getNativeProps)(this.props,o.htmlElementProperties),c=e||t||"div";this._evaluateFocusBeforeRender();var h=(0,o.getTheme)();return r.createElement(c,Object.assign({"aria-labelledby":a,"aria-describedby":s},u,n,{className:(0,o.css)((i||(i=(0,o.mergeStyles)({selectors:{":focus":{outline:"none"}}},"ms-FocusZone")),i),l),ref:this._mergedRef(this.props.elementRef,this._root),"data-focuszone-id":this._id,onKeyDown:e=>this._onKeyDown(e,h),onFocus:this._onFocus,onMouseDownCapture:this._onMouseDown,tabIndex:0}),this.props.children)}focus(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this._root.current){if(!e&&"true"===this._root.current.getAttribute(n)&&this._isInnerZone){var t=this._getOwnerZone(this._root.current);if(t!==this._root.current){var r=m[t.getAttribute(s)];return!!r&&r.focusElement(this._root.current)}return!1}if(!e&&this._activeElement&&(0,o.elementContains)(this._root.current,this._activeElement)&&(0,o.isElementTabbable)(this._activeElement))return this._activeElement.focus(),!0;var i=this._root.current.firstChild;return this.focusElement((0,o.getNextElement)(this._root.current,i,!0))}return!1}focusLast(){if(this._root.current){var e=this._root.current&&this._root.current.lastChild;return this.focusElement((0,o.getPreviousElement)(this._root.current,e,!0,!0,!0))}return!1}focusElement(e,t){var{onBeforeFocus:r,shouldReceiveFocus:o}=this.props;return!(o&&!o(e)||r&&!r(e)||!e||(this._setActiveElement(e,t),this._activeElement&&this._activeElement.focus(),0))}setFocusAlignment(e){this._focusAlignment=e}_evaluateFocusBeforeRender(){var{current:e}=this._root,t=this._getDocument();if(t){var r=t.activeElement;if(r!==e){var i=(0,o.elementContains)(e,r,!1);this._lastIndexPath=i?(0,o.getElementIndexPath)(e,r):void 0}}}_setParkedFocus(e){var{current:t}=this._root;t&&this._isParked!==e&&(this._isParked=e,e?(this.props.allowFocusRoot||(this._parkedTabIndex=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")),t.focus()):this.props.allowFocusRoot||(this._parkedTabIndex?(t.setAttribute("tabindex",this._parkedTabIndex),this._parkedTabIndex=void 0):t.removeAttribute("tabindex")))}_setActiveElement(e,t){var r=this._activeElement;this._activeElement=e,r&&((0,o.isElementFocusZone)(r)&&this._updateTabIndexes(r),r.tabIndex=-1),this._activeElement&&(this._focusAlignment&&!t||this._setFocusAlignment(e,!0,!0),this._activeElement.tabIndex=this.props.tabIndex?this.props.tabIndex:0)}_preventDefaultWhenHandled(e){this.props.preventDefaultWhenHandled&&e.preventDefault()}_tryInvokeClickForFocusable(e){if(e===this._root.current||!this.props.shouldRaiseClicks)return!1;do{if("BUTTON"===e.tagName||"A"===e.tagName||"INPUT"===e.tagName||"TEXTAREA"===e.tagName)return!1;if(this._isImmediateDescendantOfZone(e)&&"true"===e.getAttribute(n)&&"true"!==e.getAttribute("data-disable-click-on-enter"))return(0,o.raiseClick)(e),!0;e=(0,o.getParent)(e,f)}while(e!==this._root.current);return!1}_getFirstInnerZone(e){if(!(e=e||this._activeElement||this._root.current))return null;if((0,o.isElementFocusZone)(e))return m[e.getAttribute(s)];for(var t=e.firstElementChild;t;){if((0,o.isElementFocusZone)(t))return m[t.getAttribute(s)];var r=this._getFirstInnerZone(t);if(r)return r;t=t.nextElementSibling}return null}_moveFocus(e,t,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=this._activeElement,s=-1,a=void 0,l=!1,u=this.props.direction===o.FocusZoneDirection.bidirectional;if(!n||!this._root.current)return!1;if(this._isElementInput(n)&&!this._shouldInputLoseFocus(n,e))return!1;var c=u?n.getBoundingClientRect():null;do{if(n=e?(0,o.getNextElement)(this._root.current,n):(0,o.getPreviousElement)(this._root.current,n),!u){a=n;break}if(n){var h=t(c,n.getBoundingClientRect());if(-1===h&&-1===s){a=n;break}if(h>-1&&(-1===s||h<s)&&(s=h,a=n),s>=0&&h<0)break}}while(n);if(a&&a!==this._activeElement)l=!0,this.focusElement(a);else if(this.props.isCircularNavigation&&i)return e?this.focusElement((0,o.getNextElement)(this._root.current,this._root.current.firstElementChild,!0)):this.focusElement((0,o.getPreviousElement)(this._root.current,this._root.current.lastElementChild,!0,!0,!0));return l}_moveFocusDown(){var e=-1,t=this._focusAlignment.left||this._focusAlignment.x||0;return!!this._moveFocus(!0,((r,o)=>{var i=-1,n=Math.floor(o.top),s=Math.floor(r.bottom);return n<s?this._shouldWrapFocus(this._activeElement,l)?c:h:((-1===e&&n>=s||n===e)&&(e=n,i=t>=o.left&&t<=o.left+o.width?0:Math.abs(o.left+o.width/2-t)),i)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)}_moveFocusUp(){var e=-1,t=this._focusAlignment.left||this._focusAlignment.x||0;return!!this._moveFocus(!1,((r,o)=>{var i=-1,n=Math.floor(o.bottom),s=Math.floor(o.top),a=Math.floor(r.top);return n>a?this._shouldWrapFocus(this._activeElement,l)?c:h:((-1===e&&n<=a||s===e)&&(e=s,i=t>=o.left&&t<=o.left+o.width?0:Math.abs(o.left+o.width/2-t)),i)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)}_moveFocusLeft(e){var t=this._shouldWrapFocus(this._activeElement,u);return!!this._moveFocus((0,o.getRTL)(e),((r,i)=>{var n=-1;return((0,o.getRTL)(e)?parseFloat(i.top.toFixed(3))<parseFloat(r.bottom.toFixed(3)):parseFloat(i.bottom.toFixed(3))>parseFloat(r.top.toFixed(3)))&&i.right<=r.right&&this.props.direction!==o.FocusZoneDirection.vertical?n=r.right-i.right:t||(n=h),n}),void 0,t)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)}_moveFocusRight(e){var t=this._shouldWrapFocus(this._activeElement,u);return!!this._moveFocus(!(0,o.getRTL)(e),((r,i)=>{var n=-1;return((0,o.getRTL)(e)?parseFloat(i.bottom.toFixed(3))>parseFloat(r.top.toFixed(3)):parseFloat(i.top.toFixed(3))<parseFloat(r.bottom.toFixed(3)))&&i.left>=r.left&&this.props.direction!==o.FocusZoneDirection.vertical?n=i.left-r.left:t||(n=h),n}),void 0,t)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)}_moveFocusPaging(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this._activeElement;if(!r||!this._root.current)return!1;if(this._isElementInput(r)&&!this._shouldInputLoseFocus(r,e))return!1;var i=(0,o.findScrollableParent)(r);if(!i)return!1;var n=-1,s=void 0,a=-1,l=-1,u=i.clientHeight,c=r.getBoundingClientRect();do{if(r=e?(0,o.getNextElement)(this._root.current,r):(0,o.getPreviousElement)(this._root.current,r)){var h=r.getBoundingClientRect(),m=Math.floor(h.top),d=Math.floor(c.bottom),p=Math.floor(h.bottom),f=Math.floor(c.top),_=this._getHorizontalDistanceFromCenter(e,c,h);if(e&&m>d+u||!e&&p<f-u)break;_>-1&&(e&&m>a?(a=m,n=_,s=r):!e&&p<l?(l=p,n=_,s=r):(-1===n||_<=n)&&(n=_,s=r))}}while(r);var v=!1;if(s&&s!==this._activeElement)v=!0,this.focusElement(s),this._setFocusAlignment(s,!1,!0);else if(this.props.isCircularNavigation&&t)return e?this.focusElement((0,o.getNextElement)(this._root.current,this._root.current.firstElementChild,!0)):this.focusElement((0,o.getPreviousElement)(this._root.current,this._root.current.lastElementChild,!0,!0,!0));return v}_setFocusAlignment(e,t,r){if(this.props.direction===o.FocusZoneDirection.bidirectional&&(!this._focusAlignment||t||r)){var i=e.getBoundingClientRect(),n=i.left+i.width/2,s=i.top+i.height/2;this._focusAlignment||(this._focusAlignment={left:n,top:s}),t&&(this._focusAlignment.left=n),r&&(this._focusAlignment.top=s)}}_isImmediateDescendantOfZone(e){return this._getOwnerZone(e)===this._root.current}_getOwnerZone(e){for(var t=(0,o.getParent)(e,f);t&&t!==this._root.current&&t!==this._getDocument().body;){if((0,o.isElementFocusZone)(t))return t;t=(0,o.getParent)(t,f)}return t}_updateTabIndexes(e){var t=this.props.tabIndex?this.props.tabIndex.toString():"0";!this._activeElement&&this.props.defaultTabbableElement&&"function"==typeof this.props.defaultTabbableElement&&(this._activeElement=this.props.defaultTabbableElement(this._root.current)),!e&&this._root.current&&(this._defaultFocusElement=null,e=this._root.current,this._activeElement&&!(0,o.elementContains)(e,this._activeElement)&&(this._activeElement=null)),this._activeElement&&!(0,o.isElementTabbable)(this._activeElement)&&(this._activeElement=null);for(var r=e&&e.children,i=0;r&&i<r.length;i++){var s=r[i];(0,o.isElementFocusZone)(s)?"true"===s.getAttribute(n)&&(this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==s?"-1"!==s.getAttribute(a)&&s.setAttribute(a,"-1"):(this._defaultFocusElement=s,s.getAttribute(a)!==t&&s.setAttribute(a,t))):(s.getAttribute&&"false"===s.getAttribute(n)&&s.setAttribute(a,"-1"),(0,o.isElementTabbable)(s)?this.props.disabled?s.setAttribute(a,"-1"):this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==s?"-1"!==s.getAttribute(a)&&s.setAttribute(a,"-1"):(this._defaultFocusElement=s,s.getAttribute(a)!==t&&s.setAttribute(a,t)):"svg"===s.tagName&&"false"!==s.getAttribute("focusable")&&s.setAttribute("focusable","false")),this._updateTabIndexes(s)}}_isContentEditableElement(e){return e&&"true"===e.getAttribute("contenteditable")}_isElementInput(e){return!(!e||!e.tagName||"input"!==e.tagName.toLowerCase()&&"textarea"!==e.tagName.toLowerCase())}_shouldInputLoseFocus(e,t){if(!this._processingTabKey&&e&&e.type&&p.indexOf(e.type.toLowerCase())>-1){var r=e.selectionStart,o=r!==e.selectionEnd,i=e.value,n=e.readOnly;if(o||r>0&&!t&&!n||r!==i.length&&t&&!n||this.props.handleTabKey&&(!this.props.shouldInputLoseFocusOnArrowKey||!this.props.shouldInputLoseFocusOnArrowKey(e)))return!1}return!0}_shouldWrapFocus(e,t){return!this.props.checkForNoWrap||(0,o.shouldWrapFocus)(e,t)}_portalContainsElement(e){return e&&!!this._root.current&&(0,o.portalContainsElement)(e,this._root.current)}_getDocument(){return(0,o.getDocument)(this._root.current)}}_.defaultProps={isCircularNavigation:!1,direction:o.FocusZoneDirection.bidirectional,shouldRaiseClicks:!0};var v=(0,o.memoizeFunction)((e=>{var t={height:"100%"},r={whiteSpace:"nowrap"},o=e||{},{root:i,label:n}=o,s=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]])}return r}(o,["root","label"]);return Object.assign(Object.assign({},s),{root:i?[t,i]:t,label:n?[r,n]:r})})),g=(0,o.classNamesFunction)();class b extends r.Component{constructor(e){super(e),this._overflowSet=r.createRef(),this._resizeGroup=r.createRef(),this._onRenderData=e=>{var{ariaLabel:t,primaryGroupAriaLabel:i,farItemsGroupAriaLabel:n}=this.props,s=e.farItems&&e.farItems.length>0;return r.createElement(_,{className:(0,o.css)(this._classNames.root),direction:o.FocusZoneDirection.horizontal,role:"menubar","aria-label":t,tabIndex:this.props.tabIndex,shouldFocusInnerElementWhenReceivedFocus:!0},r.createElement(o.OverflowSet,{role:s?"group":"none","aria-label":s?i:void 0,componentRef:this._overflowSet,className:(0,o.css)(this._classNames.primarySet),items:e.primaryItems,overflowItems:e.overflowItems.length?e.overflowItems:void 0,onRenderItem:this._onRenderItem,onRenderOverflowButton:this._onRenderOverflowButton}),s&&r.createElement(o.OverflowSet,{role:"group","aria-label":n,className:(0,o.css)(this._classNames.secondarySet),items:e.farItems,onRenderItem:this._onRenderItem,onRenderOverflowButton:o.nullRender}))},this._onRenderItem=e=>{if(e.onRender)return e.onRender(e,(()=>{}));var t=e.text||e.name,i=Object.assign(Object.assign({allowDisabledFocus:!0,role:"menuitem"},e),{styles:v(e.buttonStyles),className:(0,o.css)("ms-CommandBarItem-link",e.className),text:e.iconOnly?void 0:t,menuProps:e.subMenuProps,onClick:this._onButtonClick(e)});return e.iconOnly&&(void 0!==t||e.tooltipHostProps)?r.createElement(o.TooltipHost,Object.assign({role:"none",content:t,setAriaDescribedBy:!1},e.tooltipHostProps),this._commandButton(e,i)):this._commandButton(e,i)},this._commandButton=(e,t)=>{var i=this.props.buttonAs,n=e.commandBarButtonAs,s=o.CommandBarButton;return n&&(s=(0,o.composeComponentAs)(n,s)),i&&(s=(0,o.composeComponentAs)(i,s)),r.createElement(s,Object.assign({},t))},this._onRenderOverflowButton=e=>{var{overflowButtonProps:t={}}=this.props,i=[...t.menuProps?t.menuProps.items:[],...e],n=Object.assign(Object.assign({role:"menuitem"},t),{styles:Object.assign({menuIcon:{fontSize:"17px"}},t.styles),className:(0,o.css)("ms-CommandBar-overflowButton",t.className),menuProps:Object.assign(Object.assign({},t.menuProps),{items:i}),menuIconProps:Object.assign({iconName:"More"},t.menuIconProps)}),s=this.props.overflowButtonAs?(0,o.composeComponentAs)(this.props.overflowButtonAs,o.CommandBarButton):o.CommandBarButton;return r.createElement(s,Object.assign({},n))},this._onReduceData=e=>{var{shiftOnReduce:t,onDataReduced:r}=this.props,{primaryItems:o,overflowItems:i,cacheKey:n}=e,s=o[t?0:o.length-1];if(void 0!==s){s.renderedInOverflow=!0,i=[s,...i],o=t?o.slice(1):o.slice(0,-1);var a=Object.assign(Object.assign({},e),{primaryItems:o,overflowItems:i});return n=this._computeCacheKey({primaryItems:o,overflow:i.length>0}),r&&r(s),a.cacheKey=n,a}},this._onGrowData=e=>{var{shiftOnReduce:t,onDataGrown:r}=this.props,{minimumOverflowItems:o}=e,{primaryItems:i,overflowItems:n,cacheKey:s}=e,a=n[0];if(void 0!==a&&n.length>o){a.renderedInOverflow=!1,n=n.slice(1),i=t?[a,...i]:[...i,a];var l=Object.assign(Object.assign({},e),{primaryItems:i,overflowItems:n});return s=this._computeCacheKey({primaryItems:i,overflow:n.length>0}),r&&r(a),l.cacheKey=s,l}},(0,o.initializeComponentRef)(this)}render(){var{items:e,overflowItems:t,farItems:i,styles:n,theme:s,dataDidRender:a,onReduceData:l=this._onReduceData,onGrowData:u=this._onGrowData,resizeGroupAs:c=o.ResizeGroup}=this.props,h={primaryItems:[...e],overflowItems:[...t],minimumOverflowItems:[...t].length,farItems:i,cacheKey:this._computeCacheKey({primaryItems:[...e],overflow:t&&t.length>0})};this._classNames=g(n,{theme:s});var m=(0,o.getNativeProps)(this.props,o.divProperties);return r.createElement(c,Object.assign({},m,{componentRef:this._resizeGroup,data:h,onReduceData:l,onGrowData:u,onRenderData:this._onRenderData,dataDidRender:a,tabIndex:void 0}))}focus(){var{current:e}=this._overflowSet;e&&e.focus()}remeasure(){this._resizeGroup.current&&this._resizeGroup.current.remeasure()}_onButtonClick(e){return t=>{e.inactive||e.onClick&&e.onClick(t,e)}}_computeCacheKey(e){var{primaryItems:t,overflow:r}=e;return[t&&t.reduce(((e,t)=>{var{cacheKey:r=t.key}=t;return e+r}),""),r?"overflow":""].join("")}}b.defaultProps={items:[],overflowItems:[]};var I=(0,o.styled)(b,(e=>{var{className:t,theme:r}=e,{semanticColors:o}=r;return{root:[r.fonts.medium,"ms-CommandBar",{display:"flex",backgroundColor:o.bodyBackground,padding:"0 14px 0 24px",height:44},t],primarySet:["ms-CommandBar-primaryCommand",{flexGrow:"1",display:"flex",alignItems:"stretch"}],secondarySet:["ms-CommandBar-secondaryCommand",{flexShrink:"0",display:"flex",alignItems:"stretch"}]}}),void 0,{scope:"CommandBar"}),E=void 0;try{E=window}catch(e){}function y(e){if(void 0!==E){var t=e;return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:E}}var F=function(){function e(e,t){this._timeoutIds=null,this._immediateIds=null,this._intervalIds=null,this._animationFrameIds=null,this._isDisposed=!1,this._parent=e||null,this._onErrorHandler=t,this._noop=function(){}}return e.prototype.dispose=function(){var e;if(this._isDisposed=!0,this._parent=null,this._timeoutIds){for(e in this._timeoutIds)this._timeoutIds.hasOwnProperty(e)&&this.clearTimeout(parseInt(e,10));this._timeoutIds=null}if(this._immediateIds){for(e in this._immediateIds)this._immediateIds.hasOwnProperty(e)&&this.clearImmediate(parseInt(e,10));this._immediateIds=null}if(this._intervalIds){for(e in this._intervalIds)this._intervalIds.hasOwnProperty(e)&&this.clearInterval(parseInt(e,10));this._intervalIds=null}if(this._animationFrameIds){for(e in this._animationFrameIds)this._animationFrameIds.hasOwnProperty(e)&&this.cancelAnimationFrame(parseInt(e,10));this._animationFrameIds=null}},e.prototype.setTimeout=function(e,t){var r=this,o=0;return this._isDisposed||(this._timeoutIds||(this._timeoutIds={}),o=setTimeout((function(){try{r._timeoutIds&&delete r._timeoutIds[o],e.apply(r._parent)}catch(e){r._logError(e)}}),t),this._timeoutIds[o]=!0),o},e.prototype.clearTimeout=function(e){this._timeoutIds&&this._timeoutIds[e]&&(clearTimeout(e),delete this._timeoutIds[e])},e.prototype.setImmediate=function(e,t){var r=this,o=0,i=y(t);return this._isDisposed||(this._immediateIds||(this._immediateIds={}),o=i.setTimeout((function(){try{r._immediateIds&&delete r._immediateIds[o],e.apply(r._parent)}catch(e){r._logError(e)}}),0),this._immediateIds[o]=!0),o},e.prototype.clearImmediate=function(e,t){var r=y(t);this._immediateIds&&this._immediateIds[e]&&(r.clearTimeout(e),delete this._immediateIds[e])},e.prototype.setInterval=function(e,t){var r=this,o=0;return this._isDisposed||(this._intervalIds||(this._intervalIds={}),o=setInterval((function(){try{e.apply(r._parent)}catch(e){r._logError(e)}}),t),this._intervalIds[o]=!0),o},e.prototype.clearInterval=function(e){this._intervalIds&&this._intervalIds[e]&&(clearInterval(e),delete this._intervalIds[e])},e.prototype.throttle=function(e,t,r){var o=this;if(this._isDisposed)return this._noop;var i,n,s=t||0,a=!0,l=!0,u=0,c=null;r&&"boolean"==typeof r.leading&&(a=r.leading),r&&"boolean"==typeof r.trailing&&(l=r.trailing);var h=function t(r){var h=Date.now(),m=h-u,d=a?s-m:s;return m>=s&&(!r||a)?(u=h,c&&(o.clearTimeout(c),c=null),i=e.apply(o._parent,n)):null===c&&l&&(c=o.setTimeout(t,d)),i};return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n=e,h(!0)}},e.prototype.debounce=function(e,t,r){var o=this;if(this._isDisposed){var i=function(){};return i.cancel=function(){},i.flush=function(){return null},i.pending=function(){return!1},i}var n,s,a=t||0,l=!1,u=!0,c=null,h=0,m=Date.now(),d=null;r&&"boolean"==typeof r.leading&&(l=r.leading),r&&"boolean"==typeof r.trailing&&(u=r.trailing),r&&"number"==typeof r.maxWait&&!isNaN(r.maxWait)&&(c=r.maxWait);var p=function(e){d&&(o.clearTimeout(d),d=null),m=e},f=function(t){p(t),n=e.apply(o._parent,s)},_=function e(t){var r=Date.now(),i=!1;t&&(l&&r-h>=a&&(i=!0),h=r);var s=r-h,p=a-s,_=r-m,v=!1;return null!==c&&(_>=c&&d?v=!0:p=Math.min(p,c-_)),s>=a||v||i?f(r):null!==d&&t||!u||(d=o.setTimeout(e,p)),n},v=function(){return!!d},g=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s=e,_(!0)};return g.cancel=function(){v()&&p(Date.now())},g.flush=function(){return v()&&f(Date.now()),n},g.pending=v,g},e.prototype.requestAnimationFrame=function(e,t){var r=this,o=0,i=y(t);if(!this._isDisposed){this._animationFrameIds||(this._animationFrameIds={});var n=function(){try{r._animationFrameIds&&delete r._animationFrameIds[o],e.apply(r._parent)}catch(e){r._logError(e)}};o=i.requestAnimationFrame?i.requestAnimationFrame(n):i.setTimeout(n,0),this._animationFrameIds[o]=!0}return o},e.prototype.cancelAnimationFrame=function(e,t){var r=y(t);this._animationFrameIds&&this._animationFrameIds[e]&&(r.cancelAnimationFrame?r.cancelAnimationFrame(e):r.clearTimeout(e),delete this._animationFrameIds[e])},e.prototype._logError=function(e){this._onErrorHandler&&this._onErrorHandler(e)},e}();function w(e){return{id:e,key:e,name:"Item "+e,iconName:"Unknown"}}function C(e,t,r){return e.filter((e=>!e.parentItemKey&&!1!==e.visible)).map((o=>D(e,o,t,r)))}function D(e,t,r,o){var i=e.filter((e=>e.parentItemKey===t.key&&!1!==e.visible)).map((t=>D(e,t,r,o)));return{key:t.key,text:t.name,disabled:!1===t.enabled||r,onClick:o,iconOnly:!0===t.iconOnly,iconProps:{iconName:t.iconName,styles:{root:{color:t.iconColor}}},checked:t.checked,data:t,buttonStyles:{root:{background:"rgba(255, 255, 255,0)"}},subMenuProps:i.length>0?{items:i}:void 0}}var A={ariaLabel:"More commands"},x=r.memo((e=>{var{items:t,height:i,disabled:n,onSelected:s,tabIndex:a,ariaLabel:l,setFocus:u,themeJSON:c}=e,h=r.useCallback(((e,t)=>(s(null==t?void 0:t.data),!0)),[s]),m=r.useMemo((()=>{var e=!0===n;return{rootItems:C(t.filter((e=>!0!==e.farItem&&!0!==e.overflow)),e,h),farItems:C(t.filter((e=>!0===e.farItem&&!0!==e.overflow)),e,h),overflowItems:C(t.filter((e=>!0===e.overflow)),e,h)}}),[t,n,h]),d=r.useMemo((()=>({root:{height:i,paddingLeft:0,background:"rgba(255, 255, 255,0)"}})),[i]),p=r.useMemo((()=>{try{return c?(0,o.createTheme)(JSON.parse(c)):void 0}catch(e){console.error("Cannot parse theme",e)}}),[c]),f=r.useRef(null),_=function(){var e,t,o=(e=function(){return new F},void 0===(t=r.useRef()).current&&(t.current={value:e()}),t.current.value);return r.useEffect((function(){return function(){return o.dispose()}}),[o]),o}();return r.useEffect((()=>{u&&""!==u&&_.requestAnimationFrame((()=>{var e=f.current.getElementsByTagName("button");e&&e.length>0&&e[0].focus()}))}),[u,f,_]),r.createElement(o.ThemeProvider,{applyTo:"none",theme:p,ref:f},r.createElement(I,{className:"PowerCATCommandBar",tabIndex:a,styles:d,items:m.rootItems,overflowItems:m.overflowItems,overflowButtonProps:A,farItems:m.farItems,ariaLabel:l||"Command Bar"}))}));x.displayName="CanvasCommandBar";class O{constructor(){this.isTestHarness=!1,this.focusKey="",this.onSelect=e=>{e&&e.data&&this.context.parameters.items.openDatasetItem(e.data.getNamedReference())}}init(e,t){this.notifyOutputChanged=t,this.context=e,this.context.mode.trackContainerResize(!0),this.context.parameters.items.paging.setPageSize(500)}updateView(e){var t,o,i=this.context.parameters.InputEvent.raw;i&&this.inputEvent!==i&&i.startsWith("SetFocus")&&(this.focusKey=i);var n=e.parameters.items;(e.updatedProperties.indexOf("dataset")>-1||!this.items)&&(this.items=function(e){return e.error||void 0===e.paging.totalResultCount?[w("1"),w("2"),w("3")]:e.sortedRecordIds.map((t=>{var r=e.records[t];return{id:r.getRecordId(),key:r.getValue("ItemKey"),name:r.getValue("ItemDisplayName"),enabled:r.getValue("ItemEnabled"),iconName:r.getValue("ItemIconName"),iconColor:r.getValue("ItemIconColor"),farItem:r.getValue("ItemFarItem"),overflow:r.getValue("ItemOverflow"),parentItemKey:r.getValue("ItemParentKey"),iconOnly:r.getValue("ItemIconOnly"),checked:r.getValue("ItemChecked"),visible:r.getValue("ItemVisible"),data:r}}))}(n));var s=parseInt(e.mode.allocatedWidth),a=parseInt(e.mode.allocatedHeight),l={tabIndex:null!==(o=null===(t=e.accessibility)||void 0===t?void 0:t.assignedTabIndex)&&void 0!==o?o:void 0,width:s,height:a,items:this.items,onSelected:this.onSelect,disabled:e.mode.isControlDisabled,setFocus:this.focusKey,themeJSON:e.parameters.ThemeJSON.raw};return r.createElement(x,l)}getOutputs(){return{}}destroy(){}}pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=t})();
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.CommandBar', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CommandBar);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.CommandBar = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CommandBar;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}