var iOSvhFix = new function () {
  var me = this,
    iosViewportHeightEl,
    realViewportHeightEl,
    styleEl;

  // from https://github.com/rodneyrehm/viewport-units-buggyfill/blob/master/viewport-units-buggyfill.js
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      var callback = function() {
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(callback, wait);
    };
  }


  me.setCSSVariables = function () {

    requestAnimationFrame(function () {
      styleEl.textContent = `
        body { 
          --iOS-vh-fix--vh: ${iosViewportHeightEl.offsetHeight}px;
          --iOS-vh-fix--chrome-height: ${realViewportHeightEl.offsetHeight - iosViewportHeightEl.offsetHeight}px;
        }`
      iosViewportHeightEl.innerHTML = (`${iosViewportHeightEl.offsetHeight}, ${realViewportHeightEl.offsetHeight}`);  
    });
  }

  me.init = function () {
    styleEl = document.createElement('style');
    styleEl.id = 'iOS-vh-fix-styles';
    document.head.appendChild(styleEl);

    iosViewportHeightEl = document.createElement('div');
    iosViewportHeightEl.className = 'iOS-vh-fix--iOS-viewport';

    realViewportHeightEl = document.createElement('div');
    realViewportHeightEl.className = 'iOS-vh-fix--real-viewport';
    
    document.body.appendChild(iosViewportHeightEl);
    document.body.appendChild(realViewportHeightEl);

    me.setCSSVariables();
    
    
    window.addEventListener('scroll', debounce(me.setCSSVariables, 150));
  }
}

iOSvhFix.init();